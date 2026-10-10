import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getVisibleRoutes } from '../lib/routes';
import { internshipProgram } from '../data/internship';

test('nonce responses cannot be shared cached and ignore attacker-supplied nonce/CSP headers', async ({ request }) => {
  const responses = await Promise.all(Array.from({ length: 4 }, () => request.get('/', {
    headers: { 'x-nonce': 'attacker-nonce', 'Content-Security-Policy': "script-src 'unsafe-inline'" },
  })));
  const nonces: string[] = [];
  for (const response of responses) {
    expect(response.status()).toBe(200);
    const headers = response.headers();
    expect(headers['cache-control']).toContain('no-store');
    expect(headers['cache-control']).toContain('private');
    expect(headers['cache-control']).not.toContain('s-maxage');
    expect(headers['cdn-cache-control']).toBe('no-store');
    expect(headers['vercel-cdn-cache-control']).toBe('no-store');
    const policy = headers['content-security-policy'];
    expect(policy).not.toMatch(/attacker-nonce|unsafe-eval/);
    const nonce = policy.match(/'nonce-([^']+)'/)?.[1];
    expect(nonce).toBeTruthy();
    nonces.push(String(nonce));
    const html = await response.text();
    const actual = [...html.matchAll(/<script\b[^>]*\bnonce="([^"]+)"/g)].map((match) => match[1]);
    expect(actual.length).toBeGreaterThan(1);
    expect(actual.every((value) => value === nonce)).toBe(true);
    expect(headers['x-content-type-options']).toBe('nosniff');
    expect(headers['x-frame-options']).toBe('DENY');
    expect(headers['permissions-policy']).toContain('camera=()');
  }
  expect(new Set(nonces).size).toBe(4);
});

test('alternate private/source paths, HTTP methods, traversal, and optimizer variants do not disclose media', async ({ request }) => {
  const filename = internshipProgram.gallery[0].image.split('/').at(-1);
  for (const url of [`/private/media/magang/${filename}`, '/_source/', '/.env', '/.git/config',
    `/archive/p4i/magang/${filename}?download=1`, `/archive/p4i/magang/%2e%2e%2f${filename}`]) {
    const response = await request.get(url);
    expect(response.status()).toBe(404);
    expect(response.headers()['content-type']).not.toBe('image/webp');
  }
  const head = await request.head(internshipProgram.gallery[0].image);
  expect(head.status()).toBe(404);
  expect(head.headers()['cache-control']).toContain('no-store');
  expect((await request.post(internshipProgram.gallery[0].image)).status()).toBe(405);
  for (const url of [internshipProgram.gallery[0].image, `/private/media/magang/${filename}`,
    'https://storage.example.invalid/private.webp']) {
    expect((await request.get(`/_next/image?url=${encodeURIComponent(url)}&w=640&q=75`)).status()).toBe(400);
  }
});

test('untrusted query content is not executed or emitted as unsafe HTML', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(`/?search=${encodeURIComponent('<script>window.__xss=true</script>')}`);
  expect(await page.evaluate(() => '__xss' in window)).toBe(false);
  expect(await page.content()).not.toContain('<script>window.__xss=true</script>');
  expect(errors).toEqual([]);
});

test('all public routes fit mobile, tablet, and desktop viewports', async ({ page }) => {
  for (const width of [360, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of getVisibleRoutes()) {
      await page.goto(route.path);
      await expect(page.locator('h1')).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), `${route.path} at ${width}`).toBe(true);
    }
  }
});

test('public pages and both open dialogs pass basic WCAG A/AA automated checks', async ({ page }) => {
  test.setTimeout(120_000);
  for (const route of getVisibleRoutes()) {
    await page.goto(route.path);
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
    expect(result.violations.map((item) => ({ id: item.id, nodes: item.nodes.map((node) => node.target) })), route.path).toEqual([]);
  }
  await page.goto('/');
  await page.getByRole('button', { name: 'Hubungi P4I', exact: true }).click();
  expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()).violations).toEqual([]);
  await page.keyboard.press('Escape');
  await page.goto('/rekam-jejak');
  await page.getByRole('button', { name: /^Perbesar arsip:/ }).first().click();
  expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()).violations).toEqual([]);
});

test('expert carousel can be scrolled with the keyboard and reset by category selection', async ({ page }) => {
  await page.goto('/tentang');
  const carousel = page.getByRole('region', { name: 'Daftar ahli; gunakan tombol panah untuk menggeser' });
  await carousel.focus();
  await expect(carousel).toBeFocused();
  await page.keyboard.press('ArrowRight');
  await expect.poll(() => carousel.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
  await page.getByRole('button', { name: 'Wilayah & Tata Ruang', exact: true }).click();
  await expect.poll(() => carousel.evaluate((element) => element.scrollLeft)).toBe(0);
});
