import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { spawn, spawnSync } from 'node:child_process';
import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';

const originalFlags = await readFile('lib/features.ts', 'utf8');
const originalTsconfig = await readFile('tsconfig.json', 'utf8');
const environment = { ...process.env, P4I_MATRIX_BUILD: '1', NEXT_TELEMETRY_DISABLED: '1' };
const results = [];
let server;
let browser;
try {
  const alternate = originalFlags.replace(/: true/g, ': false').replace('consulting: false', 'consulting: true');
  assert.notEqual(alternate, originalFlags);
  await writeFile('lib/features.ts', alternate);
  const build = spawnSync('npm', ['run', 'build'], { env: environment, stdio: 'inherit' });
  assert.equal(build.status, 0, 'Alternative build failed');
  server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', '3101'], {
    env: environment, stdio: 'inherit',
  });
  const origin = 'http://127.0.0.1:3101';
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) throw new Error('Matrix server exited before readiness');
    try { ready = (await fetch(origin)).ok; } catch { /* startup probe */ }
    if (ready) break;
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  assert.ok(ready, 'Matrix server did not become ready');
  for (const route of ['/program', '/publisher', '/rekam-jejak', '/kegiatan', '/magang',
    '/journal', '/journal/example?lang=id', '/journal/cover.jpg']) {
    const response = await fetch(origin + route, { redirect: 'manual' });
    assert.equal(response.status, 404, route);
    results.push({ check: route, expected: 404, actual: response.status });
  }
  const consulting = await fetch(`${origin}/layanan/konsultasi`);
  assert.equal(consulting.status, 200);
  assert.ok((await consulting.text()).includes('Informasi Konsultasi P4I'));
  results.push({ check: 'enabled consulting content', passed: true });
  const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
  for (const route of ['/program', '/publisher', '/rekam-jejak', '/kegiatan', '/magang']) {
    assert.ok(!sitemap.includes(route), route);
  }
  assert.ok(sitemap.includes('/layanan/konsultasi'));
  results.push({ check: 'filtered sitemap', passed: true });
  let executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;
  if (!executablePath) {
    try { await access('/usr/bin/chromium'); executablePath = '/usr/bin/chromium'; } catch { /* Playwright browser */ }
  }
  browser = await chromium.launch({ executablePath });
  const page = await browser.newPage();
  await page.goto(origin);
  for (const route of ['/program', '/publisher', '/rekam-jejak', '/kegiatan', '/magang']) {
    assert.equal(await page.locator(`a[href="${route}"]`).count(), 0, route);
  }
  assert.equal(await page.locator('a[href*="journal.p4ijournal.org"], a[href*="publisher.p4ijournal.org"]').count(), 0);
  assert.ok(await page.locator('a[href="/layanan/konsultasi"]').count() > 0);
  results.push({ check: 'filtered navigation/cards/platform links', passed: true });
  const media = await fetch(`${origin}/archive/p4i/magang/magang-smk-adhiyaksa-bogor-2026-01.webp`);
  assert.equal(media.status, 404);
  assert.equal(media.headers.get('cache-control'), 'private, no-store');
  results.push({ check: 'media remains denied when internship disabled', passed: true });
  const output = process.env.P4I_VERIFICATION_DIR ?? 'test-results';
  await mkdir(output, { recursive: true });
  await writeFile(`${output}/feature-matrix.json`, `${JSON.stringify({
    checked_at_utc: new Date().toISOString(), checks: results.length, results,
  }, null, 2)}\n`);
  console.log(`${results.length} alternative build feature checks passed.`);
} finally {
  await browser?.close();
  if (server && server.exitCode === null) {
    server.kill('SIGTERM');
    await new Promise((resolve) => server.once('exit', resolve));
  }
  await writeFile('lib/features.ts', originalFlags);
  await writeFile('tsconfig.json', originalTsconfig);
}
