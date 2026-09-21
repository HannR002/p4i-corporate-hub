import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/tentang',
    '/program',
    '/publisher',
    '/rekam-jejak',
    '/magang',
    '/kegiatan',
    '/kontak',
    '/kebijakan-privasi',
    '/syarat-ketentuan',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.metadataBase}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
