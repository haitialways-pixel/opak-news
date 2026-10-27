import type { TopicMeta } from "../types";

export const TOPICS: TopicMeta[] = [
  {
    id: "politics",
    label: { ht: "Politik", fr: "Politique" },
  },
  {
    id: "governance",
    label: { ht: "Gouvènans ak teritwa", fr: "Gouvernance et territoire" },
  },
  {
    id: "justice",
    label: { ht: "Ayiti ak Jistis", fr: "Haiti and Justice" },
  },
  {
    id: "development",
    label: { ht: "Devlopman", fr: "Développement" },
  },
  {
    id: "tech",
    label: { ht: "Teknoloji", fr: "Technologie" },
  },
  {
    id: "commerce",
    label: { ht: "Komès", fr: "Commerce" },
  },
  {
    id: "security",
    label: { ht: "Sekirite", fr: "Sécurité" },
  },
  {
    id: "society",
    label: { ht: "Sosyete", fr: "Société" },
  },
  {
    id: "gossip",
    label: { ht: "Tripotay", fr: "Rumeurs" },
  },
];

export function topicLabel(
  id: TopicMeta["id"],
  lang: "ht" | "fr",
): string {
  return TOPICS.find((t) => t.id === id)?.label[lang] ?? id;
}
