import type { NextRequest } from "next/server";

const MODEL = "gemini-2.5-flash";
const MAX_CHARS = 15000;
const MIN_CHARS = 40;

const SYSTEM_PROMPT = `You are a non-partisan media literacy analyst for Civics Studio, a Canadian civic education project. Analyze the article or transcript a user pastes in. Look for:
- Loaded or emotionally charged language
- Framing choices (what's emphasized, what's omitted)
- Insinuation and implication beyond the literal text
- False balance or false equivalence
- Appeals to fear, outrage, or tribal identity
- Ad hominem attacks
- Dog whistles or coded language

Estimate where the piece sits on a left-right political spectrum, from -100 (far left) to 100 (far right), with 0 being neutral/center. Be even-handed: don't assume any outlet, topic, or speaker is inherently biased — judge only the text given. Quote exact phrases from the text as evidence for every flag, and be specific and concrete rather than generic. If the text is too short or isn't political/persuasive in nature, say so honestly in the caveats and keep flags minimal.`;

const RESPONSE_SCHEMA = {
  type: "OBJECT",
  properties: {
    overallScore: { type: "NUMBER" },
    overallLabel: {
      type: "STRING",
      enum: ["Far Left", "Lean Left", "Center", "Lean Right", "Far Right"],
    },
    confidence: { type: "STRING", enum: ["low", "medium", "high"] },
    summary: { type: "STRING" },
    flags: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          quote: { type: "STRING" },
          category: { type: "STRING" },
          leaning: { type: "STRING", enum: ["left", "right", "neutral"] },
          explanation: { type: "STRING" },
        },
        required: ["quote", "category", "leaning", "explanation"],
      },
    },
    techniques: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          name: { type: "STRING" },
          description: { type: "STRING" },
          examples: { type: "ARRAY", items: { type: "STRING" } },
        },
        required: ["name", "description", "examples"],
      },
    },
    caveats: { type: "STRING" },
  },
  required: ["overallScore", "overallLabel", "confidence", "summary", "flags", "techniques", "caveats"],
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error:
          "Media Bias Tracker isn't configured yet — add a GEMINI_API_KEY environment variable to enable it.",
      },
      { status: 503 }
    );
  }

  let body: { text?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const text = body.text?.trim() ?? "";
  if (text.length < MIN_CHARS) {
    return Response.json(
      { error: "Please paste at least a few sentences of text to analyze." },
      { status: 400 }
    );
  }
  if (text.length > MAX_CHARS) {
    return Response.json(
      { error: `Text is too long — please paste under ${MAX_CHARS.toLocaleString()} characters.` },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: "user", parts: [{ text }] }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: RESPONSE_SCHEMA,
          },
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error("Gemini API error:", res.status, errText);
      return Response.json(
        { error: "The analysis service is temporarily unavailable. Please try again shortly." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const raw: string | undefined = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) {
      return Response.json(
        { error: "The analysis didn't return a result. Please try again." },
        { status: 502 }
      );
    }

    const analysis = JSON.parse(raw);
    return Response.json(analysis);
  } catch (err) {
    console.error("Media bias analysis failed:", err);
    return Response.json(
      { error: "Something went wrong analyzing this text. Please try again." },
      { status: 500 }
    );
  }
}
