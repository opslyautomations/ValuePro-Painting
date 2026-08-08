import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  noindex = false,
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    // Every title supplied to this helper is already a complete,
    // final string (verified <60 chars) — bypass the root layout's
    // "%s | ValuePro Painting" template so the site name isn't appended twice.
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
