import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { activeJournals } from '@/data/journals';
import { BookOpen, ExternalLink, ShieldCheck, Users, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'P4I Publisher',
  description: `P4I Publisher — platform penerbitan jurnal ilmiah open access dari ${siteConfig.fullName}.`,
};

export default function PublisherPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/30 blur-3xl opacity-50" />
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-900/20 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-blue-300 bg-blue-400/10 rounded-full border border-blue-400/20">
            Open Access Journal Publishing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            P4I <span className="text-blue-400">Publisher</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto mb-2 font-medium uppercase tracking-wider">
            {siteConfig.legalName}
          </p>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Publishing Knowledge. Advancing Research.
          </p>
        </div>
      </section>

      {/* Publisher Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Tentang P4I Publisher
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            P4I Publisher adalah divisi penerbitan ilmiah dari {siteConfig.fullName}.
            Kami menyediakan platform publikasi jurnal ilmiah yang bersifat{' '}
            <strong>open access</strong>, memfasilitasi peneliti, akademisi, dan
            profesional untuk mendiseminasikan karya ilmiah berkualitas tinggi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Peer Review',
                desc: 'Proses review terstandar untuk menjamin kualitas publikasi.',
              },
              {
                icon: Globe,
                title: 'Open Access',
                desc: 'Artikel dapat diakses secara terbuka oleh komunitas akademik global.',
              },
              {
                icon: Users,
                title: 'Interdisiplin',
                desc: 'Menerima kontribusi lintas disiplin ilmu.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-xl p-5 border border-slate-100"
              >
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Catalog */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Jurnal Kami
            </h2>
            <p className="text-slate-500">
              Katalog jurnal ilmiah yang diterbitkan oleh P4I Publisher.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeJournals.map((journal) => (
              <div
                key={journal.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full group"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {journal.shortName}
                </h3>
                <p className="text-xs text-slate-400 mb-3">{journal.scope}</p>
                <p className="text-sm text-slate-900 font-medium mb-2">
                  {journal.name}
                </p>
                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                  {journal.description}
                </p>
                {journal.eissn && (
                  <p className="text-xs font-mono text-blue-600 mb-4">
                    E-ISSN: {journal.eissn}
                  </p>
                )}
                <a
                  href={journal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Kunjungi Jurnal
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          {activeJournals.length === 1 && (
            <p className="text-center text-sm text-slate-400 mt-8">
              Jurnal tambahan akan segera hadir.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
