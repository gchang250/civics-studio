"use client";

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
}

interface Props {
  items: NavItem[];
}

export default function MobileNav({ items }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`block h-0.5 w-6 bg-cream transition ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span className={`block h-0.5 w-6 bg-cream transition ${open ? "opacity-0" : ""}`} />
        <span
          className={`block h-0.5 w-6 bg-cream transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 z-40 border-b border-edge bg-ink/95 backdrop-blur-xl px-6 py-6 shadow-lg shadow-black/40">
          <nav className="flex flex-col gap-5">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-[0.2em] text-mist transition hover:text-maple-soft lowercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
