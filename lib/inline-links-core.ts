// lib/inline-links-core.ts
// Contextual (in-text) internal links: the rules and the matching engine.
// Client-safe: depends only on lib/link-graph, and is told which solution pages exist (livePaths) by the caller.
// Server code uses lib/inline-links.ts; hand-built client pages use components/solutions/InlineLinks.tsx.
//
// createLinker(url, livePaths).link(text) turns the first natural mention of a related topic into a
// markdown link, [anchor](/path), rendered by <RichText>.
//
// Targets follow the site hierarchy (lib/link-graph.ts):
//   On /solutions/<topic>[/<child>]:
//     own topic        → parent hub (/solutions/<topic>) from a child page; the /services page from the hub
//     another topic    → same-industry sibling (/solutions/<topic>/for-<segment>)
//                        or same-platform sibling (/solutions/<topic>/with-<platform>), else its hub
//     platform name    → /solutions/<own topic>/with-<platform>, else /platforms/<slug>
//   On /platforms/<slug>:
//     a topic          → /solutions/<topic>/with-<this platform>, else /solutions/<topic>
//     another platform → /platforms/<slug>
//   Everywhere:
//     industry name    → /industries/<slug> (or the industry product page where no industry page exists)
//     product/service phrase (PAGE_PHRASES, e.g. "lead scoring", "OCR") → that /products or /services page
//     "free audit"     → /free-automation-audit;  "AI automation agency" → /
//
// Rules: one link per target and per concept per page, at most MAX_PER_PARAGRAPH per paragraph,
// at most MAX_LINKS per page, never inside **bold** titles or existing links, anchor = the words already in the copy.

import { TOPICS, SEGMENTS, PLATFORMS } from '@/lib/link-graph';

const MAX_LINKS = 16;
const MAX_PER_PARAGRAPH = 2;

/** Phrases that mean each topic, longest/most specific first. */
const TOPIC_PHRASES: Record<string, string[]> = {
  'ai-agents': ['AI agent development', 'AI agents', 'AI agent'],
  'ai-chatbots': ['AI chatbots', 'AI chatbot', 'chatbots', 'chatbot'],
  'ai-voice-agents': ['AI voice agents', 'AI voice agent', 'voice agents', 'voice agent', 'phone calls'],
  'ai-workflow-automation': ['AI workflow automation', 'workflow automation', 'automated workflows'],
  'business-process-automation': ['business process automation', 'process automation'],
  'lead-generation-automation': ['lead generation', 'lead capture', 'lead intake', 'lead qualification', 'lead response'],
  'sales-automation': ['sales automation', 'sales follow-up', 'sales pipeline', 'sales team'],
  'crm-automation': ['CRM automation', 'CRM updates', 'CRM records', 'CRM'],
  'marketing-automation': ['marketing automation', 'nurture sequences', 'email campaigns', 'marketing campaigns'],
  'document-automation': ['document automation', 'document processing', 'document collection', 'paperwork', 'documents'],
  'invoice-automation': ['invoice automation', 'invoice processing', 'invoicing', 'invoices', 'billing'],
  'reporting-automation': ['reporting automation', 'reporting', 'reports', 'dashboards'],
  'appointment-booking-automation': ['appointment booking', 'appointment scheduling', 'appointments', 'bookings'],
  'customer-support-automation': ['customer support', 'support tickets', 'customer service', 'status updates'],
};

const SEGMENT_PHRASES: Record<string, string[]> = {
  'accounting-firms': ['accounting firms', 'accounting firm', 'accounting practices'],
  ecommerce: ['e-commerce', 'ecommerce', 'online stores'],
  education: ['schools', 'colleges', 'education'],
  healthcare: ['healthcare', 'medical practices', 'clinics'],
  'law-firms': ['law firms', 'law firm', 'legal practices'],
  logistics: ['logistics', 'freight'],
  'real-estate': ['real estate', 'brokerages'],
  retail: ['retail', 'retailers'],
  saas: ['SaaS'],
  insurance: ['insurance agencies', 'insurance agency', 'insurers'],
  restaurants: ['restaurants', 'hospitality'],
  construction: ['construction companies', 'contractors', 'construction'],
  manufacturing: ['manufacturers', 'manufacturing'],
};

