import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import PaintRevealHouse from "./PaintRevealHouse";
import { HOUSE_VARIANTS } from "./PaintedHouse";
import { HOUSE_PALETTES } from "./palettes";

/**
 * A row of houses directly under the hero that repaint themselves one after
 * another as soon as the page settles — the first thing that moves, and the
 * thing that says what the business does without a sentence.
 */
const STREET = [
  { variant: HOUSE_VARIANTS[1], palette: HOUSE_PALETTES[0], show: "" },
  { variant: HOUSE_VARIANTS[2], palette: HOUSE_PALETTES[2], show: "hidden sm:block" },
  { variant: HOUSE_VARIANTS[3], palette: HOUSE_PALETTES[1], show: "hidden lg:block" },
];

export default function StreetBand() {
  return (
    <Reveal direction="fade" as="section" className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {STREET.map((house, i) => (
          <div key={house.palette.id} className={`relative ${house.show}`}>
            <PaintRevealHouse
              variant={house.variant}
              palette={house.palette}
              uid={`street-${i}`}
              variation={i}
              delay={400 + i * 700}
              className="h-44 w-full sm:h-52 lg:h-60"
            />
          </div>
        ))}
      </div>

      {/* Blends the band into the teal hero above and the page below. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-teal-dark via-brand-teal-dark/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-brand-offwhite to-transparent"
      />

      <Link
        href="/paint-colors"
        className="group absolute bottom-3 right-3 sm:right-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-brand-teal-dark shadow-md backdrop-blur-sm transition-colors hover:bg-white"
      >
        Pick your colors
        <span className="vp-arrow">→</span>
      </Link>
    </Reveal>
  );
}
