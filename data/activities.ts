/**
 * Activities / Kegiatan Data
 * Historical and current institutional activities.
 * Add new activities here — they will be rendered automatically.
 */

export interface Activity {
  id: string;
  slug: string;
  title: string;
  description: string;
  date?: string; // Display format, optional if we only know year
  year: number;
  category: string;
  historical: boolean;
  image?: string; // URL path for main image
  alt?: string;
  gallery?: string[]; // URL paths for additional images
  location?: string;
  source?: string;
}

export const activities: Activity[] = [
  {
    id: 'establishment',
    slug: 'pendirian-yayasan-p4i',
    title: 'Pendirian Kelembagaan P4I',
    description:
      'Yayasan Pusat Pendidikan dan Penelitian Pembangunan Indonesia (P4I) didirikan sebagai lembaga nirlaba independen yang berdedikasi untuk memajukan pendidikan, penelitian, dan penerapan ilmu pengetahuan bagi pembangunan di Indonesia.',
    date: '12 Mei 2014',
    year: 2014,
    category: 'Arsip Kelembagaan',
    historical: true,
    image: '/archive/p4i/maps/p4i-alamat-bogor-historical-map.png',
    alt: 'Peta historis lokasi awal institusi P4I di Bogor.',
    location: 'Bogor, Jawa Barat',
    source: 'Arsip P4I, 2014'
  },
  {
    id: 'hutan-organik-zoning',
    slug: 'pemetaan-zonasi-hutan-organik',
    title: 'Pemetaan Zonasi Guna Lahan',
    description:
      'Kegiatan perencanaan dan pemetaan tata ruang Laboratorium Alam Hutan Organik untuk membagi area konservasi, area ekonomi/pertanian, dan fasilitas lingkungan secara terpadu.',
    date: '2001–2014',
    year: 2014,
    category: 'GIS & Monitoring',
    historical: true,
    image: '/archive/p4i/hutan-organik/hutan-organik-zonasi-guna-lahan-2001-2014.png',
    alt: 'Diagram pemetaan zonasi guna lahan Hutan Organik.',
    source: 'Profil Lembaga P4I'
  },
  {
    id: 'hutan-organik-rehabilitation',
    slug: 'rehabilitasi-lahan-kritis',
    title: 'Rehabilitasi Lahan Kritis (Hutan Organik)',
    description:
      'Program pemulihan kawasan dan perbaikan kualitas lingkungan, mengubah kondisi lahan terbuka menjadi kawasan bervegetasi secara bertahap.',
    date: '2001–2014',
    year: 2014,
    category: 'Dokumentasi Hutan Organik',
    historical: true,
    image: '/archive/p4i/hutan-organik/hutan-organik-progress-rehabilitasi-2001-2014.webp',
    alt: 'Kolase dokumentasi progres rehabilitasi lahan kritis menjadi hutan organik.',
    source: 'Profil Lembaga P4I'
  },
  {
    id: 'hutan-organik-agriculture',
    slug: 'pengembangan-pertanian-organik',
    title: 'Pengembangan Pertanian Organik',
    description:
      'Praktik dan pengembangan sistem pertanian yang selaras dengan prinsip kelestarian ekosistem dan konsep pembangunan wilayah.',
    date: 'Arsip Historis',
    year: 2014,
    category: 'Pertanian Organik',
    historical: true,
    image: '/archive/p4i/hutan-organik/hutan-organik-pertanian-organik.webp',
    alt: 'Dokumentasi bedeng dan lahan budidaya pertanian organik di kawasan Hutan Organik.',
    source: 'Profil Lembaga P4I'
  },
  {
    id: 'hutan-organik-monitoring',
    slug: 'monitoring-citra-satelit',
    title: 'Monitoring Tutupan Lahan',
    description:
      'Evaluasi historis menggunakan pendekatan spasial dan citra satelit dari waktu ke waktu (2003, 2007, 2014) untuk menilai dampak fisik program pada lanskap.',
    date: '2003–2014',
    year: 2014,
    category: 'GIS & Monitoring',
    historical: true,
    image: '/archive/p4i/hutan-organik/hutan-organik-monitoring-citra-satelit.png',
    alt: 'Monitoring perubahan tutupan lahan melalui citra satelit resolusi tinggi.',
    source: 'Profil Lembaga P4I'
  },
  {
    id: 'digital-transformation',
    slug: 'transformasi-digital-p4i',
    title: 'Transformasi Digital Kelembagaan',
    description:
      'Pembaruan identitas dan pergeseran menuju infrastruktur ekosistem digital untuk memperluas jangkauan layanan pendidikan, publikasi (OJS dan E-Book), serta pengarsipan data.',
    year: 2026,
    category: 'Transformasi Digital',
    historical: true,
    image: '/archive/p4i/digital-history/p4i-website-profil-historis.png',
    alt: 'Arsip website profil institusi P4I versi sebelum transformasi.',
    source: 'Profil Lembaga P4I'
  }
];
