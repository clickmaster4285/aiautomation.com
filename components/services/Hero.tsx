'use client';

import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Settings, BarChart3, Zap, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Section } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';

interface HeroProps {
  section: Section;
}

/* ============================================================================
   SERVICE GRAPHICS
   One animated SVG dashboard per service page matched to the real URLs in
   content/solution-index.ts. Each is built around the actual mechanics of
   that service (roadmap, pipeline, reporting, system architecture), staged
   inside a shared "product window" chrome so the four read as one family.
   ============================================================================ */

const BRAND = '#F97316';
const BRAND_DIM = 'rgba(249,115,22,0.35)';

// ---- Shared window chrome: gradient border, header bar, ambient grid ----
function GraphicFrame({
  eyebrow,
  title,
  gradientId,
  children,
}: {
  eyebrow: string;
  title: string;
  gradientId: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full h-full max-w-[540px]"
      style={{ filter: 'drop-shadow(0 40px 70px rgba(0,0,0,0.55))' }}
    >
      <defs>
        <linearGradient id={`${gradientId}-border`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(249,115,22,0.55)" />
          <stop offset="50%" stopColor="rgba(249,115,22,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
        </linearGradient>
        <radialGradient id={`${gradientId}-glow`} cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.16)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0)" />
        </radialGradient>
        <linearGradient id={`${gradientId}-panel`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.045)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.015)" />
        </linearGradient>
        <filter id={`${gradientId}-soft`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      {/* ambient ellipse glow above the frame */}
      <rect x="20" y="10" width="560" height="300" fill={`url(#${gradientId}-glow)`} />

      {/* faint dot grid inside the frame */}
      <g opacity="0.5">
        {Array.from({ length: 12 }).map((_, col) =>
          Array.from({ length: 11 }).map((_, row) => (
            <circle
              key={`${col}-${row}`}
              cx={64 + col * 42}
              cy={110 + row * 40}
              r="1"
              fill="rgba(255,255,255,0.08)"
            />
          ))
        )}
      </g>

      {/* frame body */}
      <motion.rect
        x="40" y="64" width="520" height="470" rx="18"
        fill={`url(#${gradientId}-panel)`}
        stroke={`url(#${gradientId}-border)`}
        strokeWidth="1.2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* header bar */}
      <rect x="40" y="64" width="520" height="46" rx="18" fill="rgba(255,255,255,0.025)" />
      <line x1="40" y1="110" x2="560" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <circle cx="66" cy="87" r="4" fill={BRAND} opacity="0.7" />
      <circle cx="82" cy="87" r="4" fill="rgba(255,255,255,0.25)" />
      <circle cx="98" cy="87" r="4" fill="rgba(255,255,255,0.15)" />

      <motion.text
        x="300" y="82" textAnchor="middle"
        fontSize="9.5" fontWeight="700" letterSpacing="1.5"
        fill={BRAND}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
      >
        {eyebrow}
      </motion.text>
      <motion.text
        x="300" y="97" textAnchor="middle"
        fontSize="11.5" fontWeight="500"
        fill="rgba(255,255,255,0.5)"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
      >
        {title}
      </motion.text>

      {children}
    </svg>
  );
}

