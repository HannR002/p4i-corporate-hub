import { test, expect } from '@playwright/test';
import { features, type Features } from '../lib/features';
import { getVisibleRoutes, isRouteVisible } from '../lib/routes';
import {
  visibleNavigation,
  mainNavigation,
  footerPublicationLinks,
  footerQuickLinks,
} from '../data/navigation';
import { isPlatformVisible } from '../data/platforms';
import { getPublicActivities } from '../data/activities';
import { internshipProgram } from '../data/internship';
import { getPublishedGallery } from '../lib/media-publication';
import { contentSecurityPolicy } from '../lib/security-policy';
import { GET } from '../app/archive/p4i/magang/[filename]/route';
import sharp from 'sharp';
import { mkdtemp, rm, readFile, symlink, link } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

test('feature switches control menus, sitemap registry, platform links, and activity previews', () => {
  const items = [...mainNavigation, ...footerQuickLinks, ...footerPublicationLinks];
  const disabled = Object.fromEntries(Object.keys(features).map((key) => [key, false])) as Features;
  expect(getVisibleRoutes(disabled).map((route) => route.path)).toEqual([
    '/',
    '/tentang',
    '/kontak',
    '/kebijakan-privasi',
    '/syarat-ketentuan',
  ]);
  expect(
    visibleNavigation(items, disabled).every(
      (item) => !item.external && isRouteVisible(item.href, disabled)
    )
  ).toBe(true);
  expect(isPlatformVisible('journal', disabled)).toBe(false);
  expect(isPlatformVisible('ebook', disabled)).toBe(false);
  expect(getPublicActivities(disabled)).toEqual([]);
  for (const flag of Object.keys(features) as (keyof Features)[]) {
    const flags = { ...features, [flag]: false };
    expect(
      visibleNavigation(items, flags).every((item) =>
        item.external ? !item.feature || flags[item.feature] : isRouteVisible(item.href, flags)
      )
    ).toBe(true);
    expect(getVisibleRoutes(flags).every((route) => isRouteVisible(route.path, flags))).toBe(true);
  }
  expect(isRouteVisible('/layanan/konsultasi', { ...features, consulting: true })).toBe(true);
  expect(isRouteVisible('/unknown')).toBe(false);
  const withoutInternship = getPublicActivities({ ...features, internship: false });
  expect(
    withoutInternship.some((item) => item.ctaLink === '/magang' || item.image?.includes('/magang/'))
  ).toBe(false);
});

test('both publication approvals and each image switch are required', () => {
  const gallery = [
    { enabled: true, image: 'approved' },
    { enabled: false, image: 'disabled' },
  ];
  for (const consent of [false, true])
    for (const publication of [false, true]) {
      const actual = getPublishedGallery({
        publicationConsentVerified: consent,
        publicationApprovedForWebsite: publication,
        gallery,
      });
      expect(actual.map((item) => item.image)).toEqual(consent && publication ? ['approved'] : []);
    }
  expect(getPublishedGallery(internshipProgram)).toEqual([]);
  expect(getPublicActivities().some((item) => item.image?.startsWith('/archive/p4i/magang/'))).toBe(
    false
  );
});

