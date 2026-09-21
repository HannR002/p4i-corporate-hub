import './globals.css';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { siteConfig } from '@/lib/site-config';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const inter = Inter({ subsets: ['latin'] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-white text-slate-900`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ContactLauncher />
        <GoogleAnalytics gaId={siteConfig.googleAnalyticsId} />
      </body>
    </html>
  );
}
