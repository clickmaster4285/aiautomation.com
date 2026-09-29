// content/industries/index.ts
import { ServiceContent } from '../type';
import { financeAccounting } from './finance-accounting';
import { healthcare } from './healthcare';
import { lawFirms } from './law-firms';
import { ecommerce } from './ecommerce'; 
import { saas } from './saas';
import { realEstate } from './real-estate';
import { professionalServices } from './professional-services';
import { marketingAgencies } from './marketing-agencies';

export const industryContent: Record<string, ServiceContent> = {
  'finance-accounting': financeAccounting,
  'healthcare': healthcare,
  'law-firms': lawFirms,
  'ecommerce': ecommerce,
  'saas': saas,
  'real-estate': realEstate,
  'professional-services': professionalServices,
  'marketing-agencies': marketingAgencies,
};

export const industrySlugs = Object.keys(industryContent);

export const getIndustryBySlug = (slug: string): ServiceContent | undefined => {
  return industryContent[slug];
};