const PLATFORM_PHRASES: Record<string, string[]> = {
  zapier: ['Zapier'],
  make: ['Make.com'],
  n8n: ['n8n'],
  hubspot: ['HubSpot'],
  gohighlevel: ['GoHighLevel', 'HighLevel'],
  airtable: ['Airtable'],
  salesforce: ['Salesforce'],
};

const PR = '/products';
/**
 * Product and service pages with specific anchor phrases (most specific first). Phrases that already mean a
 * solution topic (TOPIC_PHRASES) are left out so topics keep linking to their hubs.
 */
const PAGE_PHRASES: [string, string[]][] = [
  [`${PR}/ai-agents-platforms/multi-agent-systems`, ['multi-agent systems', 'multi-agent', 'multiple agents']],
  [`${PR}/ai-agents-platforms/autonomous-ai-agents`, ['autonomous AI agents', 'autonomous agents']],
  [`${PR}/ai-agents-platforms/enterprise-ai-agents`, ['enterprise AI agents']],
  [`${PR}/ai-agents-platforms/ai-agent-platform`, ['agent platform']],
  [`${PR}/ai-customer-support/ai-chatbot-software`, ['chatbot software', 'website chat', 'chat widget']],
  [`${PR}/ai-customer-support/ai-customer-service-automation`, ['customer service automation', 'support automation']],
  [`${PR}/ai-customer-support/ai-customer-support-software`, ['helpdesk', 'help desk', 'ticketing']],
  [`${PR}/ai-customer-support/ai-virtual-assistant`, ['virtual assistant', 'virtual assistants']],
  [`${PR}/ai-customer-support/ai-voice-agent`, ['voice AI', 'inbound calls', 'phone line']],
  [`${PR}/ai-document-data-intelligence/ai-contract-analysis`, ['contract review', 'contract analysis']],
  [`${PR}/ai-document-data-intelligence/ai-data-extraction-software`, ['data extraction', 'extract data', 'extracts data']],
  [`${PR}/ai-document-data-intelligence/ai-ocr-software`, ['OCR', 'scanned documents', 'scanned PDFs']],
  [`${PR}/ai-document-data-intelligence/intelligent-document-processing`, ['intelligent document processing']],
  [`${PR}/ai-ecommerce-automation/ai-order-processing-automation`, ['order processing', 'order fulfillment', 'fulfillment']],
  [`${PR}/ai-ecommerce-automation/ai-inventory-management-software`, ['inventory management', 'stock levels', 'inventory']],
  [`${PR}/ai-ecommerce-automation/ai-product-recommendation-software`, ['product recommendations']],
  [`${PR}/ai-ecommerce-automation/ai-shopping-assistant`, ['shopping assistant']],
  [`${PR}/ai-finance-accounting/ai-accounting-automation`, ['accounting automation', 'accounts payable']],
  [`${PR}/ai-finance-accounting/ai-bookkeeping-software`, ['bookkeeping', 'reconciliation']],
  [`${PR}/ai-finance-accounting/ai-financial-automation`, ['financial reporting', 'month-end close', 'month-end']],
  [`${PR}/ai-finance-accounting/ai-invoice-processing-software`, ['purchase orders', 'invoice matching']],
  [`${PR}/ai-hr-recruitment/ai-interview-scheduling-software`, ['interview scheduling']],
  [`${PR}/ai-marketing-automation/ai-email-automation`, ['email automation', 'email sequences', 'follow-up emails']],
  [`${PR}/ai-marketing-automation/ai-campaign-management-software`, ['campaign management', 'campaign performance']],
  [`${PR}/ai-marketing-automation/ai-social-media-automation`, ['social media']],
  [`${PR}/ai-marketing-automation/ai-seo-automation-tools`, ['SEO']],
  [`${PR}/ai-sales-crm/ai-crm-software`, ['CRM software', 'AI CRM']],
  [`${PR}/ai-sales-crm/ai-lead-generation-tools`, ['lead generation tools', 'prospect research', 'prospecting']],
  [`${PR}/ai-sales-crm/ai-lead-management-software`, ['lead management', 'lead scoring', 'lead routing']],
  [`${PR}/ai-sales-crm/ai-sales-assistant`, ['sales assistant', 'call notes', 'meeting notes']],
  [`${PR}/ai-workflow-business-process-automation/ai-task-automation`, ['repetitive tasks', 'manual tasks', 'data entry']],
  [`${PR}/ai-workflow-business-process-automation/enterprise-workflow-automation`, ['enterprise workflow automation', 'enterprise workflows']],
  [`${PR}/ai-workflow-business-process-automation/intelligent-process-automation`, ['intelligent process automation', 'intelligent automation']],
  [`${PR}/general-ai-automation/ai-process-optimization`, ['process optimization', 'bottlenecks']],
  ['/services/robotic-process-automation', ['robotic process automation', 'RPA']],
  ['/services/ai-knowledge-assistants', ['knowledge assistant', 'knowledge base', 'internal knowledge']],
  ['/services/ai-strategy-advisory', ['AI strategy', 'automation roadmap', 'roadmap']],
  ['/services/custom-ai-development', ['custom AI development', 'custom AI']],
];

