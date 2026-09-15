import { BUSINESS, CITIES, SITE_NAME, SITE_URL } from "./constants";
import { openingHoursSpecification } from "./hours";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    areaServed: CITIES.map((c) => `${c.name}, MO`),
    sameAs: [BUSINESS.gbpUrl],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function localBusinessSchema(cityName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: SITE_NAME,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    url: SITE_URL,
    areaServed: {
      "@type": "City",
      name: `${cityName}, MO`,
    },
    openingHoursSpecification: openingHoursSpecification(),
  };
}

export function homepageLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    name: SITE_NAME,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
    url: SITE_URL,
    areaServed: CITIES.map((c) => ({
      "@type": "City",
      name: `${c.name}, MO`,
    })),
    openingHoursSpecification: openingHoursSpecification(),
  };
}

export function serviceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    name: serviceName,
    description,
    areaServed: "St. Louis County, MO",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}${post.path}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE_NAME}`,
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      employee: {
        "@type": "Person",
        name: BUSINESS.owner,
      },
      areaServed: CITIES.map((c) => `${c.name}, MO`),
    },
  };
}

export function jsonLdScript(data: object) {
  return JSON.stringify(data);
}
