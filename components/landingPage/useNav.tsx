// components/landingPage/useNav.tsx
// ALL navbar logic lives here: data, icon maps, state, hover handlers, helpers.
// The markup lives in Nav.tsx — edit that file to change the UI.
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Workflow,
  RefreshCw,
  Bot,
  MessageSquare,
  PhoneCall,
  Brain,
  TrendingUp,
  Users,
  Headphones,
  Database,
  GitMerge,
  Zap,
  Layers,
  Settings,
  FileText,
  Plug,
  GitBranch,
  Mail,
  Rocket,
  DollarSign,
  Heart,
  Scale,
  ShoppingBag,
  Cloud,
  Briefcase,
  BarChart3,
  Lightbulb,
  Target,
  BrainCircuit,
  BookOpen,
  Rocket as RocketIcon,
  CheckCircle,
  Calendar,
  Receipt,
  Briefcase as BriefcaseIcon,
  Building2,
  Truck,
  GraduationCap,
} from 'lucide-react';
import {
  serviceCategories,
  platformCategories,
  industryCategories,
  PlatformCategory,
  PlatformItem,
  IndustryCategory,
  IndustryItem,
} from '@/content/services/index';
import { productCategories, PRODUCTS_PATH } from '@/content/products';
export { productCategories, PRODUCTS_PATH };

// ── Service icons by title (for right panel) ──
const serviceIconMap: Record<string, React.ElementType> = {
  // Core Automation
  'AI Workflow Automation': Workflow,
  'Business Process Automation': RefreshCw,
  'Robotic Process Automation (RPA)': Bot,
  'AI Reporting Automation': BarChart3,

  // AI Agents & Assistants
  'AI Agent Development': Brain,
  'AI Chatbots': MessageSquare,
  'AI Voice Agents': PhoneCall,
  'AI Knowledge Assistants': Brain,
  'AI Lead Generation': Target,

  // AI Strategy & Development
  'AI Strategy & Advisory': Lightbulb,
  'Custom AI Development': Briefcase,
};

// ── Platform icons ──
const platformIconMap: Record<string, React.ElementType> = {
  'Zapier': Zap,
  'Make (Integromat)': Workflow,
  'n8n': GitBranch,
  'HubSpot': Mail,
  'GoHighLevel': Rocket,
  'Airtable': Database,
  'Salesforce': Cloud,
};

// ── Industry icons ──
const industryIconMap: Record<string, React.ElementType> = {
  'Finance & Accounting': DollarSign,
  'Healthcare': Heart,
  'Law Firms': Scale,
  'E-commerce': ShoppingBag,
  'SaaS': Cloud,
  'Real Estate': Building2,
  'Professional Services': Briefcase,
  'AI Logistics Automation': Truck,
  'AI Education Automation': GraduationCap,
};


const CaseStudiesIconMap: Record<string, React.ElementType> = {
  'AI Lead Response & Revenue Recovery': DollarSign,
  'Healthcare': Heart,
  'Law Firms': Scale,
  'E-commerce': ShoppingBag,
  'SaaS': Cloud,
};

