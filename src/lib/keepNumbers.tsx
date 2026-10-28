import type { ReactNode } from "react";

/**
 * Keep digit groups on one line (Steeve rule).
 * Matches:
 * - French/Creole thousand groups: "1 000", "3 209", "100 000"
 *   (regular space, NBSP, narrow NBSP, thin/figure space between triplets)
 * - Unspaced runs of 4+ digits: "17000", "300000" (overflow-wrap can split these)
 * Does not touch SVG paths, CSS, or other non-prose strings.
 */
const SPACE_SEP = "[\u00A0\u202F\u2007\u2009 ]";
const DIGIT_GROUP = new RegExp(
  `\\d{1,3}(?:${SPACE_SEP}\\d{3})+(?:[.,]\\d+)?|\\d{4,}(?:[.,]\\d+)?`,
  "g",
);

/** Spaces that may separate thousand groups. */
const SEP_RE = /[\u00A0\u202F\u2007\u2009 ]/g;

/** Normalize thousand separators inside a matched group to NBSP. */
export function nbspDigitGroups(text: string): string {
  return text.replace(DIGIT_GROUP, (m) => m.replace(SEP_RE, "\u00A0"));
}

/**
 * Render prose with each number in a nowrap span.
 * NBSP alone is not enough on some mobile WebViews; white-space:nowrap +
 * display:inline-block defeats parent overflow-wrap:break-word.
 */
export function KeepNumbers({ text }: { text: string }): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  // Fresh regex so lastIndex from other callers cannot skip matches.
  const re = new RegExp(DIGIT_GROUP.source, "g");
  for (const match of text.matchAll(re)) {
    const start = match.index ?? 0;
    if (start > last) {
      nodes.push(text.slice(last, start));
    }
    const normalized = match[0].replace(SEP_RE, "\u00A0");
    nodes.push(
      <span key={`n${key++}`} className="nowrap-num">
        {normalized}
      </span>,
    );
    last = start + match[0].length;
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  if (nodes.length === 0) return text;
  return nodes.length === 1 ? nodes[0] : <>{nodes}</>;
}
