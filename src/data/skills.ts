import type { Skill, SkillCategory } from "@/types/skill";

/** Skills page content, from the approved design (Figma, Skills 1440). */
export const SKILLS_INTRO = {
  eyebrow: "03 / Skills",
  title: "A connected set of capabilities.",
  description:
    "Frontend engineering and UI/UX design at the core. Practical development skills connect the experience from interface to system.",
} as const;

const brand = (label: string, name: Extract<Skill["icon"], { type: "brand" }>["name"]): Skill => ({ label, icon: { type: "brand", name } });
const mono = (label: string, text: string): Skill => ({ label, icon: { type: "text", text } });
/** Long workflow label: a full-width row on phones (handoff, 390). */
const wide = (skill: Skill): Skill => ({ ...skill, wide: true });

/** All 24 skills in four categories (handoff: keep every label). */
export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    eyebrow: "01 / Primary practice",
    title: "Frontend Development",
    description: "Responsive interfaces, reusable components and connected web experiences.",
    skills: [mono("JavaScript", "JS"), mono("TypeScript", "TS"), brand("React", "react"), brand("Next.js", "nextjs"), brand("Vite", "vite"), brand("HTML5", "html5"), brand("CSS3", "css3")],
  },
  {
    eyebrow: "02 / Primary practice",
    title: "UI/UX Design",
    description: "From user journeys to considered, implementation-ready interface systems.",
    skills: [brand("Figma", "figma"), mono("UI Design", "UX"), mono("UX Design", "UX"), mono("Wireframing", "UX"), wide(mono("Interactive Prototyping", "UX")), wide(mono("Responsive Design", "UX")), wide(mono("Design Systems", "UX"))],
  },
  {
    eyebrow: "03 / Complementary capability",
    title: "Backend Development",
    description: "System logic, API integration and AI-assisted implementation; not a backend-specialist positioning.",
    skills: [brand("Node.js", "nodejs"), mono("Express.js", "{ }"), brand("MongoDB", "mongodb"), brand("PostgreSQL", "postgresql"), wide(mono("REST API Integration", "API"))],
  },
  {
    eyebrow: "04 / How I work",
    title: "Development Tools & Workflow",
    description: "Technical analysis and collaborative, component-based development.",
    skills: [brand("Git", "git"), brand("GitHub", "github"), wide(mono("AI-Assisted Development Tools", "{ }")), wide(mono("Technical Analysis", "{ }")), wide(mono("Component-Based Development", "{ }"))],
  },
];

export const SKILLS_NOTE = {
  title: "Technical judgment comes first.",
  text: "I use AI-assisted tools to support analysis and implementation, while reviewing system logic, interface quality and integration behavior. Frontend development and UI/UX design remain my strongest areas.",
} as const;
