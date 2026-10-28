import { Link } from "react-router-dom";
import { SITE } from "../config";
import { useLanguage } from "../context/LanguageContext";

export function SiteFooter() {
  const { ui } = useLanguage();
  return (
    <footer className="site-footer">
      <p>
        <Link to="/" className="brand-inline">Opak News · Ayiti</Link>
      </p>
      <p className="footer-redaction">
        <a href={`mailto:${SITE.contactEmail}`}>{ui.sendNote}</a>
      </p>
    </footer>
  );
}
