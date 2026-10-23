"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const };

export function ScrollReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...transition, delay }}>{children}</motion.div>;
}

export function ScrollRevealGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }}>{children}</motion.div>;
}

export function ScrollRevealItem({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return <motion.div variants={{ hidden: reduceMotion ? {} : { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition } }}>{children}</motion.div>;
}
