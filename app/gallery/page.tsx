import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import GalleryGrid from "@/components/GalleryGrid";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = pageMetadata({
  title: "Project Gallery | ValuePro Painting",
  description:
    "Browse completed interior, exterior and cabinet refinishing projects from ValuePro Painting across St. Louis County. Real photos coming soon.",
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
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
          Project Gallery
        </h1>
        <p className="mt-4 text-ink-muted">
          Real before-and-after photos from ValuePro Painting projects are
          coming soon. This gallery is ready for them.
        </p>
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