// ── Solutions data ──
// Solution hubs live at /solutions/<slug>. Service pages stay at /services/<slug>.
export const solutionsData = [
  {
    title: 'AI Workflow Automation',
    slug: 'ai-workflow-automation',
    group: 'operations',
    description: 'Connect your apps and run multi-step work without manual hand-offs.',
    icon: Workflow,
  },
  {
    title: 'AI Chatbots',
    slug: 'ai-chatbots',
    group: 'customer',
    description: 'Answer, qualify, and book from the channels your customers already use.',
    icon: MessageSquare,
  },
  {
    title: 'AI Voice Agents',
    slug: 'ai-voice-agents',
    group: 'customer',
    description: 'Answer and place calls when the team cannot pick up.',
    icon: PhoneCall,
  },
  {
    title: 'AI Agents',
    slug: 'ai-agents',
    group: 'customer',
    description: 'Agents that look up, draft, send, and log inside your systems.',
    icon: Brain,
  },
  {
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    group: 'operations',
    description: 'Run a whole repeatable process, including the hand-offs.',
    icon: RefreshCw,
  },
  {
    title: 'Lead Generation Automation',
    slug: 'lead-generation-automation',
    group: 'sales',
    description: 'Capture, qualify, and route new leads without a manual queue.',
    icon: Target,
  },
  {
    title: 'Reporting Automation',
    slug: 'reporting-automation',
    group: 'operations',
    description: 'Assemble the recurring reports from live data on a schedule.',
    icon: BarChart3,
  },
  {
    title: 'Appointment & Booking Automation',
    slug: 'appointment-booking-automation',
    group: 'customer',
    description: 'Automation that books, confirms, and reminds so no booking is missed.',
    icon: Calendar,
  },
  
  {
    title: 'CRM Automation',
    slug: 'crm-automation',
    group: 'sales',
    description: 'Keep your CRM accurate and active without manual data entry.',
    icon: Database,
  },
  {
    title: 'Document & Data Automation',
    slug: 'document-automation',
    group: 'operations',
    description: 'Extract, validate, and route data from documents automatically.',
    icon: FileText,
  },
  {
    title: 'Invoice & Finance Automation',
    slug: 'invoice-automation',
    group: 'operations',
    description: 'Capture, validate, and post invoices automatically and shorten the close.',
    icon: Receipt,
  },
 
  {
    title: 'Customer Support Automation',
    slug: 'customer-support-automation',
    group: 'customer',
    description: 'AI agents that resolve tickets and escalate complex cases.',
    icon: Headphones,
  },
  {
    title: 'Marketing Automation',
    slug: 'marketing-automation',
    group: 'sales',
    description: 'AI-driven content, nurture sequences, and campaign management.',
    icon: TrendingUp,
  },
  
  {
    title: 'Sales Automation',
    slug: 'sales-automation',
    group: 'sales',
    description: 'Enrich, follow up, and log automatically so reps can sell.',
    icon: Briefcase,
  },
 
];

// Solution hubs grouped by business function (column headings in the Solutions menu).
export const solutionGroups = [
  { key: 'sales', title: 'Sales & Marketing' },
  { key: 'customer', title: 'Customer Experience & AI Agents' },
  { key: 'operations', title: 'Operations & Finance' },
].map((g) => ({ ...g, items: solutionsData.filter((s) => s.group === g.key) }));

// ── Case Studies data ──
export const caseStudiesData = [
  {
    title: 'AI Lead Response & Revenue Recovery',
    slug: 'ai-receptionist-lead-response-automation',
    description: 'How automated lead response recovered lost revenue for a B2B services firm.',
    icon: DollarSign,
  },
  // {
  //   title: 'Invoice Processing Automation',
  //   slug: 'invoice-processing-automation',
  //   description: 'Cut AP processing time from days to hours with AI invoice extraction.',
  //   icon: Receipt,
  // },
  // {
  //   title: 'Customer Support AI Agent',
  //   slug: 'customer-support-ai-agent',
  //   description: 'Resolved 70% of routine tickets automatically with RAG-based AI.',
  //   icon: Headphones,
  // },
  // {
  //   title: 'CRM Data Hygiene at Scale',
  //   slug: 'crm-data-hygiene-at-scale',
  //   description: 'Continuous deduplication and enrichment for a 50k+ contact database.',
  //   icon: Database,
  // },
  // {
  //   title: 'Document Workflow Automation',
  //   slug: 'document-workflow-automation',
  //   description: 'Automated intake, validation, and filing for a document-heavy firm.',
  //   icon: FileText,
  // },
  // {
  //   title: 'Marketing Campaign Automation',
  //   slug: 'marketing-campaign-automation',
  //   description: 'Personalized nurture sequences at scale with AI-assisted content.',
  //   icon: TrendingUp,
  // },
];




const FallbackIcon = Plug;

// ── Product category icons (keyed by category slug) ──
const productCategoryIconMap: Record<string, React.ElementType> = {
  'ai-sales-crm': Target,
  'ai-customer-support': Headphones,
  'ai-marketing-automation': TrendingUp,
  'ai-hr-recruitment': Users,
  'ai-workflow-business-process-automation': Workflow,
  'ai-finance-accounting': DollarSign,
  'ai-ecommerce-automation': ShoppingBag,
  'ai-document-data-intelligence': FileText,
  'ai-agents-platforms': Bot,
  'industry-specific-ai-automation': Building2,
  'general-ai-automation': BrainCircuit,
};

