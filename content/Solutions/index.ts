// content/Solutions/index.ts
import { SolutionData } from '@/content/type';
import { aiChatbotsWithZapier } from './ai-chatbots-with-zapier';
import { aiChatbotsWithSalesforce } from './ai-chatbots-with-salesforce';
import { aiWorkflowAutomationWithHubspot } from './ai-workflow-automation-with-hubspot';
import { aiWorkflowAutomationWithN8n } from './ai-workflow-automation-with-n8n';
import { aiWorkflowAutomationWithSalesforce } from './ai-workflow-automation-with-salesforce';
import { aiWorkflowAutomationWithZapier } from './ai-workflow-automation-with-zapier';
import { crmAutomationWithAirtable } from './crm-automation-with-airtable';
import { crmAutomationWithHubspot } from './crm-automation-with-hubspot';
import { crmAutomationWithSalesforce } from './crm-automation-with-salesforce';
import { documentAutomationWithAirtable } from './document-automation-with-airtable';
import { documentAutomationWithN8n } from './document-automation-with-n8n';
import { documentAutomationWithSalesforce } from './document-automation-with-salesforce';
import { leadGenerationAutomationWithHubspot } from './lead-generation-automation-with-hubspot';
import { leadGenerationAutomationWithSalesforce } from './lead-generation-automation-with-salesforce';
import { customerSupportAutomationWithZapier } from './customer-support-automation-with-zapier';
import { marketingAutomationWithHubspot } from './marketing-automation-with-hubspot';
import { marketingAutomationWithSalesforce } from './marketing-automation-with-salesforce';
import { reportingAutomationWithN8n } from './reporting-automation-with-n8n';
import { reportingAutomationWithSalesforce } from './reporting-automation-with-salesforce';
import { salesAutomationWithHubspot } from './sales-automation-with-hubspot';

// AI Agents imports - Existing
import { aiAgentsForAccountingFirms } from './ai-agents-for-accounting-firms';
import { aiAgentsForConstruction } from './ai-agents-for-construction';
import { aiAgentsForEcommerce } from './ai-agents-for-ecommerce';
import { aiAgentsForEducation } from './ai-agents-for-education';

// AI Agents imports - Healthcare, Insurance, Law, Logistics, Manufacturing
import { aiAgentsForHealthcare } from './ai-agents-for-healthcare';
import { aiAgentsForInsurance } from './ai-agents-for-insurance';
import { aiAgentsForLawFirms } from './ai-agents-for-law-firms';
import { aiAgentsForLogistics } from './ai-agents-for-logistics';
import { aiAgentsForManufacturing } from './ai-agents-for-manufacturing';

// AI Agents imports - New (Real Estate, Restaurants, Retail, SaaS)
import { aiAgentsForRealEstate } from './ai-agents-for-real-estate';
import { aiAgentsForRestaurants } from './ai-agents-for-restaurants';
import { aiAgentsForRetail } from './ai-agents-for-retail';
import { aiAgentsForSaaS } from './ai-agents-for-saas';

// AI Chatbots imports - Industry pages (Existing)
import { aiChatbotsForAccountingFirms } from './ai-chatbots-for-accounting-firms';
import { aiChatbotsForConstruction } from './ai-chatbots-for-construction';
import { aiChatbotsForEcommerce } from './ai-chatbots-for-ecommerce';
import { aiChatbotsForEducation } from './ai-chatbots-for-education';
import { aiChatbotsForHealthcare } from './ai-chatbots-for-healthcare';
import { aiChatbotsForInsurance } from './ai-chatbots-for-insurance';

// AI Chatbots imports - New Industry pages (Law Firms, Logistics, Manufacturing, Real Estate, Restaurants, Retail, SaaS)
import { aiChatbotsForLawFirms } from './ai-chatbots-for-law-firms';
import { aiChatbotsForLogistics } from './ai-chatbots-for-logistics';
import { aiChatbotsForManufacturing } from './ai-chatbots-for-manufacturing';
import { aiChatbotsForRealEstate } from './ai-chatbots-for-real-estate';
import { aiChatbotsForRestaurants } from './ai-chatbots-for-restaurants';
import { aiChatbotsForRetail } from './ai-chatbots-for-retail';
import { aiChatbotsForSaaS } from './ai-chatbots-for-saas';

// AI Voice Agents imports - Industry pages (Existing)
import { aiVoiceAgentsForAccountingFirms } from './ai-voice-agents-for-accounting-firms';
import { aiVoiceAgentsForConstruction } from './ai-voice-agents-for-construction';
import { aiVoiceAgentsForEcommerce } from './ai-voice-agents-for-ecommerce';
import { aiVoiceAgentsForEducation } from './ai-voice-agents-for-education';
import { aiVoiceAgentsForHealthcare } from './ai-voice-agents-for-healthcare';
import { aiVoiceAgentsForInsurance } from './ai-voice-agents-for-insurance';
import { aiVoiceAgentsForLawFirms } from './ai-voice-agents-for-law-firms';

// AI Voice Agents imports - New Industry pages (Logistics, Manufacturing, Real Estate, Restaurants, Retail, SaaS)
import { aiVoiceAgentsForLogistics } from './ai-voice-agents-for-logistics';
import { aiVoiceAgentsForManufacturing } from './ai-voice-agents-for-manufacturing';
import { aiVoiceAgentsForRealEstate } from './ai-voice-agents-for-real-estate';
import { aiVoiceAgentsForRestaurants } from './ai-voice-agents-for-restaurants';
import { aiVoiceAgentsForRetail } from './ai-voice-agents-for-retail';
import { aiVoiceAgentsForSaaS } from './ai-voice-agents-for-saas';

// AI Workflow Automation imports - Existing Industry pages
import { aiWorkflowAutomationForAccountingFirms } from './ai-workflow-automation-for-accounting-firms';
import { aiWorkflowAutomationForConstruction } from './ai-workflow-automation-for-construction';
import { aiWorkflowAutomationForEcommerce } from './ai-workflow-automation-for-ecommerce';
import { aiWorkflowAutomationForEducation } from './ai-workflow-automation-for-education';
import { aiWorkflowAutomationForHealthcare } from './ai-workflow-automation-for-healthcare';
import { aiWorkflowAutomationForInsurance } from './ai-workflow-automation-for-insurance';
import { aiWorkflowAutomationForLawFirms } from './ai-workflow-automation-for-law-firms';

// AI Workflow Automation imports - New Industry pages (Logistics, Manufacturing, Real Estate, Restaurants, Retail, SaaS)
import { aiWorkflowAutomationForLogistics } from './ai-workflow-automation-for-logistics';
import { aiWorkflowAutomationForManufacturing } from './ai-workflow-automation-for-manufacturing';
import { aiWorkflowAutomationForRealEstate } from './ai-workflow-automation-for-real-estate';
import { aiWorkflowAutomationForRestaurants } from './ai-workflow-automation-for-restaurants';
import { aiWorkflowAutomationForRetail } from './ai-workflow-automation-for-retail';
import { aiWorkflowAutomationForSaaS } from './ai-workflow-automation-for-saas';

