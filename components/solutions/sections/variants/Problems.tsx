// components/solutions/sections/variants/ProblemsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { toLines, splitTitled } from './parseCopy';
import { RichText } from './RichText';

import {
  XCircle,
  AlertCircle,
  Clock,
  Users,
  FileText,
  Building2,
  ShoppingBag,
  GraduationCap,
  Radar,
} from 'lucide-react';
import type { ComponentType } from 'react';

interface ProblemsSectionProps {
  title: string;
  content: string[];
}

const iconMap = {
  'Document collection chase': FileText,
  'Manual data entry': AlertCircle,
  'Deadline and status tracking': Clock,
  'Repetitive client questions': Users,
  'Onboarding friction': XCircle,
  'Lead and bid response lag': Building2,
  'Document and photo chaos': FileText,
  'Invoice and payment tracking': XCircle,
  'Client update burden': Users,
  'Scheduling coordination': Clock,
  'Support volume tied to sales': Users,
  'Abandoned cart revenue loss': XCircle,
  'Order exception handling': AlertCircle,
  'Review management neglect': FileText,
  'Marketing production grind': Clock,
  'Inquiry follow-up gaps': Users,
  'Enrollment paperwork': FileText,
  'Repetitive questions': AlertCircle,
  'Scheduling complexity': Clock,
  'Reporting burden': XCircle,
};

function getIconForTitle(title: string) {
  const key = Object.keys(iconMap).find((k) =>
    title.toLowerCase().includes(k.toLowerCase())
  ) as keyof typeof iconMap | undefined;
  return key ? iconMap[key] : AlertCircle;
}

/**
 * "Problem radar" — a pulsing central hub with the page's actual problem
 * titles orbiting it as signal chips. Built entirely from the parsed
 * `problems` list, so it re-composes itself for every industry page with
 * no extra content to author.
 */
function ProblemRadarGraphic({
  problems,
}: {
  problems: { title: string; Icon: ComponentType<{ className?: string }> }[];
}) {
  const chips = problems.slice(0, 5);
  const positions = [
    { x: 50, y: 8 },
    { x: 88, y: 38 },
    { x: 68, y: 82 },
    { x: 20, y: 82 },
    { x: 10, y: 38 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="relative mt-10 h-56 md:h-64 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
    >
      {/* status pill */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full border border-red-400/30 bg-red-500/10 px-2.5 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
        <span className="text-[9px] font-mono uppercase tracking-wide text-red-300">
          {chips.length} recurring bottlenecks
        </span>
      </div>

      {/* faint radar rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-40 h-40 rounded-full border border-white/[0.06]" />
        <div className="absolute w-28 h-28 rounded-full border border-white/[0.06]" />
      </div>

      {/* connector lines, in the same 0-100 coordinate space as the chips */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {positions.slice(0, chips.length).map((p, i) => (
          <motion.line
            key={i}
            x1={50}
            y1={50}
            x2={p.x}
            y2={p.y}
            className="stroke-brand"
            strokeWidth={0.4}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
          />
        ))}
      </svg>

      {/* central hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute inset-0 rounded-full border border-brand/40"
          animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-brand/40"
          animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 1.1 }}
        />
        <div className="relative w-12 h-12 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center">
          <Radar className="w-5 h-5 text-brand" strokeWidth={1.75} />
        </div>
      </div>

      {/* scattered problem chips, pulled straight from page content */}
      {chips.map((c, i) => {
        const p = positions[i];
        const Icon = c.Icon;
        const rotate = i % 2 === 0 ? -4 : 4;
        return (
          <motion.div
            key={c.title}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
          >
            <motion.div
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 backdrop-blur-sm"
              style={{ rotate }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            >
              <Icon className="w-3 h-3 text-brand shrink-0" />
              <span className="text-[9px] font-medium uppercase tracking-wide text-gray-200 whitespace-nowrap max-w-[92px] truncate">
                {c.title}
              </span>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function ProblemsSection({ title, content }: ProblemsSectionProps) {
  const normalizedContent = toLines(content).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );
  const problemItems = normalizedContent.filter((line) => line.includes('**'));
  const introText = normalizedContent.find((line) => !line.includes('**') && line.trim());

  const parsedProblems = problemItems.map((item) => {
    const { title: itemTitle, description } = splitTitled(item);
    return { title: itemTitle, description, Icon: getIconForTitle(itemTitle) };
  });

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gray-900 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-400/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              The Challenges
            </div>

            <h2 className="display text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
              {title}
            </h2>

            {introText && (
              <p className="text-lg text-gray-300 leading-relaxed">
                <RichText text={introText} />
              </p>
            )}

            {/* Animated, content-driven graphic — below the heading, left side */}
            {parsedProblems.length > 0 && <ProblemRadarGraphic problems={parsedProblems} />}
          </motion.div>

          {/* Right Content - Problem Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {parsedProblems.map((problem, idx) => {
              const Icon = problem.Icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand/20 flex items-center justify-center group-hover:bg-brand/30 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-brand" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-white mb-2">{problem.title}</h4>
                      <p className="text-base md:text-lg text-gray-300 leading-relaxed"><RichText text={problem.description} /></p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;