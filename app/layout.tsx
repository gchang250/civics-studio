import type { Metadata } from "next";
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
    "Civics Studio creates free civic learning tools, games, and data projects for youth.",
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
        <header className="border-b border-[#111111] bg-[#FAF7F0]">
          <div className="border-b border-[#D8D0C3]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs">
              <p className="font-bold uppercase tracking-[0.18em] text-[#8A1538]">
                Youth-led civic education
              </p>
              <p className="hidden text-[#5E5A54] sm:block">
                Non-partisan tools for public life
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-5 py-8 text-center">
            <Link href="/" className="inline-block">
              <p className="serif text-4xl font-bold tracking-[-0.025em] text-[#111111] md:text-6xl">
                Civics Studio
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[#5E5A54]">
                Games · Data · Civic Learning
              </p>
            </Link>
          </div>

          <nav className="border-t border-[#111111]">
            <div className="mx-auto flex max-w-7xl flex-wrap justify-center px-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#111111] transition hover:bg-[#111111] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t border-[#111111] bg-[#111111] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <h2 className="serif text-3xl font-bold tracking-tight">
                Civics Studio
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                Free games, data projects, and civic learning resources for
                young people in Canada and beyond.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Projects
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <Link href="/projects/detente" className="hover:underline">
                  Detente
                </Link>
                <Link
                  href="/projects/fried-rice-index"
                  className="hover:underline"
                >
                  The Fried Rice Index
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Contact
              </h3>
              <a
                href="mailto:civicsstudio@gmail.com"
                className="mt-4 inline-block text-sm hover:underline"
              >
                civicsstudio@gmail.com
              </a>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Civics Studio is non-partisan and does not promote any political
                party or ideology.
              </p>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}