import { storyPath } from "../lib/storyPath";
import { Link } from "react-router-dom";
import { ShareBar } from "./ShareBar";
import { isNewStory } from "../data/stories";
import { useLanguage } from "../context/LanguageContext";
import { KeepNumbers } from "../lib/keepNumbers";
import type { Story } from "../types";

interface Props {
  story: Story;
  variant?: "lead" | "hit";
}

export function StoryCard({ story, variant = "hit" }: Props) {
  const { lang, t, ui } = useLanguage();

  return (
    <article className={`story-card story-card--${variant}`}>
      <div className="story-meta">
        {story.isBreaking && (
          <span className="badge badge-breaking">{ui.breakingBadge}</span>
        )}
        {isNewStory(story) && <span className="badge badge-new">{ui.newBadge}</span>}
        {story.isSample && <span className="badge">{ui.sampleBadge}</span>}
        {story.isManual && <span className="badge badge-manual">{ui.manualBadge}</span>}
      </div>
      <h3 className="story-headline">
        <Link to={storyPath(story.id, lang)}>
          <KeepNumbers text={t(story.headline)} />
        </Link>
      </h3>
      <p className="story-brief">
        <KeepNumbers text={t(story.brief)} />
      </p>
      <ShareBar storyId={story.id} headline={story.headline} variant="card" />
    </article>
  );
}
