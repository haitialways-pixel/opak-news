import { Link } from "react-router-dom";
import { SITE } from "../config";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export function Masthead() {
  const { lang } = useLanguage();
  const tagline = lang === "ht" ? SITE.taglineHt : SITE.taglineFr;
  const today = new Date().toLocaleDateString(
    lang === "ht" ? "ht-HT" : "fr-FR",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <header className="masthead">
      <div className="masthead-top">
        <Link to="/" className="brand">
          <span className="brand-mark">OP</span>
          <span className="brand-name">{SITE.name}</span>
        </Link>
        <LanguageToggle />
      </div>
      <p className="tagline">{tagline}</p>
      <p className="issue-date">{today}</p>
    </header>
  );
}
