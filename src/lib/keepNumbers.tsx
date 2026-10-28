import type { ReactNode } from "react";

/**
 * Keep digit groups on one line (Steeve rule).
 * Matches French/Creole thousand groups like "1 000", "3 209", "100 000"
 * (regular space, NBSP, or narrow NBSP between triplets).
 * Does not touch SVG paths, CSS, or other non-prose strings.
 */
const DIGIT_GROUP =
  /\d{1,3}(?:[\u00A0\u202F ]\d{3})+(?:[.,]\d+)?/g;

/** Normalize thousand separators inside a matched group to NBSP. */
export function nbspDigitGroups(text: string): string {
  return text.replace(DIGIT_GROUP, (m) =>
    m.replace(/[\u00A0\u202F ]/g, "\u00A0"),
  );
}

/**
 * Render prose with each thousand-grouped number in a nowrap span.
 * NBSP alone is not enough on some mobile WebViews; white-space:nowrap is.
 */
export function KeepNumbers({ text }: { text: string }): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(DIGIT_GROUP)) {
    const start = match.index ?? 0;
    if (start > last) {
      nodes.push(text.slice(last, start));
    }
    const normalized = match[0].replace(/[\u00A0\u202F ]/g, "\u00A0");
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
  return nodes.length === 1 ? nodes[0] : <>{nodes}</>;
}
