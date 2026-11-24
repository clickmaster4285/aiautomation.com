// lib/link-graph.ts
// Site topic map: how solution types, services, products, platforms and industries relate.
// Used by lib/inline-links.ts (in-paragraph internal links) and for solution breadcrumbs.
// To connect a new page, add it to the relevant TOPICS / SEGMENTS / PLATFORMS entry.

// ─────────────────────────────────────────────────────────────
// Topic map: one entry per solution type (/solutions/<slug>)
// ─────────────────────────────────────────────────────────────
type Topic = {
  title: string;
  /** /services/<slug> pages that sell this topic, most relevant first. */
  services: string[];
  /** /products/<category>/<slug> paths (or category paths), most relevant first. */
  products: string[];
  /** Platform keys (see PLATFORMS), most relevant first. */
  platforms: string[];
};

const P = '/products';
export const TOPICS: Record<string, Topic> = {
  'ai-workflow-automation': {
    title: 'AI Workflow Automation',
    services: ['ai-workflow-automation', 'business-process-automation'],
    products: [
      `${P}/ai-workflow-business-process-automation/ai-workflow-automation-software`,
      `${P}/ai-workflow-business-process-automation/ai-task-automation`,
      `${P}/ai-workflow-business-process-automation/enterprise-workflow-automation`,
    ],
    platforms: ['zapier', 'make', 'n8n'],
  },
  'business-process-automation': {
    title: 'Business Process Automation',
    services: ['business-process-automation', 'robotic-process-automation', 'ai-strategy-advisory'],
    products: [
      `${P}/ai-workflow-business-process-automation/business-process-automation-software`,
      `${P}/ai-workflow-business-process-automation/intelligent-process-automation`,
      `${P}/general-ai-automation/ai-process-optimization`,
    ],
    platforms: ['make', 'n8n'],
  },
  'ai-agents': {
    title: 'AI Agents',
    services: ['ai-agent-development', 'custom-ai-development'],
    products: [
      `${P}/ai-agents-platforms/ai-agent-development`,
      `${P}/ai-agents-platforms/autonomous-ai-agents`,
      `${P}/ai-agents-platforms/multi-agent-systems`,
      `${P}/ai-agents-platforms/enterprise-ai-agents`,
      `${P}/ai-agents-platforms/ai-agent-platform`,
    ],
    platforms: ['n8n', 'make'],
  },
  'ai-chatbots': {
    title: 'AI Chatbots',
    services: ['ai-chatbots', 'ai-knowledge-assistants'],
    products: [
      `${P}/ai-customer-support/ai-chatbot-software`,
      `${P}/ai-customer-support/ai-virtual-assistant`,
      `${P}/ai-ecommerce-automation/ai-shopping-assistant`,
    ],
    platforms: ['zapier', 'hubspot'],
  },
  'ai-voice-agents': {
    title: 'AI Voice Agents',
    services: ['ai-voice-agents'],
    products: [
      `${P}/ai-customer-support/ai-voice-agent`,
      `${P}/ai-customer-support/ai-customer-service-automation`,
    ],
    platforms: ['gohighlevel', 'hubspot'],
  },
  'customer-support-automation': {
    title: 'Customer Support Automation',
    services: ['ai-chatbots', 'ai-knowledge-assistants', 'ai-voice-agents'],
    products: [
      `${P}/ai-customer-support/ai-customer-support-software`,
      `${P}/ai-customer-support/ai-customer-service-automation`,
      `${P}/ai-customer-support/ai-chatbot-software`,
    ],
    platforms: ['zapier', 'hubspot'],
  },
  'appointment-booking-automation': {
    title: 'Appointment Booking Automation',
    services: ['ai-voice-agents', 'ai-chatbots'],
    products: [
      `${P}/ai-customer-support/ai-virtual-assistant`,
      `${P}/ai-hr-recruitment/ai-interview-scheduling-software`,
    ],
    platforms: ['gohighlevel', 'hubspot'],
  },
  'lead-generation-automation': {
    title: 'Lead Generation Automation',
    services: ['ai-lead-generation'],
    products: [
      `${P}/ai-sales-crm/ai-lead-generation-tools`,
      `${P}/ai-sales-crm/ai-lead-management-software`,
    ],
    platforms: ['hubspot', 'gohighlevel'],
  },
  'sales-automation': {
    title: 'Sales Automation',
    services: ['ai-lead-generation', 'ai-workflow-automation'],
    products: [
      `${P}/ai-sales-crm/ai-sales-automation-software`,
      `${P}/ai-sales-crm/ai-sales-assistant`,
      `${P}/ai-sales-crm/ai-crm-software`,
    ],
    platforms: ['hubspot', 'gohighlevel'],
  },
  'crm-automation': {
    title: 'CRM Automation',
    services: ['ai-workflow-automation', 'ai-lead-generation'],
    products: [
      `${P}/ai-sales-crm/ai-crm-software`,
      `${P}/ai-sales-crm/ai-lead-management-software`,
    ],
    platforms: ['hubspot', 'airtable', 'gohighlevel'],
  },
  'marketing-automation': {
    title: 'Marketing Automation',
    services: ['ai-lead-generation', 'ai-workflow-automation'],
    products: [
      `${P}/ai-marketing-automation/ai-marketing-automation-software`,
      `${P}/ai-marketing-automation/ai-email-automation`,
      `${P}/ai-marketing-automation/ai-campaign-management-software`,
      `${P}/ai-marketing-automation/ai-social-media-automation`,
      `${P}/ai-marketing-automation/ai-seo-automation-tools`,
    ],
    platforms: ['hubspot', 'gohighlevel'],
  },
  'document-automation': {
    title: 'Document Automation',
    services: ['robotic-process-automation', 'ai-workflow-automation'],
    products: [
      `${P}/ai-document-data-intelligence/ai-document-processing-software`,
      `${P}/ai-document-data-intelligence/intelligent-document-processing`,
      `${P}/ai-document-data-intelligence/ai-data-extraction-software`,
      `${P}/ai-document-data-intelligence/ai-ocr-software`,
    ],
    platforms: ['airtable', 'n8n'],
  },
  'invoice-automation': {
    title: 'Invoice Automation',
    services: ['business-process-automation', 'robotic-process-automation'],
    products: [
      `${P}/ai-finance-accounting/ai-invoice-processing-software`,
      `${P}/ai-finance-accounting/ai-accounting-automation`,
      `${P}/ai-finance-accounting/ai-bookkeeping-software`,
    ],
    platforms: ['make', 'n8n'],
  },
  'reporting-automation': {
    title: 'Reporting Automation',
    services: ['ai-reporting-automation'],
    products: [
      `${P}/ai-finance-accounting/ai-financial-automation`,
      `${P}/ai-document-data-intelligence/ai-data-extraction-software`,
    ],
    platforms: ['n8n', 'airtable'],
  },
};



