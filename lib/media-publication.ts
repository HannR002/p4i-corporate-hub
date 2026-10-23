export type PublicationApproval = {
  publicationConsentVerified: boolean;
  publicationApprovedForWebsite: boolean;
  publicationAuthorizedByOwner?: boolean;
};

export function canPublishMedia(approval: PublicationApproval) {
  return approval.publicationApprovedForWebsite &&
    (approval.publicationConsentVerified || approval.publicationAuthorizedByOwner === true);
}

export function getPublishedGallery<T extends { enabled: boolean }>(
  program: PublicationApproval & { gallery: readonly T[] },
): T[] {
  return canPublishMedia(program) ? program.gallery.filter((item) => item.enabled) : [];
}
