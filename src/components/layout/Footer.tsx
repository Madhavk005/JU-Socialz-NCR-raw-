import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CAMPUS } from "@/lib/campus";

const EXPLORE = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Teams", href: "/teams" },
  { name: "Join Us", href: "/join" },
];

const VERTICALS = [
  { name: "Cinematography", href: "/verticals/cinematography" },
  { name: "Editing", href: "/verticals/editing" },
  { name: "Reel Creation", href: "/verticals/reel-creation" },
  { name: "Graphic Design", href: "/verticals/graphic-design" },
  { name: "Content Creation", href: "/verticals/content-marketing" },
  { name: "Social Media", href: "/verticals/social-media" },
  { name: "AI & Automation", href: "/verticals/ai-automation" },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-obsidian-dark">
      {/* Live gradient ambience */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-pan absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-slate-blue/15 via-transparent to-transparent" />
        <div className="animate-drift-b absolute bottom-[-6rem] left-[10%] h-[20rem] w-[20rem] rounded-full bg-slate-blue/15 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6 pb-8 pt-12 md:px-12 md:pb-10 md:pt-24">
        {/* Top row */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-12 md:gap-12">
          <div className="col-span-2 md:col-span-5">
            <p className="font-geist text-2xl font-bold tracking-tight text-ivory-light">
              JU SOCIALZ
            </p>
            <p className="mt-1 text-[10px] font-bold tracking-[0.3em] text-slate-lighter">
              NCR CAMPUS, ALWAR
            </p>
            <p className="mt-4 max-w-xs font-inter text-sm leading-relaxed text-ivory-light/55 md:mt-5 md:text-base">
              The official media team of JECRC University — student-driven
              stories, films, designs, and digital identity.
            </p>
            <a
              href={CAMPUS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-ivory-light backdrop-blur-md transition-all duration-500 hover:border-slate-lighter/50 hover:bg-white/10 active:scale-95 md:mt-7"
            >
              {CAMPUS.instagramHandle}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <nav className="md:col-span-3" aria-label="Explore">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory-light/40">
              Explore
            </p>
            <ul className="flex flex-col gap-3">
              {EXPLORE.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="link-sweep w-fit font-inter text-sm text-ivory-dark transition-colors hover:text-ivory-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-4" aria-label="Verticals">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory-light/40">
              Verticals
            </p>
            <ul className="flex flex-col gap-3">
              {VERTICALS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="link-sweep w-fit font-inter text-sm text-ivory-dark transition-colors hover:text-ivory-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Giant wordmark — desktop only */}
        <div
          aria-hidden="true"
          className="mt-10 hidden select-none overflow-hidden md:mt-20 md:block"
        >
          <p className="animate-gradient-pan bg-gradient-to-b from-ivory-light/25 via-ivory-light/10 to-transparent bg-clip-text text-center font-geist text-[12vw] font-bold leading-none tracking-tighter text-transparent md:text-[10rem]">
            JU SOCIALZ
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 text-center md:mt-4 md:flex-row md:pt-6 md:text-left">
          <p className="font-inter text-xs text-ivory-dark/40">
            &copy; {new Date().getFullYear()} JU Socialz — NCR Campus, Alwar.
          </p>
          <Link
            href="/privacy"
            className="font-inter text-xs text-ivory-dark/40 transition-colors hover:text-ivory-light"
          >
            Privacy Policy
          </Link>
          <p className="font-display text-sm italic text-ivory-light/40">
            Your ideas belong here.
          </p>
        </div>
      </div>
    </footer>
  );
};
