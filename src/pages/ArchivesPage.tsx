import { storyPath } from "../lib/storyPath";
import { Link } from "react-router-dom";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { useLanguage } from "../context/LanguageContext";
import { STORIES } from "../data/stories";
import type { Lang, Story } from "../types";

const HT_DAYS = ["dimanch", "lendi", "madi", "mèkredi", "jedi", "vandredi", "samdi"];
const HT_MONTHS = ["janvye", "fevriye", "mas", "avril", "me", "jen", "jiyè", "out", "septanm", "oktob", "novanm", "desanm"];
const FALLBACK = "undated";

function storyDate(s: Story): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(s.publishedAt || "")) return s.publishedAt;
  const m = s.id.match(/(\d{4}-\d{2}-\d{2})$/);
  return m ? m[1] : FALLBACK;
}

function formatLong(iso: string, lang: Lang): string {
  if (iso === FALLBACK) return lang === "ht" ? "San dat" : "Sans date";
  const [y, mo, d] = iso.split("-").map(Number);
  const date = new Date(y, mo - 1, d);
  if (lang === "ht") return `${HT_DAYS[date.getDay()]} ${d} ${HT_MONTHS[mo - 1]} ${y}`;
  return date.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

export function ArchivesPage() {
  const { lang, ui } = useLanguage();
  const groups = new Map<string, Story[]>();
  for (const s of STORIES) {
    const k = storyDate(s);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k)!.push(s);
  }
  const keys = [...groups.keys()].sort((a, b) =>
    a === FALLBACK ? 1 : b === FALLBACK ? -1 : b.localeCompare(a),
  );

  return (
    <div className="page page-archives">
      <header className="masthead masthead--compact">
        <SiteHeader />
      </header>
      <p className="back-row">
        <Link to="/" className="back-link">← {ui.backToFeed}</Link>
      </p>
      <main className="archives">
        <h1 className="archives-title">{ui.archives}</h1>
        {keys.map((k, i) => (
          <details key={k} className="archive-day" open={i === 0}>
            <summary>
              <span className="archive-date">{formatLong(k, lang)}</span>
              <span className="archive-count">{groups.get(k)!.length}</span>
            </summary>
            <ul className="archive-list">
              {groups.get(k)!.map((s) => (
                <li key={s.id}>
                  <Link to={storyPath(s.id, lang)} className="archive-item">
                    <strong>{s.headline[lang]}</strong>
                    <span>{s.brief[lang].length > 140 ? s.brief[lang].slice(0, 140).replace(/\s+\S*$/, "") + "…" : s.brief[lang]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
