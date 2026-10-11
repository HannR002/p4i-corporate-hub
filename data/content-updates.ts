import type { RoutePath } from '../lib/routes';

// Editorial dates: update the affected route when its published content changes.
// Omit unknown dates instead of fabricating a timestamp at request/build time.
export const contentUpdatedAt: Partial<Record<RoutePath, string>> = {
  '/': '2026-10-09',
  '/tentang': '2026-10-09',
  '/program': '2026-10-09',
  '/publisher': '2026-10-09',
  '/rekam-jejak': '2026-10-09',
  '/kegiatan': '2026-10-09',
  '/magang': '2026-10-09',
  '/kontak': '2026-10-09',
  '/kebijakan-privasi': '2026-10-09',
  '/syarat-ketentuan': '2026-10-09',
};
