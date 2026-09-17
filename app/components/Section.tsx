/**
 * A content section. Sections are told apart by their ground colour and by
 * generous vertical space, never by a rule. Alternate `tone` down a page to
 * get a rhythm; there is no divider prop because there are no dividers.
 */
export default function Section({
  title,
  tone = "paper",
  children,
}: {
  title?: string;
  tone?: "paper" | "paper-2" | "ink";
  children: React.ReactNode;
}) {
  const ground =
    tone === "ink"
      ? "bg-ink-2 text-paper"
      : tone === "paper-2"
      ? "bg-paper-2"
      : "bg-paper";

  return (
    <section className={ground}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {title && <h2 className="h2 mb-7 max-w-2xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
