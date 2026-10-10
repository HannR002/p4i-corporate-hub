import { internshipProgram } from '@/data/internship';
import { features } from '@/lib/features';
import { getPublishedGallery } from '@/lib/media-publication';
import { mediaResponseHeaders, readPrivateMedia } from '@/lib/private-media-store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_request: Request, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  const gallery = getPublishedGallery(internshipProgram);
  // Publication permission is checked before contacting storage on every request.
  if (!features.internship || !/^[a-z0-9-]+\.webp$/.test(filename) ||
    !gallery.some((item) => item.image === `/archive/p4i/magang/${filename}`)) {
    return new Response(null, { status: 404, headers: mediaResponseHeaders });
  }
  const bytes = await readPrivateMedia(filename);
  if (!bytes) return new Response(null, { status: 404, headers: mediaResponseHeaders });
  return new Response(new Blob([bytes]), {
    headers: { ...mediaResponseHeaders, 'Content-Type': 'image/webp' },
  });
}
