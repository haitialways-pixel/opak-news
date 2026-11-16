import { SITE } from "../config";
import { useLanguage } from "../context/LanguageContext";
import { formatDigestDate } from "../lib/dates";
import { SiteHeader } from "./SiteHeader";
import { SiteNav } from "./SiteNav";

/** Home masthead: shared header + Creole/French tagline + digest date + section nav. */
export function Masthead() {
  const { lang } = useLanguage();
  const tagline = lang === "ht" ? SITE.taglineHt : SITE.taglineFr;
  const today = formatDigestDate(new Date(), lang);

  return (
    <header className="masthead">
      <SiteHeader />
      <p className="tagline">{tagline}</p>
      <p className="issue-date">{today}</p>
      <SiteNav />
    </header>
  );
}
