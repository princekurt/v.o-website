"use client";

import { useState } from "react";

const START = 5 * 60 + 42;
const END = 18 * 60 + 12;

const stars = [
  [8, 18], [16, 34], [24, 12], [32, 26], [41, 8], [48, 30], [56, 16], [63, 38],
  [71, 10], [78, 28], [86, 20], [93, 36], [12, 48], [37, 44], [68, 46], [90, 50],
];

function format(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function phaseFor(t: number) {
  if (t < 0.14) return { label: "First light", copy: "The array wakes before the office does." };
  if (t < 0.36) return { label: "Morning", copy: "Production climbs as the roof heats up." };
  if (t < 0.64) return { label: "Peak sun", copy: "Full harvest. The meter starts running backwards." };
  if (t < 0.86) return { label: "Afternoon", copy: "The load shifts, the array keeps working." };
  return { label: "Last light", copy: "Stored light takes over for the night." };
}

export function DayStudy() {
  const [value, setValue] = useState(50);
  const t = value / 100;
  const time = format(START + t * (END - START));
  const phase = phaseFor(t);

  const cx = 400;
  const cy = 330;
  const radius = 300;
  const angle = Math.PI - t * Math.PI;
  const sunX = cx + Math.cos(angle) * radius;
  const sunY = cy - Math.sin(angle) * radius;

  const dawnOpacity = Math.max(0, 1 - t * 2.6);
  const noonOpacity = Math.max(0, 1 - Math.abs(t - 0.5) * 2.4);
  const duskOpacity = Math.max(0, (t - 0.55) * 2.4);
  const starOpacity = Math.max(0, (0.1 - t) * 6) + Math.max(0, (t - 0.92) * 8);

  return (
    <section id="day" className="relative isolate overflow-hidden bg-ink text-bone">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: dawnOpacity,
            background: "radial-gradient(circle at 18% 85%, rgba(255,120,70,0.45), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: noonOpacity,
            background: "radial-gradient(circle at 50% 15%, rgba(96,164,255,0.32), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: duskOpacity,
            background: "radial-gradient(circle at 82% 80%, rgba(255,98,42,0.4), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 transition-opacity duration-300" style={{ opacity: starOpacity }}>
          {stars.map(([x, y], index) => (
            <span
              key={index}
              className="absolute h-[2px] w-[2px] rounded-full bg-bone/80"
              style={{ left: `${x}%`, top: `${y}%` }}
            />
          ))}
        </div>
      </div>

      <div className="container-x section-pad">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-bone/20 pb-4">
          <p className="mono text-amber">03 / One day</p>
          <p className="mono text-bone/40">Latitude 7.19° N · Mindanao</p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <h2 className="poster text-[clamp(2.6rem,6vw,5.5rem)]">
              A solar system
              <br />
              <span className="editorial text-amber">is a clock.</span>
            </h2>

            <div className="mt-10 flex items-baseline gap-4">
              <p className="poster text-[clamp(3.4rem,7vw,6rem)] text-bone">{time}</p>
              <p className="mono text-amber">{phase.label}</p>
            </div>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-bone/60">{phase.copy}</p>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <span className="mono text-bone/40">05:42 — first light</span>
                <span className="mono text-bone/40">18:12 — last light</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(event) => setValue(Number(event.target.value))}
                className="sun-range mt-4"
                aria-label="Scrub the sun across the day"
              />
              <p className="mono mt-4 text-bone/30">Drag the sun · the page follows</p>
            </div>
          </div>

          <div className="relative">
            <svg viewBox="0 0 800 400" className="w-full" role="img" aria-label="Sun path across the sky">
              <line x1="40" y1="330" x2="760" y2="330" stroke="rgba(233,227,214,0.25)" strokeWidth="1" />
              <path
                d="M 100 330 A 300 300 0 0 1 700 330"
                fill="none"
                stroke="rgba(233,227,214,0.18)"
                strokeWidth="1"
                strokeDasharray="2 7"
              />
              <path
                d="M 100 330 A 300 300 0 0 1 700 330"
                fill="none"
                stroke="#FFB000"
                strokeWidth="2"
                pathLength={1}
                strokeDasharray="1"
                strokeDashoffset={1 - t}
              />
              <line
                x1={sunX}
                y1={sunY}
                x2={sunX}
                y2="330"
                stroke="rgba(255,176,0,0.35)"
                strokeWidth="1"
                strokeDasharray="3 6"
              />
              <circle cx={sunX} cy={sunY} r="26" fill="rgba(255,176,0,0.14)" />
              <circle cx={sunX} cy={sunY} r="12" fill="#FFB000" />
              <text x="100" y="372" textAnchor="middle" className="fill-bone/40 font-mono text-[10px] tracking-[0.2em]">
                05:42
              </text>
              <text x="400" y="372" textAnchor="middle" className="fill-bone/40 font-mono text-[10px] tracking-[0.2em]">
                12:00
              </text>
              <text x="700" y="372" textAnchor="middle" className="fill-bone/40 font-mono text-[10px] tracking-[0.2em]">
                18:12
              </text>
            </svg>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "First light", value: 0 },
                { label: "Peak sun", value: 50 },
                { label: "Last light", value: 100 },
              ].map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setValue(preset.value)}
                  className={`mono border px-3 py-3 transition ${
                    value === preset.value
                      ? "border-amber bg-amber text-ink"
                      : "border-bone/20 text-bone/50 hover:border-bone/50 hover:text-bone"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
