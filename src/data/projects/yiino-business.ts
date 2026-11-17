import type { Project } from "@/types/project";

/** Yiino for Business, from the approved Projects design. */
export const YIINO_BUSINESS: Project = {
  id: "yiino-business",
  eyebrow: "03 / Corporate mobility management",
  title: "YIINO FOR BUSINESS",
  description:
    "A corporate mobility platform designed to help organizations manage employee transportation, business programs, service access and spending.",
  tagline: "Making organizational mobility manageable.",
  toolkit: ["React", "TypeScript", "Figma", "Prototyping"],
  productAreas: [
    "Employee Management",
    "Business Travel",
    "Corporate Mobility Programs",
    "Voucher Management",
    "Access Permissions",
    "Business Activities",
    "Spending Visibility",
  ],
  contributions: [
    "UX Architecture",
    "Dashboard Design",
    "Prototyping",
    "Frontend Development",
    "Business Workflow Analysis",
  ],
  cover: {
    kind: "business",
    tone: "tint",
    tag: "YIINO FOR BUSINESS",
    headline: ["Business mobility.", "Clearly managed."],
    chips: ["Employee access", "Corporate programs", "Voucher management"],
  },
};
