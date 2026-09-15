import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import PaintRevealHouse from "@/components/house/PaintRevealHouse";
import {
  HOUSE_VARIANTS,
  VARIANT_LABELS,
  type HouseVariant,
} from "@/components/house/PaintedHouse";
import { HOUSE_PALETTES } from "@/components/house/palettes";

/**
 * Colour-scheme renderings of the house styles common in west St. Louis
 * County. These are illustrations, not project photography — the cards say so
 * — and each one links through to the paint colors used.
 */
function pairing(i: number): { variant: HouseVariant; paletteIndex: number } {
  return {
    variant: HOUSE_VARIANTS[i % HOUSE_VARIANTS.length],
    // Offsetting by the row keeps a style from always wearing the same scheme.
    paletteIndex:
      (i + Math.floor(i / HOUSE_VARIANTS.length) * 2) % HOUSE_PALETTES.length,
  };
}

export default function GalleryGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => {
        const { variant, paletteIndex } = pairing(i);
        const palette = HOUSE_PALETTES[paletteIndex];
        const uid = `g${i}-${variant}-${palette.id}`;

        return (
          <Reveal key={uid} direction="up" delay={(i % 3) * 110}>
            <Link
              href="/paint-colors"
              className="group vp-lift block overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-lg hover:border-brand-teal/30"
            >
              <div className="relative">
                <PaintRevealHouse
                  variant={variant}
                  palette={palette}
                  uid={uid}
                  variation={i}
                  className="aspect-[4/3] w-full"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-teal-dark shadow-sm">
                  {VARIANT_LABELS[variant]}
                </span>
              </div>

              <div className="p-4">
                <p className="font-heading text-base font-semibold text-ink group-hover:text-brand-teal">
                  {palette.name}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {[
                    { role: "Body", swatch: palette.body },
                    { role: "Trim", swatch: palette.trim },
                    { role: "Door", swatch: palette.door },
                  ].map(({ role, swatch }) => (
                    <li
                      key={role}
                      className="flex items-center gap-2 text-xs text-ink-muted"
                    >
                      <span
                        className="h-4 w-4 shrink-0 rounded-full border border-black/15"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <span className="font-semibold text-ink">{role}</span>
                      <span className="truncate">
                        {swatch.name} {swatch.code}
                      </span>
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-teal">
                  Browse these colors <span className="vp-arrow">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
