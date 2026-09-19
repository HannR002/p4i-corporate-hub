'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe,
  Leaf,
  FlaskConical,
  Building2,
  MessageCircle,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { activeJournals } from '@/data/journals';
import { programCategories } from '@/data/programs';
import { milestones } from '@/data/timeline';
import { activities } from '@/data/activities';

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
      <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.p
            {...fadeUp}
            className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4"
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
          >
            Pusat Pendidikan dan Penelitian
            <br className="hidden sm:block" />
            Pembangunan Indonesia
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10"
          >
            Mendorong kemajuan Indonesia melalui pendidikan berkualitas,
            penelitian terapan, dan pembangunan berkelanjutan sejak{' '}
            {siteConfig.establishedYear}.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/tentang"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
            >
              Tentang P4I
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/program"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
            >
              Jelajahi Program
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-white" />
      </section>

      {/* ===================== TENTANG SINGKAT ===================== */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Lebih dari Satu Dekade untuk Pendidikan, Penelitian, dan
            Pembangunan Indonesia
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {siteConfig.legalName} didirikan pada {siteConfig.established}{' '}
            sebagai lembaga yang berdedikasi untuk pengembangan pendidikan,
            penelitian, kapasitas sumber daya manusia, dan penerapan ilmu
            pengetahuan bagi pembangunan Indonesia.
          </p>
          <Link
            href="/tentang"
            className="inline-flex items-center mt-8 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            Selengkapnya tentang P4I
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===================== BIDANG KEGIATAN ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Bidang Kegiatan
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Area fokus P4I dalam mendukung pembangunan Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: 'Pendidikan & Pelatihan',
                desc: 'Program pelatihan profesional untuk peningkatan kapasitas SDM di berbagai bidang strategis.',
              },
              {
                icon: FlaskConical,
                title: 'Penelitian & Pengembangan',
                desc: 'Riset terapan dan pengembangan untuk mendukung kebijakan dan pembangunan.',
              },
              {
                icon: Globe,
                title: 'SIG & Pembangunan Wilayah',
                desc: 'Sistem Informasi Geografis untuk perencanaan tata ruang dan pembangunan wilayah.',
              },
              {
                icon: Leaf,
                title: 'Lingkungan & Pembangunan Berkelanjutan',
                desc: 'Pengelolaan lingkungan hidup dan strategi pembangunan berkelanjutan.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROGRAM HIGHLIGHT ===================== */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Program Unggulan
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Pelatihan profesional dan pengembangan kapasitas di bidang
              strategis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programCategories.slice(0, 4).map((cat) => {
              const IconComp = iconMap[cat.icon] || BookOpen;
              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3">
                        {cat.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cat.programs.slice(0, 4).map((p) => (
                          <span
                            key={p}
                            className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                          >
                            {p}
                          </span>
                        ))}
                        {cat.programs.length > 4 && (
                          <span className="text-xs text-slate-400 px-1 py-1">
                            +{cat.programs.length - 4} lainnya
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/program"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Lihat Semua Program
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== P4I PUBLISHER ===================== */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
              Publikasi Ilmiah
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              P4I Publisher
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Platform penerbitan jurnal ilmiah open access dari P4I.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {activeJournals.map((journal) => (
              <motion.div
                key={journal.id}
                whileHover={{ y: -4 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {journal.shortName}
                    </h3>
                    <p className="text-sm text-slate-500">{journal.scope}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-900 font-medium mb-2">
                  {journal.name}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {journal.description}
                </p>
                <a
                  href={journal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Kunjungi Jurnal
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/publisher"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Tentang P4I Publisher
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== JEJAK / TIMELINE ===================== */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Jejak Perjalanan
            </h2>
            <p className="text-lg text-slate-500">
              Tonggak perjalanan P4I dalam pendidikan, penelitian, dan
              pembangunan.
            </p>
          </div>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full shrink-0 mt-1.5" />
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-bold text-blue-600 mb-1">
                    {m.year}
                  </p>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {m.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== KEGIATAN TERBARU ===================== */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Kegiatan
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Aktivitas kelembagaan P4I.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.slice(0, 3).map((act) => (
              <div
                key={act.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {act.date}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {act.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/kegiatan"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Lihat Semua Kegiatan
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== CTA COLLABORATION ===================== */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4">
            Pendidikan • Penelitian • Publikasi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mari Berkolaborasi
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            P4I terbuka untuk kerja sama dalam bidang pendidikan, penelitian, dan
            pembangunan. Hubungi kami untuk mendiskusikan kebutuhan Anda.
          </p>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/50 transition-all hover:-translate-y-0.5"
          >
            Hubungi P4I
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ===================== FLOATING WAB ===================== */}
      <a
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all hover:-translate-y-1 group"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none border border-slate-100">
          Hubungi Kami
        </span>
      </a>
    </div>
  );
}
