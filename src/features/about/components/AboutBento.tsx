"use client";

import { motion } from"framer-motion";
import Link from"next/link";
import { ArrowUpRight } from"lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const card =  "glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-slate-lighter/40 hover:shadow-glow md:p-8";

const CardGlow = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-slate-blue/25 blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
  />
);

const Index = ({ n }: { n: string }) => (
  <span className="font-display text-sm italic text-slate-lighter/50 transition-colors duration-500 group-hover:text-slate-lighter">
    {n}
  </span>
);

export const AboutBento = () => {
  return (
    <section className="section-padding relative scroll-mt-20 overflow-hidden">
      {/* Live gradient ambience behind the grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-pan absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-transparent via-slate-blue/15 to-transparent" />
        <div className="animate-drift-b absolute bottom-[-4rem] left-[-6rem] h-[20rem] w-[20rem] rounded-full bg-slate-light/10 blur-[130px]" />
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
            Who we are
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-balance font-geist text-4xl font-bold tracking-tight text-ivory-light md:text-6xl lg:text-7xl"
          >
            One team.{""}
            <span className="font-display font-light italic text-slate-lighter">
              Every story.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Mandate — full-width statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin:"-40px" }}
            transition={{ duration: 0.6, ease }}
            className={`${card} md:col-span-3 md:p-12`}
          >
            <CardGlow />
            <div className="animate-gradient-pan absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-blue via-slate-lighter to-slate-blue" />
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <Index n="01 — The mandate" />
                <p className="mt-4 font-geist text-3xl font-bold leading-tight tracking-tight text-ivory-light md:text-5xl">
                  The official voice{""}
                  <span className="font-display font-light italic text-slate-lighter">
                    of campus.
                  </span>
                </p>
                <p className="mt-4 max-w-xl font-inter text-base leading-relaxed text-ivory-light/60">
                  JU Socialz carries the university&apos;s voice at NCR
                  Campus, Alwar — events, films, campaigns, and digital
                  identity, made by students across seven verticals.
                </p>
              </div>
              <Link
                href="/#verticals"
                className="link-sweep group-hover-sweep inline-flex w-fit shrink-0 items-center gap-2 font-geist text-sm font-bold uppercase tracking-[0.2em] text-ivory-light"
              >
                Explore the verticals
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin:"-40px" }}
            transition={{ duration: 0.6, delay: 0.06, ease }}
            className={card}
          >
            <CardGlow />
            <Index n="02" />
            <h3 className="mt-3 font-geist text-2xl font-bold tracking-tight text-ivory-light">
              Tell the campus story
            </h3>
            <p className="mt-2 font-inter text-sm leading-relaxed text-ivory-light/55 md:text-base">
              Wins, grind, friendships, firsts — real life at NCR Campus,
              Alwar turned into content that connects.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin:"-40px" }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className={card}
          >
            <CardGlow />
            <Index n="03" />
            <h3 className="mt-3 font-geist text-2xl font-bold tracking-tight text-ivory-light">
              Impossible to scroll past
            </h3>
            <p className="mt-2 font-inter text-sm leading-relaxed text-ivory-light/55 md:text-base">
              Not just a handle you follow — a feeling you recognize. A
              campus that&apos;s alive and moving forward.
            </p>
          </motion.div>

          {/* Verticals */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin:"-40px" }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className={card}
          >
            <CardGlow />
            <Index n="04" />
            <p className="mt-3 font-geist text-5xl font-bold tracking-tighter text-ivory-light">
              07
            </p>
            <h3 className="mt-2 font-geist text-xl font-bold tracking-tight text-ivory-light">
              Crafts, one community
            </h3>
            <p className="mt-2 font-inter text-sm leading-relaxed text-ivory-light/55">
              Cinematography, editing, reels, design, content, social, AI.
            </p>
          </motion.div>

          {/* Campus */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin:"-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className={card}
          >
            <CardGlow />
            <Index n="05" />
            <h3 className="mt-3 font-geist text-2xl font-bold tracking-tight text-ivory-light">
              NCR Campus, Alwar
            </h3>
            <p className="mt-2 font-inter text-sm leading-relaxed text-ivory-light/55 md:text-base">
              A new campus identity, built by the students who shape it —
              story by story, frame by frame.
            </p>
          </motion.div>

          {/* Culture — wide closer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin:"-40px" }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className={`${card} md:col-span-2`}
          >
            <CardGlow />
            <Index n="06" />
            <p className="mt-3 font-geist text-2xl font-bold leading-snug tracking-tight text-ivory-light md:text-3xl">
              A university doesn&apos;t speak for itself.{""}
              <span className="font-display font-light italic text-slate-lighter">
                That&apos;s us.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
