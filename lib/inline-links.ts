// lib/inline-links.ts
// Contextual (in-text) internal links for solution pages.
//
// withInlineLinks(content) returns a copy of a solution's content where the first natural
// mention of a related topic inside body copy becomes a markdown link: [anchor](/path).
// The section components render those with <RichText>.
//
// Targets follow the site hierarchy (lib/link-graph.ts):
//   own topic           → parent hub (/solutions/<topic>), then the matching /services page
//   another topic       → same-industry sibling (/solutions/<topic>/for-<segment>)
//                         or same-platform sibling (/solutions/<topic>/with-<platform>), else its hub
//   industry name       → /industries/<slug> (or the industry product page where no industry page exists)
//   platform name       → /solutions/<own topic>/with-<platform>, else /platforms/<slug>
//   "free audit"        → /free-automation-audit
//   "AI automation agency"/"AI automation" (pillar) → /
//
// Rules: one link per target per page, at most MAX_PER_PARAGRAPH links per paragraph, at most MAX_LINKS per page,
// never inside **bold** titles or existing links, anchor text = the words already in the copy.

import type { RelatedSolution } from '@/content/type';

/** Minimal shape the linker needs (one page stores section bodies as string arrays). */
type LinkableContent = {
  url?: string;
  sections?: Record<string, string | string[]>;
  relatedSolutions?: RelatedSolution[];
};
import { TOPICS, SEGMENTS, PLATFORMS } from '@/lib/link-graph';
import { solutionLinkIndex } from '@/lib/solution-link-index';

const MAX_LINKS = 16;
const MAX_PER_PARAGRAPH = 2;

const livePaths = new Set(solutionLinkIndex.map((s) => s.path));
const PLATFORM_PAGES = new Set([
  'zapier-automation-services',
  'make-automation-services',
  'n8n-automation-services',
  'hubspot-automation-services',
  'gohighlevel-automation-services',
  'airtable-automation-services',
]);

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

/** /services page that sells each topic (first entry of TOPICS[topic].services). */
const serviceFor = (topic: string) => {
  const slug = TOPICS[topic]?.services[0];
  return slug ? `/services/${slug}` : undefined;
};

type Rule = { phrases: string[]; targets: () => (string | undefined)[] };

