'use client';

import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image?: string; // Optional until verified images exist
  description?: string;
};

// Architecture ready for verified archival images
export const historicalImages: GalleryItem[] = [
  {
    id: 'hutan-organik-1',
    title: 'Peta Zonasi Guna Lahan',
    category: 'Hutan Organik',
    description: 'Pemetaan ruang dan zona pemanfaatan lahan untuk pengembangan Hutan Organik berbasis SIG.',
  },
  {
    id: 'hutan-organik-2',
    title: 'Rehabilitasi Lahan Kritis',
    category: 'Hutan Organik',
    description: 'Dokumentasi upaya penghijauan dan rehabilitasi ekosistem lahan kritis.',
  },
  {
    id: 'hutan-organik-3',
    title: 'Sistem Pompa Hidram',
    category: 'Infrastruktur',
    description: 'Pengembangan sistem pengairan hidram untuk mendukung pertanian organik terpadu.',
  },
  {
    id: 'pelatihan-gis-1',
    title: 'Bimbingan Teknis SIG',
    category: 'Pelatihan',
    description: 'Pelatihan pemanfaatan Sistem Informasi Geografis untuk aparatur pemerintah daerah.',
  },
];

const categories = ['Semua', 'Hutan Organik', 'Pelatihan', 'Infrastruktur'];

export function HistoricalGallery() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredItems = historicalImages.filter(
    (item) => activeCategory === 'Semua' || item.category === activeCategory
  );

  return (
    <div className="bg-slate-50 rounded-3xl border border-slate-100 p-6 md:p-10 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            <Camera className="w-6 h-6 text-slate-400" />
            Arsip Visual P4I
          </h2>
          <p className="text-slate-500">
            Dokumentasi historis dari rekam jejak program dan fasilitas P4I.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 ${
                activeCategory === cat
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-slate-200 border border-slate-200 aspect-video flex items-center justify-center">
            
            {/* Image OR Placeholder */}
            {item.image ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div className="text-slate-400 flex flex-col items-center p-6 text-center">
                <ImageIcon className="w-8 h-8 mb-3 opacity-50" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Arsip Historis
                </span>
                <span className="text-sm font-medium text-slate-600 line-clamp-2">
                  {item.title}
                </span>
              </div>
            )}

            {/* Overlay Info on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="inline-block px-2.5 py-1 bg-white/20 backdrop-blur-md rounded border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider mb-2 w-fit">
                {item.category}
              </span>
              <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
              {item.description && (
                <p className="text-slate-300 text-xs line-clamp-2">{item.description}</p>
              )}
            </div>

          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-slate-400 italic">
          * Arsip visual lengkap akan diunggah secara bertahap setelah melalui proses digitalisasi dan verifikasi.
        </p>
      </div>
    </div>
  );
}
