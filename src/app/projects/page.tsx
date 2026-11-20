import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Product design and frontend development across mobility, logistics and corporate operations: Yiino, Yiino Freight / InnoFrit and Yiino for Business.",
};

export default function Projects() {
  return <ProjectsPage />;
}
