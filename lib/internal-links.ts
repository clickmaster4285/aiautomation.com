// Curated, relevant targets. Only pairs that share a real service or industry.

export const SOLUTION_SERVICE_PAGE: Record<string, { href: string; label: string }> = {
  "ai-chatbots": { href: "/services/ai-chatbots", label: "AI Chatbots service" },
  "ai-agents": { href: "/services/ai-agent-development", label: "AI Agent Development" },
  "ai-voice-agents": { href: "/services/ai-voice-agents", label: "AI Voice Agents service" },
  "ai-workflow-automation": {
    href: "/services/ai-workflow-automation",
    label: "AI Workflow Automation service",
  },
  "business-process-automation": {
    href: "/services/business-process-automation",
    label: "Business Process Automation service",
  },
  "reporting-automation": {
    href: "/services/ai-reporting-automation",
    label: "AI Reporting Automation service",
  },
  "lead-generation-automation": {
    href: "/services/ai-lead-generation",
    label: "AI Lead Generation service",
  },
};

export const SEGMENT_INDUSTRY_PAGE: Record<string, { href: string; label: string }> = {
  healthcare: { href: "/industries/ai-automation-for-healthcare", label: "Healthcare industry" },
  "law-firms": { href: "/industries/ai-automation-for-law-firms", label: "Law firms industry" },
  ecommerce: { href: "/industries/ai-automation-for-ecommerce", label: "E-commerce industry" },
  saas: { href: "/industries/ai-automation-for-saas", label: "SaaS industry" },
  "real-estate": { href: "/industries/ai-automation-for-real-estate", label: "Real estate industry" },
  "accounting-firms": {
    href: "/industries/ai-automation-for-finance-accounting",
    label: "Finance and accounting industry",
  },
};

export const INDUSTRY_SOLUTION_LINKS: Record<string, { href: string; label: string }[]> = {
  "ai-automation-for-healthcare": [
    { href: "/solutions/ai-chatbots/for-healthcare", label: "AI Chatbots for Healthcare" },
    { href: "/solutions/ai-voice-agents/for-healthcare", label: "AI Voice Agents for Healthcare" },
    { href: "/solutions/appointment-booking-automation/for-healthcare", label: "Appointment Booking for Healthcare" },
    { href: "/solutions/customer-support-automation/for-healthcare", label: "Customer Support for Healthcare" },
    { href: "/solutions/document-automation/for-healthcare", label: "Document Automation for Healthcare" },
  ],
  "ai-automation-for-law-firms": [
    { href: "/solutions/ai-chatbots/for-law-firms", label: "AI Chatbots for Law Firms" },
    { href: "/solutions/document-automation/for-law-firms", label: "Document Automation for Law Firms" },
    { href: "/solutions/lead-generation-automation/for-law-firms", label: "Lead Generation for Law Firms" },
    { href: "/solutions/crm-automation/for-law-firms", label: "CRM Automation for Law Firms" },
    { href: "/solutions/invoice-automation/for-law-firms", label: "Invoice Automation for Law Firms" },
  ],
  "ai-automation-for-ecommerce": [
    { href: "/solutions/ai-chatbots/for-ecommerce", label: "AI Chatbots for E-commerce" },
    { href: "/solutions/marketing-automation/for-ecommerce", label: "Marketing Automation for E-commerce" },
    { href: "/solutions/customer-support-automation/for-ecommerce", label: "Support Automation for E-commerce" },
    { href: "/solutions/sales-automation/for-ecommerce", label: "Sales Automation for E-commerce" },
    { href: "/solutions/invoice-automation/for-ecommerce", label: "Invoice Automation for E-commerce" },
  ],
  "ai-automation-for-saas": [
    { href: "/solutions/ai-agents/for-saas", label: "AI Agents for SaaS" },
    { href: "/solutions/crm-automation/for-saas", label: "CRM Automation for SaaS" },
    { href: "/solutions/lead-generation-automation/for-saas", label: "Lead Generation for SaaS" },
    { href: "/solutions/marketing-automation/for-saas", label: "Marketing Automation for SaaS" },
    { href: "/solutions/customer-support-automation/for-saas", label: "Support Automation for SaaS" },
  ],
  "ai-automation-for-real-estate": [
    { href: "/solutions/ai-chatbots/for-real-estate", label: "AI Chatbots for Real Estate" },
    { href: "/solutions/lead-generation-automation/for-real-estate", label: "Lead Generation for Real Estate" },
    { href: "/solutions/crm-automation/for-real-estate", label: "CRM Automation for Real Estate" },
    { href: "/solutions/appointment-booking-automation/for-real-estate", label: "Booking Automation for Real Estate" },
    { href: "/solutions/sales-automation/for-real-estate", label: "Sales Automation for Real Estate" },
  ],
  "ai-automation-for-finance-accounting": [
    { href: "/solutions/invoice-automation/for-accounting-firms", label: "Invoice Automation for Accounting Firms" },
    { href: "/solutions/document-automation/for-accounting-firms", label: "Document Automation for Accounting Firms" },
    { href: "/solutions/reporting-automation/for-accounting-firms", label: "Reporting Automation for Accounting Firms" },
    { href: "/solutions/crm-automation/for-accounting-firms", label: "CRM Automation for Accounting Firms" },
    { href: "/solutions/ai-chatbots/for-accounting-firms", label: "AI Chatbots for Accounting Firms" },
  ],
  "ai-automation-for-professional-services": [
    { href: "/solutions/ai-chatbots/for-law-firms", label: "AI Chatbots for Law Firms" },
    { href: "/solutions/ai-chatbots/for-accounting-firms", label: "AI Chatbots for Accounting Firms" },
    { href: "/solutions/document-automation/for-law-firms", label: "Document Automation for Law Firms" },
    { href: "/solutions/invoice-automation/for-accounting-firms", label: "Invoice Automation for Accounting Firms" },
    { href: "/solutions/appointment-booking-automation/for-law-firms", label: "Booking Automation for Law Firms" },
  ],
  "ai-automation-for-marketing-agencies": [
    { href: "/solutions/reporting-automation", label: "Reporting Automation" },
    { href: "/solutions/marketing-automation", label: "Marketing Automation" },
    { href: "/solutions/lead-generation-automation", label: "Lead Generation Automation" },
    { href: "/solutions/crm-automation/with-hubspot", label: "HubSpot CRM Automation" },
    { href: "/services/ai-reporting-automation", label: "AI Reporting Automation service" },
    { href: "/services/ai-lead-generation", label: "AI Lead Generation service" },
  ],
};

