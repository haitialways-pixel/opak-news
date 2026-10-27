import { FeaturedVideo } from "../components/FeaturedVideo";
import { InTheKnow } from "../components/InTheKnow";
import { Masthead } from "../components/Masthead";
import { NeedToKnow } from "../components/NeedToKnow";
import { SITE } from "../config";

export function HomePage() {
  return (
    <div className="page page-home">
      <Masthead />
      <main>
        <NeedToKnow />
        <FeaturedVideo />
        <InTheKnow />
      </main>
      <footer className="site-footer">
        <p>Opak News · Ayiti</p>
        <p className="footer-contact">
          Redaction:{" "}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </p>
        <p className="muted">
          Kontni egzanp pou vèsyon 1; otomatizasyon ak AdMob ap vini.
        </p>
      </footer>
    </div>
  );
}
