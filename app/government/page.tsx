import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ProjectGrid } from "@/components/project-grid";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "Government Projects | V.O Electrical Lights Trading",
  description:
    "Solar, street lighting, transformers, CCTV, and FDAS for government projects — complete documents, PHILGEPS-ready, private and public sector.",
};

const governmentSlugs = [
  "365kw-rooftop-solar-lgu",
  "75kva-transformer-denr-r12",
  "cctv-maguindanao-police-station",
  "fdas-government-project",
  "solar-street-lights-government",
];

const capabilities = [
  {
    title: "LGU rooftops",
    copy: "Solar on municipal halls, schools, health centres, and other public buildings.",
  },
  {
    title: "Transformers",
    copy: "Supply, installation, testing, and commissioning for the required capacity.",
  },
  {
    title: "CCTV & FDAS",
    copy: "Security cameras and fire detection and alarm systems for public buildings.",
  },
  {
    title: "Street lighting",
    copy: "ECO V.O 300 W solar street lights, 6 m and 8 m poles, and road studs.",
  },
  {
    title: "Equipment supply",
    copy: "Poles, lights, and electrical materials delivered nationwide.",
  },
  {
    title: "Documentation",
    copy: "Complete documents and PHILGEPS-ready for public bidding and LGU procurement.",
  },
];

const steps = [
  {
    title: "Eligibility & PHILGEPS",
    copy: "We confirm the project requirements and prepare the company documents needed for public bidding.",
  },
  {
    title: "Site survey",
    copy: "We visit the site, measure the load or lighting requirement, and note access and safety conditions.",
  },
  {
    title: "Design & BOQ",
    copy: "System design, technical specifications, and a bill of quantities aligned to the scope.",
  },
  {
    title: "Bid documents",
    copy: "Complete technical and commercial documents submitted for the procurement process.",
  },
  {
    title: "Installation",
    copy: "Our own crew installs with proper PPE and coordinates with the site's operating hours.",
  },
  {
    title: "Testing & handover",
    copy: "Testing, commissioning, documentation, and a walkthrough with the people who will operate it.",
  },
];

export default function GovernmentPage() {
  const projects = getProjects();
  const governmentProjects = governmentSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <PageHero
        eyebrow="Government & institutional"
        title="Built for public projects."
        copy="V.O accepts private and government projects with complete documents and PHILGEPS-ready for public bidding. LGU rooftops, transformers, CCTV, fire alarm, and street lighting."
        image="/archive/365kw-rooftop-solar-lgu/01.webp"
        imageAlt="365 kW rooftop solar installation for a local government unit"
        breadcrumb="Government"
        stats={[
          { value: "PHILGEPS", label: "Ready for bidding" },
          { value: "DOE", label: "Certified PV installer" },
          { value: "PH", label: "Nationwide delivery" },
        ]}
        actions={
          <>
            <Link href="/contact" className="btn-amber">
              Discuss a project ↗
            </Link>
            <Link href="/projects" className="btn-bone">
              See government work
            </Link>
          </>
        }
      />

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="01"
            label="Capabilities"
            title="What we handle."
            copy="Solar and electrical works for public buildings, roads, and facilities — supplied and installed by our own team."
            right={<span>Private + government</span>}
          />

          <div className="mt-12 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <div key={item.title} className="bg-bone p-6">
                <span className="mono text-amber-deep">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="poster mt-4 text-xl leading-none">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-bone/10 bg-ink text-bone">
        <div className="container-x section-pad">
          <SectionHeader
            tone="bone"
            index="02"
            label="Field records"
            title="Selected government work."
            copy="A 365 kW LGU rooftop, a DENR transformer, a police station CCTV system, FDAS works, and a street lighting rollout."
            right={
              <Link href="/projects" className="link-arrow text-bone">
                All projects ↗
              </Link>
            }
          />
          <div className="mt-12">
            <ProjectGrid projects={governmentProjects} />
          </div>
        </div>
      </section>

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="03"
            label="Procurement"
            title="Documents, step by step."
            copy="Public projects are won on compliance as much as price. We prepare the technical and commercial documents around the scope."
            right={<span>PHILGEPS-ready</span>}
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="border-t border-ink/20 pt-4">
                <span className="mono text-amber-deep">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="poster mt-3 text-xl leading-none">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{step.copy}</p>
              </div>
            ))}
          </div>

          <p className="mono mt-10 max-w-3xl leading-relaxed text-ink/45">
            Note — eligibility, technical requirements, and procurement rules depend on the agency and
            the project. We confirm the exact document set before submission.
          </p>
        </div>
      </section>

      <CtaBand
        title="Have a government project in mind?"
        copy="Send the scope, the site, and the agency requirements. We will tell you what we can supply, install, and document."
        primaryLabel="Talk to us"
        secondaryLabel="About the company"
        secondaryHref="/about"
      />

      <SiteFooter />
      <MobileActionBar />
    </main>
  );
}
