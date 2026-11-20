import type { ComponentType } from "react";
import type { CoverKind } from "@/types/project";
import { BusinessCover, BusinessCoverCompact } from "./BusinessCover";
import { FreightCover, FreightCoverCompact } from "./FreightCover";
import { YiinoCover, YiinoCoverCompact } from "./YiinoCover";

type Artboard = { Art: ComponentType; width: number; height: number };

/**
 * Cover compositions per project: `wide` from 768 px (design size
 * 871 × ~410), `compact` on phones (one device). Sizes in design px.
 */
export const COVERS: Record<CoverKind, { wide: Artboard; compact: Artboard }> = {
  yiino: {
    wide: { Art: YiinoCover, width: 871, height: 413 },
    compact: { Art: YiinoCoverCompact, width: 207, height: 413 },
  },
  freight: {
    wide: { Art: FreightCover, width: 871, height: 408 },
    compact: { Art: FreightCoverCompact, width: 189, height: 330 },
  },
  business: {
    wide: { Art: BusinessCover, width: 870, height: 408 },
    compact: { Art: BusinessCoverCompact, width: 358, height: 154 },
  },
};
