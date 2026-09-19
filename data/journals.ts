/**
 * Journal Data — Scalable multi-journal data model
 * Add new journals by adding objects to the array.
 * Only journals with `active: true` are rendered publicly.
 */

export interface Journal {
  id: string;
  name: string;
  shortName: string;
  scope: string;
  description: string;
  url: string;
  active: boolean;
  // Only display ISSN when officially assigned
  eissn?: string;
  pissn?: string;
  // Only display when verified
  indexing?: string[];
  accreditation?: string;
  doi?: boolean;
  color: 'blue' | 'orange' | 'green' | 'red' | 'indigo';
}

export const journals: Journal[] = [
  {
    id: 'iste',
    name: 'Journal Interdisciplinary Science, Technology and Engineering',
    shortName: 'ISTE',
    scope: 'Science • Technology • Engineering • Interdisciplinary Research',
    description:
      'Jurnal ilmiah interdisiplin yang mempublikasikan penelitian berkualitas tinggi di bidang sains, teknologi, dan rekayasa. ISTE menjadi wadah bagi peneliti, akademisi, dan profesional untuk mendiseminasikan karya ilmiah yang berdampak.',
    url: 'https://journal.p4ijournal.org/journal',
    active: true,
    // ISSN not yet assigned — do NOT display placeholder
    color: 'blue',
  },
  // Future journals can be added here:
  // {
  //   id: 'journal-2',
  //   name: '...',
  //   shortName: '...',
  //   ...
  // },
];

export const activeJournals = journals.filter((j) => j.active);
