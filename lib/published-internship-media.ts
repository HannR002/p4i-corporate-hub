import { readFile } from 'node:fs/promises';
import path from 'node:path';
import manifest from '../media/published/magang/manifest.json';

// These seven files are intentionally published by the website owner. Private
// storage remains separate; arbitrary filenames never read from the checkout.
export async function readPublishedInternshipMedia(filename: string): Promise<Uint8Array<ArrayBuffer> | null> {
  if (!Object.hasOwn(manifest.files, filename)) return null;
  try {
    const bytes = await readFile(path.join(process.cwd(), 'media/published/magang', filename));
    return new Uint8Array(bytes);
  } catch {
    return null;
  }
}
