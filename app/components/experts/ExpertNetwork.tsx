'use client';

import React, { useState } from 'react';
import { experts, ExpertCategory, Expert } from '@/data/experts';

const getInitials = (name: string) => {
  // Remove academic titles starting with specific keywords if they are prefixes
  let cleanName = name.replace(/^(Dr\.|Drs\.|Ir\.|AKBP\.|dr\.)\s*/i, '');
  
  // Split by space, take first letter of first two words
  const parts = cleanName.split(' ').filter((p) => p.trim() !== '');
  
  if (parts.length === 0) return 'P';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
};

const categories: (ExpertCategory | 'Semua')[] = [
  'Semua',
  'Wilayah & Tata Ruang',
  'GIS & Teknologi',
  'Lingkungan & SDA',
  'Sosial & Pemerintahan',
  'Infrastruktur',
  'Lainnya',
];

export function ExpertNetwork() {
  const [activeCategory, setActiveCategory] = useState<ExpertCategory | 'Semua'>('Semua');

  const filteredExperts = experts.filter(
    (expert) => activeCategory === 'Semua' || expert.category === activeCategory
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-10 shadow-sm mt-8">
      {/* Disclaimer */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-slate-700 leading-relaxed">
          <span className="font-bold mr-2">Catatan Historis:</span>
          Data berikut merupakan dokumentasi profil kelembagaan P4I dan <strong>bukan</strong> representasi struktur staf aktif saat ini. Data akan diperbarui apabila susunan jejaring keahlian terbaru telah diverifikasi secara resmi.
        </p>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Jejaring Tenaga Ahli P4I</h3>
        <p className="text-slate-500">
          P4I memiliki jejaring tenaga ahli dengan latar belakang multidisiplin yang terdokumentasi dalam profil lembaga.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          // Hide "Lainnya" if empty when "Semua" is active
          if (cat === 'Lainnya' && !experts.some((e) => e.category === 'Lainnya')) {
            return null;
          }
          
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExperts.map((expert) => (
          <div
            key={expert.id}
            className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-md transition-all group"
          >
            {/* Avatar Placeholder */}
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              {getInitials(expert.name)}
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {expert.name}
              </h4>
              <p className="text-xs text-slate-500 mb-2 mt-0.5 font-medium">
                {expert.qualification}
              </p>
              <div className="inline-flex items-center px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                {expert.expertise}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredExperts.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          Tidak ada tenaga ahli yang terdokumentasi dalam kategori ini.
        </div>
      )}
    </div>
  );
}
