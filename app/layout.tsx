import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Civics Studio",
  description:
    "Civics Studio creates free civic learning tools, games, and data projects for youth.",
};

const navItems = [
  { href: "/", label: "Home" },
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
      <body>
        <header className="bg-[#061a33] text-white">
          <div className="border-b border-white/15">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs">
              <p className="font-semibold uppercase tracking-[0.18em] text-slate-300">
                Youth-led civic education
              </p>
              <p className="hidden text-slate-300 sm:block">
                Non-partisan learning tools for public life
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-5 py-6">
            <Link href="/" className="inline-block">
              <p className="serif text-4xl font-bold tracking-tight md:text-5xl">
                Civics Studio
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Games, data projects, and civic learning resources
              </p>
            </Link>
          </div>

          <nav className="border-t border-white/15 bg-[#0b2d57]">
            <div className="mx-auto flex max-w-7xl flex-wrap px-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-r border-white/15 px-5 py-3 text-sm font-semibold text-white transition first:border-l hover:bg-white hover:text-[#061a33]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t border-slate-300 bg-[#061a33] text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3">
            <div>
              <h2 className="serif text-2xl font-bold">Civics Studio</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Free civic learning tools, games, and data projects for young
                people in Canada and beyond.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
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
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
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
      </body>
    </html>
  );
}