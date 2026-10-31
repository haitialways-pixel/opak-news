/**
 * Opak News site configuration.
 * Change OBELIKA_YOUTUBE_* here (or override via Vite env) without touching UI code.
 */

const env = import.meta.env;

/** Public channel URL — linked from Featured Video and masthead. */
export const OBELIKA_YOUTUBE_URL: string =
  (env.VITE_OBELIKA_YOUTUBE_URL as string | undefined) ??
  "https://www.youtube.com/@Obelika";

/** Channel ID for embeds (UC…). */
export const OBELIKA_YOUTUBE_CHANNEL_ID: string =
  (env.VITE_OBELIKA_YOUTUBE_CHANNEL_ID as string | undefined) ??
  "UCRii3A1yALqUcgYj4ZcssBQ";

/**
 * YouTube "uploads" playlist id: replace leading UC with UU.
 * Used to embed the channel's latest uploads without picking a single video id.
 */
export function youtubeUploadsPlaylistId(
  channelId: string = OBELIKA_YOUTUBE_CHANNEL_ID,
): string {
  if (channelId.startsWith("UC")) return `UU${channelId.slice(2)}`;
  return channelId;
}

/** Pinned featured video id (empty string = fall back to uploads playlist). */
export const OBELIKA_FEATURED_VIDEO_ID: string =
  (env.VITE_OBELIKA_FEATURED_VIDEO_ID as string | undefined) ?? "pizXYbI97jc";

/** Watch URL for the pinned video, or the channel URL if none. */
export const OBELIKA_FEATURED_WATCH_URL: string = OBELIKA_FEATURED_VIDEO_ID
  ? `https://www.youtube.com/watch?v=${encodeURIComponent(OBELIKA_FEATURED_VIDEO_ID)}`
  : OBELIKA_YOUTUBE_URL;

/** Embed URL: pinned video if set, else the channel's uploads playlist. */
export function obelikaFeaturedEmbedUrl(): string {
  if (OBELIKA_FEATURED_VIDEO_ID)
    return `https://www.youtube.com/embed/${encodeURIComponent(OBELIKA_FEATURED_VIDEO_ID)}`;
  const list = youtubeUploadsPlaylistId();
  return `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(list)}`;
}

export const SITE = {
  name: "Opak News",
  taglineHt: "Nouvel Ayiti Kout e klè",
  taglineFr: "L'actualité haïtienne, courte et claire",
  defaultLang: "fr" as const,
  /** Editorial / redaction contact */
  contactEmail: "Haitialways@gmail.com",
};
