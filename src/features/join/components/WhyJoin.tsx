"use client";

import { motion } from"framer-motion";

export interface ReasonData {
  title: string;
  desc: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const FALLBACK_REASONS: ReasonData[] = [
  { title:"Ship Real Work", desc:"Cover fests, run campaigns, publish films. Everything you make goes live to a real audience — from day one." },
  { title:"Learn By Doing", desc:"No lectures. Pick up cameras, timelines, and design tools inside actual productions, guided by seniors who have shipped before." },
  { title:"Seven Crafts, One Crew", desc:"Start in one vertical, collide with six others. Editors learn cinematography; designers learn storytelling." },
  { title:"Cover Campus Life", desc:"Help tell the story of NCR Campus, Alwar — fests, events, and everyday moments. Your work shapes how the campus sees itself." },
  { title:"Find Your People", desc:"Co-founders, collaborators, lifelong friends. The team becomes the reason campus feels like home." },
  { title:"Proof, Not Certificates", desc:"Leave with published work and a body of proof — a portfolio built on shipped projects, not paper." },
];

export const WhyJoin = ({ reasonsProp }: { reasonsProp?: ReasonData[] }) => {
  const reasons = reasonsProp && reasonsProp.length > 0 ? reasonsProp : FALLBACK_REASONS;
  return (
    <section className="section-padding relative scroll-mt-20 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-pan absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-transparent via-slate-blue/15 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-12 text-center md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-lighter md:text-xs"
          >
            Benefits
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-balance font-geist text-4xl font-bold tracking-tight text-ivory-light md:text-6xl lg:text-7xl"
          >
            What you get{""}
            <span className="font-display font-light italic text-slate-lighter">
              after joining.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, idx) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin:"-40px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.08, ease }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-lighter/40 hover:shadow-glow md:p-8"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-slate-blue/25 blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
              <span className="font-display text-sm italic text-slate-lighter/50 transition-colors duration-500 group-hover:text-slate-lighter">
                {String(idx + 1).padStart(2,"0")}
              </span>
              <h3 className="mt-3 font-geist text-xl font-bold tracking-tight text-ivory-light">
                {r.title}
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-ivory-light/55">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