function buildRules(url: string): Rule[] {
  const [, , topic, child = ''] = url.split('/');
  const segment = child.startsWith('for-') ? child.slice(4) : undefined;
  const platform = child.startsWith('with-') ? child.slice(5) : undefined;
  const isChild = Boolean(child);
  const childOf = (t: string, c: string) => {
    const p = `/solutions/${t}/${c}`;
    return livePaths.has(p) ? p : undefined;
  };

  const rules: Rule[] = [];

  // 1. Own topic: up to the parent hub, then across to the service page.
  rules.push({
    phrases: TOPIC_PHRASES[topic] ?? [],
    // Detail page → up to its parent; type page → across to the service that delivers it.
    targets: () => [isChild ? `/solutions/${topic}` : serviceFor(topic)],
  });

  // 2. Industry (segment) names → industry page, else the industry product page.
  for (const [seg, phrases] of Object.entries(SEGMENT_PHRASES)) {
    const s = SEGMENTS[seg];
    if (!s) continue;
    rules.push({
      phrases,
      targets: () => [
        s.industries[0] ? `/industries/${s.industries[0]}` : undefined,
        s.products.find((p) => p.split('/').length === 4),
      ],
    });
  }

  // 3. Other topics → same-industry / same-platform sibling, else their hub.
  for (const [t, phrases] of Object.entries(TOPIC_PHRASES)) {
    if (t === topic) continue;
    rules.push({
      phrases,
      targets: () => [
        segment ? childOf(t, `for-${segment}`) : undefined,
        platform ? childOf(t, `with-${platform}`) : undefined,
        `/solutions/${t}`,
      ],
    });
  }

  // 4. Platforms → own topic's platform page, else the platform service page.
  for (const [key, phrases] of Object.entries(PLATFORM_PHRASES)) {
    const page = PLATFORMS[key]?.page;
    rules.push({
      phrases,
      targets: () => [
        key !== platform ? childOf(topic, `with-${key}`) : undefined,
        page && PLATFORM_PAGES.has(page) ? `/platforms/${page}` : undefined,
      ],
    });
  }

  // 5. Conversion + pillar pages named in each brief's internalLinks.
  rules.push({ phrases: ['free automation audit', 'free audit'], targets: () => ['/free-automation-audit'] });
  rules.push({ phrases: ['AI automation agency'], targets: () => ['/'] });

  return rules;
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Split a line into linkable plain text and protected (bold / existing link) segments. */
function segmentsOf(line: string) {
  const parts: { text: string; protected: boolean }[] = [];
  const re = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  for (const m of line.matchAll(re)) {
    if (m.index! > last) parts.push({ text: line.slice(last, m.index), protected: false });
    parts.push({ text: m[0], protected: true });
    last = m.index! + m[0].length;
  }
  if (last < line.length) parts.push({ text: line.slice(last), protected: false });
  return parts;
}

/** Add contextual links to a solution page's section copy. Pure and deterministic. */
export function withInlineLinks<T extends LinkableContent>(content: T): T {
  if (!content?.url || !content.sections) return content;
  const self = content.url.replace(/\/$/, '');
  const rules = buildRules(self);
  const used = new Set<string>([self]);
  // Each concept (rule) is linked once per page, so one phrase never points at two URLs.
  const usedRules = new Set<Rule>();
  let count = 0;

  /** Insert at most one link into a line; returns the line unchanged when nothing matches. */
  const linkOnce = (line: string): string => {
    if (count >= MAX_LINKS || !line.trim()) return line;
    const parts = segmentsOf(line);
    for (const part of parts) {
      if (part.protected) continue;
      for (const rule of rules) {
        if (usedRules.has(rule)) continue;
        const target = rule.targets().find((t): t is string => Boolean(t) && !used.has(t!));
        if (!target) continue;
        for (const phrase of rule.phrases) {
          const re = new RegExp(`(^|[^\\w/-])(${escape(phrase)})(?![\\w-])`, 'i');
          const m = part.text.match(re);
          if (!m) continue;
          const start = m.index! + m[1].length;
          part.text = `${part.text.slice(0, start)}[${m[2]}](${target})${part.text.slice(start + m[2].length)}`;
          used.add(target);
          usedRules.add(rule);
          count++;
          return parts.map((p) => p.text).join('');
        }
      }
    }
    return line;
  };

  const linkLine = (line: string): string => {
    let out = line;
    for (let k = 0; k < MAX_PER_PARAGRAPH; k++) {
      const next = linkOnce(out);
      if (next === out) break;
      out = next;
    }
    return out;
  };

  const sections: Record<string, string | string[]> = {};
  const linkBody = (b: string) => b.split('\n').map(linkLine).join('\n');
  for (const [title, body] of Object.entries(content.sections)) {
    sections[title] = typeof body === 'string' ? linkBody(body) : Array.isArray(body) ? body.map(linkBody) : body;
  }

  // "Explore other solutions": point at the same-industry / same-platform version of each topic.
  const [, , topic, child = ''] = self.split('/');
  const relatedSolutions = (content.relatedSolutions ?? []).map((r) => {
    const base = r.slug.split('/')[0];
    const variant = child && base !== topic ? `${base}/${child}` : undefined;
    if (variant && livePaths.has(`/solutions/${variant}`)) {
      const segName = child.startsWith('for-') ? SEGMENTS[child.slice(4)]?.name : PLATFORMS[child.slice(5)]?.name;
      return {
        ...r,
        slug: variant,
        title: `${TOPICS[base]?.title ?? r.title} ${child.startsWith('for-') ? 'for' : 'with'} ${segName ?? ''}`.trim(),
      };
    }
    return r;
  });

  return { ...content, sections, relatedSolutions };
}

/** Heading for the related-solutions section, specific to the page. */
export function relatedHeading(content: LinkableContent) {
  const [, , , child = ''] = (content.url ?? '').split('/');
  if (child.startsWith('for-')) {
    const name = SEGMENTS[child.slice(4)]?.name;
    if (name) return { title: `More AI Automation for ${name}`, subtitle: `Other ${name.toLowerCase()} workflows we automate` };
  }
  if (child.startsWith('with-')) {
    const name = PLATFORMS[child.slice(5)]?.name;
    if (name) return { title: `More ${name} Automation Solutions`, subtitle: `Other solutions we build on ${name}` };
  }
  return { title: 'Related AI Automation Solutions', subtitle: 'Solutions that work alongside this one' };
}