// Appointment & Booking Automation imports - Industry pages (Existing 7)
import { appointmentBookingAutomationForAccountingFirms } from './appointment-booking-automation-for-accounting-firms';
import { appointmentBookingAutomationForConstruction } from './appointment-booking-automation-for-construction';
import { appointmentBookingAutomationForEcommerce } from './appointment-booking-automation-for-ecommerce';
import { appointmentBookingAutomationForEducation } from './appointment-booking-automation-for-education';
import { appointmentBookingAutomationForHealthcare } from './appointment-booking-automation-for-healthcare';
import { appointmentBookingAutomationForInsurance } from './appointment-booking-automation-for-insurance';
import { appointmentBookingAutomationForLawFirms } from './appointment-booking-automation-for-law-firms';

// Appointment & Booking Automation imports - New Industry pages (Logistics, Manufacturing, Real Estate, Restaurants, Retail, SaaS)
import { appointmentBookingAutomationForLogistics } from './appointment-booking-automation-for-logistics';
import { appointmentBookingAutomationForManufacturing } from './appointment-booking-automation-for-manufacturing';
import { appointmentBookingAutomationForRealEstate } from './appointment-booking-automation-for-real-estate';
import { appointmentBookingAutomationForRestaurants } from './appointment-booking-automation-for-restaurants';
import { appointmentBookingAutomationForRetail } from './appointment-booking-automation-for-retail';
import { appointmentBookingAutomationForSaaS } from './appointment-booking-automation-for-saas';

// Business Process Automation imports - Industry pages (Existing 7)
import { businessProcessAutomationForAccountingFirms } from './business-process-automation-for-accounting-firms';
import { businessProcessAutomationForConstruction } from './business-process-automation-for-construction';
import { businessProcessAutomationForEcommerce } from './business-process-automation-for-ecommerce';
import { businessProcessAutomationForEducation } from './business-process-automation-for-education';
import { businessProcessAutomationForHealthcare } from './business-process-automation-for-healthcare';
import { businessProcessAutomationForInsurance } from './business-process-automation-for-insurance';
import { businessProcessAutomationForLawFirms } from './business-process-automation-for-law-firms';

// Business Process Automation imports - New Industry pages (Logistics, Manufacturing, Real Estate, Restaurants, Retail, SaaS)
import { businessProcessAutomationForLogistics } from './business-process-automation-for-logistics';
import { businessProcessAutomationForManufacturing } from './business-process-automation-for-manufacturing';
import { businessProcessAutomationForRealEstate } from './business-process-automation-for-real-estate';
import { businessProcessAutomationForRestaurants } from './business-process-automation-for-restaurants';
import { businessProcessAutomationForRetail } from './business-process-automation-for-retail';
import { businessProcessAutomationForSaaS } from './business-process-automation-for-saas';

// CRM Automation imports - Industry pages (Existing 7)
import { crmAutomationForAccountingFirms } from './crm-automation-for-accounting-firms';
import { crmAutomationForConstruction } from './crm-automation-for-construction';
import { crmAutomationForEcommerce } from './crm-automation-for-ecommerce';
import { crmAutomationForEducation } from './crm-automation-for-education';
import { crmAutomationForHealthcare } from './crm-automation-for-healthcare';
import { crmAutomationForInsurance } from './crm-automation-for-insurance';
import { crmAutomationForLawFirms } from './crm-automation-for-law-firms';

// CRM Automation imports - New Industry pages (Logistics, Manufacturing, Real Estate, Restaurants, Retail, SaaS)
import { crmAutomationForLogistics } from './crm-automation-for-logistics';
import { crmAutomationForManufacturing } from './crm-automation-for-manufacturing';
import { crmAutomationForRealEstate } from './crm-automation-for-real-estate';
import { crmAutomationForRestaurants } from './crm-automation-for-restaurants';
import { crmAutomationForRetail } from './crm-automation-for-retail';
import { crmAutomationForSaaS } from './crm-automation-for-saas';

// Customer Support Automation imports - Industry pages (Existing 7)
import { customerSupportAutomationForAccountingFirms } from './customer-support-automation-for-accounting-firms';
import { customerSupportAutomationForConstruction } from './customer-support-automation-for-construction';
import { customerSupportAutomationForEcommerce } from './customer-support-automation-for-ecommerce';
import { customerSupportAutomationForEducation } from './customer-support-automation-for-education';
import { customerSupportAutomationForHealthcare } from './customer-support-automation-for-healthcare';
import { customerSupportAutomationForInsurance } from './customer-support-automation-for-insurance';
import { customerSupportAutomationForLawFirms } from './customer-support-automation-for-law-firms';

// Customer Support Automation imports - New Industry pages (Logistics, Manufacturing, Real Estate, Restaurants, Retail, SaaS)
import { customerSupportAutomationForLogistics } from './customer-support-automation-for-logistics';
import { customerSupportAutomationForManufacturing } from './customer-support-automation-for-manufacturing';
import { customerSupportAutomationForRealEstate } from './customer-support-automation-for-real-estate';
import { customerSupportAutomationForRestaurants } from './customer-support-automation-for-restaurants';
import { customerSupportAutomationForRetail } from './customer-support-automation-for-retail';
import { customerSupportAutomationForSaaS } from './customer-support-automation-for-saas';

// ====================================================================
// Invoice & Finance Automation - Industry Page Imports
// ====================================================================
import { invoiceAutomationForAccountingFirms } from './invoice-automation-for-accounting-firms';
import { invoiceAutomationForConstruction } from './invoice-automation-for-construction';
import { invoiceAutomationForEcommerce } from './invoice-automation-for-ecommerce';
import { invoiceAutomationForEducation } from './invoice-automation-for-education';
import { invoiceAutomationForHealthcare } from './invoice-automation-for-healthcare';
import { invoiceAutomationForInsurance } from './invoice-automation-for-insurance';
import { invoiceAutomationForLawFirms } from './invoice-automation-for-law-firms';
import { invoiceAutomationForLogistics } from './invoice-automation-for-logistics';
import { invoiceAutomationForManufacturing } from './invoice-automation-for-manufacturing';
import { invoiceAutomationForRealEstate } from './invoice-automation-for-real-estate';
import { invoiceAutomationForRestaurants } from './invoice-automation-for-restaurants';
import { invoiceAutomationForRetail } from './invoice-automation-for-retail';
import { invoiceAutomationForSaaS } from './invoice-automation-for-saas';

// ====================================================================
// Lead Generation Automation - Industry Page Imports
// ====================================================================
import { leadGenerationAutomationForAccountingFirms } from './lead-generation-automation-for-accounting-firms';
import { leadGenerationAutomationForConstruction } from './lead-generation-automation-for-construction';
import { leadGenerationAutomationForEcommerce } from './lead-generation-automation-for-ecommerce';
import { leadGenerationAutomationForEducation } from './lead-generation-automation-for-education';
import { leadGenerationAutomationForHealthcare } from './lead-generation-automation-for-healthcare';
import { leadGenerationAutomationForInsurance } from './lead-generation-automation-for-insurance';
import { leadGenerationAutomationForLawFirms } from './lead-generation-automation-for-law-firms';
import { leadGenerationAutomationForLogistics } from './lead-generation-automation-for-logistics';
import { leadGenerationAutomationForManufacturing } from './lead-generation-automation-for-manufacturing';
import { leadGenerationAutomationForRealEstate } from './lead-generation-automation-for-real-estate';
import { leadGenerationAutomationForRestaurants } from './lead-generation-automation-for-restaurants';
import { leadGenerationAutomationForRetail } from './lead-generation-automation-for-retail';
import { leadGenerationAutomationForSaaS } from './lead-generation-automation-for-saas';

