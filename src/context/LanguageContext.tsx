import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SITE } from "../config";
import type { Lang, LocalizedText } from "../types";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (text: LocalizedText) => string;
  ui: {
    needToKnow: string;
    inTheKnow: string;
    featuredVideo: string;
    watchOnYoutube: string;
    sources: string;
    sampleBadge: string;
    manualBadge: string;
    backToFeed: string;
    adLabel: string;
    adPlaceholder: string;
    today: string;
    dualHint: string;
  };
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const UI = {
  ht: {
    needToKnow: "Sa w dwe konnen",
    inTheKnow: "Pou w rete enfòme",
    featuredVideo: "Videyo an premye — Obelika",
    watchOnYoutube: "Gade sou YouTube",
    sources: "Sous",
    sampleBadge: "Egzanp",
    manualBadge: "Editè",
    backToFeed: "Tounen nan nouvèl yo",
    adLabel: "Piblisite",
    adPlaceholder:
      "Espas piblisite (AdMob / anons entènèt) — plase anba rezime a",
    today: "Jodi a",
    dualHint: "Kreyòl · Franse",
  },
  fr: {
    needToKnow: "À retenir",
    inTheKnow: "Pour rester informé",
    featuredVideo: "Vidéo à la une — Obelika",
    watchOnYoutube: "Voir sur YouTube",
    sources: "Sources",
    sampleBadge: "Exemple",
    manualBadge: "Éditeur",
    backToFeed: "Retour au fil",
    adLabel: "Publicité",
    adPlaceholder:
      "Emplacement publicitaire (AdMob / web) — sous le résumé",
    today: "Aujourd’hui",
    dualHint: "Créole · Français",
  },
} as const;

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(SITE.defaultLang);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "ht" ? "fr" : "ht"));
  }, []);

  const t = useCallback((text: LocalizedText) => text[lang], [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle,
      t,
      ui: UI[lang],
    }),
    [lang, toggle, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
