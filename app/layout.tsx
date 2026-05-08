import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://tkprogarage.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TK Pro Garage LLC | Mobile Auto Repair",
  description:
    "Mobile auto repair, diagnostics, maintenance service contracts, brakes, oil changes, and general vehicle repairs. Call TK Pro Garage LLC at 508-506-1887.",
  keywords: [
    "auto repair",
    "mobile mechanic",
    "mobile auto repair",
    "on-site maintenance",
    "brake service",
    "engine diagnostics",
    "oil change",
    "TK Pro Garage LLC",
    "Auburn mobile auto repair",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "TK Pro Garage LLC | Mobile Auto Repair",
    description:
      "Mobile auto repair and maintenance service contracts for everyday cars and trucks. Diagnostics, brakes, oil changes, and more.",
    siteName: "TK Pro Garage LLC",
    images: [
      {
        url: "/images/auto-repair/diagnostics.jpg",
        width: 1200,
        height: 630,
        alt: "TK Pro Garage LLC auto repair service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TK Pro Garage LLC | Mobile Auto Repair",
    description:
      "Mobile auto repair and maintenance contracts for everyday cars and trucks. Call 508-506-1887.",
    images: ["/images/auto-repair/diagnostics.jpg"],
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
  name: "TK Pro Garage LLC",
  image: `${SITE_URL}/images/auto-repair/diagnostics.jpg`,
  logo: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: "+1-508-506-1887",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "341",
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
  areaServed: {
    "@type": "Place",
    name: "Auburn, MA",
  },
  makesOffer: [
    "Mobile Auto Repair",
    "Engine Diagnostics",
    "Brake Service",
    "Oil Changes",
    "General Repairs",
    "Preventive Maintenance",
    "Maintenance Service Contracts",
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
