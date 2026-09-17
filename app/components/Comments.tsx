"use client";

import { useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase";

interface Comment {
  id: string;
  author: string;
  body: string;
  created_at: string;
}

interface Props {
  pageId: string;
}

export default function Comments({ pageId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchComments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageId]);

  async function fetchComments() {
    const db = getSupabase();
    if (!db) { setLoading(false); return; }
    const { data } = await db
      .from("comments")
      .select("id, author, body, created_at")
      .eq("page_id", pageId)
      .order("created_at", { ascending: false });
    setComments(data ?? []);
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const db = getSupabase();
    if (!db) { setError("Comments unavailable."); setSubmitting(false); return; }

    const { error: insertError } = await db
      .from("comments")
      .insert({ page_id: pageId, author: author.trim(), body: body.trim() });

    if (insertError) {
      setError("Something went wrong. Please try again.");
    } else {
      setAuthor("");
      setBody("");
      setSubmitted(true);
      await fetchComments();
    }
    setSubmitting(false);
  }

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="h2">Feedback</h2>

        {/* 58/42. The thread and the form sit side by side, so the form is
            not stacked under a full-width list. */}
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            {loading ? (
              <p className="copy text-[1rem]">Loading…</p>
            ) : comments.length === 0 ? (
              <p className="copy text-[1rem]">
                No feedback yet. Be the first to leave a comment.
              </p>
            ) : (
              <ul>
                {comments.map((c) => (
                  <li
                    key={c.id}
                    className="py-5 first:pt-0"
                    style={{ boxShadow: "inset 0 -1px 0 rgba(35,32,28,0.12)" }}
                  >
                    <p className="small text-muted">
                      <span className="font-semibold text-ink">{c.author}</span>
                      {" · "}
                      {new Date(c.created_at).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="copy mt-1.5 text-[1rem]">{c.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 lg:pt-1">
            <h3 className="h3">Leave feedback</h3>

            <div>
              <label htmlFor={`${pageId}-author`} className="small font-semibold">
                Name
              </label>
              <input
                id={`${pageId}-author`}
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                maxLength={80}
                className="field mt-1.5"
              />
            </div>

            <div>
              <label htmlFor={`${pageId}-body`} className="small font-semibold">
                Comment
              </label>
              <textarea
                id={`${pageId}-body`}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                maxLength={1000}
                rows={5}
                className="field mt-1.5 resize-none"
              />
            </div>

            {submitted && (
              <p className="small font-semibold text-red">
                Thanks for your feedback.
              </p>
            )}
            {error && <p className="small text-red">{error}</p>}

            <button type="submit" disabled={submitting} className="btn justify-self-start">
              {submitting ? "Posting…" : "Post comment"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
