import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import type { Project } from "@/types/project";
import { ProjectCover } from "./ProjectCover";
import { ProjectDetails } from "./ProjectDetails";
import { ProjectInfo } from "./ProjectInfo";

/** One project: cover, live info, then the View Project disclosure. */
export function ProjectArticle({ project }: { project: Project }) {
  const { cover, title, productAreas, contributions, eyebrow, description, tagline, toolkit } = project;
  const info = { eyebrow, description, tagline, toolkit };

  return (
    <article aria-label={title}>
      <RevealGroup>
        <RevealItem>
          <ProjectCover cover={cover} />
        </RevealItem>
        <RevealItem>
          <ProjectInfo title={title} {...info} />
        </RevealItem>
        <RevealItem>
          <ProjectDetails title={title} productAreas={productAreas} contributions={contributions} />
        </RevealItem>
      </RevealGroup>
    </article>
  );
}
