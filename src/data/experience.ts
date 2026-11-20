/**
 * Experience page content, from the approved design (Figma, Experience
 * 1440). Facts follow docs/design-handoff.md > Professional identity:
 * one employer since September 2025; education without a degree claim.
 */
export const EXPERIENCE_INTRO = {
  title: "Building in collaboration.",
  description:
    "A frontend-focused role connecting interface design, product workflows and technical implementation.",
} as const;

export const ROLE = {
  metaEyebrow: "Professional experience",
  since: "Since September 2025",
  place: "Yiino Corp Cameroon",
  title: "Technical Developer",
  company: "Yiino Corporation / Yiino Corp Cameroon",
  summary:
    "I contribute to the design and development of digital products, translating requirements into usable interfaces and working with engineering and product teams on connected features.",
  areas: [
    { eyebrow: "Engineering", title: "Frontend & integration", items: ["Frontend Development", "API Integration", "Product Feature Development"] },
    { eyebrow: "Experience design", title: "Design & product thinking", items: ["UI/UX Design and Prototyping", "Technical Analysis", "Business workflow understanding"] },
    { eyebrow: "Quality & collaboration", title: "Refine & deliver", items: ["Debugging", "Application Performance Improvements", "Collaboration with Engineering and Product Teams", "AI-Assisted Development Workflows"] },
  ],
  toolkit: ["JavaScript", "TypeScript", "React", "Figma", "Git", "API Integration"],
} as const;

export const EDUCATION = {
  eyebrow: "Education",
  field: "Computer Science and Engineering",
  institution: "Institut Universitaire de la Côte (IUC)",
  location: "Cameroon",
  note: "Academic background in Computer Science and Engineering.",
} as const;
