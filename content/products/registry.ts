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
import { aiHrRecruitment, aiHrRecruitmentSeo, aiHrRecruitmentKeywords } from './ai-hr-recruitment';
import { aiWorkflowBpa, aiWorkflowBpaSeo, aiWorkflowBpaKeywords } from './ai-workflow-business-process-automation';
import { aiFinanceAccounting, aiFinanceAccountingSeo, aiFinanceAccountingKeywords } from './ai-finance-accounting';
import { aiEcommerceAutomation, aiEcommerceAutomationSeo, aiEcommerceAutomationKeywords } from './ai-ecommerce-automation';

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

// ── AI HR & Recruitment children ──
import { aiRecruitmentSoftware, aiRecruitmentSoftwareSeo, aiRecruitmentSoftwareKeywords } from './ai-hr-recruitment/ai-recruitment-software';
import { aiResumeScreeningSoftware, aiResumeScreeningSoftwareSeo, aiResumeScreeningSoftwareKeywords } from './ai-hr-recruitment/ai-resume-screening-software';
import { aiHrAutomation, aiHrAutomationSeo, aiHrAutomationKeywords } from './ai-hr-recruitment/ai-hr-automation';
import { aiInterviewSchedulingSoftware, aiInterviewSchedulingSoftwareSeo, aiInterviewSchedulingSoftwareKeywords } from './ai-hr-recruitment/ai-interview-scheduling-software';
import { aiEmployeeManagementSoftware, aiEmployeeManagementSoftwareSeo, aiEmployeeManagementSoftwareKeywords } from './ai-hr-recruitment/ai-employee-management-software';

// ── AI Workflow & Business Process Automation children ──
import { aiWorkflowAutomationSoftware, aiWorkflowAutomationSoftwareSeo, aiWorkflowAutomationSoftwareKeywords } from './ai-workflow-business-process-automation/ai-workflow-automation-software';
import { businessProcessAutomationSoftware, businessProcessAutomationSoftwareSeo, businessProcessAutomationSoftwareKeywords } from './ai-workflow-business-process-automation/business-process-automation-software';
import { aiTaskAutomation, aiTaskAutomationSeo, aiTaskAutomationKeywords } from './ai-workflow-business-process-automation/ai-task-automation';
import { intelligentProcessAutomation, intelligentProcessAutomationSeo, intelligentProcessAutomationKeywords } from './ai-workflow-business-process-automation/intelligent-process-automation';
import { enterpriseWorkflowAutomation, enterpriseWorkflowAutomationSeo, enterpriseWorkflowAutomationKeywords } from './ai-workflow-business-process-automation/enterprise-workflow-automation';

// ── AI Finance & Accounting children ──
import { aiAccountingAutomation, aiAccountingAutomationSeo, aiAccountingAutomationKeywords } from './ai-finance-accounting/ai-accounting-automation';
import { aiInvoiceProcessingSoftware, aiInvoiceProcessingSoftwareSeo, aiInvoiceProcessingSoftwareKeywords } from './ai-finance-accounting/ai-invoice-processing-software';
import { aiExpenseManagementSoftware, aiExpenseManagementSoftwareSeo, aiExpenseManagementSoftwareKeywords } from './ai-finance-accounting/ai-expense-management-software';
import { aiBookkeepingSoftware, aiBookkeepingSoftwareSeo, aiBookkeepingSoftwareKeywords } from './ai-finance-accounting/ai-bookkeeping-software';
import { aiFinancialAutomation, aiFinancialAutomationSeo, aiFinancialAutomationKeywords } from './ai-finance-accounting/ai-financial-automation';

