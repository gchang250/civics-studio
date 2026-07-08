"use client";

import { useState } from "react";

interface Flag {
  quote: string;
  category: string;
  leaning: "left" | "right" | "neutral";
  explanation: string;
}

interface Technique {
  name: string;
  description: string;
  examples: string[];
}

interface Analysis {
  overallScore: number;
  overallLabel: string;
  confidence: string;
  summary: string;
  flags: Flag[];
  techniques: Technique[];
  caveats: string;
}

const MAX_CHARS = 15000;

const leaningStyles: Record<Flag["leaning"], string> = {
  left: "bg-[#1C3557] text-white",
  right: "bg-[#C8102E] text-white",
  neutral: "bg-[#F3EEE4] text-[#5E5A54]",
};

export default function BiasAnalyzer() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Analysis | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/media-bias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Couldn't reach the analysis service. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const markerPct = result ? Math.min(100, Math.max(0, (result.overallScore + 100) / 2)) : 50;

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={MAX_CHARS}
          rows={12}
          required
          placeholder="Paste a news article, opinion piece, or transcript here…"
          className="block w-full resize-y border border-[#D8D0C3] bg-white px-4 py-3 leading-6 text-[#1C3557] placeholder:text-[#5E5A54]/50 focus:border-[#C9A94B] focus:outline-none"
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[#5E5A54]">
            {text.length.toLocaleString()} / {MAX_CHARS.toLocaleString()} characters
          </p>
          <button
            type="submit"
            disabled={loading || text.trim().length < 40}
            className="bg-[#1C3557] px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#C9A94B] hover:text-[#1C3557] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Analyzing…" : "Analyze text"}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-6 border border-[#C8102E]/30 bg-[#C8102E]/5 p-4 text-sm text-[#C8102E]">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-12 space-y-10">
          {/* Spectrum gauge */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
              Estimated spectrum position
            </p>
            <div className="mt-4 flex items-baseline gap-3">
              <h3 className="serif text-3xl font-bold text-[#1C3557]">{result.overallLabel}</h3>
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
                {result.confidence} confidence
              </span>
            </div>

            <div className="relative mt-6 h-3 w-full rounded-full bg-gradient-to-r from-[#1C3557] via-[#D8D0C3] to-[#C8102E]">
              <div
                className="absolute top-1/2 h-6 w-6 -translate-y-1/2 -translate-x-1/2 rounded-full border-4 border-white bg-[#C9A94B] shadow-md"
                style={{ left: `${markerPct}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-[0.08em] text-[#5E5A54]">
              <span>Far Left</span>
              <span>Lean Left</span>
              <span>Center</span>
              <span>Lean Right</span>
              <span>Far Right</span>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-[#5E5A54]">{result.summary}</p>
          </div>

          {/* Flagged language */}
          {result.flags.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Flagged language
              </p>
              <h3 className="serif mt-2 text-2xl font-bold text-[#1C3557]">
                What stood out in the text
              </h3>
              <div className="mt-5 space-y-4">
                {result.flags.map((flag, i) => (
                  <div key={i} className="border border-[#D8D0C3] bg-[#FAF7F0] p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#1C3557] ring-1 ring-inset ring-[#D8D0C3]">
                        {flag.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] ${leaningStyles[flag.leaning]}`}
                      >
                        {flag.leaning}
                      </span>
                    </div>
                    <p className="mt-3 italic leading-6 text-[#1C3557]">&ldquo;{flag.quote}&rdquo;</p>
                    <p className="mt-2 text-sm leading-6 text-[#5E5A54]">{flag.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Techniques */}
          {result.techniques.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
                Rhetorical techniques
              </p>
              <h3 className="serif mt-2 text-2xl font-bold text-[#1C3557]">
                Patterns across the piece
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {result.techniques.map((t, i) => (
                  <div key={i} className="border-t-4 border-[#C9A94B] bg-white p-5 shadow-sm">
                    <h4 className="font-bold text-[#1C3557]">{t.name}</h4>
                    <p className="mt-2 text-sm leading-6 text-[#5E5A54]">{t.description}</p>
                    {t.examples.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {t.examples.map((ex, j) => (
                          <li key={j} className="text-xs italic leading-5 text-[#5E5A54]">
                            &ldquo;{ex}&rdquo;
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Caveats */}
          <div className="border-l-4 border-[#1C3557] bg-[#F3EEE4] p-5 text-sm leading-6 text-[#5E5A54]">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-[#1C3557]">
              Read this before you cite it
            </p>
            {result.caveats}
          </div>
        </div>
      )}
    </div>
  );
}
