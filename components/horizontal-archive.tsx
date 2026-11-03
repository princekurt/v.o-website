"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { GalleryProject } from "@/lib/projects";

export function HorizontalArchive({ projects, totalPhotos }: { projects: GalleryProject[]; totalPhotos: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [maxX, setMaxX] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const measure = () => {
      if (!trackRef.current) return;
      setMaxX(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    const timer = window.setTimeout(measure, 400);
    return () => {
      window.removeEventListener("resize", measure);
      window.clearTimeout(timer);
    };
  }, [isDesktop]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -maxX]);
  const x = useSpring(xRaw, { stiffness: 120, damping: 30, mass: 0.4 });

  const pinned = isDesktop && !reduce;

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`relative bg-bone text-ink ${pinned ? "lg:h-[320vh]" : ""}`}
    >
      <div
        className={`flex flex-col justify-center overflow-hidden ${
          pinned ? "lg:sticky lg:top-0 lg:h-screen" : "py-20 md:py-28"
        }`}
      >
        <div className="container-x flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mono text-amber-deep">04 / Selected work</p>
            <h2 className="poster mt-4 text-[clamp(2.6rem,6vw,5.5rem)]">
              Proof, not
              <br />
              <span className="editorial">promises.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm leading-relaxed text-ink/60">
              Rooftops, farms, street lights, and substations. Every image is from our own project
              files — no stock photography.
            </p>
            <p className="mono mt-4 text-ink/40">{pinned ? "Scroll to travel →" : "Swipe →"}</p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto no-scrollbar lg:overflow-visible">
          <motion.div
            ref={trackRef}
            style={pinned ? { x } : undefined}
            className="flex w-max items-start gap-4 px-[clamp(1.25rem,4vw,4.5rem)]"
          >
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative block w-[78vw] shrink-0 sm:w-[52vw] lg:w-[clamp(300px,24vw,380px)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-ink-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 380px, 78vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-60" />
                  <span className="mono absolute left-4 top-4 text-bone/80">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mono absolute right-4 top-4 border border-bone/30 bg-ink/40 px-2 py-1 text-bone backdrop-blur">
                    {project.year}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mono text-ink/40">{project.category}</p>
                    <h3 className="poster mt-1 text-2xl leading-none">{project.title}</h3>
                  </div>
                  <span className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </Link>
            ))}

            <Link
              href="/projects"
              className="flex aspect-[3/4] w-[78vw] shrink-0 flex-col justify-between bg-amber p-6 text-ink sm:w-[52vw] lg:w-[clamp(300px,24vw,380px)]"
            >
              <span className="mono">The archive</span>
              <div>
                <p className="poster text-[clamp(2rem,4vw,3.4rem)] leading-[0.9]">
                  {totalPhotos}
                  <br />
                  photographs.
                </p>
                <span className="mono mt-6 inline-flex items-center gap-2 border-b border-ink pb-1">
                  Open everything ↗
                </span>
              </div>
            </Link>
          </motion.div>
        </div>

        {pinned && (
          <div className="container-x mt-10 hidden lg:block">
            <div className="h-px w-full bg-ink/15">
              <motion.div style={{ scaleX: scrollYProgress }} className="h-px origin-left bg-ink" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
