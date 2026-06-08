import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
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
};

const navItems = [
  { href: "/mission", label: "Mission" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
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

        {/* ── Navbar ──────────────────────────────────────── */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A1628]/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/seal.png"
                alt="Civics Studio seal"
                width={32}
                height={32}
                className="drop-shadow-sm"
                priority
              />
              <span className="serif text-xl font-bold tracking-tight text-white">
                Civics Studio
              </span>
            </Link>

            {/* Nav links */}
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white/60 transition hover:text-[#C9A94B]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="/projects/detente"
              className="hidden border border-[#C9A94B]/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#C9A94B] transition hover:bg-[#C9A94B] hover:text-[#0A1628] sm:block"
            >
              Download Detente
            </Link>
          </div>
        </header>

        <main>{children}</main>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="border-t border-white/10 bg-[#0A1628] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr]">

            <div>
              <Link href="/" className="flex items-center gap-3">
                <Image src="/seal.png" alt="Civics Studio seal" width={36} height={36} />
                <span className="serif text-2xl font-bold text-white">Civics Studio</span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
                Free games, data projects, and civic learning resources for
                students and educators in Canada and beyond.
              </p>
              <p className="mt-6 text-xs text-white/25">
                Non-partisan. No party, no ideology.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A94B]">
                Projects
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <Link href="/projects/detente" className="text-white/50 hover:text-white transition">
                  Detente
                </Link>
                <Link href="/projects/fried-rice-index" className="text-white/50 hover:text-white transition">
                  The Fried Rice Index
                </Link>
                <Link href="/projects/cyffl" className="text-white/50 hover:text-white transition">
                  CYFFL
                </Link>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9A94B]">
                Contact
              </p>
              <a
                href="mailto:civicsstudio@gmail.com"
                className="mt-4 inline-block text-sm text-white/50 hover:text-white transition"
              >
                civicsstudio@gmail.com
              </a>
              <div className="mt-6 flex flex-col gap-2 text-sm">
                <Link href="/articles" className="text-white/50 hover:text-white transition">Articles</Link>
                <Link href="/resources" className="text-white/50 hover:text-white transition">Resources</Link>
                <Link href="/about" className="text-white/50 hover:text-white transition">About</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 px-5 py-5">
            <p className="mx-auto max-w-7xl text-xs text-white/20">
              © {new Date().getFullYear()} Civics Studio
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
