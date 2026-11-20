import Image from "next/image";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { LOGO } from "@/constants/site";
import { CRAFT_CARD } from "@/data/home";
import { STAGGER } from "@/lib/motion/tokens";
import { CraftStepItem } from "./CraftStepItem";

/**
 * "Digital craft / Workspace" card on the right of the Home hero:
 * Understand → Design → Build, then the human + AI note.
 * Enters just after the headline; its steps cascade in.
 */
export function CraftCard() {
  return (
    <RevealGroup
      trigger="mount"
      delay={0.35}
      gap={STAGGER.relaxed}
      className="rounded-panel border border-border bg-surface p-6"
    >
      <RevealItem className="flex items-center justify-between">
        <p className="font-mono text-eyebrow text-muted uppercase">
          {CRAFT_CARD.eyebrow}
        </p>
        <Image src={LOGO.src} width={20} height={20} alt="" className="size-5 rounded-[0.25rem]" />
      </RevealItem>

      <ol className="mt-7 flex flex-col gap-3" aria-label="How I work">
        {CRAFT_CARD.steps.map((step) => (
          <CraftStepItem key={step.number} {...step} />
        ))}
      </ol>

      <RevealItem className="mt-7 border-t border-border pt-[1.125rem]">
        <p className="text-body-sm font-semibold text-foreground">
          {CRAFT_CARD.noteTitle}
        </p>
        <p className="mt-2.5 text-caption text-muted">{CRAFT_CARD.note}</p>
      </RevealItem>
    </RevealGroup>
  );
}
