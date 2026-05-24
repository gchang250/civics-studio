import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

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
  { href: "/", label: "Home" },
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
        <header>
          {/* Top info bar — navy */}
          <div className="bg-[#1C3557]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs">
              <p className="font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Youth-led civic education
              </p>
              <p className="hidden text-white/50 sm:block">
                Non-partisan civic education
              </p>
            </div>
          </div>

          {/* Brand masthead — warm cream, seal + wordmark side-by-side */}
          <div className="border-b-2 border-[#C9A94B] bg-[#FAF7F0]">
            <div className="mx-auto flex max-w-7xl items-center justify-center gap-5 px-5 py-7 md:gap-8">
              {/* Seal — hidden on small screens */}
              <div className="hidden shrink-0 md:block">
                <Image
                  src="/seal.png"
                  alt="Civics Studio seal"
                  width={72}
                  height={72}
                  className="drop-shadow-sm"
                  priority
                />
              </div>

              {/* Gold vertical divider */}
              <div className="hidden h-14 w-px bg-[#C9A94B] md:block" />

              {/* Wordmark */}
              <Link href="/" className="inline-block text-center">
                <p className="serif text-4xl font-bold tracking-[-0.025em] text-[#1C3557] md:text-[3.5rem]">
                  Civics Studio
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#C9A94B]">
                  Games · Data · Civic Learning
                </p>
              </Link>
            </div>
          </div>

          {/* Navigation — navy */}
          <nav className="bg-[#1C3557]">
            <div className="mx-auto flex max-w-7xl flex-wrap justify-center px-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white/75 transition hover:text-[#C9A94B]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t-2 border-[#C9A94B] bg-[#1C3557] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
            <div className="border-l-2 border-[#C9A94B] pl-6">
              <h2 className="serif text-3xl font-bold tracking-tight">
                Civics Studio
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
                Free games, data projects, and civic learning resources for
                students and educators in Canada and beyond.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Projects
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link href="/projects/detente" className="text-white/80 hover:text-[#C9A94B] transition">
                  Detente
                </Link>
                <Link href="/projects/fried-rice-index" className="text-white/80 hover:text-[#C9A94B] transition">
                  The Fried Rice Index
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Contact
              </h3>
              <a
                href="mailto:civicsstudio@gmail.com"
                className="mt-4 inline-block text-sm text-white/80 hover:text-[#C9A94B] transition"
              >
                civicsstudio@gmail.com
              </a>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Civics Studio is non-partisan and does not promote any political
                party or ideology. All resources are free.
              </p>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
