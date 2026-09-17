import { getSessionVoteCatalog, type CatalogVote } from "@/lib/openparliament";

// Rebuild the CSV at most once an hour; the underlying openparliament fetch is
// itself cached a day, so this is cheap either way. `date` is openparliament's
// bare calendar string (YYYY-MM-DD), so we pass it through verbatim instead of
// through `new Date()`, which would shift it a day (parses as UTC midnight).
export const revalidate = 3600;

const SESSION = "45-1";

const COLUMNS = [
  "session",
  "vote_number",
  "date",
  "description",
  "result",
  "yea",
  "nay",
  "paired",
  "bill",
] as const;

/** RFC-4180 field escaping: quote, and double any embedded quotes, when needed. */
function csvField(value: string | number | null): string {
  const s = value == null ? "" : String(value);
  return /[",\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function toRow(v: CatalogVote): string {
  return [
    v.session,
    v.number,
    v.date,
    v.description,
    v.result,
    v.yeaTotal,
    v.nayTotal,
    v.pairedTotal,
    v.billUrl ? `https://openparliament.ca${v.billUrl}` : "",
  ]
    .map(csvField)
    .join(",");
}

export async function GET() {
  const votes = await getSessionVoteCatalog(SESSION);
  // Present oldest-first (ascending vote number) so the file reads chronologically.
  votes.sort((a, b) => a.number - b.number);

  // Leading UTF-8 BOM so Excel opens accented MP/bill names in the right encoding.
  const csv =
    "﻿" +
    [COLUMNS.join(","), ...votes.map(toRow)].join("\r\n") +
    "\r\n";

  const filename = `civics-studio-parliament-votes-${SESSION}.csv`;

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
