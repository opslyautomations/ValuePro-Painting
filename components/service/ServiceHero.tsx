import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import OpenNowBadge from "@/components/OpenNowBadge";
import ServiceScene from "./ServiceScene";
import { BUSINESS } from "@/lib/constants";

export default function ServiceHero({
  slug,
  title,
  lede,
}: {
  slug: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
      <div
        aria-hidden
        className="vp-float pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl"
        style={{ animationDuration: "12s" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">
        <div>
          <Reveal direction="up">
            <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-green-light">
              <span>{BUSINESS.experienceYears}+ years experience</span>
              <span aria-hidden className="opacity-50">
                ·
              </span>
              <span>EPA Lead-Safe Certified</span>
            </p>
          </Reveal>

          <Reveal direction="up" delay={80}>
            <h1 className="mt-5 font-heading text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={160}>
            <p className="mt-5 max-w-xl text-lg text-white/90">{lede}</p>
          </Reveal>

          <Reveal direction="up" delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="tap-target vp-lift inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-brand-teal-dark shadow-lg shadow-black/10 transition-colors hover:bg-brand-green-light"
              >
                Get a Free Estimate
              </Link>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="tap-target inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand-teal-dark"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={310}>
            <div className="mt-7">
              <OpenNowBadge tone="dark" />
            </div>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={140} className="lg:justify-self-end w-full">
          <ServiceScene
            slug={slug}
            uid={`hero-${slug}`}
            className="aspect-[4/3] w-full rounded-xl shadow-2xl shadow-black/25 ring-1 ring-white/15"
          />
        </Reveal>
      </div>
    </section>
  );
}
