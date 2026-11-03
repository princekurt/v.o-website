"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/app/content";
import { SunMark } from "./sun-mark";

const menuItems = [
  { no: "01", label: "The work", href: "/#work" },
  { no: "02", label: "Capabilities", href: "/#capabilities" },
  { no: "03", label: "Process", href: "/#process" },
  { no: "04", label: "Archive", href: "/projects" },
  { no: "05", label: "Stockroom", href: "/#stockroom" },
  { no: "06", label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 160 && y > last) setHidden(true);
      else if (y < last - 4) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 mix-blend-difference text-white transition-transform duration-500 ease-out ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container-x flex h-[76px] items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3" aria-label="V.O Electrical Lights Trading home">
            <SunMark className="h-7 w-7" />
            <span className="mono hidden sm:block">V.O Electrical</span>
          </a>

          <p className="mono hidden text-white/60 lg:block">Solar · Electrical · Lighting — Philippines</p>

          <div className="flex items-center gap-5">
            <a href={`tel:${site.phone}`} className="mono hidden md:block">
              {site.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mono group flex items-center gap-2.5"
              aria-label="Open menu"
            >
              Menu
              <span className="flex w-5 flex-col gap-[5px]">
                <span className="h-px w-full bg-current transition-all group-hover:w-3" />
                <span className="h-px w-full bg-current transition-all group-hover:w-4" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-ink text-bone"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-x flex h-[76px] shrink-0 items-center justify-between border-b border-bone/10">
              <div className="flex items-center gap-3">
                <SunMark className="h-7 w-7 text-amber" />
                <span className="mono">V.O Electrical</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mono flex items-center gap-2.5"
                aria-label="Close menu"
                autoFocus
              >
                Close
                <span className="relative h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <nav className="container-x flex flex-1 flex-col justify-center py-10">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-5 border-b border-bone/10 py-4 md:gap-8"
                >
                  <span className="mono text-amber">{item.no}</span>
                  <span className="poster text-[clamp(2.4rem,7vw,6.5rem)] transition-colors duration-300 group-hover:text-amber">
                    {item.label}
                  </span>
                  <span className="ml-auto hidden text-3xl text-bone/30 transition group-hover:translate-x-2 group-hover:text-amber md:block">
                    ↗
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="container-x grid shrink-0 gap-4 border-t border-bone/10 py-6 sm:grid-cols-2 lg:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <a href={`tel:${site.phone}`} className="mono hover:text-amber">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="mono hover:text-amber">
                {site.email}
              </a>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="mono hover:text-amber">
                Facebook ↗
              </a>
              <p className="mono text-bone/40">Philippines · PHT</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
