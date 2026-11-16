import { SITE } from "../config";
import { useLanguage } from "../context/LanguageContext";
import { formatDigestDate } from "../lib/dates";
import { SiteHeader } from "./SiteHeader";
import { SiteNav } from "./SiteNav";

/** Shared sticky site header (logo + language toggle + section nav). */
export function Masthead({ showIssue = false }: { showIssue?: boolean }) {
  const { lang } = useLanguage();
  const tagline = lang === "ht" ? SITE.taglineHt : SITE.taglineFr;
  const today = formatDigestDate(new Date(), lang);

  return (
    <>
      <header className="masthead">
        <SiteHeader />
        <SiteNav />
      </header>
      {showIssue && (
        <div className="masthead-issue">
          <p className="tagline">{tagline}</p>
          <p className="issue-date">{today}</p>
        </div>
      )}
    </>
  );
}
