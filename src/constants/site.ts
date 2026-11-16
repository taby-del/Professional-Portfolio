/** Site identity, from docs/design-handoff.md > Professional identity. */
export const SITE = {
  name: "Taby Takoundjou Jeff Obrile",
  title: "Taby Takoundjou Jeff Obrile · Frontend Developer | UI/UX Designer",
  description:
    "Personal professional portfolio showcasing frontend development, UI/UX design and AI-assisted software development.",
  /** Shown in the footer copyright line. Update each January. */
  copyrightYear: 2026,
} as const;

/** The square brand mark (public/images/brand). */
export const LOGO = {
  src: "/images/brand/taby-jeff-logo.webp",
  width: 1254,
  height: 1254,
} as const;

/**
 * Contact and social links. Still awaiting the owner's real values
 * (handoff: "Email, LinkedIn and GitHub URL placeholders"). While a value
 * is null, the label is shown as plain text, never as a broken link.
 */
export const SOCIAL_LINKS: readonly { label: string; href: string | null }[] = [
  { label: "LinkedIn", href: null },
  { label: "GitHub", href: null },
  { label: "Email", href: null },
];
