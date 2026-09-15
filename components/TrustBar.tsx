import Link from "next/link";
import Reveal from "./motion/Reveal";
import CountUp from "./motion/CountUp";
import { BUSINESS, CITIES, SERVICES } from "@/lib/constants";

const STATS = [
  {
    value: BUSINESS.experienceYears,
    suffix: "+",
    label: "Years of painting experience",
  },
  { value: CITIES.length, suffix: "", label: "St. Louis County cities served" },
  { value: SERVICES.length, suffix: "", label: "Painting services offered" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-black/5 bg-brand-green-light/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} direction="up" delay={i * 110}>
              <p className="font-heading text-4xl font-semibold text-brand-teal-dark">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
            </Reveal>
          ))}

          <Reveal direction="up" delay={330}>
            <p className="font-heading text-lg font-semibold leading-snug text-brand-teal-dark">
              EPA Lead-Safe
              <br />
              Certified (RRP)
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Required for pre-1978 homes — most of Ballwin and Kirkwood
            </p>
          </Reveal>
        </div>
      </div>

      {/* Continuous, hover-pausable ticker of the service area. */}
      <div className="vp-marquee overflow-hidden border-t border-black/5 bg-white/50 py-2.5">
        <div className="vp-marquee-track flex w-max items-center gap-8 pr-8">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-8"
              aria-hidden={copy === 1}
            >
              {CITIES.map((city) => (
                <Link
                  key={`${copy}-${city.slug}`}
                  href={`/locations/${city.slug}`}
                  tabIndex={copy === 1 ? -1 : undefined}
                  className="whitespace-nowrap text-sm font-semibold text-brand-teal-dark/70 transition-colors hover:text-brand-teal"
                >
                  {city.name}, MO
                </Link>
              ))}
              <span aria-hidden className="text-brand-teal/40">
                ★
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
