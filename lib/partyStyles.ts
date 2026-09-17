/**
 * Party identity as a single hue, rendered as a small dot beside the party
 * name, never as a filled pill.
 *
 * Six saturated pill backgrounds sitting next to the site's one accent colour
 * was the loudest thing on the tracker, and it read as decoration rather than
 * data. A 6px dot carries the same information (these are the conventional
 * Canadian party colours, so readers decode them instantly) at a fraction of
 * the visual weight, and the party name is always spelled out next to it so
 * the colour is never the only cue.
 */
export function partyColor(party: string): string {
  switch (party) {
    case "Liberal":
      return "#d6455a";
    case "Conservative":
      return "#4a86e8";
    case "NDP":
      return "#e8913f";
    case "Bloc":
      return "#57b8cf";
    case "Green":
      return "#5aa64f";
    default:
      return "#7c869b";
  }
}
