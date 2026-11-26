// components/landingPage/useNav.tsx
// Navbar behaviour only: which menu is open, hover intent, keyboard and outside-click handling,
// the mobile menu, and the scrolled header style. Menu content lives in navConfig.ts; markup in Nav.tsx.
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const OPEN_DELAY = 80;
const CLOSE_DELAY = 160;

export function useNav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
  };

  const closeAll = useCallback(() => {
    clearTimer();
    setOpenMenu(null);
  }, []);

  /** Hover intent: a short delay so passing the cursor across the bar doesn't flash menus. */
  const hoverOpen = (id: string) => {
    clearTimer();
    timer.current = setTimeout(() => setOpenMenu(id), openMenu ? 0 : OPEN_DELAY);
  };
  const hoverClose = () => {
    clearTimer();
    timer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  };
  const toggle = (id: string) => {
    clearTimer();
    setOpenMenu((cur) => (cur === id ? null : id));
  };

  // Close everything on navigation (state reset during render, React's pattern for "reset on prop change").
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes the open menu and returns focus to its toggle; a click outside the header closes it.
  useEffect(() => {
    if (!openMenu && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (openMenu) {
        const id = openMenu;
        setOpenMenu(null);
        document.getElementById(`nav-toggle-${id}`)?.focus();
      } else if (mobileOpen) {
        setMobileOpen(false);
        document.getElementById('nav-mobile-toggle')?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [openMenu, mobileOpen]);

  // Lock page scroll behind the open mobile menu.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => clearTimer, []);

  return {
    pathname,
    navRef,
    openMenu,
    hoverOpen,
    hoverClose,
    toggle,
    closeAll,
    mobileOpen,
    setMobileOpen,
    mobileSection,
    setMobileSection,
    scrolled,
  };
}
