"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { GalleryProject } from "@/lib/projects";

export function ArchiveIndex({ projects }: { projects: GalleryProject[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative"
      onMouseMove={(event) => setPos({ x: event.clientX, y: event.clientY })}
      onMouseLeave={() => setActive(null)}
    >
      <div className="mono hidden grid-cols-[3rem_1fr_10rem_5rem_6rem] gap-4 border-b border-ink/20 pb-3 text-ink/40 md:grid">
        <span>No.</span>
        <span>Project</span>
        <span>Discipline</span>
        <span>Year</span>
        <span className="text-right">Photos</span>
      </div>

      {projects.map((project, index) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onBlur={() => setActive(null)}
          className="group grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-ink/10 px-2 py-4 transition-colors duration-300 hover:bg-amber md:grid-cols-[3rem_1fr_10rem_5rem_6rem] md:gap-4 md:py-5"
        >
          <span className="mono text-ink/40 group-hover:text-ink/60">{String(index + 1).padStart(2, "0")}</span>
          <span className="poster text-[clamp(1.15rem,2.1vw,1.9rem)] leading-none">{project.title}</span>
          <span className="mono hidden text-ink/50 group-hover:text-ink/70 md:block">{project.category}</span>
          <span className="mono hidden text-ink/50 group-hover:text-ink/70 md:block">{project.year}</span>
          <span className="mono flex items-center justify-end gap-2 text-ink/40 group-hover:text-ink/70">
            {String(project.photoCount).padStart(2, "0")}
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </span>
        </Link>
      ))}

      <div
        className="pointer-events-none fixed z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        style={{ left: pos.x, top: pos.y }}
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              key={projects[active].slug}
              className="relative h-[280px] w-[210px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={projects[active].image}
                alt=""
                fill
                sizes="210px"
                className="object-cover"
              />
              <div className="absolute inset-0 border border-ink/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
