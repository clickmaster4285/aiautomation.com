// content/products/index.ts
// Products shown in the navbar "Products" dropdown.
//
// Routes:
//   /products                              → all products
//   /products/<category-slug>              → one category
//   /products/<category-slug>/<slug>       → one product page

import { LIVE_PRODUCT_PATH_LIST, PRODUCTS_BASE } from './routes';

export interface ProductItem {
  title: string;
  slug: string;
  description: string;
  path: string;
  /** True when a page exists at `path` (see LIVE_PRODUCT_PATHS). */
  live: boolean;
}

export interface ProductCategory {
  title: string;
  slug: string;
  description: string;
  path: string;
  /** True when a page exists at `path` (see LIVE_PRODUCT_PATHS). */
  live: boolean;
  products: ProductItem[];
}

type RawCategory = {
  title: string;
  slug: string;
  description: string;
  products: { title: string; slug: string; description: string }[];
};

const rawProductCategories: RawCategory[] = [
  {
    title: 'AI Sales & CRM',
    slug: 'ai-sales-crm',
    description: 'Software that finds leads, keeps the CRM current, and helps reps close faster.',
    products: [
      { title: 'AI Sales Automation Software', slug: 'ai-sales-automation-software', description: 'Automate follow-ups, logging, and pipeline updates so reps spend time selling.' },
      { title: 'AI CRM Software', slug: 'ai-crm-software', description: 'A CRM that enriches records, scores deals, and suggests the next step.' },
      { title: 'AI Lead Generation Tools', slug: 'ai-lead-generation-tools', description: 'Find, enrich, and qualify prospects that match your ideal customer profile.' },
      { title: 'AI Lead Management Software', slug: 'ai-lead-management-software', description: 'Capture, score, and route every new lead to the right rep in seconds.' },
      { title: 'AI Sales Assistant', slug: 'ai-sales-assistant', description: 'Drafts emails, preps call notes, and reminds reps what needs attention.' },
    ],
  },
  {
    title: 'AI Customer Support',
    slug: 'ai-customer-support',
    description: 'Answer customers around the clock and hand complex cases to your team.',
    products: [
      { title: 'AI Customer Support Software', slug: 'ai-customer-support-software', description: 'Resolve routine tickets automatically and escalate the rest with full context.' },
      { title: 'AI Chatbot Software', slug: 'ai-chatbot-software', description: 'Chatbots trained on your content for web, WhatsApp, and messaging channels.' },
      { title: 'AI Virtual Assistant', slug: 'ai-virtual-assistant', description: 'An assistant that answers questions, books meetings, and handles requests.' },
      { title: 'AI Customer Service Automation', slug: 'ai-customer-service-automation', description: 'Automate triage, replies, and follow-ups across every support channel.' },
      { title: 'AI Voice Agent', slug: 'ai-voice-agent', description: 'Answer and place calls with a natural voice when the team cannot pick up.' },
    ],
  },
  {
    title: 'AI Marketing Automation',
    slug: 'ai-marketing-automation',
    description: 'Plan, create, and run campaigns with less manual work across every channel.',
    products: [
      { title: 'AI Marketing Automation Software', slug: 'ai-marketing-automation-software', description: 'Run nurture journeys, segments, and campaigns from one AI-driven system.' },
      { title: 'AI Email Automation', slug: 'ai-email-automation', description: 'Write, personalize, and send sequences that adapt to each recipient.' },
      { title: 'AI Social Media Automation', slug: 'ai-social-media-automation', description: 'Draft, schedule, and publish posts across your social channels.' },
      { title: 'AI SEO Automation Tools', slug: 'ai-seo-automation-tools', description: 'Custom AI workflows for SEO content, publishing, and reporting.' },
      { title: 'AI Campaign Management Software', slug: 'ai-campaign-management-software', description: 'Plan, launch, and optimize campaigns with performance insights built in.' },
    ],
  },
  {
    title: 'AI HR & Recruitment',
    slug: 'ai-hr-recruitment',
    description: 'Hire faster and take repetitive admin off the HR team’s plate.',
    products: [
      { title: 'AI Recruitment Software', slug: 'ai-recruitment-software', description: 'Source, screen, and move candidates through hiring with less manual work.' },
      { title: 'AI Resume Screening Software', slug: 'ai-resume-screening-software', description: 'Summarize applicants against your criteria so recruiters review faster.' },
      { title: 'AI HR Automation', slug: 'ai-hr-automation', description: 'Automate onboarding, requests, and HR paperwork end to end.' },
      { title: 'AI Interview Scheduling Software', slug: 'ai-interview-scheduling-software', description: 'Coordinate interview slots without the back-and-forth emails.' },
      { title: 'AI Employee Management Software', slug: 'ai-employee-management-software', description: 'Keep employee records and lifecycle admin organized and in sync.' },
    ],
  },
  {
    title: 'AI Workflow & Business Process Automation',
    slug: 'ai-workflow-business-process-automation',
    description: 'Connect your tools and run multi-step processes without manual hand-offs.',
    products: [
      { title: 'AI Workflow Automation Software', slug: 'ai-workflow-automation-software', description: 'Connect apps and run multi-step work automatically from trigger to result.' },
      { title: 'Business Process Automation Software', slug: 'business-process-automation-software', description: 'Automate a whole repeatable process, including approvals and hand-offs.' },
      { title: 'AI Task Automation', slug: 'ai-task-automation', description: 'Take recurring, rules-based tasks off your team’s daily to-do list.' },
      { title: 'Intelligent Process Automation', slug: 'intelligent-process-automation', description: 'Combine AI and RPA to handle processes that need judgment, not just rules.' },
      { title: 'Enterprise Workflow Automation', slug: 'enterprise-workflow-automation', description: 'Governed automation across departments and business systems.' },
    ],
  },
  {
    title: 'AI Finance & Accounting',
    slug: 'ai-finance-accounting',
    description: 'Capture, reconcile, and report on financial data without manual entry.',
    products: [
      { title: 'AI Accounting Automation', slug: 'ai-accounting-automation', description: 'Automate entries, reconciliations, and month-end close tasks.' },
      { title: 'AI Invoice Processing Software', slug: 'ai-invoice-processing-software', description: 'Extract, validate, and post invoices to your accounting system.' },
      { title: 'AI Expense Management Software', slug: 'ai-expense-management-software', description: 'Read receipts, categorize spend, and flag policy issues automatically.' },
      { title: 'AI Bookkeeping Software', slug: 'ai-bookkeeping-software', description: 'Keep the books categorized and up to date without the spreadsheet work.' },
      { title: 'AI Financial Automation', slug: 'ai-financial-automation', description: 'Automate reporting, forecasting inputs, and recurring finance workflows.' },
    ],
  },
  {
    title: 'AI E-commerce Automation',
    slug: 'ai-ecommerce-automation',
    description: 'Run your store, stock, and orders with less manual effort.',
    products: [
      { title: 'AI E-commerce Automation Software', slug: 'ai-ecommerce-automation-software', description: 'Automate listings, pricing, and store operations across channels.' },
      { title: 'AI Inventory Management Software', slug: 'ai-inventory-management-software', description: 'Forecast demand, track stock, and reorder before items run out.' },
      { title: 'AI Order Processing Automation', slug: 'ai-order-processing-automation', description: 'Move orders from checkout to fulfillment without manual steps.' },
      { title: 'AI Product Recommendation Software', slug: 'ai-product-recommendation-software', description: 'Show each shopper the products they are most likely to buy.' },
      { title: 'AI Shopping Assistant', slug: 'ai-shopping-assistant', description: 'Help shoppers find, compare, and buy products through conversation.' },
    ],
  },
  {
    title: 'AI Document & Data Intelligence',
    slug: 'ai-document-data-intelligence',
    description: 'Turn documents and unstructured files into clean, usable data.',
    products: [
      { title: 'AI Document Processing Software', slug: 'ai-document-processing-software', description: 'Classify, extract, and route documents automatically as they arrive.' },
      { title: 'AI Data Extraction Software', slug: 'ai-data-extraction-software', description: 'Pull structured fields from emails, PDFs, forms, and web pages.' },
      { title: 'AI OCR Software', slug: 'ai-ocr-software', description: 'Read scanned and handwritten documents with high accuracy.' },
      { title: 'Intelligent Document Processing', slug: 'intelligent-document-processing', description: 'End-to-end IDP: capture, understand, validate, and export documents.' },
      { title: 'AI Contract Analysis', slug: 'ai-contract-analysis', description: 'Review contracts, extract key terms, and flag risky clauses fast.' },
    ],
  },
  {
    title: 'AI Agents & Platforms',
    slug: 'ai-agents-platforms',
    description: 'Agents that look up, decide, and act inside your systems.',
    products: [
      { title: 'AI Agent Platform', slug: 'ai-agent-platform', description: 'Build, deploy, and monitor AI agents from one managed platform.' },
      { title: 'AI Agent Development', slug: 'ai-agent-development', description: 'Custom agents designed around your tools, data, and processes.' },
      { title: 'Autonomous AI Agents', slug: 'autonomous-ai-agents', description: 'Agents that plan and complete multi-step goals with minimal supervision.' },
      { title: 'Multi-Agent Systems', slug: 'multi-agent-systems', description: 'Teams of specialized agents that coordinate on complex work.' },
      { title: 'Enterprise AI Agents', slug: 'enterprise-ai-agents', description: 'Secure, governed agents built for enterprise scale and compliance.' },
    ],
  },
  {
    title: 'Industry-Specific AI Automation',
    slug: 'industry-specific-ai-automation',
    description: 'AI automation built around the workflows of your industry.',
    products: [
      { title: 'AI Healthcare Automation', slug: 'ai-healthcare-automation', description: 'Automate intake, scheduling, billing, and patient follow-ups.' },
      { title: 'AI Real Estate Automation', slug: 'ai-real-estate-automation', description: 'Qualify leads, book showings, and manage listings automatically.' },
      { title: 'AI Logistics Automation', slug: 'ai-logistics-automation', description: 'Automate dispatch, tracking updates, and shipping paperwork.' },
      { title: 'AI Education Automation', slug: 'ai-education-automation', description: 'Streamline admissions, enrollment, and student communication.' },
      { title: 'AI Legal Automation', slug: 'ai-legal-automation', description: 'Automate client intake, document drafting, and case admin.' },
    ],
  },
  {
    title: 'General AI Automation',
    slug: 'general-ai-automation',
    description: 'Custom and end-to-end AI automation for any business process.',
    products: [
      { title: 'AI Automation Solutions', slug: 'ai-automation-solutions', description: 'Practical AI automation that removes manual work across your business.' },
      { title: 'AI Automation Tools for Businesses', slug: 'ai-automation-tools-for-businesses', description: 'Ready-to-use AI tools that fit the way small and mid-size teams work.' },
      { title: 'Custom AI Automation Software', slug: 'custom-ai-automation-software', description: 'Software built around your exact process, data, and systems.' },
      { title: 'Enterprise AI Automation Solutions', slug: 'enterprise-ai-automation-solutions', description: 'Scalable, secure AI automation for large organizations.' },
      { title: 'AI-Powered Business Software', slug: 'ai-powered-business-software', description: 'Business applications with AI built in from the ground up.' },
      { title: 'Intelligent Business Automation', slug: 'intelligent-business-automation', description: 'Automation that adapts to exceptions instead of breaking on them.' },
      { title: 'AI Integration Services', slug: 'ai-integration-services', description: 'Connect AI models to your CRM, ERP, and everyday tools.' },
      { title: 'End-to-End AI Automation', slug: 'end-to-end-ai-automation', description: 'From strategy and build to launch and support, all in one team.' },
      { title: 'AI Process Optimization', slug: 'ai-process-optimization', description: 'Find bottlenecks and redesign processes for speed and accuracy.' },
    ],
  },
];

