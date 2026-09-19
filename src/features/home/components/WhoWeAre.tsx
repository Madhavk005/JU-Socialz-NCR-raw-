"use client";

import { motion } from"framer-motion";

export const WhoWeAre = () => {
  return (
    <section id="about" className="section-padding relative scroll-mt-20 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-drift-a absolute left-[10%] top-[10%] h-[20rem] w-[20rem] rounded-full bg-slate-blue/15 blur-[140px]" />
      </div>
      <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-lighter md:text-xs"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-geist text-4xl font-bold tracking-tight text-ivory-light md:text-6xl lg:text-7xl"
        >
          Not an initiative.{""}
          <span className="font-display font-light italic text-slate-lighter">
            A family.
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-2xl space-y-6 font-inter text-base leading-relaxed text-ivory-light/65 md:text-lg"
        >
          <p className="text-balance">
            JU Socialz at NCR Campus, Alwar is more than a creative community.
            It&apos;s a family of students who come together to explore
            creativity, express ideas, and grow — across media, design,
            storytelling, and campus culture.
          </p>
          <p className="text-balance">
            JU Socialz is the family. The verticals are where you find your
            space.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
