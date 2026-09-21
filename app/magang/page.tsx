import React from 'react';
import { siteConfig } from '@/lib/site-config';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Briefcase, Code, Monitor, FolderTree, Database, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: `Program Magang P4I | ${siteConfig.fullName}`,
  description: 'Program pembelajaran praktis dan magang kerja di lingkungan digital P4I.',
  alternates: {
    canonical: 'https://www.p4ijournal.org/magang'
  }
};

const learningAreas = [
  {
    title: 'Web Development',
    description: 'Pengenalan dan praktik pengembangan antarmuka web modern.',
    icon: <Code className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Sistem Informasi',
    description: 'Mempelajari tata kelola sistem informasi kelembagaan.',
    icon: <Database className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Pengelolaan Website',
    description: 'Praktik manajemen konten dan operasi platform website.',
    icon: <Monitor className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Publikasi Digital',
    description: 'Pengenalan pada alur kerja penerbitan digital dan OJS.',
    icon: <Briefcase className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Dokumentasi & Arsip',
    description: 'Praktik pengarsipan data kelembagaan secara sistematis.',
    icon: <FolderTree className="w-6 h-6 text-blue-600" />
  }
];

export default function MagangPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-blue-700 bg-blue-100/50 rounded-full border border-blue-200 uppercase">
            Pemberdayaan Talenta
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Program <span className="text-blue-600">Magang P4I</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Menjadi ruang belajar dan pengembangan keterampilan praktis bagi talenta muda dalam lingkungan kerja kelembagaan dan transformasi digital.
          </p>
        </div>
      </section>

      {/* Tentang Program Magang */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Tentang Program Magang</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Program Magang P4I dirancang sebagai sarana pembelajaran langsung (*hands-on learning*) di mana peserta dihadapkan pada praktik operasional kelembagaan, pengelolaan platform digital, hingga dokumentasi arsip. P4I berkomitmen mendukung ekosistem pendidikan melalui transfer pengetahuan praktis.
            </p>
            
            {/* Current Internship Status */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mt-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Status Pembelajaran Saat Ini</h3>
              <p className="text-slate-700 font-medium">
                Saat ini {siteConfig.name} menerima <strong className="text-blue-700">empat siswa SMK Adhiyaksa Bogor</strong> dalam kegiatan magang dan pembelajaran kerja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bidang Pembelajaran */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Bidang Pembelajaran</h2>
            <p className="text-lg text-slate-600">
              Bidang pembelajaran dalam program magang dapat mencakup beberapa aspek operasional dan pengembangan digital berikut:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Tertarik Berkolaborasi?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Untuk informasi lebih lanjut mengenai penjajakan kerja sama program magang atau pelatihan dari institusi pendidikan Anda, silakan hubungi kami.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Hubungi P4I
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
