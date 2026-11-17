import { Menu } from "lucide-react";
import { ICON_CONTROL } from "@/components/ui/icon-control";

type MenuButtonProps = {
  expanded: boolean;
  controls: string;
  onClick: () => void;
};

/** Opens the mobile menu dialog; announces its state to screen readers. */
export function MenuButton({ expanded, controls, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open menu"
      aria-haspopup="dialog"
      aria-expanded={expanded}
      aria-controls={controls}
      className={ICON_CONTROL}
    >
      <Menu aria-hidden="false" className="size-5" strokeWidth={1.75} />
    </button>
  );
}
