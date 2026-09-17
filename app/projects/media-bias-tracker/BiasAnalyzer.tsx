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

const SPECTRUM_LABELS = ["Far left", "Lean left", "Centre", "Lean right", "Far right"];

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

  const markerPct = result
    ? Math.min(100, Math.max(0, (result.overallScore + 100) / 2))
    : 50;

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <label htmlFor="bias-text" className="small font-semibold">
          Paste the text to analyze
        </label>
        <textarea
          id="bias-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={MAX_CHARS}
          rows={12}
          required
          placeholder="Paste a news article, opinion piece, or transcript here…"
          className="field resize-y leading-relaxed"
        />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="small num text-muted">
            {text.length.toLocaleString()} / {MAX_CHARS.toLocaleString()}{" "}
            characters
          </p>
          <button
            type="submit"
            disabled={loading || text.trim().length < 40}
            className="btn"
          >
            {loading ? "Analyzing…" : "Analyze text"}
          </button>
        </div>
      </form>

      {error && (
        <p className="mt-6 border-l-[3px] border-red pl-4 text-[1rem] text-red">
          {error}
        </p>
      )}

      {result && (
        <div className="mt-14 space-y-12">
          {/* Spectrum estimate. One flat track with one marker. The reading
              is spelled out in words above it, so position is never the only
              cue and there is no left/right colour coding to misread. */}
          <div>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="h2">{result.overallLabel}</h3>
              <span className="small text-muted">
                {result.confidence} confidence
              </span>
            </div>

            <div className="mt-7 max-w-2xl">
              <div
                className="relative h-[3px]"
                style={{ background: "rgba(35,32,28,0.15)" }}
              >
                {/* The marker is 14px wide, so travel its centre from 7px to
                    (100% - 7px); a raw percentage would hang half of it past
                    each end of the track. */}
                <div
                  className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red"
                  style={{ left: `calc(7px + (100% - 14px) * ${markerPct / 100})` }}
                />
              </div>
              <div className="small mt-3 flex justify-between text-muted">
                {SPECTRUM_LABELS.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>

            <p className="copy mt-7">{result.summary}</p>
          </div>

          {result.flags.length > 0 && (
            <div>
              <h3 className="h2">What stood out in the text</h3>
              <ul className="mt-6 space-y-7">
                {result.flags.map((flag, i) => (
                  <li key={i}>
                    <p className="small text-muted">
                      {flag.category} · reads as {flag.leaning}
                    </p>
                    <blockquote className="mt-2 border-l-[3px] border-red pl-4 text-[1.0625rem] leading-relaxed">
                      {flag.quote}
                    </blockquote>
                    <p className="copy mt-2.5 text-[1rem]">
                      {flag.explanation}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {result.techniques.length > 0 && (
            <div>
              <h3 className="h2">Patterns across the piece</h3>
              <dl className="mt-6 space-y-7">
                {result.techniques.map((t, i) => (
                  <div key={i} className="grid gap-x-10 gap-y-2 md:grid-cols-[13rem_1fr]">
                    <dt className="h3">{t.name}</dt>
                    <dd>
                      <p className="copy text-[1rem]">{t.description}</p>
                      {t.examples.length > 0 && (
                        <ul className="mt-2.5 space-y-1.5">
                          {t.examples.map((ex, j) => (
                            <li
                              key={j}
                              className="small border-l-[3px] border-red/40 pl-3 text-muted"
                            >
                              {ex}
                            </li>
                          ))}
                        </ul>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div>
            <h3 className="h3">Read this before you cite it</h3>
            <p className="copy mt-2 text-[1rem]">{result.caveats}</p>
          </div>
        </div>
      )}
    </div>
  );
}
