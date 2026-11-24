// content/Solutions/pages.ts
// Route registry for the content-driven solution pages:
//   /solutions/<service>          → SOLUTION_HUBS      (content/Solutions/<service>.ts)
//   /solutions/<service>/<slug>   → SOLUTION_DETAILS   (content/Solutions/<service>/<slug>.ts)
// app/solutions/[service] and app/solutions/[service]/[slug] generate exactly these pages;
// anything else is a 404. To publish a page: add its content file, then register it here
// (detail pages are registered through `solutionsContent` in ./index.ts).
import type { SolutionPageContent } from '@/content/type';
import { solutionsContent } from './index';

import { aiAgents } from './ai-agents';
import { aiChatbots } from './ai-chatbots';
import { aiVoiceAgents } from './ai-voice-agents';
import { aiWorkflowAutomation } from './ai-workflow-automation';
import { businessProcessAutomation } from './business-process-automation';
import { leadGenerationAutomation } from './lead-generation-automation';
import { reportingAutomation } from './reporting-automation';
import { salesAutomationWithSalesforce } from './sales-automation/with-salesforce';

/** Solution type pages rendered from content. (Hand-built hubs live in components/solutions/hubs.) */
export const SOLUTION_HUBS: Record<string, SolutionPageContent> = {
  'ai-agents': aiAgents,
  'ai-chatbots': aiChatbots,
  'ai-voice-agents': aiVoiceAgents,
  'ai-workflow-automation': aiWorkflowAutomation,
  'business-process-automation': businessProcessAutomation,
  'lead-generation-automation': leadGenerationAutomation,
  'reporting-automation': reportingAutomation,
};

/** Solution type pages that are hand-built components (registered in components/solutions/hubs). */
export const CUSTOM_HUB_SERVICES = [
  'appointment-booking-automation',
  'crm-automation',
  'customer-support-automation',
  'document-automation',
  'invoice-automation',
  'marketing-automation',
  'sales-automation',
] as const;

/** Every /solutions/<service>/<slug> page, keyed "<service>/<slug>". */
export const SOLUTION_DETAILS: Record<string, SolutionPageContent> = {
  ...solutionsContent,
  // Not in solutionsContent yet: its content uses a different shape (array sections, no category).
  'sales-automation/with-salesforce': salesAutomationWithSalesforce,
};

export const getSolutionHub = (service: string) => SOLUTION_HUBS[service];
export const getSolutionDetail = (service: string, slug: string) => SOLUTION_DETAILS[`${service}/${slug}`];

export const solutionDetailParams = () =>
  Object.keys(SOLUTION_DETAILS).map((key) => {
    const [service, slug] = key.split('/');
    return { service, slug };
  });

/** Every solution page path below /solutions, e.g. "ai-agents" and "ai-agents/for-construction" (sitemap). */
export const allSolutionPaths = () =>
  [...Object.keys(SOLUTION_HUBS), ...CUSTOM_HUB_SERVICES, ...Object.keys(SOLUTION_DETAILS)].sort();
