import React from 'react';
import { siteConfig } from '@/lib/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: `Kebijakan privasi dan pengelolaan data oleh ${siteConfig.fullName}.`,
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
            Kebijakan Privasi
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              Halaman ini menjelaskan kebijakan privasi dan pengumpulan data yang berlaku di situs web resmi <strong>{siteConfig.legalName}</strong> ({siteConfig.metadataBase}).
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">1. Pengumpulan Informasi</h2>
            <p>
              Situs ini berfungsi utamanya sebagai portal informasi kelembagaan. Kami tidak secara aktif mengumpulkan data pribadi sensitif pengunjung melalui situs ini kecuali data analitik dasar untuk tujuan pengembangan situs, atau informasi yang Anda kirimkan secara sukarela melalui kanal kontak yang tersedia (seperti email atau WhatsApp).
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">2. Penggunaan Data</h2>
            <p>
              Informasi yang Anda sampaikan melalui kanal komunikasi resmi kami (contoh: email ke <em>admin@p4ijournal.org</em>) hanya akan digunakan untuk keperluan korespondensi, merespons pertanyaan, pendaftaran program pelatihan, atau tujuan kolaborasi terkait.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">3. Layanan Pihak Ketiga</h2>
            <p>
              P4I menggunakan layanan pihak ketiga yang terintegrasi di dalam website, meliputi:
            </p>
            <ul className="list-disc pl-5">
              <li><strong>Google Analytics:</strong> Untuk memantau metrik lalu lintas situs secara anonim.</li>
              <li><strong>Google Maps:</strong> Diintegrasikan (via <em>iframe</em>) murni sebagai referensi visual lokasi kantor, tunduk pada kebijakan privasi Google.</li>
              <li><strong>P4I Publisher (OJS):</strong> Layanan penerbitan jurnal kami ditautkan secara eksternal. Apabila Anda mendaftarkan diri sebagai penulis/reviewer pada platform jurnal tersebut, maka pengelolaan data tunduk pada kebijakan sistem jurnal (OJS) terkait.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-10">4. Perubahan Kebijakan</h2>
            <p>
              Kebijakan ini dapat kami perbarui sewaktu-waktu tanpa pemberitahuan sebelumnya, menyesuaikan dengan regulasi yang berlaku atau perubahan fitur pada website.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">5. Kontak</h2>
            <p>
              Bila Anda memiliki pertanyaan tentang kebijakan privasi ini, Anda dapat menghubungi kami di <strong>admin@p4ijournal.org</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
