"use client";

/**
 * Shared ambient decor — slow drifting glows and a rotating badge.
 * All motion is CSS-based and automatically disabled under
 * prefers-reduced-motion by the global rule.
 */

export const Orbs = ({
  tone = "blue",
  className = "",
}: {
  tone?: "blue" | "soft";
  className?: string;
}) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
    <div
      className={`animate-drift-a absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-[120px] ${
        tone === "blue" ? "bg-slate-blue/25" : "bg-white/[0.05]"
      }`}
    />
    <div
      className={`animate-drift-b absolute bottom-0 right-[-8rem] h-[22rem] w-[22rem] rounded-full blur-[120px] ${
        tone === "blue" ? "bg-slate-light/15" : "bg-white/[0.04]"
      }`}
    />
  </div>
);

export const OrbitBadge = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={`relative h-24 w-24 select-none ${className}`}>
    <svg viewBox="0 0 100 100" className="animate-spin-slower h-full w-full">
      <defs>
        <path id="orbit-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
      </defs>
      <text className="fill-ivory-light/60 text-[9.5px] font-bold uppercase tracking-[0.22em]">
        <textPath href="#orbit-circle">
          ju socialz · ncr alwar · create ·
        </textPath>
      </text>
    </svg>
    <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-lighter" />
  </div>
);

export const ScrollCue = () => (
  <div aria-hidden="true" className="flex flex-col items-center gap-3">
    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ivory-light/40">
      Scroll
    </span>
    <span className="relative block h-12 w-px overflow-hidden bg-white/10">
      <span className="animate-cue-drop absolute left-0 top-0 h-full w-full bg-slate-lighter" />
    </span>
  </div>
);

/**
 * Continuous page backdrop — one seamless gradient flowing behind
 * every section. Sections stay transparent so there are no divisions,
 * just light drifting down the page.
 */
export const PageGlow = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
    <div className="animate-gradient-pan absolute inset-0 bg-gradient-to-b from-slate-blue/[0.08] via-transparent to-slate-blue/[0.06]" />
    <div className="animate-drift-a absolute -top-48 left-[12%] h-[24rem] w-[24rem] rounded-full bg-slate-blue/[0.07] blur-[120px] md:h-[38rem] md:w-[38rem] md:blur-[160px]" />
    <div className="animate-drift-b absolute bottom-[-12rem] right-[8%] h-[22rem] w-[22rem] rounded-full bg-slate-light/[0.06] blur-[120px] md:h-[34rem] md:w-[34rem] md:blur-[160px]" />
  </div>
);
