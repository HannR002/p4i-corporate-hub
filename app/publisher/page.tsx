import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { activeJournals } from '@/data/journals';
import { BookOpen, ExternalLink, ShieldCheck, Users, Globe, Book } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ekosistem Publikasi P4I',
  description: `Ekosistem Publikasi P4I — platform penerbitan jurnal ilmiah (OJS) dan literatur digital (E-Book) dari ${siteConfig.fullName}.`,
  alternates: {
    canonical: `${siteConfig.metadataBase}/publisher`,
  },
};

export default function PublisherPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-400/10 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-blue-700 bg-blue-100/50 rounded-full border border-blue-200 uppercase">
            Diseminasi Keilmuan
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Ekosistem <span className="text-blue-600">Publikasi P4I</span>
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto mb-2 font-bold uppercase tracking-wider">
            {siteConfig.legalName}
          </p>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Menyediakan saluran penerbitan ilmiah untuk akademisi, praktisi, dan pembuat kebijakan melalui Jurnal Ilmiah berbasis OJS dan literatur digital P4I E-Book.
          </p>
        </div>
      </section>

      {/* Ekosistem Publikasi Channels */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* OJS / JURNAL ILMIAH */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-blue-200/50"></div>
              
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-md">
                <Globe className="w-8 h-8" />
              </div>
              
              <div className="relative z-10 flex-grow">
                <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Platform Open Access</div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Jurnal Ilmiah P4I (OJS)</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Platform jurnal ilmiah berbasis Open Journal Systems untuk pengelolaan submission, review, editorial, dan publikasi. Mendorong akses terbuka terhadap hasil penelitian.
                </p>
                
                {/* Journal List Preview */}
                <div className="space-y-4 mb-8">
                  {activeJournals.map((journal) => (
                    <div key={journal.id} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{journal.shortName}</h4>
                        <p className="text-xs text-slate-500">{journal.scope}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10 mt-auto pt-8 border-t border-slate-200">
                <a
                  href="https://journal.p4ijournal.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Kunjungi Jurnal
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

            {/* P4I E-BOOK */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-indigo-200/50"></div>
              
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-md">
                <Book className="w-8 h-8" />
              </div>
              
              <div className="relative z-10 flex-grow">
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Literatur & Modul</div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">P4I E-Book</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Platform penerbitan dan katalog buku digital P4I untuk distribusi karya ilmiah, modul pendidikan, prosiding, dan literatur digital lainnya.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl border border-slate-100">
                    <ShieldCheck className="w-6 h-6 text-slate-400 mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm">Validasi</h4>
                    <p className="text-xs text-slate-500">Penerbitan resmi P4I</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-100">
                    <Users className="w-6 h-6 text-slate-400 mb-2" />
                    <h4 className="font-bold text-slate-900 text-sm">Aksesibilitas</h4>
                    <p className="text-xs text-slate-500">Katalog digital terbuka</p>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mt-auto pt-8 border-t border-slate-200">
                <a
                  href="https://publisher.p4ijournal.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-bold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Jelajahi E-Book
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
