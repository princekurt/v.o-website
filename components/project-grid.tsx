import Image from "next/image";
import Link from "next/link";
import type { GalleryProject } from "@/lib/projects";

export function ProjectGrid({ projects }: { projects: GalleryProject[] }) {
  return (
    <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-2">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="mono absolute left-3 top-3 border border-bone/25 bg-ink/45 px-2 py-1 text-bone/80 backdrop-blur">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-4 flex items-start justify-between gap-4">
            <div>
              <p className="mono text-ink/55">
                {project.category} · {project.year}
              </p>
              <h3 className="poster mt-1.5 text-xl leading-none">{project.title}</h3>
            </div>
            <span className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
