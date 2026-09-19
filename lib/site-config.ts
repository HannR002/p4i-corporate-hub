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

  contact: {
    address: 'Jl. TP. Sriwijaya, Beliung, Kec. Kota Baru, Kota Jambi, Jambi 36361, Indonesia',
    addressShort: 'Kota Jambi, Jambi, Indonesia',
    whatsappDisplay: '0896-9916-1526',
    whatsappLink: 'https://wa.me/6289699161526',
    whatsappNumber: '6289699161526',
    email: 'admin@p4ijournal.org',
    emailLink: 'mailto:admin@p4ijournal.org',
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
