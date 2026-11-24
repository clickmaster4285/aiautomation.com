// components/solutions/hubs/index.ts
// Solution type pages that are hand-built components (custom layouts) rather than content-driven.
// app/solutions/[service]/page.tsx renders these for their service; metadata comes from lib/hub-seo.
import type { ComponentType } from 'react';
import { hubSeo } from '@/lib/hub-seo';
import type { CUSTOM_HUB_SERVICES } from '@/content/Solutions/pages';
import AppointmentBookingAutomationHub from './AppointmentBookingAutomationHub';
import CrmAutomationHub from './CrmAutomationHub';
import CustomerSupportAutomationHub from './CustomerSupportAutomationHub';
import DocumentAutomationHub from './DocumentAutomationHub';
import InvoiceAutomationHub from './InvoiceAutomationHub';
import MarketingAutomationHub from './MarketingAutomationHub';
import SalesAutomationHub from './SalesAutomationHub';

type HubSeo = (typeof hubSeo)[keyof typeof hubSeo];

// Keyed by CUSTOM_HUB_SERVICES so the route registry and these components can't drift apart.
export const BESPOKE_HUBS: Record<(typeof CUSTOM_HUB_SERVICES)[number], { Component: ComponentType; seo: HubSeo }> &
  Record<string, { Component: ComponentType; seo: HubSeo } | undefined> = {
  'appointment-booking-automation': { Component: AppointmentBookingAutomationHub, seo: hubSeo.booking },
  'crm-automation': { Component: CrmAutomationHub, seo: hubSeo.crm },
  'customer-support-automation': { Component: CustomerSupportAutomationHub, seo: hubSeo.support },
  'document-automation': { Component: DocumentAutomationHub, seo: hubSeo.document },
  'invoice-automation': { Component: InvoiceAutomationHub, seo: hubSeo.invoice },
  'marketing-automation': { Component: MarketingAutomationHub, seo: hubSeo.marketing },
  'sales-automation': { Component: SalesAutomationHub, seo: hubSeo.sales },
};
