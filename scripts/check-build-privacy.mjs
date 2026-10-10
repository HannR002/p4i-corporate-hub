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
let traceCount = 0;
for (const file of artifacts) {
  if (file.endsWith('.nft.json')) {
    traceCount++;
    const trace = JSON.parse(await readFile(file, 'utf8'));
    for (const dependency of trace.files ?? []) {
      if (/(?:^|\/)(?:private|_source)\//.test(dependency)) {
        throw new Error('Build trace memuat sumber/media privat.');
      }
    }
  }
  if (/magang[^/]*\.(?:webp|jpe?g|png)$/i.test(path.basename(file))) {
    throw new Error('Build memuat berkas foto magang.');
  }
  if (file.startsWith('.next/static/') && file.endsWith('.map')) {
    throw new Error('Source map browser ditemukan dalam build publik.');
  }
}
if (traceCount === 0) throw new Error('Tidak ada trace build untuk diverifikasi; jalankan build terlebih dahulu.');
console.log(`${traceCount} trace diperiksa; tidak ada media/sumber privat atau source map browser pada artifact.`);
