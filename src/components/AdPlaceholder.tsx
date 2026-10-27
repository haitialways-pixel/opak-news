import { useLanguage } from "../context/LanguageContext";
import { STORY_PROMO, type PromoAd } from "../data/ads";

interface AdPlaceholderProps {
  /** Override default story-page promo (CPCREDO). */
  ad?: PromoAd;
}

/** Sponsored in-feed banner under story brief (not a network ad unit). */
export function AdPlaceholder({ ad = STORY_PROMO }: AdPlaceholderProps) {
  const { ui } = useLanguage();

  return (
    <aside className="ad-slot" aria-label={`${ui.adLabel}: ${ad.brand}`}>
      <span className="ad-slot-label">{ui.adLabel}</span>
      <div className="promo-banner">
        <p className="promo-brand">{ad.brand}</p>
        <p className="promo-tagline">{ad.tagline}</p>
        <p className="promo-contact">
          <a href={ad.phoneHref}>{ad.phoneDisplay}</a>
          <span className="promo-sep" aria-hidden="true">
            ·
          </span>
          <a
            href={ad.webHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ad.webDisplay}
          </a>
        </p>
      </div>
    </aside>
  );
}
