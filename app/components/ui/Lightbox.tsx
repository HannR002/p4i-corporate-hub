'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { HistoricalMedia } from '@/data/historical-media';

interface LightboxProps {
  media: HistoricalMedia | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ media, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !media) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white bg-slate-800/50 hover:bg-slate-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white z-50"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl w-full flex flex-col max-h-screen"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] md:h-[75vh] bg-black/20 rounded-t-xl overflow-hidden flex items-center justify-center">
          <Image
            src={media.image}
            alt={media.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
        <div className="bg-white p-4 md:p-6 rounded-b-xl shadow-xl flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{media.title}</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{media.caption}</p>
          </div>
          <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
            <span className="inline-flex px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-100 text-slate-600 whitespace-nowrap">
              {media.source}
            </span>
            {media.verification === 'visual-only' && (
              <span className="inline-flex px-2.5 py-1 text-xs font-semibold rounded-md bg-amber-50 text-amber-700 whitespace-nowrap">
                Visual Only
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
