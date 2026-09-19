import React from 'react';
import { siteConfig } from '@/lib/site-config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description: `Syarat dan ketentuan penggunaan situs web ${siteConfig.fullName}.`,
};

export default function SyaratKetentuanPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
            Syarat & Ketentuan
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              Selamat datang di situs web resmi <strong>{siteConfig.legalName}</strong>. Dengan mengakses dan menggunakan situs ini, Anda dianggap telah membaca, memahami, dan menyetujui ketentuan berikut.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">1. Sifat Informasi</h2>
            <p>
              Situs ini disediakan sebagai portal informasi publik. Seluruh konten terkait program pendidikan, penelitian, dan publikasi ditujukan untuk memberi gambaran umum mengenai kepakaran P4I.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">2. Informasi Historis (Disclaimer)</h2>
            <p>
              Harap dicatat bahwa beberapa bagian dari situs ini (seperti Struktur Kelembagaan, Jejaring Tenaga Ahli, dan Arsip Visual) memuat <strong>dokumentasi historis</strong> dari riwayat lembaga (sejak 2014 dan seterusnya). Data historis tersebut ditandai dengan label peringatan dan tidak secara otomatis mewakili struktur tata kelola operasional maupun staf aktif pada hari ini, sampai dilakukan verifikasi pembaruan data secara resmi.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">3. Kekayaan Intelektual (Hak Cipta)</h2>
            <p>
              Semua materi publikasi, teks, aset grafis, dan logo P4I yang berada di domain ini adalah milik {siteConfig.legalName}. Konten tidak diperkenankan untuk direproduksi, disalin, atau didistribusikan untuk tujuan komersial tanpa izin tertulis dari pihak P4I.
            </p>
            <p>
              Adapun lisensi kekayaan intelektual (hak cipta/copyleft) atas jurnal-jurnal dan artikel ilmiah yang terbit melalui <strong>P4I Publisher</strong> mengikuti ketentuan lisensi <em>Open Access</em> masing-masing jurnal yang berada di platform OJS.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">4. Tautan Eksternal</h2>
            <p>
              Situs ini mungkin menyediakan tautan (*link*) ke platform pihak ketiga (contoh: WhatsApp, Instagram, Gmail, dan sistem jurnal OJS P4I). P4I tidak bertanggung jawab atas kerahasiaan data atau aktivitas Anda di situs eksternal tersebut.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">5. Pembaruan Konten</h2>
            <p>
              P4I berhak kapan saja memodifikasi, menambah, atau menghapus layanan maupun informasi dari situs web ini, tanpa kewajiban untuk memberikan pemberitahuan terlebih dahulu.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-10">6. Hubungi Kami</h2>
            <p>
              Apabila terdapat pertanyaan mengenai syarat dan ketentuan penggunaan ini, silakan hubungi kami di <strong>admin@p4ijournal.org</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
