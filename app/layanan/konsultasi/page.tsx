import React from "react";
import { Settings, Activity, Lightbulb, CheckCircle2, ShieldCheck, FileText } from "lucide-react";

export const metadata = {
  title: "Konsultasi IT & ERP Enterprise | P4I Corporate Hub",
  description: "Layanan konsultasi IT Enterprise, implementasi ERP, dan penyusunan IT Master Plan untuk optimasi proses bisnis perusahaan Anda.",
};

const consultingServices = [
  {
    id: 1,
    title: "Konsultan ERP",
    description: "Integrasi sistem manajemen perusahaan untuk menghilangkan silo data operasional, HR, dan keuangan menjadi satu ekosistem real-time.",
    icon: Settings
  },
  {
    id: 2,
    title: "Analisis Proses Bisnis",
    description: "Audit alur kerja komprehensif untuk mengidentifikasi inefisiensi, redudansi, dan optimalisasi workflow.",
    icon: Activity
  },
  {
    id: 3,
    title: "IT Master Plan",
    description: "Penyusunan cetak biru arsitektur teknologi jangka panjang yang selaras dengan visi strategis dan anggaran perusahaan.",
    icon: Lightbulb
  }
];

const valuePropositions = [
  {
    id: 1,
    title: "Pendekatan Holistik",
    description: "Kami tidak sekadar memasang software, kami membedah arsitektur bisnis Anda.",
    icon: CheckCircle2
  },
  {
    id: 2,
    title: "Security & Scalability",
    description: "Dirancang dengan standar keamanan enterprise yang siap diskalakan.",
    icon: ShieldCheck
  },
  {
    id: 3,
    title: "Dokumentasi Presisi",
    description: "Serah terima dilengkapi dengan Knowledge Management dan dokumentasi teknis komprehensif.",
    icon: FileText
  }
];

export default function KonsultasiPage() {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-200 bg-white">
      {/* A. HERO SECTION (Immersive & Authoritative) */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Minimalist Mesh/Gradient Accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-900/40 blur-3xl opacity-50 mix-blend-screen"></div>
           <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-800/30 blur-3xl opacity-50 mix-blend-screen"></div>
           <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Transformasi Digital untuk <span className="text-blue-400">Skala Enterprise.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Kami membantu perusahaan Anda merancang IT Master Plan, mengimplementasikan ERP, dan mengoptimalkan proses bisnis untuk efisiensi maksimal.
          </p>
          <div className="flex flex-col items-center justify-center gap-3">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Tim%20P4I..." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/50 transition-all hover:shadow-blue-900/80 hover:-translate-y-0.5"
            >
              Jadwalkan Konsultasi Gratis
            </a>
            <p className="text-sm text-slate-400 mt-2 font-medium">Respons dalam 1x24 jam. Tanpa komitmen awal.</p>
          </div>
        </div>
      </section>

      {/* C. VALUE PROPOSITION (Trust Signals) */}
      <section className="bg-slate-900 py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {valuePropositions.map((val) => (
              <div key={val.id} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5">
                <div className="w-12 h-12 bg-blue-900/50 text-blue-400 rounded-xl flex items-center justify-center shrink-0 border border-blue-800/50 shadow-inner">
                  <val.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide">{val.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B. SERVICE GRID (3 Kolom Bento/Card Modern) */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Keahlian Strategis Kami</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Solusi komprehensif yang dirancang khusus untuk memecahkan kompleksitas operasional di level enterprise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultingServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
