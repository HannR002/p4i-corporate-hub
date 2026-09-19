/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com",
              "connect-src 'self' https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' blob: data: https://www.googletagmanager.com",
              "font-src 'self' https://fonts.gstatic.com",
            ].join('; '),
          },
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
  async redirects() {
    return [
      {
        source: '/journal/:path*',
        destination: 'https://journal.p4ijournal.org/journal/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
