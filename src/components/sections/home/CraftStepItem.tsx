import { ArrowUpRight } from "lucide-react";
import { RevealItem } from "@/components/motion/RevealItem";
import type { CraftStep } from "@/data/home";

/**
 * One step of the Digital Craft card: number, title, detail, arrow.
 * The highlighted step ("Design") uses the blue tint and brand border.
 */
export function CraftStepItem({ number, title, detail, highlighted }: CraftStep) {
  const tone = highlighted
    ? "border-primary bg-tint"
    : "border-border bg-background";

  return (
    <RevealItem
      as="li"
      className={`flex items-center gap-4 rounded-control border px-[1.0625rem] py-3.5 ${tone}`}
    >
      <span className="font-mono text-micro text-primary">{number}</span>
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="text-body font-semibold text-foreground">{title}</span>
        <span className="font-mono text-micro text-muted">{detail}</span>
      </span>
      <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 text-muted" />
    </RevealItem>
  );
}
