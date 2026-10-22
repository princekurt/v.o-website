import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Bundled local fonts keep the deployment self-contained while retaining next/font optimization.
const inter = localFont({ src: "./fonts/SFNS.ttf", variable: "--font-body" });
const outfit = localFont({ src: "./fonts/SFCompact.ttf", variable: "--font-display" });

export const metadata: Metadata = {
  title: "V.O Electrical Lights Trading | Solar Installation",
  description: "Solar installation for homes, farms, and businesses by V.O Electrical Lights Trading.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${outfit.variable}`}>{children}</body></html>;
}
