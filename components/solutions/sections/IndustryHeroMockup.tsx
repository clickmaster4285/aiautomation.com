// components/solutions/sections/IndustryHeroMockup.tsx
'use client';

import { Inbox, Sparkles, Mail, CalendarClock, Database } from 'lucide-react';
import type { ComponentType } from 'react';

interface AutomationHeroMockupProps {
  /** Shown as the eyebrow in the canvas title bar, e.g. "Healthcare" */
  industry?: string;
  /** The incoming trigger, e.g. "New Patient Intake", "New Lead", "Claim Filed" */
  triggerLabel?: string;
  /** Icon for the trigger node */
  TriggerIcon?: ComponentType<{ className?: string; strokeWidth?: number }>;
  /** The three downstream actions the AI agent fans out to */
  actionLabels?: [string, string, string];
  /** Big number on the floating live-results card */
  metricValue?: string;
  /** Caption under the big number */
  metricLabel?: string;
  /** Secondary line on the floating card, e.g. "98% resolved without a human" */
  submetric?: string;
  /** Integration/platform badge on the floating card, e.g. "Salesforce" */
  platform?: string;
  /** Single accent hexeverything else derives from this */
  accent?: string;
}

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace('#', '');
  const bigint = parseInt(
    h.length === 3
      ? h.split('').map((c) => c + c).join('')
      : h,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * A reusable "AI automation pipeline" hero graphic for /solutions/[industry] pages.
 * Renders as real markup (not a static image) so copy and accent can change per
 * industry while the compositionand the live animated pipelinestays identical.
 *
 * Usage:
 *   <AutomationHeroMockup
 *     industry="Healthcare"
 *     triggerLabel="New Patient Intake"
 *     actionLabels={['Update EHR', 'Send Confirmation', 'Book Appointment']}
 *     metricValue="1,204"
 *     metricLabel="intakes handled automatically this week"
 *     submetric="98% resolved without staff involvement"
 *     platform="Salesforce"
 *   />
 *
 * Drop in place of the `image` prop on <HeroSection />.
 */
export function AutomationHeroMockup({
  industry = 'Operations',
  triggerLabel = 'New Request',
  TriggerIcon = Inbox,
  actionLabels = ['Update CRM', 'Send Follow-up', 'Schedule Task'],
  metricValue = '1,204',
  metricLabel = 'requests handled automatically',
  submetric = '98% resolved without a human',
  platform = 'your stack',
  accent = '#4F46E5',
}: AutomationHeroMockupProps) {
  const teal = '#0D9488';
  const ink = '#0B1220';

  const actionIcons = [Database, Mail, CalendarClock];

  // Node centers on a 400x300 canvasHTML node positions below are derived
  // from the same fractions so the SVG connector layer stays in sync.
  const nodes = {
    trigger: { x: 60, y: 150 },
    ai: { x: 200, y: 150 },
    a1: { x: 330, y: 70 },
    a2: { x: 330, y: 150 },
    a3: { x: 330, y: 230 },
  };
  const pct = (v: number, total: number) => `${(v / total) * 100}%`;

  return (
    <div className="relative w-full aspect-[4/3] select-none">
      {/* ambient bg */}
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{ backgroundColor: hexToRgba(accent, 0.08) }}
      />

      {/* ===== back panel: automation canvas ===== */}
      <div
        className="absolute right-0 top-[4%] w-[86%] h-[92%] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(15,23,42,0.35)]"
        style={{ backgroundColor: ink, border: `1px solid ${hexToRgba(accent, 0.35)}` }}
      >
        {/* faint dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${hexToRgba('#FFFFFF', 0.6)} 1px, transparent 1px)`,
            backgroundSize: '18px 18px',
          }}
        />

        {/* title bar */}
        <div
          className="relative flex items-center justify-between px-4 py-2.5 border-b"
          style={{ borderColor: hexToRgba('#FFFFFF', 0.08) }}
        >
          <span
            className="text-[9px] font-mono uppercase tracking-[0.15em]"
            style={{ color: hexToRgba('#FFFFFF', 0.5) }}
          >
            {industry} · Workflow
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: teal }}
            />
            <span
              className="text-[9px] font-mono uppercase tracking-[0.15em]"
              style={{ color: teal }}
            >
              Example
            </span>
          </span>
        </div>

        {/* tab bar */}
        <div
          className="relative flex items-center gap-4 px-4 py-2.5 border-b text-[10px] font-mono uppercase tracking-wide"
          style={{ borderColor: hexToRgba('#FFFFFF', 0.08) }}
        >
          <span style={{ color: hexToRgba('#FFFFFF', 0.35) }}>Trigger</span>
          <span className="font-semibold" style={{ color: '#FFFFFF' }}>
            AI Agent
          </span>
          <span style={{ color: hexToRgba('#FFFFFF', 0.35) }}>Actions</span>
          <span style={{ color: hexToRgba('#FFFFFF', 0.35) }}>History</span>
        </div>

        {/* pipeline canvas */}
        <div className="relative w-full h-[calc(100%-84px)]">
          {/* connectors + animated pulses */}
          <svg
            viewBox="0 0 400 300"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <path id="p-trigger-ai" d={`M${nodes.trigger.x + 26},${nodes.trigger.y} L${nodes.ai.x - 30},${nodes.ai.y}`} />
              <path id="p-ai-a1" d={`M${nodes.ai.x + 30},${nodes.ai.y} C270,${nodes.ai.y} 270,${nodes.a1.y} ${nodes.a1.x - 24},${nodes.a1.y}`} />
              <path id="p-ai-a2" d={`M${nodes.ai.x + 30},${nodes.ai.y} L${nodes.a2.x - 24},${nodes.a2.y}`} />
              <path id="p-ai-a3" d={`M${nodes.ai.x + 30},${nodes.ai.y} C270,${nodes.ai.y} 270,${nodes.a3.y} ${nodes.a3.x - 24},${nodes.a3.y}`} />
            </defs>

            {(['p-trigger-ai', 'p-ai-a1', 'p-ai-a2', 'p-ai-a3'] as const).map((id) => (
              <use
                key={id}
                href={`#${id}`}
                fill="none"
                stroke={hexToRgba(accent, 0.35)}
                strokeWidth={1.5}
              />
            ))}

            {/* traveling pulses */}
            <circle r="3" fill={accent}>
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
                <mpath href="#p-trigger-ai" />
              </animateMotion>
            </circle>
            <circle r="3" fill={teal}>
              <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.9s">
                <mpath href="#p-ai-a1" />
              </animateMotion>
            </circle>
            <circle r="3" fill={teal}>
              <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.1s">
                <mpath href="#p-ai-a2" />
              </animateMotion>
            </circle>
            <circle r="3" fill={teal}>
              <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.3s">
                <mpath href="#p-ai-a3" />
              </animateMotion>
            </circle>
          </svg>

          {/* trigger node */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
            style={{ left: pct(nodes.trigger.x, 400), top: pct(nodes.trigger.y, 300) }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: hexToRgba('#FFFFFF', 0.06), border: `1px solid ${hexToRgba('#FFFFFF', 0.14)}` }}
            >
              <div style={{ color: hexToRgba('#FFFFFF', 0.8) }}>
                <TriggerIcon className="w-4 h-4" strokeWidth={1.75} />
              </div>
            </div>
            <span
              className="text-[8px] font-mono uppercase tracking-wide text-center leading-tight max-w-[70px]"
              style={{ color: hexToRgba('#FFFFFF', 0.45) }}
            >
              {triggerLabel}
            </span>
          </div>

          {/* AI agent node (signature) */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
            style={{ left: pct(nodes.ai.x, 400), top: pct(nodes.ai.y, 300) }}
          >
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full blur-md animate-pulse"
                style={{ backgroundColor: hexToRgba(accent, 0.45) }}
              />
              <div
                className="relative w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${accent}, ${hexToRgba(accent, 0.7)})`,
                  boxShadow: `0 8px 24px -6px ${hexToRgba(accent, 0.6)}`,
                }}
              >
                <div style={{ color: '#FFFFFF' }}>
                  <Sparkles className="w-5 h-5" strokeWidth={1.75} />
                </div>
              </div>
            </div>
            <span
              className="text-[8px] font-mono uppercase tracking-wide"
              style={{ color: '#FFFFFF' }}
            >
              AI Agent
            </span>
          </div>

          {/* action nodes */}
          {[nodes.a1, nodes.a2, nodes.a3].map((n, i) => {
            const Icon = actionIcons[i];
            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2"
                style={{ left: pct(n.x, 400), top: pct(n.y, 300) }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: hexToRgba('#FFFFFF', 0.06), border: `1px solid ${hexToRgba('#FFFFFF', 0.14)}` }}
                >
                  <div style={{ color: teal }}>
                    <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </div>
                </div>
                <span
                  className="text-[8px] font-mono uppercase tracking-wide leading-tight max-w-[64px]"
                  style={{ color: hexToRgba('#FFFFFF', 0.55) }}
                >
                  {actionLabels[i]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== front card: live results ===== */}
      <div
        className="absolute left-0 bottom-[6%] w-[56%] rounded-2xl bg-white overflow-hidden shadow-[0_25px_50px_-12px_rgba(15,23,42,0.25)]"
        style={{ border: `1px solid ${hexToRgba(accent, 0.18)}` }}
      >
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: teal }}
            />
            <span
              className="text-[9px] font-mono uppercase tracking-wide"
              style={{ color: teal }}
            >
              Example figures
            </span>
          </div>

          <div>
            <p className="text-2xl font-bold tracking-tight" style={{ color: ink }}>
              {metricValue}
            </p>
            <p className="text-[11px] leading-snug" style={{ color: hexToRgba(ink, 0.55) }}>
              {metricLabel}
            </p>
          </div>

          <div className="flex items-end gap-1 h-6">
            {[0.4, 0.6, 0.5, 0.8, 0.65, 0.95, 0.7].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h * 100}%`, backgroundColor: hexToRgba(accent, 0.15 + h * 0.5) }}
              />
            ))}
          </div>

          <p className="text-[10px] font-medium" style={{ color: teal }}>
            {submetric}
          </p>
        </div>

        <div
          className="border-t py-2 text-center"
          style={{ borderColor: hexToRgba(accent, 0.12), backgroundColor: hexToRgba(accent, 0.05) }}
        >
          <span
            className="text-[9px] font-mono uppercase tracking-wide"
            style={{ color: hexToRgba(ink, 0.45) }}
          >
            Runs on <span style={{ color: ink, fontWeight: 700 }}>{platform}</span>
          </span>
        </div>
      </div>
    </div>
  );
}