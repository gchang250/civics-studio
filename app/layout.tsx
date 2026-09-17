import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, DM_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import MobileNav from "@/app/components/MobileNav";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// High-character variable serif for display type. SOFT and WONK are Fraunces'
// own axes (only `wght` ships by default) and are what give it the engraved,
// slightly idiosyncratic cut used in `.display` and `.h2`.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  variable: "--font-display",
});

// Geometric and highly legible. Deliberately not Inter or a system font.
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Civics Studio",
    template: "%s | Civics Studio",
  },
  description:
    "Civics Studio publishes every recorded vote of Canada's 45th Parliament, MP by MP, and flags when a member voted against their own party.",
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
  { href: "/projects", label: "Projects" },
  { href: "/mission", label: "Mission" },
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
      <body className={`${dmSans.variable} ${fraunces.variable}`}>
        {/* Solid espresso masthead. The band itself is the boundary, so
            there is no border rule anywhere in the layout. */}
        <header className="sticky top-0 z-50 bg-ink-2 text-paper">
          <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <Image
                src="/seal.png"
                alt=""
                width={30}
                height={30}
                priority
              />
              <span
                className="text-[1.3rem] font-semibold tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Civics Studio
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[0.9375rem] font-medium text-paper/85 transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <MobileNav items={navItems} />
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-ink-2 text-paper">
          <div className="mx-auto max-w-6xl px-6 py-16">
            {/* 55/45 asymmetric, never an even three- or four-column grid. */}
            <div className="grid gap-12 md:grid-cols-[1.25fr_1fr]">
              <div>
                <span
                  className="text-2xl font-semibold tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Civics Studio
                </span>
                <p className="copy mt-4 max-w-sm text-[1rem] text-muted-ink">
                  We publish every recorded vote of Canada&apos;s 45th
                  Parliament, MP by MP, from Parliament&apos;s own open data.
                  Free to read and free to download.
                </p>
                <a
                  href="mailto:civicsstudio@gmail.com"
                  className="link mt-5 inline-block text-paper"
                  style={{ textDecorationColor: "var(--color-red-bright)" }}
                >
                  civicsstudio@gmail.com
                </a>
              </div>

              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                <nav className="flex flex-col gap-2.5">
                  <p className="text-[0.9375rem] font-semibold">Projects</p>
                  <Link href="/projects/parliament-tracker" className="text-[0.9375rem] text-muted-ink transition-colors hover:text-paper">
                    Parliament Tracker
                  </Link>
                  <Link href="/projects/media-bias-tracker" className="text-[0.9375rem] text-muted-ink transition-colors hover:text-paper">
                    Media Bias Detector
                  </Link>
                  <Link href="/projects/fried-rice-index" className="text-[0.9375rem] text-muted-ink transition-colors hover:text-paper">
                    The CanPol Index
                  </Link>
                  <Link href="/projects/cyffl" className="text-[0.9375rem] text-muted-ink transition-colors hover:text-paper">
                    CYFFL
                  </Link>
                </nav>

                <nav className="flex flex-col gap-2.5">
                  <p className="text-[0.9375rem] font-semibold">Studio</p>
                  <Link href="/mission" className="text-[0.9375rem] text-muted-ink transition-colors hover:text-paper">
                    Mission
                  </Link>
                  <Link href="/about" className="text-[0.9375rem] text-muted-ink transition-colors hover:text-paper">
                    About
                  </Link>
                  <Link href="/contact" className="text-[0.9375rem] text-muted-ink transition-colors hover:text-paper">
                    Contact
                  </Link>
                  <Link href="/privacy" className="text-[0.9375rem] text-muted-ink transition-colors hover:text-paper">
                    Privacy
                  </Link>
                  <Link href="/terms" className="text-[0.9375rem] text-muted-ink transition-colors hover:text-paper">
                    Terms
                  </Link>
                </nav>
              </div>
            </div>

            <p className="small mt-14 text-muted-ink">
              © {new Date().getFullYear()} Civics Studio · Vote data from
              openparliament.ca
            </p>
          </div>
        </footer>

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
