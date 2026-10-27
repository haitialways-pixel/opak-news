/**
 * In-feed / story-page promotional placements.
 * Swap or extend entries here without touching layout components.
 */

export interface PromoAd {
  id: string;
  brand: string;
  /** Tagline / offer line (Creole as provided by sponsor). */
  tagline: string;
  phoneDisplay: string;
  phoneHref: string;
  webDisplay: string;
  webHref: string;
}

export const STORY_PROMO: PromoAd = {
  id: "cpcredo",
  brand: "CPCREDO",
  tagline: "Jwen eskont ou bezswen an nan kès popilè paw la.",
  phoneDisplay: "+509-4108-1537",
  phoneHref: "tel:+50941081537",
  webDisplay: "cpcredo.com",
  webHref: "https://cpcredo.com",
};
