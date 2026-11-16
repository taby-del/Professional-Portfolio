/**
 * Shared downloadable assets. Every "Download CV" action on the site uses
 * this single file (docs/design-handoff.md > Download CV).
 */
export const CV = {
  fileName: "Taby_Takoundjou_Jeff_Obrile_Frontend_Developer_CV.pdf",
  /** Public URL, same-origin. File lives in public/documents/. */
  href: "/documents/Taby_Takoundjou_Jeff_Obrile_Frontend_Developer_CV.pdf",
} as const;
