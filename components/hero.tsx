"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SunMark } from "./sun-mark";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Manila",
        }).format(new Date()),
      );
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section ref={ref} id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-bone">
      <motion.div style={reduce ? {} : { y }} className="absolute inset-x-0 -top-24 -bottom-24 -z-10">
        <Image
          src="/archive/solar-powered-irrigation/01.webp"
          alt="Ground-mounted solar array between palm trees under a wide Philippine sky"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/30 to-transparent" />
      </motion.div>

      <div className="container-x relative flex min-h-[100svh] flex-col justify-between pb-24 pt-28 md:pb-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <p className="mono leading-relaxed text-bone/60">
            V.O Electrical Lights Trading
            <br />
            Philippines
          </p>
          <p className="mono hidden text-center leading-relaxed text-bone/60 md:block">
            Field records
            <br />
            2023—2025
          </p>
          <p className="mono text-right leading-relaxed text-bone/60">
            {time} PHT
            <br />
            Solar · Electrical
          </p>
        </div>

        <div className="mt-12">
          <motion.h1
            className="poster text-[clamp(3.6rem,min(16vw,20vh),16rem)] leading-[0.84]"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="block">The sun</span>
            <span className="editorial block pb-[0.2em] pl-[0.04em] text-[1.02em] text-amber">works</span>
            <span className="block">here.</span>
          </motion.h1>
        </div>

        <div className="mt-12 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="mono flex items-center gap-3 text-bone/50">
              <span className="h-10 w-px bg-amber" />
              Scroll to harvest
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-bone/70 lg:col-span-5 lg:text-base">
            We design, supply, and install solar for homes, farms, and businesses — and keep the
            electrical stockroom behind it. Real installations, documented in our own photographs.
          </p>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <a href="#contact" className="btn-amber">
              Start a project ↗
            </a>
            <a href="#work" className="btn-bone">
              See the work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-[10vw] top-[24%] hidden xl:block">
        <div className="relative grid h-44 w-44 place-items-center">
          <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full">
            <defs>
              <path id="hero-circle" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
            </defs>
            <text className="fill-bone/50 font-mono text-[8px] uppercase tracking-[0.28em]">
              <textPath href="#hero-circle">
                SOLAR INSTALLATION · ELECTRICAL SUPPLY · STREET LIGHTING ·
              </textPath>
            </text>
          </svg>
          <SunMark className="h-14 w-14 text-amber" />
        </div>
        <p className="mono mt-4 text-center text-bone/40">Fig. 01</p>
      </div>
    </section>
  );
}
