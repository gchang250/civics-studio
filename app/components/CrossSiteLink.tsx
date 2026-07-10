"use client";

import posthog from "posthog-js";

export default function CrossSiteLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const distinctID = posthog.get_distinct_id();
    const sessionID = posthog.get_session_id();
    if (!distinctID || !sessionID) return;

    e.preventDefault();
    const url = new URL(href);
    url.hash = `distinct_id=${distinctID}&session_id=${sessionID}`;
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
