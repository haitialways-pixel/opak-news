import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";
import { Masthead } from "../components/Masthead";
import { StoryCard } from "../components/StoryCard";
import { useLanguage } from "../context/LanguageContext";
import { sectionPageStories } from "../data/stories";
import { homePath, sectionPath, topicBySlug } from "../data/topics";
import type { Lang } from "../types";

export function SectionPage({ pageLang }: { pageLang: Lang }) {
  const { sectionSlug } = useParams<{ sectionSlug: string }>();
  const { lang: ctxLang, setLang, ui } = useLanguage();
  useEffect(() => {
    if (ctxLang !== pageLang) setLang(pageLang);
    document.documentElement.lang = pageLang;
  }, [pageLang, ctxLang, setLang]);

  const lang = pageLang;
  const topic = sectionSlug ? topicBySlug(sectionSlug, lang) : undefined;

  if (!topic) {
    return (
      <div className="page page-section">
        <Masthead />
        <p className="back-row">
          <Link to={homePath(lang)} className="back-link">
            ← {ui.backToFeed}
          </Link>
        </p>
        <main>
          <p>Seksyon an pa jwenn / Rubrique introuvable.</p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const stories = sectionPageStories(topic.id);
  const otherLang: Lang = lang === "ht" ? "fr" : "ht";

  return (
    <div className="page page-section">
      <Masthead />
      <p className="back-row">
        <Link to={homePath(lang)} className="back-link">
          ← {ui.backToFeed}
        </Link>
        <Link to={sectionPath(topic.id, otherLang)} className="lang-switch" lang={otherLang}>
          {lang === "ht" ? "Lire en français" : "Li an Kreyòl"}
        </Link>
      </p>
      <main className="section-page">
        <h1 className="section-page-title">{topic.label[lang]}</h1>
        {stories.length === 0 ? (
          <p>{lang === "ht" ? "Pa gen atik nan seksyon sa a pou kounye a." : "Il n'y a pas encore d'article dans cette rubrique."}</p>
        ) : (
          <div className="story-stack">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} variant="hit" />
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
