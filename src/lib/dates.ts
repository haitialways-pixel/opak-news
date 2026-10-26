import type { Lang } from "../types";

/** Haitian Creole month names (digest masthead). */
export const CREOLE_MONTHS = [
  "Janvye",
  "Fevriye",
  "Mas",
  "Avril",
  "Me",
  "Jen",
  "Jiyè",
  "Out",
  "Septanm",
  "Oktob",
  "Novanm",
  "Desanm",
] as const;

/**
 * Format a digest date.
 * Creole example: 26 Oktob 2026
 * French: 26 octobre 2026
 */
export function formatDigestDate(
  date: Date = new Date(),
  lang: Lang = "ht",
): string {
  const day = date.getDate();
  const year = date.getFullYear();

  if (lang === "ht") {
    return `${day} ${CREOLE_MONTHS[date.getMonth()]} ${year}`;
  }

  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
