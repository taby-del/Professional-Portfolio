import { RevealItem } from "@/components/motion/RevealItem";
import { Eyebrow } from "@/components/ui/Eyebrow";

type RoleAreaProps = {
  eyebrow: string;
  title: string;
  items: readonly string[];
};

/** One white sub-card in the role card: "Engineering" + list. */
export function RoleArea({ eyebrow, title, items }: RoleAreaProps) {
  return (
    <RevealItem as="li" className="rounded-card bg-background p-5">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className="mt-3 text-card-title font-semibold text-foreground">{title}</h3>
      <ul className="mt-2 text-body text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </RevealItem>
  );
}
