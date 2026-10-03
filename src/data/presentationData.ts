// ─── History ────────────────────────────────────────────────────────────────
export const historyItems = [
  { year: "1990s", label: "Early Search Engines", detail: "The first search engines like Archie, Veronica, and AltaVista appeared. They used simple keyword matching — whoever stuffed keywords most won. There were no quality signals." },
  { year: "1998", label: "Keyword-Based Search", detail: "Marketers exploited keyword density. Pages would repeat words hundreds of times in hidden text. Directory submissions and link farms were the main SEO tactics." },
  { year: "1998", label: "Google Development", detail: "Larry Page and Sergey Brin launched Google using PageRank — ranking pages by the number and quality of backlinks. This was a revolution: not just what you say, but who vouches for you." },
  { year: "2011–2015", label: "Algorithm Improvements", detail: "Google's Panda (2011) penalised thin, low-quality content. Penguin (2012) targeted manipulative link-building. Hummingbird (2013) introduced semantic search and user intent understanding." },
  { year: "2015–2020", label: "Modern SEO", detail: "RankBrain (AI), mobile-first indexing, Core Web Vitals, voice search, and structured data transformed SEO from keyword stuffing to creating genuinely useful experiences." },
  { year: "Today", label: "User-Focused SEO", detail: "Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness) drives rankings. Helpful content, page experience, and semantic relevance matter most." },
];

// ─── SEO Phases ─────────────────────────────────────────────────────────────
export const seoPhases = [
  { label: "Research", icon: "🔍", desc: "Identify your target audience, analyze competitors, and discover the keywords people use to search for your product or service.", example: "Example: Finding that 'best laptop under 50000' gets 100K searches/month in India." },
  { label: "Planning", icon: "📋", desc: "Create a content strategy, site architecture plan, and optimization roadmap based on your research findings.", example: "Example: Planning a blog series on 'laptop buying guides' targeting identified keywords." },
  { label: "Implementation", icon: "⚙️", desc: "Execute the plan: create optimized content, fix technical issues, improve site speed, and build internal linking.", example: "Example: Publishing the laptop guide with proper H1, meta description, and image alt text." },
  { label: "Monitoring", icon: "📊", desc: "Track keyword rankings, organic traffic, click-through rates, and conversion metrics using Search Console and Analytics.", example: "Example: Noticing that 'laptop guide' ranks #8 with 3.2% CTR after 2 weeks." },
  { label: "Improvement", icon: "🔄", desc: "Update underperforming content, build more backlinks, fix technical issues, and refine based on data — then repeat.", example: "Example: Adding a comparison table to the guide boosted it from #8 to #3." },
];

// ─── SEO Process steps ───────────────────────────────────────────────────────
export const seoProcessSteps = [
  { label: "Keyword Research", icon: "🔍", detail: "Identify the exact words and phrases your audience types into search engines. Tools like Google Keyword Planner help find high-volume, low-competition keywords." },
  { label: "Content Creation", icon: "✍️", detail: "Create high-quality, valuable content that directly answers user queries. Content must be original, well-structured, and aligned with search intent." },
  { label: "On-Page Optimization", icon: "⚙️", detail: "Optimize title tags, meta descriptions, headings (H1-H6), URL structure, internal links, and image alt text to help search engines understand your content." },
  { label: "Promotion", icon: "📢", detail: "Share content via social media, email newsletters, and outreach to earn backlinks. Backlinks from reputable sites signal authority to Google." },
  { label: "Monitoring", icon: "📊", detail: "Track performance using Google Search Console and Analytics. Monitor keyword rankings, organic traffic, click-through rates, and bounce rates." },
  { label: "Improvement", icon: "🔄", detail: "SEO is iterative. Regularly update old content, fix broken links, improve page speed, and adapt to algorithm changes to maintain and grow rankings." },
];

