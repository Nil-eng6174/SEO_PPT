import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePresentationNavigation } from '../hooks/usePresentationNavigation';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';

const SECTION_NAMES = [
  'Title',
  'Introduction to SEO',
  'Why SEO is Important',
  'History of SEO',
  'Google Search Engine',
  'How Search Engines Work',
  'Googlebot (Crawler)',
  'Indexing',
  'Ranking',
  'SEO Phases',
  'How SEO Works',
  'Types of SEO Techniques',
  'SEO Tactics',
  'Keywords & Search Intent',
  'Keyword Planner',
  'Social Media Reach',
  'Video Creation & Submission',
  'SEO Maintenance',
  'Practical Example',
  'Conclusion',
];

interface Props {
  sections: React.FC[];
}

export const PresentationShell: React.FC<Props> = ({ sections }) => {
  const { currentSection, nextSection, previousSection, goToSection } = usePresentationNavigation(sections.length);
  const [fullscreen, setFullscreen] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const CurrentComponent = sections[currentSection];
  const progress = ((currentSection + 1) / sections.length) * 100;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  React.useEffect(() => {
    const handler = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // Close menu on section change
  React.useEffect(() => { setShowMenu(false); }, [currentSection]);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden" style={{ backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      {/* Progress bar */}
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: '#1e293b' }}>
        <motion.div className="h-full" style={{ backgroundColor: '#3b82f6' }} animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
      </div>

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-3 shrink-0" style={{ borderBottom: '1px solid #1e293b' }}>
        <div className="flex items-center gap-3">
          <span className="text-blue-400 font-black text-lg tracking-wider">SEO</span>
          <span style={{ color: '#334155' }}>|</span>
          <button onClick={() => setShowMenu(!showMenu)} className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1">
            {SECTION_NAMES[currentSection]}
            <span className="text-xs ml-1">{showMenu ? '▲' : '▼'}</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm" style={{ color: '#64748b' }}>
            {String(currentSection + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
          </span>
          <button onClick={toggleFullscreen} className="p-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white" title="Toggle Fullscreen">
            {fullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>
      </header>

      {/* Section menu dropdown */}
      <AnimatePresence>
        {showMenu && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="absolute top-14 left-0 z-50 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-3 grid grid-cols-2 gap-1 w-96 ml-8">
            {SECTION_NAMES.map((name, i) => (
              <button key={i} onClick={() => goToSection(i)}
                className={`text-left px-3 py-2 rounded-lg text-xs transition-colors ${currentSection === i ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}>
                <span className="text-slate-500 mr-1">{String(i + 1).padStart(2, '0')}.</span>{name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="flex-1 relative overflow-hidden" onClick={() => showMenu && setShowMenu(false)}>
        <AnimatePresence mode="wait">
          <motion.div key={currentSection} className="absolute inset-0 px-10 py-6 overflow-y-auto"
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.28, ease: 'easeInOut' }}>
            <div className="max-w-6xl mx-auto h-full">
              <CurrentComponent />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="shrink-0 flex items-center justify-between px-8 py-3" style={{ borderTop: '1px solid #1e293b' }}>
        <button onClick={previousSection} disabled={currentSection === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-semibold text-sm">
          <ChevronLeft size={18} /> Previous
        </button>
        <div className="flex gap-1.5 items-center">
          {sections.map((_, i) => (
            <button key={i} onClick={() => goToSection(i)} title={SECTION_NAMES[i]}
              className="rounded-full transition-all duration-300"
              style={{ backgroundColor: currentSection === i ? '#3b82f6' : '#334155', width: currentSection === i ? 24 : 8, height: 8 }} />
          ))}
        </div>
        <button onClick={nextSection} disabled={currentSection === sections.length - 1}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          style={{ backgroundColor: '#2563eb' }}>
          Next <ChevronRight size={18} />
        </button>
      </footer>
    </div>
  );
};
