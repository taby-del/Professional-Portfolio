/**
 * Home page content, copied from the approved design (Figma, Home 1440).
 * Kept apart from the components so copy edits (and a future French
 * version) never touch layout code.
 */
export const HOME_HERO = {
  status: "Open to opportunities",
  roles: [
    "Frontend Developer",
    "UI/UX Designer",
    "AI-Assisted Full-Stack Developer",
  ],
  headline: "Designing and Building Digital Experiences That Matter.",
  intro:
    "I build modern, responsive and user-focused digital experiences by combining frontend engineering, thoughtful product design and AI-assisted development.",
  primaryAction: { label: "View My Projects", href: "/projects" },
  contactLink: { label: "Let’s connect / Contact", href: "/contact" },
} as const;

export type CraftStep = {
  number: string;
  title: string;
  detail: string;
  /** The design highlights one step ("Design"). */
  highlighted?: boolean;
};

export const CRAFT_CARD = {
  eyebrow: "Digital craft / Workspace",
  steps: [
    { number: "01", title: "Understand", detail: "Requirements → product direction" },
    { number: "02", title: "Design", detail: "User journeys → interface systems", highlighted: true },
    { number: "03", title: "Build", detail: "Components → connected experiences" },
  ] satisfies CraftStep[],
  noteTitle: "Human understanding. AI-assisted execution.",
  note: "AI accelerates exploration and implementation. Technical judgment stays with the developer.",
} as const;

export const TECH_STRIP = {
  label: "Design × Engineering",
  tags: ["React", "Next.js", "TypeScript", "Figma", "AI-assisted workflow"],
} as const;
