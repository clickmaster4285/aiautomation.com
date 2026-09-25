// content/services/ai-voice-agents.ts
import { ServiceContent } from './type';

export const aiVoiceAgents: ServiceContent = {
  slug: 'ai-voice-agents',
  title: 'Top AI Voice Agents Services - AI Voice Agent Agency',
  metaDescription:
    'Get custom AI voice agents for support, sales & lead generation. Trusted AI voice agent services with CRM integration. Book a free demo today.',
  keywords: 'ai voice agent services, ai voice agent agency, ai voice agent company, voice automation, ai caller, conversational voice ai',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Voice Agent Services — Voice Automation for Customer Support & Sales',
      subheading:
        'Our AI voice agent services help businesses automate phone conversations without losing the human touch. We build AI voice agents that answer calls, talk like real people, and get things done—from answering customer questions to booking appointments and qualifying leads.',
      content: [
        'Whether you need an AI caller for outbound sales or a full voice AI system for customer support, we design it around how your business actually works.',
      ],
      stats: [
        { label: 'PROJECTS', value: '110+' },
        { label: 'CLIENTS', value: '55+' },
      ],
      ctas: [
        { text: 'Book a Free Demo', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false },
      ],
      image: {
        src: '/images/ai-voice-agent.png',
        alt: 'AI Voice Agent illustration',
        width: 1200,
        height: 1000,
        fadeEdges: true,
      },
    },

    // ========== TEXT: Professional AI Voice Agent Company ==========
    {
      type: 'text',
      heading: 'Professional AI Voice Agent Company',
      content: [
        'Our AI Voice Agent Company builds solutions around your business — not generic templates that sound the same for everyone.',
        'We\'re a team of experienced AI voice agent developers who build custom AI voice agent solutions from the ground up. Our voice automation systems connect to your CRM, understand natural conversation, and handle real business tasks—not just scripted replies. As a dedicated AI voice agent agency, we focus on one thing: building voice agents that actually sound natural, work reliably, and deliver results your team can measure.',
      ],
    },

    // ========== FEATURES: Our AI Voice Agent Services ==========
    {
      type: 'features',
      heading: 'Our AI Voice Agent Services—Built for Business Growth',
      subheading: 'Explore our full range of AI voice agent services — built to automate calls, save time, and scale your business operations.',
      items: [
        {
          title: 'Automated Call Handling',
          description: 'Our AI caller agents answer, route, and resolve inbound calls without human intervention — reducing wait times and freeing up your team for higher-priority work.',
          icon: 'PhoneCall',
        },
        {
          title: 'Call Flow Automation',
          description: 'We design structured call flow automation that guides every caller toward the right outcome, whether that\'s a resolved issue, a booked appointment, or a qualified lead.',
          icon: 'GitBranch',
        },
        {
          title: 'Text-to-Voice Systems',
          description: 'Using advanced text-to-voice technology, our agents speak naturally — no robotic tone, no awkward pauses — so callers get a smooth, human-like experience.',
          icon: 'Mic',
        },
        {
          title: 'Outbound Calling Agents',
          description: 'From follow-ups to reminders to sales outreach, our voice automation systems handle outbound calling at scale, without adding to your team\'s workload.',
          icon: 'Send',
        },
        {
          title: 'Inbound Support Agents',
          description: 'Our voice-based customer support agents are available 24/7, handling common queries instantly and escalating to a human only when truly necessary.',
          icon: 'Headphones',
        },
        {
          title: 'AI Phone Systems',
          description: 'We build complete AI phone systems—from call routing to conversation logic to system integrations—tailored entirely around how your business operates.',
          icon: 'Phone',
        },
      ],
    },

    // ========== TEXT: AI Voice Agents for Customer Support and Sales ==========
    {
      type: 'text',
      heading: 'AI Voice Agents for Customer Support and Sales',
      content: [
        'AI voice agents are more than chatbots with a voice—they\'re complete systems built to handle real phone calls for your business.',
        'For customer support, a voice agent answers calls, resolves issues, and escalates only when needed—24/7, no hold time. For sales, conversational voice AI makes calls, qualifies leads, and follows up automatically—so your team focuses on closing, not dialling. The difference? A true AI voice agent understands context and takes action—not just plays pre-recorded responses.',
      ],
    },

    // ========== GRID: Voice AI Integration ==========
    {
      type: 'grid',
      heading: 'Voice AI Integration With CRM, APIs, and Business Systems',
      subheading: 'A voice agent is only as useful as the systems it connects to. Our integration work ensures your voice AI agents plug directly into the tools you already use:',
      items: [
        { title: 'CRMs', description: 'Salesforce, HubSpot, Zoho — Automatic call logging and lead updates.', icon: 'Briefcase' },
        { title: 'APIs', description: 'Custom connections to your internal systems.', icon: 'Plug' },
        { title: 'Calendars', description: 'Real-time appointment scheduling during calls.', icon: 'Calendar' },
        { title: 'Helpdesk Tools', description: 'Ticket creation and status updates.', icon: 'LifeBuoy' },
        { title: 'Databases', description: 'Instant access to customer information during conversations.', icon: 'Database' },
      ],
    },

    // ========== FEATURES: AI Outbound Call Agents ==========
    {
      type: 'features',
      heading: 'AI Outbound Call Agents for Lead Generation and Appointment Booking',
      subheading: 'Stop losing leads to slow follow-ups — our AI outbound call agents qualify prospects and book appointments automatically.',
      items: [
        {
          title: 'Lead Generation',
          description: 'Voice agents can make outbound calls, qualify prospects based on your criteria, and pass only sales-ready leads to your team.',
          icon: 'Target',
        },
        {
          title: 'Appointment Booking Agents',
          description: 'Check calendar availability, confirm time slots, and send reminders automatically — cutting down on no-shows and manual scheduling work.',
          icon: 'Calendar',
        },
      ],
    },

    // ========== FEATURES: Why Choose Our AI Voice Agent Agency ==========
    {
      type: 'features',
      heading: 'Why Choose Our AI Voice Agent Agency?',
      subheading: 'Not every AI voice agent agency delivers real results — here\'s what makes our approach different, measurable, and built to last.',
      items: [
        {
          title: 'Custom-Built Agents',
          description: 'No generic scripts, no cookie-cutter templates — every agent is built around your business.',
          icon: 'Bot',
        },
        {
          title: 'Deep Integration',
          description: 'Expertise in CRM, API, and telephony systems connected the right way — not just patched together.',
          icon: 'Network',
        },
        {
          title: 'Natural-Sounding Conversations',
          description: 'Voice that feels human, not robotic — so callers actually stay engaged.',
          icon: 'Mic',
        },
        {
          title: 'Experienced AI Voice Agent Developers',
          description: 'Real engineering behind every agent, not just prompt tweaking.',
          icon: 'Users',
        },
        {
          title: 'Transparent Process',
          description: 'Clear communication and visibility from discovery through deployment, so you always know where your project stands.',
          icon: 'Eye',
        },
        {
          title: 'Ongoing Support',
          description: 'We don\'t disappear after launch — we monitor, optimise, and stay involved.',
          icon: 'Shield',
        },
      ],
    },

    // ========== GRID: Benefits ==========
    {
      type: 'grid',
      heading: 'Benefits of AI Voice Agents for Businesses',
      subheading: 'From faster response times to lower costs, our AI voice agents deliver measurable benefits that scale with your business.',
      items: [
        { title: '24/7 Availability', description: 'Never miss a call, day or night — your business stays reachable around the clock.', icon: 'Clock' },
        { title: 'Reduced Wait Times', description: 'Instant answers instead of hold queues — callers get help the moment they call.', icon: 'Zap' },
        { title: 'Lower Operational Costs', description: 'Handle high call volumes without adding staff or expanding your team.', icon: 'DollarSign' },
        { title: 'Consistent Quality', description: 'Every call handled the same way, every time — no bad days, no inconsistency.', icon: 'CheckCircle' },
        { title: 'Faster Lead Response', description: 'Voice agents respond in seconds, not hours — so leads don\'t go cold.', icon: 'TrendingUp' },
        { title: 'Scalable Call Handling', description: 'Manage thousands of calls at once, without the cost of extra hiring.', icon: 'BarChart3' },
      ],
    },

    // ========== STEPS: How We Build and Deploy Agents ==========
    {
      type: 'steps',
      heading: 'How Our AI Voice Agent Developers Build and Deploy Agents',
      subheading: 'Our experienced AI voice agent developers follow a proven process — from discovery to deployment — built for real-world performance.',
      items: [
        { title: 'Discovery', description: 'We learn your call flows, goals, and the problems you want to solve.' },
        { title: 'Design', description: 'We map out conversation flows and select the right voice and tone for your brand.' },
        { title: 'Prototype', description: 'A working version of your voice agent is built for testing.' },
        { title: 'Development', description: 'Full agent development, including logic, reasoning, and response handling.' },
        { title: 'Integration', description: 'The agent connects to your CRM, calendar, and business systems.' },
        { title: 'Testing & QA', description: 'Real call testing to check accuracy, latency, and natural conversation flow.' },
        { title: 'Deployment', description: 'Your agent goes live and starts handling real calls.' },
        { title: 'Ongoing Optimization', description: 'We monitor performance and fine-tune based on real call data.' },
      ],
    },

    // ========== FEATURES: Platform and Capabilities ==========
    {
      type: 'features',
      heading: 'Our AI Voice Agent Platform and Capabilities',
      subheading: 'Built for performance, our AI voice agent platform combines natural conversation, fast deployment, and enterprise-grade reliability.',
      items: [
        { title: 'Speech & Voice', description: 'Natural, human-sounding output using engines like ElevenLabs.', icon: 'Mic' },
        { title: 'Conversational AI Models', description: 'Powered by GPT, Claude, and Gemini for context-aware responses.', icon: 'Brain' },
        { title: 'Telephony', description: 'Reliable inbound/outbound calling via SIP trunking and Twilio Voice.', icon: 'Phone' },
        { title: 'Integrations', description: 'Seamless connections with Salesforce, HubSpot, Zoho, APIs, and webhooks.', icon: 'Plug' },
        { title: 'Infrastructure', description: 'Scalable, low-latency performance on AWS, Azure, and GCP.', icon: 'Server' },
        { title: 'Security & Monitoring', description: 'Encrypted data handling, compliance, and real-time call analytics.', icon: 'Shield' },
      ],
    },

    // ========== GRID: Use Cases Across Industries ==========
    {
      type: 'grid',
      heading: 'Artificial Intelligence Voice Agents Use Cases Across Industries',
      subheading: 'See how artificial intelligence voice agents are helping businesses across healthcare, real estate, finance, and more achieve measurable results.',
      items: [
        {
          title: 'AI Voice Agent in Healthcare',
          description: 'We developed voice agents that handle appointment scheduling, patient reminders, and intake calls, helping clinics reduce no-shows and free up front-desk staff.',
          icon: 'HeartPulse',
        },
        {
          title: 'AI Voice Agent in E-commerce',
          description: 'Our agents manage order status calls, return processing, and customer support, cutting down response times and support ticket volume.',
          icon: 'ShoppingCart',
        },
        {
          title: 'AI Voice Agent for Real Estate',
          description: 'We built voice agents that handle lead follow-up calls, property enquiries, and appointment booking, helping agencies respond faster and close more deals.',
          icon: 'Building2',
        },
        {
          title: 'AI Voice Agent in Finance',
          description: 'Our agents power account enquiries, payment reminders, and fraud alert calls, improving customer communication while reducing manual call handling.',
          icon: 'Landmark',
        },
        {
          title: 'AI Voice Agent in Logistics',
          description: 'We developed agents for delivery status updates and scheduling confirmations, keeping customers informed and cutting down support requests.',
          icon: 'Truck',
        },
        {
          title: 'AI Voice Agent in Hospitality',
          description: 'Our voice agents handle booking confirmations, reservation changes, and guest support, delivering faster service without adding staff.',
          icon: 'Hotel',
        },
      ],
    },

    // ========== GRID: Client Reviews ==========
    {
      type: 'grid',
      heading: 'Client Reviews',
      items: [
        {
          title: '★★★★★',
          description: 'Our manual call handling dropped almost immediately after launch. The AI voice agent actually sounds natural—customers don\'t realize they\'re talking to AI.',
          icon: 'Star',
        },
        {
          title: 'Ethan Brown',
          description: 'We needed an AI caller for outbound follow-ups, and the CRM integration made it seamless. Every call gets logged automatically now.',
          icon: 'Star',
        },
        {
          title: 'William Taylor',
          description: 'Appointment no-shows dropped significantly once the voice agent started handling reminder calls. Simple change, big impact.',
          icon: 'Star',
        },
        {
          title: 'Anna Schneider',
          description: 'We compared a few voice AI providers before choosing this team. Their AI voice agent services gave us 24/7 support coverage without hiring extra staff.',
          icon: 'Star',
        },
        {
          title: 'Emily Carter',
          description: 'As an AI voice agent agency, they actually understood our call flow before building anything. The conversational voice AI handles our lead calls better than we expected.',
          icon: 'Star',
        },
      ],
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'FAQs',
      items: [
        {
          title: 'What is an AI voice agent?',
          description: 'An AI voice agent is a conversational system that can answer or place phone calls, understand natural speech, and handle tasks such as support, scheduling, or lead qualification.',
        },
        {
          title: 'How is a voice agent different from a regular IVR system?',
          description: 'Unlike IVR, which follows fixed menu options, a voice agent understands natural conversation and can reason, respond, and take action—not just route calls.',
        },
        {
          title: 'Can AI voice agents integrate with our CRM?',
          description: 'Yes. Our voice agents connect directly to your CRM, updating records and logging calls automatically.',
        },
        {
          title: 'Do AI voice agents sound robotic?',
          description: 'No—our agents use advanced text-to-voice technology designed to sound natural and human-like.',
        },
        {
          title: 'How long does it take to build and deploy a voice agent?',
          description: 'Simple agents can launch in a few weeks; more complex systems with deep integrations take longer depending on scope.',
        },
        {
          title: 'What\'s the main difference between a voice bot and an AI voice agent?',
          description: 'A voice bot follows fixed scripts and keyword triggers, while an AI voice agent understands natural conversation, context, and intent—and can take real action like booking appointments or updating CRM records.',
        },
      ],
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Book a Free Demo',
      subheading: 'See how an AI voice agent can handle your calls — 30 minutes, no obligation.',
      cta: {
        text: 'Book Your Free Demo',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};