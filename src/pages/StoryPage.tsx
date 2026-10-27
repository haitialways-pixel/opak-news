import { Link, useParams } from "react-router-dom";
import { AdPlaceholder } from "../components/AdPlaceholder";
import { SiteHeader } from "../components/SiteHeader";
import { getStoryById } from "../data/stories";
import { topicLabel } from "../data/topics";
import { useLanguage } from "../context/LanguageContext";
import { SITE } from "../config";

export function StoryPage() {
  const { id } = useParams<{ id: string }>();
  const { lang, t, ui } = useLanguage();
  const story = id ? getStoryById(id) : undefined;

  if (!story) {
    return (
      <div className="page page-story">
        <header className="masthead masthead--compact">
          <SiteHeader />
        </header>
        <p className="back-row">
          <Link to="/" className="back-link">
            ← {ui.backToFeed}
          </Link>
        </p>
        <main>
          <p>Atik la pa jwenn / Article introuvable.</p>
        </main>
      </div>
    );
  }

  const otherLang = lang === "ht" ? "fr" : "ht";

  return (
    <div className="page page-story">
      <header className="masthead masthead--compact">
        <SiteHeader />
      </header>

      <p className="back-row">
        <Link to="/" className="back-link">
          ← {ui.backToFeed}
        </Link>
      </p>

      <main className="story-detail">
        <div className="story-meta">
          <span className="topic-chip">{topicLabel(story.topic, lang)}</span>
          {story.isSample && <span className="badge">{ui.sampleBadge}</span>}
          {story.isManual && (
            <span className="badge badge-manual">{ui.manualBadge}</span>
          )}
          <time dateTime={story.publishedAt}>{story.publishedAt}</time>
        </div>

        <h1 className="detail-headline">{t(story.headline)}</h1>
        <p className="detail-brief">{t(story.brief)}</p>

        {story.sources && story.sources.length > 0 && (
          <p className="sources">
            <strong>{ui.sources}:</strong> {story.sources.join(" · ")}
          </p>
        )}

        <details className="alt-lang">
          <summary>
            {otherLang === "fr" ? "Français" : "Kreyòl"} — {ui.dualHint}
          </summary>
          <h2 className="detail-headline alt">{story.headline[otherLang]}</h2>
          <p className="detail-brief">{story.brief[otherLang]}</p>
        </details>

        <AdPlaceholder />
      </main>

      <footer className="site-footer">
        <Link to="/" className="brand-inline">
          {SITE.name}
        </Link>
        <p className="footer-contact">
          Redaction:{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </p>
      </footer>
    </div>
  );
}