export const SERVICE_SOLUTION_LINKS: Record<string, { href: string; label: string }[]> = {
  "ai-chatbots": [
    { href: "/solutions/ai-chatbots", label: "AI Chatbots" },
    { href: "/solutions/ai-chatbots/for-healthcare", label: "AI Chatbots for Healthcare" },
    { href: "/solutions/ai-chatbots/for-insurance", label: "AI Chatbots for Insurance" },
    { href: "/solutions/ai-chatbots/for-ecommerce", label: "AI Chatbots for E-commerce" },
    { href: "/solutions/ai-chatbots/for-law-firms", label: "AI Chatbots for Law Firms" },
  ],
  "ai-agent-development": [
    { href: "/solutions/ai-agents", label: "AI Agents" },
    { href: "/solutions/ai-agents/for-saas", label: "AI Agents for SaaS" },
    { href: "/solutions/ai-agents/for-healthcare", label: "AI Agents for Healthcare" },
    { href: "/solutions/ai-agents/for-real-estate", label: "AI Agents for Real Estate" },
  ],
  "ai-voice-agents": [
    { href: "/solutions/ai-voice-agents", label: "AI Voice Agents" },
    { href: "/solutions/ai-voice-agents/for-healthcare", label: "AI Voice Agents for Healthcare" },
    { href: "/solutions/ai-voice-agents/for-law-firms", label: "AI Voice Agents for Law Firms" },
    { href: "/solutions/ai-voice-agents/for-real-estate", label: "AI Voice Agents for Real Estate" },
  ],
  "ai-workflow-automation": [
    { href: "/solutions/ai-workflow-automation", label: "AI Workflow Automation" },
    { href: "/solutions/ai-workflow-automation/for-healthcare", label: "Workflow Automation for Healthcare" },
    { href: "/solutions/ai-workflow-automation/for-ecommerce", label: "Workflow Automation for E-commerce" },
    { href: "/solutions/ai-workflow-automation/for-manufacturing", label: "Workflow Automation for Manufacturing" },
  ],
  "business-process-automation": [
    { href: "/solutions/business-process-automation", label: "Business Process Automation" },
    { href: "/solutions/business-process-automation/for-healthcare", label: "Process Automation for Healthcare" },
    { href: "/solutions/business-process-automation/for-manufacturing", label: "Process Automation for Manufacturing" },
    { href: "/solutions/business-process-automation/for-logistics", label: "Process Automation for Logistics" },
  ],
  "ai-reporting-automation": [
    { href: "/solutions/reporting-automation", label: "Reporting Automation" },
    { href: "/solutions/reporting-automation/for-accounting-firms", label: "Reporting for Accounting Firms" },
    { href: "/solutions/reporting-automation/for-ecommerce", label: "Reporting for E-commerce" },
    { href: "/solutions/reporting-automation/for-healthcare", label: "Reporting for Healthcare" },
  ],
  "ai-lead-generation": [
    { href: "/solutions/lead-generation-automation", label: "Lead Generation Automation" },
    { href: "/solutions/lead-generation-automation/for-real-estate", label: "Lead Generation for Real Estate" },
    { href: "/solutions/lead-generation-automation/for-saas", label: "Lead Generation for SaaS" },
    { href: "/solutions/lead-generation-automation/for-law-firms", label: "Lead Generation for Law Firms" },
  ],
};

