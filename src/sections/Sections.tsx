import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, CheckCircle, Database, Play, ArrowRight, BarChart2,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  historyItems, seoPhases, seoProcessSteps, seoTypes,
  seoTactics, keywordDatabase, keywordPlannerData,
  videoSeoTips, socialPlatforms, importanceStats,
} from '../data/presentationData';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// ══════════════════════════════════════════════════════════════════
// S1 — TITLE
// ══════════════════════════════════════════════════════════════════
export const TitleSection = () => {
  const [typed, setTyped] = useState('');
  const full = 'How websites become discoverable and useful in search';
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => { setTyped(full.slice(0, ++i)); if (i >= full.length) clearInterval(t); }, 40);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div className="flex flex-col items-center justify-center h-full text-center gap-8" {...fadeUp}>
      <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-3">Unit 4 — Digital Marketing</div>
        <h1 className="text-7xl font-black tracking-tight leading-none mb-2">
          SEARCH ENGINE<br /><span className="text-blue-400">OPTIMIZATION</span>
        </h1>
        <div className="text-slate-400 text-xl mt-3">SEO</div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
        className="bg-slate-800 border border-slate-600 rounded-2xl px-8 py-4 flex items-center gap-4 max-w-2xl w-full">
        <Search className="text-blue-400 shrink-0" size={22} />
        <span className="text-slate-300 text-lg font-mono">{typed}<span className="animate-pulse">|</span></span>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex gap-3">
        {['Visibility', 'Traffic', 'Authority', 'Organic Growth'].map((tag, i) => (
          <span key={i} className="text-slate-400 border border-slate-700 rounded-full px-4 py-1 text-sm">{tag}</span>
        ))}
      </motion.div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S2 — INTRODUCTION TO SEO
