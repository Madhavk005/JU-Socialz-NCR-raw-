"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { MagneticEffect } from "@/components/ui/utils/MagneticEffect";
import { NAV_LINKS } from "@/lib/campus";

const navLinks = NAV_LINKS.filter((link) => link.href !== "/join");

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-500 backdrop-blur-lg ${
          scrolled ? "py-4 border-b border-white/5" : "py-6"
        }`}
      >
        <div className="container mx-auto container-padding flex items-center justify-between">
          <Link href="/" className="relative z-[121] leading-none">
            <span className="block text-xl font-bold font-geist tracking-tight text-ivory-light/90">
              JU SOCIALZ
            </span>
            <span className="mt-1 block text-[9px] font-bold tracking-[0.3em] text-slate-lighter">
              NCR CAMPUS, ALWAR
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
              <MagneticEffect key={item.name} intensity={0.2}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium hover:text-white transition-colors ${
                    isActive ? "text-white" : "text-ivory-light/60"
                  }`}
                >
                  {item.name}
                </Link>
              </MagneticEffect>
              );
            })}
            <MagneticEffect intensity={0.3}>
              <Link
                href="/join"
                className="ml-2 block rounded-full bg-ivory-light px-6 py-2.5 text-sm font-bold text-obsidian-dark transition-all hover:bg-slate-lighter active:scale-95"
              >
                Join Us
              </Link>
            </MagneticEffect>
          </nav>

          {/* Mobile Menu Toggle (Optimized Touch Target) */}
          <button 
            className="md:hidden relative z-[121] w-12 h-12 flex flex-col items-end justify-center gap-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={mobileMenuOpen ? { rotate: -45, y: 10, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2px] bg-ivory-light block origin-center"
            />
            <motion.span 
              animate={mobileMenuOpen ? { opacity: 0, width: "16px" } : { opacity: 1, width: "16px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2px] bg-ivory-light block origin-center"
            />
            <motion.span 
              animate={mobileMenuOpen ? { rotate: 45, y: -10, width: "24px" } : { rotate: 0, y: 0, width: "20px" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-[2px] bg-ivory-light block origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] bg-obsidian-dark/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl sm:text-4xl font-bold font-geist tracking-tight  text-ivory-light hover:text-slate-lighter transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ delay: 0.4 }}
                className="mt-12"
              >
                <Link
                  href="/join"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-block rounded-full bg-ivory-light px-8 py-4 font-geist text-base font-bold tracking-wide text-obsidian-dark transition-all hover:bg-slate-lighter active:scale-95 sm:px-10 sm:py-5 sm:text-lg"
                >
                  Join Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
