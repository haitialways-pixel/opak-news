import { useEffect, useState, type ReactNode } from "react";
import { useLanguage } from "../context/LanguageContext";
import { STORY_PROMOS, OPAK_WA_AD, type PromoAd } from "../data/ads";
import { isNewStory, isBreakingActive, isUrgentActive } from "../data/stories";
import type { Story } from "../types";

const ROTATE_MS = 8000;

interface AdPlaceholderProps {
  /** Override default rotating story-page promos. */
  ads?: PromoAd[];
}

const WA_COPY = {
  fr: { hook: "L’info d’Haïti, avant tout le monde.", sub: "Suivez Opak News sur WhatsApp", cta: "Suivre la chaîne" },
  ht: { hook: "Nouvèl Ayiti a, anvan tout moun.", sub: "Swiv Opak News sou WhatsApp", cta: "Swiv chèn nan" },
} as const;

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3z"/>
    </svg>
  );
}

export function OpakWhatsAppBanner({ ad }: { ad: PromoAd }) {
  const { lang } = useLanguage();
  const c = WA_COPY[lang === "ht" ? "ht" : "fr"];
  return (
    <a className="promo-banner promo-banner--opak-wa" href={ad.webHref} target="_blank" rel="noopener noreferrer">
      <div className="opak-wa-logo">
        <img src={ad.logoSrc} alt={ad.logoAlt} width="72" height="72" />
      </div>
      <div className="opak-wa-copy">
        <p className="opak-wa-hook">{c.hook}</p>
        <p className="opak-wa-sub">{c.sub}</p>
      </div>
      <span className="opak-wa-cta"><WhatsAppIcon />{c.cta}</span>
    </a>
  );
}

function PromoBanner({ ad }: { ad: PromoAd }) {
  if (ad.theme === "opak-wa") return <OpakWhatsAppBanner ad={ad} />;
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
      <div className="promo-banner-body">
        <div className="promo-banner-copy">
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
        {ad.logoSrc ? (
          <div className="promo-banner-logo" aria-hidden={false}>
            <img src={ad.logoSrc} alt={ad.logoAlt ?? ad.brand} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

/** ON WhatsApp banner, only under stories showing BREAKING / URGENT / NOUVEAU right now. */
export function hasActiveBadge(story: Story, now = Date.now()): boolean {
  return isBreakingActive(story, now) || isUrgentActive(story, now) || isNewStory(story, now);
}

export function OpakChannelPromo({ story }: { story: Story }) {
  if (!hasActiveBadge(story)) return null;
  return (
    <aside className="ad-slot opak-wa-slot" aria-label="Opak News WhatsApp">
      <OpakWhatsAppBanner ad={OPAK_WA_AD} />
    </aside>
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
