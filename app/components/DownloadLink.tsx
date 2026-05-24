"use client";

interface Props {
  href: string;
  file: string; // human-readable label, e.g. "Rulebook"
  children: React.ReactNode;
  className?: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function DownloadLink({ href, file, children, className }: Props) {
  function handleClick() {
    window.gtag?.("event", "file_download", {
      file_name: file,
      link_url: href,
    });
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
