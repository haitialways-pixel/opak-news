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
    label: { ht: "Ayiti ak Jistis", fr: "Justice à l’Haïtienne" },
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
    id: "moise-trials",
    label: { ht: "Jistis nan lakou a", fr: "Justice dans l’arrière-cour" },
  },
  {
    id: "gossip",
    label: { ht: "Tripotay", fr: "Les Coulisses" },
  },
];

export function topicLabel(
  id: TopicMeta["id"],
  lang: "ht" | "fr",
): string {
  return TOPICS.find((t) => t.id === id)?.label[lang] ?? id;
}
