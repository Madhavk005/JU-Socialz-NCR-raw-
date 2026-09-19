"use client";

import type Lenis from "lenis";

/**
 * Shared holder for the Lenis instance so any client component
 * (preloader, scroll-to-top, cursor) can drive smooth scrolling
 * without prop-drilling. Set once by <SmoothScroll />.
 */
export const lenisStore: { current: Lenis | null } = {
  current: null,
};

export function scrollToTop(immediate = false) {
  if (lenisStore.current) {
    lenisStore.current.scrollTo(0, { immediate });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
  }
}

export function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (lenisStore.current && el) {
    lenisStore.current.scrollTo(el as HTMLElement, { offset: -72 });
  } else if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
