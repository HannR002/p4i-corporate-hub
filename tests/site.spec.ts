import { test, expect, type Page } from '@playwright/test';
import { getVisibleRoutes } from '../lib/routes';
import { siteConfig } from '../lib/site-config';
import { internshipProgram } from '../data/internship';
import { contentUpdatedAt } from '../data/content-updates';

async function trapFocus(page: Page) {
  const dialog = page.getByRole('dialog');
  for (let index = 0; index < 10; index++) {
    await page.keyboard.press(index < 5 ? 'Tab' : 'Shift+Tab');
    expect(await dialog.evaluate((element) => element.contains(document.activeElement))).toBe(true);
  }
}

for (const route of getVisibleRoutes()) {
  test(`production route ${route.path} has matching metadata, stable hero, and no broken images or scripts`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    const response = await page.goto(route.path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(new URL(String(canonical)).href).toBe(new URL(route.path, siteConfig.metadataBase).href);
    const ogURL = await page.locator('meta[property="og:url"]').getAttribute('content');
    expect(new URL(String(ogURL)).href).toBe(new URL(route.path, siteConfig.metadataBase).href);
    if (!response) throw new Error('Missing navigation response');
    const policy = response.headers()['content-security-policy'];
    expect(policy).toBeTruthy();
    expect(policy.split(';').find((item) => item.includes('script-src'))).not.toMatch(
      /unsafe-inline|unsafe-eval/
    );
    // Force lazy images to load, including full historical gallery.
    await page.locator('img').evaluateAll((images) =>
      images.forEach((image) => {
        if (image instanceof HTMLImageElement) image.loading = 'eager';
      })
    );
    await expect
      .poll(() =>
        page
          .locator('img')
          .evaluateAll((images) =>
            images.every(
              (image) =>
                image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0
            )
          )
      )
      .toBe(true);
    expect(await page.locator('img[src*="magang"]').count()).toBe(0);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    ).toBe(true);
    expect(errors).toEqual([]);
  });
}

test('sitemap uses published dates and omits disabled consulting; legacy OJS redirects retain path/query', async ({
  request,
}) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  for (const route of getVisibleRoutes()) {
    expect(xml).toContain(new URL(route.path, siteConfig.metadataBase).href);
    if (contentUpdatedAt[route.path]) expect(xml).toContain(String(contentUpdatedAt[route.path]));
  }
  expect(xml).not.toContain('/layanan/konsultasi');
  expect((await request.get('/layanan/konsultasi')).status()).toBe(404);
  for (const suffix of [
    '/journal',
    '/journal/example/article/view/1?lang=id',
    '/journal/example/cover.jpg',
  ]) {
    const redirect = await request.get(suffix, { maxRedirects: 0 });
    expect(redirect.status()).toBe(308);
    expect(redirect.headers().location).toBe(`https://journal.p4ijournal.org${suffix}`);
  }
  const og = await request.get('/opengraph-image');
  expect(og.status()).toBe(200);
  expect(og.headers()['content-type']).toBe('image/png');
});

test('unapproved internship images cannot be downloaded directly or through optimizer', async ({
  request,
}) => {
  for (const image of internshipProgram.gallery) {
    const direct = await request.get(image.image);
    expect(direct.status()).toBe(404);
    expect(direct.headers()['cache-control']).toBe('private, no-store');
    const optimized = await request.get(
      `/_next/image?url=${encodeURIComponent(image.image)}&w=640&q=75`
    );
    expect(optimized.status()).toBe(400);
  }
  expect(
    (await request.get('/private/media/magang/magang-smk-adhiyaksa-bogor-2026-01.webp')).status()
  ).toBe(404);
});

test('contact dialog has a valid controls target, initial focus, focus trap, Escape and return focus', async ({
  page,
}) => {
  await page.goto('/');
  const launcher = page.getByRole('button', { name: 'Hubungi P4I', exact: true });
  await expect(page.locator('#contact-panel')).toHaveCount(1);
  await launcher.click();
  await expect(page.getByRole('button', { name: 'Tutup menu bantuan' })).toBeFocused();
  await trapFocus(page);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(launcher).toBeFocused();
  await launcher.click();
  await page.mouse.click(5, 5);
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(launcher).toBeFocused();
});

