import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Frontend Developer and UI/UX Designer combining frontend engineering, UI/UX design and AI-assisted development.",
};

export default function About() {
  return <AboutPage />;
}
