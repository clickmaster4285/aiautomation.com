// content/solution-index.ts
// Service meta index — powers sitemap, search, category listings, and SEO metadata.
// Full render content lives in ./services/<slug>.ts (ServiceContent format).

export interface ServicePage {
  url: string;
  title: string;
  description: string;
  /** Shorter SEO description (≤155 chars); falls back to description. */
  metaDescription?: string;
  primaryKeyword: string;
  keywords: string[];
  category: string;
  internalLinks: string[];
  schemas: string[];
  sections: string[];
  faqs: string[];
  summary: string;
  lastModified: string;
  filePath: string;
}

export const SERVICE_PAGES: ServicePage[] = [
  // ── AI Strategy & Advisory ──
  {
    url: '/services/ai-strategy-advisory/',
    title: 'AI Strategy & Advisory | Strategy That Ships | Clickmasters',
    description:
      'Clickmasters provides AI strategy and advisory that ends in working systems, not slide decks — opportunity audits, roadmaps, tool selection, and implementation by the same team that builds.',
    metaDescription:
      'AI strategy that ends in working systems, not slide decks: opportunity audits, roadmaps, tool selection and implementation by the team that builds.',
    primaryKeyword:
      'ai strategy advisory (cluster: 49 keywords, incl. "ai consulting services" 5K bucket at $40, "ai consulting companies/firms" 5K at $39, "ai consultant" 5K at $26)',
    keywords: [
      'ai strategy advisory',
      'ai consulting services',
      'ai consulting companies/firms',
      'ai consultant',
    ],
    category: 'ai-strategy-development',
    internalLinks: [
      'AI Automation Agency pillar',
      'Custom AI Development',
      'AI Integration Services',
      'Business Process Automation',
      'Free Automation Audit',
    ],
    schemas: ['Service, FAQPage, BreadcrumbList'],
    sections: [
      'The Problem with Most AI Consulting',
      'What Our AI Strategy Covers',
      'How Engagements Work',
      'Who This Is For',
      'What It Costs',
      'Frequently Asked Questions',
    ],
    faqs: [
      'What do AI strategy and advisory services include?',
      'How is Clickmasters different from a strategy firm?',
      'Do we need AI strategy or just an automation project?',
      'What does AI strategy advisory cost?',
      'Can you work with our existing IT team or agency?',
    ],
    summary:
      'The standard failure mode is well known by now: an engagement produces a strategy deck — ambitious, expensive, framework-laden — and then nothing ships. The gap between "AI strategy" and "AI running in production" is where most corporate AI initiatives die.',
    lastModified: '2026-07-10T18:43:15',
    filePath: 'ai-consulting.md',
  },

  // ── AI Lead Generation ──
  {
    url: '/services/ai-lead-generation/',
    title: 'AI Lead Generation Automation | Clickmasters',
    description:
      'Clickmasters builds AI lead generation systems — instant response, conversational qualification, enrichment, scoring, and nurture — that converts leads your team is currently losing.',
    metaDescription:
      'AI lead generation that responds instantly, then qualifies, enriches, scores and nurtures every lead, so your team stops losing deals to slow follow-up.',
    primaryKeyword:
      'ai lead generation (cluster: 190 keywords, incl. "lead generator" 50K bucket, "ai lead generation" 5K bucket, $27–38 CPCs)',
    keywords: ['ai lead generation', 'lead generator', 'ai lead generation'],
    category: 'ai-agents-and-assistants',
    internalLinks: [
      'AI Automation Agency pillar',
      'AI Sales Automation',
      'AI Chatbots',
      'AI Voice Agents',
      'CRM Automation',
      'Free Automation Audit',
    ],
    schemas: ['Service, FAQPage, BreadcrumbList'],
    sections: [
      'The Uncomfortable Math of Lead Response',
      'What We Build for Lead Generation',
      'What This Replaces',
      'How It Fits Your Stack',
      'Where the Return Shows Up',
      'Why Clickmasters for Lead Generation',
      'Frequently Asked Questions',
    ],
    faqs: [
      'What is AI lead generation?',
      'Does this generate new leads or just handle existing ones?',
      "Will leads know they're talking to an AI?",
      'How is this different from a chatbot?',
      'What does it cost?',
    ],
    summary:
      'Here is the pattern we see in almost every audit: a business spends real money making the phone ring and the forms fill — ads, SEO, referral programs — and then loses a large share of those hard-won leads to slow response and inconsistent follow-up.',
    lastModified: '2026-07-10T18:43:15',
    filePath: 'ai-lead-generation.md',
  },

  // ── AI Reporting Automation ──
  {
    url: '/services/ai-reporting-automation/',
    title: 'AI Reporting Automation | Reports That Build Themselves | Clickmasters',
    description:
      'Clickmasters builds reporting automation — recurring reports and live dashboards assembled from your systems automatically, with AI summaries of what changed and why it matters.',
    metaDescription:
      'Reporting automation that builds recurring reports and live dashboards from your systems, with AI summaries of what changed and why it matters.',
    primaryKeyword:
      'reporting automation (cluster: 15 direct keywords, "reporting automation" ~500 bucket at up to $200 CPC small cluster, strong commercial intent; validate before prioritizing)',
    keywords: ['reporting automation', 'ai reporting automation'],
    category: 'core-automation',
    internalLinks: [
      'AI Automation Agency pillar',
      'Document & Data Automation',
      'Business Process Automation',
      'CRM Automation',
      'Free Automation Audit',
    ],
    schemas: ['Service, FAQPage, BreadcrumbList'],
    sections: [
      'The Hidden Tax of Manual Reporting',
      'What We Build for Reporting',
      'Accuracy, Honestly Handled',
      'What It Replaces',
      'Frequently Asked Questions',
    ],
    faqs: [
      'What is reporting automation?',
      'Which systems can it report from?',
      'Are the AI summaries reliable?',
      'How is this different from BI tools like Power BI or Looker?',
      'What does it cost?',
    ],
    summary:
      'Manual reporting has a visible cost and two hidden ones. The visible cost is the hours: exporting from three systems, pasting into the spreadsheet, fixing what broke since last week, formatting, distributing.',
    lastModified: '2026-07-10T18:43:15',
    filePath: 'ai-reporting-automation.md',
  },

  // ── Custom AI Development ──
  {
    url: '/services/custom-ai-development/',
    title: 'Custom AI Development | Clickmasters',
    description:
      'Clickmasters builds custom AI solutions on proven models — AI applications, agents, and integrations designed for your business. Honest scoping: we\'ll tell you when integration beats development.',
    metaDescription:
      'Custom AI development on proven models: AI apps, agents and integrations built for your business, with honest scoping on when integration beats building.',
    primaryKeyword:
      'ai development services (cluster: 291 keywords, incl. "ai development companies" 5K bucket at $77 CPC, "ai development services" 5K at $75)',
    keywords: [
      'ai development services',
      'custom ai development',
      'ai development companies',
    ],
    category: 'ai-strategy-development',
    internalLinks: [
      'AI Automation Agency pillar',
      'AI Integration Services',
      'AI Agent Development',
      'AI Strategy & Advisory',
      'Free Automation Audit',
    ],
    schemas: ['Service, FAQPage, BreadcrumbList'],
    sections: [
      'What "Custom AI Development" Should Mean in 2026',
      'What We Build for Custom AI',
      'Build vs. Integrate: The Honest Decision',
      'How We Work on Custom AI',
      'Security and Data Control',
      'What It Costs',
      'Frequently Asked Questions',
    ],
    faqs: [
      'What are custom AI development services?',
      'Do we need our own AI model?',
      'How much does custom AI development cost?',
      'How long does a build take?',
      'Who owns what you build?',
    ],
    summary:
      'A few years ago, custom AI meant training your own models — expensive, slow, and usually disappointing. Today the frontier models are extraordinarily capable, and the real engineering challenge has moved.',
    lastModified: '2026-07-10T18:43:15',
    filePath: 'custom-ai-development.md',
  },
];

// ── Helpers ──
export function getServiceByUrl(url: string): ServicePage | undefined {
  return SERVICE_PAGES.find((page) => page.url === url);
}

export function getServicesByCategory(category: string): ServicePage[] {
  return SERVICE_PAGES.filter((page) => page.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(SERVICE_PAGES.map((page) => page.category)));
}

export function getServiceRoutes(): string[] {
  return SERVICE_PAGES.map((page) => page.url);
}

export function searchServices(query: string): ServicePage[] {
  const q = query.toLowerCase();
  return SERVICE_PAGES.filter(
    (page) =>
      page.title.toLowerCase().includes(q) ||
      page.description.toLowerCase().includes(q) ||
      page.primaryKeyword.toLowerCase().includes(q) ||
      page.keywords.some((k) => k.toLowerCase().includes(q)) ||
      page.sections.some((s) => s.toLowerCase().includes(q)) ||
      page.faqs.some((f) => f.toLowerCase().includes(q))
  );
}

export default SERVICE_PAGES;