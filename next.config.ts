// next.config.ts
import type { NextConfig } from 'next';

// Present on every response. Screaming Frog flags a URL when any of these
// are absent. The policy allows the site's own assets, Google Tag Manager,
// YouTube/Vimeo embeds, and the CRM lead endpoint without opening
// framing or plugin injection.
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
      "style-src 'self' 'unsafe-inline' https:",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https:",
      "connect-src 'self' https: wss:",
      "media-src 'self' blob: https:",
      "worker-src 'self' blob:",
      "frame-src 'self' https:",
      "form-action 'self' https:",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  // Preferred URLs have no trailing slash. /path/ 308s to /path.
  // Canonical tags must use the non-slash form (see lib/canonical.ts).
  trailingSlash: false,
  images: {
    qualities: [60, 75],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1920, 2048],
  },
  // Allow other devices on the LAN to access the dev server
  allowedDevOrigins: ['192.168.88.53'],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Legacy paths from the crawl that 404 or duplicate a live page.
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/industries/ecommerce', destination: '/industries/ai-automation-for-ecommerce', permanent: true },
      { source: '/industries/finance-accounting', destination: '/industries/ai-automation-for-finance-accounting', permanent: true },
      { source: '/industries/healthcare', destination: '/industries/ai-automation-for-healthcare', permanent: true },
      { source: '/industries/law-firms', destination: '/industries/ai-automation-for-law-firms', permanent: true },
      { source: '/industries/professional-services', destination: '/industries/ai-automation-for-professional-services', permanent: true },
      { source: '/industries/real-estate', destination: '/industries/ai-automation-for-real-estate', permanent: true },
      { source: '/industries/saas', destination: '/industries/ai-automation-for-saas', permanent: true },
      {
        source: '/solutions/bussiness-process-automation',
        destination: '/solutions/business-process-automation',
        permanent: true,
      },
      {
        source: '/solutions/bussiness-process-automation/:path*',
        destination: '/solutions/business-process-automation/:path*',
        permanent: true,
      },
      {
        source: '/solutions/crm-automation/with-zapier',
        destination: '/solutions/crm-automation',
        permanent: true,
      },

      // Mistyped live routes. The page content already names the preferred URL.
      {
        source: '/solutions/document-automation/for-restaurants.ts',
        destination: '/solutions/document-automation/for-restaurants',
        permanent: true,
      },
      {
        source: '/solutions/customer-support-automation/for-accounting-firm',
        destination: '/solutions/customer-support-automation/for-accounting-firms',
        permanent: true,
      },
      // Same case study is registered under three slugs. One URL stays indexable.
      {
        source: '/case-studies/clickmasters-ai-lead-response-case-study',
        destination: '/case-studies/ai-receptionist-lead-response-automation',
        permanent: true,
      },
      {
        source: '/case-studies/ai-lead-response-revenue-recovery',
        destination: '/case-studies/ai-receptionist-lead-response-automation',
        permanent: true,
      },

      // ── Old main category hub pages → most relevant subpage (hubs removed) ──
      {
        source: '/core-automation',
        destination: '/services/ai-workflow-automation',
        permanent: true,
      },
      {
        source: '/ai-agents-and-assistants',
        destination: '/services/ai-agent-development',
        permanent: true,
      },
      {
        source: '/automation-by-function',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/ai-strategy-development',
        destination: '/services/ai-strategy-advisory',
        permanent: true,
      },
      {
        source: '/ai-strategy-and-development',
        destination: '/services/ai-strategy-advisory',
        permanent: true,
      },

      // ── Chatbot page renamed: /ai-chatbot-automation → /services/ai-chatbots ──
      {
        source: '/ai-chatbot-automation',
        destination: '/services/ai-chatbots',
        permanent: true,
      },
      {
        source: '/ai-agents-and-assistants/ai-chatbot-automation',
        destination: '/services/ai-chatbots',
        permanent: true,
      },
      {
        source: '/services/ai-agents-and-assistants/ai-chatbot-automation',
        destination: '/services/ai-chatbots',
        permanent: true,
      },

      // ── Old two-segment category URLs → /services/<slug> ──
      {
        source: '/core-automation/:service',
        destination: '/services/:service',
        permanent: true,
      },
      {
        source: '/ai-agents-and-assistants/:service',
        destination: '/services/:service',
        permanent: true,
      },
      {
        source: '/ai-strategy-development/:service',
        destination: '/services/:service',
        permanent: true,
      },
      {
        source: '/ai-strategy-and-development/:service',
        destination: '/services/:service',
        permanent: true,
      },

      // ── Old root-level service URLs (moved under /services/) ──
      {
        source: '/ai-workflow-automation',
        destination: '/services/ai-workflow-automation',
        permanent: true,
      },
      {
        source: '/business-process-automation',
        destination: '/services/business-process-automation',
        permanent: true,
      },
      {
        source: '/robotic-process-automation',
        destination: '/services/robotic-process-automation',
        permanent: true,
      },
      {
        source: '/ai-reporting-automation',
        destination: '/services/ai-reporting-automation',
        permanent: true,
      },
      {
        source: '/ai-agent-development',
        destination: '/services/ai-agent-development',
        permanent: true,
      },
      {
        source: '/ai-chatbots',
        destination: '/services/ai-chatbots',
        permanent: true,
      },
      {
        source: '/ai-voice-agents',
        destination: '/services/ai-voice-agents',
        permanent: true,
      },
      {
        source: '/ai-lead-generation',
        destination: '/services/ai-lead-generation',
        permanent: true,
      },
      {
        source: '/ai-knowledge-assistants',
        destination: '/services/ai-knowledge-assistants',
        permanent: true,
      },
      {
        source: '/ai-strategy-advisory',
        destination: '/services/ai-strategy-advisory',
        permanent: true,
      },
      {
        source: '/custom-ai-development',
        destination: '/services/custom-ai-development',
        permanent: true,
      },

      // ── Removed "Automation by Function" subpages → matching /solutions pages ──
      {
        source: '/automation-by-function/ai-sales-automation',
        destination: '/solutions/sales-automation',
        permanent: true,
      },
      {
        source: '/automation-by-function/ai-marketing-automation',
        destination: '/solutions/marketing-automation',
        permanent: true,
      },
      {
        source: '/automation-by-function/ai-customer-support-automation',
        destination: '/solutions/customer-support-automation',
        permanent: true,
      },
      {
        source: '/automation-by-function/ai-data-document-automation',
        destination: '/solutions/document-automation',
        permanent: true,
      },
      {
        source: '/automation-by-function/ai-integration-services',
        destination: '/solutions',
        permanent: true,
      },

      // ── Bare URLs of removed services (were reachable via the old catch-all) ──
      {
        source: '/ai-sales-automation',
        destination: '/solutions/sales-automation',
        permanent: true,
      },
      {
        source: '/ai-marketing-automation',
        destination: '/solutions/marketing-automation',
        permanent: true,
      },
      {
        source: '/ai-customer-support-automation',
        destination: '/solutions/customer-support-automation',
        permanent: true,
      },
      {
        source: '/ai-data-document-automation',
        destination: '/solutions/document-automation',
        permanent: true,
      },
      {
        source: '/ai-integration-services',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/ai-workflow-automation-service',
        destination: '/services/ai-workflow-automation',
        permanent: true,
      },

      // ── Old flat /services/* URLs ──
      // (/services/ai-lead-generation, /services/ai-reporting-automation and
      // /services/custom-ai-development are now the live URLs, so no redirect needed)
      {
        source: '/services/ai-consulting',
        destination: '/services/ai-strategy-advisory',
        permanent: true,
      },
      {
        source: '/services/ai-consulting/',
        destination: '/services/ai-strategy-advisory',
        permanent: true,
      },

      // ── Old /services/<category> hub URLs ──
      {
        source: '/services/core-automation',
        destination: '/services/ai-workflow-automation',
        permanent: true,
      },
      {
        source: '/services/ai-agents-and-assistants',
        destination: '/services/ai-agent-development',
        permanent: true,
      },
      {
        source: '/services/automation-by-function',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/services/ai-strategy-development',
        destination: '/services/ai-strategy-advisory',
        permanent: true,
      },
      {
        source: '/services/ai-strategy-and-development',
        destination: '/services/ai-strategy-advisory',
        permanent: true,
      },

      // ── Catch-all: any remaining /services/<category>/<service> → /services/<service> ──
      {
        source: '/services/:category/:service',
        destination: '/services/:service',
        permanent: true,
      },
      {
        source: '/services/:category/:service/',
        destination: '/services/:service',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;