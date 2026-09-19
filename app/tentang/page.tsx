import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { milestones } from '@/data/timeline';
import { GraduationCap, FlaskConical, Globe, Leaf } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang P4I',
  description: `Profil ${siteConfig.fullName} — sejarah, visi, misi, dan bidang kegiatan.`,
  alternates: {
    canonical: `${siteConfig.metadataBase}/tentang`,
  },
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-extrabold text-slate-900 sticky top-24">
                Profil & Sejarah
              </h2>
            </div>
            <div className="md:col-span-8 prose prose-slate prose-lg text-slate-600">
              <p>
                <strong>{siteConfig.legalName}</strong> secara resmi didirikan pada tanggal <strong>12 Mei 2014</strong>. Sejak awal berdirinya, P4I dikonsepkan sebagai lembaga nirlaba independen yang mendedikasikan diri untuk kemajuan pendidikan, penelitian, dan penerapan ilmu pengetahuan sebagai pilar utama pembangunan di Indonesia.
              </p>
              <p>
                Kami hadir di tengah dinamika kebutuhan pembangunan nasional sebagai wadah kolaboratif. P4I mempertemukan para akademisi, peneliti, praktisi lapangan, dan profesional lintas disiplin. Kolaborasi ini bertujuan untuk memastikan bahwa setiap strategi pembangunan tidak hanya berlandaskan teori akademis yang kuat, tetapi juga dapat diimplementasikan secara taktis di lapangan.
              </p>
              <p>
                Selama lebih dari satu dekade perjalanannya, P4I telah mengembangkan berbagai inisiatif strategis. Dari peningkatan kapasitas sumber daya manusia di tingkat pemerintahan daerah hingga kajian tata ruang dan pemetaan wilayah berbasis Sistem Informasi Geografis (GIS).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ARAH ORGANISASI ===================== */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Arah Organisasi
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Landasan maksud dan tujuan pengembangan kelembagaan P4I.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-base">1</span>
                Maksud Kelembagaan
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Menjadi pusat pengembangan keilmuan, pendidikan, penelitian, dan pembangunan yang bereputasi tinggi. P4I bermaksud memberikan kontribusi nyata bagi kemajuan bangsa melalui peningkatan kualitas sumber daya manusia dan penerapan solusi berbasis data dalam berbagai sektor pembangunan.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-base">2</span>
                Tujuan Strategis
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">Menyelenggarakan program pendidikan dan pelatihan profesional yang bermutu secara berkelanjutan.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">Melaksanakan dan mendorong penelitian terapan untuk mendukung formulasi kebijakan publik.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">Memfasilitasi diseminasi ilmu pengetahuan melalui platform publikasi ilmiah berkualitas.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">Berperan aktif dalam kajian tata ruang dan perencanaan pembangunan berwawasan lingkungan.</span>
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
              Bidang Kegiatan Utama
            </h2>
            <p className="text-lg text-slate-500">
              Pilar operasional yang menjadi fokus kepakaran P4I.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Pendidikan & Pelatihan',
                desc: 'Penyelenggaraan program pelatihan profesional, bimbingan teknis, dan pengembangan kapasitas sumber daya manusia di berbagai bidang strategis pemerintahan maupun sektor swasta.',
              },
              {
                icon: FlaskConical,
                title: 'Penelitian & Pengembangan',
                desc: 'Pelaksanaan riset terapan dan pengembangan inovasi. Berfokus pada pembangunan daerah, analisis tata ruang, serta tinjauan kritis dan evaluasi terhadap efektivitas kebijakan publik.',
              },
              {
                icon: Globe,
                title: 'SIG & Pembangunan Wilayah',
                desc: 'Pemanfaatan secara intensif Sistem Informasi Geografis (SIG/GIS) untuk keperluan pemetaan spasial, perencanaan infrastruktur, analisis kewilayahan, dan strategi mitigasi bencana terpadu.',
              },
              {
                icon: Leaf,
                title: 'Lingkungan & Pembangunan Berkelanjutan',
                desc: 'Penyusunan Kajian Lingkungan Hidup Strategis (KLHS) dan perancangan strategi pengelolaan lingkungan hidup terpadu yang menjamin keberlanjutan sumber daya alam dan ekosistem.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 flex flex-col sm:flex-row gap-6 hover:shadow-lg hover:border-blue-100 transition-all group"
              >
                <div className="w-16 h-16 bg-white text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
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
      <section className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 p4i-signature-bg opacity-20 mix-blend-screen" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Jejak Perjalanan P4I
            </h2>
            <p className="text-lg text-slate-400">
              Garis waktu dan tonggak pencapaian historis lembaga.
            </p>
          </div>
          <div className="space-y-0 border-l-2 border-slate-800 ml-4 md:ml-0">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
                <div className="absolute left-[-9px] top-1.5 w-4 h-4 bg-slate-900 border-4 border-blue-500 rounded-full" />
                <div>
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider mb-4">
                    {m.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {m.title}
                  </h3>
                  <p className="text-base text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HUTAN ORGANIK & TRANSFORMASI ===================== */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Jejak Program Historis */}
            <div className="md:col-span-12">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">
                Jejak Program Historis
              </h2>
            </div>
            
            <div className="md:col-span-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Laboratorium Alam "Hutan Organik"
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600">
                  <p>
                    Sebagai bagian penting dari sejarah dan kepakaran awalnya, P4I pernah memprakarsai konsep <strong>Laboratorium Alam Pengembangan Wilayah "Hutan Organik"</strong>.
                  </p>
                  <p>
                    Inisiatif lingkungan historis ini berfokus pada upaya rehabilitasi lahan, integrasi pertanian organik berkelanjutan (<em>integrated farming</em>), dan pengembangan kawasan ekowisata perdesaan.
                  </p>
                  <p>
                    Bagi P4I, Hutan Organik bukan sekadar proyek pelestarian, melainkan wahana edukasi ruang publik. Wilayah tersebut dimanfaatkan sebagai sarana pengaplikasian langsung metode <strong>Sistem Informasi Geografis (SIG)</strong> untuk pemetaan potensi desa, perencanaan tata ruang ekosistem, serta mitigasi degradasi lahan.
                  </p>
                  <p>
                    Pengalaman fundamental ini secara permanen membentuk DNA kelembagaan P4I—sebuah komitmen untuk senantiasa menghargai harmoni antara manusia dan alam dalam setiap strategi formulasi kebijakan dan pembangunan wilayah.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Transformasi Digital
                </h3>
                <div className="prose prose-slate prose-sm text-slate-600">
                  <p>
                    Menghadapi kompleksitas tantangan di era informasi dan pergeseran kebutuhan riset, P4I secara proaktif memperkuat infrastruktur kelembagaan berbasis digital pada tahun 2026.
                  </p>
                  <p>
                    Langkah nyata dari transformasi ini diwujudkan melalui pembentukan ekosistem penerbitan ilmiah bernama <strong>P4I Publisher</strong>. Melalui inisiatif ini, lembaga memfasilitasi diseminasi keilmuan secara <em>open access</em> agar hasil penelitian dapat dijangkau dan dimanfaatkan secara lebih luas oleh komunitas akademik global maupun masyarakat umum.
                  </p>
                  <p>
                    Selain itu, lembaga juga sedang menata ulang arsitektur digital pelayanannya untuk masa depan. Ini mencakup kesiapan infrastruktur untuk layanan konsultasi digital, pengelolaan aset e-Book, penyajian WebGIS, hingga pangkalan data statistik publik—seluruhnya ditujukan agar layanan P4I dapat diberikan secara lebih efisien, transparan, dan terintegrasi secara modern.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
