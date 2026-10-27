import { useEffect, useState, type ReactNode } from "react";
import { useLanguage } from "../context/LanguageContext";
import { STORY_PROMOS, type PromoAd } from "../data/ads";

const ROTATE_MS = 8000;

interface AdPlaceholderProps {
  /** Override default rotating story-page promos. */
  ads?: PromoAd[];
}

function PromoBanner({ ad }: { ad: PromoAd }) {
  const contacts: ReactNode[] = [];

  if (ad.phoneDisplay && ad.phoneHref) {
    contacts.push(
      <a key="phone" href={ad.phoneHref}>
        {ad.phoneDisplay}
      </a>,
    );
  }
  if (ad.emailDisplay && ad.emailHref) {
    contacts.push(
      <a key="email" href={ad.emailHref}>
        {ad.emailDisplay}
      </a>,
    );
  }
  contacts.push(
    <a
      key="web"
      href={ad.webHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      {ad.webDisplay}
    </a>,
  );

  return (
    <div className={`promo-banner promo-banner--${ad.theme}`}>
      <p className="promo-brand">{ad.brand}</p>
      <p className="promo-tagline">{ad.tagline}</p>
      <p className="promo-contact">
        {contacts.map((node, i) => (
          <span key={i} className="promo-contact-item">
            {i > 0 && (
              <span className="promo-sep" aria-hidden="true">
                ·
              </span>
            )}
            {node}
          </span>
        ))}
      </p>
    </div>
  );
}

/** Sponsored in-feed banner under story brief — rotates STORY_PROMOS. */
export function AdPlaceholder({ ads = STORY_PROMOS }: AdPlaceholderProps) {
  const { ui } = useLanguage();
  const [index, setIndex] = useState(0);
  const list = ads.length > 0 ? ads : STORY_PROMOS;
  const ad = list[index % list.length];

  useEffect(() => {
    if (list.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % list.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [list.length]);

  return (
    <aside className="ad-slot" aria-label={`${ui.adLabel}: ${ad.brand}`}>
      <span className="ad-slot-label">{ui.adLabel}</span>
      <PromoBanner ad={ad} />
      {list.length > 1 && (
        <div className="promo-dots" role="tablist" aria-label={ui.adLabel}>
          {list.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index % list.length}
              aria-label={item.brand}
              className={
                i === index % list.length
                  ? "promo-dot promo-dot--active"
                  : "promo-dot"
              }
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </aside>
  );
}
