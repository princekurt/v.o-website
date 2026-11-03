import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PhotoGrid } from "@/components/photo-grid";

export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | V.O Electrical Lights Trading`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projects = getProjects();
  const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];

  const facts = [
    { label: "Year", value: `${project.year}` },
    { label: "Discipline", value: project.category },
    ...(project.capacity ? [{ label: "Capacity", value: project.capacity }] : []),
    ...(project.client ? [{ label: "Client", value: project.client }] : []),
    { label: "Photographs", value: String(project.photoCount).padStart(2, "0") },
    ...(project.location ? [{ label: "Location", value: project.location }] : []),
  ];

  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <section className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-ink pb-10 pt-32 text-bone">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

        <div className="container-x">
          <div className="flex flex-wrap items-center gap-4 border-b border-bone/20 pb-4">
            <Link href="/projects" className="mono text-bone/50 transition hover:text-amber">
              ← Field records
            </Link>
            <span className="mono text-amber">{project.category}</span>
            <span className="mono text-bone/40">{project.year}</span>
            <span className="mono ml-auto text-bone/40">
              {String(project.photoCount).padStart(2, "0")} photographs
            </span>
          </div>

          <h1 className="poster mt-8 max-w-[16ch] text-[clamp(2.8rem,8.5vw,9rem)]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/65">{project.summary}</p>
        </div>
      </section>

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="mono text-amber-deep">The project</p>
              <p className="mt-5 max-w-2xl text-[clamp(1.3rem,2.2vw,2rem)] leading-snug">
                {project.description}
              </p>
            </div>

            <dl className="self-start">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-6 border-t border-ink/20 py-3 last:border-b">
                  <dt className="mono text-ink/40">{fact.label}</dt>
                  <dd className="text-right text-sm font-semibold md:text-base">{fact.value}</dd>
                </div>
              ))}
              <a href="/#contact" className="btn-ink mt-8">
                Ask about a similar build ↗
              </a>
            </dl>
          </div>

          <div className="mt-16">
            <div className="mb-6 flex items-end justify-between border-b border-ink/20 pb-3">
              <p className="mono text-ink/40">Photographs</p>
              <p className="mono text-ink/40">On site</p>
            </div>
            <PhotoGrid
              columns="columns-1 gap-3 sm:columns-2 lg:columns-3"
              photos={project.images.map((src, index) => ({
                src,
                alt: `${project.title} — photograph ${index + 1}`,
                title: project.title,
                meta: `${project.category} · ${project.year}`,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-x section-pad">
          <p className="mono text-amber">Next record</p>
          <Link href={`/projects/${next.slug}`} className="group mt-6 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="poster text-[clamp(2.4rem,7vw,7rem)] transition-colors duration-300 group-hover:text-amber">
                {next.title}
              </h2>
              <p className="mono mt-4 text-bone/40">
                {next.category} · {next.year} · {String(next.photoCount).padStart(2, "0")} photographs
              </p>
            </div>
            <div className="relative h-40 w-full overflow-hidden lg:h-52 lg:w-72">
              <Image
                src={next.image}
                alt={next.title}
                fill
                sizes="(min-width: 1024px) 288px, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
