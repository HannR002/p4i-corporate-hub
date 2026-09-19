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
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
            Profil Lembaga
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Tentang P4I
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {siteConfig.fullName}
          </p>
        </div>
      </section>

      {/* Profil */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Profil P4I</h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              <strong>{siteConfig.legalName}</strong> didirikan pada{' '}
              {siteConfig.established} sebagai lembaga nirlaba yang berdedikasi
              untuk memajukan pendidikan, penelitian, dan pembangunan di
              Indonesia.
            </p>
            <p>
              P4I hadir sebagai wadah bagi para akademisi, peneliti, praktisi,
              dan profesional untuk mengembangkan ilmu pengetahuan, meningkatkan
              kapasitas sumber daya manusia, serta menerapkan hasil penelitian
              bagi pembangunan nasional.
            </p>
            <p>
              Dengan pengalaman lebih dari satu dekade, P4I telah menyelenggarakan
              berbagai program pelatihan, penelitian, dan publikasi ilmiah yang
              berkontribusi pada pembangunan Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Arah Organisasi */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Arah & Tujuan Organisasi
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Maksud
              </h3>
              <p>
                Menjadi pusat pengembangan pendidikan, penelitian, dan
                pembangunan yang berkontribusi nyata bagi kemajuan Indonesia
                melalui peningkatan kualitas sumber daya manusia dan penerapan
                ilmu pengetahuan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Tujuan
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>
                  Menyelenggarakan pendidikan dan pelatihan profesional untuk
                  meningkatkan kapasitas dan kompetensi sumber daya manusia.
                </li>
                <li>
                  Melaksanakan penelitian terapan yang berkontribusi pada
                  kebijakan publik dan pembangunan daerah.
                </li>
                <li>
                  Memfasilitasi publikasi ilmiah dan diseminasi hasil
                  penelitian.
                </li>
                <li>
                  Mengembangkan sistem informasi dan teknologi untuk mendukung
                  pembangunan berkelanjutan.
                </li>
                <li>
                  Menjalin kerja sama dengan institusi pendidikan, pemerintah,
                  dan organisasi nasional maupun internasional.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bidang Kegiatan */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Bidang Kegiatan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: GraduationCap,
                title: 'Pendidikan & Pelatihan',
                desc: 'Penyelenggaraan program pelatihan profesional, workshop, dan pengembangan kapasitas SDM di berbagai bidang.',
              },
              {
                icon: FlaskConical,
                title: 'Penelitian & Pengembangan',
                desc: 'Pelaksanaan riset terapan dan pengembangan di bidang pembangunan, lingkungan, tata ruang, dan kebijakan publik.',
              },
              {
                icon: Globe,
                title: 'SIG & Pembangunan Wilayah',
                desc: 'Pemanfaatan Sistem Informasi Geografis untuk perencanaan tata ruang, pemetaan, dan analisis spasial.',
              },
              {
                icon: Leaf,
                title: 'Lingkungan & Pembangunan Berkelanjutan',
                desc: 'Pengelolaan lingkungan hidup, KLHS, dan strategi pembangunan berkelanjutan.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Jejak Perjalanan
          </h2>
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
    </div>
  );
}