// ---- AI Consulting: an engagement roadmap climbing left to right ----
function ConsultingGraphic() {
  const stages = [
    { x: 110, y: 430, label: 'Audit', pct: '100%' },
    { x: 240, y: 340, label: 'Roadmap', pct: '100%' },
    { x: 370, y: 260, label: 'Build', pct: '64%' },
    { x: 490, y: 180, label: 'Iterate', pct: '12%' },
  ];
  const curve = `M${stages[0].x},${stages[0].y} C${stages[0].x + 60},${stages[0].y - 30} ${stages[1].x - 60},${stages[1].y + 30} ${stages[1].x},${stages[1].y} C${stages[1].x + 60},${stages[1].y - 30} ${stages[2].x - 60},${stages[2].y + 30} ${stages[2].x},${stages[2].y} C${stages[2].x + 60},${stages[2].y - 30} ${stages[3].x - 60},${stages[3].y + 30} ${stages[3].x},${stages[3].y}`;

  return (
    <GraphicFrame eyebrow="AI CONSULTING" title="Engagement Roadmap" gradientId="consulting">
      <motion.path
        d={curve} fill="none" stroke="rgba(249,115,22,0.45)" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, delay: 0.6, ease: 'easeInOut' }}
      />
      <motion.circle
        r="4.5" fill="#fff"
        initial={{ offsetDistance: '0%', opacity: 0 }}
        animate={{ offsetDistance: '100%', opacity: 1 }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', delay: 2.4 }}
        style={{ offsetPath: `path('${curve}')` }}
      />

      {stages.map((s, i) => (
        <g key={s.label}>
          <motion.rect
            x={s.x - 46} y={s.y - 34} width="92" height="66" rx="10"
            fill="rgba(10,10,10,0.55)" stroke={i < 2 ? BRAND : 'rgba(255,255,255,0.15)'} strokeWidth="1"
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 + i * 0.28, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.circle
            cx={s.x - 46 + 16} cy={s.y - 34 + 16} r="9"
            fill={i < 2 ? 'rgba(249,115,22,0.18)' : 'rgba(255,255,255,0.06)'}
            stroke={i < 2 ? BRAND : 'rgba(255,255,255,0.25)'} strokeWidth="1"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * 0.28 }}
          />
          <text x={s.x - 46 + 16} y={s.y - 34 + 20} textAnchor="middle" fontSize="9" fontWeight="700" fill={i < 2 ? BRAND : 'rgba(255,255,255,0.5)'}>
            {i + 1}
          </text>
          <motion.text
            x={s.x} y={s.y - 4} textAnchor="middle" fontSize="12" fontWeight="600" fill="#ffffff"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 + i * 0.28 }}
          >
            {s.label}
          </motion.text>
          {/* progress bar */}
          <rect x={s.x - 32} y={s.y + 10} width="64" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
          <motion.rect
            x={s.x - 32} y={s.y + 10} height="4" rx="2" fill={BRAND}
            initial={{ width: 0 }} animate={{ width: 64 * parseFloat(s.pct) / 100 }}
            transition={{ duration: 0.8, delay: 1.3 + i * 0.28, ease: 'easeOut' }}
          />
        </g>
      ))}

      <motion.g
        initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.1, duration: 0.5 }}
      >
        <rect x="440" y="440" width="98" height="52" rx="10" fill="rgba(249,115,22,0.08)" stroke={BRAND_DIM} strokeWidth="1" />
        <text x="489" y="461" textAnchor="middle" fontSize="9" fontWeight="700" letterSpacing="1" fill="rgba(255,255,255,0.5)">FIRST RETURN</text>
        <text x="489" y="479" textAnchor="middle" fontSize="15" fontWeight="700" fill={BRAND}>~6 weeks</text>
      </motion.g>
    </GraphicFrame>
  );
}

