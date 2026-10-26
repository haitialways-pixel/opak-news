import { quickHitStories } from "../data/stories";
import { TOPICS, topicLabel } from "../data/topics";
import { useLanguage } from "../context/LanguageContext";
import type { TopicId } from "../types";
import { StoryCard } from "./StoryCard";

export function InTheKnow() {
  const { lang, ui } = useLanguage();
  const hits = quickHitStories();

  const byTopic = TOPICS.map((topic) => ({
    topic: topic.id as TopicId,
    stories: hits.filter((s) => s.topic === topic.id),
  })).filter((g) => g.stories.length > 0);

  return (
    <section className="section in-the-know" aria-labelledby="itk-title">
      <h2 id="itk-title" className="section-label">
        {ui.inTheKnow}
      </h2>
      {byTopic.map((group) => (
        <div key={group.topic} className="topic-group">
          <h3 className="topic-heading">{topicLabel(group.topic, lang)}</h3>
          <div className="story-stack">
            {group.stories.map((story) => (
              <StoryCard key={story.id} story={story} variant="hit" />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
