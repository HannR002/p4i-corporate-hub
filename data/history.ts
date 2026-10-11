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
