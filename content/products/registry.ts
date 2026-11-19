// content/products/registry.ts
// Maps every product URL to its content. Used ONLY by the server routes
// app/products/[service]/page.tsx and app/products/[service]/[slug]/page.tsx.
// The types below require an entry for every service/slug listed in ./routes.ts,
// and reject entries that are not listed there.

import type { HubSeo } from '@/lib/hub-seo';
import type { ProductPageContent } from './types';
import { PRODUCT_ROUTES, type ProductService, type ProductSlug } from './routes';

// ── Service (parent) pages ──
import { aiSalesCrm, aiSalesCrmSeo, aiSalesCrmKeywords } from './ai-sales-crm';
import { aiCustomerSupport, aiCustomerSupportSeo, aiCustomerSupportKeywords } from './ai-customer-support';
import { aiMarketingAutomation, aiMarketingAutomationSeo, aiMarketingAutomationKeywords } from './ai-marketing-automation';

// ── AI Sales CRM children ──
import { aiSalesAutomationSoftware, aiSalesAutomationSoftwareSeo, aiSalesAutomationSoftwareKeywords } from './ai-sales-crm/ai-sales-automation-software';
import { aiCrmSoftware, aiCrmSoftwareSeo, aiCrmSoftwareKeywords } from './ai-sales-crm/ai-crm-software';
import { aiLeadGenerationTools, aiLeadGenerationToolsSeo, aiLeadGenerationToolsKeywords } from './ai-sales-crm/ai-lead-generation-tools';
import { aiLeadManagementSoftware, aiLeadManagementSoftwareSeo, aiLeadManagementSoftwareKeywords } from './ai-sales-crm/ai-lead-management-software';
import { aiSalesAssistant, aiSalesAssistantSeo, aiSalesAssistantKeywords } from './ai-sales-crm/ai-sales-assistant';

// ── AI Customer Support children ──
import { aiCustomerSupportSoftware, aiCustomerSupportSoftwareSeo, aiCustomerSupportSoftwareKeywords } from './ai-customer-support/ai-customer-support-software';
import { aiChatbotSoftware, aiChatbotSoftwareSeo, aiChatbotSoftwareKeywords } from './ai-customer-support/ai-chatbot-software';
import { aiVirtualAssistant, aiVirtualAssistantSeo, aiVirtualAssistantKeywords } from './ai-customer-support/ai-virtual-assistant';
import { aiCustomerServiceAutomation, aiCustomerServiceAutomationSeo, aiCustomerServiceAutomationKeywords } from './ai-customer-support/ai-customer-service-automation';
import { aiVoiceAgent, aiVoiceAgentSeo, aiVoiceAgentKeywords } from './ai-customer-support/ai-voice-agent';

// ── AI Marketing Automation children ──
import { aiMarketingAutomationSoftware, aiMarketingAutomationSoftwareSeo, aiMarketingAutomationSoftwareKeywords } from './ai-marketing-automation/ai-marketing-automation-software';
import { aiEmailAutomation, aiEmailAutomationSeo, aiEmailAutomationKeywords } from './ai-marketing-automation/ai-email-automation';
import { aiSocialMediaAutomation, aiSocialMediaAutomationSeo, aiSocialMediaAutomationKeywords } from './ai-marketing-automation/ai-social-media-automation';
import { aiSeoAutomationTools, aiSeoAutomationToolsSeo, aiSeoAutomationToolsKeywords } from './ai-marketing-automation/ai-seo-automation-tools';
import { aiCampaignManagementSoftware, aiCampaignManagementSoftwareSeo, aiCampaignManagementSoftwareKeywords } from './ai-marketing-automation/ai-campaign-management-software';

export interface ProductEntry {
  content: ProductPageContent;
  seo: HubSeo;
  keywords: string[];
}

const entry = (content: ProductPageContent, seo: HubSeo, keywords: readonly string[]): ProductEntry => ({
  content,
  seo,
  keywords: [...keywords],
});

