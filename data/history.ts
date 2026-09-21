export interface HistoricalMilestone {
  year: string;
  title: string;
  description: string;
  category: string;
  date?: string;
  themes?: string[];
}

export const historyTimeline: HistoricalMilestone[] = [
  {
    year: "2014",
    date: "12 Mei 2014",
    title: "Pendirian Kelembagaan",
    description: "P4I secara resmi terlembagakan sebagai Yayasan Pusat Pendidikan dan Penelitian Pembangunan Indonesia.",
    category: "Kelembagaan",
  },
  {
    year: "2014",
    title: "Kehadiran Digital & Publikasi Profil",
    description: "Profil kelembagaan P4I terdokumentasi melalui kanal Blogger sebagai salah satu bentuk awal kehadiran digital lembaga.",
    category: "Transformasi Digital",
  },
  {
    year: "Era Awal",
    title: "Fokus Pengembangan Keilmuan",
    description: "Pengembangan program yang menitikberatkan pada Pendidikan dan Pelatihan, Penelitian dan Pengembangan, Sistem Informasi Geografis, Tata Ruang, Pembangunan Wilayah, serta Lingkungan dan Pembangunan Berkelanjutan.",
    category: "Pendidikan & Pelatihan",
  },
  {
    year: "Arsip Historis",
    title: "Laboratorium Alam Pengembangan Wilayah \"Hutan Organik\"",
    description: "Dokumentasi program historis yang mencakup pembangunan berdimensi spasial, rehabilitasi lahan, pertanian organik, integrated farming, ekowisata, monitoring dan evaluasi, serta teknologi tepat guna (seperti pompa hidram).",
    category: "Pembangunan Wilayah",
    themes: [
      "Pembangunan berdimensi spasial",
      "Rehabilitasi lahan",
      "Pertanian organik",
      "Integrated farming",
      "Ekowisata / Agrowisata",
      "Monitoring dan evaluasi",
      "Teknologi tepat guna",
      "Pompa hidram"
    ]
  },
  {
    year: "2026",
    title: "Transformasi Digital P4I",
    description: "Implementasi sistem digital modern untuk mendukung visi lembaga, meliputi peluncuran Website Profil Lembaga, Platform Jurnal Ilmiah (OJS), P4I E-Book, serta penguatan pengelolaan konten digital.",
    category: "Transformasi Digital",
  },
  {
    year: "2026",
    title: "Program Pembelajaran dan Magang",
    description: "P4I menerima peserta magang dalam proses pembelajaran praktis dan transformasi digital lembaga, memberdayakan talenta muda dalam ekosistem kerja nyata.",
    category: "Magang",
  }
];

export interface HistoricalMedia {
  id: string;
  title: string;
  period: string;
  category: string;
  image?: string;
  caption: string;
  source: string;
  sourceUrl?: string;
  historical: boolean;
}

export const historyGallery: HistoricalMedia[] = [
  {
    id: "zonasi-lahan-2001-2014",
    title: "Zonasi Guna Lahan",
    period: "2001–2014",
    category: "GIS & Pemetaan",
    caption: "Peta Zonasi Guna Lahan 2001–2014 sebagai bagian dari perencanaan tata ruang dan pembangunan wilayah.",
    source: "Arsip P4I, 2014",
    historical: true,
  },
  {
    id: "model-hutan-organik",
    title: "Model Pembangunan Berkelanjutan",
    period: "Era Awal",
    category: "Hutan Organik",
    caption: "Visual Model Pembangunan Berkelanjutan 'Hutan Organik' yang menekankan pada kelestarian lingkungan.",
    source: "Profil Lembaga P4I",
    historical: true,
  },
  {
    id: "integrated-farming",
    title: "Integrated Farming",
    period: "Arsip Historis",
    category: "Pembangunan Wilayah",
    caption: "Pertanian, Peternakan dan Perikanan Terintegrasi sebagai solusi kemandirian pangan.",
    source: "Blogger P4I, 2014",
    historical: true,
  },
  {
    id: "ecotourism",
    title: "Ekowisata & Wahana Tani",
    period: "Arsip Historis",
    category: "Hutan Organik",
    caption: "Ecotourism, Agrotourism, Bumi Perkemahan dan Wahana Tani sebagai sarana edukasi.",
    source: "Profil Lembaga P4I",
    historical: true,
  },
  {
    id: "pompa-hidram",
    title: "Teknologi Pompa Hidram",
    period: "Arsip Historis",
    category: "Lingkungan",
    caption: "Penggunaan Pompa Hidram untuk Sistem Pengairan tanpa listrik sebagai implementasi teknologi tepat guna.",
    source: "Blogger P4I, 2014",
    historical: true,
  }
];
