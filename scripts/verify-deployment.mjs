// Read-only smoke check. Does not deploy, purge caches, upload objects, or change provider configuration.
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const origin = new URL(process.argv[2]);
if (origin.protocol !== 'https:' || origin.username || origin.password || origin.search || origin.hash || origin.pathname !== '/') {
  throw new Error('Supply an HTTPS origin without credentials, query, or path.');
}
const headers = {};
if (process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
  headers['x-vercel-protection-bypass'] = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
}
const get = (pathname) => fetch(new URL(pathname, origin), {
  headers, redirect: 'manual', signal: AbortSignal.timeout(15_000),
});
const output = process.env.P4I_VERIFICATION_DIR ?? 'test-results';
const result = { checked_at_utc: new Date().toISOString(), status: 'pending', checks: [] };
try {
  const first = await get('/');
  const html = await first.text();
  if (first.status !== 200 || !html.includes('id="json-ld"')) {
    result.status = 'blocked';
    result.reason = 'Application HTML unavailable; deployment protection or provider response, not a passing application check.';
    result.http_status = first.status;
    process.exitCode = 2;
  } else {
    const nonce = first.headers.get('content-security-policy')?.match(/'nonce-([^']+)'/)?.[1];
    assert.ok(nonce, 'Missing CSP nonce');
    assert.ok(!first.headers.get('content-security-policy')?.includes('unsafe-eval'));
    assert.ok(first.headers.get('cache-control')?.includes('no-store'));
    assert.notEqual(first.headers.get('x-vercel-cache'), 'HIT', 'Nonce HTML served from shared cache');
    const actual = [...html.matchAll(/<script\b[^>]*\bnonce="([^"]+)"/g)].map((match) => match[1]);
    assert.ok(actual.length > 1 && actual.every((value) => value === nonce));
    const second = await get('/');
    assert.notEqual(second.headers.get('content-security-policy')?.match(/'nonce-([^']+)'/)?.[1], nonce);
    result.checks.push({ check: 'fresh nonce, matching scripts, uncached HTML', passed: true });
    for (let number = 1; number <= 7; number++) {
      const pathname = `/archive/p4i/magang/magang-smk-adhiyaksa-bogor-2026-0${number}.webp`;
      const direct = await get(pathname);
      assert.equal(direct.status, 200);
      assert.equal(direct.headers.get('content-type'), 'image/webp');
      assert.ok(direct.headers.get('cache-control')?.includes('no-store'));
      assert.equal((await get(`/_next/image?url=${encodeURIComponent(pathname)}&w=640&q=75`)).status, 400);
    }
    result.checks.push({ check: 'seven owner-published images available; optimizer remains denied', passed: true });
    for (const pathname of ['/tentang', '/program', '/publisher', '/rekam-jejak', '/kegiatan',
      '/magang', '/kontak', '/kebijakan-privasi', '/syarat-ketentuan']) {
      assert.equal((await get(pathname)).status, 200);
    }
    assert.equal((await get('/layanan/konsultasi')).status, 404);
    result.checks.push({ check: 'default public/disabled routes', passed: true });
    const aboutHTML = await (await get('/tentang')).text();
    assert.ok(!aboutHTML.includes('Periode / Sumber:'));
    assert.ok(!aboutHTML.includes('Struktur terkini akan diperbarui'));
    const internshipHTML = await (await get('/magang')).text();
    assert.ok(!internshipHTML.includes('Perlindungan Privasi:'));
    assert.ok(!internshipHTML.includes('Dokumentasi visual hanya ditampilkan'));
    for (let number = 1; number <= 7; number++) {
      assert.ok(internshipHTML.includes(`magang-smk-adhiyaksa-bogor-2026-0${number}.webp`));
    }
    result.checks.push({ check: 'both notices removed; all seven images rendered in gallery', passed: true });
    result.status = 'passed';
  }
} catch (error) {
  // Never print provider URLs, request headers, protection secrets, or payloads.
  const networkBlocked = error instanceof TypeError || error?.name === 'TimeoutError';
  result.status = networkBlocked ? 'blocked' : 'failed';
  result.reason = networkBlocked ? 'Network/provider access unavailable; no application pass is claimed.' :
    'A deployment security/function assertion failed.';
  process.exitCode = networkBlocked ? 2 : 1;
} finally {
  await mkdir(output, { recursive: true });
  await writeFile(`${output}/deployment-smoke.json`, `${JSON.stringify(result, null, 2)}\n`);
  console.log(JSON.stringify(result));
}
