import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";
import ColorBrowser from "@/components/color-browser/ColorBrowser";
import { filtersFromSearchParams } from "@/components/color-browser/filter-utils";
import { PAINT_COLORS } from "@/data/paint-colors";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title:
    "Popular Paint Colors for Ballwin Homes | Sherwin-Williams & Benjamin Moore | ValuePro Painting",
  description:
    "Browse Sherwin-Williams & Benjamin Moore paint colors for St. Louis County homes. Filter by family and LRV, then get a free color consultation.",
  path: "/paint-colors",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Paint Colors", path: "/paint-colors" },
];

const FAQS: FAQItem[] = [
  {
    question: "How accurate are the color swatches on this page?",
    answer:
      "They're on-screen approximations built from each manufacturer's published hex or LRV-matched values — accurate enough to shortlist colors, but not a substitute for a physical paint chip or a sample brushed onto your own wall under your own light.",
  },
  {
    question: "What's the difference between Sherwin-Williams and Benjamin Moore paint?",
    answer:
      "Both are full-service, contractor-grade lines with strong color programs. The differences show up more in specific formulas, sheen names and how a given color is mixed than in overall quality. We work with both and pick based on the specific color, substrate and job rather than a brand preference.",
  },
  {
    question: "What does LRV mean and why should I care?",
    answer:
      "Light Reflectance Value is a 0–100 measure of how much light a color bounces back. It's the single most useful number on this page for predicting how a color will actually look in a specific room, especially one that doesn't get much natural light.",
  },
  {
    question: "Should my trim be a different sheen than my walls?",
    answer:
      "Almost always, yes. Trim and doors typically go in semi-gloss or satin for durability and a crisp line against the wall color, while walls usually go flat, matte or eggshell depending on the room.",
  },
  {
    question: "Can I use an exterior color that isn't on an HOA's approved list?",
    answer:
      "Not without approval in most communities with an active architectural review process. Check with your HOA or municipality before you buy paint — we can help interpret an approved palette as part of a consultation.",
  },
  {
    question: "How many paint samples should I actually test?",
    answer:
      "Two or three finalists on the actual wall, not eight on a poster board. More than that usually just adds decision fatigue without adding useful information.",
  },
  {
    question: "Do you offer color consultations?",
    answer:
      "Yes — we bring physical samples to your property as part of a free estimate so you can see real paint under your own lighting before committing to gallons.",
  },
  {
    question: "What does \"Color of the Year\" actually mean?",
    answer:
      "It's a marketing designation each manufacturer assigns annually to a color they're promoting that year. Worth knowing for context, but not a signal that it's the right color for your specific house.",
  },
  {
    question: "Will the paint color look the same on my house as it does here?",
    answer:
      "No — screen and lighting differences mean it will read differently in person. Use this page to narrow your list, then confirm with a physical sample in the room or on the elevation where it's actually going.",
  },
  {
    question: "Can you match a color from another brand?",
    answer:
      "In most cases, yes — most professional-grade paint can be custom-tinted to match a formula from another manufacturer. Ask during your estimate.",
  },
];

