/**
 * P4I Site Configuration — Single Source of Truth
 * All institutional data, contact info, and branding constants.
 */

export const siteConfig = {
  name: 'P4I',
  fullName: 'Pusat Pendidikan dan Penelitian Pembangunan Indonesia',
  legalName: 'Yayasan Pusat Pendidikan dan Penelitian Pembangunan Indonesia',
  tagline: 'Research • Education • Development',
  established: '12 Mei 2014',
  establishedYear: 2014,

  url: 'https://p4ijournal.org',
  metadataBase: 'https://p4ijournal.org',

  locations: [
    {
      id: 'bogor',
      type: 'head-office',
      label: 'Kantor Pusat',
      city: 'Bogor, Jawa Barat',
      address: 'Jalan Mesjid Al-Wafa RT. 03 RW. 011, Kelurahan Bubulak, Kecamatan Bogor Barat, Kota Bogor, Provinsi Jawa Barat, Indonesia',
      mapQuery: 'Jalan Mesjid Al-Wafa RT. 03 RW. 011, Kelurahan Bubulak, Kecamatan Bogor Barat, Kota Bogor, Provinsi Jawa Barat, Indonesia',
    },
    {
      id: 'jambi',
      type: 'branch-office',
      label: 'Kantor Cabang',
      city: 'Jambi',
      address: 'Jl. TP. Sriwijaya, Beliung, Kec. Kota Baru, Kota Jambi, Jambi 36361, Indonesia',
      mapQuery: 'Jl. TP. Sriwijaya, Beliung, Kec. Kota Baru, Kota Jambi, Jambi 36361, Indonesia',
    }
  ],

  contact: {
    whatsappDisplay: '0896-9916-1526',
    whatsappLink: 'https://wa.me/6289699161526?text=Halo%20P4I%2C%20saya%20ingin%20memperoleh%20informasi%20mengenai%20program%20dan%20kegiatan%20P4I.',
    whatsappNumber: '6289699161526',
    email: 'admin@p4ijournal.org',
    emailLink: 'mailto:admin@p4ijournal.org?subject=Permohonan%20Informasi%20P4I&body=Yth.%20P4I%2C%0D%0A%0D%0ASaya%20ingin%20memperoleh%20informasi%20mengenai%20...',
  },

  social: {
    instagram: {
      handle: 'p4i.official',
      url: 'https://instagram.com/p4i.official',
    },
    // Facebook, YouTube, LinkedIn — not active yet
  },

  legal: {
    enabled: false,
    establishmentDeedNumber: '',
    establishmentDeedDate: '',
    notary: '',
    ministryDecreeNumber: '',
    ministryDecreeDate: '',
    legalDomicile: '',
    publicDocumentUrl: '',
  },

  googleAnalyticsId: 'G-6C89K5WKQG',
} as const;

export type SiteConfig = typeof siteConfig;
