import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EDUCATION } from "@/data/experience";

/**
 * Education banner (tinted). Wording follows the handoff: the field of
 * study and institution only, no degree or completion status claimed.
 */
export function EducationBanner() {
  return (
    <RevealGroup className="mt-12">
      <RevealItem
        as="div"
        className="grid gap-4 rounded-panel bg-tint p-6 tablet:p-8 laptop:grid-cols-[16rem_minmax(0,1fr)]"
      >
        <div>
          <Eyebrow>{EDUCATION.eyebrow}</Eyebrow>
          <p className="mt-4 max-w-[12.5rem] text-title font-semibold text-foreground">{EDUCATION.field}</p>
        </div>
        <div>
          <h2 className="text-subheading font-semibold text-foreground">{EDUCATION.institution}</h2>
          <p className="mt-2 text-body text-muted">{EDUCATION.location}</p>
          <p className="mt-2 text-body text-muted">{EDUCATION.note}</p>
        </div>
      </RevealItem>
    </RevealGroup>
  );
}
