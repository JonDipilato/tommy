import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://tkprogarage.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TKProGarage | Local Auto Repair",
  description:
    "Reliable local auto repair, diagnostics, AC service, brakes, oil changes, and general vehicle repairs. Call TKProGarage at 508-506-1887.",
  keywords: [
    "auto repair",
    "mechanic",
    "AC service",
    "brake service",
    "engine diagnostics",
    "oil change",
    "TKProGarage",
    "Southbridge auto repair",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "TKProGarage | Local Auto Repair",
    description:
      "Honest, skilled auto repair for everyday cars and trucks. Diagnostics, AC, brakes, oil changes, and more.",
    siteName: "TKProGarage",
    images: [
      {
        url: "/images/auto-repair/garage-hero.jpg",
        width: 1200,
        height: 630,
        alt: "TKProGarage auto repair service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TKProGarage | Local Auto Repair",
    description:
    "Honest, skilled auto repair for everyday cars and trucks. Call 508-506-1887.",
    images: ["/images/auto-repair/garage-hero.jpg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0E1A2B",
  width: "device-width",
  initialScale: 1,
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "TKProGarage",
  image: `${SITE_URL}/images/auto-repair/garage-hero.jpg`,
  logo: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: "+1-508-506-1887",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "482 Southbridge St, P.O. 341",
    addressLocality: "Auburn",
    addressRegion: "MA",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Above ASE Certified Standards",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "AC Certified",
    },
  ],
  areaServed: {
    "@type": "Place",
    name: "Greater Worcester County, MA",
  },
  makesOffer: [
    "Engine Diagnostics",
    "Brake Service",
    "AC Service",
    "Oil Changes",
    "General Repairs",
    "Preventive Maintenance",
  ].map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://rsms.me/"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <Script
          id="ld-json-business"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(businessJsonLd)}
        </Script>
        {children}
      </body>
    </html>
  );
}
