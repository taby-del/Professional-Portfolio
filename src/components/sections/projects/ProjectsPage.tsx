import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { PROJECTS, PROJECTS_INTRO } from "@/data/projects";
import { ProjectArticle } from "./ProjectArticle";

/**
 * Projects page, matched to the approved 1440 design: intro, placeholder
 * notice, then three projects (cover, info, details), 64 px apart.
 */
export function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-page px-gutter pt-20 pb-28">
      <RevealGroup trigger="mount" className="flex flex-col">
        <RevealItem as="div">
          <h1 className="text-page-title font-semibold text-foreground">{PROJECTS_INTRO.title}</h1>
        </RevealItem>
        <RevealItem as="p" className="mt-5 text-body-lg text-muted">
          {PROJECTS_INTRO.description}
        </RevealItem>
        <RevealItem as="p" className="mt-4 rounded-card bg-surface px-4 py-4 text-caption text-muted">
          {PROJECTS_INTRO.notice}
        </RevealItem>
      </RevealGroup>

      <div className="mt-16 flex flex-col gap-16">
        {PROJECTS.map((project) => (
          <ProjectArticle key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
