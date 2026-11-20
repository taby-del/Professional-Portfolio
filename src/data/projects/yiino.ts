import type { Project } from "@/types/project";

/** Yiino, from the approved Projects design. */
export const YIINO: Project = {
  id: "yiino",
  eyebrow: "Mobility & on-demand services platform",
  title: "YIINO",
  description:
    "Yiino is a digital mobility ecosystem connecting users, drivers and service providers through transportation, delivery and related services.",
  tagline: "Connecting everyday journeys and services.",
  toolkit: ["React", "TypeScript", "Figma", "API Integration"],
  productAreas: [
    "Ride Booking",
    "School Ride",
    "On-Demand Ride Pool",
    "Food Delivery",
    "Package Delivery",
    "Business Mobility",
    "Driver and Partner Experiences",
    "Administrative Interfaces",
  ],
  contributions: [
    "UI/UX Design",
    "Frontend Development",
    "Product Analysis",
    "API Integration",
    "Feature Development",
    "Technical Problem-Solving",
  ],
  cover: {
    kind: "yiino",
    tone: "tint",
    tag: "YIINO",
    headline: ["Everyday journeys.", "Connected services."],
    chips: ["Ride booking", "Delivery services", "Driver & partner"],
  },
};
