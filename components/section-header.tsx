import type { ReactNode } from "react";

type Tone = "ink" | "bone" | "amber";

export function SectionHeader({
  index,
  label,
  title,
  copy,
  tone = "ink",
  right,
}: {
  index: string;
  label: string;
  title: ReactNode;
  copy?: ReactNode;
  tone?: Tone;
  right?: ReactNode;
}) {
  const border = tone === "bone" ? "border-bone/15" : "border-ink/15";
  const muted = tone === "bone" ? "text-bone/40" : "text-ink/40";
  const heading = tone === "bone" ? "text-bone" : "text-ink";
  const body = tone === "bone" ? "text-bone/55" : "text-ink/55";

  return (
    <div>
      <div className={`mono flex flex-wrap items-center justify-between gap-3 border-t pt-4 ${border} ${muted}`}>
        <span>
          {index} / {label}
        </span>
        <span className="ml-auto">{right ?? "V.O Electrical"}</span>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-12 md:gap-8">
        <h2 className={`poster md:col-span-7 text-[clamp(2rem,4.3vw,4.1rem)] ${heading}`}>{title}</h2>
        {copy && (
          <p className={`max-w-sm self-end text-sm leading-relaxed md:col-span-4 md:col-start-9 ${body}`}>
            {copy}
          </p>
        )}
      </div>
    </div>
  );
}
