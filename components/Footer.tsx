import Link from "next/link";
import { BUSINESS, CITIES, SERVICES, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-teal-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-heading text-xl font-semibold">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-white/80">
            Residential and commercial painting, based in Ballwin, Missouri.
          </p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="mt-4 block font-semibold hover:text-brand-green-light"
          >
            {BUSINESS.phone}
          </a>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="mt-1 block text-sm text-white/80 hover:text-brand-green-light"
          >
            {BUSINESS.email}
          </a>
        </div>

        <div>
          <p className="font-semibold mb-3">Services</p>
          <ul className="space-y-2 text-sm text-white/80">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-brand-green-light"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">Service Areas</p>
          <ul className="space-y-2 text-sm text-white/80">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/locations/${c.slug}`}
                  className="hover:text-brand-green-light"
                >
                  {c.name}, MO
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">Company</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/about" className="hover:text-brand-green-light">
                About
              </Link>
            </li>
            <li>
              <Link href="/paint-colors" className="hover:text-brand-green-light">
                Paint Colors
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-brand-green-light">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand-green-light">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand-green-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-xs text-white/70 space-y-1">
          <p>EPA Lead-Safe Certified (RRP)</p>
          <p>Serving Ballwin, Chesterfield, Wildwood, Kirkwood, Webster Groves, Manchester, Creve Coeur, Town and Country, Ellisville and Des Peres.</p>
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
