'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe,
  Leaf,
  FlaskConical,
  MessageCircle,
  Calendar,
  ExternalLink,
  Building2,
  MapPin,
  Clock
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { activeJournals } from '@/data/journals';
import { programCategories } from '@/data/programs';
import { milestones } from '@/data/timeline';
import { activities } from '@/data/activities';
import PageHero from '@/app/components/layout/PageHero';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Building2,
  Leaf,
  FlaskConical,
  GraduationCap,
  BookOpen,
};

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ===================== HERO ===================== */}
      <PageHero
        title="Pusat Pendidikan dan Penelitian Pembangunan Indonesia"
        description="Mendorong kemajuan bangsa melalui penyelenggaraan pendidikan berkualitas, penelitian terapan, dan strategi pembangunan berkelanjutan."
        titleAccent="Research • Education • Development"
        overlayVariant="medium"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="/tentang"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full text-white bg-slate-900 hover:bg-blue-700 shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Tentang P4I
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="/program"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
          >
            Jelajahi Program
          </Link>
        </div>
      </PageHero>

      {/* ===================== VERIFIED INSTITUTIONAL STRIP ===================== */}
      <section className="border-y border-slate-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <Clock className="w-6 h-6 text-blue-300 mb-3" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Berdiri</p>
              <p className="text-sm font-semibold text-slate-900">12 Mei 2014</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <MapPin className="w-6 h-6 text-blue-300 mb-3" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Kantor Pusat</p>
              <p className="text-sm font-semibold text-slate-900">Bogor</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <MapPin className="w-6 h-6 text-blue-300 mb-3" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Kantor Cabang</p>
              <p className="text-sm font-semibold text-slate-900">Jambi</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <BookOpen className="w-6 h-6 text-blue-300 mb-3" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Publikasi</p>
              <p className="text-sm font-semibold text-slate-900">P4I Publisher</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TENTANG P4I ===================== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Lebih dari Satu Dekade Membangun Kapasitas.
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full" />
            </div>
            <div className="prose prose-slate text-slate-600 prose-lg">
              <p>
                Didirikan pada <strong>12 Mei 2014</strong>, {siteConfig.legalName} tumbuh menjadi lembaga keilmuan independen yang berfokus pada penguatan kapasitas sumber daya manusia dan penelitian aplikatif.
              </p>
              <p>
                Kami mempertemukan akademisi, praktisi, dan pembuat kebijakan untuk mendiskusikan, merancang, dan mengimplementasikan strategi pembangunan di Indonesia yang inklusif dan berkelanjutan.
              </p>
              <Link
                href="/tentang"
                className="inline-flex items-center mt-6 text-blue-600 font-bold hover:text-blue-800 transition-colors no-underline"
              >
                Selengkapnya tentang P4I
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BIDANG KEGIATAN (Bento Grid) ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Bidang Kegiatan
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl">
              Fokus pengabdian dan kepakaran P4I.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:border-blue-100 transition-all group">
              <div>
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Education & Training
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-md">
                  Penyelenggaraan program pelatihan profesional intensif untuk peningkatan kompetensi SDM di berbagai bidang strategis pemerintahan maupun swasta.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:border-blue-100 transition-all group">
              <div>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Research & Development
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Riset terapan dan pengembangan inovasi untuk mendukung pengambilan kebijakan berbasis bukti.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:border-blue-100 transition-all group">
              <div>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  GIS & Regional Development
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sistem Informasi Geografis untuk pemetaan, perencanaan tata ruang, dan analisis spasial kewilayahan.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-900/20 transition-all group overflow-hidden relative">
              <div className="absolute inset-0 p4i-signature-bg opacity-30 mix-blend-screen pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                  <Leaf className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Environment & Sustainable Development
                </h3>
                <p className="text-slate-300 leading-relaxed max-w-lg">
                  Kajian dan pengelolaan lingkungan hidup strategis untuk memastikan arah pembangunan yang berkelanjutan bagi generasi mendatang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROGRAM ===================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Program P4I
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl">
                Pengembangan kapasitas lintas disiplin.
              </p>
            </div>
            <Link
              href="/program"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
            >
              Lihat Semua Program
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programCategories.slice(0, 4).map((cat) => {
              const IconComp = iconMap[cat.icon] || BookOpen;
              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                        {cat.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cat.programs.slice(0, 3).map((p) => (
                          <span
                            key={p}
                            className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full"
                          >
                            {p}
                          </span>
                        ))}
                        {cat.programs.length > 3 && (
                          <span className="text-xs font-medium text-slate-400 px-2 py-1.5">
                            +{cat.programs.length - 3} lainnya
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== P4I PUBLISHER ===================== */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 p4i-signature-bg opacity-40 mix-blend-screen" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
                Scientific Publishing
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                P4I Publisher
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl">
                Platform penerbitan jurnal ilmiah open access dari P4I.
              </p>
            </div>
            <Link
              href="/publisher"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Eksplorasi Publisher
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="max-w-3xl">
            {activeJournals.map((journal) => (
              <div
                key={journal.id}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-all group"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 bg-blue-500/20 text-blue-300 rounded-xl flex items-center justify-center shrink-0">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {journal.shortName}
                    </h3>
                    <p className="text-sm text-blue-300 font-medium">{journal.scope}</p>
                  </div>
                </div>
                <p className="text-base text-white font-medium mb-3">
                  {journal.name}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  {journal.description}
                </p>
                <a
                  href={journal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl bg-white text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Kunjungi Jurnal
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EKOSISTEM DIGITAL ===================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Ekosistem Digital P4I
            </h2>
            <p className="text-lg text-slate-500">
              Infrastruktur digital terintegrasi untuk mendukung diseminasi ilmu pengetahuan dan pelayanan kelembagaan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Website Institusi */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Website Institusi</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                Pusat Pendidikan dan Penelitian Pembangunan Indonesia. Portal informasi utama kelembagaan.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Kunjungi Website
              </Link>
            </div>

            {/* Jurnal Ilmiah */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Jurnal Ilmiah</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                Platform pengelolaan dan publikasi jurnal ilmiah P4I berbasis Open Journal Systems.
              </p>
              <a
                href="https://journal.p4ijournal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
              >
                Kunjungi Jurnal
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* P4I E-Book */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">P4I E-Book</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
                Platform penerbitan dan katalog literatur digital P4I.
              </p>
              <a
                href="https://publisher.p4ijournal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
              >
                Jelajahi E-Book
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== JEJAK / TIMELINE ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Jejak P4I
            </h2>
            <p className="text-lg text-slate-500">
              Perkembangan dan tonggak sejarah lembaga.
            </p>
          </div>

          <div className="space-y-0 border-l-2 border-slate-100 ml-3 md:ml-0">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
                <div className="absolute left-[-9px] top-1.5 w-4 h-4 bg-white border-4 border-blue-500 rounded-full" />
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                    {m.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== KEGIATAN TERBARU ===================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Dokumentasi Kegiatan
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl">
                Jejak aktivitas dan pelaksanaan program P4I.
              </p>
            </div>
            <Link
              href="/kegiatan"
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              Lihat Semua
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.slice(0, 3).map((act) => (
              <div
                key={act.id}
                className="bg-white rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col overflow-hidden"
              >
                {act.image && (
                  <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                    <Image
                      src={act.image}
                      alt={act.alt || act.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-700 shadow-sm border border-slate-200">
                        {act.category}
                      </span>
                    </div>
                  </div>
                )}
                <div className={`p-8 flex flex-col flex-grow ${!act.image ? 'pt-8' : 'pt-6'}`}>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    <Calendar className="w-4 h-4" />
                    {act.date || act.year}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA COLLABORATION ===================== */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-10 md:p-16 border border-slate-200 text-center relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-slate-50 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white text-blue-600 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Building2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Mari Berkolaborasi dengan P4I
              </h2>
              <p className="text-sm md:text-base font-bold text-blue-600 uppercase tracking-widest mb-4">
                Pendidikan • Penelitian • Publikasi
              </p>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                P4I terbuka untuk kolaborasi dalam penyelenggaraan pendidikan, riset terapan, pengembangan ilmu pengetahuan, dan publikasi ilmiah.
              </p>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-xl text-white bg-slate-900 hover:bg-blue-600 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Hubungi P4I Sekarang
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
