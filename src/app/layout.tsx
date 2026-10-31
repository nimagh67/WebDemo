import type { Metadata } from "next";
import { Vazirmatn, Inter, Marcellus, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const vibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vibes",
  display: "swap",
});

const SITE = "https://aroushaglobal.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "AROUSHA GLOBAL — Bridging Markets · Building Futures",
    template: "%s | AROUSHA GLOBAL",
  },
  description:
    "AROUSHA GLOBAL is an international trading house: oil derivatives, petrochemicals, edible oils & food, metals, stone and general cargo — verified sourcing, documented quality, end-to-end logistics.",
  keywords: [
    "AROUSHA GLOBAL",
    "international trade",
    "bitumen 60/70",
    "base oil SN500",
    "granular sulfur",
    "naphtha",
    "petrochemical",
    "بازرگانی بین‌المللی",
    "قیر",
    "تجارت بین‌الملل",
  ],
  alternates: {
    canonical: "/",
    languages: {
      fa: "/fa",
      en: "/en",
      ar: "/ar",
      ru: "/ru",
      tr: "/tr",
      "x-default": "/en",
    },
  },
  openGraph: {
    title: "AROUSHA GLOBAL — Bridging Markets · Building Futures",
    description:
      "Connecting Markets. Delivering Value. — oil derivatives, petrochemicals, food, metals, stone & general cargo.",
    url: SITE,
    siteName: "AROUSHA GLOBAL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AROUSHA GLOBAL",
    description: "Bridging Markets · Building Futures",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AROUSHA GLOBAL",
  url: SITE,
  email: "info@aroushaglobal.com",
  slogan: "Bridging Markets · Building Futures",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 12, Shahid Beheshti St.",
    addressLocality: "Tehran",
    addressCountry: "IR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+989002810097",
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: ["fa", "en", "ar", "ru", "tr"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+905358971454",
      contactType: "sales",
      areaServed: "TR",
    },
    {
      "@type": "ContactPoint",
      telephone: "+905317927930",
      contactType: "sales",
      areaServed: "TR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazir.variable} ${inter.variable} ${marcellus.variable} ${vibes.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
