import Link from 'next/link';
import PageHero from '@/app/components/layout/PageHero';
import { pageMetadata } from '@/lib/content-metadata';
import { requireRoute } from '@/lib/require-route';

export const metadata = pageMetadata(
  '/layanan/konsultasi',
  'Informasi Konsultasi',
  'Kanal informasi untuk mendiskusikan kebutuhan kelembagaan dengan P4I.'
);

export default function KonsultasiPage() {
  requireRoute('/layanan/konsultasi');
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Informasi Kelembagaan"
        title="Informasi Konsultasi P4I"
        description="Hubungi P4I untuk mendiskusikan kebutuhan kelembagaan Anda."
        compact
      />
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-slate-600">
        <p>
          Informasi tentang ruang lingkup, ketersediaan tim, dan pelaksanaan kegiatan dapat
          dikonfirmasi melalui kanal komunikasi resmi P4I.
        </p>
        <Link
          href="/kontak"
          className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-white font-semibold focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Hubungi P4I
        </Link>
      </section>
    </div>
  );
}
