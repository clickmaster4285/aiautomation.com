// content/type.ts

// ── Existing Types ──

export interface SectionItem {
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
  image?: string | {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    fadeEdges?: boolean;
  };
  value?: number | string;
  suffix?: string;
  prefix?: string;
  isViewAll?: boolean;
  columns?: string[];
  // ✅ NEW — case studies
  challenge?: string;
  solution?: string;
  result?: string;
  // ✅ NEW — reviews
  quote?: string;
  author?: string;
}

export interface Section {
  type:
    | 'hero'
    | 'text'
    | 'features'
    | 'grid'
    | 'steps'
    | 'stats'
    | 'painpoint'
    | 'image-text'
    | 'faq'
    | 'cta'
    // ✅ NEW
    | 'industries'
    | 'casestudies'
    | 'reviews';
  heading?: string;
  subheading?: string;
  content?: string | string[];
  items?: SectionItem[];
  columns?: string[];
  stats?: { label: string; value: string }[];
  ctas?: { text: string; link: string; primary?: boolean }[];
  image?: string | {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    fadeEdges?: boolean;
  };
  cta?: { text: string; link: string; primary?: boolean };
}

export interface ServiceContent {
  slug: string;
  title: string;
  metaDescription?: string;
  keywords?: string;
  template?: 'default' | 'workflow' | 'dark' | 'light';
  path?: string;
  sections: Section[];
}

// ── SOLUTION TYPES ──

export interface FAQ {
  question: string;
  answer: string;
}

export interface SolutionFeature {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SolutionStat {
  value: string;
  label: string;
}

export interface RelatedSolution {
  title: string;
  slug: string;
  description: string;
}

export interface SolutionData {
  slug: string;
  url: string;
  platform: string;
  category: string;
  title: string;
  primaryKeyword: string;
  titleTag: string;
  metaDescription: string;
  keywordEvidence: string;
  schema: string;
  internalLinks: string[];
  heroHeading: string;
  heroSubheading: string;
  heroBadge: string;
  description: string;
  sections: {
    [key: string]: string;
  };
  features: SolutionFeature[];
  processSteps: SolutionProcessStep[];
  stats: SolutionStat[];
  bestFor: string[];
  considerAlternatives: string[];
  relatedSolutions: RelatedSolution[];
  faqQuestions: FAQ[];
  cta: string;
  bookingLink: string;
}