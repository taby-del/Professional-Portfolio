/**
 * Button styles, matched to the Figma "Interaction states" sheet.
 * Timings: hover 150 ms, pressed 100 ms (docs/design-handoff.md).
 * Disabled (native `disabled` or `aria-disabled`): 45% opacity, inert.
 */
export const BUTTON_BASE = [
  "relative isolate inline-flex h-control min-w-touch shrink-0 items-center justify-center gap-2",
  "overflow-hidden rounded-control px-6 text-body-sm font-semibold whitespace-nowrap select-none",
  "transition-[background-color,border-color,color,box-shadow,scale] duration-150 ease-out",
  "active:duration-100 motion-safe:active:scale-[0.98]",
  "disabled:pointer-events-none disabled:opacity-(--disabled-opacity)",
  "aria-disabled:pointer-events-none aria-disabled:opacity-(--disabled-opacity)",
].join(" ");

/** 135° brand gradient, white label; pressed adds a light/dark overlay. */
const PRIMARY = [
  "bg-brand-gradient text-on-primary",
  "hover:shadow-[0_10px_24px_-12px_var(--primary-glow)]",
  "after:absolute after:inset-0 after:-z-10 after:bg-press-overlay after:opacity-0",
  "after:transition-opacity after:duration-100 active:after:opacity-100",
].join(" ");

/** Transparent with 1 px brand outline; hover adds a subtle blue tint. */
const SECONDARY = [
  "border border-primary bg-transparent text-primary hover:bg-tint",
  "active:border-primary-pressed active:bg-tint active:text-primary-pressed",
  "disabled:bg-tint aria-disabled:bg-tint",
].join(" ");

export const BUTTON_VARIANTS = {
  primary: PRIMARY,
  secondary: SECONDARY,
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
