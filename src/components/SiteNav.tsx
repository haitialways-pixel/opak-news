import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { TOPICS, sectionPath } from "../data/topics";
import { sectionPageStories } from "../data/stories";

/** Section links for the masthead. Empty topics are omitted. */
export function SiteNav() {
  const { lang, ui } = useLanguage();
  const location = useLocation();
  const items = TOPICS.filter((topic) => sectionPageStories(topic.id).length > 0);

  if (items.length === 0) return null;

  return (
    <nav className="site-nav" aria-label={ui.sectionsNav}>
      {items.map((topic) => {
        const href = sectionPath(topic.id, lang);
        const current = location.pathname === href || location.pathname === href + "/";
        return (
          <Link key={topic.id} to={href} aria-current={current ? "page" : undefined}>
            {topic.label[lang]}
          </Link>
        );
      })}
    </nav>
  );
}
