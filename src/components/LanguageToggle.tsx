import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { pathForLang } from "../data/topics";
import type { Lang } from "../types";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const go = (next: Lang) => {
    setLang(next);
    const target = pathForLang(location.pathname, next);
    if (target !== location.pathname) navigate(target);
  };

  return (
    <div className="lang-toggle" role="group" aria-label="Langue / Lang">
      <button
        type="button"
        className={lang === "ht" ? "active" : ""}
        onClick={() => go("ht")}
        aria-pressed={lang === "ht"}
      >
        Kreyòl
      </button>
      <button
        type="button"
        className={lang === "fr" ? "active" : ""}
        onClick={() => go("fr")}
        aria-pressed={lang === "fr"}
      >
        Français
      </button>
    </div>
  );
}