// ---- AI Lead Generation: a live pipeline with a converting lead card ----
function LeadGenGraphic() {
  const columns = [
    { x: 105, label: 'New', count: '48' },
    { x: 300, label: 'Qualified', count: '19' },
    { x: 495, label: 'Booked', count: '7' },
  ];

  return (
    <GraphicFrame eyebrow="AI LEAD GENERATION" title="Live Pipeline" gradientId="leadgen">
      {columns.map((c, i) => (
        <g key={c.label}>
          <motion.rect
            x={c.x - 62} y="140" width="124" height="86" rx="12"
            fill="rgba(10,10,10,0.5)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"
            initial={{ opacity: 0, y: 130 }} animate={{ opacity: 1, y: 140 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
          />
          <motion.text
            x={c.x} y="185" textAnchor="middle" fontSize="26" fontWeight="700" fill={i === 2 ? BRAND : '#ffffff'}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 + i * 0.2 }}
          >
            {c.count}
          </motion.text>
          <text x={c.x} y="208" textAnchor="middle" fontSize="10.5" fontWeight="600" letterSpacing="0.5" fill="rgba(255,255,255,0.45)">
            {c.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* connecting curves between the columns with flowing particles */}
      {[0, 1].map(i => {
        const x1 = columns[i].x + 62;
        const x2 = columns[i + 1].x - 62;
        const path = `M${x1},183 C${x1 + 40},183 ${x2 - 40},183 ${x2},183`;
        return (
          <g key={i}>
            <path d={path} fill="none" stroke="rgba(249,115,22,0.25)" strokeWidth="1.5" strokeDasharray="3 5" />
            {[0, 1, 2].map(p => (
              <motion.circle
                key={p} r="3" fill={BRAND}
                initial={{ offsetDistance: '0%', opacity: 0 }}
                animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: 1.2 + i * 0.4 + p * 0.5, ease: 'easeIn' }}
                style={{ offsetPath: `path('${path}')` }}
              />
            ))}
          </g>
        );
      })}

      {/* converting lead card sliding up */}
      <motion.g
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <rect x="150" y="330" width="300" height="120" rx="14" fill="rgba(255,255,255,0.035)" stroke={BRAND_DIM} strokeWidth="1" />
        <circle cx="184" cy="368" r="18" fill="rgba(249,115,22,0.15)" stroke={BRAND} strokeWidth="1" />
        <text x="184" y="373" textAnchor="middle" fontSize="13" fontWeight="700" fill={BRAND}>JM</text>
        <text x="214" y="364" fontSize="13" fontWeight="600" fill="#ffffff">Jordan Miles</text>
        <text x="214" y="380" fontSize="10.5" fill="rgba(255,255,255,0.45)">Operations Director</text>
        <rect x="366" y="352" width="60" height="22" rx="11" fill="rgba(249,115,22,0.15)" stroke={BRAND} strokeWidth="1" />
        <text x="396" y="367" textAnchor="middle" fontSize="10" fontWeight="700" fill={BRAND}>92 fit</text>

        <line x1="184" y1="402" x2="426" y2="402" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        <motion.g
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
        >
          <circle cx="192" cy="424" r="4" fill="#22c55e" />
          <text x="204" y="428" fontSize="10.5" fill="rgba(255,255,255,0.6)">Responded in 8s · routed to sales</text>
        </motion.g>
      </motion.g>
    </GraphicFrame>
  );
}

// ---- AI Reporting Automation: an assembled, self-updating dashboard ----
function ReportingGraphic() {
  const bars = [70, 110, 88, 150, 118, 168, 132];
  const baseY = 470;
  const barW = 26;
  const barGap = 14;
  const startX = 100;

  const linePoints = bars.map((h, i) => `${startX + i * (barW + barGap) + barW / 2},${baseY - h - 16}`);
  const linePath = `M${linePoints.join(' L')}`;

  return (
    <GraphicFrame eyebrow="AI REPORTING AUTOMATION" title="Performance Overview" gradientId="reporting">
      {/* two summary stat cards */}
      {[
        { x: 90, label: 'PIPELINE VALUE', value: '$482K', delta: '+18.4%' },
        { x: 330, label: 'REPORT LATENCY', value: 'Live', delta: '0 delay' },
      ].map((s, i) => (
        <motion.g key={s.label} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.15 }}>
          <rect x={s.x} y="130" width="180" height="56" rx="10" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <text x={s.x + 14} y="150" fontSize="8.5" fontWeight="700" letterSpacing="1" fill="rgba(255,255,255,0.4)">{s.label}</text>
          <text x={s.x + 14} y="172" fontSize="18" fontWeight="700" fill="#ffffff">{s.value}</text>
          <text x={s.x + 166} y="172" textAnchor="end" fontSize="10.5" fontWeight="700" fill={BRAND}>{s.delta}</text>
        </motion.g>
      ))}

      {/* chart panel */}
      <rect x="90" y="210" width="420" height="270" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {[0, 1, 2, 3].map(i => (
        <line key={i} x1="90" x2="510" y1={230 + i * 60} y2={230 + i * 60} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}

      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={startX + i * (barW + barGap)} width={barW} rx="3"
          fill="rgba(249,115,22,0.16)" stroke={BRAND} strokeWidth="1"
          initial={{ y: baseY, height: 0 }} animate={{ y: baseY - h, height: h }}
          transition={{ duration: 0.85, delay: 0.7 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}

      <motion.path
        d={linePath} fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"
        initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.85 }}
        transition={{ duration: 1.3, delay: 1.6, ease: 'easeInOut' }}
      />
      {linePoints.map((p, i) => {
        const [px, py] = p.split(',').map(Number);
        return (
          <motion.circle
            key={i} cx={px} cy={py} r="3" fill="#fff"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 + i * 0.08 }}
          />
        );
      })}

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
        <motion.circle
          cx="112" cy="452" r="4" fill="#22c55e"
          animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text x="124" y="456" fontSize="10.5" fill="rgba(255,255,255,0.55)">Synced from CRM, billing &amp; support · just now</text>
      </motion.g>
    </GraphicFrame>
  );
}

