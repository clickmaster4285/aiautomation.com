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