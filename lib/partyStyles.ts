// Party colours tuned for the dark UI: vivid, recognizable, and legible as
// solid pills on the near-black panel surfaces. Each returns a background plus
// a text colour with sufficient contrast against that background.
export function partyColor(party: string): { bg: string; text: string } {
  switch (party) {
    case "Liberal":
      return { bg: "#e5384f", text: "#ffffff" };
    case "Conservative":
      return { bg: "#2f74e8", text: "#ffffff" };
    case "NDP":
      return { bg: "#f5852a", text: "#1a0f00" };
    case "Bloc":
      return { bg: "#3fbdd6", text: "#06222b" };
    case "Green":
      return { bg: "#4bb03f", text: "#06210a" };
    default:
      return { bg: "#7c869b", text: "#0a0d16" };
  }
}
