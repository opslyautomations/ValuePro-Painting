import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import GalleryGrid from "@/components/GalleryGrid";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/motion/Reveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { paletteById } from "@/components/house/palettes";

export const metadata: Metadata = pageMetadata({
  title: "Project Gallery | ValuePro Painting",
  description:
    "Exterior color schemes for the house styles common in St. Louis County, built from real Sherwin-Williams and Benjamin Moore colors. Project photos coming soon.",
  path: "/gallery",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
];

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <Reveal direction="up">
          <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
            Project Gallery
          </h1>
          <p className="mt-4 text-ink-muted leading-relaxed">
            Photographs from finished ValuePro Painting projects are being added
            here as jobs wrap. In the meantime, below are colour renderings of
            the house styles we work on most across west St. Louis County — each
            one in a scheme built from real Sherwin-Williams and Benjamin Moore
            products, so you can see how a combination reads on a whole
            elevation before you commit to it.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-4">
        <Reveal direction="up">
          <BeforeAfterSlider
            variant="craftsman"
            palette={paletteById("wildwood-sage")}
            uid="gallery-compare"
          />
          <p className="mt-3 text-center text-sm text-ink-muted">
            Drag to compare — a weathered elevation against the same house in
            Saybrook Sage HC-114 with White Dove OC-17 trim. Illustration, not a
            photograph.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <GalleryGrid count={9} />
      </section>

      <CTABand
        heading="Want your project to show up here?"
        body="Get a free estimate and let's get started."
      />
    </>
  );
}
