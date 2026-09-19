"use client";

import { motion } from"framer-motion";
import Link from"next/link";
import { ArrowUp } from"lucide-react";

interface GlobalCtaProps {
  titleLine1?: string;
  titleLine2?: string;
  copy?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const GlobalCta = ({
  titleLine1 ="Your ideas",
  titleLine2 ="belong here.",
  copy ="Discover the verticals, find your creative space, and be part of JU Socialz at NCR Campus, Alwar.",
  ctaLabel ="Explore Our Verticals",
  ctaHref ="/#verticals",
}: GlobalCtaProps = {}) => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-pan absolute inset-0 bg-gradient-to-br from-slate-blue/20 via-transparent to-slate-light/15" />
        <div className="animate-drift-a absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-blue/20 blur-[130px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin:"-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card group relative overflow-hidden rounded-[2rem] px-6 py-14 text-center transition-all duration-500 hover:border-slate-lighter/30 hover:shadow-glow md:px-12 md:py-20"
        >
          <div className="animate-gradient-pan absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-blue via-slate-lighter to-slate-blue" />
          <h2 className="text-balance font-geist text-4xl font-bold tracking-tight text-ivory-light md:text-6xl lg:text-7xl">
            {titleLine1}{""}
            <span className="font-display font-light italic text-slate-lighter">
              {titleLine2}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance font-inter text-base leading-relaxed text-ivory-light/60 md:text-lg">
            {copy}
          </p>
          <Link
            href={ctaHref}
            className="group/btn relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-ivory-light px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-obsidian-dark transition-all duration-300 hover:bg-slate-lighter active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
            <span className="relative">{ctaLabel}</span>
            <ArrowUp className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
