import { PresentationShell } from './components/PresentationShell';
import * as Sections from './sections/Sections';

const sectionList = [
  Sections.TitleSection,          // 1 — Title
  Sections.IntroSection,          // 2 — Introduction to SEO
  Sections.ImportanceSection,     // 3 — Why SEO is Important
  Sections.HistorySection,        // 4 — History of SEO
  Sections.GoogleSearchSection,   // 5 — Google Search Engine
  Sections.SearchEngineSection,   // 6 — How Search Engine Works
  Sections.CrawlingSection,       // 7 — Googlebot
  Sections.IndexingSection,       // 8 — Indexing
  Sections.RankingSection,        // 9 — Ranking
  Sections.SeoPhasesSection,      // 10 — SEO Phases
  Sections.SeoProcessSection,     // 11 — How SEO Works
  Sections.SeoTypesSection,       // 12 — Types of SEO Techniques
  Sections.SeoTacticsSection,     // 13 — SEO Tactics
  Sections.KeywordsSection,       // 14 — Keywords & Search Intent
  Sections.KeywordPlannerSection, // 15 — Keyword Planner
  Sections.SocialMediaSection,    // 16 — Social Media Reach
  Sections.VideoSeoSection,       // 17 — Video Creation & Submission
  Sections.SeoMaintenanceSection, // 18 — SEO Maintenance
  Sections.PracticalExampleSection, // 19 — Practical Example
  Sections.ConclusionSection,     // 20 — Conclusion
];

function App() {
  return <PresentationShell sections={sectionList} />;
}

export default App;
