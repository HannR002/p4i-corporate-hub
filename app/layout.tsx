import './globals.css';
import localFont from 'next/font/local';
import { headers } from 'next/headers';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { siteConfig } from '@/lib/site-config';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const inter = localFont({ src: '../public/fonts/InterVariable.woff2', weight: '100 900', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.metadataBase),
  title: {
    default: `${siteConfig.name} — ${siteConfig.fullName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.fullName} (${siteConfig.name}) — lembaga yang berdedikasi untuk pendidikan, penelitian, dan pembangunan Indonesia. Research • Education • Development.`,
  keywords: [
    'P4I',
    'pendidikan',
    'penelitian',
    'pembangunan Indonesia',
    'pelatihan',
    'GIS',
    'jurnal ilmiah',
    'publisher',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.fullName}`,
    description: `Lembaga pendidikan, penelitian, dan pembangunan Indonesia. Berdiri sejak ${siteConfig.established}.`,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

import ContactLauncher from './components/contact/ContactLauncher';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Request-specific nonces require dynamic rendering, as documented by Next.js.
  const nonce = (await headers()).get('x-nonce') ?? undefined;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.metadataBase}/#website`,
        url: siteConfig.metadataBase,
        name: siteConfig.name,
        description: siteConfig.tagline,
        publisher: {
          '@id': `${siteConfig.metadataBase}/#organization`,
        },
      },
      {
        '@type': 'Organization',
        '@id': `${siteConfig.metadataBase}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.metadataBase,
        logo: `${siteConfig.metadataBase}/icon.png`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${siteConfig.contact.whatsappNumber}`,
          contactType: 'customer service',
          email: siteConfig.contact.email,
          areaServed: 'ID',
          availableLanguage: 'Indonesian',
        },
      },
    ],
  };

  return (
    <html lang="id">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-white text-slate-900`}
      >
        <script
          nonce={nonce}
          id="json-ld"
          type="application/ld+json"
        >{JSON.stringify(jsonLd).replace(/</g, '\u003c')}</script>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ContactLauncher />
      </body>
    </html>
  );
}