export const PRODUCTS_PATH = PRODUCTS_BASE;

/**
 * Product routes that have a built page (derived from content/products/routes.ts).
 * The navbar only renders links for these paths; everything else shows as "Soon",
 * so the menu never links to a 404.
 */
export const LIVE_PRODUCT_PATHS = new Set<string>(LIVE_PRODUCT_PATH_LIST);

export const isLiveProductPath = (path: string) => LIVE_PRODUCT_PATHS.has(path);

export const productCategories: ProductCategory[] = rawProductCategories.map((cat) => {
  const path = `${PRODUCTS_PATH}/${cat.slug}`;
  return {
    ...cat,
    path,
    live: isLiveProductPath(path),
    products: cat.products.map((p) => {
      const productPath = `${path}/${p.slug}`;
      return { ...p, path: productPath, live: isLiveProductPath(productPath) };
    }),
  };
});

export const allProducts: ProductItem[] = productCategories.flatMap((c) => c.products);

// Helpers for the pages you build later (e.g. app/products/[category]/[slug]/page.tsx)
export const getProductCategory = (categorySlug: string) =>
  productCategories.find((c) => c.slug === categorySlug);

export const getProduct = (categorySlug: string, productSlug: string) =>
  getProductCategory(categorySlug)?.products.find((p) => p.slug === productSlug);

