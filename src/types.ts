export type Lang = "ht" | "fr";

export type TopicId =
  | "politics"
  | "development"
  | "tech"
  | "commerce"
  | "security"
  | "society"
  | "gossip";

export interface LocalizedText {
  ht: string;
  fr: string;
}

export interface Story {
  id: string;
  /** Lead stories appear in Need to Know; others in In the Know. */
  tier: "need-to-know" | "quick-hit";
  topic: TopicId;
  headline: LocalizedText;
  /** Short blurb / brief body. */
  brief: LocalizedText;
  /** Optional source credit shown under the brief. */
  sources?: string[];
  /** ISO date YYYY-MM-DD */
  publishedAt: string;
  /** Manual editorial push (future: user-submitted). */
  isManual?: boolean;
  /** Sample / placeholder content flag. */
  isSample?: boolean;
}

export interface TopicMeta {
  id: TopicId;
  label: LocalizedText;
}
