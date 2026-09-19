"use client";

import { motion } from"framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    title:"Apply",
    desc:"Tell us who you are, what you make, and which vertical feels like home.",
  },
  {
    title:"Shortlist",
    desc:"The team reviews every application — we read all of them, not just the portfolios.",
  },
  {
    title:"Creative task",
    desc:"A small brief to show us how you think. No perfect gear needed, just your take.",
  },
  {
    title:"Interaction",
    desc:"A short, casual chat. We want to know you; you get to grill us too.",
  },
  {
    title:"Welcome in",
    desc:"You are part of JU Socialz. Pick your vertical and ship your first piece.",
  },
];

export const JoinProcess = () => {
  return (
    <section className="section-padding relative scroll-mt-20 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-a absolute left-[5%] top-[15%] h-[20rem] w-[20rem] rounded-full bg-slate-blue/15 blur-[140px]" />
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
            The process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-balance font-geist text-4xl font-bold tracking-tight text-ivory-light md:text-6xl lg:text-7xl"
          >
            How you{""}
            <span className="font-display font-light italic text-slate-lighter">
              get in.
            </span>
          </motion.h2>
        </div>

        <div>
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin:"-40px" }}
              transition={{ duration: 0.5, ease }}
              className="group flex items-baseline gap-5 rounded-xl border-t border-white/10 px-2 py-6 transition-all duration-500 last:border-b hover:border-slate-lighter/40 hover:bg-white/[0.02] hover:pl-4 md:gap-8 md:py-7 md:hover:pl-6"
            >
              <span className="w-8 shrink-0 font-display text-sm italic text-slate-lighter/50 transition-colors duration-500 group-hover:text-slate-lighter">
                {String(idx + 1).padStart(2,"0")}
              </span>
              <span className="flex-1">
                <span className="block w-fit font-geist text-xl font-bold tracking-tight text-ivory-light md:text-2xl">
                  {step.title}
                </span>
                <span className="mt-1 block font-inter text-sm leading-relaxed text-ivory-light/55 md:text-base">
                  {step.desc}
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
