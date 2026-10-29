import { Link } from "react-router-dom";
import { SITE } from "../config";
import { LanguageToggle } from "./LanguageToggle";

/** Shared Opak News bar: logo + title + language toggle (no tagline/date). */
export function SiteHeader() {
  return (
    <div className="site-header masthead-top">
      <Link to="/" className="brand">
        <img className="brand-logo" src="/opak-logo-512.png" alt={SITE.name} width="44" height="44" />
      </Link>
      <LanguageToggle />
    </div>
  );
}
