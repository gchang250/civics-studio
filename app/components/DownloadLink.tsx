"use client";

import { track } from "@vercel/analytics";

interface Props {
  href: string;
  file: string; // human-readable label, e.g. "Rulebook"
  children: React.ReactNode;
  className?: string;
}

export default function DownloadLink({ href, file, children, className }: Props) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => track("detente_download", { file })}
    >
      {children}
    </a>
  );
}
