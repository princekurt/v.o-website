type Faq = { q: string; a: string };

export function FaqList({ items, tone = "ink" }: { items: Faq[]; tone?: "ink" | "bone" }) {
  const border = tone === "bone" ? "border-bone/15" : "border-ink/15";
  const indexColor = tone === "bone" ? "text-bone/30" : "text-ink/30";
  const questionColor = tone === "bone" ? "text-bone" : "text-ink";
  const answerColor = tone === "bone" ? "text-bone/60" : "text-ink/60";
  const plusColor = tone === "bone" ? "text-bone/40" : "text-ink/40";

  return (
    <div>
      {items.map((faq, index) => (
        <details key={faq.q} className={`group border-t last:border-b ${border}`}>
          <summary className="flex items-start justify-between gap-6 py-5">
            <span className="flex gap-4">
              <span className={`mono pt-1 ${indexColor}`}>{String(index + 1).padStart(2, "0")}</span>
              <span className={`text-base font-semibold md:text-lg ${questionColor}`}>{faq.q}</span>
            </span>
            <span className={`text-2xl leading-none transition-transform duration-300 group-open:rotate-45 ${plusColor}`}>+</span>
          </summary>
          <p className={`max-w-2xl pb-5 pl-9 pr-8 text-sm leading-relaxed ${answerColor}`}>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
