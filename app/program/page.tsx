import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { programCategories } from '@/data/programs';
import { BookOpen, Globe, Leaf, Building2, GraduationCap, FlaskConical, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Program',
  description: `Program pelatihan dan pengembangan kapasitas historis ${siteConfig.fullName}.`,
  alternates: {
    canonical: `${siteConfig.metadataBase}/program`,
  },
};

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Building2,
  Leaf,
  GraduationCap,
  FlaskConical,
  BookOpen,
};
import PageHero from '@/app/components/layout/PageHero';

export default function ProgramPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <PageHero
        eyebrow="Pengembangan Kapasitas"
        title="Program P4I"
        description="Area pelatihan dan program pengembangan kelembagaan yang secara historis menjadi fokus kapabilitas P4I."
        compact={true}
      />

      {/* Programs List */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programCategories.map((category) => {
              const IconComp = iconMap[category.icon] || BookOpen;
              return (
                <div key={category.id} className="scroll-mt-24" id={category.id}>
                  <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {category.title}
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.programs.map((program) => (
                      <div
                        key={program}
                        className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow group"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <div>
                          <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                            {program}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center bg-slate-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 p4i-signature-bg opacity-30 mix-blend-screen" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tertarik Mengembangkan SDM Institusi Anda?
              </h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Diskusikan rancangan pelatihan atau konsultasikan kebutuhan spesifik kelembagaan Anda bersama tim ahli P4I.
              </p>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Diskusikan Kebutuhan Pelatihan
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