// ====================================================================
// Marketing Automation - Industry Page Imports
// ====================================================================
import { marketingAutomationForAccountingFirms } from './marketing-automation-for-accounting-firms';
import { marketingAutomationForConstruction } from './marketing-automation-for-construction';
import { marketingAutomationForEcommerce } from './marketing-automation-for-ecommerce';
import { marketingAutomationForEducation } from './marketing-automation-for-education';
import { marketingAutomationForHealthcare } from './marketing-automation-for-healthcare';
import { marketingAutomationForInsurance } from './marketing-automation-for-insurance';
import { marketingAutomationForLawFirms } from './marketing-automation-for-law-firms';
import { marketingAutomationForLogistics } from './marketing-automation-for-logistics';
import { marketingAutomationForManufacturing } from './marketing-automation-for-manufacturing';
import { marketingAutomationForRealEstate } from './marketing-automation-for-real-estate';
import { marketingAutomationForRestaurants } from './marketing-automation-for-restaurants';
import { marketingAutomationForRetail } from './marketing-automation-for-retail';
import { marketingAutomationForSaaS } from './marketing-automation-for-saas';

// ====================================================================
// Reporting Automation - Industry Page Imports
// ====================================================================
import { reportingAutomationForAccountingFirms } from './reporting-automation-for-accounting-firms';
import { reportingAutomationForConstruction } from './reporting-automation-for-construction';
import { reportingAutomationForEcommerce } from './reporting-automation-for-ecommerce';
import { reportingAutomationForEducation } from './reporting-automation-for-education';
import { reportingAutomationForHealthcare } from './reporting-automation-for-healthcare';
import { reportingAutomationForInsurance } from './reporting-automation-for-insurance';
import { reportingAutomationForLawFirms } from './reporting-automation-for-law-firms';
import { reportingAutomationForLogistics } from './reporting-automation-for-logistics';
import { reportingAutomationForManufacturing } from './reporting-automation-for-manufacturing';
import { reportingAutomationForRealEstate } from './reporting-automation-for-real-estate';
import { reportingAutomationForRestaurants } from './reporting-automation-for-restaurants';
import { reportingAutomationForRetail } from './reporting-automation-for-retail';
import { reportingAutomationForSaaS } from './reporting-automation-for-saas';

// ====================================================================
// Document & Data Automation - Industry Page Imports
// ====================================================================
import { documentAutomationForAccountingFirms } from './document-automation-for-accounting-firms';
import { documentAutomationForConstruction } from './document-automation-for-construction';
import { documentAutomationForEcommerce } from './document-automation-for-ecommerce';
import { documentAutomationForEducation } from './document-automation-for-education';
import { documentAutomationForHealthcare } from './document-automation-for-healthcare';
import { documentAutomationForInsurance } from './document-automation-for-insurance';
import { documentAutomationForLawFirms } from './document-automation-for-law-firms';
import { documentAutomationForLogistics } from './document-automation-for-logistics';
import { documentAutomationForManufacturing } from './document-automation-for-manufacturing';
import { documentAutomationForRealEstate } from './document-automation-for-real-estate';
import { documentAutomationForRestaurants } from './document-automation-for-restaurants';
import { documentAutomationForRetail } from './document-automation-for-retail';
import { documentAutomationForSaaS } from './document-automation-for-saas';

// ====================================================================
// Sales Automation - Industry Page Imports
// ====================================================================
import { salesAutomationForAccountingFirms } from './sales-automation-for-accounting-firms';
import { salesAutomationForConstruction } from './sales-automation-for-construction';
import { salesAutomationForEcommerce } from './sales-automation-for-ecommerce';
import { salesAutomationForEducation } from './sales-automation-for-education';
import { salesAutomationForHealthcare } from './sales-automation-for-healthcare';
import { salesAutomationForInsurance } from './sales-automation-for-insurance';
import { salesAutomationForLawFirms } from './sales-automation-for-law-firms';
import { salesAutomationForLogistics } from './sales-automation-for-logistics';
import { salesAutomationForManufacturing } from './sales-automation-for-manufacturing';
import { salesAutomationForRealEstate } from './sales-automation-for-real-estate';
import { salesAutomationForRestaurants } from './sales-automation-for-restaurants';
import { salesAutomationForRetail } from './sales-automation-for-retail';
import { salesAutomationForSaaS } from './sales-automation-for-saas';

// Export types
export type {
  SolutionData,
  FAQ,
  SolutionFeature,
  SolutionProcessStep,
  SolutionStat,
  RelatedSolution,
} from '@/content/type';

// ====================================================================
// EXPORT ALL SOLUTIONS
// ====================================================================

// Export individual solutions - Existing Platform pages
export { aiChatbotsWithZapier } from './ai-chatbots-with-zapier';
export { aiChatbotsWithSalesforce } from './ai-chatbots-with-salesforce';
export { aiWorkflowAutomationWithHubspot } from './ai-workflow-automation-with-hubspot';
export { aiWorkflowAutomationWithN8n } from './ai-workflow-automation-with-n8n';
export { aiWorkflowAutomationWithSalesforce } from './ai-workflow-automation-with-salesforce';
export { aiWorkflowAutomationWithZapier } from './ai-workflow-automation-with-zapier';
export { crmAutomationWithAirtable } from './crm-automation-with-airtable';
export { crmAutomationWithHubspot } from './crm-automation-with-hubspot';
export { crmAutomationWithSalesforce } from './crm-automation-with-salesforce';
export { documentAutomationWithAirtable } from './document-automation-with-airtable';
export { documentAutomationWithN8n } from './document-automation-with-n8n';
export { documentAutomationWithSalesforce } from './document-automation-with-salesforce';
export { leadGenerationAutomationWithHubspot } from './lead-generation-automation-with-hubspot';
export { leadGenerationAutomationWithSalesforce } from './lead-generation-automation-with-salesforce';
export { customerSupportAutomationWithZapier } from './customer-support-automation-with-zapier';
export { marketingAutomationWithHubspot } from './marketing-automation-with-hubspot';
export { marketingAutomationWithSalesforce } from './marketing-automation-with-salesforce';
export { reportingAutomationWithN8n } from './reporting-automation-with-n8n';
export { reportingAutomationWithSalesforce } from './reporting-automation-with-salesforce';
export { salesAutomationWithHubspot } from './sales-automation-with-hubspot';

