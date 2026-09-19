/**
 * Activities / Kegiatan Data
 * Historical and current institutional activities.
 * Add new activities here — they will be rendered automatically.
 */

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string; // Display format
  year: number;
  category: 'pelatihan' | 'penelitian' | 'publikasi' | 'kelembagaan';
}

export const activities: Activity[] = [
  {
    id: 'establishment',
    title: 'Pendirian Yayasan P4I',
    description:
      'Yayasan Pusat Pendidikan dan Penelitian Pembangunan Indonesia (P4I) resmi didirikan sebagai lembaga yang berdedikasi untuk pendidikan, penelitian, dan pembangunan Indonesia.',
    date: '12 Mei 2014',
    year: 2014,
    category: 'kelembagaan',
  },
  {
    id: 'training-programs',
    title: 'Pengembangan Program Pelatihan',
    description:
      'P4I mengembangkan berbagai program pelatihan profesional di bidang GIS, perencanaan wilayah, lingkungan hidup, dan pembangunan berkelanjutan untuk instansi pemerintah dan organisasi.',
    date: '2014–2023',
    year: 2014,
    category: 'pelatihan',
  },
  {
    id: 'research-activities',
    title: 'Kegiatan Penelitian & Pengembangan',
    description:
      'Pelaksanaan kegiatan riset dan pengembangan di berbagai bidang strategis termasuk pembangunan daerah, sumber daya alam, dan tata ruang.',
    date: '2014–2025',
    year: 2014,
    category: 'penelitian',
  },
  {
    id: 'digital-transformation',
    title: 'Transformasi Digital P4I',
    description:
      'Pengembangan website resmi P4I dan infrastruktur digital untuk memperluas jangkauan layanan pendidikan dan penelitian.',
    date: '2026',
    year: 2026,
    category: 'kelembagaan',
  },
  {
    id: 'publisher-launch',
    title: 'Peluncuran P4I Publisher',
    description:
      'P4I Publisher resmi diluncurkan sebagai platform penerbitan jurnal ilmiah open access, dimulai dengan Journal ISTE (Interdisciplinary Science, Technology and Engineering).',
    date: '2026',
    year: 2026,
    category: 'publikasi',
  },
];
