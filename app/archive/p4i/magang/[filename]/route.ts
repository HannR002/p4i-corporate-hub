import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { internshipProgram } from '@/data/internship';
import { features } from '@/lib/features';
import { getPublishedGallery } from '@/lib/media-publication';

export const runtime = 'nodejs';

export async function GET(_request: Request, { params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  const gallery = getPublishedGallery(internshipProgram);
  // Match the curated filename before touching the filesystem; no arbitrary path reads.
  if (!features.internship || !gallery.some((item) => item.image === `/archive/p4i/magang/${filename}`)) {
    return new Response(null, { status: 404, headers: { 'Cache-Control': 'private, no-store' } });
  }
  try {
    const bytes = await readFile(path.join(process.cwd(), 'private/media/magang', filename));
    return new Response(bytes, { headers: { 'Content-Type': 'image/webp', 'Cache-Control': 'private, no-store' } });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return new Response(null, { status: 404 });
    throw error;
  }
}
