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
  category: 'pelatihan' | 'penelitian' | 'publikasi' | 'kelembagaan';
  historical: boolean;
  image?: string; // URL path for main image
  gallery?: string[]; // URL paths for additional images
  location?: string;
  source?: string;
}

export const activities: Activity[] = [
  {
    id: 'establishment',
    slug: 'pendirian-yayasan-p4i',
    title: 'Pendirian Yayasan P4I',
    description:
      'Yayasan Pusat Pendidikan dan Penelitian Pembangunan Indonesia (P4I) resmi didirikan sebagai lembaga nirlaba independen yang berdedikasi untuk memajukan pendidikan, penelitian, dan penerapan ilmu pengetahuan bagi pembangunan di Indonesia.',
    date: '12 Mei 2014',
    year: 2014,
    category: 'kelembagaan',
    historical: true,
  },
  {
    id: 'training-programs',
    slug: 'pengembangan-program-pelatihan',
    title: 'Pengembangan Program Pelatihan',
    description:
      'P4I secara ekstensif menyelenggarakan dan mengembangkan program pelatihan profesional di bidang Sistem Informasi Geografis (GIS), perencanaan wilayah, pengelolaan lingkungan hidup, serta strategi pembangunan berkelanjutan, bekerja sama dengan berbagai instansi.',
    date: '2014–2023',
    year: 2014,
    category: 'pelatihan',
    historical: true,
  },
  {
    id: 'research-activities',
    slug: 'kegiatan-penelitian-dan-pengembangan',
    title: 'Kegiatan Penelitian & Pengembangan',
    description:
      'Pelaksanaan kegiatan riset dan pengembangan inovatif di berbagai bidang strategis, termasuk pembangunan ekonomi daerah, inventarisasi sumber daya alam, dan analisis tata ruang terpadu.',
    date: '2014–2025',
    year: 2014,
    category: 'penelitian',
    historical: true,
  },
  {
    id: 'digital-transformation',
    slug: 'transformasi-digital-p4i',
    title: 'Transformasi Digital P4I',
    description:
      'Pembaruan identitas dan pergeseran fokus menuju ekosistem digital untuk memperluas jangkauan layanan pendidikan dan penelitian, serta menata ulang arsitektur informasi lembaga.',
    year: 2026,
    category: 'kelembagaan',
    historical: true,
  },
  {
    id: 'publisher-launch',
    slug: 'peluncuran-p4i-publisher',
    title: 'Peluncuran P4I Publisher',
    description:
      'P4I Publisher resmi beroperasi sebagai inisiatif baru penerbitan jurnal ilmiah open access, memfasilitasi publikasi lintas disiplin dengan standar akademik yang ketat.',
    year: 2026,
    category: 'publikasi',
    historical: true,
  },
];
