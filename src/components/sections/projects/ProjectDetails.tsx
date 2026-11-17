"use client";

import { useId, useState } from "react";
import type { Project } from "@/types/project";
import { DetailsColumns } from "./DetailsColumns";

type ProjectDetailsProps = Pick<Project, "title" | "productAreas" | "contributions">;

/**
 * "View Project +/–" disclosure (handoff > Interaction contract): a real
 * button with aria-expanded / aria-controls, expanding in place over
 * 220 ms with a CSS grid-row transition (no layout measuring). Focus
 * stays on the button. Reduced motion: instant.
 */
export function ProjectDetails({ title, productAreas, contributions }: ProjectDetailsProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="mt-6 rounded-panel border border-border bg-surface">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-touch w-full items-center gap-1.5 rounded-panel px-6 py-4 text-left text-body-sm font-semibold text-accent-readable transition-colors duration-150 hover:bg-tint"
      >
        View Project <span aria-hidden="true">{open ? "–" : "+"}</span>
        <span className="sr-only">: {title}</span>
      </button>
      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-220 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <DetailsColumns productAreas={productAreas} contributions={contributions} />
        </div>
      </div>
    </div>
  );
}
