'use client';

import { useState, type ReactNode } from 'react';
import type { HistoricalMedia } from '@/data/historical-media';
import Lightbox from './Lightbox';

export default function ArchiveMediaButton({
  media,
  children,
  className,
}: {
  media: HistoricalMedia;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-label={`Perbesar arsip: ${media.title}`}
      >
        {children}
      </button>
      <Lightbox media={media} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
