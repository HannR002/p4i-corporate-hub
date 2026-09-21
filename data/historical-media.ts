export type VerificationStatus = 'verified' | 'visual-only' | 'needs-review';

export type HistoricalMedia = {
  id: string;
  title: string;
  period?: string;
  year?: number;
  category: string;
  image: string;
  alt: string;
  caption: string;
  source: string;
  sourceUrl?: string;
  historical: true;
  verification: VerificationStatus;
};

export const historyGallery: HistoricalMedia[] = [
  {
    id: "hutan-organik-zonasi-guna-lahan-2001-2014",
    title: "Zonasi Guna Lahan",
    period: "2001–2014",
    category: "Hutan Organik",
    image: "/archive/p4i/hutan-organik/hutan-organik-zonasi-guna-lahan-2001-2014.png",
    alt: "Diagram zonasi guna lahan Hutan Organik periode 2001–2014.",
    caption: "Peta Zonasi Guna Lahan 2001–2014 sebagai bagian dari perencanaan tata ruang dan pembangunan wilayah Hutan Organik.",
    source: "Arsip P4I, 2014",
    historical: true,
    verification: "verified",
  },
  {
    id: "hutan-organik-keadaan-awal-lahan",
    title: "Kondisi Lahan Kritis",
    category: "Hutan Organik",
    image: "/archive/p4i/hutan-organik/hutan-organik-keadaan-awal-lahan.webp",
    alt: "Dokumentasi historis awal lahan kritis di kawasan Hutan Organik.",
    caption: "Dokumentasi historis kondisi awal lahan kawasan sebelum rehabilitasi ekstensif.",
    source: "Profil Lembaga P4I",
    historical: true,
    verification: "visual-only",
  },
  {
    id: "hutan-organik-progress-rehabilitasi-2001-2014",
    title: "Perkembangan Rehabilitasi",
    period: "2001–2014",
    category: "Hutan Organik",
    image: "/archive/p4i/hutan-organik/hutan-organik-progress-rehabilitasi-2001-2014.webp",
    alt: "Kolase perkembangan rehabilitasi kawasan Hutan Organik 2001–2014.",
    caption: "Kolase dokumentasi perkembangan tutupan lahan dan rehabilitasi kawasan secara bertahap.",
    source: "Profil Lembaga P4I",
    historical: true,
    verification: "visual-only",
  },
  {
    id: "hutan-organik-pertanian-organik",
    title: "Lahan Pertanian Organik",
    category: "Pertanian Organik",
    image: "/archive/p4i/hutan-organik/hutan-organik-pertanian-organik.webp",
    alt: "Dokumentasi lahan pertanian organik di kawasan Hutan Organik.",
    caption: "Dokumentasi historis bedeng dan lahan budidaya pertanian organik di kawasan Hutan Organik.",
    source: "Profil Lembaga P4I",
    historical: true,
    verification: "visual-only",
  },
  {
    id: "hutan-organik-monitoring-citra-satelit",
    title: "Monitoring Perkembangan Kawasan",
    category: "GIS & Monitoring",
    image: "/archive/p4i/hutan-organik/hutan-organik-monitoring-citra-satelit.png",
    alt: "Perbandingan citra satelit historis kawasan Hutan Organik untuk keperluan monitoring.",
    caption: "Tinjauan spasial historis menggunakan citra satelit untuk monitoring perkembangan tutupan lahan.",
    source: "Profil Lembaga P4I",
    historical: true,
    verification: "visual-only",
  },
  {
    id: "hutan-organik-kolam-air-tawar",
    title: "Lingkungan Air Kawasan",
    category: "Lingkungan",
    image: "/archive/p4i/hutan-organik/hutan-organik-kolam-air-tawar.webp",
    alt: "Dokumentasi historis lingkungan air di kawasan Hutan Organik.",
    caption: "Dokumentasi lingkungan kolam air tawar di kawasan berhutan.",
    source: "Profil Lembaga P4I",
    historical: true,
    verification: "visual-only",
  },
  {
    id: "hutan-organik-lanskap-megamendung",
    title: "Lanskap Kawasan",
    category: "Pembangunan Wilayah",
    image: "/archive/p4i/hutan-organik/hutan-organik-lanskap-megamendung.webp",
    alt: "Pemandangan historis kawasan perbukitan dan lahan pertanian.",
    caption: "Dokumentasi historis lanskap kawasan perbukitan dan hamparan vegetasi di wilayah Hutan Organik.",
    source: "Profil Lembaga P4I",
    historical: true,
    verification: "visual-only",
  },
  {
    id: "hutan-organik-lahan-pertanian",
    title: "Dokumentasi Lahan Pertanian",
    category: "Pertanian Organik",
    image: "/archive/p4i/hutan-organik/hutan-organik-lahan-pertanian.webp",
    alt: "Dokumentasi historis lahan pertanian di kawasan Hutan Organik.",
    caption: "Dokumentasi visual historis lahan pertanian pada era awal aktivitas.",
    source: "Profil Lembaga P4I",
    historical: true,
    verification: "visual-only",
  },
  {
    id: "p4i-alamat-bogor-historical-map",
    title: "Peta Historis Lokasi",
    category: "Arsip Kelembagaan",
    image: "/archive/p4i/maps/p4i-alamat-bogor-historical-map.png",
    alt: "Peta historis lokasi P4I Bogor.",
    caption: "Arsip tangkapan layar peta lokasi awal institusi P4I di Bogor.",
    source: "Profil Lembaga P4I",
    historical: true,
    verification: "verified",
  },
  {
    id: "p4i-website-profil-historis",
    title: "Website Profil Historis",
    category: "Transformasi Digital",
    image: "/archive/p4i/digital-history/p4i-website-profil-historis.png",
    alt: "Tangkapan layar halaman utama website profil P4I sebelum transformasi digital.",
    caption: "Tangkapan layar arsip antarmuka website profil kelembagaan generasi sebelumnya.",
    source: "Profil Lembaga P4I",
    historical: true,
    verification: "verified",
  },
  {
    id: "p4i-platform-blog-historis",
    title: "Platform Blog Historis",
    category: "Transformasi Digital",
    image: "/archive/p4i/digital-history/p4i-platform-blog-historis.png",
    alt: "Tangkapan layar arsip blog historis P4I tahun 2014.",
    caption: "Tangkapan layar platform publikasi dan blog historis P4I dari tahun 2014.",
    source: "Blogger P4I, 2014",
    historical: true,
    verification: "verified",
  }
];
