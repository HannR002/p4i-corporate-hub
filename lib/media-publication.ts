export type PublicationApproval = {
  publicationConsentVerified: boolean;
  publicationApprovedForWebsite: boolean;
};

export function canPublishMedia(approval: PublicationApproval) {
  return approval.publicationConsentVerified && approval.publicationApprovedForWebsite;
}

export function getPublishedGallery<T extends { enabled: boolean }>(
  program: PublicationApproval & { gallery: readonly T[] },
): T[] {
  return canPublishMedia(program) ? program.gallery.filter((item) => item.enabled) : [];
}
