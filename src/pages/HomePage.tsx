import { useEffect } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { FeaturedVideo } from "../components/FeaturedVideo";
import { InTheKnow } from "../components/InTheKnow";
import { Masthead } from "../components/Masthead";
import { NeedToKnow } from "../components/NeedToKnow";
import { useLanguage } from "../context/LanguageContext";
import type { Lang } from "../types";

export function HomePage({ pageLang }: { pageLang: Lang }) {
  const { lang: ctxLang, setLang } = useLanguage();
  useEffect(() => {
    if (ctxLang !== pageLang) setLang(pageLang);
    document.documentElement.lang = pageLang;
  }, [pageLang, ctxLang, setLang]);

  return (
    <div className="page page-home">
      <Masthead showIssue />
      <main>
        <NeedToKnow />
        <FeaturedVideo />
        <InTheKnow />
      </main>
      <SiteFooter />
    </div>
  );
}
