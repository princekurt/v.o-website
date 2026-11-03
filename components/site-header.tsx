"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/app/content";
import { SunMark } from "./sun-mark";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Process", href: "/#process" },
  { label: "Stockroom", href: "/#stockroom" },
  { label: "About", href: "/#crew" },
];

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
      if (y > 180 && y > last) setHidden(true);
      else if (y < last - 6) setHidden(false);
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
        className={`fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/85 backdrop-blur-xl transition-transform duration-500 ease-out ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="V.O Electrical Lights Trading home">
            <SunMark className="h-6 w-6 text-amber" />
            <span className="leading-tight">
              <span className="block text-[13px] font-semibold tracking-tight text-bone">V.O Electrical</span>
              <span className="mono block text-[9px] text-bone/40">Lights Trading</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-bone/60 transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${site.phone}`} className="mono hidden text-bone/50 transition-colors hover:text-bone xl:block">
              {site.phoneDisplay}
            </a>
            <a
              href="/#contact"
              className="mono hidden border border-bone/30 px-4 py-2.5 text-bone transition-colors hover:border-amber hover:bg-amber hover:text-ink sm:inline-flex"
            >
              Start a project
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mono flex items-center gap-2.5 border border-bone/25 px-3.5 py-2.5 text-bone/80 transition-colors hover:border-bone/60 hover:text-bone lg:hidden"
              aria-label="Open menu"
            >
              Menu
              <span className="flex w-4 flex-col gap-[4px]">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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

            <nav className="container-x flex flex-1 flex-col justify-center py-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.04 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-4 border-b border-bone/10 py-4"
                >
                  <span className="mono text-amber">{item.no}</span>
                  <span className="poster text-[clamp(2rem,7vw,4.5rem)] transition-colors group-hover:text-amber">
                    {item.label}
                  </span>
                  <span className="ml-auto text-2xl text-bone/25 transition group-hover:translate-x-1 group-hover:text-amber">
                    ↗
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="container-x grid shrink-0 gap-4 border-t border-bone/10 py-6 sm:grid-cols-2 lg:grid-cols-4">
              <a href={`tel:${site.phone}`} className="mono text-bone/60 hover:text-amber">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="mono text-bone/60 hover:text-amber">
                {site.email}
              </a>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="mono text-bone/60 hover:text-amber">
                Facebook ↗
              </a>
              <p className="mono text-bone/30">Philippines · PHT</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
