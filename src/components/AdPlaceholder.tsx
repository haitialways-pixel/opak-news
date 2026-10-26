import { useLanguage } from "../context/LanguageContext";

/** Clear placeholder for future AdMob / web ad unit under story brief. */
export function AdPlaceholder() {
  const { ui } = useLanguage();

  return (
    <aside className="ad-slot" aria-label={ui.adLabel}>
      <span className="ad-slot-label">{ui.adLabel}</span>
      <div className="ad-slot-box">
        <p>{ui.adPlaceholder}</p>
        <p className="ad-slot-meta">320×50 / 300×250 · AdMob / web</p>
      </div>
    </aside>
  );
}
