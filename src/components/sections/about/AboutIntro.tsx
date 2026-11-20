import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { DownloadCvButton } from "@/components/ui/DownloadCvButton";
import { ABOUT_INTRO } from "@/data/about";
import { isCvAvailable } from "@/lib/assets/cv";
import { FocusGrid } from "./FocusGrid";

/**
 * Right column of the About hero: "About Me", two paragraphs,
 * Professional Focus tiles and the Download CV action.
 */
export function AboutIntro() {
  const cvNote = isCvAvailable() ? "PDF · Professional CV" : "PDF · Professional CV coming soon";

  return (
    <div className="flex min-w-0 flex-col">
      <RevealGroup trigger="mount" className="flex flex-col">
        <RevealItem as="div">
          <h1 className="text-page-title font-semibold text-foreground">{ABOUT_INTRO.title}</h1>
        </RevealItem>
        <RevealItem as="p" className="mt-5.5 text-body-lg text-foreground">
          {ABOUT_INTRO.lead}
        </RevealItem>
        <RevealItem as="p" className="mt-5 text-body text-muted">
          {ABOUT_INTRO.body}
        </RevealItem>
        <RevealItem as="div" className="mt-4.5">
          <h2 className="text-card-title font-semibold text-foreground">{ABOUT_INTRO.focusTitle}</h2>
        </RevealItem>
      </RevealGroup>

      <FocusGrid />

      <RevealGroup trigger="mount" delay={0.5} className="mt-5 flex flex-col items-start gap-2">
        <RevealItem>
          <DownloadCvButton />
        </RevealItem>
        <RevealItem as="p" className="text-caption text-muted">
          {cvNote}
        </RevealItem>
      </RevealGroup>
    </div>
  );
}
