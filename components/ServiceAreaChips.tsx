import Link from "next/link";
import Reveal from "./motion/Reveal";
import { CITIES } from "@/lib/constants";

export default function ServiceAreaChips({
  heading = "Where We Work",
  intro,
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <Reveal direction="up">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark mb-4">
          {heading}
        </h2>
        {intro && <p className="max-w-2xl text-ink-muted mb-6">{intro}</p>}
      </Reveal>
      <div className="flex flex-wrap gap-3">
        {CITIES.map((c, i) => (
          <Reveal key={c.slug} direction="scale" delay={i * 55}>
            <Link
              href={`/locations/${c.slug}`}
              className="tap-target inline-flex items-center rounded-full border border-brand-teal/30 bg-white px-4 py-2 text-sm font-medium text-brand-teal-dark transition-all hover:-translate-y-0.5 hover:border-brand-teal hover:bg-brand-green-light/40 hover:shadow-md"
            >
              {c.name}, MO
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
