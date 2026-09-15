/**
 * Exterior color schemes used by the illustrated houses.
 *
 * Every swatch is a real product drawn from `data/paint-colors.ts`, so the
 * illustrations double as a soft entry point into the Paint Colors browser
 * rather than being decorative-only.
 */

export type Swatch = {
  name: string;
  code: string;
  hex: string;
};

export type HousePalette = {
  id: string;
  /** Scheme name shown under the illustration. */
  name: string;
  body: Swatch;
  trim: Swatch;
  door: Swatch;
  roof: Swatch;
};

export const HOUSE_PALETTES: HousePalette[] = [
  {
    id: "ballwin-classic",
    name: "Ballwin Classic",
    body: { name: "Accessible Beige", code: "SW 7036", hex: "#D1C7B8" },
    trim: { name: "Extra White", code: "SW 7006", hex: "#EEEFEA" },
    door: { name: "Naval", code: "SW 6244", hex: "#2F3D4C" },
    roof: { name: "Peppercorn", code: "SW 7674", hex: "#585858" },
  },
  {
    id: "kirkwood-heritage",
    name: "Kirkwood Heritage",
    body: { name: "Stonington Gray", code: "HC-170", hex: "#CACBC5" },
    trim: { name: "Chantilly Lace", code: "OC-65", hex: "#F4F6F1" },
    door: { name: "Caliente", code: "AF-290", hex: "#8A2728" },
    roof: { name: "Wrought Iron", code: "2124-10", hex: "#494A4B" },
  },
  {
    id: "wildwood-sage",
    name: "Wildwood Sage",
    body: { name: "Saybrook Sage", code: "HC-114", hex: "#B1B7A2" },
    trim: { name: "White Dove", code: "OC-17", hex: "#EFEEE5" },
    door: { name: "Forest Green", code: "2047-10", hex: "#174A43" },
    roof: { name: "Kendall Charcoal", code: "HC-166", hex: "#666662" },
  },
  {
    id: "chesterfield-modern",
    name: "Chesterfield Modern",
    body: { name: "Gauntlet Gray", code: "SW 7019", hex: "#78736E" },
    trim: { name: "Pure White", code: "SW 7005", hex: "#EDECE6" },
    door: { name: "Tropical Orange", code: "2170-20", hex: "#CB5E3D" },
    roof: { name: "Onyx", code: "2133-10", hex: "#353434" },
  },
  {
    id: "webster-warm",
    name: "Webster Warm",
    body: { name: "Kilim Beige", code: "SW 6106", hex: "#D7C5AE" },
    trim: { name: "Extra White", code: "SW 7006", hex: "#EEEFEA" },
    door: { name: "Rookwood Red", code: "SW 2802", hex: "#622F2D" },
    roof: { name: "Chelsea Gray", code: "HC-168", hex: "#85837A" },
  },
  {
    id: "des-peres-coastal",
    name: "Des Peres Coastal",
    body: { name: "Coventry Gray", code: "HC-169", hex: "#B8BAB6" },
    trim: { name: "Decorator's White", code: "CC-20", hex: "#EBEDEA" },
    door: { name: "Oceanside", code: "SW 6496", hex: "#015A6B" },
    roof: { name: "Cyberspace", code: "SW 7076", hex: "#44484D" },
  },
];

export function paletteById(id: string): HousePalette {
  return HOUSE_PALETTES.find((p) => p.id === id) ?? HOUSE_PALETTES[0];
}

/* --- "Before" colors ------------------------------------------------------ */

function clamp(n: number) {
  return Math.min(255, Math.max(0, Math.round(n)));
}

function mix(hex: string, target: string, amount: number): string {
  const parse = (h: string) => [
    parseInt(h.slice(1, 3), 16),
    parseInt(h.slice(3, 5), 16),
    parseInt(h.slice(5, 7), 16),
  ];
  const [r1, g1, b1] = parse(hex);
  const [r2, g2, b2] = parse(target);
  const out = [
    clamp(r1 + (r2 - r1) * amount),
    clamp(g1 + (g2 - g1) * amount),
    clamp(b1 + (b2 - b1) * amount),
  ];
  return `#${out.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

/** Chalky, sun-bleached version of a color — the "before we showed up" look. */
const WEATHERED = "#9a968c";

export function weathered(hex: string, amount = 0.52): string {
  return mix(hex, WEATHERED, amount);
}

/** A whole scheme, faded, for the left half of a before/after. */
export function weatheredPalette(palette: HousePalette): HousePalette {
  const dull = (s: Swatch, amount: number): Swatch => ({
    ...s,
    hex: weathered(s.hex, amount),
  });
  return {
    ...palette,
    id: `${palette.id}-weathered`,
    body: dull(palette.body, 0.56),
    trim: dull(palette.trim, 0.46),
    door: dull(palette.door, 0.5),
    roof: dull(palette.roof, 0.34),
  };
}
