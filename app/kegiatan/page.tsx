import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { activities } from '@/data/activities';
import { Calendar } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kegiatan',
  description: `Kegiatan dan aktivitas kelembagaan ${siteConfig.fullName}.`,
};

const categoryLabels: Record<string, string> = {
  pelatihan: 'Pelatihan',
  penelitian: 'Penelitian',
  publikasi: 'Publikasi',
  kelembagaan: 'Kelembagaan',
};

const categoryColors: Record<string, string> = {
  pelatihan: 'bg-green-100 text-green-700',
  penelitian: 'bg-purple-100 text-purple-700',
  publikasi: 'bg-orange-100 text-orange-700',
  kelembagaan: 'bg-blue-100 text-blue-700',
};

export default function KegiatanPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
            Aktivitas Kelembagaan
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Kegiatan P4I
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Jejak kegiatan pendidikan, penelitian, dan pembangunan P4I.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {activities.map((act) => (
              <div
                key={act.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[act.category] || 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {categoryLabels[act.category] || act.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {act.date}
                  </div>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  {act.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
