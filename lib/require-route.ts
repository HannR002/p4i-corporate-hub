import { notFound } from 'next/navigation';
import { isRouteVisible, type RoutePath } from './routes';

export function requireRoute(path: RoutePath) {
  if (!isRouteVisible(path)) notFound();
}
