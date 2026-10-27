/**
 * In-feed / story-page promotional placements.
 * Swap or extend entries here without touching layout components.
 */

export type PromoTheme = "cpcredo" | "delmas91";

export interface PromoAd {
  id: string;
  brand: string;
  /** Tagline / offer line (Creole when provided by sponsor; else from org site facts). */
  tagline: string;
  /** Optional phone (omit when org only lists email/web). */
  phoneDisplay?: string;
  phoneHref?: string;
  /** Optional email. */
  emailDisplay?: string;
  emailHref?: string;
  webDisplay: string;
  webHref: string;
  theme: PromoTheme;
  /** Optional logo path under public/ (shown on the right). */
  logoSrc?: string;
  logoAlt?: string;
}

/** CPCREDO — copy as provided by sponsor. */
export const CPCREDO_AD: PromoAd = {
  id: "cpcredo",
  brand: "CPCREDO",
  tagline: "Jwenn eskont ou bezwen an nan men kès popilè paw la!\nPou plis enfòmasyon, rele nou.",
  phoneDisplay: "+509-4108-1537",
  phoneHref: "tel:+50941081537",
  webDisplay: "cpcredo.com",
  webHref: "https://cpcredo.com",
  theme: "cpcredo",
};

/**
 * Group Delmas 91 — from groupdelmas91.org (501(c)(3), est. 2021).
 * Tagline summarizes Mission page: mobile clinic, food bank, backpack drive for Delmas.
 * Contact: contact@groupdelmas91.org
 * Logo: official mark from groupdelmas91.org (saved to public/delmas91-logo.png).
 */
export const DELMAS91_AD: PromoAd = {
  id: "delmas91",
  brand: "Group Delmas 91",
  tagline:
    "Òganizasyon san bi likratif pou Delmas: klinik mobil, bank manje, backpack drive.",
  emailDisplay: "contact@groupdelmas91.org",
  emailHref: "mailto:contact@groupdelmas91.org",
  webDisplay: "groupdelmas91.org",
  webHref: "https://www.groupdelmas91.org/",
  theme: "delmas91",
  logoSrc: "/delmas91-logo.png",
  logoAlt: "Group Delmas 91 — Ansyen Zanmi Nouvo Fanmi",
};

/** Rotating story-page promos (under brief). */
export const STORY_PROMOS: PromoAd[] = [CPCREDO_AD, DELMAS91_AD];

/** @deprecated Prefer STORY_PROMOS; kept for single-ad callers. */
export const STORY_PROMO: PromoAd = CPCREDO_AD;
