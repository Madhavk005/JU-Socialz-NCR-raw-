"use client";

import { motion } from"framer-motion";
import Image from"next/image";
import Link from"next/link";
import { ArrowUpRight } from"lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export const StudentLeadership = () => {
  return (
    <section className="relative scroll-mt-20 overflow-hidden py-24 md:py-36">
      {/* Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none whitespace-nowrap font-geist text-[18vw] font-bold leading-none tracking-tighter text-transparent md:text-[13vw]"
        style={{ WebkitTextStroke:"1px rgba(245,241,232,0.07)" }}
      >
        CATALYST
      </div>
      {/* Restrained ambience */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-a absolute right-[10%] top-[30%] h-[22rem] w-[22rem] rounded-full bg-slate-blue/15 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-lighter md:text-xs"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-lighter" />
          The Catalyst
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-14 max-w-3xl font-geist text-4xl font-bold tracking-tight text-ivory-light md:mb-20 md:text-6xl lg:text-7xl"
        >
          Leading{""}
          <span className="font-display font-light italic text-slate-lighter">
            the charge.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin:"-80px" }}
            transition={{ duration: 0.9, ease }}
            className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:ring-white/25 hover:shadow-glow lg:col-span-5"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/teams/Ayush Yadav.jpg"
                alt="Ayush Yadav — Head, Social Media"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                style={{ objectPosition:"center 20%" }}
              />
            </div>
            <span className="absolute bottom-5 left-5 rounded-full border border-white/15/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-ivory-light backdrop-blur-md">
              Head — Social Media
            </span>
          </motion.div>

          {/* Details */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-lg italic text-slate-lighter/70"
            >
              01 — Student Leadership
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin:"-80px" }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              className="mt-4 font-geist text-5xl font-bold leading-[0.95] tracking-tighter text-ivory-light md:text-7xl"
            >
              Ayush
              <br />
              Yadav
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin:"-80px" }}
              transition={{ duration: 0.9, delay: 0.12, ease }}
              className="mt-5 font-display text-xl font-light italic text-slate-lighter md:text-2xl"
            >
              Head — Social Media, JECRC University, NCR Campus Alwar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin:"-80px" }}
              transition={{ duration: 0.9, delay: 0.18, ease }}
              className="mt-10 border-t border-white/10"
            >
              {[
                ["Role","Head — Social Media"],
                ["Campus","JECRC University, NCR Campus Alwar"],
                ["Mandate","Leading the voice of campus"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ivory-light/40">
                    {k}
                  </span>
                  <span className="text-right font-inter text-sm text-ivory-light/75 md:text-base">
                    {v}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin:"-60px" }}
          transition={{ duration: 0.8, ease }}
          className="mt-20 border-y border-white/10 py-10 md:mt-28 md:py-14"
        >
          <Link href="/join" className="group flex items-center justify-between gap-8">
            <p className="max-w-3xl font-geist text-3xl font-bold leading-tight tracking-tight text-ivory-light md:text-5xl">
              You can be{""}
              <span className="font-display font-light italic text-slate-lighter">
                part of the team.
              </span>
            </p>
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-ivory-light text-obsidian-dark transition-all duration-500 group-hover:bg-slate-lighter group-active:scale-90 md:h-24 md:w-24">
              <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:h-9 md:w-9" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
