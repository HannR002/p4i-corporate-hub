import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { historyTimeline, historyGallery } from '@/data/history';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BookOpen, Globe, Users, Target, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: `Rekam Jejak P4I | ${siteConfig.fullName}`,
  description: 'Perjalanan pendidikan, penelitian, pembangunan wilayah, dan transformasi digital P4I.',
  alternates: {
    canonical: 'https://www.p4ijournal.org/rekam-jejak'
  }
};

export default function RekamJejakPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent" />
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-semibold tracking-wide text-blue-700 bg-blue-100/50 rounded-full border border-blue-200">
              Jejak Langkah Institusi
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Rekam Jejak <span className="text-blue-600">P4I</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Perjalanan pendidikan, penelitian, pembangunan wilayah, dan transformasi digital {siteConfig.legalName}.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Perjalanan P4I</h2>
            <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

            <div className="space-y-12 lg:space-y-24">
              {historyTimeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Center Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm -translate-x-1/2 mt-1.5"></div>
                    
                    {/* Content Box */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'} pt-0.5`}>
                      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-bold rounded-lg border border-slate-200">
                            {item.year}
                          </span>
                          {item.date && (
                            <span className="text-sm text-slate-500 font-medium">
                              {item.date}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>
                        
                        {item.themes && (
                          <div className="mt-4 pt-4 border-t border-slate-100">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {item.themes.map((theme, idx) => (
                                <li key={idx} className="flex items-center text-sm text-slate-600">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 shrink-0"></div>
                                  {theme}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-blue-600">
                          {item.category}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Historical Gallery (Text-first placeholder) */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Arsip Visual Historis</h2>
            <p className="text-lg text-slate-600">
              Dokumentasi visual historis sedang dalam proses digitalisasi arsip P4I.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {historyGallery.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col h-full">
                <div className="flex-1">
                  <div className="inline-flex items-center px-2.5 py-1 mb-4 text-xs font-semibold tracking-wide text-slate-600 bg-slate-100 rounded-md border border-slate-200">
                    {item.period}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.caption}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium">{item.category}</span>
                  <span className="font-semibold text-slate-700">{item.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Magang Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-xl">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-2/3">
                <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-semibold tracking-wide text-blue-100 bg-blue-700/50 rounded-full border border-blue-500">
                  Transformasi Kelembagaan
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                  Program Pembelajaran & Magang
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl">
                  P4I membuka ruang pemberdayaan talenta muda melalui program magang terstruktur. Saat ini, kami menerima siswa SMK Adhiyaksa Bogor untuk turut serta dalam pengembangan ekosistem digital lembaga.
                </p>
                <Link
                  href="/magang"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-blue-600 bg-white hover:bg-slate-50 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
                >
                  Informasi Program Magang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ekosistem Digital Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Jelajahi Ekosistem Digital P4I Hari Ini</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Website Institusi
            </Link>
            <a
              href="https://journal.p4ijournal.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Jurnal Ilmiah (OJS)
            </a>
            <a
              href="https://publisher.p4ijournal.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              P4I E-Book
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
