/** Server-only adapter for an authenticated HTTPS object gateway, never a public bucket. */
export const mediaResponseHeaders = {
  'Cache-Control': 'private, no-store',
  'CDN-Cache-Control': 'no-store',
  'Vercel-CDN-Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
  'X-Robots-Tag': 'noindex, noarchive',
};

const maximumBytes = 8 * 1024 * 1024;

function storageConfiguration() {
  const endpoint = process.env.MEDIA_STORAGE_BASE_URL;
  const token = process.env.MEDIA_STORAGE_READ_TOKEN;
  if (!endpoint || !token || /[\r\n]/.test(token)) return null;
  try {
    const base = new URL(endpoint);
    if (base.protocol !== 'https:' || base.username || base.password || base.search || base.hash) {
      return null;
    }
    if (!base.pathname.endsWith('/')) base.pathname += '/';
    return { base, token };
  } catch {
    return null;
  }
}

export async function readPrivateMedia(filename: string): Promise<Uint8Array<ArrayBuffer> | null> {
  // The caller must also check publication policy; this rejects alternate object paths.
  if (!/^[a-z0-9-]+\.webp$/.test(filename)) return null;
  const configuration = storageConfiguration();
  if (!configuration) return null;
  try {
    const response = await fetch(new URL(filename, configuration.base), {
      headers: { Authorization: `Bearer ${configuration.token}`, Accept: 'image/webp' },
      cache: 'no-store',
      redirect: 'error',
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok || response.headers.get('content-type')?.split(';')[0].trim() !== 'image/webp') {
      await response.body?.cancel();
      return null;
    }
    const declaredSize = response.headers.get('content-length');
    if (declaredSize && (!/^\d+$/.test(declaredSize) || Number(declaredSize) > maximumBytes)) {
      await response.body?.cancel();
      return null;
    }
    if (!response.body) return null;
    const reader = response.body.getReader();
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > maximumBytes) {
        await reader.cancel();
        return null;
      }
      chunks.push(chunk.value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    // Fail closed on non-WebP payloads, including an HTML login/error page.
    if (size < 12 || String.fromCharCode(...bytes.slice(0, 4)) !== 'RIFF' ||
      String.fromCharCode(...bytes.slice(8, 12)) !== 'WEBP') return null;
    return bytes;
  } catch {
    // Do not expose endpoint URLs, authorization headers, or provider errors.
    return null;
  }
}
