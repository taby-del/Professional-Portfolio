import type { SkillIcon } from "@/types/skill";

/**
 * About page content, copied from the approved design (Figma, About
 * 1440). Facts follow docs/design-handoff.md > Professional identity.
 */
export const ABOUT_INTRO = {
  eyebrow: "02 / About",
  title: "About Me",
  lead: "I'm a technology professional passionate about building modern digital experiences through frontend development, interface design and practical software engineering.",
  body: "My work combines frontend engineering, thoughtful UI/UX design, system analysis and AI-assisted development to transform business requirements into practical digital products.",
  focusTitle: "Professional Focus",
} as const;

export const PROFESSIONAL_FOCUS: readonly { label: string; icon: SkillIcon }[] = [
  { label: "Frontend Development", icon: { type: "lucide", name: "atom" } },
  { label: "UI/UX Design", icon: { type: "brand", name: "figma" } },
  { label: "Web Application Development", icon: { type: "text", text: "API" } },
  { label: "AI-Assisted Software Development", icon: { type: "text", text: "{ }" } },
];

export const ROLE_CARD = {
  title: "Frontend Developer | UI/UX Designer",
  secondary: "AI-Assisted Full-Stack Developer",
  details: "Cameroon · English & French",
} as const;

export const APPROACH = {
  title: "My Approach",
  description:
    "I start with the business workflow, then connect the user experience to a practical technical solution.",
  steps: [
    { number: "01", title: "Understand the workflow", text: "I analyze requirements, clarify user needs and identify the business rules behind each feature." },
    { number: "02", title: "Structure the solution", text: "I map journeys, organize interfaces and define reusable components before implementation." },
    { number: "03", title: "Build and refine", text: "I translate designs into responsive interfaces, integrate APIs and use AI tools with technical review." },
  ],
} as const;

export const ABOUT_DETAILS = [
  { title: "Education", lines: ["Institut Universitaire de la Côte (IUC), Cameroon", "Computer Science and Engineering"] },
  { title: "Professional Interests", lines: ["Modern web technologies, product development, interface architecture, user experience and emerging AI development tools."] },
] as const;