test('private media handler denies before approval, serves only curated enabled filenames after approval, and never caches', async () => {
  const filename = path.basename(internshipProgram.gallery[0].image);
  const call = (name: string) =>
    GET(new Request(`http://localhost/archive/p4i/magang/${name}`), {
      params: Promise.resolve({ filename: name }),
    });
  expect((await call(filename)).status).toBe(404);
  const originalConsent = internshipProgram.publicationConsentVerified;
  const originalEnabled = internshipProgram.gallery[0].enabled;
  const originalFetch = globalThis.fetch;
  const originalEndpoint = process.env.MEDIA_STORAGE_BASE_URL;
  const originalToken = process.env.MEDIA_STORAGE_READ_TOKEN;
  const fixture = await sharp({ create: { width: 2, height: 2, channels: 3, background: '#ffffff' } }).webp().toBuffer();
  try {
    process.env.MEDIA_STORAGE_BASE_URL = 'https://private-storage.example.invalid/objects/';
    process.env.MEDIA_STORAGE_READ_TOKEN = 'synthetic-test-token';
    globalThis.fetch = async () => new Response(fixture, { headers: { 'Content-Type': 'image/webp' } });
    internshipProgram.publicationConsentVerified = true; // Isolated test fixture; no source or permission record changed.
    const response = await call(filename);
    expect(response.status).toBe(200);
    expect(response.headers.get('cache-control')).toBe('private, no-store');
    expect(response.headers.get('content-type')).toBe('image/webp');
    expect(Buffer.from(await response.arrayBuffer())).toEqual(fixture);
    internshipProgram.gallery[0].enabled = false;
    expect((await call(filename)).status).toBe(404);
    expect((await call('../../package.json')).status).toBe(404);
    expect((await call('unlisted.webp')).status).toBe(404);
  } finally {
    internshipProgram.publicationConsentVerified = originalConsent;
    internshipProgram.gallery[0].enabled = originalEnabled;
    globalThis.fetch = originalFetch;
    if (originalEndpoint === undefined) delete process.env.MEDIA_STORAGE_BASE_URL;
    else process.env.MEDIA_STORAGE_BASE_URL = originalEndpoint;
    if (originalToken === undefined) delete process.env.MEDIA_STORAGE_READ_TOKEN;
    else process.env.MEDIA_STORAGE_READ_TOKEN = originalToken;
  }
});

test('production script policy requires nonce and excludes eval and inline execution', () => {
  const production = contentSecurityPolicy('test-nonce');
  const scripts = production.split('; ').find((item) => item.startsWith('script-src')) ?? '';
  expect(scripts).toContain("'nonce-test-nonce'");
  expect(scripts).toContain("'strict-dynamic'");
  expect(scripts).not.toContain('unsafe-inline');
  expect(scripts).not.toContain('unsafe-eval');
  expect(contentSecurityPolicy('dev', true)).toContain('unsafe-eval');
});

test('logo CLI fails on missing input and creates a transparent output without changing input', async () => {
  const directory = await mkdtemp(path.join(tmpdir(), 'p4i-logo-'));
  try {
    const input = path.join(directory, 'input.png');
    const output = path.join(directory, 'nested/output.png');
    const failure = spawnSync(process.execPath, [
      'scripts/process-logo.js',
      path.join(directory, 'missing.png'),
      output,
    ]);
    expect(failure.status).toBe(1);
    expect(failure.stderr.toString()).toContain('Gagal memproses logo');
    const pixels = Buffer.alloc(4 * 4 * 4, 255);
    // Dark center and one internal white pixel: trim still has visible bounds.
    for (const index of [5, 6, 9]) {
      pixels[index * 4] = 20;
      pixels[index * 4 + 1] = 30;
      pixels[index * 4 + 2] = 40;
    }
    await sharp(pixels, { raw: { width: 4, height: 4, channels: 4 } })
      .png()
      .toFile(input);
    const before = await readFile(input);
    const success = spawnSync(process.execPath, ['scripts/process-logo.js', input, output]);
    expect(success.status, success.stderr.toString()).toBe(0);
    const result = await sharp(output).raw().toBuffer({ resolveWithObject: true });
    expect(result.info.channels).toBe(4);
    expect(Array.from(result.data).filter((_, index) => index % 4 === 3)).toContain(0);
    expect(await readFile(input)).toEqual(before);
    expect(spawnSync(process.execPath, ['scripts/process-logo.js', input, input]).status).toBe(1);
    for (const [name, createAlias] of [['symlink.png', symlink], ['hardlink.png', link]] as const) {
      const alias = path.join(directory, name);
      await createAlias(input, alias);
      expect(spawnSync(process.execPath, ['scripts/process-logo.js', input, alias]).status).toBe(1);
      expect(await readFile(input)).toEqual(before);
    }
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
