/**
 * Feature Flags — Centralized toggle for public visibility
 * Set to true to make a feature publicly accessible.
 * Set to false to hide from navigation, sitemap, and return notFound().
 */

export const features = {
  // Active now
  publisher: true,
  journal: true,
  ebook: true,
  training: true,
  research: true,
  activities: true,
  history: true,
  internship: true,

  // Not public yet
  legal: false,
  books: false,
  webgis: false,
  consulting: false,
  digitalServices: false,
  partners: false,
  mou: false,
  publicStatistics: false,
} as const;

export type Features = typeof features;
