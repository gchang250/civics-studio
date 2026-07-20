import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import MobileNav from "@/app/components/MobileNav";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Civics Studio",
    template: "%s | Civics Studio",
  },
  description:
    "Civics Studio creates free games, data projects, and learning resources that make politics, economics, and government easier to understand.",
  keywords: [
    "civic education",
    "youth civic engagement",
    "Canada civics",
    "CanPol Index",
    "political literacy",
    "economic literacy",
  ],
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const navItems = [
  { href: "/mission", label: "Mission" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${libreBaskerville.variable}`}>

        {/* ── Utility bar ─────────────────────────────────── */}
        <div className="border-b border-edge-soft bg-ink-2">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mist-dim">
              Non-Partisan Civic Education
            </span>
            <a
              href="mailto:civicsstudio@gmail.com"
              className="text-[10px] tracking-[0.05em] text-mist-dim transition hover:text-maple-soft"
            >
              civicsstudio@gmail.com
            </a>
          </div>
        </div>

        {/* ── Navbar ──────────────────────────────────────── */}
        <header className="sticky top-0 z-50 border-b border-edge bg-ink/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-3 group">
              <div className="relative w-8 h-8 opacity-90 group-hover:opacity-100 transition duration-300">
                <Image
                  src="/seal.png"
                  alt="Civics Studio seal"
                  fill
                  sizes="32px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="serif text-lg font-bold tracking-tight text-cream">
                civics studio.
              </span>
            </Link>

            {/* Nav links */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[12px] font-medium tracking-[0.2em] text-mist transition duration-300 hover:text-maple-soft lowercase"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <MobileNav items={navItems} />
          </div>
        </header>

        <main>{children}</main>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="border-t border-edge bg-ink-2 text-cream">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">

            <div>
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 opacity-90 group-hover:opacity-100 transition duration-300">
                  <Image src="/seal.png" alt="Civics Studio seal" fill sizes="40px" className="object-contain" />
                </div>
                <div>
                  <span className="serif block text-xl font-bold text-cream">civics studio.</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-mist-dim">Est. 2026</span>
                </div>
              </Link>
              <p className="mt-6 max-w-sm text-sm leading-7 text-mist">
                Free games, data projects, and civic learning resources for
                students and educators in Canada and beyond.
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-maple font-semibold">
                For independent representation in Canada.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-maple">
                Projects
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm">
                <Link href="/projects/parliament-tracker" className="text-mist transition hover:text-maple-soft">
                  Parliament Tracker
                </Link>
                <Link href="/projects/media-bias-tracker" className="text-mist transition hover:text-maple-soft">
                  Media Bias Detector
                </Link>
                <Link href="/projects/fried-rice-index" className="text-mist transition hover:text-maple-soft">
                  The CanPol Index
                </Link>
                <Link href="/projects/cyffl" className="text-mist transition hover:text-maple-soft">
                  CYFFL
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-maple">
                Site
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm">
                <Link href="/mission" className="text-mist transition hover:text-maple-soft">Mission</Link>
                <Link href="/about" className="text-mist transition hover:text-maple-soft">About</Link>
                <Link href="/contact" className="text-mist transition hover:text-maple-soft">Contact</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-edge-soft px-6 py-5">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] uppercase tracking-[0.2em] text-mist-dim">
                © {new Date().getFullYear()} Civics Studio · All rights reserved
              </p>
              <div className="flex items-center gap-5">
                <Link
                  href="/privacy"
                  className="text-[10px] uppercase tracking-[0.2em] text-mist-dim transition hover:text-maple-soft"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-[10px] uppercase tracking-[0.2em] text-mist-dim transition hover:text-maple-soft"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        <Analytics />
      </body>
    </html>
  );
}
