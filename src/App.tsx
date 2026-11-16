import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ArchivesPage } from "./pages/ArchivesPage";
import { HomePage } from "./pages/HomePage";
import { SectionPage } from "./pages/SectionPage";
import { StoryPage } from "./pages/StoryPage";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage pageLang="fr" />} />
          <Route path="/ht" element={<HomePage pageLang="ht" />} />
          <Route path="/archives" element={<ArchivesPage pageLang="fr" />} />
          <Route path="/ht/archives" element={<ArchivesPage pageLang="ht" />} />
          <Route path="/story/:id" element={<StoryPage pageLang="fr" />} />
          <Route path="/ht/story/:id" element={<StoryPage pageLang="ht" />} />
          <Route path="/opinion" element={<Navigate to="/justice-a-lhaitienne" replace />} />
          <Route path="/ht/opinyon" element={<Navigate to="/ht/ayiti-ak-jistis" replace />} />
          <Route path="/commerce" element={<Navigate to="/economie" replace />} />
          <Route path="/ht/komes" element={<Navigate to="/ht/ekonomi" replace />} />
          <Route path="/developpement" element={<Navigate to="/economie" replace />} />
          <Route path="/ht/devlopman" element={<Navigate to="/ht/ekonomi" replace />} />
          <Route path="/ht/:sectionSlug" element={<SectionPage pageLang="ht" />} />
          <Route path="/:sectionSlug" element={<SectionPage pageLang="fr" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
