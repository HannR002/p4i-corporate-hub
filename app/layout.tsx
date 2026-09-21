import './globals.css';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { siteConfig } from '@/lib/site-config';
import type { Metadata, Viewport } from 'next';

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
};

import ContactLauncher from './components/contact/ContactLauncher';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-white text-slate-900`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ContactLauncher />
        <GoogleAnalytics gaId={siteConfig.googleAnalyticsId} />
      </body>
    </html>
  );
}