// ── All services, flat list (subpages shown directly in the navbar — no category grouping) ──
export const servicesList = serviceCategories.flatMap((cat) =>
  cat.services.map((s) => ({
    title: s.title,
    slug: s.slug,
    description: s.description,
  }))
);

// ── Services grouped by their category (column headings in the Services menu) ──
export const serviceGroups = serviceCategories.map((cat) => ({
  title: cat.title,
  slug: cat.slug,
  services: cat.services.map((s) => ({ title: s.title, slug: s.slug, description: s.description })),
}));

// Sectors without an /industries page yet, covered by an industry-specific product page.
// Listed under Industries so every sector we serve is one click from the header.
const EXTRA_SECTOR_SLUGS = ['ai-logistics-automation', 'ai-education-automation'];
export const extraSectorLinks = (
  productCategories.find((c) => c.slug === 'industry-specific-ai-automation')?.products ?? []
).filter((p) => p.live && EXTRA_SECTOR_SLUGS.includes(p.slug));

export function useNav() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeProductCategory, setActiveProductCategory] = useState(0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobilePlatformsOpen, setIsMobilePlatformsOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isMobileCaseStudiesOpen, setIsMobileCaseStudiesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [mobileProductCategory, setMobileProductCategory] = useState<number | null>(null);


  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const platformTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const caseStudiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape closes any open menu (keyboard users)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setIsServicesOpen(false);
      setIsSolutionsOpen(false);
      setIsPlatformsOpen(false);
      setIsIndustriesOpen(false);
      setIsCaseStudiesOpen(false);
      setIsProductsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Handle hash navigation after page load
  useEffect(() => {
    if (pathname === '/') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          setTimeout(() => {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    }
  }, [pathname]);

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };
  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 200);
  };
  const handleServicesDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };
  const handleServicesDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 200);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setIsSolutionsOpen(true);
  };
  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => setIsSolutionsOpen(false), 200);
  };
  const handleSolutionsDropdownMouseEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setIsSolutionsOpen(true);
  };
  const handleSolutionsDropdownMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => setIsSolutionsOpen(false), 200);
  };

  const handlePlatformsMouseEnter = () => {
    if (platformTimeoutRef.current) clearTimeout(platformTimeoutRef.current);
    setIsPlatformsOpen(true);
  };
  const handlePlatformsMouseLeave = () => {
    platformTimeoutRef.current = setTimeout(() => setIsPlatformsOpen(false), 200);
  };
  const handlePlatformsDropdownMouseEnter = () => {
    if (platformTimeoutRef.current) clearTimeout(platformTimeoutRef.current);
    setIsPlatformsOpen(true);
  };
  const handlePlatformsDropdownMouseLeave = () => {
    platformTimeoutRef.current = setTimeout(() => setIsPlatformsOpen(false), 200);
  };

  const handleIndustriesMouseEnter = () => {
    if (industryTimeoutRef.current) clearTimeout(industryTimeoutRef.current);
    setIsIndustriesOpen(true);
  };
  const handleIndustriesMouseLeave = () => {
    industryTimeoutRef.current = setTimeout(() => setIsIndustriesOpen(false), 200);
  };
  const handleIndustriesDropdownMouseEnter = () => {
    if (industryTimeoutRef.current) clearTimeout(industryTimeoutRef.current);
    setIsIndustriesOpen(true);
  };
  const handleIndustriesDropdownMouseLeave = () => {
    industryTimeoutRef.current = setTimeout(() => setIsIndustriesOpen(false), 200);
  };

    const handleCaseStudiesMouseEnter = () => {
    if (caseStudiesTimeoutRef.current) clearTimeout(caseStudiesTimeoutRef.current);
    setIsCaseStudiesOpen(true);
  };
  const handleCaseStudiesMouseLeave = () => {
    caseStudiesTimeoutRef.current = setTimeout(() => setIsCaseStudiesOpen(false), 200);
  };
  const handleCaseStudiesDropdownMouseEnter = () => {
    if (caseStudiesTimeoutRef.current) clearTimeout(caseStudiesTimeoutRef.current);
    setIsCaseStudiesOpen(true);
  };
  const handleCaseStudiesDropdownMouseLeave = () => {
    caseStudiesTimeoutRef.current = setTimeout(() => setIsCaseStudiesOpen(false), 200);
  };

  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setIsProductsOpen(true);
  };
  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => setIsProductsOpen(false), 200);
  };
  const handleProductsDropdownMouseEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setIsProductsOpen(true);
  };
  const handleProductsDropdownMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => setIsProductsOpen(false), 200);
  };

  // Category currently shown on the right side of the Products dropdown
  const activeProductCategoryData = productCategories[activeProductCategory] ?? productCategories[0];

  const getProductCategoryIcon = (slug: string, className = 'h-4 w-4') => {
    const Icon = productCategoryIconMap[slug] || BrainCircuit;
    return <Icon className={className} />;
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -12, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.97,
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const serviceItemVariants: Variants = {
    hidden: { opacity: 0, x: -8 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.04, duration: 0.2, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const getServiceIcon = (title: string) => {
    const Icon = serviceIconMap[title] || FallbackIcon;
    return <Icon className="h-4 w-4 text-brand flex-shrink-0" />;
  };

  const getPlatformIcon = (title: string) => {
    const Icon = platformIconMap[title] || FallbackIcon;
    return <Icon className="h-4 w-4 text-brand flex-shrink-0" />;
  };

  const getIndustryIcon = (title: string) => {
    const Icon = industryIconMap[title] || FallbackIcon;
    return <Icon className="h-4 w-4 text-brand flex-shrink-0" />;
  };

  const getSolutionIcon = (title: string) => {
    const solution = solutionsData.find(s => s.title === title);
    const Icon = solution?.icon || BrainCircuit;
    return <Icon className="h-4 w-4 text-brand flex-shrink-0" />;
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsPlatformsOpen(false);
    setIsIndustriesOpen(false);
     setIsCaseStudiesOpen(false); 
    setIsProductsOpen(false);
  };

  return {
    closeAllDropdowns,
    isProductsOpen,
    setIsProductsOpen,
    activeProductCategory,
    setActiveProductCategory,
    activeProductCategoryData,
    isMobileProductsOpen,
    setIsMobileProductsOpen,
    mobileProductCategory,
    setMobileProductCategory,
    handleProductsMouseEnter,
    handleProductsMouseLeave,
    handleProductsDropdownMouseEnter,
    handleProductsDropdownMouseLeave,
    getProductCategoryIcon,
    isServicesOpen,
    setIsServicesOpen,
    isSolutionsOpen,
    setIsSolutionsOpen,
    isPlatformsOpen,
    setIsPlatformsOpen,
    isIndustriesOpen,
    setIsIndustriesOpen,
    isCaseStudiesOpen,
    setIsCaseStudiesOpen,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isMobileServicesOpen,
    setIsMobileServicesOpen,
    isMobileSolutionsOpen,
    setIsMobileSolutionsOpen,
    isMobilePlatformsOpen,
    setIsMobilePlatformsOpen,
    isMobileIndustriesOpen,
    setIsMobileIndustriesOpen,
    isMobileCaseStudiesOpen,
    setIsMobileCaseStudiesOpen,
    scrolled,
    handleServicesMouseEnter,
    handleServicesMouseLeave,
    handleServicesDropdownMouseEnter,
    handleServicesDropdownMouseLeave,
    handleSolutionsMouseEnter,
    handleSolutionsMouseLeave,
    handleSolutionsDropdownMouseEnter,
    handleSolutionsDropdownMouseLeave,
    handlePlatformsMouseEnter,
    handlePlatformsMouseLeave,
    handlePlatformsDropdownMouseEnter,
    handlePlatformsDropdownMouseLeave,
    handleIndustriesMouseEnter,
    handleIndustriesMouseLeave,
    handleIndustriesDropdownMouseEnter,
    handleIndustriesDropdownMouseLeave,
    handleCaseStudiesMouseEnter,
    handleCaseStudiesMouseLeave,
    handleCaseStudiesDropdownMouseEnter,
    handleCaseStudiesDropdownMouseLeave,
    dropdownVariants,
    serviceItemVariants,
    getServiceIcon,
    getPlatformIcon,
    getIndustryIcon,
  };
}
