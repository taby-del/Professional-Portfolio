import { ButtonBase } from "./ButtonBase";
import type { ButtonProps } from "./types";

/**
 * Main call to action: top-to-bottom #08A3FB → #1078BC gradient, white semibold
 * label, 48 px tall. Use one per view where possible.
 *
 * @example <PrimaryButton href="/contact">Let's talk</PrimaryButton>
 */
export function PrimaryButton(props: ButtonProps) {
  return <ButtonBase variant="primary" {...props} />;
}
