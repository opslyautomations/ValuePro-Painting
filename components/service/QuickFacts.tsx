import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import { BUSINESS, CITIES } from "@/lib/constants";
import { HOURS_SUMMARY } from "@/lib/hours";

/**
 * A short, mixed-width strip under the hero: two number tiles and two wider
 * text tiles, so the eye gets something other than a paragraph immediately
 * after the fold.
 */
export default function QuickFacts() {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-6">
        <Reveal direction="up" className="lg:col-span-1">
          <div className="h-full rounded-xl border border-black/5 bg-brand-green-light/40 p-5">
            <p className="font-heading text-3xl font-semibold text-brand-teal-dark">
              <CountUp to={BUSINESS.experienceYears} suffix="+" />
            </p>
            <p className="mt-1 text-xs text-ink-muted">Years experience</p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={80} className="lg:col-span-1">
          <div className="h-full rounded-xl border border-black/5 bg-brand-green-light/40 p-5">
            <p className="font-heading text-3xl font-semibold text-brand-teal-dark">
              <CountUp to={CITIES.length} />
            </p>
            <p className="mt-1 text-xs text-ink-muted">Cities served</p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={160} className="lg:col-span-2">
          <div className="h-full rounded-xl border border-black/5 p-5">
            <p className="font-heading text-base font-semibold text-ink">
              EPA Lead-Safe Certified (RRP)
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Required on pre-1978 homes — most of Ballwin and Kirkwood.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={240} className="lg:col-span-2">
          <div className="h-full rounded-xl border border-black/5 p-5">
            <p className="font-heading text-base font-semibold text-ink">
              Free written estimates
            </p>
            <dl className="mt-2 space-y-0.5 text-sm text-ink-muted">
              {HOURS_SUMMARY.map((row) => (
                <div key={row.label} className="flex justify-between gap-3">
                  <dt>{row.label}</dt>
                  <dd className="font-medium text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
