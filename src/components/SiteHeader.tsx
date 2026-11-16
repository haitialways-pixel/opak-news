import { Link } from "react-router-dom";
import { SITE } from "../config";
import { useLanguage } from "../context/LanguageContext";
import { homePath } from "../data/topics";
import { LanguageToggle } from "./LanguageToggle";

/** Shared Opak News bar: logo + title + language toggle (no tagline/date). */
export function SiteHeader() {
  const { lang } = useLanguage();
  return (
    <div className="site-header masthead-top">
      <Link to={homePath(lang)} className="brand">
        <img className="brand-logo" src="/opak-logo-512.png" alt={SITE.name} width="44" height="44" />
        <span className="brand-name">{SITE.name}</span>
      </Link>
      <LanguageToggle />
    </div>
  );
}
