import PaintedHouse, { type HouseVariant } from "./PaintedHouse";
import PaintRoller from "./PaintRoller";
import { weatheredPalette, type HousePalette } from "./palettes";

/**
 * The same house rendered twice — weathered underneath, freshly painted on
 * top — with the fresh layer wiped in left to right when the surrounding
 * Reveal marks itself visible.
 */
export default function PaintRevealHouse({
  variant,
  palette,
  uid,
  scene = true,
  delay = 0,
  variation = 0,
  className = "",
}: {
  variant: HouseVariant;
  palette: HousePalette;
  uid: string;
  scene?: boolean;
  /** Passed through so neighbouring houses get different scenery. */
  variation?: number;
  /** Milliseconds to hold the weathered state before sweeping. */
  delay?: number;
  className?: string;
}) {
  const before = weatheredPalette(palette);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <PaintedHouse
        variant={variant}
        palette={before}
        uid={`${uid}-before`}
        scene={scene}
        variation={variation}
        animated={false}
        className="block h-full w-full"
        style={{ filter: "saturate(0.55) brightness(0.93) contrast(0.94)" }}
      />
      <div
        className="vp-paint-layer absolute inset-0"
        style={delay ? { animationDelay: `${delay}ms` } : undefined}
      >
        <PaintedHouse
          variant={variant}
          palette={palette}
          uid={`${uid}-after`}
          scene={scene}
          variation={variation}
          className="block h-full w-full"
        />
      </div>
      <PaintRoller color={palette.body.hex} delay={delay} />
    </div>
  );
}
