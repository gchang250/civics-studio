/**
 * Single source of truth for the project list. The home page and /projects
 * both render it; they used to carry separate copies that had already drifted
 * apart in wording and in which Unsplash photo they pointed at.
 */
export interface Project {
  title: string;
  /** Spelled-out name, where the short title is an acronym. */
  fullName?: string;
  kind: string;
  summary: string;
  href: string;
  /** True when the link leaves this site. */
  external?: boolean;
}

export const projects: Project[] = [
  {
    title: "Parliament Tracker",
    kind: "Data",
    summary:
      "Every recorded vote of the current session for every sitting MP, pulled from Parliament's open data. It flags the ballots that went against the party's own position.",
    href: "/projects/parliament-tracker",
  },
  {
    title: "Media Bias Detector",
    kind: "Analysis",
    summary:
      "Paste in an article or transcript and get a non-partisan read on how it's framed and where it sits on the political spectrum.",
    href: "/projects/media-bias-tracker",
  },
  {
    title: "The CanPol Index",
    kind: "Data",
    summary:
      "A cost-of-living index mapped across Canada's federal electoral districts, riding by riding.",
    href: "/projects/fried-rice-index",
  },
  {
    title: "CYFFL",
    fullName: "Canadian Youth Foundation for French Literacy",
    kind: "Program",
    summary:
      "Free French tutoring and learning resources, run by students, for a country short roughly 10,000 qualified French teachers.",
    href: "/projects/cyffl",
  },
];
