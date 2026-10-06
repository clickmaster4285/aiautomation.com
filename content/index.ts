// content/index.ts
import { ServiceContent, Section } from './type';
import { aiWorkflowAutomation } from './ai-workflow-automation';
import { aiWorkflowAutomationService } from './ai-workflow-automation-service';
import { businessProcessAutomation } from './business-process-automation';
import { aiAgentDevelopment } from './ai-agent-development';
import { aiIntegrationServices } from './ai-integration-service';
import { roboticProcessAutomation } from './robotic-process-automation';
import { aiChatbotAutomation } from './ai-chatbot-automation';
import { aiSalesAutomation } from './ai-sales-automation';
import { aiCustomerSupportAutomation } from './ai-customer-support-automation';
import { aiDataDocumentAutomation } from './ai-data-document-automation';
import { aiVoiceAgents } from './ai-voice-agents';
import { aiKnowledgeAssistants } from './ai-knowledge-assistants';
import { aiMarketingAutomation } from './ai-marketing-automation';

// Import homepage data
import { homepageData, getHeroData, getServicesList, getFAQs, getTestimonials, getIndustriesList, getToolsCategories, getProcessSteps, getStats } from './homepage';

// Import service pages from solution index
import { 
  SERVICE_PAGES, 
  getServiceByUrl, 
  getServicesByCategory, 
  getAllCategories, 
  getServiceRoutes, 
  searchServices,
  type ServicePage 
} from './solution index';

import DefaultTemplate from '@/components/templates/ServiceTemplate';

