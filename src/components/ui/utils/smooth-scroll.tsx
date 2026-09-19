"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { lenisStore, scrollToHash } from "./lenis-store";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisStore.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Seamless anchor navigation: glide to in-page targets instead of jumping.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.('a[href*="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      const [path, hash] = href.split("#");
      const samePage = path === "" || path === window.location.pathname;
      if (!hash || !samePage) return;

      const el = document.getElementById(hash);
      if (!el) return;

      e.preventDefault();
      scrollToHash(`#${hash}`);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      lenisStore.current = null;
    };
  }, []);

  // Reset scroll position on route change (or glide to a hash target).
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      // Wait a tick for the new page to paint before gliding.
      const t = setTimeout(() => {
        if (document.getElementById(id)) scrollToHash(hash);
        else lenisStore.current?.scrollTo(0, { immediate: true });
      }, 60);
      return () => clearTimeout(t);
    }
    lenisStore.current?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return <>{children}</>;
};
