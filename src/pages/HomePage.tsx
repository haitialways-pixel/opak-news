import { FeaturedVideo } from "../components/FeaturedVideo";
import { InTheKnow } from "../components/InTheKnow";
import { Masthead } from "../components/Masthead";
import { NeedToKnow } from "../components/NeedToKnow";

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
      </footer>
    </div>
  );
}
