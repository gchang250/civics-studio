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
  const [fullOnly, setFullOnly] = useState(false);

  const profiledSet = useMemo(() => new Set(profiledSlugs), [profiledSlugs]);

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
      if (fullOnly && !profiledSet.has(m.slug)) return false;
      if (q && !(m.name.toLowerCase().includes(q) || m.riding.toLowerCase().includes(q))) {
        return false;
      }
      return true;
    });
  }, [mps, query, party, province, fullOnly, profiledSet]);

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or riding…"
          aria-label="Search members of Parliament by name or riding"
          className="field"
        />
        <select
          value={party}
          onChange={(e) => setParty(e.target.value)}
          aria-label="Filter by party"
          className="field"
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
          aria-label="Filter by province"
          className="field"
        >
          {provinces.map((p) => (
            <option key={p} value={p}>
              {p === "All" ? "All provinces" : p}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="small num text-muted">
          Showing {filtered.length} of {mps.length} members
        </p>
        <label className="small flex cursor-pointer items-center gap-2 select-none">
          <input
            type="checkbox"
            checked={fullOnly}
            onChange={(e) => setFullOnly(e.target.checked)}
            className="h-4 w-4 accent-red"
          />
          Full profiles only
        </label>
      </div>

      {/* A roster of 338 rows is a table of data, so rows do get a faint
          separator. That one is functional, unlike the decorative section
          rules the rest of the site avoids. */}
      <ul className="mt-6">
        {filtered.map((mp) => (
          <li
            key={mp.slug}
            style={{ boxShadow: "inset 0 -1px 0 rgba(35,32,28,0.12)" }}
          >
            <Link
              href={`/projects/parliament-tracker/mps/${mp.slug}`}
              className="group flex items-center gap-4 py-3.5"
            >
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-paper-2">
                {mp.image ? (
                  <Image
                    src={getMPImageUrl(mp.image)}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                ) : (
                  <div className="small flex h-full w-full items-center justify-center text-muted">
                    {mp.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-medium transition-colors group-hover:text-red">
                  {mp.name}
                </p>
                <p className="small mt-0.5 truncate text-muted">
                  {mp.riding}, {mp.province}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                {profiledSet.has(mp.slug) && (
                  <span className="small hidden text-red sm:inline">
                    Full profile
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: partyColor(mp.party) }}
                    aria-hidden
                  />
                  <span className="small w-[6.5rem] text-muted">
                    {mp.party}
                  </span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="copy py-10">No members match those filters.</p>
      )}
    </div>
  );
}
