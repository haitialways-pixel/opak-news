import { Link } from "react-router-dom";
import { SITE } from "../config";
import { LanguageToggle } from "./LanguageToggle";

/** Shared Opak News bar: logo + title + language toggle (no tagline/date). */
export function SiteHeader() {
  return (
    <div className="site-header masthead-top">
      <Link to="/" className="brand">
        <span className="brand-mark">OP</span>
        <span className="brand-name">{SITE.name}</span>
      </Link>
      <LanguageToggle />
    </div>
  );
}
