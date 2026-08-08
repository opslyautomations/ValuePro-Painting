export const SITE_URL = "https://valuepropainting.com";
export const SITE_NAME = "ValuePro Painting";

export const BUSINESS = {
  name: SITE_NAME,
  owner: "Ryan",
  phone: "(314) 807-3883",
  phoneRaw: "+13148073883",
  email: "info@valuepropainting.com",
  baseCity: "Ballwin, Missouri",
  gbpUrl: "https://share.google/BOHhT4oORfpja1bKY",
  certification: "EPA Lead-Safe Certified (RRP)",
};

export type ServiceSummary = {
  slug: string;
  name: string;
  line: string;
};

export const SERVICES: ServiceSummary[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    line: "Walls, ceilings, trim and doors with low-dust prep and lead-safe practices on older homes.",
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    line: "Siding, stucco, brick, fascia and soffit, scheduled to Missouri's freeze-thaw climate.",
  },
  {
    slug: "cabinet-refinishing",
    name: "Cabinet Refinishing",
    line: "Sprayed, factory-smooth cabinet finishes, in-shop or on-site, for a fraction of replacement.",
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    line: "Retail, office and light industrial repaints phased around your business hours.",
  },
  {
    slug: "hoa-properties",
    name: "HOA Properties",
    line: "Community association exteriors and common areas with board-ready proposals.",
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    line: "Patching, texture matching, priming and painting so repairs disappear.",
  },
  {
    slug: "lime-wash-specialized-painting",
    name: "Lime Wash & Specialized Painting",
    line: "Lime wash, Venetian plaster and Roman clay hand-applied mineral finishes.",
  },
];

export type CitySummary = {
  slug: string;
  name: string;
  line: string;
};

export const CITIES: CitySummary[] = [
  {
    slug: "ballwin",
    name: "Ballwin",
    line: "Our home base — postwar subdivision housing, much of it built before 1978.",
  },
  {
    slug: "chesterfield",
    name: "Chesterfield",
    line: "Newer, larger elevations plus a substantial office and retail commercial base.",
  },
  {
    slug: "wildwood",
    name: "Wildwood",
    line: "Wooded estate lots on the largest land area in the county — shaded, mildew-prone elevations.",
  },
  {
    slug: "kirkwood",
    name: "Kirkwood",
    line: "Historic districts and mid-century ranches, with heavy pre-1978 housing stock.",
  },
  {
    slug: "webster-groves",
    name: "Webster Groves",
    line: "Inner-ring suburb with deep trim profiles and tight lots.",
  },
  {
    slug: "manchester",
    name: "Manchester",
    line: "The Manchester Road corridor — residential streets plus storefront work, right next to Ballwin.",
  },
  {
    slug: "creve-coeur",
    name: "Creve Coeur",
    line: "1970s ranches, mid-century moderns and new infill construction side by side.",
  },
  {
    slug: "town-and-country",
    name: "Town and Country",
    line: "Large properties requiring full grounds protection and multi-structure scheduling.",
  },
  {
    slug: "ellisville",
    name: "Ellisville",
    line: "The transition point between subdivision density and Wildwood's wooded acreage.",
  },
  {
    slug: "des-peres",
    name: "Des Peres",
    line: "Residential streets alongside West County Mall-area retail and office space.",
  },
];

export function serviceBySlug(slug: string): ServiceSummary | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function cityBySlug(slug: string): CitySummary | undefined {
  return CITIES.find((c) => c.slug === slug);
}