/** Routes that actually exist (for sitemaps and link checks). */
export const getProductRoutes = () => [...LIVE_PRODUCT_PATHS];

export interface RelatedProducts {
  eyebrow: string;
  heading: string;
  items: { title: string; description: string; href: string }[];
}

/** Takes `count` items starting just after `index`, wrapping around, so links spread evenly. */
const rotateFrom = <T,>(list: T[], index: number, count: number) =>
  Array.from({ length: Math.min(count, list.length) }, (_, i) => list[(index + 1 + i) % list.length]);

/**
 * The "related products" cards shown before the final CTA of every product page.
 * - Child page: the next 3 live products in the same category.
 * - Category page: the next 3 live product categories.
 * Only live pages are returned, so the cards never link to a 404.
 */
export function getRelatedProducts(categorySlug: string, productSlug?: string, count = 3): RelatedProducts | undefined {
  const category = getProductCategory(categorySlug);
  if (!category) return undefined;

  if (productSlug) {
    const products = category.products.filter((p) => p.live);
    const index = products.findIndex((p) => p.slug === productSlug);
    const items = rotateFrom(products, index, count)
      .filter((p) => p.slug !== productSlug)
      .map((p) => ({ title: p.title, description: p.description, href: p.path }));
    return items.length
      ? { eyebrow: 'Related Products', heading: `More from ${category.title}`, items }
      : undefined;
  }

  const categories = productCategories.filter((c) => c.live);
  const index = categories.findIndex((c) => c.slug === categorySlug);
  const items = rotateFrom(categories, index, count)
    .filter((c) => c.slug !== categorySlug)
    .map((c) => ({ title: c.title, description: c.description, href: c.path }));
  return items.length
    ? { eyebrow: 'Related Products', heading: 'Explore More AI Automation Products', items }
    : undefined;
}