// ---- Custom AI Development: system architecture around a central core ----
function CustomDevGraphic() {
  const satellites = [
    { x: 160, y: 190, label: 'Data' },
    { x: 440, y: 190, label: 'Tools' },
    { x: 160, y: 400, label: 'API' },
    { x: 440, y: 400, label: 'Model' },
  ];
  const core = { x: 300, y: 295 };

  return (
    <GraphicFrame eyebrow="CUSTOM AI DEVELOPMENT" title="System Architecture" gradientId="customdev">
      {/* rotating dashed orbit */}
      <motion.circle
        cx={core.x} cy={core.y} r="150" fill="none" stroke="rgba(249,115,22,0.18)" strokeWidth="1" strokeDasharray="2 6"
        initial={{ strokeDashoffset: 0 }} animate={{ strokeDashoffset: -400 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />

      {satellites.map((s, i) => {
        const path = `M${core.x},${core.y} Q${(core.x + s.x) / 2},${s.y + (core.y - s.y) * 0.15} ${s.x},${s.y}`;
        return (
          <g key={s.label}>
            <motion.path
              d={path} fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="1.2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.15 }}
            />
            <motion.circle
              r="3.5" fill={BRAND}
              initial={{ offsetDistance: '0%', opacity: 0 }}
              animate={{ offsetDistance: '100%', opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 1.2 + i * 0.45, ease: 'easeInOut' }}
              style={{ offsetPath: `path('${path}')` }}
            />
          </g>
        );
      })}

      {satellites.map((s, i) => (
        <motion.g
          key={`node-${s.label}`}
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect x={s.x - 38} y={s.y - 24} width="76" height="48" rx="10" fill="rgba(10,10,10,0.55)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <circle cx={s.x - 38 + 16} cy={s.y} r="3" fill={BRAND} />
          <text x={s.x + 6} y={s.y + 4} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="rgba(255,255,255,0.85)">
            {s.label}
          </text>
        </motion.g>
      ))}

      <motion.rect
        x={core.x - 62} y={core.y - 40} width="124" height="80" rx="14"
        fill="rgba(249,115,22,0.1)" stroke={BRAND} strokeWidth="1.5"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.rect
        x={core.x - 62} y={core.y - 40} width="124" height="80" rx="14"
        fill="none" stroke={BRAND} strokeWidth="1"
        initial={{ opacity: 0.5, scale: 1 }} animate={{ opacity: 0, scale: 1.3 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
      />
      <text x={core.x} y={core.y - 8} textAnchor="middle" fontSize="9" fontWeight="700" letterSpacing="1" fill="rgba(255,255,255,0.5)">YOUR</text>
      <text x={core.x} y={core.y + 12} textAnchor="middle" fontSize="16" fontWeight="700" fill="#ffffff">System</text>
      <text x={core.x} y={core.y + 30} textAnchor="middle" fontSize="9" fill={BRAND}>on Claude / GPT / Gemini</text>
    </GraphicFrame>
  );
}

// Matches real URLs from content/solution-index.ts
const SERVICE_GRAPHICS: { path: string; Component: React.FC }[] = [
  { path: '/services/ai-consulting', Component: ConsultingGraphic },
  { path: '/services/ai-lead-generation', Component: LeadGenGraphic },
  { path: '/services/ai-reporting-automation', Component: ReportingGraphic },
  { path: '/services/custom-ai-development', Component: CustomDevGraphic },
];

export default function Hero({ section }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const activeGraphic = SERVICE_GRAPHICS.find(g => pathname?.startsWith(g.path))?.Component;

  // Helper to get image src and alt safely (original page image behavior)
  const getImageProps = (img: string | { src: string; alt?: string; width?: number; height?: number; fadeEdges?: boolean }) => {
    if (typeof img === 'string') {
      return { src: img, alt: '' };
    }
    return { src: img.src, alt: img.alt || '', width: img.width, height: img.height };
  };

  // Floating icon chips that orbit around the original hero image (non-service pages only)
  const floatingChips = [
    { Icon: Sparkles, style: { top: '12%', left: '6%' }, floatY: [0, -16, 0], duration: 5, delay: 0 },
    { Icon: Settings, style: { top: '68%', left: '2%' }, floatY: [0, 14, 0], duration: 6.5, delay: 0.6 },
    { Icon: BarChart3, style: { top: '20%', right: '4%' }, floatY: [0, 12, 0], duration: 5.5, delay: 1.1 },
    { Icon: Zap, style: { bottom: '10%', right: '14%' }, floatY: [0, -14, 0], duration: 7, delay: 0.3 },
  ];

  const heading = section.heading || 'AI Automation Agency';
  const subheading = section.subheading || '';
  const stats = section.stats || [];
  const ctas = section.ctas || [];

  const words = heading.split(' ');
  const primaryCta = ctas.find(c => c.primary) || ctas[0];
  const secondaryCtas = ctas.filter(c => !c.primary);

  // Long-form stat values are checklist bullet points, not numbers – render them
  // as a stacked check list instead of inline "value + label" pairs next to the CTAs.
  const isChecklistStats = stats.some(s => typeof s.value === 'string' && s.value.length > 24);

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const highlightWords = ['Automation'];

  return (
    <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center bg-black">

      {/* ====== BACKGROUND EFFECTS (unchanged) ====== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(249,115,22,0.08),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_80%,rgba(249,115,22,0.05),rgba(0,0,0,0))]" />

        <motion.div
          className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-brand/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const seed = i;
            const left = (seed * 73) % 100;
            const top = (seed * 97) % 100;
            const moveX = (seed * 13) % 100 - 50;
            const moveY = (seed * 29) % 100 - 50;
            const duration = 12 + (seed % 8) * 2;
            const size = 2 + (seed % 4);
            const opacity = 0.1 + (seed % 5) * 0.05;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-brand"
                style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity }}
                animate={{ x: [0, moveX, 0], y: [0, moveY, 0] }}
                transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          })}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ====== RIGHT SIDE: PER-SERVICE ANIMATED DASHBOARD GRAPHIC (4 service pages only) ====== */}
      {activeGraphic && (
        <div
          className="absolute top-0 right-0 w-[60%] min-h-screen h-full z-0 hidden lg:flex items-center justify-center"
          style={{
            maskImage: `linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)`,
            maskComposite: 'intersect',
            WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)`,
            WebkitMaskComposite: 'source-in',
          }}
        >
          <div className="absolute inset-0 bg-brand/10 blur-3xl" />
          <motion.div
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.15 },
              y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {(() => {
              const Graphic = activeGraphic;
              return <Graphic />;
            })()}
          </motion.div>
        </div>
      )}

      {/* ====== RIGHT SIDE: ORIGINAL IMAGE (every other page, unchanged) ====== */}
      {!activeGraphic && section.image && (
        <>
          <div
            className="absolute top-0 right-0 w-[60%] min-h-screen h-full z-0 flex items-center justify-center"
            style={{
              maskImage: `
                radial-gradient(ellipse at center, black 55%, transparent 85%),
                linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%),
                linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)
              `,
              maskComposite: 'intersect',
              WebkitMaskImage: `
                radial-gradient(ellipse at center, black 55%, transparent 85%),
                linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%),
                linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)
              `,
              WebkitMaskComposite: 'source-in',
            }}
          >
            <div className="absolute inset-0 bg-brand/20 blur-3xl" />

            <motion.div
              className="w-full h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <img
                {...getImageProps(section.image)}
                className="w-full h-full object-contain object-center drop-shadow-[0_0_80px_rgba(249,115,22,0.5)]"
              />
            </motion.div>
          </div>

          <div className="absolute top-0 right-0 w-[60%] min-h-screen h-full z-[1] pointer-events-none hidden md:block">
            {floatingChips.map(({ Icon, style, floatY, duration, delay }, idx) => (
              <motion.div
                key={idx}
                className="absolute flex items-center justify-center w-12 h-12 rounded-2xl border border-brand/30 bg-black/40 backdrop-blur-md shadow-lg shadow-brand/10"
                style={style}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: floatY,
                  rotate: [0, idx % 2 === 0 ? 4 : -4, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.6 + delay },
                  scale: { duration: 0.6, delay: 0.6 + delay },
                  y: { duration, repeat: Infinity, ease: "easeInOut", delay },
                  rotate: { duration: duration * 1.2, repeat: Infinity, ease: "easeInOut", delay },
                }}
              >
                <Icon className="h-5 w-5 text-brand" />
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* ====== MAIN CONTENT ====== */}
      <div className="mx-auto max-w-[92vw] sm:max-w-[84vw] px-4 sm:px-6 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* ====== LEFT CONTENT ====== */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand backdrop-blur-sm mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>AI Automation Agency</span>
              <span className="h-1 w-1 rounded-full bg-brand" />
              <span className="text-brand/70 animate-pulse">AVAILABLE FOR NEW PROJECTS</span>
            </motion.div>

            {/* Heading – uses display class */}
            <motion.h1 className="display mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              {words.map((word, index) => {
                const isHighlighted = highlightWords.some(hw =>
                  word.toLowerCase().includes(hw.toLowerCase())
                );
                return (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block mr-2 ${
                      isHighlighted ? 'text-brand display-italic' : ''
                    }`}
                  >
                    {word}{' '}
                  </motion.span>
                );
              })}
            </motion.h1>

            {/* Subheading */}
            {subheading && (
              <motion.p
                variants={fadeInUp}
                className="mb-6 text-base sm:text-lg text-gray-300 md:text-xl max-w-xl leading-relaxed font-light text-justify"
              >
                {subheading}
              </motion.p>
            )}

            {/* Checklist stats – stacked list for hero sections with long-form bullet values */}
            {isChecklistStats && (
              <motion.ul variants={fadeInUp} className="mt-1 space-y-3 max-w-xl">
                {stats.map((stat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-base sm:text-lg text-gray-200 leading-relaxed">{stat.value}</span>
                  </li>
                ))}
              </motion.ul>
            )}

            {/* Stats + CTAs – with square corners and hover effects */}
            <motion.div
              variants={fadeInUp}
              className={`flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6 flex-wrap ${isChecklistStats ? 'mt-6' : 'mt-2'}`}
            >
              {!isChecklistStats && stats.map((stat, idx) => (
                <div key={idx} className="flex items-baseline gap-1.5">
                  <span className="text-2xl md:text-3xl font-bold text-brand">{stat.value}</span>
                  <span className="text-xs text-gray-400 tracking-widest uppercase">{stat.label}</span>
                </div>
              ))}

              {/* Primary CTA – square corners, brand background */}
              {primaryCta && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                  <div className="absolute inset-0 bg-brand/30 blur-xl rounded-none group-hover:blur-2xl transition-all" />
                  <Button
                    size="lg"
                    className="relative bg-brand hover:bg-brand-dark text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-none transition-all font-medium shadow-lg shadow-brand/25 w-full sm:w-auto"
                  >
                    {primaryCta.text}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              )}

              {/* Secondary CTAs – white bg, black text, square corners, hover animation */}
              {secondaryCtas.map((cta, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-medium rounded-none transition-all duration-300 w-full sm:w-auto"
                    style={{
                      background: '#ffffff',
                      color: '#000000',
                      border: '1px solid #ffffff',
                      height: '52px',
                      paddingInline: '2rem',
                      fontSize: '0.9375rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#000000';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.borderColor = '#ffffff';
                    }}
                  >
                    {cta.text}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust badge */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center gap-4 text-sm text-gray-500"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-xs font-medium text-gray-300">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-400">Trusted by 500+ companies</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}