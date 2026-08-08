import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import ClientFactNotice from "@/components/ClientFactNotice";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "About ValuePro Painting | Ballwin, MO",
  description:
    "Meet Ryan, owner of ValuePro Painting. Years in home services, now painting homes across St. Louis County — one client at a time. Get a free estimate.",
  path: "/about",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[aboutPageSchema(), breadcrumbSchema(breadcrumbs)]} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
          About ValuePro Painting
        </h1>

        <ImagePlaceholder
          label="[CLIENT FACT REQUIRED — OWNER PHOTO: a real photo of Ryan, ideally on a job site]"
          className="mt-6 aspect-video"
        />

        <div className="mt-8 space-y-4 text-ink-muted leading-relaxed">
          <p>ValuePro Painting is Ryan&apos;s business, and it did not start with paint.</p>
          <p>
            Ryan has spent years running a home service company in St. Louis
            County — going into people&apos;s houses, cleaning them, and being
            trusted with the parts of a home most people don&apos;t let
            strangers near. That work teaches things a trade school
            doesn&apos;t. How to protect a floor. How to leave a room better
            than you found it. How to talk to a homeowner who is worried
            about their furniture. How to show up when you said you would.
          </p>
          <p>
            Painting was the natural next step, and it&apos;s now a full part
            of what ValuePro does. The standard came with it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
        <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark mb-4">
          What ValuePro actually does differently
        </h2>
        <div className="space-y-4 text-ink-muted leading-relaxed">
          <p>
            Most painting companies are built to run volume. Bigger crew,
            more jobs per week, next address. That model works, and it is not
            the one Ryan chose.
          </p>
          <p>
            ValuePro is built around handling each client personally — which
            means Ryan is involved in your project rather than dispatching
            it. You get the same person at the estimate, during the work, and
            at the walkthrough. When something needs to be adjusted mid-job,
            you&apos;re not filing a request with an office.
          </p>
          <p>
            That&apos;s a deliberate limit on how much work the business
            takes at once. It&apos;s also the entire reason people call back.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
        <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark mb-4">
          How the home-services background shows up in the painting
        </h2>
        <div className="space-y-4 text-ink-muted leading-relaxed">
          <p>Coming to painting from cleaning changes what a crew notices.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Protection is not an afterthought.</strong> Covering
              floors, moving and wrapping furniture, sealing doorways,
              containing dust — that&apos;s not a courtesy step tacked onto
              the end of a bid. It&apos;s how the job is set up from hour one.
            </li>
            <li>
              <strong>The house stays livable.</strong> Rooms get reset at
              the end of each working day rather than left as a staging area
              for the duration.
            </li>
            <li>
              <strong>The finish standard is a homeowner&apos;s standard,
              not a jobsite standard.</strong> The test isn&apos;t whether
              the wall is painted. It&apos;s whether you&apos;d notice
              anything was ever wrong with it.
            </li>
            <li>
              <strong>Cleanup is part of the work.</strong> Not a phase that
              happens if there&apos;s time left.
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
        <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark mb-4">
          Certified for older homes
        </h2>
        <div className="space-y-4 text-ink-muted leading-relaxed">
          <p>
            ValuePro Painting is <strong>EPA Lead-Safe Certified (RRP)</strong>.
          </p>
          <p>
            That matters more in this part of St. Louis County than most
            homeowners realize. Federal rules require an EPA Lead-Safe
            Certified firm for any paid work disturbing more than six square
            feet of interior — or twenty square feet of exterior — painted
            surface in housing built before 1978. In cities like{" "}
            <Link href="/locations/kirkwood" className="text-brand-teal font-semibold hover:underline">
              Kirkwood
            </Link>
            ,{" "}
            <Link href="/locations/webster-groves" className="text-brand-teal font-semibold hover:underline">
              Webster Groves
            </Link>
            ,{" "}
            <Link href="/locations/manchester" className="text-brand-teal font-semibold hover:underline">
              Manchester
            </Link>{" "}
            and older parts of{" "}
            <Link href="/locations/ballwin" className="text-brand-teal font-semibold hover:underline">
              Ballwin
            </Link>
            , that describes a great many houses, and a normal exterior
            repaint crosses the threshold within the first hour of scraping
            trim.
          </p>
          <p>It&apos;s a certification worth asking every contractor about, not just us.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
        <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark mb-4">
          Where we work
        </h2>
        <div className="space-y-4 text-ink-muted leading-relaxed">
          <p>
            ValuePro is a mobile business based in Ballwin — no storefront,
            no showroom. Estimates happen at your house, which is the only
            place a paint decision can honestly be made anyway.
          </p>
          <p>
            We serve{" "}
            <Link href="/locations/ballwin" className="text-brand-teal font-semibold hover:underline">Ballwin</Link>,{" "}
            <Link href="/locations/chesterfield" className="text-brand-teal font-semibold hover:underline">Chesterfield</Link>,{" "}
            <Link href="/locations/wildwood" className="text-brand-teal font-semibold hover:underline">Wildwood</Link>,{" "}
            <Link href="/locations/kirkwood" className="text-brand-teal font-semibold hover:underline">Kirkwood</Link>,{" "}
            <Link href="/locations/webster-groves" className="text-brand-teal font-semibold hover:underline">Webster Groves</Link>,{" "}
            <Link href="/locations/manchester" className="text-brand-teal font-semibold hover:underline">Manchester</Link>,{" "}
            <Link href="/locations/creve-coeur" className="text-brand-teal font-semibold hover:underline">Creve Coeur</Link>,{" "}
            <Link href="/locations/town-and-country" className="text-brand-teal font-semibold hover:underline">Town and Country</Link>,{" "}
            <Link href="/locations/ellisville" className="text-brand-teal font-semibold hover:underline">Ellisville</Link> and{" "}
            <Link href="/locations/des-peres" className="text-brand-teal font-semibold hover:underline">Des Peres</Link>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
        <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark mb-4">
          What we do
        </h2>
        <p className="text-ink-muted leading-relaxed">
          Residential and commercial painting:{" "}
          <Link href="/services/interior-painting" className="text-brand-teal font-semibold hover:underline">interior</Link> and{" "}
          <Link href="/services/exterior-painting" className="text-brand-teal font-semibold hover:underline">exterior painting</Link>,{" "}
          <Link href="/services/cabinet-refinishing" className="text-brand-teal font-semibold hover:underline">cabinet refinishing</Link>,{" "}
          <Link href="/services/drywall-repair" className="text-brand-teal font-semibold hover:underline">drywall repair</Link>,{" "}
          <Link href="/services/lime-wash-specialized-painting" className="text-brand-teal font-semibold hover:underline">lime wash and specialized finishes</Link>,{" "}
          <Link href="/services/commercial-painting" className="text-brand-teal font-semibold hover:underline">commercial painting</Link>, and{" "}
          <Link href="/services/hoa-properties" className="text-brand-teal font-semibold hover:underline">HOA and community association work</Link>.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-6">
        <ClientFactNotice
          items={[
            "[CLIENT FACT REQUIRED — YEARS IN HOME SERVICES]",
            "[CLIENT FACT REQUIRED — YEAR PAINTING WAS ADDED]",
            "[CLIENT FACT REQUIRED — WARRANTY TERMS]",
            "[CLIENT FACT REQUIRED — CREW SIZE]",
          ]}
        />
      </section>

      <CTABand
        heading="Talk to the person who'll actually be on your job."
        body={`Ryan does the estimates himself. Call ${BUSINESS.phone} or send the form and pick a time.`}
      />
    </>
  );
}
