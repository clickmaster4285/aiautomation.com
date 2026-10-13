// content/services/index.ts
import { ServiceContent } from '../type';

// ── Core automation ──
import { aiWorkflowAutomation } from './ai-workflow-automation';
import { aiWorkflowAutomationService } from './ai-workflow-automation-service';
import { businessProcessAutomation } from './business-process-automation';
import { roboticProcessAutomation } from './robotic-process-automation';
import { aiReportingAutomation } from './ai-reporting-automation';

// ── AI Agents & Assistants ──
import { aiAgentDevelopment } from './ai-agent-development';
import { aiChatbotAutomation } from './ai-chatbot-automation';
import { aiVoiceAgents } from './ai-voice-agents';
import { aiKnowledgeAssistants } from './ai-knowledge-assistants';
import { aiLeadGeneration } from './ai-lead-generation';

// ── Strategy & Development ──
import { aiStrategyAdvisory } from './ai-strategy-advisory';
import { customAiDevelopment } from './custom-ai-development';

// ── Other services ──
import { aiIntegrationServices } from './ai-integration-service';
import { aiSalesAutomation } from './ai-sales-automation';
import { aiCustomerSupportAutomation } from './ai-customer-support-automation';
import { aiDataDocumentAutomation } from './ai-data-document-automation';
import { aiMarketingAutomation } from './ai-marketing-automation';



// Import service pages from solution index — used for sitemap, search, meta
import {
  SERVICE_PAGES,
  getServiceByUrl,
  getServicesByCategory,
  getAllCategories,
  getServiceRoutes,
  searchServices,
  type ServicePage,
} from '../solution-index';

import DefaultTemplate from '@/components/templates/ServiceTemplate';

// ── Service content map ──
export const serviceContent: Record<string, ServiceContent> = {
  // Core automation
  'ai-workflow-automation': aiWorkflowAutomation,
  'ai-workflow-automation-service': aiWorkflowAutomationService,
  'business-process-automation': businessProcessAutomation,
  'robotic-process-automation': roboticProcessAutomation,
  'ai-reporting-automation': aiReportingAutomation,

  // AI Agents & Assistants
  'ai-agent-development': aiAgentDevelopment,
  'ai-chatbots': aiChatbotAutomation,
  'ai-voice-agents': aiVoiceAgents,
  'ai-knowledge-assistants': aiKnowledgeAssistants,
  'ai-lead-generation': aiLeadGeneration,

  // Strategy & Development
  'ai-strategy-advisory': aiStrategyAdvisory,
  'custom-ai-development': customAiDevelopment,

  // Other services
  'ai-integration-services': aiIntegrationServices,
  'ai-sales-automation': aiSalesAutomation,
  'ai-customer-support-automation': aiCustomerSupportAutomation,
  'ai-data-document-automation': aiDataDocumentAutomation,
  'ai-marketing-automation': aiMarketingAutomation,
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

// ── Flat list of all services ──
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
  return serviceContent[slug];
};

export const getAllServiceSlugs = (): string[] => {
  return allServices.map((s) => s.slug);
};

export const getTemplate = (slug: string) => {
  return DefaultTemplate;
};

// ── Re-export from solution index (for sitemap, search, meta) ──
export * from '../solution-index';

export {
  SERVICE_PAGES,
  getServiceByUrl,
  getServicesByCategory,
  getAllCategories,
  getServiceRoutes,
  searchServices,
  type ServicePage,
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