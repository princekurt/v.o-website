"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SunMark } from "./sun-mark";

const START = 5 * 60; // 05:00
const END = 19 * 60; // 19:00
const NOON = 12 * 60;

function format(total: number) {
  const hours = Math.floor(total / 60);
  const minutes = Math.round(total % 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function phaseFor(t: number) {
  if (t < 0.12) return { label: "First light", copy: "The array starts producing before the working day begins." };
  if (t < 0.34) return { label: "Morning", copy: "Output climbs as the sun clears the horizon." };
  if (t < 0.62) return { label: "Peak sun", copy: "Full harvest. The meter turns and the savings start." };
  if (t < 0.86) return { label: "Afternoon", copy: "Loads peak across the site; the array keeps working." };
  return { label: "Last light", copy: "Stored energy takes over for the evening." };
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const [minutes, setMinutes] = useState(START + 40);
  const interacted = useRef(false);

  // Sunrise sweep on first load, then hand over to the slider.
  useEffect(() => {
    if (reduce) {
      setMinutes(NOON);
      return;
    }
    let frame = 0;
    const from = START + 20;
    const to = NOON;
    const duration = 2600;
    const begin = performance.now();
    const step = (now: number) => {
      if (interacted.current) return;
      const progress = Math.min(1, (now - begin) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setMinutes(from + (to - from) * eased);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [reduce]);

  const t = Math.min(1, Math.max(0, (minutes - START) / (END - START)));
  const phase = phaseFor(t);
  const elevation = Math.sin(Math.PI * t);

  const sunX = 50 + t * 40;
  const sunY = 56 - elevation * 34;
  const sunScale = 0.85 + (1 - elevation) * 0.3;

  const dawn = Math.max(0, 1 - t * 2.6);
  const noon = Math.max(0, 1 - Math.abs(t - 0.5) * 2.2);
  const dusk = Math.max(0, (t - 0.54) * 2.4);
  const warm = Math.max(dawn, dusk);

  const brightness = 0.72 + elevation * 0.26;
  const saturation = 0.92 + elevation * 0.18;

  const setFromInput = (value: number) => {
    interacted.current = true;
    setMinutes(value);
  };

  return (
    <section ref={ref} id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-bone">
      {/* Photograph */}
      <motion.div style={reduce ? {} : { y }} className="absolute inset-x-0 -top-14 -bottom-14">
        <Image
          src="/hero/solar-field.jpg"
          alt="Ground-mounted solar array in a field under a wide blue sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_58%]"
          style={{ filter: `brightness(${brightness}) saturate(${saturation}) contrast(1.04)` }}
        />
      </motion.div>

      {/* Time-of-day tint */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: dawn,
          background: "linear-gradient(180deg, rgba(255,138,72,.5), rgba(255,92,60,.16) 46%, transparent 78%)",
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: noon, background: "linear-gradient(180deg, rgba(96,156,255,.22), transparent 62%)" }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: dusk,
          background: "linear-gradient(180deg, rgba(255,104,40,.5), rgba(112,40,92,.24) 52%, transparent 82%)",
        }}
      />

      {/* Scrims for legibility */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,9,.74),rgba(6,7,9,.16)_30%,rgba(6,7,9,.34)_62%,rgba(6,7,9,.92))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,9,.84),rgba(6,7,9,.32)_46%,transparent_72%)]" />

      {/* Light sweep across the scene */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background-position] duration-500"
        style={{
          background: "linear-gradient(105deg, transparent 34%, rgba(255,236,196,.22) 50%, transparent 66%)",
          backgroundSize: "240% 100%",
          backgroundPosition: `${(1 - t) * 100}% 0`,
          mixBlendMode: "screen",
          opacity: 0.55,
        }}
      />

      {/* Warm cast when the sun is low */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: warm * 0.5,
          background: "radial-gradient(120% 80% at 50% 110%, rgba(255,140,50,.5), transparent 62%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Light wrap around the sun */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: 0.3 + warm * 0.55,
          background: `radial-gradient(46vw 46vw at ${sunX}% ${sunY}%, rgba(255,196,120,.34), rgba(255,144,52,.12) 46%, transparent 72%)`,
          mixBlendMode: "screen",
        }}
      />

      {/* Reflection on the panels */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 transition-opacity duration-500"
        style={{
          background: `radial-gradient(55% 70% at ${sunX}% 104%, rgba(255,186,60,.28), transparent 70%)`,
          mixBlendMode: "screen",
          opacity: 0.32 + elevation * 0.28,
        }}
      />

      {/* Sun bloom */}
      <div
        className="pointer-events-none absolute transition-[left,top] duration-300 ease-out"
        style={{ left: `${sunX}%`, top: `${sunY}%` }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "48rem",
            height: "48rem",
            background: "radial-gradient(circle, rgba(255,170,60,.55), rgba(255,132,32,.2) 38%, transparent 68%)",
            mixBlendMode: "screen",
            filter: "blur(26px)",
            opacity: 0.55 + elevation * 0.35,
          }}
        />
      </div>

      {/* Horizontal flare */}
      <div
        className="pointer-events-none absolute transition-[left,top,opacity] duration-300"
        style={{ left: `${sunX}%`, top: `${sunY}%`, opacity: 0.3 + elevation * 0.15 }}
        aria-hidden="true"
      >
        <div
          className="h-[2px] w-[54vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,220,150,.55), transparent)",
            filter: "blur(2px)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Sun disc + rays */}
      <div
        className="pointer-events-none absolute transition-[left,top] duration-300 ease-out"
        style={{ left: `${sunX}%`, top: `${sunY}%` }}
        aria-hidden="true"
      >
        <div className="relative" style={{ transform: `translate(-50%, -50%) scale(${sunScale})` }}>
          <div
            className="spin-slow absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "repeating-conic-gradient(from 0deg, rgba(255,214,150,.45) 0deg 0.45deg, transparent 0.45deg 7deg)",
              WebkitMaskImage: "radial-gradient(circle, #000 0%, transparent 58%)",
              maskImage: "radial-gradient(circle, #000 0%, transparent 58%)",
              mixBlendMode: "screen",
              filter: "blur(2px)",
              opacity: 0.16 + elevation * 0.2,
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,205,110,.5), rgba(255,160,40,.18) 45%, transparent 72%)",
              filter: "blur(14px)",
              mixBlendMode: "screen",
            }}
          />
          <div
            className="h-14 w-14 rounded-full md:h-20 md:w-20"
            style={{
              background:
                "radial-gradient(circle, #fffdf6 0%, #fff3cf 14%, #ffe3a0 32%, #ffc85a 52%, rgba(255,160,40,.45) 74%, transparent 100%)",
              filter: "blur(5px)",
            }}
          />
          <div
            className="absolute h-3 w-3 rounded-full"
            style={{ transform: "translate(-7rem, 5rem)", background: "rgba(255,200,100,.16)", filter: "blur(3px)" }}
          />
          <div
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{ transform: "translate(-13rem, 9rem)", background: "rgba(255,200,100,.2)", filter: "blur(2px)" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container-x relative z-10 flex min-h-[100svh] flex-col pb-24 pt-24 md:pb-10 md:pt-28">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <p className="mono leading-relaxed text-bone/70 [text-shadow:0_1px_10px_rgba(0,0,0,.55)]">
            Villanueva Ong Electrical
            <br />
            Lights Trading · Philippines
          </p>
          <p className="mono hidden text-center leading-relaxed text-bone/70 [text-shadow:0_1px_10px_rgba(0,0,0,.55)] md:block">
            Field records
            <br />
            2023—2025
          </p>
          <p className="mono text-right leading-relaxed text-bone/70 [text-shadow:0_1px_10px_rgba(0,0,0,.55)]">
            Solar · Electrical
            <br />
            Nationwide delivery
          </p>
        </div>

        <h1 className="poster mt-auto pt-[clamp(3rem,13vh,9rem)] text-[clamp(3.2rem,11.8vw,11.8rem)] leading-[0.84]">
          <span className="block">The sun</span>
          <span className="block text-amber">works</span>
          <span className="block">here.</span>
        </h1>

        <div className="mt-8 grid items-end gap-8 border-t border-bone/20 pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:gap-12">
          <div className="order-last lg:order-none">
            <p className="max-w-[46ch] text-sm leading-relaxed text-bone/75 md:text-base">
              We design, supply, and install solar for homes, farms, businesses, and government
              projects — with the electrical stockroom and lighting behind every job.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn-amber">
                Start a project ↗
              </a>
              <a href="#work" className="btn-bone">
                See the work
              </a>
            </div>

            <ul className="mono mt-6 flex flex-wrap gap-x-5 gap-y-2 text-bone/55">
              {["DOE-certified PV installer", "Private & government", "Supply · Delivery · Installation"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-sun order-first w-full lg:order-none lg:border-l lg:border-bone/25 lg:pl-8">
            <div className="flex items-baseline justify-between gap-3">
              <span className="mono text-bone/60">Sun study</span>
              <span className="flex items-center gap-2">
                <SunMark className="h-4 w-4 text-amber" />
                <span className="font-mono text-lg text-amber" style={{ textShadow: "0 0 22px rgba(255,176,0,.45)" }}>
                  {format(minutes)}
                </span>
              </span>
            </div>

            <input
              type="range"
              min={START}
              max={END}
              step={5}
              value={Math.round(minutes)}
              onChange={(event) => setFromInput(Number(event.target.value))}
              onPointerDown={() => {
                interacted.current = true;
              }}
              className="hero-range mt-1"
              aria-label="Change the time of day in the hero solar field"
              aria-valuetext={`${format(minutes)} — drag to move the sun`}
            />

            <div className="mono flex items-center justify-between !text-[10px] text-bone/45">
              <span>05:00</span>
              <span className="text-amber">Drag to move the sun</span>
              <span>19:00</span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-bone/55">
              <span className="font-semibold text-bone/80">{phase.label}.</span> {phase.copy}
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="mono !text-[9px] text-bone/40">Scroll</span>
        <span className="h-9 w-px bg-gradient-to-b from-amber to-transparent" />
      </div>
    </section>
  );
}
