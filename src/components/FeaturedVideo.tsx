import {
  OBELIKA_FEATURED_WATCH_URL,
  obelikaFeaturedEmbedUrl,
} from "../config";
import { useLanguage } from "../context/LanguageContext";

export function FeaturedVideo() {
  const { ui } = useLanguage();
  const embed = obelikaFeaturedEmbedUrl();

  return (
    <section className="section featured-video" aria-labelledby="featured-video-title">
      <div className="section-label-row">
        <h2 id="featured-video-title" className="section-label">
          {ui.featuredVideo}
        </h2>
        <a
          className="text-link"
          href={OBELIKA_FEATURED_WATCH_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ui.watchOnYoutube} →
        </a>
      </div>
      <div className="video-frame">
        <iframe
          title="Obelika — YouTube"
          src={embed}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
