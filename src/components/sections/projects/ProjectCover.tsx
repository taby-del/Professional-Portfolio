import { COVER_LABELS } from "@/data/projects";
import type { Project } from "@/types/project";
import { CoverArt } from "./CoverArt";

/**
 * Illustrative project cover (handoff: labelled placeholder, not a real
 * screenshot). Hover on pointer devices: 2 px lift + restrained shadow,
 * 180 ms; never zooms. Reduced motion: no lift.
 */
export function ProjectCover({ cover }: Pick<Project, "cover">) {
  const tone = cover.tone === "tint" ? "bg-tint" : "border border-border bg-surface";

  return (
    <div
      className={`rounded-panel p-6 transition-[translate,box-shadow] duration-180 ease-out tablet:px-9 tablet:pt-9 tablet:pb-5 pointer-fine:motion-safe:hover:-translate-y-0.5 pointer-fine:hover:shadow-[0_24px_48px_-32px_rgb(8_13_22/0.35)] ${tone}`}
    >
      <p className="font-mono text-eyebrow text-muted uppercase">{COVER_LABELS.placeholder}</p>

      <div className="mt-8 grid items-start gap-8 laptop:mt-11 laptop:grid-cols-[16rem_minmax(0,1fr)] laptop:gap-10">
        <div className="flex flex-col">
          <p className="font-mono text-label font-medium text-accent-readable">{cover.tag}</p>
          <h3 className="mt-6 text-heading font-semibold text-foreground">
            {cover.headline.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </h3>
          <ul className="mt-6 flex flex-col gap-3">
            {cover.chips.map((chip) => (
              <li key={chip} className="rounded-full bg-background py-2 text-center text-caption font-semibold text-accent-readable">
                {chip}
              </li>
            ))}
          </ul>
        </div>
        <CoverArt kind={cover.kind} />
      </div>

      <p className="mt-3 text-caption text-muted">{COVER_LABELS.caption}</p>
    </div>
  );
}
