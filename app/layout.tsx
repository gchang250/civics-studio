import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Fraunces, DM_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { getSessionVoteCatalog, type CatalogVote } from "@/lib/openparliament";
import MobileNav from "@/app/components/MobileNav";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const SESSION = "45-1";

// Applies to every route under the root layout, so the footer's "current
// through" date cannot freeze at build time on the otherwise-static pages
// (/terms, /privacy). Pages may still set a shorter window of their own.
export const revalidate = 3600;

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
    "Civics Studio publishes every recorded vote of Canada's 45th Parliament, MP by MP, and shows how those votes line up against what members campaigned on.",
  keywords: [
    "civic education",
    "MP voting record",
    "Canada civics",
    "Parliament open data",
    "political literacy",
    "campaign promises",
  ],
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

const navItems = [
  { href: "/projects/parliament-tracker", label: "Members" },
  { href: "/mission", label: "Mission" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Bare calendar strings parse as UTC midnight, which renders a day early
 *  west of Greenwich. Build the date from its parts. */
function formatDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Dating the footer from the newest vote we actually hold keeps the claim
  // checkable. It says what the data covers, with no assertion about how
  // often anyone touches the site.
  const votes = await getSessionVoteCatalog(SESSION).catch(
    (): CatalogVote[] => []
  );
  const currentThrough = votes.length > 0 ? formatDate(votes[0].date) : null;

  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${fraunces.variable}`}>
        {/* Solid espresso masthead. The band itself is the boundary, so
            there is no border rule anywhere in the layout. */}
        <header className="sticky top-0 z-50 bg-ink-2 text-paper">
          <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <Image src="/seal.png" alt="" width={30} height={30} priority />
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

              <nav className="flex flex-col gap-2.5 sm:items-start">
                {[...navItems, { href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }].map(
                  (item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-[0.9375rem] text-muted-ink transition-colors hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>
            </div>

            <div className="mt-14 space-y-1">
              {currentThrough && (
                <p className="small text-muted-ink">
                  Vote records current through {currentThrough}. The site reads
                  Parliament&apos;s open data directly, so new votes appear
                  without a redeploy.
                </p>
              )}
              <p className="small text-muted-ink">
                © {new Date().getFullYear()} Civics Studio · Vote data from{" "}
                <a
                  href="https://openparliament.ca"
                  target="_blank"
                  rel="noreferrer"
                  className="link text-muted-ink"
                  style={{ textDecorationColor: "var(--color-red-bright)" }}
                >
                  openparliament.ca
                </a>
              </p>
            </div>
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