// AI Agents exports - Existing
export { aiAgentsForAccountingFirms } from './ai-agents-for-accounting-firms';
export { aiAgentsForConstruction } from './ai-agents-for-construction';
export { aiAgentsForEcommerce } from './ai-agents-for-ecommerce';
export { aiAgentsForEducation } from './ai-agents-for-education';
export { aiAgentsForHealthcare } from './ai-agents-for-healthcare';
export { aiAgentsForInsurance } from './ai-agents-for-insurance';
export { aiAgentsForLawFirms } from './ai-agents-for-law-firms';
export { aiAgentsForLogistics } from './ai-agents-for-logistics';
export { aiAgentsForManufacturing } from './ai-agents-for-manufacturing';
export { aiAgentsForRealEstate } from './ai-agents-for-real-estate';
export { aiAgentsForRestaurants } from './ai-agents-for-restaurants';
export { aiAgentsForRetail } from './ai-agents-for-retail';
export { aiAgentsForSaaS } from './ai-agents-for-saas';

// AI Chatbots exports - Industry pages
export { aiChatbotsForAccountingFirms } from './ai-chatbots-for-accounting-firms';
export { aiChatbotsForConstruction } from './ai-chatbots-for-construction';
export { aiChatbotsForEcommerce } from './ai-chatbots-for-ecommerce';
export { aiChatbotsForEducation } from './ai-chatbots-for-education';
export { aiChatbotsForHealthcare } from './ai-chatbots-for-healthcare';
export { aiChatbotsForInsurance } from './ai-chatbots-for-insurance';
export { aiChatbotsForLawFirms } from './ai-chatbots-for-law-firms';
export { aiChatbotsForLogistics } from './ai-chatbots-for-logistics';
export { aiChatbotsForManufacturing } from './ai-chatbots-for-manufacturing';
export { aiChatbotsForRealEstate } from './ai-chatbots-for-real-estate';
export { aiChatbotsForRestaurants } from './ai-chatbots-for-restaurants';
export { aiChatbotsForRetail } from './ai-chatbots-for-retail';
export { aiChatbotsForSaaS } from './ai-chatbots-for-saas';

// AI Voice Agents exports
export { aiVoiceAgentsForAccountingFirms } from './ai-voice-agents-for-accounting-firms';
export { aiVoiceAgentsForConstruction } from './ai-voice-agents-for-construction';
export { aiVoiceAgentsForEcommerce } from './ai-voice-agents-for-ecommerce';
export { aiVoiceAgentsForEducation } from './ai-voice-agents-for-education';
export { aiVoiceAgentsForHealthcare } from './ai-voice-agents-for-healthcare';
export { aiVoiceAgentsForInsurance } from './ai-voice-agents-for-insurance';
export { aiVoiceAgentsForLawFirms } from './ai-voice-agents-for-law-firms';
export { aiVoiceAgentsForLogistics } from './ai-voice-agents-for-logistics';
export { aiVoiceAgentsForManufacturing } from './ai-voice-agents-for-manufacturing';
export { aiVoiceAgentsForRealEstate } from './ai-voice-agents-for-real-estate';
export { aiVoiceAgentsForRestaurants } from './ai-voice-agents-for-restaurants';
export { aiVoiceAgentsForRetail } from './ai-voice-agents-for-retail';
export { aiVoiceAgentsForSaaS } from './ai-voice-agents-for-saas';

// AI Workflow Automation exports
export { aiWorkflowAutomationForAccountingFirms } from './ai-workflow-automation-for-accounting-firms';
export { aiWorkflowAutomationForConstruction } from './ai-workflow-automation-for-construction';
export { aiWorkflowAutomationForEcommerce } from './ai-workflow-automation-for-ecommerce';
export { aiWorkflowAutomationForEducation } from './ai-workflow-automation-for-education';
export { aiWorkflowAutomationForHealthcare } from './ai-workflow-automation-for-healthcare';
export { aiWorkflowAutomationForInsurance } from './ai-workflow-automation-for-insurance';
export { aiWorkflowAutomationForLawFirms } from './ai-workflow-automation-for-law-firms';
export { aiWorkflowAutomationForLogistics } from './ai-workflow-automation-for-logistics';
export { aiWorkflowAutomationForManufacturing } from './ai-workflow-automation-for-manufacturing';
export { aiWorkflowAutomationForRealEstate } from './ai-workflow-automation-for-real-estate';
export { aiWorkflowAutomationForRestaurants } from './ai-workflow-automation-for-restaurants';
export { aiWorkflowAutomationForRetail } from './ai-workflow-automation-for-retail';
export { aiWorkflowAutomationForSaaS } from './ai-workflow-automation-for-saas';

// Appointment & Booking Automation exports
export { appointmentBookingAutomationForAccountingFirms } from './appointment-booking-automation-for-accounting-firms';
export { appointmentBookingAutomationForConstruction } from './appointment-booking-automation-for-construction';
export { appointmentBookingAutomationForEcommerce } from './appointment-booking-automation-for-ecommerce';
export { appointmentBookingAutomationForEducation } from './appointment-booking-automation-for-education';
export { appointmentBookingAutomationForHealthcare } from './appointment-booking-automation-for-healthcare';
export { appointmentBookingAutomationForInsurance } from './appointment-booking-automation-for-insurance';
export { appointmentBookingAutomationForLawFirms } from './appointment-booking-automation-for-law-firms';
export { appointmentBookingAutomationForLogistics } from './appointment-booking-automation-for-logistics';
export { appointmentBookingAutomationForManufacturing } from './appointment-booking-automation-for-manufacturing';
export { appointmentBookingAutomationForRealEstate } from './appointment-booking-automation-for-real-estate';
export { appointmentBookingAutomationForRestaurants } from './appointment-booking-automation-for-restaurants';
export { appointmentBookingAutomationForRetail } from './appointment-booking-automation-for-retail';
export { appointmentBookingAutomationForSaaS } from './appointment-booking-automation-for-saas';

// Business Process Automation exports
export { businessProcessAutomationForAccountingFirms } from './business-process-automation-for-accounting-firms';
export { businessProcessAutomationForConstruction } from './business-process-automation-for-construction';
export { businessProcessAutomationForEcommerce } from './business-process-automation-for-ecommerce';
export { businessProcessAutomationForEducation } from './business-process-automation-for-education';
export { businessProcessAutomationForHealthcare } from './business-process-automation-for-healthcare';
export { businessProcessAutomationForInsurance } from './business-process-automation-for-insurance';
export { businessProcessAutomationForLawFirms } from './business-process-automation-for-law-firms';
export { businessProcessAutomationForLogistics } from './business-process-automation-for-logistics';
export { businessProcessAutomationForManufacturing } from './business-process-automation-for-manufacturing';
export { businessProcessAutomationForRealEstate } from './business-process-automation-for-real-estate';
export { businessProcessAutomationForRestaurants } from './business-process-automation-for-restaurants';
export { businessProcessAutomationForRetail } from './business-process-automation-for-retail';
export { businessProcessAutomationForSaaS } from './business-process-automation-for-saas';

