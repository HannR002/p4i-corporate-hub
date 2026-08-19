/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://www.googletagmanager.com;",
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
