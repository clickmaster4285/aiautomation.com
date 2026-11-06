'use client';

import { motion } from 'framer-motion';
import { Bot, Workflow, Database, Shield, BarChart3, Sparkles, Target, Users, Clock } from 'lucide-react';
import { splitBoldItem } from './parseCopy';

interface AutomationSectionProps {
  title: string;
  content: string[];
}

export function AutomationSection({ title, content }: AutomationSectionProps) {
  const normalizedContent = (content || []).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );
  const automationItems = normalizedContent.filter((line) => line.includes('**'));
  const introText = normalizedContent.find((line) => !line.includes('**') && line.trim());

  const iconMap = {
    'Custom goal-driven agents': Bot,
    'Multi-step task execution': Workflow,
    'Grounding in your data': Database,
    'Guardrails and human-in-the-loop': Shield,
    'Monitoring and logging': BarChart3,
    'Lead intake and estimate follow-up': Target,
    'Bid request handling': Workflow,
    'Project document collection': Database,
    'Invoice tracking': Shield,
    'Client status updates': Users,
    'Customer support': Users,
    'Abandoned cart recovery': Target,
    'Order processing': Workflow,
    'Returns handling': Shield,
    'Review requests': Sparkles,
    'Inquiry response': Target,
    'Application collection': Database,
    'FAQ handling': Users,
    'Scheduling with reminders': Clock,
    'Progress reporting': BarChart3,
  };

  const parsed = automationItems.map((item) => splitBoldItem(item));
  const primary = parsed.slice(0, 4);
  const extra = parsed.slice(4);

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gray-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-400/5 to-transparent" />
        
        {/* Decorative grid pattern */}
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

        {/* Floating orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-orange-400/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <div className={`grid gap-16 items-start ${extra.length > 0 ? "lg:grid-cols-2" : ""}`}>
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
                What We Build
              </div>
              
              <h2 className="display text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-[1.05]">
                {title}
              </h2>
              
              {introText && (
                <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
                  {introText}
                </p>
              )}
            </motion.div>

            {/* Automation Items - Left side */}
            <div className="space-y-4">
              {primary.map((item, idx) => {
                const title = item.title;
                const description = item.description;

                const IconKey = Object.keys(iconMap).find(key => 
                  title.toLowerCase().includes(key.toLowerCase())
                ) as keyof typeof iconMap;
                const Icon = IconKey ? iconMap[IconKey] : Sparkles;

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
                      <h4 className="text-base md:text-lg text-gray-900">{title}</h4>
                      <p className="text-sm md:text-base text-gray-500 leading-relaxed">{description}</p>
                    </div>
                  </motion.div>
                );
              })}
              
            </div>
          </div>

          {extra.length > 0 && (
          <div className="flex flex-col gap-4">
            <div className="space-y-4">
              {extra.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-100">
                  <h4 className="text-base md:text-lg text-gray-900">{item.title}</h4>
                  {item.description && (
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AutomationSection;