export default async function PaintColorsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedParams = await searchParams;
  const sp = new URLSearchParams();
  for (const [key, value] of Object.entries(resolvedParams)) {
    if (typeof value === "string") sp.set(key, value);
  }
  const initialFilters = filtersFromSearchParams(sp);

  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), faqSchema(FAQS)]} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
          Sherwin-Williams &amp; Benjamin Moore Paint Colors for St. Louis
          County Homes
        </h1>
        <p className="mt-4 text-ink-muted leading-relaxed">
          We pulled together the Sherwin-Williams and Benjamin Moore colors
          we&apos;re asked about most on jobs across St. Louis County — from
          Ballwin brick ranches to Chesterfield two-stories to shaded
          Wildwood exteriors. Every swatch below is a screen approximation
          of the manufacturer&apos;s published color data, not the physical
          paint chip, so treat it as a starting point for narrowing options
          before we bring real samples to your house.
        </p>
      </section>

      <h2 className="sr-only">Browse Paint Colors by Family, Brand, Use and LRV</h2>
      <ColorBrowser colors={PAINT_COLORS} initialFilters={initialFilters} />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark mb-6">
          How to Pick a Paint Color in St. Louis County
        </h2>
        <div className="space-y-6 text-ink-muted leading-relaxed">
          <p>
            Eighty-some colors is still a lot to choose from. These are the
            things we actually tell homeowners and property managers before
            they order a gallon, whether the job is a single accent wall or
            a full exterior repaint.
          </p>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-2">
              What LRV Actually Tells You
            </h3>
            <p>
              Light Reflectance Value (LRV) is a 0–100 scale for how much
              light a color bounces back into a room — 0 reflects almost
              nothing, 100 reflects nearly all of it. It matters more than
              the name on the chip. Two &quot;white&quot; trim colors can
              behave completely differently on a wall depending on whether
              they sit at LRV 82 or LRV 90, especially in a room that
              doesn&apos;t get much direct sun. As a rough guide, most
              interior walls read comfortably between LRV 50 and LRV 85; go
              much lower on a north-facing room without much artificial
              light and it can start to feel closed in.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-2">
              North Light vs. South Light in a St. Louis County Home
            </h3>
            <p>
              Homes across{" "}
              <Link href="/locations/ballwin" className="text-brand-teal font-semibold hover:underline">
                Ballwin
              </Link>
              ,{" "}
              <Link href="/locations/kirkwood" className="text-brand-teal font-semibold hover:underline">
                Kirkwood
              </Link>{" "}
              and the rest of west St. Louis County get enough seasonal
              swing in light that the direction a room faces can change how
              a color reads by several shades. North-facing rooms get flat,
              cool, indirect light all day, which tends to push a warm
              greige toward gray. South-facing rooms get strong, direct
              light that can wash out a color at midday and hide its
              undertone. If you&apos;re deciding between two close colors,
              look at a sample in the actual room in the morning and again
              in the late afternoon before you commit — not just once,
              under one light.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-2">
              Match the Sheen to the Room, Not Just the Color
            </h3>
            <p>
              The finish matters as much as the hex code. Flat and matte
              hide drywall imperfections but scrub less well; eggshell and
              satin hold up to cleaning in kitchens, hallways and
              bathrooms; semi-gloss is standard for trim, doors and
              cabinets because it wipes clean and holds a hard edge. On{" "}
              <Link href="/services/cabinet-refinishing" className="text-brand-teal font-semibold hover:underline">
                cabinet refinishing
              </Link>{" "}
              jobs specifically, sheen does as much work as color choice —
              a satin lacquer finish on the &quot;wrong&quot; color still
              reads more expensive than a flat finish on the
              &quot;right&quot; one.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-2">
              Why Paint Chips and Online Swatches Lie
            </h3>
            <p>
              Every swatch on this page — and every chip on a store rack —
              is a screen or ink approximation, not the actual pigment.
              Screens render color differently depending on the display and
              its color profile, and a paint chip under fluorescent store
              lighting can look nothing like the same color under your
              living room&apos;s incandescent bulbs or your kitchen&apos;s
              LED strip. Treat everything here as a shortlist tool for
              narrowing this list down to three or four finalists, not a
              final decision made from a screen.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-2">
              HOA and Historic District Rules
            </h3>
            <p>
              Several of the communities we work in — parts of{" "}
              <Link href="/locations/chesterfield" className="text-brand-teal font-semibold hover:underline">
                Chesterfield
              </Link>{" "}
              with active HOAs, and older pockets of Kirkwood — have
              approved exterior color lists or a board review process
              before you repaint. Don&apos;t buy paint before checking;
              some associations require sign-off on anything beyond a
              pre-approved palette, and getting it wrong can mean
              repainting the same wall twice. If you&apos;re not sure
              whether your street has a color restriction, ask before you
              buy — it&apos;s a five-minute phone call that saves a
              repaint.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-2">
              Testing on the Actual Wall Beats Testing on a Board
            </h3>
            <p>
              Paint a sample directly on the wall in at least two spots —
              one near a window, one in a corner that gets less light —
              rather than moving a scrap of poster board around the room.
              The wall&apos;s texture, the trim color next to it, and the
              room&apos;s real light all change how a color reads. Let it
              dry fully, since colors shift as they cure, and look at it
              morning, midday and evening before ordering gallons. A
              two-foot square is enough — you don&apos;t need to paint half
              a wall to get a useful answer.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-2">
              When to Bring in a Second Set of Eyes
            </h3>
            <p>
              If you&apos;re stuck between two or three finalists, or you&apos;re
              trying to coordinate a whole-house palette across{" "}
              <Link href="/services/interior-painting" className="text-brand-teal font-semibold hover:underline">
                interior painting
              </Link>{" "}
              and{" "}
              <Link href="/services/exterior-painting" className="text-brand-teal font-semibold hover:underline">
                exterior painting
              </Link>{" "}
              at the same time, that&apos;s usually the point to stop
              guessing from a screen. We bring physical samples to the
              house as part of a free consultation, so you see the color in
              your own light before a gallon gets opened.
            </p>
          </div>
        </div>
      </section>

      <FAQAccordion faqs={FAQS} heading="Paint Color Questions" />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-8">
        <div className="rounded-xl border border-black/10 bg-white p-6 text-sm text-ink-muted space-y-3">
          <p>
            Swatches on this page are on-screen approximations built from
            manufacturer-published hex or LRV data and will not match
            physical paint under real lighting conditions.
          </p>
          <p>
            Color names, numbers, and Color of the Year designations are
            trademarks of their respective manufacturers.{" "}
            {BUSINESS.name} is an independent contractor and is not
            affiliated with, endorsed by, or sponsored by
            Sherwin-Williams, Benjamin Moore, or any other paint
            manufacturer.
          </p>
          <p>
            Explore more colors directly at{" "}
            <a
              href="https://www.sherwin-williams.com"
              target="_blank"
              rel="nofollow noopener"
              className="text-brand-teal font-semibold hover:underline"
            >
              sherwin-williams.com
            </a>{" "}
            and{" "}
            <a
              href="https://www.benjaminmoore.com"
              target="_blank"
              rel="nofollow noopener"
              className="text-brand-teal font-semibold hover:underline"
            >
              benjaminmoore.com
            </a>
            .
          </p>
          <p>
            We&apos;re happy to bring physical sample cards to your
            property — screens and store lighting can only get you so
            far.
          </p>
        </div>
      </section>

      <section className="bg-brand-green-light/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark">
              Get a Free In-Home Color Consultation
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              We&apos;ll bring real physical samples from Sherwin-Williams
              and Benjamin Moore to your property so you can see the color
              in your own light before a gallon gets opened. Call{" "}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="font-semibold text-brand-teal-dark hover:text-brand-teal"
              >
                {BUSINESS.phone}
              </a>{" "}
              or send the form.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
