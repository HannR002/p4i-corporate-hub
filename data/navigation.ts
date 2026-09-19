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
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Kontak', href: '/kontak' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Tentang P4I', href: '/tentang' },
  { label: 'Program Pelatihan', href: '/program' },
  { label: 'P4I Publisher', href: '/publisher' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Kontak', href: '/kontak' },
];
