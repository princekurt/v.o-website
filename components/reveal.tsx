"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay, ease: "easeOut" }}>{children}</motion.div>;
}

export function StaggerGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const items = Array.isArray(children) ? children : [children];
  return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.09 } } }}>{items.map((child, index) => <motion.div key={index} variants={{ hidden: reduce ? {} : { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } } }}>{child}</motion.div>)}</motion.div>;
}
