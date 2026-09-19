"use client";

import { motion } from"framer-motion";
import { ScrollCue } from"@/components/ui/shared/Decor";

const ease = [0.22, 1, 0.36, 1] as const;

export const TeamsHero = () => {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pb-14 pt-28">
      {/* Live gradient ambience — full bleed */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-pan absolute inset-0 bg-gradient-to-br from-slate-blue/30 via-transparent to-slate-light/20" />
        <div className="animate-drift-a absolute left-[5%] top-[5%] h-[40vmax] w-[40vmax] rounded-full bg-slate-blue/30 blur-[130px]" />
        <div className="animate-drift-b absolute bottom-[5%] right-[5%] h-[36vmax] w-[36vmax] rounded-full bg-slate-light/20 blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-40 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6 text-center md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease }}
          className="mb-8 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-lighter md:text-xs"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-lighter" />
          Meet the team — JU Socialz
        </motion.p>

        <h1 className="font-geist font-bold leading-[0.9] tracking-tighter text-ivory-light">
          <motion.span
            initial={{ opacity: 0, y: 48, filter:"blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter:"blur(0px)" }}
            transition={{ delay: 0.35, duration: 1, ease }}
            className="block text-[16vw] md:text-[11vw]"
          >
            MEET
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 48, filter:"blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter:"blur(0px)" }}
            transition={{ delay: 0.5, duration: 1, ease }}
            className="block font-display text-[9vw] font-light italic tracking-normal text-ivory-dark md:text-[6vw]"
          >
            the team.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease }}
          className="mx-auto mt-8 max-w-xl text-balance font-inter text-base leading-relaxed text-ivory-light/65 md:text-lg"
        >
          The visionaries who guide us and the student leaders who drive us —
          the people behind JU Socialz.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="relative z-10 mt-16 flex justify-center"
      >
        <ScrollCue />
      </motion.div>
    </section>
  );
};
