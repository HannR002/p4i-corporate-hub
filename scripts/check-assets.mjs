import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(file) : /\.[jt]sx?$/.test(file) ? [file] : [];
  }));
  return groups.flat();
}
async function exists(file) {
  try { await access(file); return true; } catch { return false; }
}
const failures = [];
const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0');
if (tracked.some((file) => /^(?:private|_source)\//.test(file))) {
  failures.push('Media privat/dokumen sumber tidak boleh tracked dalam repository publik.');
}
const assets = new Set();
for (const file of [...await sourceFiles('app'), ...await sourceFiles('data')]) {
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(/["'`]((?:\/archive\/|\/brand\/|\/icon\.|\/p4i-logo)[^"'`\s]*\.(?:webp|png|jpg|jpeg))["'`]/g)) {
    const asset = match[1];
    assets.add(asset);
    if (asset.startsWith('/archive/p4i/magang/')) {
      if (await exists(`public${asset}`)) failures.push(`${file}: foto magang masih di public: ${asset}`);
      // This is a logical object key, not an asset that belongs in the checkout/build.
    } else if (!await exists(`public${asset}`) && !await exists(`app${asset}`)) {
      failures.push(`${file}: aset hilang: ${asset}`);
    }
  }
}
const hash = createHash('sha256').update(await readFile('public/fonts/InterVariable.woff2')).digest('hex');
if (hash !== '693b77d4f32ee9b8bfc995589b5fad5e99adf2832738661f5402f9978429a8e3') failures.push('Checksum font Inter berbeda dari sumber versi 4.1.');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else console.log(`${assets.size} referensi aset valid; media privat di luar Git/public; checksum font benar.`);
