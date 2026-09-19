"use client";

import { useRef } from"react";
import { motion, useScroll, useTransform } from"framer-motion";
import Link from"next/link";
import { ArrowDown } from"lucide-react";
import { Orbs, OrbitBadge, ScrollCue } from"@/components/ui/shared/Decor";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pb-14 pt-28"
    >
      {/* Ambient background */}
      <Orbs />
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-60 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-10 mx-auto max-w-5xl px-6 text-center md:px-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
          className="mb-8 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-lighter md:text-xs"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-lighter" />
          JU Socialz — NCR Campus, Alwar
        </motion.p>

        <h1 className="font-geist font-bold tracking-tighter text-ivory-light">
          <motion.span
            initial={{ opacity: 0, y: 28, filter:"blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter:"blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.9, ease }}
            className="block text-5xl leading-[1.02] md:text-7xl lg:text-8xl"
          >
            A creative community.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 28, filter:"blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter:"blur(0px)" }}
            transition={{ delay: 0.5, duration: 0.9, ease }}
            className="mt-3 block font-display text-3xl font-light italic tracking-normal text-ivory-dark md:text-5xl"
          >
            A new campus identity.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease }}
          className="mx-auto mt-8 max-w-xl text-balance font-inter text-base leading-relaxed text-ivory-light/65 md:text-lg"
        >
          A student-driven platform for creativity, media, and collaboration —
          built by the students who shape it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <Link
            href="/#verticals"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ivory-light px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-obsidian-dark transition-all duration-300 hover:bg-slate-lighter active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Discover our verticals</span>
            <ArrowDown className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </Link>
          <OrbitBadge className="hidden sm:block" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 mt-16 flex justify-center"
      >
        <ScrollCue />
      </motion.div>
    </section>
  );
};
