/**
 * P4I Organization Data
 * 
 * IMPORTANT:
 * This is HISTORICAL organization information from the P4I 2014 profile.
 * It is NOT presented as the verified current 2026 organization structure.
 */

export interface OrgMember {
  name: string;
  title?: string;
  portrait?: string;
  portraitExpectedFilename?: string;
  portraitVerified?: boolean;
}

export interface OrganizationStructure {
  period: string;
  historical: boolean;
  source: string;
  pembina: OrgMember[];
  pengurus: {
    ketua: OrgMember;
    sekretaris: OrgMember;
    bendahara: OrgMember;
  };
  pengawas: OrgMember[];
  bidang: {
    name: string;
    members: OrgMember[];
  }[];
}

export const organizationStructure2014: OrganizationStructure = {
  period: "2014",
  historical: true,
  source: "Profil Yayasan P4I, 2014",
  pembina: [
    { name: "A. Yani", title: "A.Md", portraitExpectedFilename: "a-yani.webp", portraitVerified: false }
  ],
  pengurus: {
    ketua: { name: "Drs. Harmes", title: "MT", portraitExpectedFilename: "harmes.webp", portraitVerified: false },
    sekretaris: { name: "Suharto Lahay", title: "SE", portraitExpectedFilename: "suharto-lahay.webp", portraitVerified: false },
    bendahara: { name: "Farida Lahay", title: "ST, MT", portraitExpectedFilename: "farida-lahay.webp", portraitVerified: false },
  },
  pengawas: [
    { name: "Nursanti", title: "A.Md", portraitExpectedFilename: "nursanti.webp", portraitVerified: false },
    { name: "dr. Nia Maimuria", portraitExpectedFilename: "nia-maimuria.webp", portraitVerified: false },
  ],
  bidang: [
    { 
      name: "Administrasi dan Keuangan", 
      members: [
        { name: "Wiwit Haryadiningrum", title: "SH", portraitExpectedFilename: "wiwit-haryadiningrum.webp", portraitVerified: false }, 
        { name: "Jemi Entry", title: "A.Md", portraitExpectedFilename: "jemi-entry.webp", portraitVerified: false }
      ] 
    },
    { 
      name: "Pendidikan dan Penelitian Pembangunan", 
      members: [
        { name: "Drs. Harmes", title: "MT", portraitExpectedFilename: "harmes.webp", portraitVerified: false }
      ] 
    },
    { 
      name: "Kerjasama, Sosial, Keagamaan dan Kemanusiaan", 
      members: [
        { name: "Suharto Lahay", title: "SE", portraitExpectedFilename: "suharto-lahay.webp", portraitVerified: false }
      ] 
    },
    { 
      name: "Pendidikan Umum dan Bimbel", 
      members: [
        { name: "Farida Lahay", title: "ST", portraitExpectedFilename: "farida-lahay.webp", portraitVerified: false }
      ] 
    },
  ]
};

// Architecture for future current organization
// Leave disabled until verified.
export const currentOrganization = {
  enabled: false,
  period: "",
  members: []
};
