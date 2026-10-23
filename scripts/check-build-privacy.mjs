import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? files(file) : [file];
  }));
  return nested.flat();
}

const artifacts = await files('.next');
const publicationDirectory = path.resolve('media/published/magang');
const publicationManifest = JSON.parse(await readFile(path.join(publicationDirectory, 'manifest.json'), 'utf8'));
const publishedFiles = new Set(Object.keys(publicationManifest.files).map((file) => path.join(publicationDirectory, file)));
const tracedPublications = new Set();
let traceCount = 0;
for (const file of artifacts) {
  if (file.endsWith('.nft.json')) {
    traceCount++;
    const trace = JSON.parse(await readFile(file, 'utf8'));
    for (const dependency of trace.files ?? []) {
      if (/(?:^|\/)(?:private|_source)\//.test(dependency)) {
        throw new Error('Build trace memuat sumber/media privat.');
      }
      const resolved = path.resolve(path.dirname(file), dependency);
      if (publishedFiles.has(resolved)) tracedPublications.add(resolved);
    }
  }
  if (/magang[^/]*\.(?:webp|jpe?g|png)$/i.test(path.basename(file)) &&
    (!file.includes('/media/published/magang/') || !Object.hasOwn(publicationManifest.files, path.basename(file)))) {
    throw new Error('Build memuat foto magang di luar manifest publikasi.');
  }
  if (file.startsWith('.next/static/') && file.endsWith('.map')) {
    throw new Error('Source map browser ditemukan dalam build publik.');
  }
}
if (traceCount === 0) throw new Error('Tidak ada trace build untuk diverifikasi; jalankan build terlebih dahulu.');
if (tracedPublications.size !== publishedFiles.size) throw new Error('Trace deployment tidak memuat seluruh media publikasi.');
console.log(`${traceCount} trace diperiksa; ${tracedPublications.size} foto publikasi terpaket; tidak ada sumber privat atau source map browser.`);
