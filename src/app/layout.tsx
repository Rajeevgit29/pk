import type { Metadata, Viewport } from "next";
import { Gochi_Hand, Martel_Sans, Rozha_One } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

// "Bold Indian Poster" pairing. Rozha One (Indian Type Foundry) and Martel Sans include
// Devanagari, so Hindi text like हर हाथ में किताब matches the English.
const serif = Rozha_One({
  subsets: ["latin", "devanagari"],
  weight: "400",
  variable: "--font-rozha",
  display: "swap",
});

const sans = Martel_Sans({
  subsets: ["latin", "devanagari"],
  weight: ["400", "600", "700"],
  variable: "--font-martel-sans",
  display: "swap",
});

const hand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/brand/logo-badge.png", width: 997, height: 998, alt: "Project Kitab logo" }],
  },
  twitter: { card: "summary", title: `${site.name} — ${site.tagline}`, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#011f27",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable} ${hand.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-petrol"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
