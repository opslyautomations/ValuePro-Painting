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
import Reveal from "@/components/motion/Reveal";
import ServiceHero from "@/components/service/ServiceHero";
import QuickFacts from "@/components/service/QuickFacts";
import SectionNav, { type NavItem } from "@/components/service/SectionNav";
import ServiceSectionBlock, {
  isPullQuote,
  sectionId,
} from "@/components/service/ServiceSections";

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

  const summary = serviceBySlug(service.slug);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  // Pull quotes carry no heading, so they are not navigation targets.
  const navItems: NavItem[] = [
    { id: "overview", label: "Overview" },
    ...service.sections
      .filter((s) => !isPullQuote(s))
      .map((s) => ({ id: sectionId(s.heading), label: s.heading })),
    ...(service.faqs.length > 0 ? [{ id: "faqs", label: "FAQs" }] : []),
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

      <ServiceHero
        slug={service.slug}
        title={service.h1}
        lede={summary?.line ?? service.metaDescription}
      />

      <QuickFacts />

      <SectionNav items={navItems} />

      <section id="overview" className="scroll-mt-40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <Reveal direction="up">
            <div className="max-w-3xl text-lg">
              <Prose blocks={service.intro} />
            </div>
          </Reveal>
        </div>
      </section>

      {service.sections.map((section) => (
        <ServiceSectionBlock key={section.heading} section={section} />
      ))}

      {service.clientFacts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
          <div className="max-w-3xl">
            <ClientFactNotice items={service.clientFacts} />
          </div>
        </section>
      )}

      {service.faqs.length > 0 && (
        <div id="faqs" className="scroll-mt-40 bg-white">
          <FAQAccordion
            faqs={service.faqs}
            heading={`${service.name} FAQs`}
            align="left"
          />
          {service.authorityLink && (
            <div className="mx-auto max-w-7xl px-4 sm:px-6 -mt-8 pb-10">
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
        </div>
      )}

      {(service.relatedServices.length > 0 || service.relatedCities.length > 0) && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <Reveal direction="up">
            <h2 className="font-heading text-xl font-semibold text-brand-teal-dark mb-4">
              Related pages
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3 text-sm">
            {service.relatedServices.map((s, i) => {
              const related = serviceBySlug(s);
              if (!related) return null;
              return (
                <Reveal key={s} direction="scale" delay={i * 60}>
                  <Link
                    href={`/services/${s}`}
                    className="tap-target inline-flex items-center rounded-full border border-brand-teal/30 bg-white px-4 py-2 font-medium text-brand-teal-dark transition-all hover:-translate-y-0.5 hover:border-brand-teal hover:shadow-md"
                  >
                    {related.name}
                  </Link>
                </Reveal>
              );
            })}
            {service.relatedCities.map((c, i) => {
              const related = cityBySlug(c);
              if (!related) return null;
              return (
                <Reveal key={c} direction="scale" delay={(i + 2) * 60}>
                  <Link
                    href={`/locations/${c}`}
                    className="tap-target inline-flex items-center rounded-full border border-brand-teal/30 bg-white px-4 py-2 font-medium text-brand-teal-dark transition-all hover:-translate-y-0.5 hover:border-brand-teal hover:shadow-md"
                  >
                    {related.name}, MO
                  </Link>
                </Reveal>
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
