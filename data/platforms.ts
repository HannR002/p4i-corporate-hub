import { features, type Features, type FeatureName } from '../lib/features';
import { siteConfig } from '../lib/site-config';

export interface DigitalPlatform {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  url: string;
  status: 'active' | 'inactive';
  external: boolean;
  feature?: FeatureName;
}

export const platforms: DigitalPlatform[] = [
  {
    id: "website",
    title: "Website Institusi",
    shortTitle: "P4I",
    description: "Pusat Pendidikan dan Penelitian Pembangunan Indonesia.",
    url: siteConfig.url,
    status: "active",
    external: false,
  },
  {
    id: "journal",
    feature: 'journal',
    title: "Jurnal Ilmiah P4I",
    shortTitle: "OJS",
    description: "Platform pengelolaan dan publikasi jurnal ilmiah berbasis Open Journal Systems.",
    url: "https://journal.p4ijournal.org",
    status: "active",
    external: true,
  },
  {
    id: "ebook",
    feature: 'ebook',
    title: "P4I E-Book",
    shortTitle: "E-Book",
    description: "Platform penerbitan dan katalog literatur digital P4I.",
    url: "https://publisher.p4ijournal.org",
    status: "active",
    external: true,
  }
];

export function getPlatform(id: string) {
  const platform = platforms.find((item) => item.id === id);
  if (!platform) throw new Error(`Unknown platform: ${id}`);
  return platform;
}

export function isPlatformVisible(id: string, flags: Features = features) {
  const platform = getPlatform(id);
  return platform.status === 'active' && (!platform.feature || flags[platform.feature]);
}