export const BLOG_RESOURCE_LINKS = [
  { href: "/services/ai-workflow-automation", label: "AI Workflow Automation" },
  { href: "/services/ai-chatbots", label: "AI Chatbots" },
  { href: "/services/ai-agent-development", label: "AI Agent Development" },
  { href: "/solutions/crm-automation", label: "CRM Automation" },
  { href: "/solutions/document-automation", label: "Document Automation" },
  { href: "/solutions/customer-support-automation", label: "Customer Support Automation" },
  { href: "/case-studies/ai-receptionist-lead-response-automation", label: "AI receptionist case study" },
  { href: "/free-automation-audit", label: "Free automation audit" },
];

// ─────────────────────────────────────────────────────────────
// Product pages linked from service and industry pages.
// Product pages were only reachable through the navbar and /products; these give each one
// in-content links from the service or industry page whose work it actually covers.
// Solution pages get theirs from TOPICS[topic].products in lib/link-graph.ts.
// ─────────────────────────────────────────────────────────────
const PR = "/products";

export const SERVICE_PRODUCT_LINKS: Record<string, string[]> = {
  "ai-workflow-automation": [
    `${PR}/ai-workflow-business-process-automation/ai-workflow-automation-software`,
    `${PR}/ai-workflow-business-process-automation/ai-task-automation`,
    `${PR}/ai-workflow-business-process-automation/enterprise-workflow-automation`,
    `${PR}/ai-hr-recruitment/ai-employee-management-software`,
  ],
  "business-process-automation": [
    `${PR}/ai-workflow-business-process-automation/business-process-automation-software`,
    `${PR}/ai-workflow-business-process-automation/intelligent-process-automation`,
    `${PR}/ai-hr-recruitment/ai-hr-automation`,
    `${PR}/ai-hr-recruitment/ai-recruitment-software`,
    `${PR}/ai-hr-recruitment/ai-resume-screening-software`,
    `${PR}/ai-finance-accounting/ai-expense-management-software`,
  ],
  "robotic-process-automation": [
    `${PR}/ai-workflow-business-process-automation/intelligent-process-automation`,
    `${PR}/ai-document-data-intelligence/ai-data-extraction-software`,
    `${PR}/ai-document-data-intelligence/ai-ocr-software`,
    `${PR}/ai-finance-accounting/ai-invoice-processing-software`,
  ],
  "ai-reporting-automation": [
    `${PR}/ai-finance-accounting/ai-financial-automation`,
    `${PR}/ai-marketing-automation/ai-campaign-management-software`,
    `${PR}/ai-document-data-intelligence/ai-data-extraction-software`,
  ],
  "ai-agent-development": [
    `${PR}/ai-agents-platforms/ai-agent-development`,
    `${PR}/ai-agents-platforms/autonomous-ai-agents`,
    `${PR}/ai-agents-platforms/multi-agent-systems`,
    `${PR}/ai-agents-platforms/enterprise-ai-agents`,
    `${PR}/ai-agents-platforms/ai-agent-platform`,
  ],
  "ai-chatbots": [
    `${PR}/ai-customer-support/ai-chatbot-software`,
    `${PR}/ai-customer-support/ai-customer-support-software`,
    `${PR}/ai-customer-support/ai-virtual-assistant`,
    `${PR}/ai-ecommerce-automation/ai-shopping-assistant`,
  ],
  "ai-voice-agents": [
    `${PR}/ai-customer-support/ai-voice-agent`,
    `${PR}/ai-customer-support/ai-customer-service-automation`,
    `${PR}/ai-customer-support/ai-virtual-assistant`,
  ],
  "ai-lead-generation": [
    `${PR}/ai-sales-crm/ai-lead-generation-tools`,
    `${PR}/ai-sales-crm/ai-lead-management-software`,
    `${PR}/ai-sales-crm/ai-sales-automation-software`,
    `${PR}/ai-sales-crm/ai-crm-software`,
    `${PR}/ai-sales-crm/ai-sales-assistant`,
    `${PR}/ai-marketing-automation/ai-email-automation`,
  ],
  "ai-knowledge-assistants": [
    `${PR}/ai-customer-support/ai-virtual-assistant`,
    `${PR}/ai-customer-support/ai-customer-support-software`,
    `${PR}/ai-document-data-intelligence/ai-document-processing-software`,
  ],
  "ai-strategy-advisory": [
    `${PR}/general-ai-automation/ai-process-optimization`,
    `${PR}/general-ai-automation/ai-automation-solutions`,
    `${PR}/general-ai-automation/ai-automation-tools-for-businesses`,
    `${PR}/general-ai-automation/enterprise-ai-automation-solutions`,
  ],
  "custom-ai-development": [
    `${PR}/general-ai-automation/custom-ai-automation-software`,
    `${PR}/general-ai-automation/ai-integration-services`,
    `${PR}/general-ai-automation/ai-powered-business-software`,
    `${PR}/general-ai-automation/end-to-end-ai-automation`,
    `${PR}/general-ai-automation/intelligent-business-automation`,
  ],
};

