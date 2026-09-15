import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import BusinessHours from "@/components/BusinessHours";
import Reveal from "@/components/motion/Reveal";
import { BUSINESS, CITIES } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "Contact ValuePro Painting | Free Estimate",
  description:
    "Contact ValuePro Painting for a free written estimate in St. Louis County. Open Monday-Friday 8am-6pm and Saturday 8am-3pm. Estimates happen at your property.",
  path: "/contact",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>;
}) {
  const { message } = await searchParams;

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
            Get a Free Estimate
          </h1>
          <p className="mt-4 text-ink-muted leading-relaxed">
            ValuePro Painting is a mobile business — we don&apos;t have a
            storefront, and estimates happen at your property, where a paint
            decision can actually be made. Call, email, or send the form and
            we&apos;ll set up a time.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="tap-target block font-semibold text-lg text-brand-teal-dark hover:text-brand-teal"
            >
              {BUSINESS.phone}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="tap-target block font-semibold text-ink hover:text-brand-teal"
            >
              {BUSINESS.email}
            </a>
          </div>

          <div className="mt-8">
            <BusinessHours />
          </div>

          <div className="mt-8">
            <h2 className="font-heading text-lg font-semibold text-ink mb-2">
              Where we work
            </h2>
            <ul className="flex flex-wrap gap-2 text-sm text-ink-muted">
              {CITIES.map((c) => (
                <li
                  key={c.slug}
                  className="rounded-full border border-black/10 px-3 py-1"
                >
                  {c.name}, MO
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal
          direction="right"
          className="flex justify-center lg:justify-end"
        >
          <QuoteForm defaultMessage={message} />
        </Reveal>
      </section>
    </>
  );
}
