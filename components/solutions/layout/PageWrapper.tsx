// components/layout/PageWrapper.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

// Renders a <div>: the root layout already provides the page's single <main>.
export function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
}