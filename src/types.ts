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
  | "sports"
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
  /** Optional byline shown under the headline on the story page. */
  author?: LocalizedText;
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
  /** Hours the BREAKING badge stays after publishedTime (updates bump publishedTime): 6 one-off (default), 12 developing, 24 major ongoing. */
  breakingHours?: 6 | 12 | 24;
  /** URGENT / IJAN badge; no expiry unless urgentHours is set (counted from publishedTime). */
  isUrgent?: boolean;
  /** Pinned stories always sort first (editor's top story). */
  pinned?: boolean;
  /** Quiet item: no NOUVEAU badge (and so no promo banner). */
  quiet?: boolean;
  urgentHours?: number;
  /** Optional source links shown on the story page. */
  sourceLinks?: { name: string; url: string }[];
  /** Optional verbatim quote shown as a block quote (not translated). */
  quote?: { text: string; author: string; lang?: string };
  /** Optional audio player under the video. */
  audio?: { src: string; label: string };
  /** Optional inline video on the story page. */
  video?: { src: string; poster?: string; credit: string; url: string };
  /** Optional photo on the story page. */
  photo?: { src: string; alt: string; credit: string; url: string };
}

export interface TopicMeta {
  id: TopicId;
  label: LocalizedText;
}
