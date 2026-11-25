// app/solutions/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { canonicalPath, canonicalUrl } from '@/lib/canonical';
import { withSocialDefaults } from '@/lib/seo';
import { HubJsonLd } from '@/components/seo/HubJsonLd';
import { hubSeo } from '@/lib/hub-seo';
import { getAllSolutions } from '@/content/Solutions';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { Section, SectionHeading } from '@/components/solutions/layout/Section';
import { 
  MessageSquare, 
  Workflow, 
  Database, 
  Headphones, 
  FileText, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Briefcase,
  Brain,
  Building2,
  HardHat,
  ShoppingBag,
  GraduationCap,
  Heart,
  Shield,
  Scale,
  Truck,
  Factory,
  Home,
  Utensils,
  Store,
  Cloud,
  ArrowRight,
  BrainCircuit
} from 'lucide-react';

export const metadata: Metadata = withSocialDefaults({
  title: 'AI Automation Solutions for Business Teams | Clickmasters',
  description: 'Explore Clickmasters AI automation solutions for sales, support, documents, reporting, and the tools your team already uses. Book a free audit.',
  alternates: {
    canonical: canonicalUrl('/solutions'),
  },
});

// Icon mapping for solution cards - Expanded with all icons
const iconMap: Record<string, any> = {
  // Main Solutions
  'AI Chatbots': MessageSquare,
  'AI Chatbot Solutions': MessageSquare,
  'AI Workflow Automation': Workflow,
  'CRM Automation': Database,
  'Customer Support Automation': Headphones,
  'Document & Data Automation': FileText,
  'Lead Generation Automation': Target,
  'Marketing Automation': TrendingUp,
  'Reporting Automation': BarChart3,
  'Sales Automation': Briefcase,
  'AI Agent Development': Brain,
  
  // Industries - AI Chatbots
  'AI Chatbots for Accounting Firms': Building2,
  'AI Chatbots for Construction': HardHat,
  'AI Chatbots for E-commerce': ShoppingBag,
  'AI Chatbots for Education': GraduationCap,
  'AI Chatbots for Healthcare': Heart,
  'AI Chatbots for Insurance Agencies': Shield,
  
  // Industries - AI Agents
  'AI Agent Development for Accounting Firms': Building2,
  'AI Agent Development for Construction': HardHat,
  'AI Agent Development for E-commerce': ShoppingBag,
  'AI Agent Development for Education': GraduationCap,
  'AI Agent Development for Healthcare': Heart,
  'AI Agent Development for Insurance Agencies': Shield,
  'AI Agent Development for Law Firms': Scale,
  'AI Agent Development for Logistics & Transportation': Truck,
  'AI Agent Development for Manufacturing': Factory,
  'AI Agent Development for Real Estate': Home,
  'AI Agent Development for Restaurants & Hospitality': Utensils,
  'AI Agent Development for Retail': Store,
  'AI Agent Development for SaaS Companies': Cloud,
};

export default function SolutionsPage() {
  const allSolutions = getAllSolutions();

  // Group solutions by category
  const categories = allSolutions.reduce((acc, solution) => {
    const category = solution.category || 'Other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(solution);
    return acc;
  }, {} as Record<string, typeof allSolutions>);

  const heroData = {
    badge: 'Solutions',
    heading: 'AI Automation Solutions',
    subheading: 'Intelligent automation systems built on the platforms you already use.',
    primaryCta: {
      text: 'Book a Free Audit',
      href: '/free-automation-audit',
    },
    image: '/images/solution.jpg',
    imageAlt: 'Glowing AI brain connected to robotic arms, machines and data dashboards',
    imageWidth: 700,
    imageHeight: 580,
    textSize: 'xlarge' as const,
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Solutions', href: '/solutions' },
    ],
  };

  return (
    <>
      <HubJsonLd hub={hubSeo.solutions} />
      <HeroSection {...heroData} />
      
      <Section bg="paper" pattern="dots" className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Explore Our Solutions"
            subtitle="End-to-end automation systems that save time, reduce errors, and scale with your business."
            eyebrow="Solutions"
            align="center"
          />

          {Object.entries(categories).map(([category, solutions], categoryIndex) => {
            // Format category name for display
            let displayName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            
            // Special formatting for specific categories
            if (category === 'ai-agents') displayName = 'AI Agent Development';
            if (category === 'ai-chatbots') displayName = 'AI Chatbots';
            if (category === 'ai-workflow-automation') displayName = 'AI Workflow Automation';
            
            return (
              <div key={category} className={`${categoryIndex > 0 ? 'mt-16' : 'mt-12'}`}>
                <h2 className="display mb-6 text-2xl capitalize md:text-3xl">
                  <Link href={`/solutions/${category}`} className="hover:text-brand">
                    {displayName}
                  </Link>
                </h2>
                <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
                  {solutions.map((solution) => {
                    // Get icon based on solution title or heading
                    const iconKey = solution.heroHeading || solution.title || '';
                    const Icon = iconMap[iconKey] || iconMap[solution.category] || BrainCircuit;
                    
                    return (
                      <Link
                        key={solution.slug}
                        href={canonicalPath(solution.url)}
                        className="group flex h-full flex-col bg-paper p-6 transition-colors duration-500 hover:bg-ink hover:text-white md:p-8"
                      >
                        <div className="mb-5 flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-brand/30 bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <h3 className="display line-clamp-2 text-lg transition-colors group-hover:text-brand md:text-xl">
                            {solution.heroHeading || solution.title}
                          </h3>
                        </div>
                        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">
                          {solution.metaDescription || solution.description || solution.heroSubheading || ''}
                        </p>
                        <div className="mt-auto flex items-center gap-2 eyebrow text-xs text-brand">
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}