// CRM Automation exports
export { crmAutomationForAccountingFirms } from './crm-automation-for-accounting-firms';
export { crmAutomationForConstruction } from './crm-automation-for-construction';
export { crmAutomationForEcommerce } from './crm-automation-for-ecommerce';
export { crmAutomationForEducation } from './crm-automation-for-education';
export { crmAutomationForHealthcare } from './crm-automation-for-healthcare';
export { crmAutomationForInsurance } from './crm-automation-for-insurance';
export { crmAutomationForLawFirms } from './crm-automation-for-law-firms';
export { crmAutomationForLogistics } from './crm-automation-for-logistics';
export { crmAutomationForManufacturing } from './crm-automation-for-manufacturing';
export { crmAutomationForRealEstate } from './crm-automation-for-real-estate';
export { crmAutomationForRestaurants } from './crm-automation-for-restaurants';
export { crmAutomationForRetail } from './crm-automation-for-retail';
export { crmAutomationForSaaS } from './crm-automation-for-saas';

// Customer Support Automation exports
export { customerSupportAutomationForAccountingFirms } from './customer-support-automation-for-accounting-firms';
export { customerSupportAutomationForConstruction } from './customer-support-automation-for-construction';
export { customerSupportAutomationForEcommerce } from './customer-support-automation-for-ecommerce';
export { customerSupportAutomationForEducation } from './customer-support-automation-for-education';
export { customerSupportAutomationForHealthcare } from './customer-support-automation-for-healthcare';
export { customerSupportAutomationForInsurance } from './customer-support-automation-for-insurance';
export { customerSupportAutomationForLawFirms } from './customer-support-automation-for-law-firms';
export { customerSupportAutomationForLogistics } from './customer-support-automation-for-logistics';
export { customerSupportAutomationForManufacturing } from './customer-support-automation-for-manufacturing';
export { customerSupportAutomationForRealEstate } from './customer-support-automation-for-real-estate';
export { customerSupportAutomationForRestaurants } from './customer-support-automation-for-restaurants';
export { customerSupportAutomationForRetail } from './customer-support-automation-for-retail';
export { customerSupportAutomationForSaaS } from './customer-support-automation-for-saas';

// Invoice & Finance Automation exports
export { invoiceAutomationForAccountingFirms } from './invoice-automation-for-accounting-firms';
export { invoiceAutomationForConstruction } from './invoice-automation-for-construction';
export { invoiceAutomationForEcommerce } from './invoice-automation-for-ecommerce';
export { invoiceAutomationForEducation } from './invoice-automation-for-education';
export { invoiceAutomationForHealthcare } from './invoice-automation-for-healthcare';
export { invoiceAutomationForInsurance } from './invoice-automation-for-insurance';
export { invoiceAutomationForLawFirms } from './invoice-automation-for-law-firms';
export { invoiceAutomationForLogistics } from './invoice-automation-for-logistics';
export { invoiceAutomationForManufacturing } from './invoice-automation-for-manufacturing';
export { invoiceAutomationForRealEstate } from './invoice-automation-for-real-estate';
export { invoiceAutomationForRestaurants } from './invoice-automation-for-restaurants';
export { invoiceAutomationForRetail } from './invoice-automation-for-retail';
export { invoiceAutomationForSaaS } from './invoice-automation-for-saas';

// Lead Generation Automation exports
export { leadGenerationAutomationForAccountingFirms } from './lead-generation-automation-for-accounting-firms';
export { leadGenerationAutomationForConstruction } from './lead-generation-automation-for-construction';
export { leadGenerationAutomationForEcommerce } from './lead-generation-automation-for-ecommerce';
export { leadGenerationAutomationForEducation } from './lead-generation-automation-for-education';
export { leadGenerationAutomationForHealthcare } from './lead-generation-automation-for-healthcare';
export { leadGenerationAutomationForInsurance } from './lead-generation-automation-for-insurance';
export { leadGenerationAutomationForLawFirms } from './lead-generation-automation-for-law-firms';
export { leadGenerationAutomationForLogistics } from './lead-generation-automation-for-logistics';
export { leadGenerationAutomationForManufacturing } from './lead-generation-automation-for-manufacturing';
export { leadGenerationAutomationForRealEstate } from './lead-generation-automation-for-real-estate';
export { leadGenerationAutomationForRestaurants } from './lead-generation-automation-for-restaurants';
export { leadGenerationAutomationForRetail } from './lead-generation-automation-for-retail';
export { leadGenerationAutomationForSaaS } from './lead-generation-automation-for-saas';

// Marketing Automation exports
export { marketingAutomationForAccountingFirms } from './marketing-automation-for-accounting-firms';
export { marketingAutomationForConstruction } from './marketing-automation-for-construction';
export { marketingAutomationForEcommerce } from './marketing-automation-for-ecommerce';
export { marketingAutomationForEducation } from './marketing-automation-for-education';
export { marketingAutomationForHealthcare } from './marketing-automation-for-healthcare';
export { marketingAutomationForInsurance } from './marketing-automation-for-insurance';
export { marketingAutomationForLawFirms } from './marketing-automation-for-law-firms';
export { marketingAutomationForLogistics } from './marketing-automation-for-logistics';
export { marketingAutomationForManufacturing } from './marketing-automation-for-manufacturing';
export { marketingAutomationForRealEstate } from './marketing-automation-for-real-estate';
export { marketingAutomationForRestaurants } from './marketing-automation-for-restaurants';
export { marketingAutomationForRetail } from './marketing-automation-for-retail';
export { marketingAutomationForSaaS } from './marketing-automation-for-saas';

// Reporting Automation exports
export { reportingAutomationForAccountingFirms } from './reporting-automation-for-accounting-firms';
export { reportingAutomationForConstruction } from './reporting-automation-for-construction';
export { reportingAutomationForEcommerce } from './reporting-automation-for-ecommerce';
export { reportingAutomationForEducation } from './reporting-automation-for-education';
export { reportingAutomationForHealthcare } from './reporting-automation-for-healthcare';
export { reportingAutomationForInsurance } from './reporting-automation-for-insurance';
export { reportingAutomationForLawFirms } from './reporting-automation-for-law-firms';
export { reportingAutomationForLogistics } from './reporting-automation-for-logistics';
export { reportingAutomationForManufacturing } from './reporting-automation-for-manufacturing';
export { reportingAutomationForRealEstate } from './reporting-automation-for-real-estate';
export { reportingAutomationForRestaurants } from './reporting-automation-for-restaurants';
export { reportingAutomationForRetail } from './reporting-automation-for-retail';
export { reportingAutomationForSaaS } from './reporting-automation-for-saas';

// Document Automation exports
export { documentAutomationForAccountingFirms } from './document-automation-for-accounting-firms';
export { documentAutomationForConstruction } from './document-automation-for-construction';
export { documentAutomationForEcommerce } from './document-automation-for-ecommerce';
export { documentAutomationForEducation } from './document-automation-for-education';
export { documentAutomationForHealthcare } from './document-automation-for-healthcare';
export { documentAutomationForInsurance } from './document-automation-for-insurance';
export { documentAutomationForLawFirms } from './document-automation-for-law-firms';
export { documentAutomationForLogistics } from './document-automation-for-logistics';
export { documentAutomationForManufacturing } from './document-automation-for-manufacturing';
export { documentAutomationForRealEstate } from './document-automation-for-real-estate';
export { documentAutomationForRestaurants } from './document-automation-for-restaurants';
export { documentAutomationForRetail } from './document-automation-for-retail';
export { documentAutomationForSaaS } from './document-automation-for-saas';

