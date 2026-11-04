import Image from "next/image";
import Link from "next/link";

export type Service = {
  no: string;
  title: string;
  meta: string;
  copy: string;
  bullets: string[];
  image: string;
  href: string;
};

export function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.no}
          href={service.href}
          aria-label={`Learn more about ${service.title}`}
          className="group flex flex-col overflow-hidden border border-bone/15 bg-ink-2/60 transition-colors duration-300 hover:border-amber/60"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={service.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <span className="mono absolute left-4 top-4 border border-bone/25 bg-ink/40 px-2 py-1 text-bone/80 backdrop-blur">
              {service.no}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="mono text-amber">{service.meta}</p>
            <h3 className="poster mt-3 text-2xl">{service.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-bone/50">{service.copy}</p>

            <ul className="mt-5 grid gap-2 border-t border-bone/15 pt-4">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-sm text-bone/60">
                  <span className="text-amber">—</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <span className="mono mt-5 inline-flex items-center gap-2 text-amber">
              Explore service
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
