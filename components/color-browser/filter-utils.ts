import type { PaintColor } from "@/data/paint-colors";

export type Brand = PaintColor["brand"];
export type Family = PaintColor["family"];
export type UseCase =
  | "interior-walls"
  | "exterior-body"
  | "trim"
  | "cabinets"
  | "front-door"
  | "ceiling";

export const BRANDS: Brand[] = ["Sherwin-Williams", "Benjamin Moore"];

export const BRAND_LABELS: Record<Brand, string> = {
  "Sherwin-Williams": "Sherwin-Williams",
  "Benjamin Moore": "Benjamin Moore",
};

export const BRAND_CODES: Record<Brand, string> = {
  "Sherwin-Williams": "sw",
  "Benjamin Moore": "bm",
};

const CODE_TO_BRAND: Record<string, Brand> = {
  sw: "Sherwin-Williams",
  bm: "Benjamin Moore",
};

export const FAMILIES: Family[] = [
  "White",
  "Greige/Neutral",
  "Gray",
  "Beige/Tan",
  "Warm/Earth",
  "Blue",
  "Green",
  "Black/Charcoal",
  "Accent",
];

export const FAMILY_CODES: Record<Family, string> = {
  White: "white",
  "Greige/Neutral": "greige-neutral",
  Gray: "gray",
  "Beige/Tan": "beige-tan",
  "Warm/Earth": "warm-earth",
  Blue: "blue",
  Green: "green",
  "Black/Charcoal": "black-charcoal",
  Accent: "accent",
};

const CODE_TO_FAMILY: Record<string, Family> = Object.fromEntries(
  Object.entries(FAMILY_CODES).map(([family, code]) => [code, family])
) as Record<string, Family>;

export const USE_CASES: { value: UseCase; label: string }[] = [
  { value: "interior-walls", label: "Interior Walls" },
  { value: "exterior-body", label: "Exterior Body" },
  { value: "trim", label: "Trim" },
  { value: "cabinets", label: "Cabinets" },
  { value: "front-door", label: "Front Door" },
  { value: "ceiling", label: "Ceiling" },
];

export type Filters = {
  q: string;
  brands: Brand[];
  families: Family[];
  useCases: UseCase[];
  lrvMin: number;
  lrvMax: number;
};

export const DEFAULT_FILTERS: Filters = {
  q: "",
  brands: [],
  families: [],
  useCases: [],
  lrvMin: 0,
  lrvMax: 100,
};

export function filtersEqual(a: Filters, b: Filters): boolean {
  return (
    a.q === b.q &&
    a.lrvMin === b.lrvMin &&
    a.lrvMax === b.lrvMax &&
    a.brands.length === b.brands.length &&
    a.brands.every((v) => b.brands.includes(v)) &&
    a.families.length === b.families.length &&
    a.families.every((v) => b.families.includes(v)) &&
    a.useCases.length === b.useCases.length &&
    a.useCases.every((v) => b.useCases.includes(v))
  );
}

export function filtersFromSearchParams(sp: URLSearchParams): Filters {
  const q = sp.get("q") ?? "";

  const brands = (sp.get("brand") ?? "")
    .split(",")
    .filter(Boolean)
    .map((code) => CODE_TO_BRAND[code])
    .filter((b): b is Brand => Boolean(b));

  const families = (sp.get("family") ?? "")
    .split(",")
    .filter(Boolean)
    .map((code) => CODE_TO_FAMILY[code])
    .filter((f): f is Family => Boolean(f));

  const validUseCases = new Set(USE_CASES.map((u) => u.value));
  const useCases = (sp.get("use") ?? "")
    .split(",")
    .filter(Boolean)
    .filter((v): v is UseCase => validUseCases.has(v as UseCase));

  let lrvMin = 0;
  let lrvMax = 100;
  const lrvParam = sp.get("lrv");
  if (lrvParam) {
    const [minStr, maxStr] = lrvParam.split("-");
    const min = Number(minStr);
    const max = Number(maxStr);
    if (Number.isFinite(min)) lrvMin = clamp(min, 0, 100);
    if (Number.isFinite(max)) lrvMax = clamp(max, 0, 100);
    if (lrvMin > lrvMax) {
      const swap = lrvMin;
      lrvMin = lrvMax;
      lrvMax = swap;
    }
  }

  return { q, brands, families, useCases, lrvMin, lrvMax };
}

export function filtersToSearchParams(filters: Filters): URLSearchParams {
  const sp = new URLSearchParams();
  if (filters.q) sp.set("q", filters.q);
  if (filters.brands.length) {
    sp.set("brand", filters.brands.map((b) => BRAND_CODES[b]).join(","));
  }
  if (filters.families.length) {
    sp.set("family", filters.families.map((f) => FAMILY_CODES[f]).join(","));
  }
  if (filters.useCases.length) {
    sp.set("use", filters.useCases.join(","));
  }
  if (filters.lrvMin !== 0 || filters.lrvMax !== 100) {
    sp.set("lrv", `${filters.lrvMin}-${filters.lrvMax}`);
  }
  return sp;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}

function normalizeForSearch(s: string): string {
  return s.toLowerCase().replace(/[\s-]/g, "");
}

export function matchesSearch(color: PaintColor, rawQuery: string): boolean {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return true;
  if (color.name.toLowerCase().includes(query)) return true;
  const normalizedQuery = normalizeForSearch(query);
  const normalizedCode = normalizeForSearch(color.code);
  return normalizedCode.includes(normalizedQuery);
}

export function matchesFilters(color: PaintColor, filters: Filters): boolean {
  if (!matchesSearch(color, filters.q)) return false;
  if (filters.brands.length && !filters.brands.includes(color.brand)) return false;
  if (filters.families.length && !filters.families.includes(color.family)) return false;
  if (
    filters.useCases.length &&
    !filters.useCases.some((u) => color.bestFor.includes(u))
  ) {
    return false;
  }
  if (color.lrv < filters.lrvMin || color.lrv > filters.lrvMax) return false;
  return true;
}
