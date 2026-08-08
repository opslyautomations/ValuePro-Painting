import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewCard from "@/components/ReviewCard";
import CTABand from "@/components/CTABand";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "Reviews | ValuePro Painting",
  description:
    "Read what St. Louis County homeowners and businesses say about ValuePro Painting. See our full Google Business Profile for verified reviews.",
  path: "/reviews",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
];

const SAMPLE_REVIEWS = [
  "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review]",
  "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review]",
  "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review]",
  "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review]",
  "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review]",
  "[SAMPLE — REPLACE BEFORE LAUNCH: real GBP review]",
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
          Reviews
        </h1>
        <p className="mt-4 text-ink-muted">
          The reviews below are placeholders while we collect real feedback
          from ValuePro Painting customers. For verified reviews, see our{" "}
          <a
            href={BUSINESS.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal font-semibold hover:underline"
          >
            Google Business Profile
          </a>
          .
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_REVIEWS.map((text, i) => (
            <ReviewCard key={i} text={text} />
          ))}
        </div>
      </section>

      <CTABand
        heading="Ready to become our next review?"
        body="Get a free estimate and see what the ValuePro standard looks like on your own house."
      />
    </>
  );
}
