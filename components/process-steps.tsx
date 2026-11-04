import { process } from "@/app/content";

const timeline = ["Engagement", "Week 0", "Week 0—1", "Week 1—4", "Handover"];

export function ProcessSteps({ tone = "ink" }: { tone?: "ink" | "bone" }) {
  const dark = tone === "ink";

  return (
    <div
      className={`grid gap-px border sm:grid-cols-2 lg:grid-cols-5 ${
        dark ? "border-bone/15 bg-bone/15" : "border-ink/15 bg-ink/15"
      }`}
    >
      {process.map((step, index) => (
        <div key={step.step} className={`flex flex-col p-6 ${dark ? "bg-ink" : "bg-bone"}`}>
          <span className="mono text-amber">{step.step}</span>
          <h3 className={`poster mt-4 text-xl leading-none ${dark ? "text-bone" : "text-ink"}`}>{step.title}</h3>
          <p className={`mt-3 flex-1 text-sm leading-relaxed ${dark ? "text-bone/50" : "text-ink/55"}`}>
            {step.copy}
          </p>
          <span className={`mono mt-5 ${dark ? "text-bone/25" : "text-ink/30"}`}>{timeline[index]}</span>
        </div>
      ))}
    </div>
  );
}
