import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = pageMetadata({
  title: "Painting Services in St. Louis County | ValuePro",
  description:
    "All seven ValuePro Painting services: interior, exterior, cabinets, commercial, HOA, drywall repair and specialized finishes. Free written estimate.",
  path: "/services",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
          Painting Services in St. Louis County
        </h1>
        <p className="mt-4 text-ink-muted">
          Residential and commercial painting, from interior refreshes to
          full HOA repaint programs. Every service is bid with a free,
          written estimate — no prices guessed over the phone.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all"
            >
              <h2 className="font-heading text-lg font-semibold text-ink group-hover:text-brand-teal">
                {s.name}
              </h2>
              <p className="mt-2 text-sm text-ink-muted">{s.line}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTABand
        heading="Not sure which service fits?"
        body="Tell us what's going on and we'll point you to the right one — or bid the whole project."
      />
    </>
  );
}
