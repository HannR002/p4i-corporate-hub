/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  outputFileTracingIncludes: {
    '/archive/p4i/magang/*': ['./private/media/magang/*.webp'],
  },
  images: {
    qualities: [75, 80],
    localPatterns: [
      { pathname: '/brand/**', search: '' },
      { pathname: '/archive/p4i/hutan-organik/**', search: '' },
      { pathname: '/archive/p4i/digital-history/**', search: '' },
      { pathname: '/archive/p4i/maps/**', search: '' },
      { pathname: '/archive/p4i/people/**', search: '' },
      { pathname: '/p4i-logo.png', search: '' },
      { pathname: '/icon.png', search: '' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
