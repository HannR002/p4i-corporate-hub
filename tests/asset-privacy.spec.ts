import { test, expect } from '@playwright/test';
import { mkdtemp, mkdir, copyFile, writeFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

async function fixture() {
  const directory = await mkdtemp(path.join(tmpdir(), 'p4i-asset-privacy-'));
  for (const folder of ['app', 'data', 'public/fonts']) {
    await mkdir(path.join(directory, folder), { recursive: true });
  }
  await copyFile('public/fonts/InterVariable.woff2', path.join(directory, 'public/fonts/InterVariable.woff2'));
  expect(spawnSync('git', ['init', '--quiet'], { cwd: directory }).status).toBe(0);
  return directory;
}

function check(directory: string) {
  return spawnSync(process.execPath, [path.resolve('scripts/check-assets.mjs')], {
    cwd: directory, encoding: 'utf8',
  });
}

test('privacy gate rejects unreferenced public objects and symlinks before deployment', async () => {
  const directory = await fixture();
  try {
    expect(check(directory).status).toBe(0);
    for (const folder of ['public/archive/p4i/magang', 'public/private', 'public/_source']) {
      const target = path.join(directory, folder);
      await mkdir(target, { recursive: true });
      await writeFile(path.join(target, 'unlisted-synthetic.webp'), 'synthetic fixture, no personal data');
      const result = check(directory);
      expect(result.status).toBe(1);
      expect(result.stderr).toContain('tidak boleh ada di public');
      await rm(target, { recursive: true });
      // A dangling alias must also be rejected; access() would miss it.
      await symlink(path.join(directory, 'missing-private-storage'), target);
      expect(check(directory).status).toBe(1);
      await rm(target);
    }
    expect(check(directory).status).toBe(0);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test('privacy gate rejects staged private bytes even when absent from the working tree', async () => {
  const directory = await fixture();
  try {
    for (const folder of ['_source', 'private', 'public/archive/p4i/magang', 'public/private', 'public/_source']) {
      const target = path.join(directory, folder, 'synthetic.txt');
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, 'synthetic fixture, no personal data');
      expect(spawnSync('git', ['add', '--', target], { cwd: directory }).status).toBe(0);
      await rm(path.join(directory, folder), { recursive: true });
      const result = check(directory);
      expect(result.status).toBe(1);
      expect(result.stderr).toContain('tidak boleh tracked');
      expect(spawnSync('git', ['rm', '--cached', '--', target], { cwd: directory }).status).toBe(0);
    }
    expect(check(directory).status).toBe(0);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
