import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceAreaChips from "@/components/ServiceAreaChips";
import GalleryGrid from "@/components/GalleryGrid";
import ReviewCard from "@/components/ReviewCard";
import CTABand from "@/components/CTABand";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/motion/Reveal";
import ProcessTimeline from "@/components/ProcessTimeline";
import BusinessHours from "@/components/BusinessHours";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import StreetBand from "@/components/house/StreetBand";
import { paletteById } from "@/components/house/palettes";
import { pageMetadata } from "@/lib/seo";
import { homepageLocalBusinessSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "Painters in St. Louis County | ValuePro Painting",
  description:
    "Residential and commercial painting across St. Louis County. Interior, exterior, cabinets and drywall repair. EPA Lead-Safe certified, 15+ years experience. Open Mon-Fri 8am-6pm.",
  path: "/",
});

const WHY_POINTS = [
  {
    title: "Protection first",
    body: "Floors covered, furniture wrapped, dust contained — before the first coat, not as an afterthought.",
  },
  {
    title: "The house stays livable",
    body: "Rooms get reset at the end of each working day rather than left as a staging area for the duration.",
  },
  {
    title: "Owner-involved",
    body: "Ryan does the estimates himself and stays involved through the walkthrough.",
  },
  {
    title: "Cleanup is part of the work",
    body: "Not a phase that happens if there's time left — it's built into the schedule.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={homepageLocalBusinessSchema()} />
      <Hero />
      <StreetBand />
      <TrustBar />
      <ServicesGrid />

      {/* Drag-to-compare — the one thing on the page that asks the visitor to
          use their hands, placed before the longer reading sections. */}
      <section className="bg-brand-teal-dark text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <Reveal direction="left">
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
              Chalky and faded, or freshly coated?
            </h2>
            <p className="mt-4 max-w-xl text-white/85">
              Drag the handle. Same house, same trim profile — the only
              difference is a proper prep and two coats of exterior paint. Most
              St. Louis County exteriors are due every 7 to 10 years, and shaded
              north elevations go first.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services/exterior-painting"
                className="tap-target vp-lift inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-semibold text-brand-teal-dark transition-colors hover:bg-brand-green-light"
              >
                Exterior painting
              </Link>
              <Link
                href="/paint-colors"
                className="group tap-target inline-flex items-center justify-center rounded-md border-2 border-white px-5 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand-teal-dark"
              >
                Browse paint colors <span className="vp-arrow ml-2">→</span>
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <BeforeAfterSlider
              variant="two-story"
              palette={paletteById("webster-warm")}
              uid="home-compare"
            />
            <p className="mt-3 text-center text-xs text-white/60">
              Illustration — colors shown are Kilim Beige SW 6106 body, Extra
              White SW 7006 trim, Rookwood Red SW 2802 door.
            </p>
          </Reveal>
        </div>
      </section>

      <ProcessTimeline />

      <section className="bg-brand-green-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <Reveal direction="up">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark mb-8">
              Why ValuePro
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_POINTS.map((point, i) => (
              <Reveal key={point.title} direction="up" delay={i * 110}>
                <div className="vp-lift h-full rounded-xl bg-white p-6 shadow-sm hover:shadow-md">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={120}>
            <p className="mt-6 text-sm text-ink-muted">
              Read more about how Ryan&apos;s background shapes the work on the{" "}
              <Link href="/about" className="vp-underline text-brand-teal font-semibold">
                About page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <ServiceAreaChips
        heading="Service Areas"
        intro="We're based in Ballwin and work across ten St. Louis County cities."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <Reveal direction="up">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark">
            Color schemes we paint
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Renderings of the house styles common in west St. Louis County, each
            in a scheme built from real Sherwin-Williams and Benjamin Moore
            colors. Photographs of completed ValuePro projects are being added
            to the{" "}
            <Link href="/gallery" className="vp-underline text-brand-teal font-semibold">
              gallery
            </Link>{" "}
            as jobs wrap.
          </p>
        </Reveal>
        <div className="mt-8">
          <GalleryGrid count={6} />
        </div>
      </section>

      <section className="bg-brand-green-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <Reveal direction="up">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark mb-8">
              What Homeowners Say
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal key={i} direction="up" delay={(i % 3) * 110}>
                <ReviewCard text="[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review]" />
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            The reviews above are placeholders while we collect real feedback
            from ValuePro Painting customers.
          </p>
          <div className="mt-4">
            <a
              href={BUSINESS.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vp-underline text-brand-teal font-semibold"
            >
              See our verified reviews on Google →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark sm:text-3xl">
              When you can reach us
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              ValuePro Painting is a mobile business — estimates happen at your
              property, during the hours listed here. Ryan takes the calls
              himself, so if you get voicemail during a job, leave a message and
              you&apos;ll hear back the next business day.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Exterior work is weather-dependent in Missouri, so spring and fall
              calendars fill early. If you&apos;re planning an exterior for this
              season, call sooner rather than later.
            </p>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <BusinessHours />
          </Reveal>
        </div>
      </section>

      <CTABand
        heading="Ready for a free estimate?"
        body="Call or send the form and we'll come take a look — no pressure, no prices pulled out of thin air."
      />
    </>
  );
}
