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

/** Public contact email (from the approved Contact design). */
export const EMAIL = "tabytakoundjou@gmail.com";

/**
 * Contact and social links. While a value is null, the label is shown as
 * plain text, never as a wrong or broken link.
 */
export const SOCIAL_LINKS: readonly { label: string; href: string | null }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeff-obrile-06a1a9450/" },
  { label: "GitHub", href: "https://github.com/taby-del" },
  { label: "Email", href: `mailto:${EMAIL}` },
];
