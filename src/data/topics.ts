import type { Lang, TopicId, TopicMeta } from "../types";

export const TOPICS: TopicMeta[] = [
  {
    id: "politics",
    slug: { ht: "politik", fr: "politique" },
    label: { ht: "Politik", fr: "Politique" },
  },
  {
    id: "economy",
    slug: { ht: "ekonomi", fr: "economie" },
    label: { ht: "Ekonomi", fr: "Économie" },
  },
  {
    id: "society",
    slug: { ht: "sosyete", fr: "societe" },
    label: { ht: "Sosyete", fr: "Société" },
  },
  {
    id: "justice",
    slug: { ht: "ayiti-ak-jistis", fr: "justice-a-lhaitienne" },
    label: { ht: "Ayiti ak Jistis", fr: "Justice à l’Haïtienne" },
  },
  {
    id: "security",
    slug: { ht: "sekirite", fr: "securite" },
    label: { ht: "Sekirite", fr: "Sécurité" },
  },
  {
    id: "tech",
    slug: { ht: "teknoloji", fr: "technologie" },
    label: { ht: "Teknoloji", fr: "Technologie" },
  },
  {
    id: "sports",
    slug: { ht: "espo", fr: "sports" },
    label: { ht: "Espò", fr: "Sports" },
  },
  {
    id: "moise-trials",
    slug: { ht: "jistis-nan-lakou-a", fr: "justice-dans-larriere-cour" },
    label: { ht: "Jistis nan lakou a", fr: "Justice dans l’arrière-cour" },
  },
  {
    id: "governance",
    slug: { ht: "gouvenans-ak-teritwa", fr: "gouvernance-et-territoire" },
    label: { ht: "Gouvènans ak teritwa", fr: "Gouvernance et territoire" },
  },
  {
    id: "gossip",
    slug: { ht: "tripotay", fr: "coulisses" },
    label: { ht: "Tripotay", fr: "Les Coulisses" },
  },
];

export function topicLabel(id: TopicId, lang: Lang): string {
  return TOPICS.find((t) => t.id === id)?.label[lang] ?? id;
}

export function topicById(id: TopicId): TopicMeta | undefined {
  return TOPICS.find((t) => t.id === id);
}

export function topicBySlug(slug: string, lang: Lang): TopicMeta | undefined {
  return TOPICS.find((t) => t.slug[lang] === slug);
}

export function homePath(lang: Lang): string {
  return lang === "ht" ? "/ht" : "/";
}

export function archivesPath(lang: Lang): string {
  return lang === "ht" ? "/ht/archives" : "/archives";
}

export function sectionPath(id: TopicId, lang: Lang): string {
  const slug = topicById(id)?.slug[lang] ?? id;
  return lang === "ht" ? `/ht/${slug}` : `/${slug}`;
}

/** Map a site pathname to the same page in another language. */
export function pathForLang(pathname: string, lang: Lang): string {
  const parts = pathname.replace(/\/+$/, "") || "/";
  if (parts === "/" || parts === "/ht") return homePath(lang);
  if (parts === "/archives" || parts === "/ht/archives") return archivesPath(lang);
  const story = parts.match(/^(\/ht)?\/story\/([^/]+)$/);
  if (story) return lang === "ht" ? `/ht/story/${story[2]}` : `/story/${story[2]}`;
  const htSec = parts.match(/^\/ht\/([^/]+)$/);
  if (htSec) {
    const topic = topicBySlug(htSec[1], "ht");
    return topic ? sectionPath(topic.id, lang) : homePath(lang);
  }
  const frSec = parts.match(/^\/([^/]+)$/);
  if (frSec) {
    const topic = topicBySlug(frSec[1], "fr");
    return topic ? sectionPath(topic.id, lang) : homePath(lang);
  }
  return homePath(lang);
}
