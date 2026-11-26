// components/landingPage/navConfig.ts
// The main navigation: seven menus, each a hub link plus grouped links.
//
// Rules for editing (SEO):
// - Link only pages that exist. Check with `node scripts/check-nav-links.mjs <origin>` against a running
//   build: every header link must return 200, be indexable, and have its #fragment on the target page.
// - One link per search intent: services = what we build (/services), solutions = the business problem
//   (/solutions, problem-level products), industries = who it is for (/industries), technologies =
//   the platforms and AI we build on (/platforms, agent products). Don't add the same page twice.
// - /solutions/<type>/for-<industry> pages are noindexed (lib/solution-indexing.ts); never link them here.
import {
  Workflow,
  RefreshCw,
  Bot,
  BarChart3,
  Code,
  Lightbulb,
  Brain,
  PhoneCall,
  MessageSquare,
  BookOpen,
  Headphones,
  Target,
  TrendingUp,
  Megaphone,
  Database,
  CalendarCheck,
  FileText,
  Plug,
  Mail,
  Receipt,
  Users,
  ScanText,
  ShoppingBag,
  Building2,
  HeartPulse,
  Home,
  Banknote,
  Scale,
  GraduationCap,
  Truck,
  Cloud,
  Briefcase,
  Network,
  Boxes,
  GitBranch,
  Zap,
  Rocket,
  Table,
  Newspaper,
  GitCompare,
  ClipboardCheck,
  Info,
  Compass,
  ListOrdered,
  Award,
  Send,
  PhoneIncoming,
  type LucideIcon,
} from 'lucide-react';

export type NavLink = { label: string; href: string; description?: string; icon?: LucideIcon };
export type NavGroup = { heading: string; links: NavLink[] };
export type NavMenu = {
  id: string;
  label: string;
  /** Hub page the top-level label links to. */
  href: string;
  /** "View all" link text at the bottom of the panel. */
  hubLabel: string;
  intro: string;
  groups: NavGroup[];
  /** Panel width and column count on desktop. */
  size: 'xl' | 'lg' | 'md' | 'sm';
  /** Columns for the groups grid (desktop). */
  columns: 1 | 2 | 3 | 4;
  /** Show the consultation card beside the links. */
  feature?: boolean;
  /** Extra links under the hub link in the panel footer. */
  footerLinks?: NavLink[];
};

export const NAV_CTA = {
  label: 'Get an Automation Consultation',
  href: '/free-automation-audit',
};

