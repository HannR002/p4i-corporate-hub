import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { activities } from '@/data/activities';
import { HistoricalGallery } from '@/app/components/gallery/HistoricalGallery';
import { Calendar, Tag, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kegiatan',
  description: `Arsip kegiatan dan jejak program historis ${siteConfig.fullName}.`,
  alternates: {
    canonical: `${siteConfig.metadataBase}/kegiatan`,
  },
};

export default function KegiatanPage() {
  const currentActivities = activities.filter((a) => !a.historical);
  const historicalActivities = activities.filter((a) => a.historical);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
            Arsip & Berita
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Kegiatan P4I
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Dokumentasi rekam jejak program dan aktivitas kelembagaan.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* KEGIATAN TERKINI (Only visible if there is non-historical data) */}
          {currentActivities.length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b-2 border-slate-900 inline-block pb-2">
                Kegiatan Terkini
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentActivities.map((item) => (
                  <ActivityCard key={item.id} activity={item} />
                ))}
              </div>
            </div>
          )}

          {/* ARSIP VISUAL P4I */}
          <div className="mb-20">
            <HistoricalGallery />
          </div>

          {/* ARSIP HISTORIS */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b-2 border-slate-200 inline-block pb-2">
              Arsip / Jejak Kegiatan P4I
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {historicalActivities.map((item) => (
                <ActivityCard key={item.id} activity={item} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function ActivityCard({ activity }: { activity: typeof activities[0] }) {
  return (
    <article className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
      {/* Image Placeholder layout for authentic images later */}
      <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden flex items-center justify-center">
        {activity.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img 
            src={activity.image} 
            alt={activity.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="text-slate-300 flex flex-col items-center">
            <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
            <span className="text-xs font-medium uppercase tracking-wider">Dokumentasi</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-700 shadow-sm">
            {activity.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {activity.date || activity.year}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {activity.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {activity.description}
        </p>

        {activity.location && (
          <div className="text-sm font-medium text-slate-500 bg-slate-50 px-4 py-2 rounded-lg mt-auto">
            Lokasi: {activity.location}
          </div>
        )}
      </div>
    </article>
  );
}
