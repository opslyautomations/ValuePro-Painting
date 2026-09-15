import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/motion/Reveal";
import ServiceScene from "@/components/service/ServiceScene";
import ProcessTimeline from "@/components/ProcessTimeline";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "Painting Services in St. Louis County | ValuePro",
  description:
    "All seven ValuePro Painting services: interior, exterior, cabinets, commercial, HOA, drywall repair and specialized finishes. 15+ years experience, free written estimate.",
  path: "/services",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

/**
 * Bento layout over a six-column grid: four wide cards carry an illustration,
 * three compact cards sit in the middle row. Spans are fixed per position so
 * every row fills exactly.
 */
const LAYOUT: { span: string; featured: boolean }[] = [
  { span: "lg:col-span-3", featured: true },
  { span: "lg:col-span-3", featured: true },
  { span: "lg:col-span-2", featured: false },
  { span: "lg:col-span-2", featured: false },
  { span: "lg:col-span-2", featured: false },
  { span: "lg:col-span-3", featured: true },
  { span: "lg:col-span-3", featured: true },
];

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
        <div
          aria-hidden
          className="vp-float pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl"
          style={{ animationDuration: "12s" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
          <Reveal direction="up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-brand-green-light">
              {BUSINESS.experienceYears}+ years experience · EPA Lead-Safe
              Certified
            </p>
          </Reveal>
          <Reveal direction="up" delay={80}>
            <h1 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Painting Services in St. Louis County
            </h1>
          </Reveal>
          <Reveal direction="up" delay={160}>
            <p className="mt-5 max-w-2xl text-lg text-white/90">
              Residential and commercial painting, from interior refreshes to
              full HOA repaint programs. Every service is bid with a free,
              written estimate — no prices guessed over the phone.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((s, i) => {
            const layout = LAYOUT[i] ?? { span: "lg:col-span-2", featured: false };
            return (
              <Reveal
                key={s.slug}
                direction="up"
                delay={(i % 3) * 100}
                className={`${layout.span} h-full`}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group vp-lift flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm hover:border-brand-teal/30 hover:shadow-lg"
                >
                  {layout.featured && (
                    <ServiceScene
                      slug={s.slug}
                      uid={`idx-${s.slug}`}
                      delay={200 + i * 120}
                      className="aspect-[16/9] w-full"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    {!layout.featured && (
                      <span
                        aria-hidden
                        className="mb-3 block h-1 w-10 rounded-full bg-brand-teal/50"
                      />
                    )}
                    <h2
                      className={`font-heading font-semibold text-ink group-hover:text-brand-teal ${
                        layout.featured ? "text-xl" : "text-lg"
                      }`}
                    >
                      {s.name}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                      {s.line}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-brand-teal">
                      See what&apos;s involved <span className="vp-arrow">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <div className="bg-brand-green-light/30">
        <ProcessTimeline />
      </div>

      <CTABand
        heading="Not sure which service fits?"
        body="Tell us what's going on and we'll point you to the right one — or bid the whole project."
      />
    </>
  );
}
