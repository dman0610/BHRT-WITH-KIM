import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PromoBanner from "@/components/layout/PromoBanner";
import JsonLd from "@/components/seo/JsonLd";
import Analytics from "@/components/analytics/Analytics";
import SideVines from "@/components/ui/SideVines";
import { isPromoActive } from "@/lib/promo";
import { SITE } from "@/lib/site";
import { medicalBusinessSchema, personSchema, webSiteSchema } from "@/lib/schema";
import "./globals.css";

/**
 * Re-render hourly so the promo banner's end date is evaluated against request
 * time rather than build time. Without this, a statically generated page would
 * keep advertising an expired offer indefinitely.
 */
export const revalidate = 3600;

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const HOME_TITLE = "Bioidentical Hormone Therapy in Utah | BHRT with Kim";
const HOME_DESCRIPTION =
  "Kim Yadon, FNP-C provides bioidentical hormone replacement therapy by " +
  "virtual visit to women across Utah. Free phone consultation. Pricing published.";

export const metadata: Metadata = {
  /**
   * metadataBase is what makes relative canonical and OG URLs resolve to
   * absolute ones. Without it they silently break — the most common cause of a
   * site having OG tags that don't work.
   */
  metadataBase: new URL(SITE.url),
  title: {
    default: HOME_TITLE,
    // Pages supply only their segment; budget is 44 chars. See docs/02-KEYWORD-MAP.md.
    template: "%s | BHRT with Kim",
  },
  /**
   * Deliberately not SITE.entityStatement — that runs 226 characters, which is
   * built for schema (no length limit) and truncates badly in search results.
   * Meta descriptions target 140–155.
   */
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    url: SITE.url,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sourceSans.variable} h-full antialiased`}
    >
      {/*
        `relative` exists so SideVines' `absolute inset-0` resolves to the full
        document height rather than the viewport — the vine has to climb the
        whole page, not just the first screen.
      */}
      <body className="relative min-h-full flex flex-col">
        {/* Decorative, desktop-only, pointer-events-none. See SideVines.tsx. */}
        <SideVines />

        {/*
          Entity graph, sitewide. These three link by @id so search engines and
          AI retrieval read one coherent entity rather than disconnected blobs.
        */}
        <JsonLd
          schema={[medicalBusinessSchema(), personSchema(), webSiteSchema()]}
        />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <PromoBanner active={isPromoActive()} />
        <Analytics />
      </body>
    </html>
  );
}
