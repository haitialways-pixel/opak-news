export type Lang = "ht" | "fr";

export type TopicId =
  | "politics"
  | "governance"
  | "justice"
  | "development"
  | "tech"
  | "commerce"
  | "security"
  | "society"
  | "moise-trials"
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
  /** Short blurb / teaser on the feed. */
  brief: LocalizedText;
  /** Optional full article body (story page only). */
  body?: LocalizedText;
  /** Optional source credit shown under the brief. */
  sources?: string[];
  /** ISO date YYYY-MM-DD */
  publishedAt: string;
  /**
   * Exact publish time, ISO with Haiti offset, e.g. "2026-10-29T08:01:49-04:00".
   * Always set this when adding a story: the blue Nouveau/Nouvo badge shows
   * for 24h after it. If missing, the badge ends at the end of publishedAt's day.
   */
  publishedTime?: string;
  /** Manual editorial push (future: user-submitted). */
  isManual?: boolean;
  /** Sample / placeholder content flag. */
  isSample?: boolean;
  /** Breaking news badge (label always BREAKING). */
  isBreaking?: boolean;
  /** Optional source links shown on the story page. */
  sourceLinks?: { name: string; url: string }[];
  /** Optional verbatim quote shown as a block quote (not translated). */
  quote?: { text: string; author: string; lang?: string };
  /** Optional audio player under the video. */
  audio?: { src: string; label: string };
  /** Optional inline video on the story page. */
  video?: { src: string; poster?: string; credit: string; url: string };
}

export interface TopicMeta {
  id: TopicId;
  label: LocalizedText;
}
