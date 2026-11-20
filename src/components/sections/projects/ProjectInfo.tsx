import { Eyebrow } from "@/components/ui/Eyebrow";
import { COVER_LABELS } from "@/data/projects";
import type { Project } from "@/types/project";

type ProjectInfoProps = Pick<Project, "eyebrow" | "title" | "description" | "tagline" | "toolkit">;

/**
 * Live text under a cover: number + category, title and description on
 * the left; tagline and relevant toolkit on the right (handoff: toolkit
 * is a relevant set, not a verified per-project stack).
 */
export function ProjectInfo({ eyebrow, title, description, tagline, toolkit }: ProjectInfoProps) {
  return (
    <div className="mt-7 grid gap-6 laptop:grid-cols-[minmax(0,1fr)_25.75rem] laptop:gap-8">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 text-project-title font-semibold text-foreground">{title}</h2>
        <p className="mt-3 max-w-[56rem] text-body text-muted">{description}</p>
      </div>
      <div>
        <p className="text-card-title font-semibold text-foreground">{tagline}</p>
        <p className="mt-2 font-mono text-eyebrow text-muted uppercase">Relevant toolkit</p>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Relevant toolkit">
          {toolkit.map((tool) => (
            <li key={tool} className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-caption font-semibold text-accent-readable">
              {tool}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-caption text-muted">{COVER_LABELS.stackNote}</p>
      </div>
    </div>
  );
}
