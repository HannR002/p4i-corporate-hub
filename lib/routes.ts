import { features, type Features, type FeatureName } from './features';

export const routes = [
  { path: '/', label: 'Beranda' },
  { path: '/tentang', label: 'Tentang P4I' },
  { path: '/program', label: 'Program', feature: 'training' },
  { path: '/publisher', label: 'Publikasi', feature: 'publisher' },
  { path: '/rekam-jejak', label: 'Rekam Jejak', feature: 'history' },
  { path: '/kegiatan', label: 'Kegiatan', feature: 'activities' },
  { path: '/magang', label: 'Program Magang', feature: 'internship' },
  { path: '/kontak', label: 'Kontak' },
  { path: '/kebijakan-privasi', label: 'Kebijakan Privasi' },
  { path: '/syarat-ketentuan', label: 'Syarat & Ketentuan' },
  { path: '/layanan/konsultasi', label: 'Konsultasi', feature: 'consulting' },
] as const;

export type RoutePath = (typeof routes)[number]['path'];
type VisibilityRule = { path: string; feature?: FeatureName };

export function isRouteVisible(path: string, flags: Features = features): boolean {
  const rule: VisibilityRule | undefined = routes.find((route) => route.path === path);
  if (!rule) return false;
  return !rule.feature || flags[rule.feature];
}

export function getVisibleRoutes(flags: Features = features) {
  return routes.filter((route) => isRouteVisible(route.path, flags));
}