// ─── SEO Types ───────────────────────────────────────────────────────────────
export const seoTypes = {
  onPage: {
    title: "On-Page SEO",
    color: "blue",
    icon: "📄",
    description: "Optimizations made directly on your webpage to improve relevance and readability for both users and search engines.",
    items: [
      { label: "Keywords", detail: "Include primary and secondary keywords naturally in content, titles, headings, and URLs." },
      { label: "Title Tags", detail: "Each page needs a unique, keyword-rich title tag under 60 characters. It's the first thing users see in results." },
      { label: "Headings (H1–H6)", detail: "Structure content with headings. H1 is used once per page for the main topic. H2–H6 organize sub-sections." },
      { label: "Content Quality", detail: "Create original, helpful, and in-depth content that fully answers the user's query better than competitors." },
      { label: "Image Alt Text", detail: "Describe images in alt attributes so search engines and screen readers can understand them." },
      { label: "Internal Links", detail: "Link to relevant pages within your site to help users and bots navigate and discover more content." },
    ]
  },
  offPage: {
    title: "Off-Page SEO",
    color: "purple",
    icon: "🌐",
    description: "Actions taken outside your website that signal authority, trust, and relevance to search engines.",
    items: [
      { label: "Backlinks", detail: "Links from other reputable websites to yours. They are one of Google's top ranking signals. Quality matters more than quantity." },
      { label: "Content Sharing", detail: "Content shared on social platforms drives referral traffic and increases brand visibility, indirectly supporting SEO." },
      { label: "Online Promotion", detail: "Guest posts, press releases, and influencer mentions expand your reach and can earn valuable backlinks." },
      { label: "Brand Visibility", detail: "Even unlinked brand mentions across the web can signal authority and relevance to search engines over time." },
      { label: "Local Citations", detail: "Listings in directories like Google Business Profile, Yelp, and Justdial boost local SEO significantly." },
    ]
  },
  technical: {
    title: "Technical SEO",
    color: "green",
    icon: "🛠️",
    description: "Backend and infrastructure optimizations that help search engines efficiently crawl, index, and understand your site.",
    items: [
      { label: "Website Speed", detail: "Faster pages rank better. Google's Core Web Vitals measure LCP, INP, and CLS. Target under 3s load time." },
      { label: "Mobile-Friendly Design", detail: "Google uses mobile-first indexing. Your site must work perfectly on phones — this is now a baseline requirement." },
      { label: "Security (HTTPS)", detail: "SSL certificates are a ranking signal. Users and browsers distrust HTTP sites. Always use HTTPS." },
      { label: "Crawlable Structure", detail: "A logical URL structure, XML sitemap, and robots.txt help bots crawl and index your site efficiently." },
      { label: "Site Organization", detail: "Flat site architecture (max 3 clicks from homepage to any page) helps bots and users find content easily." },
    ]
  }
};

// ─── SEO Tactics ─────────────────────────────────────────────────────────────
export const seoTactics = {
  content: {
    label: "Content",
    icon: "✍️",
    color: "blue",
    tactics: [
      { t: "Use relevant keywords naturally", d: "Weave keywords into content without forcing them. Write for humans first, search engines second." },
      { t: "Create useful original content", d: "Content that answers real questions, teaches skills, or solves problems earns shares and links organically." },
      { t: "Write clear titles and headings", d: "Titles should tell users exactly what they'll learn. Headings help both users scan and bots understand structure." },
      { t: "Update outdated content", d: "Refreshing old articles with current information can dramatically improve rankings — often faster than new content." },
    ]
  },
  technical: {
    label: "Technical",
    icon: "⚙️",
    color: "green",
    tactics: [
      { t: "Optimize images", d: "Compress images, use descriptive file names (not img001.jpg), and always add alt text." },
      { t: "Improve page speed", d: "Use lazy loading, minimize JavaScript, enable browser caching, and use a CDN for fast global delivery." },
      { t: "Make websites mobile-friendly", d: "Test with Google's Mobile-Friendly Test tool. Use responsive design — avoid fixed pixel widths." },
      { t: "Use descriptive links", d: "Anchor text like 'SEO guide' is more valuable than 'click here'. It tells bots what the linked page is about." },
    ]
  },
  authority: {
    label: "Authority",
    icon: "🏆",
    color: "purple",
    tactics: [
      { t: "Build useful backlinks", d: "Earn links from relevant, high-authority sites through great content, guest posting, and genuine outreach." },
      { t: "Share content on social media", d: "While not a direct ranking factor, social sharing increases visibility, driving more traffic and potential backlinks." },
      { t: "Engage with your audience", d: "Respond to comments, participate in forums, and build a community. Engaged audiences return and share." },
      { t: "Monitor performance", d: "Regular audits using Search Console reveal opportunities and problems before they become ranking issues." },
    ]
  }
};

