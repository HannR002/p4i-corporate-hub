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
    { name: "A. Yani", title: "A.Md" }
  ],
  pengurus: {
    ketua: { name: "Drs. Harmes", title: "MT" },
    sekretaris: { name: "Suharto Lahay", title: "SE" },
    bendahara: { name: "Farida Lahay", title: "ST, MT" },
  },
  pengawas: [
    { name: "Nursanti", title: "A.Md" },
    { name: "dr. Nia Maimuria" },
  ],
  bidang: [
    { 
      name: "Administrasi dan Keuangan", 
      members: [
        { name: "Wiwit Haryadiningrum", title: "SH" }, 
        { name: "Jemi Entry", title: "A.Md" }
      ] 
    },
    { 
      name: "Pendidikan dan Penelitian Pembangunan", 
      members: [
        { name: "Drs. Harmes", title: "MT" }
      ] 
    },
    { 
      name: "Kerjasama, Sosial, Keagamaan dan Kemanusiaan", 
      members: [
        { name: "Suharto Lahay", title: "SE" }
      ] 
    },
    { 
      name: "Pendidikan Umum dan Bimbel", 
      members: [
        { name: "Farida Lahay", title: "ST" }
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
