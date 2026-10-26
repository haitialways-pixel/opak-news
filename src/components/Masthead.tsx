import { SITE } from "../config";
import { useLanguage } from "../context/LanguageContext";
import { formatDigestDate } from "../lib/dates";
import { SiteHeader } from "./SiteHeader";

/** Home masthead: shared header + Creole/French tagline + digest date. */
export function Masthead() {
  const { lang } = useLanguage();
  const tagline = lang === "ht" ? SITE.taglineHt : SITE.taglineFr;
  const today = formatDigestDate(new Date(), lang);

  return (
    <header className="masthead">
      <SiteHeader />
      <p className="tagline">{tagline}</p>
      <p className="issue-date">{today}</p>
    </header>
  );
}
