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
    breakingBadge: string;
    backToFeed: string;
    adLabel: string;
    today: string;
    dualHint: string;
    shareLabel: string;
    shareOnX: string;
    shareOnFacebook: string;
    shareOnInstagram: string;
    instagramHint: string;
    linkCopied: string;
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
    breakingBadge: "BREAKING",
    backToFeed: "Tounen nan nouvèl yo",
    adLabel: "Piblisite",
    today: "Jodi a",
    dualHint: "Kreyòl · Franse",
    shareLabel: "Pataje",
    shareOnX: "Pataje sou X",
    shareOnFacebook: "Pataje sou Facebook",
    shareOnInstagram: "Kopye lyen pou Instagram",
    instagramHint: "Instagram pa gen pataj sou entènèt. Kopye lyen an, epi kole l nan Instagram.",
    linkCopied: "Lyen kopi!",
  },
  fr: {
    needToKnow: "À retenir",
    inTheKnow: "Pour rester informé",
    featuredVideo: "Vidéo à la une — Obelika",
    watchOnYoutube: "Voir sur YouTube",
    sources: "Sources",
    sampleBadge: "Exemple",
    manualBadge: "Éditeur",
    breakingBadge: "BREAKING",
    backToFeed: "Retour au fil",
    adLabel: "Publicité",
    today: "Aujourd’hui",
    dualHint: "Créole · Français",
    shareLabel: "Partager",
    shareOnX: "Partager sur X",
    shareOnFacebook: "Partager sur Facebook",
    shareOnInstagram: "Copier le lien pour Instagram",
    instagramHint: "Instagram n'a pas de partage web. Copiez le lien, puis collez-le dans Instagram.",
    linkCopied: "Lien copié!",
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
