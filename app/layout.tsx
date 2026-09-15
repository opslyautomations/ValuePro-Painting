import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ScrollProgress from "@/components/motion/ScrollProgress";
import StickyCallBar from "@/components/StickyCallBar";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1f6f78",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Painters in St. Louis County | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Residential and commercial painting across St. Louis County. Interior, exterior, cabinets and drywall repair. EPA Lead-Safe certified. Free estimate.",
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script below adds .motion-ready to
    // this element before React hydrates, so the client className legitimately
    // differs from the server's. The suppression is scoped to <html>'s own
    // attributes and does not extend to the tree underneath it.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {/* Marks the document as safe to animate, before first paint. The
            scroll-reveal CSS only hides content inside .motion-ready, so a
            visitor with JS off — or with reduced motion requested — gets the
            full page with nothing waiting on an observer that never runs. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){document.documentElement.classList.add('motion-ready')}}catch(e){}})()",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
