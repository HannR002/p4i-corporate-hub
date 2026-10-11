import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { getVisibleRoutes } from '@/lib/routes';
import { contentUpdatedAt } from '@/data/content-updates';

export default function sitemap(): MetadataRoute.Sitemap {
  return getVisibleRoutes().map((route) => ({
    url: new URL(route.path, siteConfig.metadataBase).href,
    ...(contentUpdatedAt[route.path] ? { lastModified: contentUpdatedAt[route.path] } : {}),
    priority: route.path === '/' ? 1 : 0.8,
  }));
}
