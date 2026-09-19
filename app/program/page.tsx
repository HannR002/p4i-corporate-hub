import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { programCategories } from '@/data/programs';
import {
  Globe,
  Building2,
  Leaf,
  FlaskConical,
  GraduationCap,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program Pelatihan & Pengembangan',
  description: `Program pelatihan profesional dari ${siteConfig.name} — GIS, perencanaan wilayah, lingkungan, dan pembangunan berkelanjutan.`,
};

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Building2,
  Leaf,
  FlaskConical,
  GraduationCap,
  BookOpen,
};

export default function ProgramPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
            Pendidikan & Pelatihan
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Program P4I
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Pelatihan profesional dan pengembangan kapasitas di bidang strategis
            untuk instansi pemerintah, organisasi, dan profesional.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programCategories.map((cat) => {
              const IconComp = iconMap[cat.icon] || BookOpen;
              return (
                <div
                  key={cat.id}
                  className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        {cat.title}
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.programs.map((prog) => (
                      <div
                        key={prog}
                        className="bg-white rounded-xl px-4 py-3 border border-slate-100 text-sm text-slate-700"
                      >
                        {prog}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Diskusikan Kebutuhan Pelatihan
          </h2>
          <p className="text-slate-500 mb-6">
            P4I menyediakan program pelatihan yang dapat disesuaikan dengan
            kebutuhan instansi dan organisasi Anda.
          </p>
          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
          >
            Hubungi via WhatsApp
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
