"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { CITIES, SERVICES } from "@/lib/constants";

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "city", string>>;

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState<string | null>(null);

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const city = String(data.get("city") || "").trim();

    if (name.length < 2) next.name = "Enter your full name.";
    if (!/^[\d\s().+-]{7,}$/.test(phone)) next.phone = "Enter a valid phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!service) next.service = "Choose a service.";
    if (!city) next.city = "Choose your city.";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot
    if (String(data.get("company") || "").length > 0) {
      return;
    }

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          service: data.get("service"),
          city: data.get("city"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      router.push("/thank-you");
    } catch {
      setFormError(
        "Something went wrong sending your request. Please call us at (314) 807-3883 instead."
      );
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`rounded-xl bg-white shadow-lg border border-black/5 p-6 space-y-4 ${
        compact ? "" : "max-w-md w-full"
      }`}
    >
      <h2 className="font-heading text-xl font-semibold text-brand-teal-dark">
        Get a Free Estimate
      </h2>

      {/* Honeypot field, hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="tap-target w-full rounded-md border border-black/15 px-3 py-2 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="tap-target w-full rounded-md border border-black/15 px-3 py-2 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="tap-target w-full rounded-md border border-black/15 px-3 py-2 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-ink mb-1">
          Service
        </label>
        <select
          id="service"
          name="service"
          className="tap-target w-full rounded-md border border-black/15 px-3 py-2 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal"
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1 text-sm text-red-600">
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-ink mb-1">
          City
        </label>
        <select
          id="city"
          name="city"
          className="tap-target w-full rounded-md border border-black/15 px-3 py-2 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal"
          aria-invalid={Boolean(errors.city)}
          aria-describedby={errors.city ? "city-error" : undefined}
          defaultValue=""
        >
          <option value="" disabled>
            Select your city
          </option>
          {CITIES.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        {errors.city && (
          <p id="city-error" className="mt-1 text-sm text-red-600">
            {errors.city}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded-md border border-black/15 px-3 py-2 text-ink bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal"
        />
      </div>

      {formError && <p className="text-sm text-red-600">{formError}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="tap-target w-full inline-flex items-center justify-center rounded-md bg-brand-teal px-5 py-3 font-semibold text-white hover:bg-brand-teal-dark transition-colors disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Get My Free Estimate"}
      </button>
    </form>
  );
}
