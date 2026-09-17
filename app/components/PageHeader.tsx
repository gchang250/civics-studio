/**
 * Every inner page opens on the same espresso block, continuous with the
 * masthead above it. That is what removes the need for a rule under the
 * header. The ground colour carries it.
 *
 * There is no eyebrow-label slot on purpose. The small letterspaced
 * uppercase tag above a headline is the pattern this redesign removed.
 */
export default function PageHeader({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: string;
  /** Actions. Use `.cta .cta-invert`, never a filled button here. */
  children?: React.ReactNode;
}) {
  return (
    <header className="bg-ink-2 text-paper">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-20 md:pt-14">
        <div className="max-w-4xl">
          <h1 className="display-sm">{title}</h1>
          {lede && <p className="lede mt-6 text-muted-ink">{lede}</p>}
          {children && (
            <div className="mt-9 flex flex-wrap items-baseline gap-x-10 gap-y-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
