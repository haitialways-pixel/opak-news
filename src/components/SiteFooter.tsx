import { Link } from "react-router-dom";
import { SITE } from "../config";
import { useLanguage } from "../context/LanguageContext";
import { archivesPath, homePath } from "../data/topics";

export function SiteFooter() {
  const { lang, ui } = useLanguage();
  return (
    <footer className="site-footer">
      <p>
        <Link to={homePath(lang)} className="brand-inline">Opak News · Ayiti</Link>
      </p>
      <p className="footer-archives">
        <Link to={archivesPath(lang)}>{ui.archives}</Link>
      </p>
      <p className="footer-redaction">
        <a href={`mailto:${SITE.contactEmail}`}>{ui.sendNote}</a>
      </p>
    </footer>
  );
}
