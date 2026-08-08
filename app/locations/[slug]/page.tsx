import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS_DATA, locationDataBySlug } from "@/lib/locations-data";
import { cityBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, localBusinessSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Prose } from "@/components/Prose";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import ReviewCard from "@/components/ReviewCard";
import LocalResources from "@/components/LocalResources";
import ClientFactNotice from "@/components/ClientFactNotice";
import ServicesGrid from "@/components/ServicesGrid";

export function generateStaticParams() {
  return LOCATIONS_DATA.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = locationDataBySlug(slug);
  if (!city) return {};

  return pageMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/locations/${city.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = locationDataBySlug(slug);
  if (!city) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/locations" },
    { name: city.name, path: `/locations/${city.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(city.name),
          breadcrumbSchema(breadcrumbs),
          ...(city.faqs.length > 0 ? [faqSchema(city.faqs)] : []),
        ]}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
          {city.h1}
        </h1>
        <p className="mt-6 text-ink-muted leading-relaxed">{city.localLead}</p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
        <Prose blocks={city.localContext.map((text) => ({ type: "p" as const, text }))} />
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
        <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark mb-4">
          Services in {city.name}
        </h2>
        <Prose blocks={[{ type: "ul", items: city.serviceLines }]} />
      </section>

      {city.clientFacts.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
          <ClientFactNotice items={city.clientFacts} />
        </section>
      )}

      {city.faqs.length > 0 && (
        <FAQAccordion faqs={city.faqs} heading={`${city.name} FAQs`} />
      )}

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <h2 className="font-heading text-xl font-semibold text-brand-teal-dark mb-4">
          Proof
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {city.proof.map((text, i) => (
            <ReviewCard key={i} text={text} />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <LocalResources resources={city.localResources} />
      </div>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
        <h2 className="font-heading text-xl font-semibold text-brand-teal-dark mb-3">
          Nearby Service Areas
        </h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {city.nearbyCities.map((slug) => {
            const nearby = cityBySlug(slug);
            if (!nearby) return null;
            return (
              <Link
                key={slug}
                href={`/locations/${slug}`}
                className="rounded-full border border-brand-teal/30 px-4 py-2 font-medium text-brand-teal-dark hover:bg-brand-green-light/40"
              >
                {nearby.name}
              </Link>
            );
          })}
        </div>
      </section>

      <CTABand heading={city.ctaHeading} body={city.ctaBody} />

      <ServicesGrid heading="Our Services" />
    </>
  );
}
