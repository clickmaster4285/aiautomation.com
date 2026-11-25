// Unique titles and descriptions for client solution hubs.
// Those pages cannot export metadata, so the matching layout reads this object.
// Child server pages export their own metadata and override it.

export type HubSeo = {
  title: string;
  description: string;
  name: string;
  path: string;
  crumbs: { name: string; path: string }[];
};

function solutionHub(
  name: string,
  path: string,
  title: string,
  description: string,
): HubSeo {
  return {
    title,
    description,
    name,
    path,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name, path },
    ],
  };
}

export const hubSeo = {
  crm: solutionHub(
    "CRM Automation",
    "/solutions/crm-automation",
    "CRM Automation Solutions for Sales Teams | Clickmasters",
    "CRM automation that keeps contacts, deals, and follow-ups accurate without asking reps to re-key the same record. Book a free audit.",
  ),
  support: solutionHub(
    "Customer Support Automation",
    "/solutions/customer-support-automation",
    "Customer Support Automation for Service Teams | Clickmasters",
    "Customer support automation that resolves routine tickets and escalates the cases that still need a person on the team. Book a free audit.",
  ),
  document: solutionHub(
    "Document Automation",
    "/solutions/document-automation",
    "Document Automation for Operations Teams | Clickmasters",
    "Document automation that extracts, checks, and routes data from invoices, forms, and files into the systems you use. Book a free audit.",
  ),
  invoice: solutionHub(
    "Invoice Automation",
    "/solutions/invoice-automation",
    "Invoice Automation for Finance Teams | Clickmasters AI",
    "Invoice automation that captures, checks, and posts bills so finance closes with fewer re-keys and fewer missed exceptions. Book a free audit.",
  ),
  booking: solutionHub(
    "Appointment Booking Automation",
    "/solutions/appointment-booking-automation",
    "Appointment Booking Automation for Busy Teams | Clickmasters",
    "Appointment booking automation that schedules, confirms, and reminds so the calendar stays full without a manual chase. Book a free audit.",
  ),
  marketing: solutionHub(
    "Marketing Automation",
    "/solutions/marketing-automation",
    "Marketing Automation for Growth Teams | Clickmasters",
    "Marketing automation for nurture, campaigns, and follow-up that keeps moving when nobody is watching the queue. Book a free audit.",
  ),
  sales: solutionHub(
    "Sales Automation",
    "/solutions/sales-automation",
    "Sales Automation Solutions for Revenue Teams | Clickmasters",
    "Sales automation that enriches leads, follows up, and logs activity so representatives spend their time selling. Book a free audit.",
  ),
  platforms: {
    title: "AI Automation Platforms We Implement | Clickmasters",
    description:
      "Zapier, Make, n8n, HubSpot, Airtable and GoHighLevel automation, built and maintained by Clickmasters on the platform that fits your team. Book an audit.",
    name: "AI Automation Platforms",
    path: "/platforms",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Platforms", path: "/platforms" },
    ],
  } satisfies HubSeo,
  industries: {
    title: "AI Automation for Every Industry | Clickmasters",
    description:
      "AI automation for healthcare, finance, law, e-commerce, SaaS, real estate and professional services, built around your industry's tools and workflows.",
    name: "AI Automation for Every Industry",
    path: "/industries",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
    ],
  } satisfies HubSeo,
  solutions: solutionHub(
    "AI Automation Solutions",
    "/solutions",
    "AI Automation Solutions for Operating Teams | Clickmasters",
    "Explore Clickmasters AI automation solutions for the workflows, tools, and handoffs your team repeats every day. Book a free audit.",
  ),
  services: {
    title: "AI Automation Services for Workflows | Clickmasters AI",
    description:
      "Clickmasters services span workflow automation, process automation, agents, chatbots, voice, reporting, and custom AI. Book a free audit.",
    name: "AI Automation Services",
    path: "/services",
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ],
  } satisfies HubSeo,
};