// ══════════════════════════════════════════════════════════════════
export const IntroSection = () => {
  const [step, setStep] = useState(0);
  const flow = [
    { label: 'User Searches', icon: '🙋', desc: 'Someone types a query into a search engine' },
    { label: 'Search Engine', icon: '🔍', desc: 'Processes the query against its index' },
    { label: 'SEO', icon: '⚙️', desc: 'Determines which pages are most relevant' },
    { label: 'Relevant Webpages', icon: '📄', desc: 'Best-matching, optimized pages appear first' },
  ];
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % flow.length), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div className="flex flex-col h-full justify-center gap-6" {...fadeUp}>
      <h2 className="text-5xl font-black">Introduction to <span className="text-blue-400">SEO</span></h2>
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <div className="bg-slate-800 border-l-4 border-blue-500 rounded-r-xl p-4">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Full Form</div>
            <div className="text-xl font-bold"><span className="text-blue-400">S</span>earch <span className="text-blue-400">E</span>ngine <span className="text-blue-400">O</span>ptimization</div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">SEO is the process of improving a website's structure, content, and authority so it appears higher in search engine results — without paying for ads.</p>
          <div className="grid grid-cols-2 gap-3">
            {[{ icon: '🆓', t: 'Organic Traffic', d: 'No cost per click' }, { icon: '📈', t: 'Compounding', d: 'Results grow over time' }, { icon: '🎯', t: 'Intent-Matched', d: 'Reaches active searchers' }, { icon: '🔄', t: 'Continuous', d: 'Ongoing improvement cycle' }].map((c, i) => (
              <div key={i} className="bg-slate-800 rounded-xl p-3 flex gap-2 items-start">
                <span className="text-xl">{c.icon}</span>
                <div><div className="font-bold text-sm text-white">{c.t}</div><div className="text-xs text-slate-400">{c.d}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-0">
          {flow.map((f, i) => (
            <div key={i} className="flex flex-col items-center">
              <motion.div
                animate={{ backgroundColor: step === i ? '#1e3a8a' : step > i ? '#1d4ed8' : '#1e293b', scale: step === i ? 1.07 : 1, borderColor: step === i ? '#3b82f6' : '#334155' }}
                onClick={() => setStep(i)}
                className="border-2 rounded-xl px-6 py-3 text-center cursor-pointer w-64 transition-colors"
              >
                <span className="text-2xl mr-2">{f.icon}</span>
                <span className="font-bold">{f.label}</span>
                <AnimatePresence>{step === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-xs text-slate-300 mt-1 overflow-hidden">{f.desc}</motion.div>}</AnimatePresence>
              </motion.div>
              {i < flow.length - 1 && <motion.div animate={{ color: step > i ? '#3b82f6' : '#475569' }} className="text-2xl my-1">↓</motion.div>}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S3 — WHY SEO IS IMPORTANT
// ══════════════════════════════════════════════════════════════════
export const ImportanceSection = () => {
  return (
    <motion.div className="flex flex-col h-full justify-center gap-6" {...fadeUp}>
      <h2 className="text-5xl font-black">Why SEO is <span className="text-blue-400">Important</span></h2>
      <div className="grid grid-cols-3 gap-4">
        {importanceStats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-2xl p-5 cursor-pointer transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{s.emoji}</span>
              <div className="text-3xl font-black text-blue-400">{s.stat}</div>
            </div>
            <div className="font-bold text-white mb-1">{s.label}</div>
            <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-slate-500 text-sm">↑ Hover cards to highlight | These statistics represent general industry research</p>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S4 — HISTORY OF SEO
// ══════════════════════════════════════════════════════════════════
export const HistorySection = () => {
  const [active, setActive] = useState(0);
  return (
    <motion.div className="flex flex-col h-full justify-center gap-6" {...fadeUp}>
      <h2 className="text-5xl font-black">History of <span className="text-blue-400">SEO</span></h2>
      <div className="relative flex items-center justify-between px-4">
        <div className="absolute left-8 right-8 h-1 bg-slate-700 top-4 z-0 rounded-full" />
        <motion.div className="absolute left-8 h-1 bg-blue-500 top-4 z-0 rounded-full" animate={{ width: `${(active / (historyItems.length - 1)) * 88}%` }} transition={{ duration: 0.5 }} />
        {historyItems.map((item, i) => (
          <button key={i} onClick={() => setActive(i)} className="z-10 flex flex-col items-center gap-2 group">
            <motion.div animate={{ backgroundColor: active >= i ? '#3b82f6' : '#1e293b', scale: active === i ? 1.4 : 1 }} className="w-5 h-5 rounded-full border-2 border-slate-600" />
            <span className={`text-xs font-bold whitespace-nowrap mt-1 ${active === i ? 'text-blue-400' : 'text-slate-500'}`}>{item.year}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
          className="bg-slate-800 border border-blue-900/50 rounded-2xl p-8 flex gap-6 items-start">
          <div className="text-6xl font-black text-blue-500/20 font-mono shrink-0">{String(active + 1).padStart(2, '0')}</div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">{historyItems[active].label}</h3>
            <p className="text-lg text-slate-300 leading-relaxed">{historyItems[active].detail}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 justify-center flex-wrap">
        {historyItems.map((h, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${active === i ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>{h.label}</button>
        ))}
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S5 — GOOGLE SEARCH ENGINE
// ══════════════════════════════════════════════════════════════════
export const GoogleSearchSection = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<null | { title: string; url: string; desc: string }[]>(null);
  const mockResults: Record<string, { title: string; url: string; desc: string }[]> = {
    default: [
      { title: 'What is SEO? — A Complete Beginner\'s Guide', url: 'searchenginejournal.com › seo-guide', desc: 'Learn everything about Search Engine Optimization — from basics to advanced techniques...' },
      { title: 'SEO Tips 2024: Rank Higher on Google', url: 'backlinko.com › seo-tips', desc: 'Actionable, expert-tested SEO tips that actually work in 2024. Step-by-step guide...' },
      { title: 'Google SEO Starter Guide', url: 'developers.google.com › search › docs', desc: 'Official Google documentation on how to help Google find, crawl, and index your site...' },
    ]
  };
  const search = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setResults(mockResults.default);
  };
  return (
    <motion.div className="flex flex-col h-full justify-center gap-5" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">Google <span className="text-blue-400">Search Engine</span></h2>
        <p className="text-slate-400 mt-1">Google processes 8.5 billion searches per day. It discovers, stores, and retrieves relevant web content.</p>
      </div>
      <div className="grid grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          {[
            { icon: '🌐', t: 'Discovery', d: 'Google crawls the web continuously to find new and updated pages.' },
            { icon: '🗃️', t: 'Storage', d: 'Discovered pages are processed and stored in a massive search index.' },
            { icon: '🧠', t: 'Processing', d: 'When a user searches, Google processes the query against its index instantly.' },
            { icon: '📋', t: 'Results', d: 'Google returns ranked results: webpages, images, videos, maps and more.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className="flex gap-3 items-start bg-slate-800 rounded-xl p-4 border border-slate-700">
              <span className="text-2xl">{item.icon}</span>
              <div><div className="font-bold text-white mb-0.5">{item.t}</div><div className="text-sm text-slate-400">{item.d}</div></div>
            </motion.div>
          ))}
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
          <div className="text-xs text-yellow-500 border border-yellow-700 bg-yellow-900/20 rounded px-3 py-1.5 mb-4 text-center">⚠️ Educational Simulation — Not connected to Google</div>
          <form onSubmit={search} className="flex gap-2 mb-4">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder='Try: "SEO tips", "digital marketing"...'
              className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-blue-500" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg font-bold text-sm flex items-center gap-1"><Search size={14} /> Search</button>
          </form>
          <AnimatePresence>
            {results && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="text-xs text-slate-500">About 2,430,000,000 results (0.48 seconds)</div>
                {results.map((r, i) => (
                  <div key={i} className="border-b border-slate-700 pb-3">
                    <div className="text-xs text-green-600 mb-0.5">{r.url}</div>
                    <div className="text-blue-400 font-semibold text-sm hover:underline cursor-pointer">{r.title}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{r.desc}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S6 — HOW SEARCH ENGINE WORKS
// ══════════════════════════════════════════════════════════════════
export const SearchEngineSection = () => {
  const steps = [
    { label: 'CRAWLING', icon: '🤖', def: 'What it is:', what: 'Automated bots (spiders) follow links across the web to discover pages.', example: 'Googlebot visits your homepage, finds a link to /blog, follows it, and records both pages.' },
    { label: 'INDEXING', icon: '🗃️', def: 'What it is:', what: 'Discovered pages are processed and stored in a massive searchable database.', example: 'Google stores page title, content, links, and metadata from your blog post.' },
    { label: 'RANKING', icon: '🏆', def: 'What it is:', what: 'The search engine determines which indexed pages best match a given query using 200+ signals.', example: 'For "best SEO tips", Google ranks pages based on relevance, authority, and user experience.' },
    { label: 'RESULTS', icon: '📋', def: 'What it is:', what: 'The ranked list of webpages, images, videos, and other content shown to the user.', example: 'The user sees 10 blue links + featured snippets, knowledge panels, and local results.' },
  ];
  const [active, setActive] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true); setActive(0);
    steps.forEach((_, i) => setTimeout(() => setActive(i), i * 800));
    setTimeout(() => setPlaying(false), steps.length * 800);
  };

  return (
    <motion.div className="flex flex-col h-full justify-center gap-6" {...fadeUp}>
      <h2 className="text-5xl font-black">How Search Engines <span className="text-blue-400">Work</span></h2>
      <div className="flex items-stretch gap-3">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3 flex-1">
            <motion.button onClick={() => setActive(active === i ? null : i)}
              animate={{ backgroundColor: active === i ? '#1e3a8a' : '#1e293b', borderColor: active === i ? '#3b82f6' : '#334155', scale: active === i ? 1.03 : 1 }}
              className="border-2 rounded-xl p-4 text-center w-full cursor-pointer">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-bold text-sm">{s.label}</div>
            </motion.button>
            {i < steps.length - 1 && <motion.div animate={{ color: active !== null && active > i ? '#3b82f6' : '#475569' }}><ArrowRight size={20} /></motion.div>}
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {active !== null && (
          <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-slate-800 border border-blue-800 rounded-2xl p-6 grid grid-cols-2 gap-6">
            <div>
              <div className="text-xs text-slate-500 uppercase mb-1">Definition</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">{steps[active].label}</h3>
              <p className="text-slate-300">{steps[active].what}</p>
            </div>
            <div className="bg-slate-700 rounded-xl p-4">
              <div className="text-xs text-slate-400 uppercase mb-2">Simple Example</div>
              <p className="text-slate-300 text-sm">{steps[active].example}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex gap-4">
        <button onClick={play} disabled={playing} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-6 py-2.5 rounded-full font-bold flex items-center gap-2 text-sm">
          <Play size={16} /> {playing ? 'Animating...' : 'Play Process Animation'}
        </button>
        <p className="text-slate-500 text-sm self-center">Or click any stage to explore it</p>
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S7 — GOOGLEBOT
// ══════════════════════════════════════════════════════════════════
export const CrawlingSection = () => {
  const [botPos, setBotPos] = useState(-1);
  const [discovered, setDiscovered] = useState<number[]>([]);
  const [crawling, setCrawling] = useState(false);
  const pages = [
    { name: 'Home', links: 'About, Blog' },
    { name: 'About', links: 'Home, Contact' },
    { name: 'Blog', links: 'Post 1, Post 2' },
    { name: 'Products', links: 'Item A, Item B' },
    { name: 'Contact', links: 'Home' },
  ];
  const startCrawl = () => {
    if (crawling) return;
    setCrawling(true); setDiscovered([]); setBotPos(-1);
    pages.forEach((_, i) => setTimeout(() => { setBotPos(i); setDiscovered(prev => [...prev, i]); }, i * 900));
    setTimeout(() => setCrawling(false), pages.length * 900 + 300);
  };
  const reset = () => { setBotPos(-1); setDiscovered([]); setCrawling(false); };
  return (
    <motion.div className="flex flex-col h-full justify-center gap-5" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">Googlebot <span className="text-blue-400">🤖</span></h2>
        <p className="text-slate-400 mt-1">Googlebot is Google's web crawler. It continuously discovers new and updated pages by following links across the web.</p>
      </div>
      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
        <div className="flex items-center gap-4 mb-5">
          <div className="bg-slate-700 rounded-xl px-5 py-4 text-center min-w-[100px]">
            <div className="text-3xl mb-1">🤖</div>
            <div className="text-xs font-bold">Googlebot</div>
            <div className="text-xs text-slate-400 mt-1">{crawling ? '🔄 Active' : botPos >= 0 ? '✅ Done' : '⏳ Ready'}</div>
          </div>
          <ArrowRight size={20} className="text-slate-500 shrink-0" />
          <div className="flex gap-3 flex-wrap flex-1">
            {pages.map((p, i) => (
              <motion.div key={i}
                animate={{ borderColor: botPos === i ? '#3b82f6' : discovered.includes(i) ? '#1d4ed8' : '#475569', backgroundColor: botPos === i ? '#1e3a5f' : discovered.includes(i) ? '#1e293b' : '#0f172a', scale: botPos === i ? 1.08 : 1 }}
                className="border-2 rounded-xl p-3 text-center min-w-[90px] transition-all">
                <div className="text-xl">{botPos === i ? '🤖' : discovered.includes(i) ? '✅' : '📄'}</div>
                <div className="text-xs font-bold mt-1">{p.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">Links: {p.links}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3">
            <button onClick={startCrawl} disabled={crawling} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-5 py-2 rounded-lg font-bold text-sm flex items-center gap-2"><Play size={14} /> Start Crawling</button>
            <button onClick={reset} className="bg-slate-700 hover:bg-slate-600 px-5 py-2 rounded-lg font-bold text-sm">Reset</button>
          </div>
          {discovered.length > 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-bold text-sm">✅ {discovered.length}/{pages.length} pages discovered</motion.div>}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-sm">
        {[
          { icon: '🔗', t: 'Follows Links', d: 'Bots discover new pages by following every hyperlink they find' },
          { icon: '⏱️', t: 'Crawl Budget', d: 'Google limits crawls per site — important pages should be easy to find' },
          { icon: '🚫', t: 'robots.txt', d: 'You can tell Googlebot which pages NOT to crawl using this file' },
        ].map((tip, i) => (
          <div key={i} className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex gap-3">
            <span className="text-xl">{tip.icon}</span>
            <div><div className="font-bold text-white mb-1">{tip.t}</div><div className="text-slate-400 text-xs">{tip.d}</div></div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S8 — INDEXING
// ══════════════════════════════════════════════════════════════════
export const IndexingSection = () => {
  const [phase, setPhase] = useState(0);
  const phases = [
    { label: 'Raw Webpage', icon: '📄', color: '#475569', info: 'Click "Index Pages" to start the indexing process.' },
    { label: 'Processing', icon: '⚙️', color: '#f59e0b', info: 'The crawler reads HTML, identifies title, headings, paragraphs, and links.' },
    { label: 'Extracting Data', icon: '🔬', color: '#f97316', info: 'Keywords, metadata, links, and structured data are extracted and analyzed.' },
    { label: 'Stored in Index', icon: '🗃️', color: '#22c55e', info: 'Page data is stored. The page can now appear in search results for relevant queries!' },
  ];
  const run = () => { setPhase(0); [0, 1, 2, 3].forEach(i => setTimeout(() => setPhase(i), i * 900)); };
  return (
    <motion.div className="flex flex-col h-full justify-center gap-6" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">Indexing <span className="text-blue-400">🗃️</span></h2>
        <p className="text-slate-400 mt-1">After crawling, Google processes and stores useful information about pages in its search index.</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        {phases.map((p, i) => (
          <div key={i} className="flex items-center gap-3">
            <motion.div animate={{ borderColor: phase >= i ? p.color : '#334155', opacity: phase >= i ? 1 : 0.35, scale: phase === i ? 1.08 : 1 }}
              className="border-2 rounded-2xl p-5 text-center w-36 cursor-pointer" onClick={() => setPhase(i)}>
              <div className="text-3xl mb-2">{p.icon}</div>
              <div className="text-xs font-bold">{p.label}</div>
            </motion.div>
            {i < phases.length - 1 && <motion.div animate={{ color: phase > i ? '#3b82f6' : '#475569' }}><ArrowRight size={20} /></motion.div>}
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={phase} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="bg-slate-800 rounded-xl p-5 border border-slate-700 max-w-lg mx-auto text-center text-slate-300">{phases[phase].info}</motion.div>
      </AnimatePresence>
      <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
        <div className="text-sm font-bold text-slate-400 mb-3">What gets stored in the index:</div>
        <div className="grid grid-cols-3 gap-3">
          {[{ icon: '📝', t: 'Page title & content' }, { icon: '🔗', t: 'Internal & external links' }, { icon: '🏷️', t: 'Meta description' }, { icon: '🖼️', t: 'Image descriptions' }, { icon: '📅', t: 'Last updated date' }, { icon: '⚡', t: 'Page speed signals' }].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm"><span>{item.icon}</span><span className="text-slate-300">{item.t}</span></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={run} className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold flex items-center gap-2"><Database size={18} /> Index Pages</button>
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S9 — RANKING
// ══════════════════════════════════════════════════════════════════
export const RankingSection = () => {
  type Result = { title: string; url: string; desc: string; score: number };
  const initial: Result[] = [
    { title: 'Shoe Buying Tips — General Guide', url: 'shoetips.com/buying-guide', desc: 'General advice on buying shoes for various activities.', score: 72 },
    { title: 'Best Running Shoes 2024 — Expert Reviews', url: 'runnersworld.com/best-shoes', desc: 'Expert-tested reviews of the top running shoes, updated monthly.', score: 97 },
    { title: 'Top Sports Shoes — All Categories', url: 'sportsgear.co/top-shoes', desc: 'Popular sports shoes across all categories, updated weekly.', score: 84 },
    { title: 'Athletic Footwear — Overview', url: 'fitnessinfo.net/footwear', desc: 'Overview of different athletic footwear types and features.', score: 61 },
  ];
  const [results, setResults] = useState(initial);
  const [ranked, setRanked] = useState(false);
  const rankResults = () => { setResults([...initial].sort((a, b) => b.score - a.score)); setRanked(true); };
  return (
    <motion.div className="flex flex-col h-full justify-center gap-4" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">Ranking <span className="text-blue-400">🏆</span></h2>
        <p className="text-slate-400 mt-1">Google determines which indexed pages best match a query using 200+ signals including relevance, authority, and page experience.</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-slate-800 rounded-xl px-4 py-2.5 border border-slate-700 flex items-center gap-3 flex-1 max-w-xs">
          <Search size={16} className="text-slate-400" /><span className="text-slate-300 text-sm">"best running shoes"</span>
        </div>
        <button onClick={rankResults} disabled={ranked} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2"><BarChart2 size={15} /> Rank Results</button>
        {ranked && <button onClick={() => { setResults(initial); setRanked(false); }} className="text-slate-400 hover:text-white text-sm underline">Reset</button>}
      </div>
      <div className="space-y-2">
        <AnimatePresence>
          {results.map((r, i) => (
            <motion.div key={r.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ layout: { duration: 0.5 } }}
              className={`bg-slate-800 border rounded-xl p-4 flex items-start gap-4 ${ranked && i === 0 ? 'border-yellow-500' : 'border-slate-700'}`}>
              <div className={`text-xl font-black w-8 text-center mt-0.5 ${ranked ? ['text-yellow-400', 'text-slate-400', 'text-amber-700', 'text-red-800'][i] : 'text-slate-600'}`}>{ranked ? i + 1 : '?'}</div>
              <div className="flex-1">
                <div className="font-bold text-blue-400 hover:underline cursor-pointer text-sm">{r.title}</div>
                <div className="text-xs text-green-600">{r.url}</div>
                <div className="text-sm text-slate-400 mt-1">{r.desc}</div>
              </div>
              {ranked && (
                <div className="text-right shrink-0">
                  <div className="text-xs text-slate-500">Relevance</div>
                  <div className={`font-bold text-lg ${r.score > 90 ? 'text-green-400' : r.score > 75 ? 'text-yellow-400' : 'text-red-400'}`}>{r.score}%</div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <p className="text-xs text-slate-500 italic">⚠️ Simplified educational illustration — real search ranking uses many signals and is more complex.</p>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S10 — SEO PHASES
// ══════════════════════════════════════════════════════════════════
export const SeoPhasesSection = () => {
  const [active, setActive] = useState(0);
  return (
    <motion.div className="flex flex-col h-full justify-center gap-5" {...fadeUp}>
      <h2 className="text-5xl font-black">SEO <span className="text-blue-400">Phases</span></h2>
      <p className="text-slate-400">SEO is a structured, repeating cycle — not a one-time fix. Click each phase to explore.</p>
      <div className="flex gap-3">
        {seoPhases.map((p, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`flex-1 flex flex-col items-center gap-2 py-4 rounded-xl border-2 font-bold text-sm transition-all ${active === i ? 'bg-blue-900/30 border-blue-500 text-blue-400' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}>
            <span className="text-2xl">{p.icon}</span>{p.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="bg-slate-800 border border-blue-900/40 rounded-2xl p-8 grid grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{seoPhases[active].icon}</span>
              <div>
                <div className="text-xs text-slate-500 uppercase">Phase {active + 1}</div>
                <h3 className="text-2xl font-bold text-blue-400">{seoPhases[active].label}</h3>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">{seoPhases[active].desc}</p>
          </div>
          <div className="bg-slate-700 rounded-xl p-5">
            <div className="text-xs text-slate-400 uppercase mb-3">Real-World Example</div>
            <p className="text-slate-300 text-sm italic leading-relaxed">{seoPhases[active].example}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-1.5 justify-center">
        {seoPhases.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className={`h-1.5 rounded-full transition-all ${active === i ? 'bg-blue-500 w-8' : 'bg-slate-700 w-4 hover:bg-slate-500'}`} />
        ))}
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S11 — HOW SEO WORKS (Continuous Cycle)
// ══════════════════════════════════════════════════════════════════
export const SeoProcessSection = () => {
  const [active, setActive] = useState(0);
  return (
    <motion.div className="flex flex-col h-full justify-center gap-5" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">How <span className="text-blue-400">SEO Works</span></h2>
        <p className="text-slate-400 mt-1">SEO is not a one-time activity — it's a continuous workflow. Click each step to learn more.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {seoProcessSteps.map((step, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold border-2 transition-all text-sm ${active === i ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'}`}>
            <span>{step.icon}</span> {step.label}
            {i < seoProcessSteps.length - 1 && <ArrowRight size={13} className="ml-1 text-slate-500" />}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="bg-slate-800 border border-blue-900/40 rounded-2xl p-8 flex gap-6 items-start">
          <div className="text-6xl">{seoProcessSteps[active].icon}</div>
          <div>
            <div className="text-xs text-slate-500 uppercase mb-1">Step {active + 1} of {seoProcessSteps.length}</div>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">{seoProcessSteps[active].label}</h3>
            <p className="text-lg text-slate-300 leading-relaxed">{seoProcessSteps[active].detail}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-1.5">
        {seoProcessSteps.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className={`h-1.5 rounded-full transition-all ${active === i ? 'bg-blue-500 w-8' : 'bg-slate-700 w-4 hover:bg-slate-500'}`} />
        ))}
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S12 — TYPES OF SEO TECHNIQUES
// ══════════════════════════════════════════════════════════════════
export const SeoTypesSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const colorMap: Record<string, string> = { blue: 'border-blue-500 bg-blue-900/20', purple: 'border-purple-500 bg-purple-900/20', green: 'border-green-500 bg-green-900/20' };
  const headerColor: Record<string, string> = { blue: 'text-blue-400', purple: 'text-purple-400', green: 'text-green-400' };
  return (
    <motion.div className="flex flex-col h-full justify-center gap-4" {...fadeUp}>
      <h2 className="text-5xl font-black">Types of SEO <span className="text-blue-400">Techniques</span></h2>
      <p className="text-slate-400">Click a card to explore, then click each item for a detailed explanation.</p>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(seoTypes).map(([key, type]) => (
          <div key={key}>
            <motion.button onClick={() => { setActive(active === key ? null : key); setActiveItem(null); }}
              whileHover={{ scale: 1.02 }}
              className={`w-full border-2 rounded-2xl p-5 text-left transition-all ${active === key ? colorMap[type.color] : 'border-slate-700 bg-slate-800 hover:border-slate-500'}`}>
              <div className="text-3xl mb-2">{type.icon}</div>
              <h3 className={`text-lg font-black mb-1 ${active === key ? headerColor[type.color] : 'text-white'}`}>{type.title}</h3>
              <p className="text-slate-400 text-xs">{type.description}</p>
            </motion.button>
            <AnimatePresence>
              {active === key && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden mt-2 space-y-1">
                  {type.items.map((item) => (
                    <button key={item.label} onClick={() => setActiveItem(activeItem === item.label ? null : item.label)}
                      className="w-full text-left bg-slate-800 hover:bg-slate-700 rounded-lg px-3 py-2 text-sm transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-300">{item.label}</span>
                        <span className="text-slate-500 text-xs">{activeItem === item.label ? '▲' : '▼'}</span>
                      </div>
                      <AnimatePresence>
                        {activeItem === item.label && (
                          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-slate-400 text-xs mt-1 overflow-hidden leading-relaxed">{item.detail}</motion.p>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S13 — SEO TACTICS
// ══════════════════════════════════════════════════════════════════
export const SeoTacticsSection = () => {
  const [activeTab, setActiveTab] = useState<'content' | 'technical' | 'authority'>('content');
  const [expandedTactic, setExpandedTactic] = useState<string | null>(null);
  const tabs = Object.entries(seoTactics);
  const colorMap: Record<string, string> = { blue: 'bg-blue-600 border-blue-500', green: 'bg-green-700 border-green-500', purple: 'bg-purple-700 border-purple-500' };
  const borderMap: Record<string, string> = { blue: 'border-blue-500', green: 'border-green-500', purple: 'border-purple-500' };

  return (
    <motion.div className="flex flex-col h-full justify-center gap-5" {...fadeUp}>
      <h2 className="text-5xl font-black">SEO <span className="text-blue-400">Tactics</span></h2>
      <p className="text-slate-400">Practical tactics grouped by category — click to filter, then expand each tactic.</p>
      <div className="flex gap-3">
        {tabs.map(([key, tab]) => (
          <button key={key} onClick={() => { setActiveTab(key as typeof activeTab); setExpandedTactic(null); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold border-2 transition-all text-sm ${activeTab === key ? colorMap[tab.color] + ' text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500'}`}>
            <span>{tab.icon}</span> {tab.label} Tactics
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-3">
          {seoTactics[activeTab].tactics.map((tactic, i) => (
            <motion.div key={tactic.t} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              className={`border-2 rounded-xl overflow-hidden ${expandedTactic === tactic.t ? borderMap[seoTactics[activeTab].color] : 'border-slate-700'}`}>
              <button onClick={() => setExpandedTactic(expandedTactic === tactic.t ? null : tactic.t)}
                className="w-full flex items-center justify-between px-5 py-4 bg-slate-800 hover:bg-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-blue-500" />
                  <span className="font-bold text-sm text-white">{tactic.t}</span>
                </div>
                <span className="text-slate-500 text-xs">{expandedTactic === tactic.t ? '▲' : '▼'}</span>
              </button>
              <AnimatePresence>
                {expandedTactic === tactic.t && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-slate-800 px-5 pb-4">
                    <p className="text-slate-400 text-sm leading-relaxed pt-2 border-t border-slate-700">{tactic.d}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <p className="text-xs text-slate-500 italic">⚠️ SEO tactics support visibility — they don't guarantee specific ranking positions.</p>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S14 — KEYWORDS & SEARCH INTENT
// ══════════════════════════════════════════════════════════════════
export const KeywordsSection = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<typeof keywordDatabase[string] | null>(null);
  const [notFound, setNotFound] = useState(false);
  const lookup = (e: React.FormEvent) => {
    e.preventDefault();
    const key = Object.keys(keywordDatabase).find(k => query.toLowerCase().includes(k));
    if (key) { setResult(keywordDatabase[key]); setNotFound(false); } else { setResult(null); setNotFound(true); }
  };
  const suggestions = Object.keys(keywordDatabase);

  return (
    <motion.div className="flex flex-col h-full justify-center gap-4" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">Keywords <span className="text-blue-400">& Search Intent</span></h2>
        <p className="text-slate-400 mt-1">Keywords are the words and phrases people type into search engines. Intent is why they search.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-2">
        {[{ t: 'Short-tail', ex: '"running shoes"', d: 'Broad, high volume, very competitive' }, { t: 'Long-tail', ex: '"best running shoes for beginners"', d: 'Specific, lower volume, easier to rank' }].map((k, i) => (
          <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <div className="font-bold text-blue-400 mb-1">{k.t} Keywords</div>
            <code className="text-yellow-400 text-sm block mb-1">{k.ex}</code>
            <p className="text-slate-400 text-xs">{k.d}</p>
          </div>
        ))}
      </div>
      <form onSubmit={lookup} className="flex gap-2">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder='Try: "running shoes", "computer engineering college", "backlinks"...'
          className="flex-1 bg-slate-800 border border-slate-600 focus:border-blue-500 rounded-xl px-5 py-3 text-white outline-none text-sm" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2"><Search size={16} /> Analyze</button>
      </form>
      <div className="flex gap-2 flex-wrap">
        {suggestions.map(s => (
          <button key={s} onClick={() => setQuery(s)} className="text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 px-3 py-1.5 rounded-full text-slate-300 transition-colors">{s}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {result && (
          <motion.div key={result.keyword} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-3 gap-3">
            {[
              { icon: '🔑', l: 'Keyword', v: result.keyword },
              { icon: '📏', l: 'Type', v: result.type },
              { icon: '🔗', l: 'Related Long-tail', v: result.related },
              { icon: '🎯', l: 'Search Intent', v: result.intent },
              { icon: '📊', l: 'Monthly Volume', v: result.volume },
              { icon: '💡', l: 'Content Idea', v: result.contentIdea },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                className="bg-slate-800 rounded-xl p-3 border border-slate-700">
                <div className="text-xs text-slate-500 mb-1">{item.icon} {item.l}</div>
                <div className="font-bold text-white text-sm">{item.v}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
        {notFound && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-slate-400 bg-slate-800 rounded-xl p-5 border border-slate-700">Try one of the suggested keywords above ↑</motion.div>}
      </AnimatePresence>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S15 — KEYWORD PLANNER
// ══════════════════════════════════════════════════════════════════
export const KeywordPlannerSection = () => {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<typeof keywordPlannerData[string] | null>(null);
  const generate = (e: React.FormEvent) => {
    e.preventDefault();
    const key = Object.keys(keywordPlannerData).find(k => topic.toLowerCase().includes(k));
    setResults(keywordPlannerData[key || 'digital marketing']);
  };

  return (
    <motion.div className="flex flex-col h-full justify-center gap-5" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">Google Keyword <span className="text-blue-400">Planner</span></h2>
        <p className="text-slate-400 mt-1">A tool to discover keyword ideas, explore search volumes, and plan content or ad campaigns.</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
          <div className="text-sm font-bold text-slate-400 mb-1">What Keyword Planner does:</div>
          <div className="space-y-3 mt-3">
            {[{ icon: '💡', t: 'Discover keyword ideas', d: 'Enter a topic and get related keyword suggestions' }, { icon: '📈', t: 'Explore search volumes', d: 'See how many people search for each keyword monthly' }, { icon: '⚔️', t: 'Compare opportunities', d: 'Understand keyword competition levels' }, { icon: '📋', t: 'Plan content & ads', d: 'Use data to decide what content to create or advertise' }].map((item, i) => (
              <div key={i} className="flex gap-3"><span className="text-xl">{item.icon}</span><div><div className="font-bold text-sm text-white">{item.t}</div><div className="text-xs text-slate-400">{item.d}</div></div></div>
            ))}
          </div>
        </div>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
          <div className="text-xs text-yellow-500 border border-yellow-800 bg-yellow-900/20 rounded px-2 py-1 mb-4 text-center">Educational Simulation — Not connected to Google</div>
          <form onSubmit={generate} className="flex gap-2 mb-4">
            <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Topic: Digital Marketing, SEO, Website..."
              className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 text-white" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg text-sm font-bold">Generate Ideas</button>
          </form>
          <AnimatePresence>
            {results && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1.5">
                <div className="grid grid-cols-4 text-xs text-slate-500 px-2 pb-1 border-b border-slate-700">
                  <span>Keyword</span><span>Volume</span><span>Competition</span><span>Trend</span>
                </div>
                {results.map((row, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                    className="grid grid-cols-4 bg-slate-700 rounded-lg px-3 py-2 text-sm items-center">
                    <span className="text-slate-300 font-medium">{row.kw}</span>
                    <span className="text-blue-400">{row.vol}/mo</span>
                    <span className="text-yellow-400">{row.comp}</span>
                    <span>{row.trend}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
            {!results && <div className="text-center text-slate-500 text-sm py-4">Enter a topic above and click Generate Ideas</div>}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S16 — SOCIAL MEDIA REACH
// ══════════════════════════════════════════════════════════════════
export const SocialMediaSection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [flowStep, setFlowStep] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const flowSteps = ['Content', 'Social Platforms', 'Audience', 'Shares / Engagement', 'Referral Visits'];
  const startFlow = () => {
    setPlaying(true); setFlowStep(0);
    flowSteps.forEach((_, i) => setTimeout(() => setFlowStep(i), i * 700));
    setTimeout(() => setPlaying(false), flowSteps.length * 700);
  };
  return (
    <motion.div className="flex flex-col h-full justify-center gap-5" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">Social Media <span className="text-blue-400">Reach</span></h2>
        <p className="text-slate-400 mt-1">Social media amplifies your content's reach, driving referral traffic and online presence.</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {socialPlatforms.map((p, i) => (
          <motion.button key={i} onClick={() => setSelected(selected === i ? null : i)} whileHover={{ scale: 1.04 }}
            className={`rounded-2xl p-5 text-center border-2 transition-all ${selected === i ? `bg-gradient-to-br ${p.color} border-transparent` : 'bg-slate-800 border-slate-700'}`}>
            <div className="text-3xl mb-2">{p.icon}</div>
            <div className="font-bold text-sm">{p.name}</div>
            <div className="text-xs text-slate-300 mt-1">{p.users} users</div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex items-center gap-4">
            <span className="text-3xl">{socialPlatforms[selected].icon}</span>
            <div><div className="font-bold text-white mb-1">{socialPlatforms[selected].name} — SEO Connection</div><div className="text-slate-400 text-sm">{socialPlatforms[selected].tip}</div></div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 flex flex-wrap items-center gap-2">
        {flowSteps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <motion.div animate={{ backgroundColor: flowStep >= i ? '#1d4ed8' : '#1e293b', scale: flowStep === i ? 1.08 : 1 }} className="px-4 py-2 rounded-lg font-bold text-sm border border-slate-600 whitespace-nowrap">{step}</motion.div>
            {i < flowSteps.length - 1 && <ArrowRight size={14} className={flowStep > i ? 'text-blue-400' : 'text-slate-600'} />}
          </div>
        ))}
        <button onClick={startFlow} disabled={playing} className="ml-auto bg-blue-600 disabled:opacity-50 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shrink-0">
          <Play size={14} />{playing ? 'Playing...' : 'Play Flow'}
        </button>
      </div>
      <p className="text-xs text-slate-500 italic">⚠️ Social media activity doesn't directly determine Google rankings — it drives referral traffic and brand awareness.</p>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S17 — VIDEO CREATION & SUBMISSION
// ══════════════════════════════════════════════════════════════════
export const VideoSeoSection = () => {
  const [pipeStep, setPipeStep] = useState<number | null>(null);
  const [cardActive, setCardActive] = useState<keyof typeof videoSeoTips | null>(null);
  const pipeline = ['Topic', 'Create Video', 'Edit', 'Title + Description', 'Thumbnail', 'Keywords / Tags', 'Upload', 'Promote'];
  return (
    <motion.div className="flex flex-col h-full justify-center gap-4" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">Video Creation <span className="text-blue-400">&amp; Submission</span></h2>
        <p className="text-slate-400 mt-1">YouTube is the world's 2nd largest search engine. Video SEO can massively amplify reach.</p>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        {pipeline.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <motion.button onClick={() => setPipeStep(pipeStep === i ? null : i)}
              animate={{ backgroundColor: pipeStep === i ? '#1e3a8a' : '#1e293b', borderColor: pipeStep === i ? '#3b82f6' : '#334155' }}
              className="border rounded-lg px-3 py-2 text-sm font-bold cursor-pointer text-white">{step}</motion.button>
            {i < pipeline.length - 1 && <ArrowRight size={14} className="text-slate-600" />}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
          <button onClick={() => setCardActive('thumbnail')} className={`w-full h-28 flex items-center justify-center gap-3 transition-all ${cardActive === 'thumbnail' ? 'bg-blue-900/40 ring-2 ring-blue-500 ring-inset' : 'bg-slate-700 hover:bg-slate-600'}`}>
            <span className="text-4xl">🎬</span><span className="text-slate-300 text-sm font-bold">Click: Optimize Thumbnail</span>
          </button>
          <div className="p-5 space-y-3">
            <button onClick={() => setCardActive('title')} className={`block w-full text-left font-bold text-base rounded-lg px-2 py-1.5 transition-all ${cardActive === 'title' ? 'bg-blue-900/40 text-blue-400 ring-1 ring-blue-500' : 'text-white hover:bg-slate-700'}`}>5 SEO Tips That DOUBLED My Traffic</button>
            <button onClick={() => setCardActive('description')} className={`block w-full text-left text-xs rounded-lg px-2 py-1.5 transition-all ${cardActive === 'description' ? 'bg-blue-900/40 text-blue-400 ring-1 ring-blue-500' : 'text-slate-400 hover:bg-slate-700'}`}>In this video, I share 5 actionable SEO strategies that helped me grow organic traffic by 120% in just 3 months...</button>
            <button onClick={() => setCardActive('tags')} className={`flex gap-2 flex-wrap rounded-lg px-2 py-1.5 w-full transition-all ${cardActive === 'tags' ? 'bg-blue-900/40 ring-1 ring-blue-500' : 'hover:bg-slate-700'}`}>
              {['#seo', '#digitalmarketing', '#googleranking', '#organictraffic'].map(t => <span key={t} className="text-xs bg-slate-700 px-2 py-1 rounded-full text-slate-300">{t}</span>)}
            </button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {cardActive ? (
            <motion.div key={cardActive} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
              className="bg-slate-800 border border-blue-800 rounded-2xl p-6 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-400 mb-3">{videoSeoTips[cardActive].title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{videoSeoTips[cardActive].tip}</p>
              <div className="bg-slate-700 rounded-lg px-4 py-3 text-xs text-slate-400 italic">{videoSeoTips[cardActive].example}</div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center bg-slate-800 border border-dashed border-slate-600 rounded-2xl p-8 text-center text-slate-500">
              <div><div className="text-3xl mb-3">👆</div><div className="text-sm">Click a video element or pipeline step to see optimization tips</div></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S18 — SEO MAINTENANCE
// ══════════════════════════════════════════════════════════════════
export const SeoMaintenanceSection = () => {
  const tasks = [
    { t: 'Update content regularly', d: 'Refresh old articles with new information, statistics, and examples to maintain rankings.' },
    { t: 'Fix broken links', d: 'Broken links hurt both user experience and SEO. Audit monthly using tools like Screaming Frog.' },
    { t: 'Check page speed', d: 'Use Google PageSpeed Insights to identify and fix performance bottlenecks affecting Core Web Vitals.' },
    { t: 'Check mobile usability', d: 'Test all pages on real mobile devices and Google\'s Mobile-Friendly Test tool regularly.' },
    { t: 'Review keyword rankings', d: 'Track positions for target keywords. Identify pages losing rankings for immediate action.' },
    { t: 'Update outdated pages', d: 'Pages with outdated statistics or information lose authority. Update dates and facts regularly.' },
    { t: 'Monitor performance', d: 'Review Google Search Console weekly for crawl errors, coverage issues, and performance drops.' },
  ];
  const [checked, setChecked] = useState<number[]>([]);
  const toggle = (i: number) => setChecked(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  const progress = (checked.length / tasks.length) * 100;
  return (
    <motion.div className="flex flex-col h-full justify-center gap-5" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">SEO <span className="text-blue-400">Maintenance</span></h2>
        <p className="text-slate-400 mt-1">SEO is ongoing — regular maintenance prevents ranking drops and keeps your site competitive.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {tasks.map((task, i) => (
          <motion.button key={i} onClick={() => toggle(i)} whileHover={{ scale: 1.01 }}
            className={`flex items-start gap-3 rounded-xl px-4 py-3 border-2 text-left transition-all ${checked.includes(i) ? 'bg-green-900/30 border-green-600' : 'bg-slate-800 border-slate-700 hover:border-slate-500'}`}>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${checked.includes(i) ? 'bg-green-500 border-green-500' : 'border-slate-500'}`}>
              {checked.includes(i) && <CheckCircle size={12} className="text-white" />}
            </div>
            <div>
              <span className={`font-semibold text-sm block ${checked.includes(i) ? 'line-through text-slate-500' : 'text-white'}`}>{task.t}</span>
              <span className="text-xs text-slate-400 mt-0.5 block">{task.d}</span>
            </div>
          </motion.button>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-1 bg-slate-700 rounded-full h-3">
          <motion.div animate={{ width: `${progress}%` }} className="bg-green-500 h-3 rounded-full" transition={{ duration: 0.4 }} />
        </div>
        <span className="text-slate-300 font-bold text-sm shrink-0">{checked.length} / {tasks.length} completed {checked.length === tasks.length ? '🎉' : ''}</span>
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S19 — PRACTICAL EXAMPLE
// ══════════════════════════════════════════════════════════════════
export const PracticalExampleSection = () => {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const steps = [
    { label: 'Search Query', icon: '🙋', desc: 'A student types "Computer Engineering college" into Google.' },
    { label: 'Relevant Keywords', icon: '🔑', desc: 'Google matches: "computer engineering", "college", "India", "admissions".' },
    { label: 'Useful Content', icon: '📄', desc: 'Google finds pages with relevant content: admission info, faculty, courses, rankings.' },
    { label: 'Optimized Website', icon: '⚙️', desc: 'A college website with proper SEO: clear titles, fast loading, and quality content ranks higher.' },
    { label: 'Search Discoverability', icon: '🎯', desc: 'The college appears in top results → more student inquiries → more admissions.' },
  ];
  const runDemo = () => {
    setRunning(true); setStep(-1);
    steps.forEach((_, i) => setTimeout(() => setStep(i), i * 900));
    setTimeout(() => setRunning(false), steps.length * 900);
  };
  return (
    <motion.div className="flex flex-col h-full justify-center gap-5" {...fadeUp}>
      <div>
        <h2 className="text-5xl font-black">Practical <span className="text-blue-400">Example</span></h2>
        <p className="text-slate-400 mt-1">Let's connect all SEO concepts using a real college website scenario.</p>
      </div>
      <div className="bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4 flex items-center gap-3">
        <Search size={16} className="text-slate-400" /><span className="text-slate-300">"Computer Engineering college"</span>
        <span className="ml-auto text-xs text-slate-500">User's search query</span>
      </div>
      <div className="flex flex-col gap-3">
        {steps.map((s, i) => (
          <motion.div key={i} animate={{ opacity: step >= i ? 1 : 0.3, scale: step === i ? 1.02 : 1, borderColor: step >= i ? '#3b82f6' : '#334155' }}
            className="border-2 rounded-xl p-4 flex items-start gap-4 bg-slate-800">
            <motion.div animate={{ backgroundColor: step >= i ? '#1d4ed8' : '#1e293b' }} className="rounded-full w-10 h-10 flex items-center justify-center text-xl shrink-0">{s.icon}</motion.div>
            <div>
              <div className={`font-bold text-sm ${step >= i ? 'text-blue-400' : 'text-slate-500'}`}>{s.label}</div>
              <div className="text-slate-400 text-xs mt-0.5">{s.desc}</div>
            </div>
            {step >= i && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ml-auto"><CheckCircle size={18} className="text-green-500" /></motion.div>}
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <button onClick={runDemo} disabled={running} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-8 py-3 rounded-full font-bold flex items-center gap-2">
          <Play size={18} />{running ? 'Running Demo...' : 'Run Full SEO Journey'}
        </button>
      </div>
    </motion.div>
  );
};

// ══════════════════════════════════════════════════════════════════
// S20 — CONCLUSION
// ══════════════════════════════════════════════════════════════════
export const ConclusionSection = () => {
  const [allShown, setAllShown] = useState(false);
  useEffect(() => { const t = setTimeout(() => setAllShown(true), 800); return () => clearTimeout(t); }, []);
  const topics = [
    'Introduction to SEO', 'How Search Engine Works', 'SEO Phases', 'History of SEO',
    'How SEO Works', 'Googlebot', 'Types of SEO Techniques', 'Keyword Planner',
    'Social Media Reach', 'Video Creation & Submission', 'SEO Maintenance', 'SEO Tactics', 'Google Search Engine'
  ];
  return (
    <motion.div className="flex flex-col h-full justify-center gap-6" {...fadeUp}>
      <div>
        <h2 className="text-4xl font-black text-blue-400">SEO → Visibility → Traffic → Online Presence</h2>
        <p className="text-slate-400 mt-2">Every syllabus topic covered in this presentation:</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {topics.map((topic, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
            className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 border border-slate-700">
            <CheckCircle size={14} className="text-green-500 shrink-0" />
            <span className="text-sm text-slate-300">{topic}</span>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {allShown && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="text-center">
            <div className="text-7xl font-black text-white tracking-tight">THANK YOU</div>
            <div className="text-blue-400 text-lg mt-2">Unit 4 — Digital Marketing | Search Engine Optimization</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
