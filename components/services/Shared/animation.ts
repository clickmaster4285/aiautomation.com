// components/services/Shared/animations.ts
import { Variants, TargetAndTransition } from 'framer-motion';

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Hero headings and intro copy: slide up without starting invisible. Text hidden at opacity 0
// until hydration delays Largest Contentful Paint (about 4 s on a throttled phone), so hero text
// that is likely the LCP element must paint on first render.
export const heroFadeInUp: Variants = {
  hidden: { y: 30 },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger children animations
// Stagger for hero content: same timing as staggerContainer, without hiding the hero (see heroFadeInUp).
export const heroStaggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Scale in animation (for stats, cards, etc.)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Glow pulse animation (for dark backgrounds)
export const glowPulse: TargetAndTransition = {
  scale: [1, 1.05, 1],
  opacity: [0.3, 0.6, 0.3],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Glow pulse animation (for light backgrounds)
export const glowPulseLight: TargetAndTransition = {
  scale: [1, 1.05, 1],
  opacity: [0.15, 0.3, 0.15],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Floating animation for images
export const floatImage = {
  y: [0, -15, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};