import { Link } from "react-router-dom";
import { frontPageSectionStories, nextArchiveMs } from "../data/stories";
import { TOPICS, sectionPath, topicLabel } from "../data/topics";
import { useLiveNow } from "../hooks/useLiveNow";
import { useLanguage } from "../context/LanguageContext";
import type { TopicId } from "../types";
import { StoryCard } from "./StoryCard";

export function InTheKnow() {
  const { lang, ui } = useLanguage();
  const now = useLiveNow([nextArchiveMs()].filter((t): t is number => t != null));

  const byTopic = TOPICS.map((topic) => ({
    topic: topic.id as TopicId,
    stories: frontPageSectionStories(topic.id, now),
  })).filter((g) => g.stories.length > 0);

  return (
    <section className="section in-the-know" aria-labelledby="itk-title">
      <h2 id="itk-title" className="section-label">
        {ui.inTheKnow}
      </h2>
      {byTopic.map((group) => (
        <div key={group.topic} className="topic-group">
          <div className="section-label-row">
            <h3 className="topic-heading">{topicLabel(group.topic, lang)}</h3>
            <Link className="text-link" to={sectionPath(group.topic, lang)}>
              {ui.seeAllSection} →
            </Link>
          </div>
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
