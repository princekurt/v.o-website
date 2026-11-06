import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "./content";
import { pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const body = localFont({ src: "./fonts/SFNS.ttf", variable: "--font-body", display: "swap" });

const poster = localFont({
  src: "./fonts/Anton.woff2",
  variable: "--font-poster",
  weight: "400",
  display: "swap",
});

const editorial = localFont({
  src: [
    { path: "./fonts/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-editorial",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/JetBrainsMono.woff2",
  variable: "--font-mono",
  weight: "100 800",
  display: "swap",
});

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: "Villanueva Ong Electrical Lights Trading | Solar Installation",
    description:
      "Solar installation for homes, farms, and businesses by Villanueva Ong Electrical Lights Trading — plus electrical supplies, street lighting, and electrical works. Private and government projects nationwide.",
    path: "/",
  }),
  keywords: [
    "solar installation Philippines",
    "solar panel installation",
    "solar street lights",
    "solar powered irrigation",
    "electrical supplies Philippines",
    "Villanueva Ong Electrical Lights Trading",
    "Villanueva-Ong Electrical Lights Trading",
    "V.O Electrical Lights Trading",
  ],
  authors: [{ name: site.legalName }],
  robots: { index: true, follow: true },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#0B0B0A",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: site.legalName,
  alternateName: ["Villanueva-Ong Electrical Lights Trading", "V.O Electrical Lights Trading"],
  description:
    "Solar installation and electrical supply company in the Philippines. Residential, commercial, farm and ground-mounted solar, solar-powered irrigation, solar street lighting, electrical supplies, and electrical works.",
  telephone: site.phone,
  email: site.email,
  sameAs: [site.facebook],
  areaServed: { "@type": "Country", name: "Philippines" },
  knowsAbout: [
    "Residential Solar",
    "Commercial & Industrial Solar",
    "Farms & Agriculture",
    "Solar-Powered Irrigation",
    "Solar Street Lighting",
    "Ground-Mounted Arrays",
    "Electrical Works",
  ],
  makesOffer: [
    "Residential solar",
    "Commercial & industrial solar",
    "Farms & agriculture",
    "Solar-powered irrigation",
    "Solar street lighting",
    "Ground-mounted arrays",
    "Electrical supplies and works",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${poster.variable} ${editorial.variable} ${mono.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
