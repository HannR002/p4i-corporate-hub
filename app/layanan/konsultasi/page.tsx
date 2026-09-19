import { notFound } from 'next/navigation';
import { features } from '@/lib/features';

/**
 * Consulting page — dormant behind feature flag.
 * Original code preserved in git history (backup/v1-original branch).
 * Re-enable by setting features.consulting = true.
 */
export default function KonsultasiPage() {
  if (!features.consulting) {
    notFound();
  }

  // Future: render consulting page when enabled
  return null;
}
