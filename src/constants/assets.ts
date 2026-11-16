/**
 * Shared downloadable assets. Every "Download CV" action on the site uses
 * this single file (docs/design-handoff.md > Download CV).
 */
/** Owner portrait (handoff: keep natural appearance, 4:5 crop). */
export const PORTRAIT = {
  src: "/images/profile/taby-takoundjou-jeff-obrile.jpg",
  width: 1333,
  height: 2000,
  alt: "Portrait of Taby Takoundjou Jeff Obrile",
} as const;

export const CV = {
  fileName: "Taby_Takoundjou_Jeff_Obrile_Frontend_Developer_CV.pdf",
  /** Public URL, same-origin. File lives in public/documents/. */
  href: "/documents/Taby_Takoundjou_Jeff_Obrile_Frontend_Developer_CV.pdf",
} as const;
