export interface DigitalPlatform {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  url: string;
  status: 'active' | 'inactive';
  external: boolean;
}

export const platforms: DigitalPlatform[] = [
  {
    id: "website",
    title: "Website Institusi",
    shortTitle: "P4I",
    description: "Pusat Pendidikan dan Penelitian Pembangunan Indonesia.",
    url: "https://www.p4ijournal.org",
    status: "active",
    external: false,
  },
  {
    id: "journal",
    title: "Jurnal Ilmiah P4I",
    shortTitle: "OJS",
    description: "Platform pengelolaan dan publikasi jurnal ilmiah berbasis Open Journal Systems.",
    url: "https://journal.p4ijournal.org",
    status: "active",
    external: true,
  },
  {
    id: "ebook",
    title: "P4I E-Book",
    shortTitle: "E-Book",
    description: "Platform penerbitan dan katalog literatur digital P4I.",
    url: "https://publisher.p4ijournal.org",
    status: "active",
    external: true,
  }
];
