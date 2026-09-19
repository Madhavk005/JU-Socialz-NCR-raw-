"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, animate, useMotionValue, useTransform } from "framer-motion";
import { usePreloader } from "./PreloaderContext";
import { lenisStore } from "../utils/lenis-store";

const EASE = [0.22, 1, 0.36, 1] as const;

export const Preloader = () => {
  const { isLoading, setIsLoading } = usePreloader();
  const count = useMotionValue(0);
  const label = useTransform(count, (v) => String(Math.round(v)).padStart(3, "0"));
  const progress = useTransform(count, (v) => v / 100);

  useEffect(() => {
    // Freeze smooth scroll while loading (Lenis-aware, no layout jump)
    lenisStore.current?.stop();

    const controls = animate(count, 100, { duration: 2, ease: "easeInOut" });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        lenisStore.current?.start();
      }, 900);
    }, 2100);

    return () => {
      controls.stop();
      clearTimeout(timer);
      lenisStore.current?.start();
    };
  }, [count, setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="fixed inset-0 z-[9999] flex h-dvh w-screen flex-col overflow-hidden bg-obsidian-dark"
        >
          {/* Live gradient ambience — full bleed */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="animate-gradient-pan absolute inset-0 bg-gradient-to-br from-slate-blue/30 via-transparent to-slate-light/20" />
            <div className="animate-drift-a absolute left-[5%] top-[5%] h-[45vmax] w-[45vmax] rounded-full bg-slate-blue/30 blur-[130px]" />
            <div className="animate-drift-b absolute bottom-[5%] right-[5%] h-[40vmax] w-[40vmax] rounded-full bg-slate-light/20 blur-[120px]" />
            <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory-gold/[0.05] blur-[110px]" />
          </div>
          <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-30 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]" />

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
            className="relative z-10 flex items-center justify-center gap-3 pt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-lighter md:pt-10 md:text-xs"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-lighter" />
            The Official Media Team — NCR Campus, Alwar
          </motion.p>

          {/* Full-screen wordmark */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
            <h1 className="font-geist font-bold leading-[0.85] tracking-tighter text-ivory-light">
              <motion.span
                initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.3, duration: 1, ease: EASE }}
                className="block text-[11vw] md:text-[11vw]"
              >
                JU SOCIALZ
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.55, duration: 1, ease: EASE }}
                className="mt-3 block font-display text-[5vw] font-light italic tracking-normal text-ivory-dark md:text-[3vw]"
              >
                Your ideas belong here.
              </motion.span>
            </h1>
          </div>

          {/* Counter + progress — full width */}
          <div className="relative z-10 px-6 pb-6 md:px-12 md:pb-8">
            <div className="mb-3 flex items-end justify-between md:mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-ivory-light/40">
                Loading
              </span>
              <span className="font-display text-5xl font-light italic text-ivory-light/90 md:text-8xl">
                <motion.span>{label}</motion.span>
              </span>
            </div>
            <div className="h-px w-full bg-white/10">
              <motion.div
                className="h-full origin-left bg-gradient-to-r from-slate-blue via-slate-lighter to-ivory-light"
                style={{ scaleX: progress }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
