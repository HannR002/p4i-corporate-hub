import { test, expect } from '@playwright/test';
import sharp from 'sharp';
import { internshipProgram } from '../data/internship';
import { features } from '../lib/features';
import { readPrivateMedia, mediaResponseHeaders } from '../lib/private-media-store';
import { GET } from '../app/archive/p4i/magang/[filename]/route';

const filename = 'magang-smk-adhiyaksa-bogor-2026-01.webp';
const originalFetch = globalThis.fetch;
const originalEndpoint = process.env.MEDIA_STORAGE_BASE_URL;
const originalToken = process.env.MEDIA_STORAGE_READ_TOKEN;
const originalConsent = internshipProgram.publicationConsentVerified;
const originalApproval = internshipProgram.publicationApprovedForWebsite;
const originalOwnerAuthorization = internshipProgram.publicationAuthorizedByOwner;
const originalEnabled = internshipProgram.gallery[0].enabled;
const originalFeature = features.internship;
let fixture: Buffer;
let calls: { url: string; init?: RequestInit }[];

const call = (name = filename) => GET(new Request('https://hub.example.invalid/'), {
  params: Promise.resolve({ filename: name }),
});

test.beforeAll(async () => {
  fixture = await sharp({ create: { width: 2, height: 2, channels: 3, background: '#ffffff' } })
    .webp().toBuffer();
});
test.beforeEach(() => {
  // Exercise the protected-storage mode independently of owner-published media.
  internshipProgram.publicationAuthorizedByOwner = false;
  process.env.MEDIA_STORAGE_BASE_URL = 'https://private-storage.example.invalid/objects/';
  process.env.MEDIA_STORAGE_READ_TOKEN = 'synthetic-read-token';
  calls = [];
  globalThis.fetch = async (url, init) => {
    calls.push({ url: String(url), init });
    return new Response(new Uint8Array(fixture), { headers: { 'Content-Type': 'image/webp' } });
  };
});
test.afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalEndpoint === undefined) delete process.env.MEDIA_STORAGE_BASE_URL;
  else process.env.MEDIA_STORAGE_BASE_URL = originalEndpoint;
  if (originalToken === undefined) delete process.env.MEDIA_STORAGE_READ_TOKEN;
  else process.env.MEDIA_STORAGE_READ_TOKEN = originalToken;
  internshipProgram.publicationConsentVerified = originalConsent;
  internshipProgram.publicationApprovedForWebsite = originalApproval;
  internshipProgram.publicationAuthorizedByOwner = originalOwnerAuthorization;
  internshipProgram.gallery[0].enabled = originalEnabled;
  features.internship = originalFeature;
});

test('external storage is authenticated, uncached, redirect-safe, and its secrets never reach the response', async () => {
  internshipProgram.publicationConsentVerified = true;
  const response = await call();
  expect(response.status).toBe(200);
  expect(Buffer.from(await response.arrayBuffer())).toEqual(fixture);
  expect(calls).toHaveLength(1);
  expect(calls[0].url).toBe(`https://private-storage.example.invalid/objects/${filename}`);
  expect(calls[0].init).toMatchObject({
    headers: { Authorization: 'Bearer synthetic-read-token', Accept: 'image/webp' },
    cache: 'no-store', redirect: 'error',
  });
  for (const [header, value] of Object.entries(mediaResponseHeaders)) {
    expect(response.headers.get(header)).toBe(value);
  }
  expect(JSON.stringify([...response.headers])).not.toMatch(/synthetic-read-token|private-storage/);
});

for (const guard of ['consent', 'publication', 'image', 'feature'] as const) {
  test(`media ${guard} denial occurs before any storage access`, async () => {
    internshipProgram.publicationConsentVerified = true;
    if (guard === 'consent') internshipProgram.publicationConsentVerified = false;
    if (guard === 'publication') internshipProgram.publicationApprovedForWebsite = false;
    if (guard === 'image') internshipProgram.gallery[0].enabled = false;
    if (guard === 'feature') features.internship = false;
    const response = await call();
    expect(response.status).toBe(404);
    expect(response.headers.get('cache-control')).toBe('private, no-store');
    expect(calls).toHaveLength(0);
  });
}

for (const endpoint of ['', 'http://storage.example.invalid/', 'https://user:pass@storage.example.invalid/',
  'https://storage.example.invalid/?key=secret', 'https://storage.example.invalid/#fragment', 'invalid']) {
  test(`invalid/missing storage configuration fails closed: ${endpoint.replace(/\?.*/, '')}`, async () => {
    process.env.MEDIA_STORAGE_BASE_URL = endpoint;
    expect(await readPrivateMedia(filename)).toBeNull();
    expect(calls).toHaveLength(0);
  });
}

test('missing token, CRLF token, alternate filename, and traversal never contact storage', async () => {
  delete process.env.MEDIA_STORAGE_READ_TOKEN;
  expect(await readPrivateMedia(filename)).toBeNull();
  process.env.MEDIA_STORAGE_READ_TOKEN = 'bad\r\nheader';
  expect(await readPrivateMedia(filename)).toBeNull();
  process.env.MEDIA_STORAGE_READ_TOKEN = 'synthetic-read-token';
  internshipProgram.publicationConsentVerified = true;
  for (const name of ['../../package.json', '%2e%2e%2fsecret.webp', 'unlisted.webp', `${filename}?key=other`]) {
    expect((await call(name)).status).toBe(404);
  }
  expect(calls).toHaveLength(0);
});

for (const status of [401, 403, 404, 500]) {
  test(`storage ${status} response is a generic uncached 404`, async () => {
    internshipProgram.publicationConsentVerified = true;
    globalThis.fetch = async () => new Response('private provider error', { status });
    const response = await call();
    expect(response.status).toBe(404);
    expect(await response.text()).toBe('');
    expect(response.headers.get('cdn-cache-control')).toBe('no-store');
  });
}

test('storage network/redirect errors are hidden and not cached', async () => {
  internshipProgram.publicationConsentVerified = true;
  globalThis.fetch = async (_url, init) => {
    expect(init?.redirect).toBe('error');
    throw new Error('secret provider URL and token');
  };
  const response = await call();
  expect(response.status).toBe(404);
  expect(await response.text()).toBe('');
  expect(response.headers.get('vercel-cdn-cache-control')).toBe('no-store');
});

test('storage HTML, misleading MIME, and oversized declared/streamed objects are refused', async () => {
  for (const response of [
    new Response('<html>private login</html>', { headers: { 'Content-Type': 'text/html' } }),
    new Response('<html>private login</html>', { headers: { 'Content-Type': 'image/webp' } }),
    new Response(new Uint8Array(fixture), { headers: { 'Content-Type': 'image/webp', 'Content-Length': '9000000' } }),
    new Response(new Uint8Array(9 * 1024 * 1024), { headers: { 'Content-Type': 'image/webp' } }),
  ]) {
    globalThis.fetch = async () => response;
    expect(await readPrivateMedia(filename)).toBeNull();
  }
});

test('approved metadata cannot read a local copy when protected storage is absent', async () => {
  internshipProgram.publicationConsentVerified = true;
  delete process.env.MEDIA_STORAGE_BASE_URL;
  const response = await call();
  expect(response.status).toBe(404);
  expect(response.headers.get('cache-control')).toBe('private, no-store');
  expect(calls).toHaveLength(0);
});
