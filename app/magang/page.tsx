import React from 'react';
import { siteConfig } from '@/lib/site-config';
import { internshipProgram } from '@/data/internship';
import { Users, GraduationCap, MapPin, Laptop, ShieldCheck, Camera } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Program Magang',
  description: `Program magang dan pembelajaran kerja di ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.metadataBase}/magang`,
  },
};

export default function MagangPage() {
  const featuredImage = internshipProgram.gallery[0];
  const supportingImages = internshipProgram.gallery.slice(1, 5);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
            Pengembangan Talenta
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Program Magang P4I
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Pusat Pendidikan dan Penelitian Pembangunan Indonesia membuka ruang pemberdayaan talenta muda 
            melalui program magang dan pembelajaran kerja terstruktur.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm mb-16">
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Peserta Saat Ini</h2>
                <p className="text-slate-500">Tahun {internshipProgram.year}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <GraduationCap className="w-8 h-8 text-slate-400 mb-4" />
                <span className="text-sm text-slate-500 mb-1">Institusi</span>
                <span className="font-bold text-slate-900">{internshipProgram.institution}</span>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-slate-400 mb-4" />
                <span className="text-sm text-slate-500 mb-1">Jumlah Peserta</span>
                <span className="font-bold text-slate-900">{internshipProgram.participantCount} Siswa</span>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <Laptop className="w-8 h-8 text-slate-400 mb-4" />
                <span className="text-sm text-slate-500 mb-1">Fokus Kegiatan</span>
                <span className="font-bold text-slate-900">Ekosistem Digital</span>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-slate-400 mb-4" />
                <span className="text-sm text-slate-500 mb-1">Lokasi</span>
                <span className="font-bold text-slate-900">Kantor P4I</span>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-800">
              <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                <strong className="font-semibold">Perlindungan Privasi:</strong> Mengacu pada standar etika dokumentasi kelembagaan, 
                P4I tidak mempublikasikan nama lengkap, kontak pribadi, maupun nomor induk siswa. Dokumentasi visual 
                ditampilkan secara kolektif untuk menggambarkan suasana pembelajaran kerja di lingkungan P4I.
              </p>
            </div>
          </div>

          {/* Galeri Dokumentasi */}
          <div className="mb-20">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dokumentasi Program Magang</h2>
              <div className="w-20 h-1.5 bg-blue-600 mt-4 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[600px]">
              {/* Featured Image */}
              <div className="md:col-span-8 relative rounded-2xl overflow-hidden bg-slate-100 h-[300px] md:h-full group shadow-sm border border-slate-200">
                <Image
                  src={featuredImage.image}
                  alt={featuredImage.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <Camera className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{featuredImage.source}</span>
                  </div>
                  <p className="text-white text-sm font-medium">{featuredImage.caption}</p>
                </div>
              </div>

              {/* Supporting Images Grid */}
              <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 md:grid-rows-4 gap-4 h-full">
                {supportingImages.map((item, idx) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden bg-slate-100 h-32 md:h-auto group shadow-sm border border-slate-200">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500 italic">
                Suasana kegiatan magang dan pembelajaran kerja peserta SMK Adhiyaksa Bogor di P4I.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
