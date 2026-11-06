// app/solutions/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { canonicalPath, canonicalUrl } from '@/lib/canonical';
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
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Solutions for Business Teams | Clickmasters',
  description: 'Explore Clickmasters AI automation solutions for sales, support, documents, reporting, and the tools your team already uses. Book a free audit.',
  alternates: {
    canonical: canonicalUrl('/solutions'),
  },
};

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
      
      <Section bg="muted" pattern="dots" className="py-20">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                  <Link href={`/solutions/${category}`} className="hover:text-brand">
                    {displayName}
                  </Link>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {solutions.map((solution) => {
                    // Get icon based on solution title or heading
                    const iconKey = solution.heroHeading || solution.title || '';
                    const Icon = iconMap[iconKey] || iconMap[solution.category] || Sparkles;
                    
                    return (
                      <Link
                        key={solution.slug}
                        href={canonicalPath(solution.url)}
                        className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-brand/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand transition-colors line-clamp-1">
                            {solution.heroHeading || solution.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {solution.metaDescription || solution.description || solution.heroSubheading || ''}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-brand font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
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