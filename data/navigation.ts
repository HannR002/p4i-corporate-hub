/**
 * Navigation Data — Single source for all nav menus
 */

import { isRouteVisible } from '../lib/routes';
import { features, type Features, type FeatureName } from '../lib/features';
import { getPlatform, isPlatformVisible } from './platforms';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  feature?: FeatureName;
}

export const mainNavigation: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang P4I', href: '/tentang' },
  { label: 'Program', href: '/program' },
  { label: 'Publikasi', href: '/publisher' },
  { label: 'Rekam Jejak', href: '/rekam-jejak' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Konsultasi', href: '/layanan/konsultasi' },
  { label: 'Kontak', href: '/kontak' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Tentang P4I', href: '/tentang' },
  { label: 'Rekam Jejak', href: '/rekam-jejak' },
  { label: 'Program', href: '/program' },
  { label: 'Program Magang', href: '/magang' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Konsultasi', href: '/layanan/konsultasi' },
  { label: 'Kontak', href: '/kontak' },
];

export const footerPublicationLinks: NavItem[] = [
  { label: 'Jurnal Ilmiah (OJS)', href: getPlatform('journal').url, external: true, feature: 'journal' },
  { label: 'P4I E-Book', href: getPlatform('ebook').url, external: true, feature: 'ebook' },
  { label: 'Ekosistem Publikasi', href: '/publisher' },
];

export function visibleNavigation(items: readonly NavItem[], flags: Features = features) {
  return items.filter((item) => item.external
    ? (!item.feature || (flags[item.feature] && isPlatformVisible(item.feature, flags)))
    : isRouteVisible(item.href, flags));
}
