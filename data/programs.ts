/**
 * Program / Training Data
 * Grouped by institutional capability area.
 * Displayed for historical and institutional context, not current active commerce.
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
    title: 'GIS & Spatial',
    description:
      'Inisiatif spasial dan Sistem Informasi Geografis untuk pemetaan serta pengambilan keputusan berbasis data keruangan.',
    icon: 'Globe',
    programs: [
      'GIS Fundamentals',
      'Advanced GIS',
      'GIS for Regional Policy',
      'Satellite Imagery Processing',
      'GIS for Natural-Resource Management',
      'GIS and Spatial Planning',
      'Administrative-Boundary Mapping',
      'Disaster GIS',
    ],
  },
  {
    id: 'regional-development',
    title: 'Regional & Development Planning',
    description:
      'Perencanaan strategis daerah untuk mendukung kebijakan publik dan pengembangan kawasan terpadu.',
    icon: 'Building2',
    programs: [
      'Development Planning',
      'RPJP / RPJM / Renstra / Renja',
      'Rural-Area Development',
      'Regional Economic Development',
      'Regional Tourism Planning',
      'Integrated Planning and Budgeting',
    ],
  },
  {
    id: 'environment',
    title: 'Environment & Sustainability',
    description:
      'Kajian dan manajemen lingkungan untuk memastikan keberlanjutan sumber daya dan ekosistem.',
    icon: 'Leaf',
    programs: [
      'KLHS (Kajian Lingkungan Hidup Strategis)',
      'Environmental Management',
      'Waste Management',
      'Sustainable Development',
      'Organic Agriculture',
      'Agroforestry',
      'Ecosystem Rehabilitation',
    ],
  },
  {
    id: 'institutional',
    title: 'Institutional Training',
    description:
      'Peningkatan kapasitas sumber daya manusia secara kelembagaan.',
    icon: 'GraduationCap',
    programs: [
      'In-house Training',
      'Tailored Institutional Training',
    ],
  },
];
