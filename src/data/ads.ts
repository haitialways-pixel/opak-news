/**
 * In-feed / story-page promotional placements.
 * Swap or extend entries here without touching layout components.
 */

export type PromoTheme = "cpcredo" | "delmas91" | "opak-wa";

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

/** Opak News WhatsApp channel (house ad). */
export const OPAK_WA_CHANNEL_URL = "https://whatsapp.com/channel/0029Vb9xBTH2phHG2cOPGk1x";
export const OPAK_WA_AD: PromoAd = {
  id: "opak-wa",
  brand: "Opak News",
  tagline: "",
  webDisplay: "WhatsApp",
  webHref: OPAK_WA_CHANNEL_URL,
  theme: "opak-wa",
  logoSrc: "/opak-logo-512.png",
  logoAlt: "Opak News",
};

/** Rotating story-page sponsor promos (hidden on stories with an active badge, which show the ON channel banner). To add a banner (e.g. a game): add a PromoTheme, an ad object, its CSS, and append it here. */
export const STORY_PROMOS: PromoAd[] = [CPCREDO_AD, DELMAS91_AD];

/** @deprecated Prefer STORY_PROMOS; kept for single-ad callers. */
export const STORY_PROMO: PromoAd = CPCREDO_AD;
