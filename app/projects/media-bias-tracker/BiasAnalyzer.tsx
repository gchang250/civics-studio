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
  left: "bg-[#111f36] text-white",
  right: "bg-[#8b1e1e] text-white",
  neutral: "bg-[#f3efe6] text-[#5f697a]",
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
          className="block w-full resize-y border border-[#e5e0d4] bg-[#faf8f5] px-4 py-3 leading-6 text-[#111f36] placeholder:text-[#5f697a]/50 focus:border-[#8b1e1e] focus:outline-none"
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[#5f697a]">
            {text.length.toLocaleString()} / {MAX_CHARS.toLocaleString()} characters
          </p>
          <button
            type="submit"
            disabled={loading || text.trim().length < 40}
            className="border border-[#111f36] px-7 py-3 text-sm font-medium uppercase tracking-[0.08em] text-[#111f36] bg-transparent transition hover:bg-[#8b1e1e] hover:text-white hover:border-[#8b1e1e] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Analyzing…" : "Analyze text"}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-6 border border-[#8b1e1e]/30 bg-[#8b1e1e]/5 p-4 text-sm text-[#8b1e1e]">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-12 space-y-10">
          {/* Spectrum gauge */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
              Estimated spectrum position
            </p>
            <div className="mt-4 flex items-baseline gap-3">
              <h3 className="serif text-3xl font-normal italic text-[#111f36] lowercase">{result.overallLabel}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5f697a]">
                {result.confidence} confidence
              </span>
            </div>

            <div className="relative mt-6 h-2 w-full rounded-full bg-gradient-to-r from-[#111f36] via-[#e5e0d4] to-[#8b1e1e]">
              <div
                className="absolute top-1/2 h-5 w-5 -translate-y-1/2 -translate-x-1/2 rounded-full border-4 border-white bg-[#8b1e1e] shadow-sm"
                style={{ left: `${markerPct}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-[#5f697a] lowercase">
              <span>Far Left</span>
              <span>Lean Left</span>
              <span>Center</span>
              <span>Lean Right</span>
              <span>Far Right</span>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-[#5f697a]">{result.summary}</p>
          </div>

          {/* Flagged language */}
          {result.flags.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
                Flagged language
              </p>
              <h3 className="serif mt-2 text-2xl font-normal italic text-[#111f36] lowercase">
                What stood out in the text
              </h3>
              <div className="mt-5 space-y-4">
                {result.flags.map((flag, i) => (
                  <div key={i} className="border border-[#e5e0d4] bg-[#f3efe6] p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#111f36] ring-1 ring-inset ring-[#e5e0d4]">
                        {flag.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${leaningStyles[flag.leaning]}`}
                      >
                        {flag.leaning}
                      </span>
                    </div>
                    <p className="mt-3 italic leading-6 text-[#111f36]">&ldquo;{flag.quote}&rdquo;</p>
                    <p className="mt-2 text-sm leading-6 text-[#5f697a]">{flag.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Techniques */}
          {result.techniques.length > 0 && (
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1e1e] lowercase">
                Rhetorical techniques
              </p>
              <h3 className="serif mt-2 text-2xl font-normal italic text-[#111f36] lowercase">
                Patterns across the piece
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {result.techniques.map((t, i) => (
                  <div key={i} className="border border-[#e5e0d4] bg-[#f3efe6] p-5">
                    <h4 className="font-semibold text-[#111f36] lowercase">{t.name}</h4>
                    <p className="mt-2 text-sm leading-6 text-[#5f697a]">{t.description}</p>
                    {t.examples.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {t.examples.map((ex, j) => (
                          <li key={j} className="text-xs italic leading-5 text-[#5f697a]">
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
          <div className="border-l-4 border-[#111f36] bg-[#f3efe6] p-5 text-sm leading-6 text-[#5f697a]">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#111f36] lowercase">
              Read this before you cite it
            </p>
            {result.caveats}
          </div>
        </div>
      )}
    </div>
  );
}
