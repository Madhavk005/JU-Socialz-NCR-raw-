"use client";

import { motion } from"framer-motion";

const STEPS = [
  {
    title:"Create together",
    desc:"Cross-vertical teams on real campaigns, films, and stories.",
  },
  {
    title:"Learn by making",
    desc:"Skills grow through shipped work, not lectures.",
  },
  {
    title:"Tell campus stories",
    desc:"Work that shapes how NCR Campus, Alwar sees itself.",
  },
  {
    title:"Build your space",
    desc:"Start in one vertical, collaborate across all seven.",
  },
];

export const Ecosystem = () => {
  return (
    <section id="ecosystem" className="section-padding relative scroll-mt-20 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-b absolute bottom-[-4rem] right-[5%] h-[20rem] w-[20rem] rounded-full bg-slate-blue/15 blur-[140px]" />
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
            What we do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-geist text-4xl font-bold tracking-tight text-ivory-light md:text-6xl lg:text-7xl"
          >
            Different skills.{""}
            <span className="font-display font-light italic text-slate-lighter">
              One community.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-balance font-inter text-base leading-relaxed text-ivory-light/60 md:text-lg"
          >
            The verticals don&apos;t work in isolation. A reel needs a concept,
            a shoot, an edit, a design, and a distribution plan — that&apos;s JU
            Socialz working as one ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin:"-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-xl border-t border-white/10 px-2 py-7 transition-all duration-500 hover:border-slate-lighter/50 hover:bg-white/[0.02] hover:pl-4"
            >
              <span className="font-display text-sm italic text-slate-lighter/50 transition-colors duration-500 group-hover:text-slate-lighter">
                {String(idx + 1).padStart(2,"0")}
              </span>
              <h3 className="mt-2 font-geist text-xl font-bold tracking-tight text-ivory-light">
                {step.title}
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-ivory-light/55 md:text-base">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