// ── Helper function to create sections from rich content ──
function createSectionsFromRichContent(page: ServicePage): Section[] {
  const sections: Section[] = [];
  const richContent = page.richContent;
  const title = page.title.split(' | ')[0] || page.title;
  
  if (!richContent) {
    return getFallbackSections(page);
  }
  
  const isLeadGen = page.url?.includes('/ai-lead-generation');
  const heroImageSrc = isLeadGen
    ? '/images/lead.jpg'
    : `/images/${page.filePath.replace('.md', '')}-hero.png`;

  sections.push({
    type: 'hero',
    heading: title,
    subheading: page.description,
    content: richContent.heroContent || [page.description],
    stats: richContent.stats || [],
    ctas: [
      { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
      { text: 'View Work', link: '/work', primary: false }
    ],
    image: {
      src: heroImageSrc,
      alt: `${title} Illustration`,
      // Intrinsic sizes of lead.jpg and the *-hero.png illustrations.
      width: isLeadGen ? 768 : 1792,
      height: isLeadGen ? 512 : 1024
    }
  });
  
  if (richContent.sectionContent) {
    Object.entries(richContent.sectionContent).forEach(([heading, content]) => {
      sections.push({
        type: 'text',
        heading: heading,
        content: content
      });
    });
  }
  
  const serviceName = title.replace(/\s+Automation$/, '');

  if (richContent.featureItems && richContent.featureItems.length > 0) {
    sections.push({
      type: 'features',
      heading: `Key features of ${serviceName}`,
      subheading: '',
      items: richContent.featureItems
    });
  }

  const alreadyHasHowWeWork = sections.some((section) =>
    /how we work/i.test(section.heading || '')
  );
  if (richContent.stepItems && richContent.stepItems.length > 0 && !alreadyHasHowWeWork) {
    sections.push({
      type: 'steps',
      heading: `How ${serviceName} gets built`,
      subheading: '',
      items: richContent.stepItems
    });
  }
  
  if (richContent.faqItems && richContent.faqItems.length > 0) {
    sections.push({
      type: 'faq',
      heading: `${serviceName} questions`,
      items: richContent.faqItems
    });
  }
  
  sections.push({
    type: 'cta',
    heading: richContent.ctaContent?.heading || 'Ready to Get Started?',
    subheading: richContent.ctaContent?.subheading || 'Contact us today to discuss how we can help you achieve your goals.',
    cta: {
      text: richContent.ctaContent?.buttonText || 'Book a Free Consultation',
      link: richContent.ctaContent?.buttonLink || '/free-automation-audit',
      primary: true
    }
  });
  
  return sections;
}

// ── Fallback sections if no rich content ──
function getFallbackSections(page: ServicePage): Section[] {
  const title = page.title.split(' | ')[0] || page.title;
  return [
    {
      type: 'hero',
      heading: title,
      subheading: page.description,
      content: [page.summary || page.description],
      ctas: [
        { text: 'Get Started', link: '/contact', primary: true },
        { text: 'Learn More', link: '#learn-more', primary: false }
      ]
    },
    {
      type: 'text',
      heading: 'Overview',
      content: [page.summary || page.description]
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: page.faqs.map((faq: string) => ({
        title: faq,
        description: `Contact us for more information about ${faq.toLowerCase().replace('?', '')}.`
      }))
    },
    {
      type: 'cta',
      heading: 'Ready to Get Started?',
      subheading: 'Contact us today to discuss how we can help you achieve your goals.',
      cta: {
        text: 'Book a Free Consultation',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ];
}

// ── Helper function to extract slug from URL ──
function extractSlugFromUrl(url: string): string {
  // Remove leading /services/ and trailing slashes
  return url.replace(/^\/services\//, '').replace(/\/$/, '');
}

// ── Build service content from SERVICE_PAGES ──
// This ensures ALL services from solution index are included
const builtServiceContent: Record<string, ServiceContent> = {};

SERVICE_PAGES.forEach(page => {
  // Extract the slug from the URL (last part after the last /)
  const urlParts = page.url.replace(/^\/|\/$/g, '').split('/');
  const slug = urlParts[urlParts.length - 1]; // Get the last part as slug
  
  const content: ServiceContent = {
    slug: slug,
    title: page.title.split(' | ')[0] || page.title,
    metaDescription: page.metaDescription ?? page.description,
    keywords: page.keywords.join(', '),
    template: 'default',
    path: page.url,
    sections: createSectionsFromRichContent(page),
  };
  
  builtServiceContent[slug] = content;
});

// ── Initial service content from individual files ──
const initialServiceContent: Record<string, ServiceContent> = {
  'ai-workflow-automation': aiWorkflowAutomation,
  'ai-workflow-automation-service': aiWorkflowAutomationService,
  'business-process-automation': businessProcessAutomation,
  'ai-agent-development': aiAgentDevelopment,
  'ai-integration-services': aiIntegrationServices,
  'robotic-process-automation': roboticProcessAutomation,
  'ai-chatbots': aiChatbotAutomation,
  'ai-sales-automation': aiSalesAutomation,
  'ai-customer-support-automation': aiCustomerSupportAutomation,
  'ai-data-document-automation': aiDataDocumentAutomation,
  'ai-voice-agents': aiVoiceAgents,
  'ai-knowledge-assistants': aiKnowledgeAssistants,
  'ai-marketing-automation': aiMarketingAutomation,
};

// ── Final service content map (merge both sources) ──
export const serviceContent: Record<string, ServiceContent> = {
  ...initialServiceContent,
  ...builtServiceContent,
};

// ── Service Categories ──
export interface ServiceItem {
  title: string;
  slug: string;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  description?: string;
  heroTitle?: string;
  heroDescription?: string;
  image?: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Core Automation',
    slug: 'core-automation',
    description: 'Automate your core business processes with AI-driven workflows and robotics.',
    heroTitle: 'Core Automation Solutions',
    heroDescription: 'Streamline operations, reduce errors, and scale effortlessly with our core automation services.',
    services: [
      { title: 'AI Workflow Automation', slug: 'ai-workflow-automation', description: 'Automate repetitive tasks and complex workflows with AI.' },
      { title: 'Business Process Automation', slug: 'business-process-automation', description: 'End-to-end automation of business processes.' },
      { title: 'Robotic Process Automation (RPA)', slug: 'robotic-process-automation', description: 'Deploy software robots to handle rule-based tasks.' },
      { title: 'AI Reporting Automation', slug: 'ai-reporting-automation', description: 'Automated reports and dashboards with AI summaries.' },
    ],
  },
  {
    title: 'AI Agents & Assistants',
    slug: 'ai-agents-and-assistants',   
    description: 'Deploy intelligent agents and assistants that handle customer interactions, data processing, and more.',
    heroTitle: 'AI Agents & Assistants',
    heroDescription: 'From chatbots to voice agents – create AI assistants that work 24/7 for your business.',
    services: [
      { title: 'AI Agent Development', slug: 'ai-agent-development', description: 'Build autonomous agents for complex tasks.' },
      { title: 'AI Chatbots', slug: 'ai-chatbots', description: 'AI-powered chatbots for customer engagement.' },
      { title: 'AI Voice Agents', slug: 'ai-voice-agents', description: 'Voice assistants for hands-free operations.' },
      { title: 'AI Knowledge Assistants', slug: 'ai-knowledge-assistants', description: 'Assistants that retrieve and summarize knowledge.' },
      { title: 'AI Lead Generation', slug: 'ai-lead-generation', description: 'AI-powered lead generation and qualification systems.' },
    ],
  },
  // ── REMOVED: 'Automation by Function' category (main category pages removed; its former
  // subpages now 301-redirect to their /solutions/ equivalents in next.config.ts) ──
  {
    title: 'AI Strategy & Development',
    slug: 'ai-strategy-development',
    description: 'Strategic AI consulting and custom development services to transform your business.',
    heroTitle: 'AI Strategy & Development',
    heroDescription: 'From strategy to execution – we help you plan, build, and deploy AI solutions that drive real business value.',
    services: [
      {
        title: 'AI Strategy & Advisory',
        slug: 'ai-strategy-advisory',
        description: 'Strategy that ships — opportunity audits, roadmaps, and implementation.',
      },
      {
        title: 'Custom AI Development',
        slug: 'custom-ai-development',
        description: 'Custom AI solutions on proven models with honest scoping.',
      },
    ],
  },
];

// ── Flat list of all services (root-level URLs, no /category/ prefix) ──
export const allServices: { slug: string; title: string; path: string }[] = [
  ...serviceCategories.flatMap((cat) =>
    cat.services.map((s) => ({
      slug: s.slug,
      title: s.title,
      path: `/services/${s.slug}`,
    }))
  ),
];

// ── Helpers ──
export const getServiceBySlug = (slug: string): ServiceContent | undefined => {
  // Check both sources
  if (initialServiceContent[slug]) return initialServiceContent[slug];
  if (builtServiceContent[slug]) return builtServiceContent[slug];
  return undefined;
};

export const getAllServiceSlugs = (): string[] => {
  return allServices.map((s) => s.slug);
};

export const getTemplate = (slug: string) => {
  return DefaultTemplate;
};

// ── Re-export everything from solution index ──
export * from './solution index';

export { 
  SERVICE_PAGES,
  getServiceByUrl, 
  getServicesByCategory, 
  getAllCategories, 
  getServiceRoutes, 
  searchServices,
  type ServicePage
};

// ──────────────────────────────────────────────
// ── PLATFORM DATA FOR NAV DROPDOWN ──
// ──────────────────────────────────────────────

export interface PlatformItem {
  title: string;
  path: string;
  description?: string;
}

export interface PlatformCategory {
  title: string;
  platforms: PlatformItem[];
}

export const platformCategories: PlatformCategory[] = [
  {
    title: 'Zapier',
    platforms: [
      {
        title: 'Zapier Experts',
        path: '/platforms/zapier-automation-services',
        description: 'Build, fix, and scale automations',
      },
    ],
  },
  {
    title: 'Make (Integromat)',
    platforms: [
      {
        title: 'Make Automation',
        path: '/platforms/make-automation-services',
        description: 'Visual workflows with real logic',
      },
    ],
  },
  {
    title: 'n8n',
    platforms: [
      {
        title: 'n8n Automation',
        path: '/platforms/n8n-automation-services',
        description: 'Self-hosted, AI-native workflows',
      },
    ],
  },
  {
    title: 'HubSpot',
    platforms: [
      {
        title: 'HubSpot Automation',
        path: '/platforms/hubspot-automation-services',
        description: 'Workflows, lead routing, data hygiene',
      },
    ],
  },
  {
    title: 'GoHighLevel',
    platforms: [
      {
        title: 'GHL Automation',
        path: '/platforms/gohighlevel-automation-services',
        description: 'Funnels, pipelines, AI follow-up',
      },
    ],
  },
];

// ──────────────────────────────────────────────
// ── INDUSTRY DATA FOR NAV DROPDOWN ──
// ──────────────────────────────────────────────

export interface IndustryItem {
  title: string;
  path: string;
  description?: string;
}

export interface IndustryCategory {
  title: string;
  industries: IndustryItem[];
}

export const industryCategories: IndustryCategory[] = [
  {
    title: 'Industries',
    industries: [
      {
        title: 'Finance & Accounting',
        path: '/industries/ai-automation-for-finance-accounting',
        description: 'Automate invoicing, reconciliation, and reporting',
      },
      {
        title: 'Healthcare',
        path: '/industries/ai-automation-for-healthcare',
        description: 'Appointment scheduling, intake, reminders, and follow-up',
      },
      {
        title: 'Law Firms',
        path: '/industries/ai-automation-for-law-firms',
        description: 'Client intake, document generation, deadline tracking',
      },
      {
        title: 'E-commerce',
        path: '/industries/ai-automation-for-ecommerce',
        description: 'Support, orders, cart recovery, and marketing',
      },
      {
        title: 'SaaS',
        path: '/industries/ai-automation-for-saas',
        description: 'Onboarding, support deflection, churn signals, and revenue ops',
      },
    ],
  },
];