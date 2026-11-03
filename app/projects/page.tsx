import Image from "next/image";
import Link from "next/link";
import { getAllPhotos, getArchiveStats } from "@/lib/projects";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArchiveExplorer } from "@/components/archive-explorer";

export const metadata = {
  title: "Field Records | V.O Electrical Lights Trading",
  description:
    "Eighteen projects and every photograph from the V.O Electrical Lights Trading archive — rooftop and ground-mount solar, the Luzon solar farm, street lighting, transformers, CCTV, fire alarm work, and equipment supply.",
};

export default function ProjectsPage() {
  const photos = getAllPhotos();
  const stats = getArchiveStats();

  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <section className="relative isolate flex min-h-[86svh] flex-col justify-between overflow-hidden bg-ink pb-10 pt-28 text-bone">
        <Image
          src="/archive/solar-powered-irrigation/01.webp"
          alt="Ground-mounted solar array between palm trees"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />

        <div className="container-x grid grid-cols-2 gap-4 md:grid-cols-3">
          <p className="mono leading-relaxed text-bone/50">
            Field records
            <br />
            V.O Electrical
          </p>
          <p className="mono hidden text-center leading-relaxed text-bone/50 md:block">
            Project archive
            <br />
            {stats.years}
          </p>
          <p className="mono text-right leading-relaxed text-bone/50">
            {stats.projects} projects
            <br />
            {photos.length} photographs
          </p>
        </div>

        <div className="container-x mt-20">
          <h1 className="poster text-[clamp(3.6rem,14vw,14rem)]">
            Field
            <br />
            <span className="editorial text-amber">records.</span>
          </h1>
        </div>

        <div className="container-x mt-12 grid items-end gap-8 lg:grid-cols-12">
          <p className="max-w-md text-sm leading-relaxed text-bone/60 lg:col-span-5">
            Solar, street lighting, electrical works, and supply — {stats.projects} projects from our
            own files, photographed on site. Filter by discipline, then open any photograph.
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-bone/20 pt-5 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="poster text-3xl">{stats.projects}</p>
              <p className="mono mt-1 text-bone/40">Projects</p>
            </div>
            <div>
              <p className="poster text-3xl">{photos.length}</p>
              <p className="mono mt-1 text-bone/40">Photographs</p>
            </div>
            <div>
              <p className="poster text-3xl">{stats.categories}</p>
              <p className="mono mt-1 text-bone/40">Disciplines</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mono text-amber-deep">The archive</p>
              <h2 className="poster mt-3 text-[clamp(2.2rem,4.5vw,4rem)]">
                Every frame we kept.
              </h2>
            </div>
            <p className="mono max-w-xs text-right text-ink/40">
              Click to open · arrow keys to move · esc to close
            </p>
          </div>

          <div className="mt-10">
            <ArchiveExplorer photos={photos} />
          </div>
        </div>
      </section>

      <section className="bg-amber text-ink">
        <div className="container-x section-pad flex flex-wrap items-end justify-between gap-10">
          <h2 className="poster max-w-[14ch] text-[clamp(2.6rem,6.5vw,6.5rem)]">
            Have a roof, a field, or a road to light?
          </h2>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-ink/70">
              Tell us where the site is and what it needs to power. A site assessment usually comes
              first — we will tell you what a proper installation takes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn-ink">
                Start a project ↗
              </Link>
              <Link href="/#work" className="link-arrow mt-4 text-ink">
                Back to the work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
