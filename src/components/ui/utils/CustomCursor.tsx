"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Lag-free custom cursor driven entirely by motion values —
 * zero React re-renders on mouse move.
 */
export const CustomCursor = () => {
  const pathname = usePathname();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const hovering = useMotionValue(0);

  const dotX = useSpring(x, { stiffness: 800, damping: 28, mass: 0.1 });
  const dotY = useSpring(y, { stiffness: 800, damping: 28, mass: 0.1 });
  const ringX = useSpring(x, { stiffness: 400, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 400, damping: 30, mass: 0.5 });

  const hoverSpring = useSpring(hovering, { stiffness: 400, damping: 28 });
  const dotScale = useTransform(hoverSpring, [0, 1], [1, 3]);
  const ringScale = useTransform(hoverSpring, [0, 1], [1, 1.5]);
  const ringOpacity = useTransform(hoverSpring, [0, 1], [1, 0]);

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      hovering.set(
        target.tagName.toLowerCase() === "a" ||
          target.tagName.toLowerCase() === "button" ||
          !!target.closest("a") ||
          !!target.closest("button") ||
          !!target.closest(".group")
          ? 1
          : 0
      );
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [x, y, hovering]);

  useEffect(() => {
    // Re-apply cursor none when route changes
    if (!window.matchMedia("(max-width: 768px)").matches) {
      document.body.style.cursor = "none";
      const interactiveElements = document.querySelectorAll("a, button, input, textarea, select");
      interactiveElements.forEach((el) => {
        (el as HTMLElement).style.cursor = "none";
      });
    }
  }, [pathname]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-white pointer-events-none mix-blend-difference md:block"
        style={{ x: dotX, y: dotY, scale: dotScale, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed left-0 top-0 z-[9998] hidden h-10 w-10 rounded-full border border-white/30 pointer-events-none mix-blend-difference md:block"
        style={{ x: ringX, y: ringY, scale: ringScale, opacity: ringOpacity, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
};
