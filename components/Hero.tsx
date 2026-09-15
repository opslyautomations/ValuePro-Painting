import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { HOURS_ONE_LINE } from "@/lib/hours";
import QuoteForm from "./QuoteForm";
import Reveal from "./motion/Reveal";
import OpenNowBadge from "./OpenNowBadge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
      {/* Slow-drifting paint blobs — motion in the background without asking
          the visitor to look at anything. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="vp-float absolute -left-24 -top-20 h-72 w-72 rounded-full bg-brand-green/25 blur-3xl"
          style={{ animationDuration: "11s" }}
        />
        <div
          className="vp-float absolute -right-16 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          style={{ animationDuration: "9s", animationDelay: "-3s" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div>
          <Reveal direction="up">
            <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-green-light">
              <span>{BUSINESS.experienceYears}+ years on the brush</span>
              <span aria-hidden className="opacity-50">
                ·
              </span>
              <span>EPA Lead-Safe Certified</span>
            </p>
          </Reveal>

          <Reveal direction="up" delay={90}>
            <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Residential &amp; Commercial Painting in St. Louis County
            </h1>
          </Reveal>

          <Reveal direction="up" delay={180}>
            <p className="mt-5 max-w-xl text-lg text-white/90">
              Based in Ballwin and serving families and businesses across west
              St. Louis County — interior, exterior, cabinets and drywall
              repair, painted by crews with {BUSINESS.experienceYears}+ years
              of experience.
            </p>
          </Reveal>

          <Reveal direction="up" delay={260}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#get-estimate"
                className="tap-target vp-lift inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-brand-teal-dark shadow-lg shadow-black/10 transition-colors hover:bg-brand-green-light"
              >
                Get a Free Estimate
              </a>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="tap-target inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand-teal-dark"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={340}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <OpenNowBadge tone="dark" />
              <span className="text-sm text-white/75">{HOURS_ONE_LINE}</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={400}>
            <p className="mt-6 text-sm text-white/70">
              Not sure on color yet?{" "}
              <Link
                href="/paint-colors"
                className="vp-underline font-semibold text-brand-green-light"
              >
                Browse 80+ Sherwin-Williams and Benjamin Moore colors
              </Link>
              .
            </p>
          </Reveal>
        </div>

        <Reveal
          direction="scale"
          delay={150}
          className="flex w-full justify-center lg:justify-end lg:justify-self-end"
        >
          <div id="get-estimate" className="w-full max-w-md">
            <QuoteForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
