"use client";

import { motion } from"framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const JoinHero = () => {
  return (
    <section className="relative flex min-h-[72dvh] flex-col justify-center overflow-hidden pb-12 pt-32">
      {/* Live gradient ambience */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-pan absolute inset-0 bg-gradient-to-br from-slate-blue/25 via-transparent to-slate-light/20" />
        <div className="animate-drift-a absolute -top-24 left-[8%] h-[24rem] w-[24rem] rounded-full bg-slate-blue/30 blur-[130px]" />
        <div className="animate-drift-b absolute bottom-[-6rem] right-[4%] h-[20rem] w-[20rem] rounded-full bg-slate-light/20 blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-40 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]" />

      <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
          className="mb-6 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-lighter md:text-xs"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-lighter" />
          Be Part of the Crew
        </motion.p>

        <h1 className="text-balance font-geist text-4xl font-bold tracking-tight text-ivory-light md:text-6xl lg:text-7xl">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease }}
            className="block"
          >
            Stop scrolling.{""}
            <span className="font-display font-light italic text-slate-lighter">
              Start creating.
            </span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8, ease }}
          className="mx-auto mt-8 max-w-xl text-balance font-inter text-base leading-relaxed text-ivory-light/65 md:text-lg"
        >
          JU Socialz is the official media team of JECRC University, NCR
          Campus Alwar. If you shoot, edit, design, write, or post — there&apos;s
          a vertical with your name on it.
        </motion.p>
      </div>
    </section>
  );
};
