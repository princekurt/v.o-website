import type { SVGProps } from "react";

export function SunMark({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="20" cy="20" r="7" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * Math.PI) / 6;
        const round = (value: number) => Math.round(value * 1000) / 1000;
        const x1 = round(20 + Math.cos(angle) * 10.5);
        const y1 = round(20 + Math.sin(angle) * 10.5);
        const x2 = round(20 + Math.cos(angle) * 15.5);
        const y2 = round(20 + Math.sin(angle) * 15.5);
        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={index % 3 === 0 ? 2 : 1.2}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