// ─────────────────────────────────────────────────────────────
// Audience segments: /solutions/<type>/for-<segment>
// ─────────────────────────────────────────────────────────────
type Segment = {
  name: string;
  /** /industries/<slug> pages for this segment. */
  industries: string[];
  /** Industry-specific product pages or product categories. */
  products: string[];
};

export const SEGMENTS: Record<string, Segment> = {
  'accounting-firms': {
    name: 'Accounting Firms',
    industries: ['ai-automation-for-finance-accounting', 'ai-automation-for-professional-services'],
    products: [`${P}/ai-finance-accounting`],
  },
  construction: { name: 'Construction', industries: [], products: [] },
  ecommerce: {
    name: 'E-commerce',
    industries: ['ai-automation-for-ecommerce'],
    products: [
      `${P}/ai-ecommerce-automation`,
      `${P}/ai-ecommerce-automation/ai-ecommerce-automation-software`,
      `${P}/ai-ecommerce-automation/ai-order-processing-automation`,
    ],
  },
  education: {
    name: 'Education',
    industries: [],
    products: [`${P}/industry-specific-ai-automation/ai-education-automation`],
  },
  healthcare: {
    name: 'Healthcare',
    industries: ['ai-automation-for-healthcare'],
    products: [`${P}/industry-specific-ai-automation/ai-healthcare-automation`],
  },
  insurance: { name: 'Insurance', industries: [], products: [] },
  'law-firms': {
    name: 'Law Firms',
    industries: ['ai-automation-for-law-firms', 'ai-automation-for-professional-services'],
    products: [
      `${P}/industry-specific-ai-automation/ai-legal-automation`,
      `${P}/ai-document-data-intelligence/ai-contract-analysis`,
    ],
  },
  logistics: {
    name: 'Logistics',
    industries: [],
    products: [`${P}/industry-specific-ai-automation/ai-logistics-automation`],
  },
  manufacturing: { name: 'Manufacturing', industries: [], products: [] },
  'real-estate': {
    name: 'Real Estate',
    industries: ['ai-automation-for-real-estate'],
    products: [`${P}/industry-specific-ai-automation/ai-real-estate-automation`],
  },
  restaurants: { name: 'Restaurants', industries: [], products: [] },
  retail: {
    name: 'Retail',
    industries: ['ai-automation-for-ecommerce'],
    products: [
      `${P}/ai-ecommerce-automation`,
      `${P}/ai-ecommerce-automation/ai-inventory-management-software`,
      `${P}/ai-ecommerce-automation/ai-product-recommendation-software`,
    ],
  },
  saas: { name: 'SaaS', industries: ['ai-automation-for-saas'], products: [] },
};


// ─────────────────────────────────────────────────────────────
// Platforms: /platforms/<slug> and /solutions/<type>/with-<key>
// ─────────────────────────────────────────────────────────────
type Platform = { name: string; page?: string };
export const PLATFORMS: Record<string, Platform> = {
  zapier: { name: 'Zapier', page: 'zapier-automation-services' },
  make: { name: 'Make', page: 'make-automation-services' },
  n8n: { name: 'n8n', page: 'n8n-automation-services' },
  hubspot: { name: 'HubSpot', page: 'hubspot-automation-services' },
  gohighlevel: { name: 'GoHighLevel', page: 'gohighlevel-automation-services' },
  airtable: { name: 'Airtable', page: 'airtable-automation-services' },
  salesforce: { name: 'Salesforce' },
};

function parseSolution(path: string) {
  const [, , topic, child] = path.split('/');
  if (!child) return { topic, segment: undefined, platform: undefined };
  if (child.startsWith('for-')) return { topic, segment: child.slice(4), platform: undefined };
  if (child.startsWith('with-')) return { topic, segment: undefined, platform: child.slice(5) };
  return { topic, segment: undefined, platform: undefined };
}
const solutionChildLabel = (path: string): string => {
  const { topic, segment, platform } = parseSolution(path);
  const t = TOPICS[topic]?.title ?? topic;
  if (segment) return `${t} for ${SEGMENTS[segment]?.name ?? segment}`;
  if (platform) return `${t} with ${PLATFORMS[platform]?.name ?? platform}`;
  return t;
};
/** Breadcrumb trail (Home → hub → parent → page) for solution pages. */
export function solutionBreadcrumbs(path: string) {
  const { topic, segment, platform } = parseSolution(path);
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
  ];
  const t = TOPICS[topic];
  if (!t) return crumbs;
  crumbs.push({ name: t.title, path: `/solutions/${topic}` });
  if (segment || platform) crumbs.push({ name: solutionChildLabel(path), path });
  return crumbs;
}
