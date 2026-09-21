/**
 * P4I Expert Network Data
 * 
 * IMPORTANT:
 * This is HISTORICAL organization information from the P4I 2014 profile,
 * with selective additions (e.g. Farhan Muhammad) for current digital initiatives.
 * It is NOT presented as the verified current 2026 employment roster.
 */

export type ExpertCategory = 
  | 'Semua'
  | 'Wilayah & Tata Ruang'
  | 'GIS & Teknologi'
  | 'Lingkungan & SDA'
  | 'Sosial & Pemerintahan'
  | 'Infrastruktur'
  | 'Sistem Informasi & Digital'
  | 'Lainnya';

export interface Expert {
  id: string;
  name: string;
  expertise: string;
  qualification: string;
  category: ExpertCategory;
  historical: boolean;
  sourceLabel: string;
  portrait?: string;
  skills?: string[];
}

export const experts: Expert[] = [
  // Sistem Informasi & Digital
  {
    id: 'farhan',
    name: 'Farhan Muhammad',
    expertise: 'Sistem Informasi & Pengembangan Digital',
    qualification: 'Sistem Informasi & Pengembangan Digital',
    category: 'Sistem Informasi & Digital',
    historical: false,
    sourceLabel: 'P4I Digital',
    portrait: '/archive/p4i/people/farhan-muhammad.webp',
    skills: ['Web Development', 'System Analysis', 'Pengembangan Sistem']
  },

  // Wilayah & Tata Ruang
  {
    id: 'harmes',
    name: 'Drs. Harmes, MT',
    expertise: 'Pemerintahan, Tata Ruang & Pembangunan Daerah',
    qualification: 'S2 – Magister Teknik',
    category: 'Wilayah & Tata Ruang',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'apri',
    name: 'Dr. Apri Erisman',
    expertise: 'Pengembangan Wilayah',
    qualification: 'S3 – Doktor',
    category: 'Wilayah & Tata Ruang',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'farida',
    name: 'Farida Lahay, ST, MT',
    expertise: 'Sumber Daya Alam & Tata Ruang',
    qualification: 'S2 – Magister Teknik',
    category: 'Wilayah & Tata Ruang',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'nurjannah',
    name: 'Ir. Nurjannah, M.Si',
    expertise: 'Pengembangan Wilayah & Administrasi Pemerintahan',
    qualification: 'S2',
    category: 'Wilayah & Tata Ruang',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },

  // Lingkungan & SDA
  {
    id: 'henny',
    name: 'Dr. Henny Apriyanti',
    expertise: 'Lingkungan Hidup',
    qualification: 'S3 – Doktor',
    category: 'Lingkungan & SDA',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'efrizal',
    name: 'Ir. Efrizal, M.Sc',
    expertise: 'Lingkungan dan Kelautan',
    qualification: 'S2',
    category: 'Lingkungan & SDA',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'edo',
    name: 'Edo Pramana Putra, SP, M.Si',
    expertise: 'Ekonomi Pertanian',
    qualification: 'S2',
    category: 'Lingkungan & SDA',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },

  // Sosial & Pemerintahan
  {
    id: 'arlis',
    name: 'Drs. H. Arlis Harun',
    expertise: 'Sosial Kependidikan',
    qualification: 'S1',
    category: 'Sosial & Pemerintahan',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'sri',
    name: 'AKBP. Sri Hartati. L',
    expertise: 'Trantib dan Hankam',
    qualification: 'Profesi (AKBP)',
    category: 'Sosial & Pemerintahan',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'suharto',
    name: 'Suharto Lahay, SE',
    expertise: 'Manajemen / Kelembagaan',
    qualification: 'S1',
    category: 'Sosial & Pemerintahan',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'nia',
    name: 'dr. Nia Maimuria',
    expertise: 'Kesehatan dan Sosial',
    qualification: 'Profesi (Dokter)',
    category: 'Sosial & Pemerintahan',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'wiwit',
    name: 'Wiwit Haryadiningrum, SH',
    expertise: 'Hukum',
    qualification: 'S1',
    category: 'Sosial & Pemerintahan',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'syafrido',
    name: 'Drs. Syafrido Harun',
    expertise: 'Pemerintahan dan Teknik',
    qualification: 'S1',
    category: 'Sosial & Pemerintahan',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },

  // Infrastruktur
  {
    id: 'winardi',
    name: 'Winardi, S.Si, M.Si',
    expertise: 'Perindustrian & Pembangunan Daerah',
    qualification: 'S2',
    category: 'Infrastruktur',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'ogin',
    name: 'Ogin Anugraha, ST',
    expertise: 'Sipil dan Arsitektur',
    qualification: 'S1',
    category: 'Infrastruktur',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'bambang',
    name: 'Bambang Istiawan',
    expertise: 'Infrastruktur & Kehutanan',
    qualification: 'Praktisi Senior',
    category: 'Infrastruktur',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },

  // GIS & Teknologi
  {
    id: 'tomi',
    name: 'Tomi, SP, M.Si',
    expertise: 'Pemetaan dan Tanah',
    qualification: 'S2',
    category: 'GIS & Teknologi',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'dennis',
    name: 'Dennis, S.Kom',
    expertise: 'GIS dan Tata Ruang',
    qualification: 'S1 – Teknik Informatika',
    category: 'GIS & Teknologi',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'asep',
    name: 'Asep Purnawan, S.Kom',
    expertise: 'GIS & Teknologi Informasi',
    qualification: 'S1 – Teknik Informatika',
    category: 'GIS & Teknologi',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
  {
    id: 'ikbal',
    name: 'Ikbal',
    expertise: 'GIS & Teknologi Informasi',
    qualification: 'Teknisi GIS',
    category: 'GIS & Teknologi',
    historical: true,
    sourceLabel: 'Profil Lembaga P4I',
  },
];
