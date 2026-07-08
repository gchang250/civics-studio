import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
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
    "Detente",
    "Fried Rice Index",
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
  { href: "/resources", label: "Resources" },
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
        <div className="border-b border-white/5 bg-[#060E1A]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
              Non-Partisan Civic Education
            </span>
            <a
              href="mailto:civicsstudio@gmail.com"
              className="text-[10px] text-white/25 transition hover:text-white/60"
            >
              civicsstudio@gmail.com
            </a>
          </div>
        </div>

        {/* ── Navbar ──────────────────────────────────────── */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A1628]/97 backdrop-blur-md relative">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <Image
                src="/seal.png"
                alt="Civics Studio seal"
                width={32}
                height={32}
                priority
              />
              <span className="serif text-base font-bold tracking-tight text-white">
                Civics Studio
              </span>
            </Link>

            {/* Nav links */}
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/55 transition hover:text-white"
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
        <footer className="border-t border-white/10 bg-[#060E1A] text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">

            <div>
              <Link href="/" className="flex items-center gap-3">
                <Image src="/seal.png" alt="Civics Studio seal" width={40} height={40} />
                <div>
                  <span className="serif block text-xl font-bold text-white">Civics Studio</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30">Est. 2024</span>
                </div>
              </Link>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/35">
                Free games, data projects, and civic learning resources for
                students and educators in Canada and beyond.
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/20">
                For independent representation in Canada.
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A94B]">
                Projects
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm">
                <Link href="/projects/parliament-tracker" className="text-white/45 transition hover:text-white">
                  Parliament Tracker
                </Link>
                <Link href="/projects/media-bias-tracker" className="text-white/45 transition hover:text-white">
                  Media Bias Detector
                </Link>
                <Link href="/projects/detente" className="text-white/45 transition hover:text-white">
                  Détente
                </Link>
                <Link href="/projects/fried-rice-index" className="text-white/45 transition hover:text-white">
                  The Fried Rice Index
                </Link>
                <Link href="/projects/cyffl" className="text-white/45 transition hover:text-white">
                  CYFFL
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9A94B]">
                Site
              </p>
              <div className="mt-5 flex flex-col gap-3 text-sm">
                <Link href="/mission" className="text-white/45 transition hover:text-white">Mission</Link>
                <Link href="/resources" className="text-white/45 transition hover:text-white">Resources</Link>
                <Link href="/about" className="text-white/45 transition hover:text-white">About</Link>
                <Link href="/contact" className="text-white/45 transition hover:text-white">Contact</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 px-6 py-5">
            <p className="mx-auto max-w-7xl text-[10px] uppercase tracking-[0.2em] text-white/15">
              © {new Date().getFullYear()} Civics Studio · All rights reserved
            </p>
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
      </body>
    </html>
  );
}
