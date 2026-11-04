import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Stat = { value: string; label: string };

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt = "",
  imagePosition,
  breadcrumb,
  stats,
  actions,
  size = "lg",
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  breadcrumb: string;
  stats?: Stat[];
  actions?: ReactNode;
  size?: "lg" | "md";
}) {
  return (
    <section className="relative overflow-hidden border-b border-bone/10 bg-ink text-bone">
      <div className="container-x pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="mono flex items-center gap-2 text-bone/35">
          <Link href="/" className="transition-colors hover:text-bone">
            Home
          </Link>
          <span>/</span>
          <span className="text-bone/60">{breadcrumb}</span>
        </div>

        <div className={`mt-10 grid gap-10 ${image ? "lg:grid-cols-[1.1fr_.9fr] lg:items-end" : ""}`}>
          <div>
            <p className="mono text-amber">{eyebrow}</p>
            <h1
              className={`poster mt-4 ${
                size === "md" ? "text-[clamp(2.2rem,4.8vw,4.8rem)]" : "text-[clamp(2.5rem,6vw,6rem)]"
              }`}
            >
              {title}
            </h1>
            {copy && <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/60">{copy}</p>}
            {actions && <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>}

            {stats && stats.length > 0 && (
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-bone/15 pt-5">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="poster text-2xl leading-none text-bone md:text-3xl">{stat.value}</dt>
                    <dd className="mono mt-2 text-bone/40">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          {image && (
            <div className="relative aspect-[4/3] overflow-hidden bg-ink-2">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
                style={{ objectPosition: imagePosition ?? "50% 50%" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
