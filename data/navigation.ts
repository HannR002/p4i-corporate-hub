/**
 * Navigation Data — Single source for all nav menus
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang P4I', href: '/tentang' },
  { label: 'Program', href: '/program' },
  { label: 'Publikasi', href: '/publisher' },
  { label: 'Rekam Jejak', href: '/rekam-jejak' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Kontak', href: '/kontak' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Tentang P4I', href: '/tentang' },
  { label: 'Rekam Jejak', href: '/rekam-jejak' },
  { label: 'Program', href: '/program' },
  { label: 'Program Magang', href: '/magang' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Kontak', href: '/kontak' },
];

export const footerPublicationLinks: NavItem[] = [
  { label: 'Jurnal Ilmiah (OJS)', href: 'https://journal.p4ijournal.org', external: true },
  { label: 'P4I E-Book', href: 'https://publisher.p4ijournal.org', external: true },
  { label: 'Ekosistem Publikasi', href: '/publisher' },
];
