"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    disqus_config?: () => any;
  }
}

interface Props {
  identifier: string;
  title: string;
}

export default function DisqusComments({ identifier, title }: Props) {
  const shortname = process.env.NEXT_PUBLIC_DISQUS_SHORTNAME;

  useEffect(() => {
    if (!shortname) return;

    window.disqus_config = function () {
      // @ts-expect-error Disqus uses non-standard `this`
      this.page.url = window.location.href;
      // @ts-expect-error Disqus uses non-standard `this`
      this.page.identifier = identifier;
      // @ts-expect-error Disqus uses non-standard `this`
      this.page.title = title;
    };

    const script = document.createElement("script");
    script.src = `https://${shortname}.disqus.com/embed.js`;
    script.setAttribute("data-timestamp", String(+new Date()));
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      delete window.disqus_config;
    };
  }, [shortname, identifier, title]);

  if (!shortname) return null;

  return (
    <section className="bg-ink-2 border-t border-edge">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8 border-b border-edge pb-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-maple lowercase">
            Discussion
          </p>
          <h2 className="serif mt-2 text-3xl font-normal italic tracking-[-0.01em] text-cream lowercase">
            Feedback
          </h2>
        </div>

        <div id="disqus_thread" />
        <noscript>
          <p className="text-sm text-mist">
            Enable JavaScript to view comments powered by{" "}
            <a href="https://disqus.com" className="underline">
              Disqus
            </a>
            .
          </p>
        </noscript>
      </div>
    </section>
  );
}