export const NAV_MENUS: NavMenu[] = [
  {
    id: 'services',
    label: 'AI Services',
    href: '/services',
    hubLabel: 'All AI services',
    intro: 'What we design, build and maintain for your team.',
    size: 'xl',
    columns: 4,
    footerLinks: [{ label: 'AI software products', href: '/products' }],
    groups: [
      {
        heading: 'AI Automation',
        links: [
          { label: 'AI Workflow Automation', href: '/services/ai-workflow-automation', description: 'Multi-step workflows with AI decisions', icon: Workflow },
          { label: 'Business Process Automation', href: '/services/business-process-automation', description: 'End-to-end processes across teams', icon: RefreshCw },
          { label: 'Robotic Process Automation (RPA)', href: '/services/robotic-process-automation', description: 'Bots for legacy and UI-only systems', icon: Bot },
          { label: 'AI Reporting Automation', href: '/services/ai-reporting-automation', description: 'Scheduled reports and dashboards', icon: BarChart3 },
          { label: 'Custom AI Development', href: '/services/custom-ai-development', description: 'Bespoke AI features and tools', icon: Code },
          { label: 'AI Strategy & Advisory', href: '/services/ai-strategy-advisory', description: 'Roadmaps and use-case selection', icon: Lightbulb },
        ],
      },
      {
        heading: 'AI Agents & Assistants',
        links: [
          { label: 'AI Agent Development', href: '/services/ai-agent-development', description: 'Agents that use your tools and data', icon: Brain },
          { label: 'AI Voice Agent Development', href: '/services/ai-voice-agents', description: 'Answer, qualify and book by phone', icon: PhoneCall },
          { label: 'AI Chatbot Development', href: '/services/ai-chatbots', description: 'Website and messaging chatbots', icon: MessageSquare },
          { label: 'AI Knowledge Assistants', href: '/services/ai-knowledge-assistants', description: 'Answers from your own documents', icon: BookOpen },
          { label: 'Customer Support Automation', href: '/solutions/customer-support-automation', description: 'Triage, answers and escalation', icon: Headphones },
        ],
      },
      {
        heading: 'Business Growth Automation',
        links: [
          { label: 'AI Lead Generation', href: '/services/ai-lead-generation', description: 'Capture, qualify and route leads', icon: Target },
          { label: 'Sales Automation', href: '/solutions/sales-automation', description: 'Pipeline updates and follow-up', icon: TrendingUp },
          { label: 'Marketing Automation', href: '/solutions/marketing-automation', description: 'Campaigns, nurture and segmentation', icon: Megaphone },
          { label: 'CRM Automation', href: '/solutions/crm-automation', description: 'A CRM that updates itself', icon: Database },
          { label: 'Appointment Automation', href: '/solutions/appointment-booking-automation', description: 'Booking, reminders and no-shows', icon: CalendarCheck },
        ],
      },
      {
        heading: 'Data & Integration',
        links: [
          { label: 'Document Automation', href: '/solutions/document-automation', description: 'Extract, classify and file documents', icon: FileText },
          { label: 'AI Integration Services', href: '/products/general-ai-automation/ai-integration-services', description: 'Connect AI to your systems and data', icon: Plug },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Automation Solutions',
    href: '/solutions',
    hubLabel: 'All automation solutions',
    intro: 'The business problems we automate, by workflow.',
    size: 'lg',
    columns: 2,
    feature: true,
    groups: [
      {
        heading: 'Customer & revenue',
        links: [
          { label: 'Customer Support Automation', href: '/solutions/customer-support-automation', description: 'Resolve and route tickets faster', icon: Headphones },
          { label: 'Lead Generation Automation', href: '/solutions/lead-generation-automation', description: 'Every lead captured and routed', icon: Target },
          { label: 'Appointment Scheduling Automation', href: '/solutions/appointment-booking-automation', description: 'Self-serve booking and reminders', icon: CalendarCheck },
          { label: 'Sales Pipeline Automation', href: '/solutions/sales-automation', description: 'Deals that move without chasing', icon: TrendingUp },
          { label: 'Email Automation', href: '/products/ai-marketing-automation/ai-email-automation', description: 'Personalised, triggered email flows', icon: Mail },
          { label: 'E-commerce Automation', href: '/products/ai-ecommerce-automation', description: 'Orders, inventory and support', icon: ShoppingBag },
        ],
      },
      {
        heading: 'Operations & back office',
        links: [
          { label: 'Invoice Processing Automation', href: '/solutions/invoice-automation', description: 'Capture, match and approve invoices', icon: Receipt },
          { label: 'HR & Recruitment Automation', href: '/products/ai-hr-recruitment', description: 'Screening, scheduling and onboarding', icon: Users },
          { label: 'Data Entry Automation', href: '/products/ai-document-data-intelligence/ai-data-extraction-software', description: 'Data pulled from PDFs and forms', icon: ScanText },
          { label: 'Reporting & Analytics Automation', href: '/solutions/reporting-automation', description: 'Reports that build themselves', icon: BarChart3 },
          { label: 'Enterprise Workflow Automation', href: '/products/ai-workflow-business-process-automation/enterprise-workflow-automation', description: 'Cross-department workflows at scale', icon: Building2 },
        ],
      },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    href: '/industries',
    hubLabel: 'All industries',
    intro: 'Automation built around how your sector works.',
    size: 'lg',
    columns: 2,
    feature: true,
    groups: [
      {
        heading: 'Regulated & professional',
        links: [
          { label: 'Healthcare', href: '/industries/ai-automation-for-healthcare', description: 'Scheduling, intake and reminders', icon: HeartPulse },
          { label: 'Finance & Accounting', href: '/industries/ai-automation-for-finance-accounting', description: 'Invoices, reconciliation and close', icon: Banknote },
          { label: 'Legal Services', href: '/industries/ai-automation-for-law-firms', description: 'Intake, documents and deadlines', icon: Scale },
          { label: 'Professional Services', href: '/industries/ai-automation-for-professional-services', description: 'Onboarding, proposals and billing', icon: Briefcase },
          { label: 'Education', href: '/products/industry-specific-ai-automation/ai-education-automation', description: 'Enrolment, admin and student support', icon: GraduationCap },
        ],
      },
      {
        heading: 'Commerce & growth',
        links: [
          { label: 'Real Estate', href: '/industries/ai-automation-for-real-estate', description: 'Lead qualification and showings', icon: Home },
          { label: 'E-commerce', href: '/industries/ai-automation-for-ecommerce', description: 'Support, orders and cart recovery', icon: ShoppingBag },
          { label: 'SaaS & Technology', href: '/industries/ai-automation-for-saas', description: 'Onboarding, support and churn signals', icon: Cloud },
          { label: 'Marketing Agencies', href: '/industries/ai-automation-for-marketing-agencies', description: 'Client reporting and onboarding', icon: Megaphone },
          { label: 'Logistics', href: '/products/industry-specific-ai-automation/ai-logistics-automation', description: 'Shipments, tracking and dispatch', icon: Truck },
        ],
      },
    ],
  },
  {
    id: 'technologies',
    label: 'AI & Automation Technologies',
    href: '/platforms',
    hubLabel: 'All platforms we implement',
    intro: 'The AI and platforms we build on, chosen to fit your stack.',
    size: 'lg',
    columns: 3,
    groups: [
      {
        heading: 'Artificial Intelligence',
        links: [
          { label: 'AI Agents', href: '/solutions/ai-agents', description: 'Agents that reason and use tools', icon: Brain },
          { label: 'Multi-Agent Systems', href: '/products/ai-agents-platforms/multi-agent-systems', description: 'Agents that work together', icon: Network },
          { label: 'AI Agent Platforms', href: '/products/ai-agents-platforms', description: 'Run and manage agents in production', icon: Boxes },
        ],
      },
      {
        heading: 'Automation Platforms',
        links: [
          { label: 'n8n Automation', href: '/platforms/n8n-automation-services', description: 'Self-hosted and custom workflows', icon: GitBranch },
          { label: 'Make Automation', href: '/platforms/make-automation-services', description: 'Visual scenarios with complex logic', icon: Workflow },
          { label: 'Zapier Automation', href: '/platforms/zapier-automation-services', description: 'Fast integrations across 9,000+ apps', icon: Zap },
        ],
      },
      {
        heading: 'CRM & Data Platforms',
        links: [
          { label: 'HubSpot Automation', href: '/platforms/hubspot-automation-services', description: 'CRM, marketing and sales workflows', icon: Mail },
          { label: 'GoHighLevel Automation', href: '/platforms/gohighlevel-automation-services', description: 'Follow-up, pipelines and booking', icon: Rocket },
          { label: 'Airtable Automation', href: '/platforms/airtable-automation-services', description: 'Operational bases and records', icon: Table },
        ],
      },
    ],
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    href: '/case-studies',
    hubLabel: 'All case studies',
    intro: 'Documented builds, with what changed and why.',
    size: 'sm',
    columns: 1,
    groups: [
      {
        heading: 'Voice AI & lead response',
        links: [
          {
            label: 'AI Receptionist & Lead Response',
            href: '/case-studies/ai-receptionist-lead-response-automation',
            description: 'Calls, texts and email answered and routed',
            icon: PhoneIncoming,
          },
        ],
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    href: '/blog',
    hubLabel: 'All guides',
    intro: 'Practical guides from the team that builds the automations.',
    size: 'md',
    columns: 2,
    groups: [
      {
        heading: 'Guides & comparisons',
        links: [
          { label: 'AI Automation Blog', href: '/blog', description: 'All guides and articles', icon: Newspaper },
          { label: 'n8n vs Zapier vs Make', href: '/blog/n8n-vs-zapier-vs-make', description: 'Which platform fits your team', icon: GitCompare },
          { label: 'AI Agents vs Workflow Automation', href: '/blog/ai-agents-vs-workflow-automation', description: 'When an agent is worth it', icon: Brain },
        ],
      },
      {
        heading: 'Get started',
        links: [
          { label: 'Free Automation Audit', href: '/free-automation-audit', description: 'We map one workflow with you', icon: ClipboardCheck },
        ],
      },
    ],
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
    hubLabel: 'About ClickMasters',
    intro: 'Who we are and how we work.',
    size: 'sm',
    columns: 1,
    groups: [
      {
        heading: 'Company',
        links: [
          { label: 'About ClickMasters', href: '/about', description: 'Who we are and why we build', icon: Info },
          { label: 'Our Approach', href: '/about#our-approach', description: 'Build, be honest, hand it over', icon: Compass },
          { label: 'Our Development Process', href: '/#process', description: 'From audit to production', icon: ListOrdered },
          { label: 'Why Choose ClickMasters', href: '/about#why-clickmasters', description: 'Closing the gap to production', icon: Award },
          { label: 'Contact Us', href: '/contact', description: 'Talk to the team', icon: Send },
        ],
      },
    ],
  },
];
