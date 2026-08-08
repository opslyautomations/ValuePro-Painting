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
import { pageMetadata } from "@/lib/seo";
import { homepageLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Painters in St. Louis County | ValuePro Painting",
  description:
    "Residential and commercial painting across St. Louis County. Interior, exterior, cabinets and drywall repair. EPA Lead-Safe certified. Free estimate.",
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
      <TrustBar />
      <ServicesGrid />

      <section className="bg-brand-green-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark mb-8">
            Why ValuePro
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_POINTS.map((point) => (
              <div key={point.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{point.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Read more about how Ryan&apos;s background shapes the work on the{" "}
            <Link href="/about" className="text-brand-teal font-semibold hover:underline">
              About page
            </Link>
            .
          </p>
        </div>
      </section>

      <ServiceAreaChips
        heading="Service Areas"
        intro="We're based in Ballwin and work across ten St. Louis County cities."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark mb-8">
          Recent Work
        </h2>
        <GalleryGrid count={6} />
        <div className="mt-6">
          <Link href="/gallery" className="text-brand-teal font-semibold hover:underline">
            See the full gallery →
          </Link>
        </div>
      </section>

      <section className="bg-brand-green-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark mb-8">
            What Homeowners Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <ReviewCard text="[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review]" />
            <ReviewCard text="[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review]" />
            <ReviewCard text="[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review]" />
          </div>
          <div className="mt-6">
            <Link href="/reviews" className="text-brand-teal font-semibold hover:underline">
              Read more reviews →
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready for a free estimate?"
        body="Call or send the form and we'll come take a look — no pressure, no prices pulled out of thin air."
      />
    </>
  );
}