// Sales Automation exports
export { salesAutomationForAccountingFirms } from './sales-automation-for-accounting-firms';
export { salesAutomationForConstruction } from './sales-automation-for-construction';
export { salesAutomationForEcommerce } from './sales-automation-for-ecommerce';
export { salesAutomationForEducation } from './sales-automation-for-education';
export { salesAutomationForHealthcare } from './sales-automation-for-healthcare';
export { salesAutomationForInsurance } from './sales-automation-for-insurance';
export { salesAutomationForLawFirms } from './sales-automation-for-law-firms';
export { salesAutomationForLogistics } from './sales-automation-for-logistics';
export { salesAutomationForManufacturing } from './sales-automation-for-manufacturing';
export { salesAutomationForRealEstate } from './sales-automation-for-real-estate';
export { salesAutomationForRestaurants } from './sales-automation-for-restaurants';
export { salesAutomationForRetail } from './sales-automation-for-retail';
export { salesAutomationForSaaS } from './sales-automation-for-saas';

// Export all solutions as a record
export const solutionsContent: Record<string, SolutionData> = {
  // AI Chatbots - Platform pages
  'ai-chatbots/with-zapier': aiChatbotsWithZapier,
  'ai-chatbots/with-salesforce': aiChatbotsWithSalesforce,

  // AI Chatbots - Industry pages (Existing)
  'ai-chatbots/for-accounting-firms': aiChatbotsForAccountingFirms,
  'ai-chatbots/for-construction': aiChatbotsForConstruction,
  'ai-chatbots/for-ecommerce': aiChatbotsForEcommerce,
  'ai-chatbots/for-education': aiChatbotsForEducation,
  'ai-chatbots/for-healthcare': aiChatbotsForHealthcare,
  'ai-chatbots/for-insurance': aiChatbotsForInsurance,

  // AI Chatbots - New Industry pages
  'ai-chatbots/for-law-firms': aiChatbotsForLawFirms,
  'ai-chatbots/for-logistics': aiChatbotsForLogistics,
  'ai-chatbots/for-manufacturing': aiChatbotsForManufacturing,
  'ai-chatbots/for-real-estate': aiChatbotsForRealEstate,
  'ai-chatbots/for-restaurants': aiChatbotsForRestaurants,
  'ai-chatbots/for-retail': aiChatbotsForRetail,
  'ai-chatbots/for-saas': aiChatbotsForSaaS,

  // AI Voice Agents - Industry pages
  'ai-voice-agents/for-accounting-firms': aiVoiceAgentsForAccountingFirms,
  'ai-voice-agents/for-construction': aiVoiceAgentsForConstruction,
  'ai-voice-agents/for-ecommerce': aiVoiceAgentsForEcommerce,
  'ai-voice-agents/for-education': aiVoiceAgentsForEducation,
  'ai-voice-agents/for-healthcare': aiVoiceAgentsForHealthcare,
  'ai-voice-agents/for-insurance': aiVoiceAgentsForInsurance,
  'ai-voice-agents/for-law-firms': aiVoiceAgentsForLawFirms,
  'ai-voice-agents/for-logistics': aiVoiceAgentsForLogistics,
  'ai-voice-agents/for-manufacturing': aiVoiceAgentsForManufacturing,
  'ai-voice-agents/for-real-estate': aiVoiceAgentsForRealEstate,
  'ai-voice-agents/for-restaurants': aiVoiceAgentsForRestaurants,
  'ai-voice-agents/for-retail': aiVoiceAgentsForRetail,
  'ai-voice-agents/for-saas': aiVoiceAgentsForSaaS,

  // AI Workflow Automation - Platform pages
  'ai-workflow-automation/with-hubspot': aiWorkflowAutomationWithHubspot,
  'ai-workflow-automation/with-n8n': aiWorkflowAutomationWithN8n,
  'ai-workflow-automation/with-salesforce': aiWorkflowAutomationWithSalesforce,
  'ai-workflow-automation/with-zapier': aiWorkflowAutomationWithZapier,

  // AI Workflow Automation - Existing Industry pages
  'ai-workflow-automation/for-accounting-firms': aiWorkflowAutomationForAccountingFirms,
  'ai-workflow-automation/for-construction': aiWorkflowAutomationForConstruction,
  'ai-workflow-automation/for-ecommerce': aiWorkflowAutomationForEcommerce,
  'ai-workflow-automation/for-education': aiWorkflowAutomationForEducation,
  'ai-workflow-automation/for-healthcare': aiWorkflowAutomationForHealthcare,
  'ai-workflow-automation/for-insurance': aiWorkflowAutomationForInsurance,
  'ai-workflow-automation/for-law-firms': aiWorkflowAutomationForLawFirms,
  'ai-workflow-automation/for-logistics': aiWorkflowAutomationForLogistics,
  'ai-workflow-automation/for-manufacturing': aiWorkflowAutomationForManufacturing,
  'ai-workflow-automation/for-real-estate': aiWorkflowAutomationForRealEstate,
  'ai-workflow-automation/for-restaurants': aiWorkflowAutomationForRestaurants,
  'ai-workflow-automation/for-retail': aiWorkflowAutomationForRetail,
  'ai-workflow-automation/for-saas': aiWorkflowAutomationForSaaS,

  // Appointment & Booking Automation - Existing Industry pages
  'appointment-booking-automation/for-accounting-firms': appointmentBookingAutomationForAccountingFirms,
  'appointment-booking-automation/for-construction': appointmentBookingAutomationForConstruction,
  'appointment-booking-automation/for-ecommerce': appointmentBookingAutomationForEcommerce,
  'appointment-booking-automation/for-education': appointmentBookingAutomationForEducation,
  'appointment-booking-automation/for-healthcare': appointmentBookingAutomationForHealthcare,
  'appointment-booking-automation/for-insurance': appointmentBookingAutomationForInsurance,
  'appointment-booking-automation/for-law-firms': appointmentBookingAutomationForLawFirms,
  'appointment-booking-automation/for-logistics': appointmentBookingAutomationForLogistics,
  'appointment-booking-automation/for-manufacturing': appointmentBookingAutomationForManufacturing,
  'appointment-booking-automation/for-real-estate': appointmentBookingAutomationForRealEstate,
  'appointment-booking-automation/for-restaurants': appointmentBookingAutomationForRestaurants,
  'appointment-booking-automation/for-retail': appointmentBookingAutomationForRetail,
  'appointment-booking-automation/for-saas': appointmentBookingAutomationForSaaS,

  // Business Process Automation - Existing Industry pages
  'business-process-automation/for-accounting-firms': businessProcessAutomationForAccountingFirms,
  'business-process-automation/for-construction': businessProcessAutomationForConstruction,
  'business-process-automation/for-ecommerce': businessProcessAutomationForEcommerce,
  'business-process-automation/for-education': businessProcessAutomationForEducation,
  'business-process-automation/for-healthcare': businessProcessAutomationForHealthcare,
  'business-process-automation/for-insurance': businessProcessAutomationForInsurance,
  'business-process-automation/for-law-firms': businessProcessAutomationForLawFirms,
  'business-process-automation/for-logistics': businessProcessAutomationForLogistics,
  'business-process-automation/for-manufacturing': businessProcessAutomationForManufacturing,
  'business-process-automation/for-real-estate': businessProcessAutomationForRealEstate,
  'business-process-automation/for-restaurants': businessProcessAutomationForRestaurants,
  'business-process-automation/for-retail': businessProcessAutomationForRetail,
  'business-process-automation/for-saas': businessProcessAutomationForSaaS,

  // CRM Automation - Existing Industry pages
  'crm-automation/for-accounting-firms': crmAutomationForAccountingFirms,
  'crm-automation/for-construction': crmAutomationForConstruction,
  'crm-automation/for-ecommerce': crmAutomationForEcommerce,
  'crm-automation/for-education': crmAutomationForEducation,
  'crm-automation/for-healthcare': crmAutomationForHealthcare,
  'crm-automation/for-insurance': crmAutomationForInsurance,
  'crm-automation/for-law-firms': crmAutomationForLawFirms,
  'crm-automation/for-logistics': crmAutomationForLogistics,
  'crm-automation/for-manufacturing': crmAutomationForManufacturing,
  'crm-automation/for-real-estate': crmAutomationForRealEstate,
  'crm-automation/for-restaurants': crmAutomationForRestaurants,
  'crm-automation/for-retail': crmAutomationForRetail,
  'crm-automation/for-saas': crmAutomationForSaaS,

  // Customer Support Automation - Existing Industry pages
  'customer-support-automation/for-accounting-firms': customerSupportAutomationForAccountingFirms,
  'customer-support-automation/for-construction': customerSupportAutomationForConstruction,
  'customer-support-automation/for-ecommerce': customerSupportAutomationForEcommerce,
  'customer-support-automation/for-education': customerSupportAutomationForEducation,
  'customer-support-automation/for-healthcare': customerSupportAutomationForHealthcare,
  'customer-support-automation/for-insurance': customerSupportAutomationForInsurance,
  'customer-support-automation/for-law-firms': customerSupportAutomationForLawFirms,
  'customer-support-automation/for-logistics': customerSupportAutomationForLogistics,
  'customer-support-automation/for-manufacturing': customerSupportAutomationForManufacturing,
  'customer-support-automation/for-real-estate': customerSupportAutomationForRealEstate,
  'customer-support-automation/for-restaurants': customerSupportAutomationForRestaurants,
  'customer-support-automation/for-retail': customerSupportAutomationForRetail,
  'customer-support-automation/for-saas': customerSupportAutomationForSaaS,

  // CRM Automation - Platform pages
  'crm-automation/with-airtable': crmAutomationWithAirtable,
  'crm-automation/with-hubspot': crmAutomationWithHubspot,
  'crm-automation/with-salesforce': crmAutomationWithSalesforce,

  // Customer Support - Platform pages
  'customer-support-automation/with-zapier': customerSupportAutomationWithZapier,

  // Document Automation - Platform pages
  'document-automation/with-airtable': documentAutomationWithAirtable,
  'document-automation/with-n8n': documentAutomationWithN8n,
  'document-automation/with-salesforce': documentAutomationWithSalesforce,

  // ====================================================================
  // Invoice & Finance Automation - Industry pages
  // ====================================================================
  'invoice-automation/for-accounting-firms': invoiceAutomationForAccountingFirms,
  'invoice-automation/for-construction': invoiceAutomationForConstruction,
  'invoice-automation/for-ecommerce': invoiceAutomationForEcommerce,
  'invoice-automation/for-education': invoiceAutomationForEducation,
  'invoice-automation/for-healthcare': invoiceAutomationForHealthcare,
  'invoice-automation/for-insurance': invoiceAutomationForInsurance,
  'invoice-automation/for-law-firms': invoiceAutomationForLawFirms,
  'invoice-automation/for-logistics': invoiceAutomationForLogistics,
  'invoice-automation/for-manufacturing': invoiceAutomationForManufacturing,
  'invoice-automation/for-real-estate': invoiceAutomationForRealEstate,
  'invoice-automation/for-restaurants': invoiceAutomationForRestaurants,
  'invoice-automation/for-retail': invoiceAutomationForRetail,
  'invoice-automation/for-saas': invoiceAutomationForSaaS,

  // ====================================================================
  // Lead Generation Automation - Industry pages
  // ====================================================================
  'lead-generation-automation/for-accounting-firms': leadGenerationAutomationForAccountingFirms,
  'lead-generation-automation/for-construction': leadGenerationAutomationForConstruction,
  'lead-generation-automation/for-ecommerce': leadGenerationAutomationForEcommerce,
  'lead-generation-automation/for-education': leadGenerationAutomationForEducation,
  'lead-generation-automation/for-healthcare': leadGenerationAutomationForHealthcare,
  'lead-generation-automation/for-insurance': leadGenerationAutomationForInsurance,
  'lead-generation-automation/for-law-firms': leadGenerationAutomationForLawFirms,
  'lead-generation-automation/for-logistics': leadGenerationAutomationForLogistics,
  'lead-generation-automation/for-manufacturing': leadGenerationAutomationForManufacturing,
  'lead-generation-automation/for-real-estate': leadGenerationAutomationForRealEstate,
  'lead-generation-automation/for-restaurants': leadGenerationAutomationForRestaurants,
  'lead-generation-automation/for-retail': leadGenerationAutomationForRetail,
  'lead-generation-automation/for-saas': leadGenerationAutomationForSaaS,

  // Lead Generation - Platform pages
  'lead-generation-automation/with-hubspot': leadGenerationAutomationWithHubspot,
  'lead-generation-automation/with-salesforce': leadGenerationAutomationWithSalesforce,

  // ====================================================================
  // Marketing Automation - Industry pages
  // ====================================================================
  'marketing-automation/for-accounting-firms': marketingAutomationForAccountingFirms,
  'marketing-automation/for-construction': marketingAutomationForConstruction,
  'marketing-automation/for-ecommerce': marketingAutomationForEcommerce,
  'marketing-automation/for-education': marketingAutomationForEducation,
  'marketing-automation/for-healthcare': marketingAutomationForHealthcare,
  'marketing-automation/for-insurance': marketingAutomationForInsurance,
  'marketing-automation/for-law-firms': marketingAutomationForLawFirms,
  'marketing-automation/for-logistics': marketingAutomationForLogistics,
  'marketing-automation/for-manufacturing': marketingAutomationForManufacturing,
  'marketing-automation/for-real-estate': marketingAutomationForRealEstate,
  'marketing-automation/for-restaurants': marketingAutomationForRestaurants,
  'marketing-automation/for-retail': marketingAutomationForRetail,
  'marketing-automation/for-saas': marketingAutomationForSaaS,

  // Marketing Automation - Platform pages
  'marketing-automation/with-hubspot': marketingAutomationWithHubspot,
  'marketing-automation/with-salesforce': marketingAutomationWithSalesforce,

  // ====================================================================
  // Reporting Automation - Industry pages
  // ====================================================================
  'reporting-automation/for-accounting-firms': reportingAutomationForAccountingFirms,
  'reporting-automation/for-construction': reportingAutomationForConstruction,
  'reporting-automation/for-ecommerce': reportingAutomationForEcommerce,
  'reporting-automation/for-education': reportingAutomationForEducation,
  'reporting-automation/for-healthcare': reportingAutomationForHealthcare,
  'reporting-automation/for-insurance': reportingAutomationForInsurance,
  'reporting-automation/for-law-firms': reportingAutomationForLawFirms,
  'reporting-automation/for-logistics': reportingAutomationForLogistics,
  'reporting-automation/for-manufacturing': reportingAutomationForManufacturing,
  'reporting-automation/for-real-estate': reportingAutomationForRealEstate,
  'reporting-automation/for-restaurants': reportingAutomationForRestaurants,
  'reporting-automation/for-retail': reportingAutomationForRetail,
  'reporting-automation/for-saas': reportingAutomationForSaaS,

  // Reporting Automation - Platform pages
  'reporting-automation/with-n8n': reportingAutomationWithN8n,
  'reporting-automation/with-salesforce': reportingAutomationWithSalesforce,

  // ====================================================================
  // Document Automation - Industry pages
  // ====================================================================
  'document-automation/for-accounting-firms': documentAutomationForAccountingFirms,
  'document-automation/for-construction': documentAutomationForConstruction,
  'document-automation/for-ecommerce': documentAutomationForEcommerce,
  'document-automation/for-education': documentAutomationForEducation,
  'document-automation/for-healthcare': documentAutomationForHealthcare,
  'document-automation/for-insurance': documentAutomationForInsurance,
  'document-automation/for-law-firms': documentAutomationForLawFirms,
  'document-automation/for-logistics': documentAutomationForLogistics,
  'document-automation/for-manufacturing': documentAutomationForManufacturing,
  'document-automation/for-real-estate': documentAutomationForRealEstate,
  'document-automation/for-restaurants': documentAutomationForRestaurants,
  'document-automation/for-retail': documentAutomationForRetail,
  'document-automation/for-saas': documentAutomationForSaaS,

  // ====================================================================
  // Sales Automation - Industry pages
  // ====================================================================
  'sales-automation/for-accounting-firms': salesAutomationForAccountingFirms,
  'sales-automation/for-construction': salesAutomationForConstruction,
  'sales-automation/for-ecommerce': salesAutomationForEcommerce,
  'sales-automation/for-education': salesAutomationForEducation,
  'sales-automation/for-healthcare': salesAutomationForHealthcare,
  'sales-automation/for-insurance': salesAutomationForInsurance,
  'sales-automation/for-law-firms': salesAutomationForLawFirms,
  'sales-automation/for-logistics': salesAutomationForLogistics,
  'sales-automation/for-manufacturing': salesAutomationForManufacturing,
  'sales-automation/for-real-estate': salesAutomationForRealEstate,
  'sales-automation/for-restaurants': salesAutomationForRestaurants,
  'sales-automation/for-retail': salesAutomationForRetail,
  'sales-automation/for-saas': salesAutomationForSaaS,

  // Sales Automation - Platform pages
  'sales-automation/with-hubspot': salesAutomationWithHubspot,

  // AI Agents - Existing
  'ai-agents/for-accounting-firms': aiAgentsForAccountingFirms,
  'ai-agents/for-construction': aiAgentsForConstruction,
  'ai-agents/for-ecommerce': aiAgentsForEcommerce,
  'ai-agents/for-education': aiAgentsForEducation,
  'ai-agents/for-healthcare': aiAgentsForHealthcare,
  'ai-agents/for-insurance': aiAgentsForInsurance,
  'ai-agents/for-law-firms': aiAgentsForLawFirms,
  'ai-agents/for-logistics': aiAgentsForLogistics,
  'ai-agents/for-manufacturing': aiAgentsForManufacturing,
  'ai-agents/for-real-estate': aiAgentsForRealEstate,
  'ai-agents/for-restaurants': aiAgentsForRestaurants,
  'ai-agents/for-retail': aiAgentsForRetail,
  'ai-agents/for-saas': aiAgentsForSaaS,
};

