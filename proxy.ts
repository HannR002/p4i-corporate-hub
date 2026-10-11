import { NextResponse, type NextRequest } from 'next/server';
import { contentSecurityPolicy } from './lib/security-policy';
import { features } from './lib/features';
import { getPlatform, isPlatformVisible } from './data/platforms';

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/journal' || request.nextUrl.pathname.startsWith('/journal/')) {
    if (!features.journal || !isPlatformVisible('journal')) return new NextResponse(null, { status: 404 });
    const destination = new URL(getPlatform('journal').url);
    destination.pathname = request.nextUrl.pathname;
    destination.search = request.nextUrl.search;
    return NextResponse.redirect(destination, 308);
  }
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const policy = contentSecurityPolicy(nonce, process.env.NODE_ENV === 'development');
  const headers = new Headers(request.headers);
  headers.set('x-nonce', nonce);
  headers.set('Content-Security-Policy', policy);
  const response = NextResponse.next({ request: { headers } });
  response.headers.set('Content-Security-Policy', policy);
  // Nonce-bearing HTML/RSC must never be reused by a browser or shared CDN cache.
  response.headers.set('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
  response.headers.set('CDN-Cache-Control', 'no-store');
  response.headers.set('Vercel-CDN-Cache-Control', 'no-store');
  return response;
}

export const config = {
  matcher: ['/journal/:path*', '/((?!_next/static|_next/image|.*\\.(?:png|webp|jpg|jpeg|woff2|txt|xml)$).*)'],
};
