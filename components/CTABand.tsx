import Link from "next/link";
import Reveal from "./motion/Reveal";
import { BUSINESS } from "@/lib/constants";
import { HOURS_ONE_LINE } from "@/lib/hours";

export default function CTABand({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-teal">
      <div
        aria-hidden
        className="vp-float pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        style={{ animationDuration: "10s" }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-white sm:flex-row sm:px-6">
        <Reveal direction="left">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold">
            {heading}
          </h2>
          <p className="mt-2 text-white/90 max-w-xl">{body}</p>
          <p className="mt-3 text-sm text-white/70">
            {BUSINESS.experienceYears}+ years of painting experience ·{" "}
            {HOURS_ONE_LINE}
          </p>
        </Reveal>
        <Reveal
          direction="right"
          delay={110}
          className="flex shrink-0 flex-col gap-3 sm:flex-row"
        >
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="tap-target vp-lift inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-semibold text-brand-teal-dark transition-colors hover:bg-brand-green-light"
          >
            Call {BUSINESS.phone}
          </a>
          <Link
            href="/contact"
            className="tap-target inline-flex items-center justify-center rounded-md border-2 border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand-teal-dark"
          >
            Get a Free Estimate
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
