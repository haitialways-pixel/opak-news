import { SiteFooter } from "../components/SiteFooter";
import { Link, useParams } from "react-router-dom";
import { AdPlaceholder } from "../components/AdPlaceholder";
import { ShareBar } from "../components/ShareBar";
import { SiteHeader } from "../components/SiteHeader";
import { getStoryById, isNewStory, isBreakingActive, isUrgentActive } from "../data/stories";
import { topicLabel } from "../data/topics";
import { useLanguage } from "../context/LanguageContext";
import { KeepNumbers } from "../lib/keepNumbers";
import { storyPath } from "../lib/storyPath";
import { useEffect } from "react";
import type { Lang } from "../types";

export function StoryPage({ pageLang }: { pageLang: Lang }) {
  const { id } = useParams<{ id: string }>();
  const { lang: ctxLang, setLang, ui: ctxUi } = useLanguage();
  useEffect(() => {
    if (ctxLang !== pageLang) setLang(pageLang);
    document.documentElement.lang = pageLang;
  }, [pageLang, ctxLang, setLang]);
  const lang = pageLang;
  const ui = ctxUi;
  const t = (x: { fr: string; ht: string }) => x[pageLang];
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


  return (
    <div className="page page-story">
      <header className="masthead masthead--compact">
        <SiteHeader />
      </header>

      <p className="back-row">
        <Link to="/" className="back-link">
          ← {ui.backToFeed}
        </Link>
        <Link to={storyPath(story.id, lang === "ht" ? "fr" : "ht")} className="lang-switch" lang={lang === "ht" ? "fr" : "ht"}>
          {lang === "ht" ? "Lire en français" : "Li an Kreyòl"}
        </Link>
      </p>

      <main className="story-detail">
        <div className="story-meta">
          <span className="topic-chip">{topicLabel(story.topic, lang)}</span>
          {isUrgentActive(story) && (
          <span className="badge badge-urgent">{ui.urgentBadge}</span>
        )}
        {isBreakingActive(story) && (
            <span className="badge badge-breaking">{ui.breakingBadge}</span>
          )}
        {isNewStory(story) && <span className="badge badge-new">{ui.newBadge}</span>}
          {story.isSample && <span className="badge">{ui.sampleBadge}</span>}
          {story.isManual && (
            <span className="badge badge-manual">{ui.manualBadge}</span>
          )}
          <time dateTime={story.publishedAt}>{story.publishedAt}</time>
        </div>

        <h1 className="detail-headline">
          <KeepNumbers text={t(story.headline)} />
        </h1>
        {story.author && <p className="detail-byline">{t(story.author)}</p>}
        <p className="detail-brief">
          <KeepNumbers text={t(story.brief)} />
        </p>
        {story.photo && (
          <figure className="detail-photo">
            <img src={story.photo.src} alt={story.photo.alt} style={{ width: "100%", height: "auto", display: "block" }} />
            <figcaption>
              <a href={story.photo.url} target="_blank" rel="noopener noreferrer">{story.photo.credit}</a>
            </figcaption>
          </figure>
        )}
        {story.audio && (
          <figure className="detail-audio">
            <figcaption>{story.audio.label}</figcaption>
            <audio controls preload="metadata" src={story.audio.src} style={{ width: "100%" }} />
          </figure>
        )}
        {story.quote && (
          <blockquote className="detail-quote" lang={story.quote.lang}>
            {story.quote.text.split(/\n\n+/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <footer>— {story.quote.author}</footer>
          </blockquote>
        )}
        {story.video && (
          <figure className="detail-video">
            <video controls playsInline preload="metadata" poster={story.video.poster} src={story.video.src} style={{ width: "100%", maxHeight: "80vh", background: "#000" }} />
            <figcaption>
              {story.video.credit} · <a href={story.video.url} target="_blank" rel="noopener noreferrer">X</a>
            </figcaption>
          </figure>
        )}
        {story.body && (
          <div className="detail-body">
            {t(story.body)
              .split(/\n\n+/)
              .filter(Boolean)
              .map((para, i) => (
                <p key={i}>
                  <KeepNumbers text={para} />
                </p>
              ))}
          </div>
        )}

        <ShareBar storyId={story.id} headline={story.headline} variant="detail" />

        {story.sources && story.sources.length > 0 && (
          <p className="sources">
            <strong>{ui.sources}:</strong> {story.sources.join(" · ")}
          </p>
        )}

        {story.sourceLinks && story.sourceLinks.length > 0 && (
          <p className="sources source-links">
            {story.sourceLinks.map((l, i) => (
              <span key={l.url}>
                {i > 0 && " · "}
                <a href={l.url} target="_blank" rel="noopener noreferrer">{l.name}</a>
              </span>
            ))}
          </p>
        )}


        <AdPlaceholder />
      </main>

      <SiteFooter />
    </div>
  );
}