// ─── Keywords DB ─────────────────────────────────────────────────────────────
export const keywordDatabase: Record<string, {
  keyword: string; type: string; related: string; intent: string; contentIdea: string; difficulty: string; volume: string
}> = {
  "running shoes": { keyword: "running shoes", type: "Short-tail", related: "best running shoes for beginners", intent: "Commercial / Product Research", contentIdea: "Top 10 Running Shoes of 2024 — Reviewed by Athletes", difficulty: "High", volume: "1M+/mo" },
  "seo tips": { keyword: "SEO tips", type: "Short-tail", related: "SEO tips for small business 2024", intent: "Informational / Educational", contentIdea: "15 Actionable SEO Tips to Grow Organic Traffic", difficulty: "Medium", volume: "90K/mo" },
  "digital marketing": { keyword: "digital marketing", type: "Short-tail", related: "digital marketing for beginners course", intent: "Informational / Career Research", contentIdea: "The Complete Digital Marketing Guide for 2024", difficulty: "Very High", volume: "5M+/mo" },
  "website traffic": { keyword: "website traffic", type: "Short-tail", related: "how to increase website traffic free", intent: "Informational / Problem-Solving", contentIdea: "12 Proven Strategies to Drive More Website Traffic", difficulty: "High", volume: "200K/mo" },
  "backlinks": { keyword: "backlinks", type: "Short-tail", related: "how to build backlinks for free", intent: "Informational / Tactical", contentIdea: "The Ultimate Free Backlink Building Guide 2024", difficulty: "High", volume: "150K/mo" },
  "best laptop under 50000": { keyword: "best laptop under 50000", type: "Long-tail", related: "best laptop under 50000 for students", intent: "Commercial / Purchase Research", contentIdea: "Best Laptops Under ₹50,000 in India — 2024 Buyer's Guide", difficulty: "Medium", volume: "300K/mo" },
  "computer engineering college": { keyword: "computer engineering college", type: "Long-tail", related: "top computer engineering colleges in India", intent: "Navigational / Research", contentIdea: "Top 50 Computer Engineering Colleges in India — Rankings 2024", difficulty: "Low", volume: "40K/mo" },
};

// ─── Keyword Planner Mock Data ────────────────────────────────────────────────
export const keywordPlannerData: Record<string, Array<{ kw: string; vol: string; comp: string; trend: string }>> = {
  "digital marketing": [
    { kw: "SEO", vol: "1M+", comp: "High", trend: "📈" },
    { kw: "SEO tools", vol: "90K", comp: "Medium", trend: "📈" },
    { kw: "digital marketing course", vol: "500K", comp: "High", trend: "📈" },
    { kw: "search engine optimization", vol: "2M+", comp: "Very High", trend: "➡️" },
    { kw: "content marketing", vol: "200K", comp: "Medium", trend: "📈" },
    { kw: "social media marketing", vol: "800K", comp: "High", trend: "➡️" },
  ],
  "seo": [
    { kw: "SEO tips", vol: "90K", comp: "Medium", trend: "📈" },
    { kw: "SEO for beginners", vol: "150K", comp: "Low", trend: "📈" },
    { kw: "on-page SEO", vol: "200K", comp: "Medium", trend: "📈" },
    { kw: "SEO audit", vol: "110K", comp: "Medium", trend: "➡️" },
    { kw: "technical SEO", vol: "80K", comp: "Low", trend: "📈" },
    { kw: "local SEO", vol: "300K", comp: "Medium", trend: "📈" },
  ],
  "website": [
    { kw: "website traffic", vol: "200K", comp: "High", trend: "➡️" },
    { kw: "website speed test", vol: "1M+", comp: "Low", trend: "📈" },
    { kw: "how to rank website", vol: "50K", comp: "Medium", trend: "📈" },
    { kw: "website optimization", vol: "70K", comp: "Medium", trend: "📈" },
    { kw: "website design", vol: "3M+", comp: "High", trend: "➡️" },
    { kw: "free website builder", vol: "5M+", comp: "High", trend: "➡️" },
  ],
};

