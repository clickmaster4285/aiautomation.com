// components/solutions/sections/variants/WhyUs.tsx
'use client';

import { motion } from 'framer-motion';
import { Shield, Database, Users, Sparkles, CheckCircle2, ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface WhyUsSectionProps {
  title: string;
  content: string[];
  cta?: { text: string; href: string };
  stats?: Array<{ icon: LucideIcon; label: string; value: string; desc?: string }>;
}

export function WhyUsSection({ title, content, cta, stats }: WhyUsSectionProps) {
  const normalizedContent = (content || []).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );
  const items = normalizedContent.filter((line) => line.includes('**'));
  const introText = normalizedContent.find((line) => !line.includes('**') && line.trim());

  const iconMap: Record<string, LucideIcon> = {
    'Built for your industry': Shield,
    'Human-in-the-loop': Users,
    'Integrated': Database,
    'You own everything': Sparkles,
    'Built for your industry\'s workflows': Shield,
    'Human-in-the-loop where it matters': Users,
    'Integrated, not rip-and-replace': Database,
  };

  const displayItems = items.length > 0 ? items : content;
  const displayStats = stats || [];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-brand/5" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-orange-400/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <div className={`grid gap-16 items-start ${displayStats.length > 0 ? "lg:grid-cols-2" : ""}`}>
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
                <span className="w-8 h-px bg-brand" />
                Why Choose Us
              </div>

              {/* Exact same heading style as ExampleSection */}
              <h2 className="display text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-[1.05]">
                {title}
              </h2>

              {/* Updated intro text to match ExampleSection paragraph style */}
              {introText && (
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                  {introText}
                </p>
              )}
            </motion.div>

            {/* Cards - Left side - Updated text sizes */}
            <div className="space-y-4">
              {displayItems.map((item, idx) => {
                const cleanItem = item.replace(/\*\*/g, '').trim();
                const parts = cleanItem.split('.');
                const title = parts[0]?.trim() || '';
                const description = parts.slice(1).join('.').trim() || '';

                const IconKey = Object.keys(iconMap).find(key =>
                  title.toLowerCase().includes(key.toLowerCase())
                ) as keyof typeof iconMap;
                const Icon = IconKey ? iconMap[IconKey] : CheckCircle2;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand/10 to-orange-400/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">{title}</h4>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed">{description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {cta && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 group shadow-lg shadow-brand/25"
                >
                  {cta.text}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}
          </div>

          {displayStats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {displayStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand/20 to-orange-400/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-brand mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      {stat.label}
                    </div>
                    {stat.desc && (
                      <div className="text-sm text-gray-500">
                        {stat.desc}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}

          </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

// Also export as default to ensure compatibility
export default WhyUsSection;