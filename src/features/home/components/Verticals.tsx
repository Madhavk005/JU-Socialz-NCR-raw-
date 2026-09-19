"use client";

import { motion } from"framer-motion";
import Link from"next/link";
import { ArrowUpRight } from"lucide-react";
import { Orbs } from"@/components/ui/shared/Decor";

const VERTICALS = [
  {
    id:"cinematography",
    title:"Cinematography",
    desc:"Storytelling through motion, lighting, and vision.",
  },
  {
    id:"editing",
    title:"Editing",
    desc:"The invisible art of pacing and post-production.",
  },
  {
    id:"reel-creation",
    title:"Reel Creation",
    desc:"Short-form stories that hook in three seconds.",
  },
  {
    id:"graphic-design",
    title:"Graphic Design",
    desc:"Ideas made visible.",
  },
  {
    id:"content-marketing",
    title:"Content Creation",
    desc:"Campaigns and ideas that leave a mark.",
  },
  {
    id:"social-media",
    title:"Social Media",
    desc:"Building communities, not just content.",
  },
  {
    id:"ai-automation",
    title:"AI & Automation",
    desc:"Creators, amplified.",
  },
];

export const Verticals = () => {
  return (
    <section id="verticals" className="section-padding relative scroll-mt-20 overflow-hidden">
      <Orbs tone="soft" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-pan absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-transparent via-slate-blue/15 to-transparent" />
      </div>
      <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        <div className="mb-12 text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-lighter md:text-xs"
          >
            Our verticals
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-geist text-4xl font-bold tracking-tight text-ivory-light md:text-6xl lg:text-7xl"
          >
            Seven crafts.{""}
            <span className="font-display font-light italic text-slate-lighter">
              One community.
            </span>
          </motion.h2>
        </div>

        <div className="border-t border-white/10">
          {VERTICALS.map((vertical, idx) => (
            <motion.div
              key={vertical.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin:"-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/verticals/${vertical.id}`}
                className="group flex items-center gap-5 rounded-xl border-b border-white/10 px-2 py-5 transition-all duration-500 hover:border-slate-lighter/40 hover:bg-white/[0.03] hover:pl-4 md:gap-8 md:py-6 md:hover:pl-6"
              >
                <span className="w-8 shrink-0 font-display text-sm italic text-ivory-light/35 transition-colors duration-500 group-hover:text-slate-lighter">
                  {String(idx + 1).padStart(2,"0")}
                </span>
                <span className="flex-1">
                  <span className="link-sweep group-hover-sweep block w-fit font-geist text-xl font-bold tracking-tight text-ivory-light md:text-2xl">
                    {vertical.title}
                  </span>
                  <span className="mt-1 block font-inter text-sm text-ivory-light/50 transition-colors duration-500 group-hover:text-ivory-light/75">
                    {vertical.desc}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-ivory-light/35 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ivory-light" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
