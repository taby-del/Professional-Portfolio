import { RevealGroup } from "@/components/motion/RevealGroup";
import { ScaleToFit } from "@/components/mockups/ScaleToFit";
import { STAGGER } from "@/lib/motion/tokens";
import type { CoverKind } from "@/types/project";
import { COVERS } from "./covers/registry";

/**
 * The artwork area of a cover: the wide composition from 768 px, a
 * compact one-device composition on phones (handoff, 390). Devices rise
 * in one after another when the cover scrolls into view.
 */
export function CoverArt({ kind }: { kind: CoverKind }) {
  const { wide, compact } = COVERS[kind];

  return (
    <RevealGroup gap={STAGGER.relaxed} delay={0.15} className="min-w-0">
      <div className="hidden tablet:block">
        <ScaleToFit width={wide.width} height={wide.height}>
          <wide.Art />
        </ScaleToFit>
      </div>
      <div className="mx-auto tablet:hidden" style={{ maxWidth: compact.width }}>
        <ScaleToFit width={compact.width} height={compact.height}>
          <compact.Art />
        </ScaleToFit>
      </div>
    </RevealGroup>
  );
}
