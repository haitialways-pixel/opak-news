import { Link } from "react-router-dom";
import { ShareBar } from "./ShareBar";
import { useLanguage } from "../context/LanguageContext";
import type { Story } from "../types";

interface Props {
  story: Story;
  variant?: "lead" | "hit";
}

export function StoryCard({ story, variant = "hit" }: Props) {
  const { t, ui } = useLanguage();

  return (
    <article className={`story-card story-card--${variant}`}>
      <div className="story-meta">
        {story.isBreaking && (
          <span className="badge badge-breaking">{ui.breakingBadge}</span>
        )}
        {story.isSample && <span className="badge">{ui.sampleBadge}</span>}
        {story.isManual && <span className="badge badge-manual">{ui.manualBadge}</span>}
      </div>
      <h3 className="story-headline">
        <Link to={`/story/${story.id}`}>{t(story.headline)}</Link>
      </h3>
      <p className="story-brief">{t(story.brief)}</p>
      <ShareBar storyId={story.id} headline={story.headline} variant="card" />
    </article>
  );
}
