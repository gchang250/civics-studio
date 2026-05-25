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
    <section className="border-t border-[#D8D0C3] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12">

        {/* Header */}
        <div className="mb-8 border-b-2 border-[#C9A94B] pb-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A94B]">
            Discussion
          </p>
          <h2 className="serif mt-2 text-3xl font-bold tracking-[-0.02em] text-[#1C3557]">
            Feedback
          </h2>
        </div>

        {/* Comment list */}
        <div className="mb-10">
          {loading ? (
            <p className="text-sm text-[#5E5A54]">Loading…</p>
          ) : comments.length === 0 ? (
            <p className="text-sm text-[#5E5A54]">
              No feedback yet. Be the first to leave a comment.
            </p>
          ) : (
            <div className="divide-y divide-[#D8D0C3]">
              {comments.map((c) => (
                <div key={c.id} className="py-6">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <p className="font-bold text-[#1C3557]">{c.author}</p>
                    <p className="text-xs text-[#5E5A54]">
                      {new Date(c.created_at).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <p className="mt-2 leading-7 text-[#5E5A54]">{c.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit form */}
        <div className="border-t-2 border-[#C9A94B] pt-8">
          <h3 className="serif text-2xl font-bold text-[#1C3557]">
            Leave feedback
          </h3>

          {submitted && (
            <p className="mt-4 text-sm font-bold text-[#C9A94B]">
              Thanks for your feedback!
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid max-w-xl gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.12em] text-[#5E5A54]">
                Name
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                maxLength={80}
                placeholder="Your name"
                className="mt-1 block w-full border border-[#D8D0C3] bg-[#FAF7F0] px-4 py-2 text-[#1C3557] placeholder:text-[#5E5A54]/50 focus:border-[#C9A94B] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-[0.12em] text-[#5E5A54]">
                Comment
              </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                maxLength={1000}
                rows={4}
                placeholder="Share your thoughts on this project…"
                className="mt-1 block w-full resize-none border border-[#D8D0C3] bg-[#FAF7F0] px-4 py-2 text-[#1C3557] placeholder:text-[#5E5A54]/50 focus:border-[#C9A94B] focus:outline-none"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="justify-self-start bg-[#1C3557] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#C9A94B] hover:text-[#1C3557] disabled:opacity-50"
            >
              {submitting ? "Posting…" : "Post comment"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
