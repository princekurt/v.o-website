import Link from "next/link";

export function CtaBand({
  title,
  copy,
  primaryLabel = "Start a project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  copy: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-amber text-ink">
      <div className="container-x section-pad flex flex-wrap items-end justify-between gap-10">
        <h2 className="poster max-w-[14ch] text-[clamp(2.4rem,5.5vw,5.5rem)]">{title}</h2>
        <div className="max-w-sm">
          <p className="text-sm leading-relaxed text-ink/70">{copy}</p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <Link href={primaryHref} className="btn-ink">
              {primaryLabel} ↗
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link href={secondaryHref} className="link-arrow text-ink">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
