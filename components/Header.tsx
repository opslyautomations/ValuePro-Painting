"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS, CITIES, SERVICES } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-brand-offwhite/95 backdrop-blur border-b border-black/5"
      style={{ height: "var(--header-height)" }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex flex-col leading-tight shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-heading text-xl sm:text-2xl font-semibold text-brand-teal-dark">
            ValuePro Painting
          </span>
          <span className="text-xs text-ink-muted hidden sm:block">
            Residential &amp; Commercial Painting
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-ink">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-brand-teal flex items-center gap-1">
              Services
              <span aria-hidden>▾</span>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 rounded-lg border border-black/5 bg-white shadow-lg py-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-4 py-2 text-sm hover:bg-brand-green-light/40"
                  >
                    {s.name}
                  </Link>
                ))}
                <div className="border-t border-black/5 my-1" />
                <Link
                  href="/services"
                  className="block px-4 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-green-light/40"
                >
                  All Services
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button className="hover:text-brand-teal flex items-center gap-1">
              Service Areas
              <span aria-hidden>▾</span>
            </button>
            {areasOpen && (
              <div className="absolute left-0 top-full w-64 rounded-lg border border-black/5 bg-white shadow-lg py-2">
                {CITIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}`}
                    className="block px-4 py-2 text-sm hover:bg-brand-green-light/40"
                  >
                    {c.name}
                  </Link>
                ))}
                <div className="border-t border-black/5 my-1" />
                <Link
                  href="/locations"
                  className="block px-4 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-green-light/40"
                >
                  All Service Areas
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-brand-teal">
            About
          </Link>
          <Link href="/paint-colors" className="hover:text-brand-teal">
            Paint Colors
          </Link>
          <Link href="/gallery" className="hover:text-brand-teal">
            Gallery
          </Link>
          <Link href="/blog" className="hover:text-brand-teal">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-brand-teal">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="tap-target inline-flex items-center px-3 font-semibold text-brand-teal-dark hover:text-brand-teal"
          >
            {BUSINESS.phone}
          </a>
          <Link
            href="/contact"
            className="tap-target inline-flex items-center rounded-md bg-brand-teal px-4 py-2 font-semibold text-white hover:bg-brand-teal-dark transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            aria-label={`Call ${BUSINESS.phone}`}
            className="tap-target inline-flex items-center justify-center rounded-md bg-brand-teal px-3 text-white"
          >
            Call
          </a>
          <button
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="tap-target inline-flex items-center justify-center rounded-md border border-black/10 px-3"
          >
            <span aria-hidden>☰</span>
          </button>
        </div>
      </div>

      {/* Mobile full-screen drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-brand-offwhite overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-4 border-b border-black/5">
            <span className="font-heading text-xl font-semibold text-brand-teal-dark">
              ValuePro Painting
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="tap-target inline-flex items-center justify-center rounded-md border border-black/10 px-3"
            >
              <span aria-hidden>✕</span>
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1 text-lg">
            <p className="pt-1 pb-1 text-sm font-semibold uppercase text-ink-muted">
              Services
            </p>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="tap-target flex items-center py-2 pl-2"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <Link
              href="/services"
              className="tap-target flex items-center py-2 pl-2 font-semibold text-brand-teal"
              onClick={() => setMobileOpen(false)}
            >
              All Services
            </Link>

            <p className="pt-3 pb-1 text-sm font-semibold uppercase text-ink-muted">
              Service Areas
            </p>
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="tap-target flex items-center py-2 pl-2"
                onClick={() => setMobileOpen(false)}
              >
                {c.name}
              </Link>
            ))}
            <Link
              href="/locations"
              className="tap-target flex items-center py-2 pl-2 font-semibold text-brand-teal"
              onClick={() => setMobileOpen(false)}
            >
              All Service Areas
            </Link>

            <div className="border-t border-black/5 my-3" />
            <Link
              href="/about"
              className="tap-target flex items-center py-2"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/paint-colors"
              className="tap-target flex items-center py-2"
              onClick={() => setMobileOpen(false)}
            >
              Paint Colors
            </Link>
            <Link
              href="/gallery"
              className="tap-target flex items-center py-2"
              onClick={() => setMobileOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="tap-target flex items-center py-2"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="tap-target flex items-center py-2 mt-2 justify-center rounded-md bg-brand-teal text-white font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
