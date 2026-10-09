/**
 * Visibility flags for implemented content. Rebuild after changing them.
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

  // Implemented, but not public yet
  consulting: false,
};

export type FeatureName = keyof typeof features;
export type Features = Record<FeatureName, boolean>;
