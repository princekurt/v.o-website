"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export type Photo = {
  src: string;
  alt: string;
  title?: string;
  meta?: string;
};

const ratios = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[4/3]", "aspect-[5/6]"];

export function PhotoGrid({
  photos,
  columns = "columns-2 gap-3 md:columns-3 lg:columns-4",
}: {
  photos: Photo[];
  columns?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const close = () => setOpen(null);
  const step = (delta: number) =>
    setOpen((value) => (value === null ? value : (value + delta + photos.length) % photos.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  const current = open === null ? null : photos[open];

  return (
    <>
      <div className={columns}>
        {photos.map((photo, index) => (
          <button
            key={`${photo.src}-${index}`}
            type="button"
            onClick={() => setOpen(index)}
            className={`group relative mb-3 block w-full break-inside-avoid overflow-hidden bg-ink text-left ${ratios[index % ratios.length]}`}
            aria-label={`Open ${photo.title ?? "photo"} ${index + 1}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-3 bottom-3 translate-y-2 text-bone opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="mono text-amber">{String(index + 1).padStart(2, "0")}</p>
              {photo.title && <p className="mt-1 text-sm font-semibold leading-tight">{photo.title}</p>}
              {photo.meta && <p className="mono mt-1 text-bone/60">{photo.meta}</p>}
            </div>
            <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center border border-bone/40 text-bone opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              ↗
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[90] grid bg-ink/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <motion.div
              className="relative m-auto w-full max-w-6xl px-4 pb-4 pt-16"
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? {} : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[72vh] w-full bg-ink-2">
                <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
              </div>

              <div className="mt-4 flex items-end justify-between gap-4 text-bone">
                <div>
                  <p className="mono text-amber">{current.meta ?? "Field record"}</p>
                  {current.title && <p className="mt-1 text-lg font-semibold">{current.title}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <span className="mono mr-3 text-bone/40">
                    {String((open ?? 0) + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="grid h-11 w-11 place-items-center border border-bone/30 transition hover:border-amber hover:text-amber"
                    aria-label="Previous photo"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="grid h-11 w-11 place-items-center border border-bone/30 transition hover:border-amber hover:text-amber"
                    aria-label="Next photo"
                  >
                    →
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={close}
                className="mono absolute right-4 top-4 flex items-center gap-2 text-bone/70 transition hover:text-amber"
              >
                Close
                <span className="relative h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
