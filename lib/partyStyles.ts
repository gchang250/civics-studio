export function partyColor(party: string): { bg: string; text: string } {
  switch (party) {
    case "Liberal":
      return { bg: "#C8102E", text: "#FFFFFF" };
    case "Conservative":
      return { bg: "#1A4480", text: "#FFFFFF" };
    case "NDP":
      return { bg: "#F37021", text: "#FFFFFF" };
    case "Bloc":
      return { bg: "#33B2CC", text: "#0A1628" };
    case "Green":
      return { bg: "#3D9B35", text: "#FFFFFF" };
    default:
      return { bg: "#5E5A54", text: "#FFFFFF" };
  }
}
