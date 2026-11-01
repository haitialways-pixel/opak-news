import type { Lang, Story } from "../types";

/** Max characters for a feed/card teaser. Full text lives on the story page only. */
export const TEASER_MAX = 220;

/**
 * Short card teaser: explicit `story.teaser` if set, else the first 1-2
 * sentences of the brief (extractive only, never rewritten), with any leading
 * "Mise à jour … :" / "Mizajou … :" label removed, clamped to TEASER_MAX.
 */
export function cardTeaser(story: Story, lang: Lang): string {
  const explicit = story.teaser?.[lang];
  if (explicit) return clamp(explicit);
  let text = (story.brief[lang] || "").split(/\n\s*\n/)[0].replace(/\s+/g, " ").trim();
  text = text.replace(/^(Mise à jour|Mizajou)[\s\S]{0,60}?:\s+/i, "");
  const sentences = text.split(/(?<=(?<!\.)[.!?](?!\.)["»”’)]*)\s+(?=[A-ZÀ-Ý«“"])/).map((x) => x + " ");
  let out = "";
  for (const s of sentences) {
    if (out && (out + s).trim().length > TEASER_MAX) break;
    out += s;
    if (out.trim().length >= 120) break;
  }
  let res = clamp(out.trim() || text);
  const open = (res.match(/«/g) || []).length - (res.match(/»/g) || []).length;
  if (open > 0) res = res.replace(/\s*$/, " »");
  return res;
}

function clamp(s: string): string {
  s = s.trim();
  if (s.length <= TEASER_MAX) return s;
  return s.slice(0, TEASER_MAX).replace(/\s+\S*$/, "").replace(/[,;:]$/, "") + "…";
}
