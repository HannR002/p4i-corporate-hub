/**
 * Institutional Timeline / Milestones
 */

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    year: '2014',
    title: 'Pendirian P4I',
    description:
      'Yayasan Pusat Pendidikan dan Penelitian Pembangunan Indonesia resmi didirikan pada 12 Mei 2014.',
  },
  {
    year: '2014–2023',
    title: 'Pengembangan Program Pendidikan & Pelatihan',
    description:
      'Pelaksanaan program pelatihan profesional di bidang GIS, perencanaan wilayah, pembangunan daerah, dan lingkungan hidup.',
  },
  {
    year: '2014–2025',
    title: 'Riset & Pengembangan',
    description:
      'Kegiatan penelitian dan pengembangan di berbagai bidang strategis untuk mendukung pembangunan Indonesia.',
  },
  {
    year: '2026',
    title: 'Transformasi Digital',
    description:
      'Pengembangan website resmi P4I sebagai platform digital untuk memperluas jangkauan layanan.',
  },
  {
    year: '2026',
    title: 'P4I Publisher',
    description:
      'Peluncuran platform penerbitan jurnal ilmiah open access dengan Journal ISTE sebagai jurnal pertama.',
  },
];