/** /products/[service] */
export const servicePages: Record<ProductService, ProductEntry> = {
  'ai-sales-crm': entry(aiSalesCrm, aiSalesCrmSeo, aiSalesCrmKeywords),
  'ai-customer-support': entry(aiCustomerSupport, aiCustomerSupportSeo, aiCustomerSupportKeywords),
  'ai-marketing-automation': entry(aiMarketingAutomation, aiMarketingAutomationSeo, aiMarketingAutomationKeywords),
};

/** /products/[service]/[slug] */
export const childPages: { [S in ProductService]: Record<ProductSlug<S>, ProductEntry> } = {
  'ai-sales-crm': {
    'ai-sales-automation-software': entry(aiSalesAutomationSoftware, aiSalesAutomationSoftwareSeo, aiSalesAutomationSoftwareKeywords),
    'ai-crm-software': entry(aiCrmSoftware, aiCrmSoftwareSeo, aiCrmSoftwareKeywords),
    'ai-lead-generation-tools': entry(aiLeadGenerationTools, aiLeadGenerationToolsSeo, aiLeadGenerationToolsKeywords),
    'ai-lead-management-software': entry(aiLeadManagementSoftware, aiLeadManagementSoftwareSeo, aiLeadManagementSoftwareKeywords),
    'ai-sales-assistant': entry(aiSalesAssistant, aiSalesAssistantSeo, aiSalesAssistantKeywords),
  },
  'ai-customer-support': {
    'ai-customer-support-software': entry(aiCustomerSupportSoftware, aiCustomerSupportSoftwareSeo, aiCustomerSupportSoftwareKeywords),
    'ai-chatbot-software': entry(aiChatbotSoftware, aiChatbotSoftwareSeo, aiChatbotSoftwareKeywords),
    'ai-virtual-assistant': entry(aiVirtualAssistant, aiVirtualAssistantSeo, aiVirtualAssistantKeywords),
    'ai-customer-service-automation': entry(aiCustomerServiceAutomation, aiCustomerServiceAutomationSeo, aiCustomerServiceAutomationKeywords),
    'ai-voice-agent': entry(aiVoiceAgent, aiVoiceAgentSeo, aiVoiceAgentKeywords),
  },
  'ai-marketing-automation': {
    'ai-marketing-automation-software': entry(aiMarketingAutomationSoftware, aiMarketingAutomationSoftwareSeo, aiMarketingAutomationSoftwareKeywords),
    'ai-email-automation': entry(aiEmailAutomation, aiEmailAutomationSeo, aiEmailAutomationKeywords),
    'ai-social-media-automation': entry(aiSocialMediaAutomation, aiSocialMediaAutomationSeo, aiSocialMediaAutomationKeywords),
    'ai-seo-automation-tools': entry(aiSeoAutomationTools, aiSeoAutomationToolsSeo, aiSeoAutomationToolsKeywords),
    'ai-campaign-management-software': entry(aiCampaignManagementSoftware, aiCampaignManagementSoftwareSeo, aiCampaignManagementSoftwareKeywords),
  },
};

const isService = (s: string): s is ProductService => Object.prototype.hasOwnProperty.call(PRODUCT_ROUTES, s);

export function getServicePage(service: string): ProductEntry | undefined {
  return isService(service) ? servicePages[service] : undefined;
}

export function getChildPage(service: string, slug: string): ProductEntry | undefined {
  if (!isService(service)) return undefined;
  const children = childPages[service] as Record<string, ProductEntry>;
  return Object.prototype.hasOwnProperty.call(children, slug) ? children[slug] : undefined;
}

export const serviceParams = () => (Object.keys(PRODUCT_ROUTES) as ProductService[]).map((service) => ({ service }));

export const childParams = () =>
  (Object.entries(PRODUCT_ROUTES) as [ProductService, readonly string[]][]).flatMap(([service, slugs]) =>
    slugs.map((slug) => ({ service, slug })),
  );
