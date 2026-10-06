// content/industries/index.ts
import { ServiceContent } from '../type';
import { financeAccounting } from './finance-accounting';
import { healthcare } from './healthcare';
import { lawFirms } from './law-firms';
import { ecommerce } from './ecommerce'; 
import { saas } from './saas';
import { realEstate } from './real-estate';
import { professionalServices } from './professional-services';


export const industryContent: Record<string, ServiceContent> = {
  'ai-automation-for-finance-accounting': financeAccounting,
  'ai-automation-for-healthcare': healthcare,
  'ai-automation-for-law-firms': lawFirms,
  'ai-automation-for-ecommerce': ecommerce,
  'ai-automation-for-saas': saas,
  'ai-automation-for-real-estate': realEstate,
  'ai-automation-for-professional-services': professionalServices,
  
};



export const industrySlugs = Object.keys(industryContent);

export const getIndustryBySlug = (slug: string): ServiceContent | undefined => {
  return industryContent[slug];
};