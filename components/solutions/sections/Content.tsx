// components/solutions/sections/ContentSection.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  ShieldCheck,
  Clock,
  Users,
  BarChart3,
  TrendingUp,
  Bot,
  Workflow,
  Quote,
  Star,
  Circle,
  Grid,
} from 'lucide-react';

interface ContentSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  content: string[];
  image?: string;
  imageAlt?: string;
  imageRight?: boolean;
  stats?: Array<{ label: string; value: string }>;
  cta?: { text: string; href: string };
  background?: 'paper' | 'muted' | 'light' | 'white' | 'gray-50' | 'brand-light' | 'gradient' | 'dark';
  className?: string;
  showImage?: boolean;
  visualVariant?: 'default' | 'minimal' | 'featured' | 'accent';
}

/* ── Count-up stat ── */
function AnimatedStat({ value, label }: { value: string; label: string; delay?: number }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-brand tracking-tight tabular-nums">
        {value}
      </div>
      <div className="mt-1.5 text-sm font-medium text-gray-500">{label}</div>
    </div>
  );
}

/* ── Right-side animated visual ── */
function AutomationCoreVisual() {
  const nodes = [
    { Icon: Zap, x: 50, y: 8, label: 'Instant', style: { top: '4%', left: '50%' } },
    { Icon: BarChart3, x: 92, y: 50, label: 'Insights', style: { top: '50%', left: '92%' } },
    { Icon: ShieldCheck, x: 50, y: 92, label: 'Secure', style: { top: '96%', left: '50%' } },
    { Icon: Workflow, x: 8, y: 50, label: 'Connected', style: { top: '50%', left: '8%' } },
  ];

  return (
    <div className="relative w-full max-w-[360px] aspect-square">
      <div className="absolute inset-[6%] rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute inset-[22%] rounded-full bg-orange-300/10 blur-2xl" />

      <motion.div
        className="absolute inset-[8%] rounded-full border border-dashed border-brand/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[22%] rounded-full border border-gray-200"
        animate={{ rotate: -360 }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
        {nodes.map((n, i) => (
          <motion.line
            key={i}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-brand/30"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.15 }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="1.2"
            className="fill-brand"
            initial={{ cx: 50, cy: 50, opacity: 0 }}
            animate={{ cx: [50, n.x], cy: [50, n.y], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 + 0.6 }}
          />
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand border-r-brand/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
          />
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand/15 to-brand/5">
            <Bot className="h-7 w-7 text-brand" strokeWidth={1.75} />
          </div>
        </div>
      </motion.div>

      {nodes.map(({ Icon, label, style }, i) => (
        <motion.div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1"
          style={style}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 + 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-lg"
          >
            <Icon className="h-4 w-4 text-brand" strokeWidth={1.75} />
          </motion.div>
          <span className="text-[9px] font-medium tracking-wide text-gray-400 whitespace-nowrap">
            {label}
          </span>
        </motion.div>
      ))}

      <motion.div
        className="absolute top-[16%] left-[74%] z-10 text-brand"
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.15, 0.85] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles className="h-3.5 w-3.5" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute -bottom-2 -right-3 z-20 w-48 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-gray-700">Automation</span>
          <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-500">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            Live
          </span>
        </div>
        <div className="mt-3 flex items-end gap-1.5 h-10">
          {[0.5, 0.8, 0.4, 1, 0.7].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-brand/70"
              initial={{ height: 0 }}
              whileInView={{ height: `${h * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-gray-900">
          <TrendingUp className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
          <span>+38% efficiency</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        animate={{ y: [0, -4, 0] }}
        className="absolute top-[6%] -left-2 z-20 flex items-center gap-1.5 rounded-full border border-gray-100 bg-white px-3 py-1.5 shadow-lg"
      >
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="h-3 w-3 text-emerald-500" />
        </div>
        <span className="text-[10px] font-medium text-gray-600 whitespace-nowrap">Task completed</span>
      </motion.div>
    </div>
  );
}

/* ── Minimal Visual ── */
function MinimalVisual() {
  return (
    <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
      <div className="relative w-40 h-40">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-brand/20"
          animate={{ scale: [1, 1.1, 1], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[15%] rounded-full border-2 border-brand/10"
          animate={{ scale: [1, 1.15, 1], rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[30%] rounded-full bg-gradient-to-br from-brand/20 to-orange-400/20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center shadow-lg shadow-brand/30">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
        </motion.div>
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-orange-400"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-brand/50"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>
    </div>
  );
}

/* ── Featured Visual ── */
function FeaturedVisual() {
  return (
    <div className="relative w-full max-w-[340px] aspect-square">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-orange-400/5 rounded-3xl" />
      <div className="absolute inset-[10%] border border-brand/10 rounded-2xl" />
      <div className="absolute inset-[20%] border border-brand/5 rounded-xl" />
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-brand to-orange-400 flex items-center justify-center shadow-2xl shadow-brand/30">
            <Bot className="h-10 w-10 text-white" />
          </div>
          <div className="mt-4 space-y-1">
            <div className="h-2 w-24 mx-auto bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand to-orange-400 rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
            <div className="h-2 w-20 mx-auto bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand to-orange-400 rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute top-[15%] right-[15%] w-8 h-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Zap className="h-4 w-4 text-brand" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-[15%] left-[15%] w-8 h-8 rounded-full bg-orange-400/10 border border-orange-400/20 flex items-center justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <Shield className="h-4 w-4 text-orange-400" />
      </motion.div>
    </div>
  );
}

/* ── Accent Visual ── */
function AccentVisual() {
  const bars = [35, 65, 45, 80, 55, 70, 40, 90];
  
  return (
    <div className="relative w-full max-w-[300px] aspect-square flex items-center justify-center">
      <div className="relative w-full max-w-[250px]">
        <div className="flex items-end justify-between gap-1.5 h-32">
          {bars.map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-lg bg-gradient-to-t from-brand to-orange-400"
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[10px] font-medium text-gray-400">Mon</span>
          <span className="text-[10px] font-medium text-gray-400">Tue</span>
          <span className="text-[10px] font-medium text-gray-400">Wed</span>
          <span className="text-[10px] font-medium text-gray-400">Thu</span>
          <span className="text-[10px] font-medium text-gray-400">Fri</span>
          <span className="text-[10px] font-medium text-gray-400">Sat</span>
          <span className="text-[10px] font-medium text-gray-400">Sun</span>
        </div>
        <motion.div
          className="mt-4 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-brand" />
            <span className="text-xs text-gray-500">This week</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-gray-200" />
            <span className="text-xs text-gray-400">Previous</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ContentSection({
  id,
  title,
  subtitle,
  eyebrow,
  content,
  stats,
  cta,
  background = 'muted',
  className = '',
  visualVariant = 'default',
}: ContentSectionProps) {
  const bgMap = {
    paper: 'bg-white',
    muted: 'bg-gray-50',
    light: 'bg-gray-50/80',
    white: 'bg-white',
    'gray-50': 'bg-gray-50',
    'brand-light': 'bg-gradient-to-br from-orange-50/90 via-white/80 to-gray-50/95',
    gradient: 'bg-gradient-to-br from-gray-50 via-white to-gray-50/80',
    dark: 'bg-gray-900 text-white',
  };

  const paragraphs = (Array.isArray(content) ? content : [content]).filter(
    (paragraph): paragraph is string => typeof paragraph === 'string' && paragraph.trim().length > 0
  );

  const iconMap = {
    Zap: Zap,
    Shield: Shield,
    Clock: Clock,
    Users: Users,
    CheckCircle: CheckCircle2,
    BarChart3: BarChart3,
    TrendingUp: TrendingUp,
  };

  // Select visual component based on variant
  const getVisualComponent = () => {
    switch (visualVariant) {
      case 'minimal':
        return <MinimalVisual />;
      case 'featured':
        return <FeaturedVisual />;
      case 'accent':
        return <AccentVisual />;
      default:
        return <AutomationCoreVisual />;
    }
  };

  // Get background class with variant-specific styles
  const getBackgroundStyles = () => {
    const base = bgMap[background] || bgMap.muted;
    
    // Add variant-specific enhancements
    if (visualVariant === 'featured') {
      return `${base} relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-brand/5 before:via-transparent before:to-orange-400/5 before:pointer-events-none`;
    }
    if (visualVariant === 'accent') {
      return `${base} relative before:absolute before:inset-0 before:bg-grid-pattern before:opacity-5 before:pointer-events-none`;
    }
    if (background === 'brand-light') {
      return `${base} relative before:absolute before:inset-0 before:bg-gradient-to-tr before:from-brand/5 before:via-transparent before:to-orange-400/5 before:pointer-events-none`;
    }
    return base;
  };

  // Get border accent
  const getBorderAccent = () => {
    if (visualVariant === 'featured') {
      return 'border-l-4 border-l-brand/30';
    }
    if (visualVariant === 'accent') {
      return 'border-b-2 border-b-brand/20';
    }
    return '';
  };

  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden py-20 md:py-28 ${getBackgroundStyles()} ${getBorderAccent()} ${className}`}
    >
      {/* ── Advanced Animated Background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient orbs with parallax - vary based on variant */}
        <motion.div
          className={`absolute -top-40 -right-20 w-[600px] h-[600px] rounded-full blur-3xl ${
            visualVariant === 'featured' ? 'bg-brand/8' : 'bg-brand/5'
          }`}
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className={`absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full blur-3xl ${
            visualVariant === 'accent' ? 'bg-orange-400/8' : 'bg-orange-400/5'
          }`}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Variant-specific decorative elements */}
        {visualVariant === 'featured' && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-brand/5"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border border-orange-400/5"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
          </>
        )}

        {visualVariant === 'accent' && (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(249,115,22,0.03),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(249,115,22,0.02),transparent_50%)]" />
          </>
        )}

        {visualVariant === 'minimal' && (
          <>
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
          </>
        )}

        {/* Animated grid pattern - subtle */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Floating lines */}
        <motion.div
          className="absolute top-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-brand/20 to-transparent"
          animate={{
            x: [100, 0, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-0 w-1/4 h-px bg-gradient-to-r from-brand/20 to-transparent"
          animate={{
            x: [-100, 0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-brand/30"
            style={{
              left: `${10 + Math.random() * 30}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* ── Left: copy ── */}
          <div className="max-w-5xl lg:max-w-none lg:min-w-0">
            {/* ── Header ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              {eyebrow && (
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand mb-4"
                >
                  <span className="w-8 h-px bg-brand" />
                  {eyebrow}
                </motion.span>
              )}

              <h2 className="display text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 leading-[1.1] tracking-tight">
                {title}
              </h2>

              {subtitle && (
                <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </motion.div>

            {/* ── Content ── */}
            <div className="space-y-10">
              {/* Paragraphs */}
              <div className="space-y-5">
                {paragraphs.map((paragraph, index) => {
                  const hasFeatures = paragraph.includes('**') && paragraph.includes('');

                  if (hasFeatures) {
                    const featureItems = paragraph.split('\n').filter((line) => line.trim());
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {featureItems.map((item, idx) => {
                          const cleanItem = item.replace(/\*\*/g, '').trim();
                          const parts = cleanItem.split('');
                          const featureTitle = parts[0]?.trim() || '';
                          const desc = parts[1]?.trim() || '';
                          const iconKey = Object.keys(iconMap).find((key) => featureTitle.includes(key));
                          const Icon = iconKey ? iconMap[iconKey as keyof typeof iconMap] : CheckCircle2;

                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: idx * 0.05 + 0.3 }}
                              whileHover={{ y: -4, transition: { duration: 0.2 } }}
                              className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand/20 hover:shadow-lg transition-all duration-300"
                            >
                              {/* Hover gradient */}
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              
                              <div className="relative flex items-start gap-4">
                                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300">
                                  <Icon className="h-5 w-5 text-brand" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{featureTitle}</h4>
                                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    );
                  }

                  return (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                      className="text-base md:text-lg text-gray-600 leading-relaxed"
                    >
                      {paragraph}
                    </motion.p>
                  );
                })}
              </div>

              {/* ── Stats ── */}
              {stats && stats.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-b border-gray-100"
                >
                  {stats.map((stat, index) => (
                    <AnimatedStat key={index} value={stat.value} label={stat.label} delay={index * 0.12} />
                  ))}
                </motion.div>
              )}

              {/* ── CTA ── */}
              {cta && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap items-center justify-between gap-6 pt-6"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-brand/30 to-brand/10 border-2 border-white flex items-center justify-center text-xs font-semibold text-brand"
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      Trusted by <span className="text-gray-600 font-medium">50+</span> companies
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href={cta.href}
                      className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-brand to-orange-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        initial={{ x: '-200%' }}
                        animate={{ x: '200%' }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />
                      <span className="relative z-10">{cta.text}</span>
                      <motion.span
                        className="relative z-10"
                        animate={{ x: [0, 6, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>

          {/* ── Right: animated visual ── */}
          <div className="hidden lg:flex lg:min-w-0 lg:items-center lg:justify-center">
            {getVisualComponent()}
          </div>
        </div>
      </div>
    </section>
  );
}