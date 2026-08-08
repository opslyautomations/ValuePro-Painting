import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DATA, serviceDataBySlug } from "@/lib/services-data";
import { cityBySlug, serviceBySlug } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Prose } from "@/components/Prose";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import ServicesGrid from "@/components/ServicesGrid";
import ClientFactNotice from "@/components/ClientFactNotice";
import LocalResources from "@/components/LocalResources";

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDataBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDataBySlug(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service.name, service.metaDescription),
          breadcrumbSchema(breadcrumbs),
          ...(service.faqs.length > 0 ? [faqSchema(service.faqs)] : []),
        ]}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
          {service.h1}
        </h1>
        <div className="mt-6">
          <Prose blocks={service.intro} />
        </div>
      </section>

      {service.sections.map((section) => (
        <section key={section.heading} className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
          <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark mb-4">
            {section.heading}
          </h2>
          <Prose blocks={section.blocks} />
        </section>
      ))}

      {service.clientFacts.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
          <ClientFactNotice items={service.clientFacts} />
        </section>
      )}

      {service.faqs.length > 0 && (
        <>
          <FAQAccordion faqs={service.faqs} heading={`${service.name} FAQs`} />
          {service.authorityLink && (
            <div className="mx-auto max-w-3xl px-4 sm:px-6 -mt-8 pb-10">
              <LocalResources
                resources={[
                  {
                    name: service.authorityLink.anchor,
                    url: service.authorityLink.url,
                  },
                ]}
              />
            </div>
          )}
        </>
      )}

      {(service.relatedServices.length > 0 || service.relatedCities.length > 0) && (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
          <h2 className="font-heading text-xl font-semibold text-brand-teal-dark mb-3">
            Related pages
          </h2>
          <div className="flex flex-wrap gap-3 text-sm">
            {service.relatedServices.map((s) => {
              const related = serviceBySlug(s);
              if (!related) return null;
              return (
                <Link
                  key={s}
                  href={`/services/${s}`}
                  className="rounded-full border border-brand-teal/30 px-4 py-2 font-medium text-brand-teal-dark hover:bg-brand-green-light/40"
                >
                  {related.name}
                </Link>
              );
            })}
            {service.relatedCities.map((c) => {
              const related = cityBySlug(c);
              if (!related) return null;
              return (
                <Link
                  key={c}
                  href={`/locations/${c}`}
                  className="rounded-full border border-brand-teal/30 px-4 py-2 font-medium text-brand-teal-dark hover:bg-brand-green-light/40"
                >
                  {related.name}, MO
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <CTABand heading={service.ctaHeading} body={service.ctaBody} />

      <ServicesGrid heading="Explore All Services" />
    </>
  );
}
