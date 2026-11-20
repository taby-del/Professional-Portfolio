import type { Project } from "@/types/project";

/** Yiino Freight / InnoFrit, from the approved Projects design. */
export const INNOFRIT: Project = {
  id: "innofrit",
  eyebrow: "Logistics & freight marketplace",
  title: "YIINO FREIGHT / INNOFRIT",
  description:
    "A logistics marketplace designed to connect shippers, carrier companies, independent drivers and logistics operators through a structured digital freight ecosystem.",
  tagline: "Bringing structure to freight operations.",
  toolkit: ["React", "TypeScript", "Figma", "AI-Assisted Tools"],
  productAreas: [
    "Shipment Management",
    "Load Posting",
    "Carrier Management",
    "Independent Driver Experiences",
    "Shipment Tracking",
    "Logistics Dashboards",
    "Operational Workflows",
  ],
  contributions: [
    "Product Analysis",
    "UI/UX Design",
    "Interface Architecture",
    "Frontend Development",
    "AI-Assisted Implementation",
  ],
  cover: {
    kind: "freight",
    tone: "surface",
    tag: "YIINO FREIGHT / INNOFRIT",
    headline: ["Freight,", "with structure."],
    chips: ["Shipment management", "Load posting", "Tracking workflows"],
  },
};
