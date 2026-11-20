// content/products/types.ts
// Shape of a product page's content, rendered by components/products/ProductPage.tsx.
// Text fields marked "rich" may contain inline [anchor](/path) internal links.

type TitledText = { title: string; description: string };

export interface ProductPageContent {
  /** Optional, tasteful layout variations so sibling pages are not identical clones. */
  layout?: {
    /** Background of the intro section. Default 'paper' (white). */
    introTone?: 'paper' | 'secondary';
    /** Columns of the features grid on large screens. Default 4. */
    featuresColumns?: 3 | 4;
  };
  hero: {
    badge: string;
    /** H1. The last `accentWords` words render in the brand italic style. */
    heading: string;
    accentWords?: number;
    subheading: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
    image: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
    /** Phrases for the black scrolling band under the hero. */
    marquee: string[];
  };
  intro: {
    eyebrow: string;
    heading: string;
    /** rich */
    paragraphs: string[];
    problems: string[];
  };
  /** Optional dark explainer section between the intro and the features. */
  explainer?: {
    eyebrow: string;
    heading: string;
    /** rich */
    paragraphs: string[];
    points: TitledText[];
  };
  features: {
    eyebrow: string;
    heading: string;
    /** rich */
    intro: string;
    items: (TitledText & { icon?: string })[];
  };
  howItWorks: { eyebrow: string; heading: string; intro: string; steps: TitledText[] };
  benefits: { eyebrow: string; heading: string; intro: string; items: TitledText[] };
  aiAutomation: {
    eyebrow: string;
    heading: string;
    /** rich */
    paragraphs: string[];
    aiDoes: string[];
    peopleDo: string[];
  };
  /** Product-specific deep dive (e.g. pipeline management, query management). */
  spotlight: {
    eyebrow: string;
    heading: string;
    /** rich */
    paragraphs: string[];
    points: TitledText[];
  };
  /** Optional extra deep-dive sections, rendered after the spotlight (alternating light / dark). */
  extras?: {
    eyebrow: string;
    heading: string;
    accentWords?: number;
    /** rich */
    paragraphs: string[];
    points: TitledText[];
  }[];
  audience: { eyebrow: string; heading: string; items: TitledText[] };
  integrations: {
    eyebrow: string;
    heading: string;
    /** rich */
    paragraphs: string[];
    groups: { label: string; items: string[] }[];
  };
  whyUs: { eyebrow: string; heading: string; intro: string; items: TitledText[] };
  gettingStarted: {
    eyebrow: string;
    heading: string;
    /** rich */
    intro: string;
    steps: TitledText[];
    note: string;
  };
  cta: {
    bandHeading: string;
    heading: string;
    description: string;
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
  /** Optional "related products" card grid (topic-cluster links), shown before the FAQ. */
  related?: {
    eyebrow: string;
    heading: string;
    intro?: string;
    items: { title: string; description: string; href: string }[];
  };
  faqHeading: string;
  faqSideText: string;
  faqs: { question: string; answer: string }[];
}