// ─── Social Platforms ─────────────────────────────────────────────────────────
export const socialPlatforms = [
  { name: "Instagram", icon: "📸", color: "from-pink-600 to-purple-600", users: "2B+", tip: "Great for visual content, Reels, and Stories. Use hashtags for organic discovery. High engagement rates drive brand awareness." },
  { name: "YouTube", icon: "▶️", color: "from-red-600 to-red-800", users: "2.7B+", tip: "World's 2nd largest search engine. Video SEO (titles, descriptions, tags) drives referral traffic and builds long-term authority." },
  { name: "Facebook", icon: "👥", color: "from-blue-600 to-blue-800", users: "3B+", tip: "Groups and Pages drive community engagement. Content shared on Facebook generates referral traffic and potential backlinks." },
  { name: "WhatsApp", icon: "💬", color: "from-green-600 to-green-800", users: "2.4B+", tip: "Excellent for direct sharing of content links within communities and groups. Drives immediate referral traffic spikes." },
];

// ─── Video SEO tips ────────────────────────────────────────────────────────────
export const videoSeoTips: Record<string, { title: string; tip: string; example: string }> = {
  thumbnail: { title: "Thumbnail Optimization", tip: "Use high-contrast images with bold text overlays. Human faces with expressions drive higher CTR. Keep branding consistent across all videos.", example: "Example: Bright background + clear subject + 3–4 word text overlay" },
  title: { title: "Video Title", tip: "Put your main keyword near the beginning. Use numbers or power words. Keep it under 60 characters. Match what your audience is actually searching for.", example: "Example: '5 SEO Tips That DOUBLED My Traffic in 30 Days'" },
  description: { title: "Video Description", tip: "Include keywords naturally in the first 2 sentences. Add timestamps, links, and a clear call-to-action. Aim for 200+ words total to help YouTube understand your content.", example: "Example: 'In this video, we cover 5 SEO tips... | Timestamps: 0:00 Intro | 1:30 Tip #1...'" },
  tags: { title: "Tags & Categories", tip: "Start with your exact keyword tag, then add broad and specific variations. Use 10–15 tags. Select the most relevant category (e.g. Education, Science & Technology).", example: "Example tags: #SEO #SearchEngineOptimization #SEOTips #DigitalMarketing" },
};

// ─── Importance stats ─────────────────────────────────────────────────────────
export const importanceStats = [
  { emoji: "🔍", label: "Visibility", stat: "68%", desc: "of online experiences begin with a search engine query" },
  { emoji: "📈", label: "Organic Traffic", stat: "53%", desc: "of all website traffic comes from organic search results" },
  { emoji: "🎯", label: "Lead Quality", stat: "14.6%", desc: "close rate for SEO leads vs 1.7% for outbound marketing" },
  { emoji: "💰", label: "Long-term ROI", stat: "5.66×", desc: "higher ROI from SEO compared to paid advertising on average" },
  { emoji: "🌐", label: "Scale", stat: "8.5B", desc: "searches happen on Google every single day worldwide" },
  { emoji: "🏢", label: "Business", stat: "75%", desc: "of users never scroll past the first page of search results" },
];
