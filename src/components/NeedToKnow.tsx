import { needToKnowStories } from "../data/stories";
import { useLanguage } from "../context/LanguageContext";
import { StoryCard } from "./StoryCard";

export function NeedToKnow() {
  const { ui } = useLanguage();
  const stories = needToKnowStories();

  return (
    <section className="section need-to-know" aria-labelledby="ntk-title">
      <h2 id="ntk-title" className="section-label section-label--accent">
        {ui.needToKnow}
      </h2>
      <div className="story-stack">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} variant="lead" />
        ))}
      </div>
    </section>
  );
}
