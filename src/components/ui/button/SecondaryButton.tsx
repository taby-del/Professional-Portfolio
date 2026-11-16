import { ButtonBase } from "./ButtonBase";
import type { ButtonProps } from "./types";

/**
 * Supporting action: transparent, 1 px #08A3FB outline and label, subtle
 * blue tint on hover. 48 px tall.
 *
 * @example <SecondaryButton href="/projects">View Project</SecondaryButton>
 */
export function SecondaryButton(props: ButtonProps) {
  return <ButtonBase variant="secondary" {...props} />;
}
