"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

export function SpotlightCard({ children, className = "", ...props }: HTMLMotionProps<"div"> & { children: ReactNode }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const reduceMotion = useReducedMotion();
  return <motion.div {...props} className={`spotlight-card ${className}`} onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setPosition({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 }); }} style={{ "--spotlight-x": `${position.x}%`, "--spotlight-y": `${position.y}%` } as CSSProperties} whileHover={reduceMotion ? {} : { y: -4, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>{children}</motion.div>;
}
