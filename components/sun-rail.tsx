"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function SunRail() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 });
  const scaleY = useTransform(progress, [0, 1], [0, 1]);
  const top = useTransform(progress, [0, 1], ["0%", "100%"]);
  const percent = useTransform(progress, (value) => `${Math.round(value * 100)}`.padStart(2, "0"));

  return (
    <div className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 mix-blend-difference text-white xl:flex">
      <span className="mono origin-center rotate-180 [writing-mode:vertical-rl] text-white/50">Solar position</span>
      <div className="relative h-40 w-px bg-white/25">
        <motion.div style={{ scaleY }} className="absolute inset-0 origin-top bg-white" />
        <motion.div
          style={{ top }}
          className="absolute -left-[3px] h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-white"
        />
      </div>
      <span className="mono text-white/60">
        <motion.span>{percent}</motion.span>
      </span>
    </div>
  );
}
