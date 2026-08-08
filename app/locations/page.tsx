import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = pageMetadata({
  title: "Service Areas in St. Louis County | ValuePro",
  description:
    "ValuePro Painting serves ten St. Louis County cities from our Ballwin base. Find your city for local painting details and get a free written estimate.",
  path: "/locations",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Service Areas", path: "/locations" },
];

export default function LocationsIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
          Service Areas in St. Louis County
        </h1>
        <p className="mt-4 text-ink-muted">
          We&apos;re based in Ballwin and work across ten cities in west and
          central St. Louis County. Pick your city for local detail on
          housing stock, scheduling, and what to expect.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="group rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all"
            >
              <h2 className="font-heading text-lg font-semibold text-ink group-hover:text-brand-teal">
                {c.name}, MO
              </h2>
              <p className="mt-2 text-sm text-ink-muted">{c.line}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTABand
        heading="Not seeing your city?"
        body="Call us — we may still be able to help depending on the project and location."
      />
    </>
  );
}
