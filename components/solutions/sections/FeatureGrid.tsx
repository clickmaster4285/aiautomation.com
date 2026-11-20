// components/solutions/sections/FeatureGrid.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Users, Calendar, GitBranch, Shield, BrainCircuit, Database, Cloud, Zap,
  MessageSquare, Workflow, RefreshCw, Bot, PhoneCall, TrendingUp, Headphones,
  FileText, GitMerge, Layers, Settings, Target, BarChart3, Lightbulb,
  Briefcase, Link2, Award, Layout, CheckCircle, ArrowRight, Phone, PhoneOutgoing,
} from 'lucide-react';
import { Section } from '@/components/solutions/layout/Section';

// Legacy icon map for string-based icons (backward compatibility)
const iconMap: Record<string, any> = {
  Brain, Users, Calendar, GitBranch, Shield, BrainCircuit, Database, Cloud, Zap,
  MessageSquare, Workflow, RefreshCw, Bot, PhoneCall, TrendingUp, Headphones,
  FileText, GitMerge, Layers, Settings, Target, BarChart3, Lightbulb,
  Briefcase, Link2, Award, Layout, CheckCircle, ArrowRight, Phone, PhoneOutgoing,
};

// Support both string and component icon types
type IconType = string | React.ElementType;

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3;
  background?: 'paper' | 'muted' | 'dark' | 'black' | 'orange-light' | 'white' | 'gray' | 'light';
  bg?: 'paper' | 'muted' | 'dark' | 'black' | 'orange-light' | 'white' | 'gray' | 'light';
}

export function FeatureGrid({
  title,
  subtitle,
  eyebrow = 'Key Features',
  heading,
  subheading,
  description,
  features,
  columns = 3,
  background = 'orange-light',
  bg = 'orange-light',
}: FeatureGridProps) {
  const cols = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3' };
  const [isMounted, setIsMounted] = useState(false);

  // Use heading/title and subheading/subtitle/description
  const displayTitle = heading || title || 'Features';
  const displaySubtitle = subheading || subtitle || description || '';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Helper to render icon - handles both string and component types
  const renderIcon = (icon: IconType, className: string) => {
    if (typeof icon === 'string') {
      const IconComponent = iconMap[icon] || BrainCircuit;
      return <IconComponent className={className} />;
    } else {
      const IconComponent = icon;
      return <IconComponent className={className} />;
    }
  };

  return (
    <Section bg={bg || background || 'orange-light'} className="py-20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              {eyebrow}
              <span className="w-8 h-px bg-brand" />
            </span>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-[1.1] tracking-tight">
            {displayTitle}
          </h2>
          {displaySubtitle && (
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              {displaySubtitle}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 ${cols[columns]} gap-6 max-w-6xl mx-auto`}>
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flip-card h-56 group"
                tabIndex={0}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-face flex flex-col justify-between p-6 rounded-2xl bg-white border-2 border-gray-200/70 shadow-lg hover:border-brand/40 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
                      {renderIcon(feature.icon, 'h-6 w-6')}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-black mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-500">Hover to read more</p>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="flip-card-face flip-card-back flex flex-col justify-center p-6 rounded-2xl bg-white border-2 border-brand/30 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-brand/5 to-transparent" />
                    <div className="absolute inset-0 rounded-2xl border border-brand/20 shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)]" />
                    
                    <div className="relative z-10">
                      {renderIcon(feature.icon, 'h-6 w-6 text-brand mb-3')}
                      <h3 className="font-serif text-base font-bold mb-2 text-black">{feature.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 800px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </Section>
  );
}