// ====================================================================
// HELPER FUNCTIONS
// ====================================================================

// Get a solution by its slug
export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return solutionsContent[slug];
}

// Get all solutions as an array
export function getAllSolutions(): SolutionData[] {
  return Object.values(solutionsContent);
}

// Get solutions by category
export function getSolutionsByCategory(category: string): SolutionData[] {
  return Object.entries(solutionsContent)
    .filter(([slug]) => slug.startsWith(category))
    .map(([, content]) => content);
}

// Get solutions by platform
export function getSolutionsByPlatform(platform: string): SolutionData[] {
  return Object.values(solutionsContent).filter(
    (solution) => solution.platform === platform
  );
}

// Get solutions by industry
export function getSolutionsByIndustry(industry: string): SolutionData[] {
  return Object.values(solutionsContent).filter(
    (solution) => solution.category === industry
  );
}

// Search solutions by keyword
export function searchSolutions(query: string): SolutionData[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(solutionsContent).filter(
    (solution) =>
      solution.title?.toLowerCase().includes(lowerQuery) ||
      solution.description?.toLowerCase().includes(lowerQuery) ||
      solution.primaryKeyword?.toLowerCase().includes(lowerQuery) ||
      solution.metaDescription?.toLowerCase().includes(lowerQuery) ||
      solution.heroHeading?.toLowerCase().includes(lowerQuery) ||
      solution.heroSubheading?.toLowerCase().includes(lowerQuery)
  );
}

