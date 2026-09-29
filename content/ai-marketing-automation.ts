// content/services/ai-marketing-automation.ts
import { ServiceContent } from './type';  

export const aiMarketingAutomation: ServiceContent = {
  slug: 'ai-marketing-automation',
  title: 'AI Marketing Automation Services | Clickmasters',
  metaDescription: 'Clickmasters builds AI marketing automation content generation, lead nurturing, and campaign workflows that run themselves, so marketing scales without more headcount.',
  keywords: 'ai marketing automation, marketing automation, content generation, lead nurturing',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Marketing Automation',
      subheading: 'Content, nurturing, and campaign workflows that run themselves so your marketing scales output without scaling headcount.',
      content: [
        'Clickmasters builds AI marketing automation that takes the repetitive production and follow-up work off your team and runs it automatically. Marketing teams burn enormous time on tasks that do not require strategic thinking drafting variations of content, building and sending nurture sequences, segmenting lists, assembling performance reports. AI marketing automation handles that layer, generating content, personalizing outreach, and running lifecycle campaigns on its own, so your people focus on strategy and the creative work that actually differentiates the brand.',
        'This page explains where marketing teams lose time, what AI marketing automation does about it, the systems we build, how we keep AI-generated content on-brand and accurate, and an honest view of what to expect because the goal is leverage for your team, not replacing the human judgment that good marketing depends on.'
      ],
      stats: [
        { label: 'PROJECTS', value: '170+' },
        { label: 'CLIENTS', value: '80+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/marketing.png',
        alt: 'AI Marketing Automation illustration',
        width: 666,
        height: 375
      }
    },

    // ========== TEXT: Where Marketing Teams Lose Time ==========
    {
      type: 'text',
      heading: 'Where Marketing Teams Lose Time',
      content: [
        'The bottleneck in most marketing teams is not ideas; it is production and follow-through. A single campaign needs dozens of content pieces emails, social posts, ad variations, landing-page copy each a small task that adds up to days of work. Lead nurturing requires sequences that have to be written, built, and maintained. Lists need segmenting. Reports need rebuilding every week and month. None of this is strategic, yet it consumes the time of people you hired for strategy and creativity.',
        'There is also a consistency problem. Follow-up that depends on someone remembering to send it slips. Campaigns that need a human to trigger each step stall when that human is busy. Personalization that has to be done by hand gets skipped under deadline pressure, so everyone gets the generic version. Automation solves both: it produces and personalizes at volume, and it runs lifecycle campaigns with perfect consistency, every time, regardless of how busy the team is.'
      ]
    },

    // ========== FEATURES: Our AI Marketing Automation Services ==========
    {
      type: 'features',
      heading: 'Our AI Marketing Automation Services',
      items: [
        {
          title: 'AI content generation',
          description: 'On-brand blog, email, social, and ad copy produced at scale, with human review turning a day of drafting into minutes of editing.',
          icon: 'FileText'
        },
        {
          title: 'Lead nurturing systems',
          description: 'Automated, personalized sequences that move leads down the funnel based on their behavior, without manual sending.',
          icon: 'Users'
        },
        {
          title: 'Campaign workflows',
          description: 'Multi-channel campaigns that trigger, segment, and adapt automatically as people engage or go quiet.',
          icon: 'GitBranch'
        },
        {
          title: 'AI email marketing',
          description: 'Drafting, personalization, and send-time optimization, so emails are relevant and timely rather than generic blasts.',
          icon: 'Mail'
        },
        {
          title: 'Social media automation',
          description: 'Scheduling, repurposing, and content workflows that keep channels active without constant manual effort.',
          icon: 'Megaphone'
        }
      ]
    },

    // ========== TEXT: Keeping AI Content On-Brand and Accurate ==========
    {
      type: 'text',
      heading: 'Keeping AI Content On-Brand and Accurate',
      content: [
        'The fair concern with AI-generated marketing content is that it will sound generic, drift off-brand, or state something untrue. We design against all three. The approach is human-in-the-loop: AI drafts and personalizes at scale, but your team reviews and approves before anything goes out, so the speed of automation is combined with the judgment of a person. The AI does the heavy lifting of production; the human ensures it is right.',
        'To keep content genuinely on-brand rather than generic, we ground the AI in your brand voice, your messaging, and your actual product information, so it writes from your material rather than from bland defaults. Over time, with feedback, the output gets closer to how your best writers sound. The result is not a firehose of forgettable AI copy it is a faster path to content that reads like your brand, with a human gate on quality.',
        'On accuracy, the same grounding matters: content about your products and offers is drawn from your real information, and the human review step catches anything that needs correcting. This is the responsible way to use AI in marketing as an accelerator with oversight, not an unsupervised content machine.'
      ]
    },

    // ========== GRID: Tools and Integrations (now 6 items) ==========
    {
      type: 'grid',
      heading: 'Tools and Integrations',
      subheading: 'We build marketing automation into the platforms you already use.',
      items: [
        {
          title: 'Marketing and CRM platforms',
          description: 'HubSpot, GoHighLevel, ActiveCampaign, Klaviyo, Mailchimp.',
          icon: 'Briefcase'
        },
        {
          title: 'AI models',
          description: 'OpenAI, Claude, and others for content and personalization.',
          icon: 'Brain'
        },
        {
          title: 'Automation platforms',
          description: 'n8n, Make, or Zapier to orchestrate the workflows.',
          icon: 'Zap'
        },
        {
          title: 'Ad and social platforms',
          description: 'For campaign execution and content distribution.',
          icon: 'Megaphone'
        },
        {
          title: 'Your data',
          description: 'CRM and behavioral data to drive segmentation and personalization.',
          icon: 'Database'
        },
        // ✅ NEW 6th card – makes 2 rows of 3
        {
          title: 'Content Management Systems',
          description: 'Seamless integration with WordPress, Webflow, Shopify, and other CMS platforms so AI‑generated content flows directly into your website and landing pages.',
          icon: 'Globe'
        }
      ]
    },

    // ========== TEXT: What to Expect Honestly ==========
    {
      type: 'text',
      heading: 'What to Expect Honestly',
      content: [
        'The clearest return is production capacity: your team ships far more content and runs more campaigns without growing, because the AI handles the volume of drafting and the mechanics of execution. The second is consistency nurturing and follow-up that never slips, personalization that always happens. The third is time reclaimed for strategy, since your marketers spend less time on production grunt work and more on the thinking that drives results.',
        'The honest caveat is that AI does not replace marketing judgment. Strategy, positioning, brand, and creative direction remain human work, and the quality of your marketing still depends on the people steering it. AI marketing automation is leverage it multiplies what a good team can produce and how consistently they can execute not a substitute for having a good team. Anyone selling fully autonomous AI marketing that needs no human hand is overselling; the best results come from skilled marketers using automation as a force multiplier.'
      ]
    },

    // ========== FEATURES: Why Clickmasters (now 6 items) ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'Human-in-the-loop quality',
          description: 'AI produces at scale; your team approves, so content stays on-brand and accurate.',
          icon: 'Users'
        },
        {
          title: 'Grounded in your brand',
          description: 'AI writes from your voice and material, not generic defaults.',
          icon: 'FileText'
        },
        {
          title: 'Built into your stack',
          description: 'We work inside HubSpot, GoHighLevel, Klaviyo, and the tools you already use.',
          icon: 'Briefcase'
        },
        {
          title: 'Honest about scope',
          description: 'Automation as leverage for your team, not a replacement for marketing judgment.',
          icon: 'Target'
        },
        // ✅ NEW 5th card
        {
          title: 'Omnichannel orchestration',
          description: 'We unify email, social, paid ads, and website personalization into a single orchestrated engine so your message is consistent and timely across every touchpoint.',
          icon: 'Link2'
        }
      ]
    },

    // ========== TEXT: A Worked Example ==========
    {
      type: 'text',
      heading: 'A Worked Example: A Lead Nurture System That Runs Itself',
      content: [
        'Consider lead nurturing, where the gap between intent and execution is widest. Most businesses know they should follow up with leads consistently over weeks, with relevant content tailored to where each person is in their journey. In practice, this rarely happens well by hand someone has to write each message, decide who gets what and when, remember to send it, and adjust based on responses. Under deadline pressure, nurturing is the first thing to slip, and leads go cold.',
        'Automated, the same system runs flawlessly. When a lead enters, they are segmented by their behavior and interests. A sequence begins emails and touches spaced appropriately, with content matched to their stage and personalized to what they have engaged with. As they open, click, or go quiet, the sequence adapts, advancing the engaged and re-engaging the dormant. When a lead becomes sales-ready, they are flagged and handed to sales with context. The marketer designs the strategy once; the system executes it perfectly, for every lead, indefinitely, without anyone remembering to press send.',
        'This is the essence of marketing automation done well: the human sets the strategy and the creative direction, and the automation handles the relentless, consistent execution that humans are bad at sustaining. The leads that used to leak away from inconsistent follow-up are instead nurtured to conversion.'
      ]
    },

    // ========== TEXT: Common Concerns ==========
    {
      type: 'text',
      heading: 'Common Concerns, Answered Honestly',
      content: [
        '"AI content will sound generic." It will if you plug in a raw model and let it run. Grounded in your brand voice and material, reviewed by your team before it ships, and refined with feedback over time, the output reads like your brand. The human gate on quality is the point.',
        '"We will lose our brand voice." The opposite, when done right: by codifying your voice into how the AI is prompted and grounded, you often get more consistency across content than a rotating cast of writers produces. The voice is enforced systematically, not left to each person\'s interpretation.',
        '"Automated marketing feels impersonal." Well-built automation is more personal, not less, because it can tailor content to each person\'s behavior at a scale no manual team could match. The impersonal version is the generic blast you send when you do not have time to personalize by hand.'
      ]
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is AI marketing automation?',
          description: 'AI marketing automation uses AI and workflows to run marketing tasks automatically generating content, personalizing and sending nurture sequences, managing campaigns, and reporting so teams produce more and execute more consistently without proportionally more staff.'
        },
        {
          title: 'Will AI-generated marketing content hurt our brand?',
          description: 'Not when it is human-in-the-loop and grounded in your brand. AI drafts and personalizes at scale; your team reviews and approves; and the AI writes from your voice and material rather than generic defaults so output stays on-brand and accurate.'
        },
        {
          title: 'How is this different from the automation built into HubSpot?',
          description: 'Built-in tools cover standard workflows. We add an AI layer content generation, smarter personalization, and decisioning and connect marketing automation across your wider stack, going beyond what any single platform\'s native features do.'
        },
        {
          title: 'Does it replace our marketing team?',
          description: 'No. It multiplies what your team can produce and how consistently they execute, freeing them for strategy and creative work. Marketing judgment positioning, brand, direction stays human; automation is the leverage.'
        },
        {
          title: 'Which platforms do you work with?',
          description: 'HubSpot, GoHighLevel, ActiveCampaign, Klaviyo, Mailchimp, and others, orchestrated with automation platforms like n8n, Make, or Zapier and AI models for content and personalization.'
        },
        {
          title: 'How quickly will we see results?',
          description: 'Because we start with a high-impact automation a nurture sequence or a content workflow, for example most teams see reclaimed time and more consistent execution within the first few weeks, then expand from there.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'See how much more your marketing team could ship.',
      subheading: 'Book a free automation audit 30 minutes, no obligation.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};