// ── AI E-commerce Automation children ──
import { aiEcommerceAutomationSoftware, aiEcommerceAutomationSoftwareSeo, aiEcommerceAutomationSoftwareKeywords } from './ai-ecommerce-automation/ai-ecommerce-automation-software';
import { aiInventoryManagementSoftware, aiInventoryManagementSoftwareSeo, aiInventoryManagementSoftwareKeywords } from './ai-ecommerce-automation/ai-inventory-management-software';
import { aiOrderProcessingAutomation, aiOrderProcessingAutomationSeo, aiOrderProcessingAutomationKeywords } from './ai-ecommerce-automation/ai-order-processing-automation';
import { aiProductRecommendationSoftware, aiProductRecommendationSoftwareSeo, aiProductRecommendationSoftwareKeywords } from './ai-ecommerce-automation/ai-product-recommendation-software';
import { aiShoppingAssistant, aiShoppingAssistantSeo, aiShoppingAssistantKeywords } from './ai-ecommerce-automation/ai-shopping-assistant';

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
  'ai-hr-recruitment': entry(aiHrRecruitment, aiHrRecruitmentSeo, aiHrRecruitmentKeywords),
  'ai-workflow-business-process-automation': entry(aiWorkflowBpa, aiWorkflowBpaSeo, aiWorkflowBpaKeywords),
  'ai-finance-accounting': entry(aiFinanceAccounting, aiFinanceAccountingSeo, aiFinanceAccountingKeywords),
  'ai-ecommerce-automation': entry(aiEcommerceAutomation, aiEcommerceAutomationSeo, aiEcommerceAutomationKeywords),
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
  'ai-hr-recruitment': {
    'ai-recruitment-software': entry(aiRecruitmentSoftware, aiRecruitmentSoftwareSeo, aiRecruitmentSoftwareKeywords),
    'ai-resume-screening-software': entry(aiResumeScreeningSoftware, aiResumeScreeningSoftwareSeo, aiResumeScreeningSoftwareKeywords),
    'ai-hr-automation': entry(aiHrAutomation, aiHrAutomationSeo, aiHrAutomationKeywords),
    'ai-interview-scheduling-software': entry(aiInterviewSchedulingSoftware, aiInterviewSchedulingSoftwareSeo, aiInterviewSchedulingSoftwareKeywords),
    'ai-employee-management-software': entry(aiEmployeeManagementSoftware, aiEmployeeManagementSoftwareSeo, aiEmployeeManagementSoftwareKeywords),
  },
  'ai-workflow-business-process-automation': {
    'ai-workflow-automation-software': entry(aiWorkflowAutomationSoftware, aiWorkflowAutomationSoftwareSeo, aiWorkflowAutomationSoftwareKeywords),
    'business-process-automation-software': entry(businessProcessAutomationSoftware, businessProcessAutomationSoftwareSeo, businessProcessAutomationSoftwareKeywords),
    'ai-task-automation': entry(aiTaskAutomation, aiTaskAutomationSeo, aiTaskAutomationKeywords),
    'intelligent-process-automation': entry(intelligentProcessAutomation, intelligentProcessAutomationSeo, intelligentProcessAutomationKeywords),
    'enterprise-workflow-automation': entry(enterpriseWorkflowAutomation, enterpriseWorkflowAutomationSeo, enterpriseWorkflowAutomationKeywords),
  },
  'ai-finance-accounting': {
    'ai-accounting-automation': entry(aiAccountingAutomation, aiAccountingAutomationSeo, aiAccountingAutomationKeywords),
    'ai-invoice-processing-software': entry(aiInvoiceProcessingSoftware, aiInvoiceProcessingSoftwareSeo, aiInvoiceProcessingSoftwareKeywords),
    'ai-expense-management-software': entry(aiExpenseManagementSoftware, aiExpenseManagementSoftwareSeo, aiExpenseManagementSoftwareKeywords),
    'ai-bookkeeping-software': entry(aiBookkeepingSoftware, aiBookkeepingSoftwareSeo, aiBookkeepingSoftwareKeywords),
    'ai-financial-automation': entry(aiFinancialAutomation, aiFinancialAutomationSeo, aiFinancialAutomationKeywords),
  },
  'ai-ecommerce-automation': {
    'ai-ecommerce-automation-software': entry(aiEcommerceAutomationSoftware, aiEcommerceAutomationSoftwareSeo, aiEcommerceAutomationSoftwareKeywords),
    'ai-inventory-management-software': entry(aiInventoryManagementSoftware, aiInventoryManagementSoftwareSeo, aiInventoryManagementSoftwareKeywords),
    'ai-order-processing-automation': entry(aiOrderProcessingAutomation, aiOrderProcessingAutomationSeo, aiOrderProcessingAutomationKeywords),
    'ai-product-recommendation-software': entry(aiProductRecommendationSoftware, aiProductRecommendationSoftwareSeo, aiProductRecommendationSoftwareKeywords),
    'ai-shopping-assistant': entry(aiShoppingAssistant, aiShoppingAssistantSeo, aiShoppingAssistantKeywords),
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
