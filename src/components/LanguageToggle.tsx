import { useLanguage } from "../context/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Langue / Lang">
      <button
        type="button"
        className={lang === "ht" ? "active" : ""}
        onClick={() => setLang("ht")}
        aria-pressed={lang === "ht"}
      >
        Kreyòl
      </button>
      <button
        type="button"
        className={lang === "fr" ? "active" : ""}
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
      >
        Français
      </button>
    </div>
  );
}
