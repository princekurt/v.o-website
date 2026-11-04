import Image from "next/image";
import Link from "next/link";
import { site } from "@/app/content";
import { credentials } from "@/lib/archive";
import { getArchiveStats } from "@/lib/projects";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ProcessSteps } from "@/components/process-steps";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "About | V.O Electrical Lights Trading",
  description:
    "V.O Electrical Lights Trading is an electrical trading house and solar installation crew in the Philippines — private and government projects, complete documents, PHILGEPS-ready.",
};

const coverage = [
  {
    title: "Luzon",
    copy: "Solar installations, commercial rooftops, and ground-mounted arrays across Luzon.",
  },
  {
    title: "Mindanao",
    copy: "Ground-mounted solar, irrigation, street lighting, and electrical works in Mindanao.",
  },
  {
    title: "Nationwide delivery",
    copy: "Street light poles, solar lights, and electrical materials delivered outside our installation areas.",
  },
];

export default function AboutPage() {
  const stats = getArchiveStats();

  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <PageHero
        eyebrow="About V.O"
        title={
          <>
            Quality is our <span className="editorial text-amber">key.</span>
          </>
        }
        copy="V.O is two things at once: an electrical trading house and a solar installation team. The panels, poles, lights, and materials come through our own stock — and the people who sell them are the people who install them."
        image="/archive/luzon-solar-farm/01.jpg"
        imageAlt="V.O crew member on the Luzon solar farm"
        breadcrumb="About"
        stats={[
          { value: `${stats.projects}`, label: "Documented projects" },
          { value: `${stats.photos}`, label: "Project photographs" },
          { value: site.followers, label: "Community" },
        ]}
        actions={
          <>
            <Link href="/contact" className="btn-amber">
              Talk to the team ↗
            </Link>
            <Link href="/projects" className="btn-bone">
              See the archive
            </Link>
          </>
        }
      />

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="01"
            label="The company"
            title="One team, from survey to switch-on."
            copy="We handle the site visit, the design, the supply, the installation, and the handover. Nothing is subcontracted to a crew we do not supervise."
            right={<span>Private + government</span>}
          />

          <div className="mt-12 grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-2">
                <Image
                  src="/archive/ground-mounted-solar/02.webp"
                  alt="V.O installation crew in hard hats and hi-vis beside a ground-mounted array"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[50%_72%]"
                />
              </div>
              <p className="mono mt-3 text-ink/40">Fig. 01 — Ground-mounted array, 2025</p>
            </div>

            <div className="lg:col-span-7">
              <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
                We started with electrical supply — wires, breakers, lights, poles, and the materials
                that keep a site running. Solar grew out of that: the same customers, the same
                warehouse, and the same crews that already knew how to install electrical work
                properly.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/55">
                Today we design, supply, and install solar for homes, farms, commercial rooftops, and
                government projects. We also supply and install transformers, generators, CCTV, fire
                detection and alarm systems, LED walls, and street lighting.
              </p>

              <div className="mt-8 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
                {credentials.map((item) => (
                  <div key={item.title} className="bg-bone p-5">
                    <p className="text-sm font-bold">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">{item.copy}</p>
                  </div>
                ))}
              </div>

              <Link href="/government" className="btn-ink mt-8">
                Government projects ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-bone/10 bg-ink text-bone">
        <div className="container-x section-pad">
          <SectionHeader
            tone="bone"
            index="02"
            label="How we work"
            title="A written scope before any work."
            copy="Five steps in a fixed order. The same discipline applies to a home rooftop and a government project."
            right={<span>Survey → handover</span>}
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
          <p className="mono mt-6 text-bone/30">
            Note — scope, equipment, and after-sales terms are confirmed in writing before work begins.
          </p>
        </div>
      </section>

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="03"
            label="Coverage"
            title="Where we work."
            copy="We install in Luzon and Mindanao. Equipment — poles, solar lights, and electrical materials — is delivered nationwide."
            right={<span>Philippines</span>}
          />

          <div className="mt-12 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-3">
            {coverage.map((item, index) => (
              <div key={item.title} className="bg-bone p-6">
                <span className="mono text-amber-deep">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="poster mt-4 text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{item.copy}</p>
              </div>
            ))}
          </div>

          <p className="mono mt-6 text-ink/40">
            Not sure if we cover your site? Call {site.phoneDisplay} — we will confirm.
          </p>
        </div>
      </section>

      <CtaBand
        title="Meet the team behind the work."
        copy="Tell us what you want to power. We will tell you what a proper site assessment covers and what the next step looks like."
        secondaryLabel="See the project archive"
        secondaryHref="/projects"
      />

      <SiteFooter />
      <MobileActionBar />
    </main>
  );
}
