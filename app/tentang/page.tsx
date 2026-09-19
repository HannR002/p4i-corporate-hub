import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { milestones } from '@/data/timeline';
import { GraduationCap, FlaskConical, Globe, Leaf } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang P4I',
  description: `Profil ${siteConfig.fullName} — sejarah, visi, misi, dan bidang kegiatan.`,
};

export default function TentangPage() {
  return (
    <div className="bg-white">
      {/* ===================== HERO ===================== */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 p4i-signature-bg opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
            Profil Lembaga
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Tentang P4I
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-700 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.fullName}
          </p>
        </div>
      </section>

      {/* ===================== PROFIL & SEJARAH ===================== */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Profil & Sejarah</h2>
            <p>
              <strong>{siteConfig.legalName}</strong> didirikan pada <strong>12 Mei 2014</strong> sebagai lembaga nirlaba independen yang berdedikasi untuk memajukan pendidikan, penelitian, dan penerapan ilmu pengetahuan bagi pembangunan di Indonesia.
            </p>
            <p>
              P4I hadir di tengah dinamika kebutuhan pembangunan nasional sebagai wadah kolaboratif bagi akademisi, peneliti, praktisi, dan profesional. Selama lebih dari satu dekade, kami telah mengembangkan berbagai inisiatif strategis mulai dari peningkatan kapasitas sumber daya manusia hingga riset kewilayahan.
            </p>
            <p>
              Perjalanan kelembagaan P4I berawal dari semangat untuk menjembatani antara teori akademis dan praktik lapangan, memastikan bahwa setiap kebijakan dan program pembangunan dapat didukung oleh data, kajian ilmiah, serta sumber daya manusia yang mumpuni.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== ARAH ORGANISASI ===================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Arah Organisasi
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Maksud dan tujuan pengembangan kelembagaan P4I.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
                Maksud
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Menjadi pusat pengembangan pendidikan, penelitian, dan pembangunan yang berkontribusi nyata bagi kemajuan Indonesia melalui peningkatan kualitas sumber daya manusia dan penerapan ilmu pengetahuan dalam berbagai sektor.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">2</span>
                Tujuan
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>Menyelenggarakan pendidikan dan pelatihan profesional.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>Melaksanakan penelitian terapan untuk kebijakan publik.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>Memfasilitasi publikasi ilmiah dan literasi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span>Mendukung perencanaan pembangunan berkelanjutan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BIDANG KEGIATAN ===================== */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Bidang Kegiatan
            </h2>
            <p className="text-lg text-slate-500">
              Pilar utama operasional P4I.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Pendidikan & Pelatihan',
                desc: 'Penyelenggaraan program pelatihan profesional, bimbingan teknis, dan pengembangan kapasitas SDM di berbagai bidang pemerintahan maupun swasta.',
              },
              {
                icon: FlaskConical,
                title: 'Penelitian & Pengembangan',
                desc: 'Pelaksanaan riset terapan dan pengembangan di bidang pembangunan daerah, tata ruang, dan evaluasi kebijakan publik.',
              },
              {
                icon: Globe,
                title: 'SIG & Pembangunan Wilayah',
                desc: 'Pemanfaatan Sistem Informasi Geografis (SIG/GIS) untuk pemetaan spasial, analisis kewilayahan, dan mitigasi bencana.',
              },
              {
                icon: Leaf,
                title: 'Lingkungan & Pembangunan Berkelanjutan',
                desc: 'Penyusunan Kajian Lingkungan Hidup Strategis (KLHS) dan strategi pengelolaan lingkungan hidup terpadu.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TIMELINE ===================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Jejak Perjalanan
            </h2>
            <p className="text-lg text-slate-500">
              Tonggak sejarah lembaga dari masa ke masa.
            </p>
          </div>
          <div className="space-y-0 border-l-2 border-slate-200 ml-4 md:ml-0">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
                <div className="absolute left-[-9px] top-1.5 w-4 h-4 bg-white border-4 border-slate-400 rounded-full" />
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
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

      {/* ===================== HISTORICAL PROGRAM & TRANSFORMASI ===================== */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Jejak Program P4I
              </h2>
              <div className="prose prose-slate text-slate-600">
                <p>
                  Sebagai bagian dari sejarah awal berdirinya, P4I pernah memprakarsai konsep <strong>Laboratorium Alam Pengembangan Wilayah "Hutan Organik"</strong>. Inisiatif historis ini menjadi fondasi awal lembaga dalam mengintegrasikan pemahaman spasial, pelestarian lingkungan hidup, dan pemberdayaan masyarakat.
                </p>
                <p>
                  Pengalaman ini membentuk DNA P4I sebagai lembaga yang menghargai harmoni antara manusia dan alam dalam setiap strategi perumusan tata ruang wilayah.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Transformasi Digital
              </h2>
              <div className="prose prose-slate text-slate-600">
                <p>
                  Menghadapi tantangan era informasi, P4I secara aktif memperkuat infrastruktur kelembagaan berbasis digital. Transformasi ini diwujudkan melalui penguatan ekosistem <strong>penerbitan ilmiah (P4I Publisher)</strong> dan sistem manajemen jurnal.
                </p>
                <p>
                  Selain itu, P4I terus menjajaki kapabilitas strategis masa depan, termasuk di bidang <em>Digital Services, e-Books, dan WebGIS</em>, sebagai bentuk adaptasi berkelanjutan untuk melayani kebutuhan pembangunan secara lebih efisien dan modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
