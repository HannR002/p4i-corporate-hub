/**
 * Program / Training Data
 * Grouped by institutional capability area
 */

export interface ProgramCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  programs: string[];
}

export const programCategories: ProgramCategory[] = [
  {
    id: 'gis',
    title: 'Sistem Informasi Geografis (SIG/GIS)',
    description:
      'Pelatihan GIS komprehensif untuk pemetaan, analisis spasial, dan pengambilan keputusan berbasis data geospasial.',
    icon: 'Globe',
    programs: [
      'GIS Dasar & Lanjutan',
      'GIS untuk Kebijakan Daerah',
      'Pengolahan Citra Satelit',
      'GIS untuk Sumber Daya Alam',
      'GIS dan Penataan Ruang',
      'Inventarisasi Berbasis SIG',
      'Pemetaan Batas Wilayah',
      'GIS Kebencanaan',
    ],
  },
  {
    id: 'regional-development',
    title: 'Perencanaan & Pembangunan Wilayah',
    description:
      'Program pelatihan untuk perencanaan pembangunan daerah, tata ruang, dan pengembangan kawasan.',
    icon: 'Building2',
    programs: [
      'Perencanaan Pembangunan Daerah',
      'Pembangunan Ekonomi Daerah',
      'Renstra, Renja, RPJM & RPJP',
      'Tata Ruang',
      'Perencanaan dan Penganggaran',
      'Pembangunan Kawasan Perdesaan',
      'Pariwisata Daerah',
    ],
  },
  {
    id: 'environment',
    title: 'Lingkungan & Pembangunan Berkelanjutan',
    description:
      'Pelatihan pengelolaan lingkungan hidup dan pembangunan berkelanjutan untuk instansi dan organisasi.',
    icon: 'Leaf',
    programs: [
      'Pembangunan Berkelanjutan',
      'KLHS (Kajian Lingkungan Hidup Strategis)',
      'Pengelolaan Lingkungan Hidup',
      'Pengelolaan Sampah',
      'Pertanian Organik & Agroforestry',
    ],
  },
  {
    id: 'research',
    title: 'Penelitian & Pengembangan',
    description:
      'Dukungan riset dan pengembangan kapasitas penelitian untuk institusi akademik dan pemerintah.',
    icon: 'FlaskConical',
    programs: [
      'Metodologi Penelitian',
      'Research & Development',
      'Customized / In-house Training',
    ],
  },
];
