import type { Metadata } from 'next';
import { siteConfig } from './site-config';
import type { RoutePath } from './routes';

export function pageMetadata(path: RoutePath, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: new URL(path, siteConfig.metadataBase).href },
    openGraph: { title, description, url: new URL(path, siteConfig.metadataBase).href },
  };
}