export const INDUSTRY_PRODUCT_LINKS: Record<string, string[]> = {
  "ai-automation-for-healthcare": [
    `${PR}/industry-specific-ai-automation/ai-healthcare-automation`,
    `${PR}/ai-customer-support/ai-virtual-assistant`,
    `${PR}/ai-document-data-intelligence/intelligent-document-processing`,
  ],
  "ai-automation-for-law-firms": [
    `${PR}/industry-specific-ai-automation/ai-legal-automation`,
    `${PR}/ai-document-data-intelligence/ai-contract-analysis`,
    `${PR}/ai-document-data-intelligence/ai-document-processing-software`,
  ],
  "ai-automation-for-ecommerce": [
    `${PR}/ai-ecommerce-automation/ai-ecommerce-automation-software`,
    `${PR}/ai-ecommerce-automation/ai-order-processing-automation`,
    `${PR}/ai-ecommerce-automation/ai-inventory-management-software`,
    `${PR}/ai-ecommerce-automation/ai-product-recommendation-software`,
    `${PR}/ai-ecommerce-automation/ai-shopping-assistant`,
  ],
  "ai-automation-for-saas": [
    `${PR}/ai-customer-support/ai-customer-support-software`,
    `${PR}/ai-sales-crm/ai-crm-software`,
    `${PR}/ai-agents-platforms/ai-agent-platform`,
  ],
  "ai-automation-for-real-estate": [
    `${PR}/industry-specific-ai-automation/ai-real-estate-automation`,
    `${PR}/ai-sales-crm/ai-lead-management-software`,
    `${PR}/ai-customer-support/ai-voice-agent`,
  ],
  "ai-automation-for-finance-accounting": [
    `${PR}/ai-finance-accounting/ai-accounting-automation`,
    `${PR}/ai-finance-accounting/ai-invoice-processing-software`,
    `${PR}/ai-finance-accounting/ai-bookkeeping-software`,
    `${PR}/ai-finance-accounting/ai-expense-management-software`,
    `${PR}/ai-finance-accounting/ai-financial-automation`,
  ],
  "ai-automation-for-professional-services": [
    `${PR}/industry-specific-ai-automation/ai-legal-automation`,
    `${PR}/ai-document-data-intelligence/ai-contract-analysis`,
    `${PR}/ai-customer-support/ai-virtual-assistant`,
  ],
  "ai-automation-for-marketing-agencies": [
    `${PR}/ai-marketing-automation/ai-campaign-management-software`,
    `${PR}/ai-marketing-automation/ai-social-media-automation`,
    `${PR}/ai-marketing-automation/ai-seo-automation-tools`,
  ],
};
