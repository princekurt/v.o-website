"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type ServiceItem = {
  no: string;
  title: string;
  meta: string;
  copy: string;
  image: string;
};

export function ServiceIndex({ items }: { items: ServiceItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative"
      onMouseMove={(event) => setPos({ x: event.clientX, y: event.clientY })}
      onMouseLeave={() => setActive(null)}
    >
      <div className="mono hidden grid-cols-[4rem_1fr_16rem_3rem] gap-6 border-b border-bone/20 pb-3 text-bone/40 lg:grid">
        <span>No.</span>
        <span>Capability</span>
        <span>Scope</span>
        <span className="text-right">Open</span>
      </div>

      {items.map((item, index) => (
        <a
          key={item.title}
          href="#contact"
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onBlur={() => setActive(null)}
          className="group relative block border-b border-bone/10"
        >
          <div className="relative grid grid-cols-[auto_1fr_auto] items-baseline gap-4 px-3 py-5 transition-all duration-300 group-hover:bg-amber group-hover:text-ink md:px-5 lg:grid-cols-[4rem_1fr_16rem_3rem] lg:gap-6 lg:py-6">
            <span className="mono text-amber transition-colors group-hover:text-ink/60">{item.no}</span>
            <div>
              <h3 className="poster text-[clamp(1.7rem,3.6vw,3.3rem)]">{item.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-bone/50 transition-colors group-hover:text-ink/70 lg:hidden">
                {item.copy}
              </p>
            </div>
            <span className="mono hidden max-w-[14rem] leading-relaxed text-bone/40 transition-colors group-hover:text-ink/60 lg:block">
              {item.meta}
            </span>
            <span className="justify-self-end text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:text-3xl">
              ↗
            </span>
          </div>
        </a>
      ))}

      <div
        className="pointer-events-none fixed z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        style={{ left: pos.x, top: pos.y }}
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={active}
              className="relative h-[340px] w-[260px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              exit={{ opacity: 0, scale: 0.94, rotate: -2 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={items[active].image} alt="" fill sizes="260px" className="object-cover" />
              <div className="absolute inset-0 border border-bone/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
