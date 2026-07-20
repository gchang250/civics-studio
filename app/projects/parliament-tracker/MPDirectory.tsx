"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getMPImageUrl, type MPListing } from "@/lib/openparliament";
import { partyColor } from "@/lib/partyStyles";

interface Props {
  mps: MPListing[];
  profiledSlugs: string[];
}

export default function MPDirectory({ mps, profiledSlugs }: Props) {
  const [query, setQuery] = useState("");
  const [party, setParty] = useState("All");
  const [province, setProvince] = useState("All");

  const parties = useMemo(
    () => ["All", ...Array.from(new Set(mps.map((m) => m.party))).sort()],
    [mps]
  );
  const provinces = useMemo(
    () => ["All", ...Array.from(new Set(mps.map((m) => m.province))).sort()],
    [mps]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mps.filter((m) => {
      if (party !== "All" && m.party !== party) return false;
      if (province !== "All" && m.province !== province) return false;
      if (q && !(m.name.toLowerCase().includes(q) || m.riding.toLowerCase().includes(q))) {
        return false;
      }
      return true;
    });
  }, [mps, query, party, province]);

  const profiledSet = new Set(profiledSlugs);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or riding…"
          className="border border-edge bg-panel px-4 py-2.5 text-cream placeholder:text-mist-dim focus:border-maple focus:outline-none"
        />
        <select
          value={party}
          onChange={(e) => setParty(e.target.value)}
          className="border border-edge bg-panel px-4 py-2.5 text-cream focus:border-maple focus:outline-none"
        >
          {parties.map((p) => (
            <option key={p} value={p}>
              {p === "All" ? "All parties" : p}
            </option>
          ))}
        </select>
        <select
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="border border-edge bg-panel px-4 py-2.5 text-cream focus:border-maple focus:outline-none"
        >
          {provinces.map((p) => (
            <option key={p} value={p}>
              {p === "All" ? "All provinces" : p}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.1em] text-maple lowercase">
        {filtered.length} of {mps.length} MPs
      </p>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((mp) => {
          const colors = partyColor(mp.party);
          const hasFullProfile = profiledSet.has(mp.slug);
          return (
            <Link
              key={mp.slug}
              href={`/projects/parliament-tracker/mps/${mp.slug}`}
              className="card-hover group flex gap-4 border border-edge bg-panel p-4"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-ink-2 ring-1 ring-edge">
                {mp.image ? (
                  <Image
                    src={getMPImageUrl(mp.image)}
                    alt={mp.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-lg font-bold text-mist/40">
                    {mp.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-cream group-hover:text-maple-soft">
                  {mp.name}
                </p>
                <p className="mt-0.5 truncate text-sm text-mist">
                  {mp.riding}, {mp.province}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <span
                    className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em]"
                    style={{ backgroundColor: colors.bg, color: colors.text }}
                  >
                    {mp.party}
                  </span>
                  {hasFullProfile && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-maple ring-1 ring-inset ring-maple/40">
                      Full profile
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-mist lowercase">
          No MPs match those filters.
        </p>
      )}
    </div>
  );
}