/** /services page that sells each topic (first entry of TOPICS[topic].services). */
const serviceFor = (topic: string) => {
  const slug = TOPICS[topic]?.services[0];
  return slug ? `/services/${slug}` : undefined;
};

const platformPage = (key: string) => {
  const page = PLATFORMS[key]?.page;
  return page ? `/platforms/${page}` : undefined;
};

/** `group`: rules sharing a group (same phrases, different targets) never both link inside one paragraph. */
type Rule = { phrases: string[]; targets: (string | undefined)[]; group?: string };

function buildRules(url: string, live: Set<string>): Rule[] {
  const [, area, slug = '', child = ''] = url.split('/');
  const childOf = (t: string, c: string) => {
    const p = `/solutions/${t}/${c}`;
    return live.has(p) ? p : undefined;
  };
  const rules: Rule[] = [];
  const industryRules = () => {
    for (const [seg, phrases] of Object.entries(SEGMENT_PHRASES)) {
      const s = SEGMENTS[seg];
      if (!s) continue;
      rules.push({
        phrases,
        // Industry page, else the industry's product page, else its product category.
        targets: [
          s.industries[0] ? `/industries/${s.industries[0]}` : undefined,
          s.products.find((p) => p.split('/').length === 4) ?? s.products[0],
        ],
      });
    }
  };

  const pageRules = () => {
    for (const [path, phrases] of PAGE_PHRASES) rules.push({ phrases, targets: [path] });
  };

  if (area === 'platforms') {
    const own = Object.keys(PLATFORMS).find((k) => PLATFORMS[k].page === slug);
    for (const [t, phrases] of Object.entries(TOPIC_PHRASES)) {
      rules.push({ phrases, targets: [own ? childOf(t, `with-${own}`) : undefined, `/solutions/${t}`] });
    }
    industryRules();
    pageRules();
    for (const [key, phrases] of Object.entries(PLATFORM_PHRASES)) {
      if (key !== own) rules.push({ phrases, targets: [platformPage(key)] });
    }
  } else {
    const topic = slug;
    const segment = child.startsWith('for-') ? child.slice(4) : undefined;
    const platform = child.startsWith('with-') ? child.slice(5) : undefined;

    // Own topic: a detail page links up to its hub; a hub links across to the service that delivers it.
    rules.push({ phrases: TOPIC_PHRASES[topic] ?? [], targets: [child ? `/solutions/${topic}` : serviceFor(topic)], group: 'own' });
    // A later mention of the own topic links to the service that delivers it (second service from a hub).
    const services = TOPICS[topic]?.services ?? [];
    const second = child ? services[0] : services[1];
    if (second) rules.push({ phrases: TOPIC_PHRASES[topic] ?? [], targets: [`/services/${second}`], group: 'own' });
    industryRules();
    pageRules();
    // Other topics → same-industry / same-platform sibling, else their hub.
    for (const [t, phrases] of Object.entries(TOPIC_PHRASES)) {
      if (t === topic) continue;
      rules.push({
        phrases,
        targets: [
          segment ? childOf(t, `for-${segment}`) : undefined,
          platform ? childOf(t, `with-${platform}`) : undefined,
          `/solutions/${t}`,
        ],
      });
    }
    // Platforms → own topic's platform page, else the platform service page.
    for (const [key, phrases] of Object.entries(PLATFORM_PHRASES)) {
      rules.push({ phrases, targets: [key !== platform ? childOf(topic, `with-${key}`) : undefined, platformPage(key)] });
    }
  }

  // Conversion + pillar pages.
  rules.push({ phrases: ['free automation audit', 'free audit'], targets: ['/free-automation-audit'] });
  rules.push({ phrases: ['AI automation agency'], targets: ['/'] });
  return rules;
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * Highlight the first natural mention of `keyword` (or its singular/plural) across `texts`, in order, as
 * ==keyword== (a marker RichText renders bold). Skips bold titles, highlights and links.
 */
export function emphasizeKeyword(texts: string[], keyword: string | undefined): string[] {
  const kw = keyword?.trim();
  if (!kw) return texts;
  const variants = [kw, kw.endsWith('s') ? kw.slice(0, -1) : `${kw}s`];
  const re = new RegExp(`(^|[^\\w/-])(${variants.map(escape).join('|')})(?![\\w-])`, 'i');
  let done = false;
  return texts.map((text) => {
    if (done || typeof text !== 'string') return text;
    return text
      .split('\n')
      .map((line) => {
        if (done) return line;
        const parts = segmentsOf(line);
        for (const part of parts) {
          if (part.protected) continue;
          const m = part.text.match(re);
          if (m) {
            // ==keyword== is a highlight marker (rendered bold by RichText) that the list parsers ignore,
            // so a mention at the very start of a paragraph can be highlighted too.
            const start = m.index! + m[1].length;
            part.text = `${part.text.slice(0, start)}==${m[2]}==${part.text.slice(start + m[2].length)}`;
            done = true;
            break;
          }
        }
        return parts.map((p) => p.text).join('');
      })
      .join('\n');
  });
}

/** Split a line into linkable plain text and protected (bold / existing link) segments. */
function segmentsOf(line: string) {
  const parts: { text: string; protected: boolean }[] = [];
  const re = /(\*\*[^*]+\*\*|==[^=]+==|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  for (const m of line.matchAll(re)) {
    if (m.index! > last) parts.push({ text: line.slice(last, m.index), protected: false });
    parts.push({ text: m[0], protected: true });
    last = m.index! + m[0].length;
  }
  if (last < line.length) parts.push({ text: line.slice(last), protected: false });
  return parts;
}

export type Linker = { link: (text: string) => string };

/**
 * A linker for one page. Links are budgeted across the whole page in call order, and each distinct
 * text is linked once and cached, so re-rendering a component returns exactly the same markup.
 */
export function createLinker(url: string, livePaths: Iterable<string>): Linker {
  const self = url.replace(/\/$/, '');
  const rules = buildRules(self, new Set(livePaths));
  const used = new Set<string>([self]);
  const usedRules = new Set<Rule>();
  const cache = new Map<string, string>();
  let count = 0;

  /** `lineGroups`: concept groups already linked in the current paragraph (same phrase never linked twice in one). */
  const linkOnce = (line: string, lineGroups: Set<string>): string => {
    if (count >= MAX_LINKS || !line.trim()) return line;
    const parts = segmentsOf(line);
    for (const part of parts) {
      if (part.protected) continue;
      for (const rule of rules) {
        if (usedRules.has(rule) || (rule.group && lineGroups.has(rule.group))) continue;
        const target = rule.targets.find((t): t is string => Boolean(t) && !used.has(t!));
        if (!target) continue;
        for (const phrase of rule.phrases) {
          const m = part.text.match(new RegExp(`(^|[^\\w/-])(${escape(phrase)})(?![\\w-])`, 'i'));
          if (!m) continue;
          const start = m.index! + m[1].length;
          part.text = `${part.text.slice(0, start)}[${m[2]}](${target})${part.text.slice(start + m[2].length)}`;
          used.add(target);
          usedRules.add(rule);
          if (rule.group) lineGroups.add(rule.group);
          count++;
          return parts.map((p) => p.text).join('');
        }
      }
    }
    return line;
  };

  const linkLine = (line: string): string => {
    let out = line;
    const lineGroups = new Set<string>();
    for (let k = 0; k < MAX_PER_PARAGRAPH; k++) {
      const next = linkOnce(out, lineGroups);
      if (next === out) break;
      out = next;
    }
    return out;
  };

  return {
    link(text) {
      if (typeof text !== 'string' || !text) return text;
      const hit = cache.get(text);
      if (hit !== undefined) return hit;
      const out = text.split('\n').map(linkLine).join('\n');
      cache.set(text, out);
      return out;
    },
  };
}
