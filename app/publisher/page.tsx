import React from 'react';
import { Microscope, Library, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: "P4I Publisher | Publikasi Jurnal Ilmiah Terakreditasi",
  description: "YAYASAN PUSAT PENDIDIKAN DAN PENELITIAN PEMBANGUNAN INDONESIA - Platform publikasi jurnal ilmiah open access.",
};

export default function PublisherPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-200">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Mesh Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-orange-600/20 blur-3xl opacity-50 mix-blend-screen"></div>
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-red-600/20 blur-3xl opacity-50 mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-orange-400 bg-orange-400/10 rounded-full border border-orange-400/20">
            Open Access Journal Publishing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            P4I <span className="text-orange-500">Publisher</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-4 font-medium uppercase tracking-wider">
            YAYASAN PUSAT PENDIDIKAN DAN PENELITIAN PEMBANGUNAN INDONESIA
          </p>
          <p className="text-base text-slate-400 max-w-2xl mx-auto mb-10">
            Platform publikasi jurnal multidisiplin berstandar global. Memfasilitasi peneliti, akademisi, dan profesional untuk mendiseminasikan karya ilmiah berdampak tinggi.
          </p>
        </div>
      </section>

      {/* JOURNAL GRID SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Katalog Jurnal Ilmiah</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Terindeks nasional dan internasional, memastikan karya Anda diakui dan dapat diakses oleh komunitas akademik global.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Journal 1 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-orange-200 shadow-sm hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 flex flex-col h-full group">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <Microscope className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Science and Technology</h3>
              <p className="text-sm font-semibold text-orange-600 mb-4 font-mono">E-ISSN: 2987-xxxx</p>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                Jurnal yang memfokuskan pada inovasi terkini di bidang sains murni, rekayasa, teknologi informasi, dan pengembangan sistem cerdas.
              </p>
              <a href="#" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors">
                Kunjungi Jurnal
              </a>
            </div>

            {/* Journal 2 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-red-200 shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 flex flex-col h-full group">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <Library className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Social, Economic, and Humanities</h3>
              <p className="text-sm font-semibold text-red-600 mb-4 font-mono">E-ISSN: 2987-yyyy</p>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                Wadah publikasi untuk riset ilmu sosial, dinamika ekonomi makro/mikro, manajemen bisnis, dan kajian humaniora komprehensif.
              </p>
              <a href="#" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors">
                Kunjungi Jurnal
              </a>
            </div>

            {/* Journal 3 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col h-full group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Health Sciences</h3>
              <p className="text-sm font-semibold text-blue-600 mb-4 font-mono">E-ISSN: 2987-zzzz</p>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                Mempublikasikan penelitian mutakhir di bidang kesehatan masyarakat, keperawatan, farmasi, dan kebijakan sistem kesehatan nasional.
              </p>
              <a href="#" className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors">
                Kunjungi Jurnal
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