test('archive dialog traps focus and returns it to the exact trigger', async ({ page }) => {
  await page.goto('/rekam-jejak');
  const trigger = page.getByRole('button', { name: /^Perbesar arsip:/ }).first();
  await trigger.click();
  await expect(page.getByRole('button', { name: 'Tutup pratinjau arsip' })).toBeFocused();
  await trapFocus(page);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test('expert filtering distinguishes the historical archive and digital addition', async ({
  page,
}) => {
  await page.goto('/tentang');
  await expect(page.getByRole('heading', { name: 'Jejaring Keahlian P4I' })).toBeVisible();
  await page.getByRole('button', { name: 'Sistem Informasi & Digital', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Farhan Muhammad' })).toBeVisible();
  await expect(page.getByText('Jejaring digital tambahan · P4I Digital')).toBeVisible();
  await expect(page.getByText('Arsip 2014 · Profil Lembaga P4I')).toHaveCount(0);
  await page.getByRole('button', { name: 'Wilayah & Tata Ruang', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Farhan Muhammad' })).toHaveCount(0);
  await expect(page.getByText('Arsip 2014 · Profil Lembaga P4I')).toHaveCount(4);
});

test('hero remains visible without JavaScript and with reduced motion; font loads locally and analytics stays off', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  expect(await page.locator('h1').evaluate((element) => getComputedStyle(element).opacity)).toBe(
    '1'
  );
  expect(
    await page.locator('h1').evaluate((element) => getComputedStyle(element).animationName)
  ).toBe('none');
  await context.close();
  const regular = await browser.newContext({ reducedMotion: 'reduce' });
  const active = await regular.newPage();
  const requests: string[] = [];
  active.on('request', (request) => requests.push(request.url()));
  await active.goto('/');
  await active.evaluate(() => document.fonts.ready);
  expect(
    requests.some((url) =>
      /google-analytics|googletagmanager|fonts\.googleapis|fonts\.gstatic/.test(url)
    )
  ).toBe(false);
  expect(requests.some((url) => url.includes('/_next/static/') && url.includes('.woff2'))).toBe(
    true
  );
  expect((await regular.cookies()).some((cookie) => /^_ga/.test(cookie.name))).toBe(false);
  await regular.close();
});

test('mobile menu navigates and pages stay within a small viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Buka menu' }).click();
  await page.locator('nav').getByRole('link', { name: 'Program', exact: true }).click();
  await expect(page).toHaveURL(/\/program$/);
  await expect(page.getByRole('button', { name: 'Buka menu' })).toBeVisible();
  for (const path of ['/', '/tentang', '/kegiatan', '/magang', '/rekam-jejak']) {
    await page.goto(path);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    ).toBe(true);
  }
});

test('each response has a fresh nonce that authorizes actual Next.js scripts and JSON-LD', async ({
  page,
  request,
}) => {
  const response = await page.goto('/');
  if (!response) throw new Error('Missing navigation response');
  const firstPolicy = response.headers()['content-security-policy'];
  const firstNonce = firstPolicy.match(/'nonce-([^']+)'/)?.[1];
  expect(firstNonce).toBeTruthy();
  const second = await request.get('/');
  expect(second.headers()['content-security-policy']).not.toContain(`'nonce-${firstNonce}'`);
  const scriptNonces = await page
    .locator('script')
    .evaluateAll((scripts) =>
      scripts.map((script) => (script instanceof HTMLScriptElement ? script.nonce : ''))
    );
  expect(scriptNonces.length).toBeGreaterThan(1);
  expect(scriptNonces.every((nonce) => nonce === firstNonce)).toBe(true);
  const structured = JSON.parse((await page.locator('#json-ld').textContent()) ?? '{}');
  expect(structured['@graph'][1].name).toBe(siteConfig.legalName);
});