// Get related solutions based on category or platform
export function getRelatedSolutions(
  currentSlug: string,
  limit: number = 3
): SolutionData[] {
  const current = getSolutionBySlug(currentSlug);
  if (!current) return [];

  return Object.values(solutionsContent)
    .filter(
      (solution) =>
        solution.slug !== currentSlug &&
        (solution.category === current.category ||
          solution.platform === current.platform)
    )
    .slice(0, limit);
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = new Set<string>();
  Object.values(solutionsContent).forEach((solution) => {
    if (solution.category) categories.add(solution.category);
  });
  return Array.from(categories);
}

// Get all unique platforms
export function getAllPlatforms(): string[] {
  const platforms = new Set<string>();
  Object.values(solutionsContent).forEach((solution) => {
    if (solution.platform) platforms.add(solution.platform);
  });
  return Array.from(platforms);
}

// Get solutions grouped by category
export function getSolutionsGroupedByCategory(): Record<string, SolutionData[]> {
  const grouped: Record<string, SolutionData[]> = {};
  Object.values(solutionsContent).forEach((solution) => {
    const category = solution.category || 'Uncategorized';
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(solution);
  });
  return grouped;
}

// Get solutions grouped by platform
export function getSolutionsGroupedByPlatform(): Record<string, SolutionData[]> {
  const grouped: Record<string, SolutionData[]> = {};
  Object.values(solutionsContent).forEach((solution) => {
    const platform = solution.platform || 'Uncategorized';
    if (!grouped[platform]) grouped[platform] = [];
    grouped[platform].push(solution);
  });
  return grouped;
}

// ── Export all solutions as an array ──
export const allSolutions = Object.values(solutionsContent);

// ── Default export ──
export default solutionsContent;