"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { GalleryProject } from "@/lib/projects";
import { ProjectLightbox } from "./project-gallery";
import { SpotlightCard } from "./SpotlightCard";

function shortestOffset(index: number, active: number, total: number) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

export function FannedProjectGallery({ projects }: { projects: GalleryProject[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [modal, setModal] = useState<GalleryProject | null>(null);
  const reduceMotion = useReducedMotion();
  if (!projects.length) return null;
  const select = (index: number) => setActive((index + projects.length) % projects.length);

  return <div className="fan-gallery relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center overflow-x-clip">
    <div className="fan-stage relative mx-auto flex h-[620px] w-full items-center justify-center sm:h-[740px] lg:h-[820px]" style={{ perspective: "1200px" }}>
      {projects.map((project, index) => {
        const offset = shortestOffset(index, active, projects.length);
        const distance = Math.abs(offset);
        const isActive = distance === 0;
        const isHovered = hovered === index;
        const y = isHovered ? -72 : isActive ? -54 : -6 + (distance - 1) * 14;

        // The outer element owns absolute centering; Motion only animates the inner card.
        // This prevents animated transforms from replacing translateX(-50%).
        return <div key={project.slug} className="absolute left-1/2 top-[43%] h-[440px] w-[310px] -translate-x-1/2 -translate-y-1/2 sm:h-[500px] sm:w-[360px] lg:h-[560px] lg:w-[400px]" style={{ zIndex: isHovered ? 50 : 30 - distance }}>
          <motion.div onHoverStart={() => setHovered(index)} onHoverEnd={() => setHovered(null)} className="h-full w-full" initial={false} animate={reduceMotion ? {} : { x: offset * 245, y, rotateZ: isHovered ? 0 : offset * 12, scale: isHovered ? 1.08 : isActive ? 1.05 : Math.max(.78, .92 - (distance - 1) * .07), opacity: distance > 2 ? 0 : 1 }} transition={{ type: "spring", stiffness: 300, damping: 22, mass: .8 }} style={{ transformOrigin: "50% 100%" }}>
            <SpotlightCard className={`group h-full w-full overflow-hidden rounded-[32px] border border-white/15 bg-slate-950 shadow-2xl shadow-slate-950/40 transition-shadow duration-300 ${isHovered ? "shadow-[0_20px_50px_rgba(14,165,233,0.3)]" : ""} ${isActive ? "cursor-zoom-in" : "cursor-pointer"}`}>
              <button className="relative h-full w-full text-left" onClick={() => isActive ? setModal(project) : setActive(index)} aria-label={isActive ? `Open ${project.title} photo gallery` : `Show ${project.title}`}>
                <Image src={project.image} alt={project.title} fill priority={index === 0} sizes="(min-width: 1024px) 400px, 310px" className="object-cover transition duration-500 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/5 to-transparent" />
                <div className="glass-panel absolute inset-x-3 bottom-3 rounded-2xl p-3 text-white sm:inset-x-4 sm:bottom-4 sm:p-4"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-sky-300">{project.category}</p><h3 className="display mt-1 text-xl font-extrabold leading-tight sm:text-2xl">{project.title}</h3>{isActive && <p className="mt-2 text-xs font-semibold text-amber-300">View {project.images.length} project photos →</p>}</div>
              </button>
            </SpotlightCard>
          </motion.div>
        </div>;
      })}
    </div>
    <div className="relative z-40 -mt-6 flex items-center justify-center gap-2">{projects.map((project, index) => <button key={project.slug} onClick={() => select(index)} aria-label={`Show ${project.title}`} className={`h-2.5 rounded-full transition-all ${active === index ? "w-9 bg-amber-400" : "w-2.5 bg-slate-400 hover:bg-slate-600"}`} />)}</div>
    <AnimatePresence>{modal && <ProjectLightbox project={modal} close={() => setModal(null)} />}</AnimatePresence>
  </div>;
}
