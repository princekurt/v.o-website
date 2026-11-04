import Link from "next/link";
import { getArchiveStats } from "@/lib/projects";
import { servicePages } from "@/lib/services";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ServiceGrid, type Service } from "@/components/service-grid";
import { ProcessSteps } from "@/components/process-steps";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "Services | Villanueva Ong Electrical Lights Trading",
  description:
    "Residential, commercial, farm, irrigation, street lighting, and electrical supply services from Villanueva Ong Electrical Lights Trading — survey, design, supply, installation, and handover.",
};

export default function ServicesPage() {
  const stats = getArchiveStats();

  const services: Service[] = servicePages.map((service) => ({
    no: service.no,
    title: service.title,
    meta: service.meta,
    copy: service.short,
    bullets: service.scope,
    image: service.image,
    imagePosition: service.imagePosition,
    href: `/services/${service.slug}`,
  }));

  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <PageHero
        eyebrow="Services"
        title="Six ways to put the sun to work."
        copy="One team handles the survey, the design, the materials, and the installation. Start with the service that matches your property — or call us and we will point you to it."
        image="/archive/commercial-rooftop-arrays/01.webp"
        imageAlt="Aerial view of a commercial rooftop solar array"
        breadcrumb="Services"
        stats={[
          { value: "06", label: "Capabilities" },
          { value: `${stats.projects}`, label: "Documented projects" },
          { value: `${stats.photos}`, label: "Project photographs" },
        ]}
        actions={
          <>
            <Link href="/contact" className="btn-amber">
              Start a project ↗
            </Link>
            <Link href="/projects" className="btn-bone">
              See the work
            </Link>
          </>
        }
      />

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="01"
            label="Capabilities"
            title="From a rooftop to a field."
            copy="Each service is delivered by our own crew, with the equipment supplied from our own stock."
            right={<span>Supply · Delivery · Installation</span>}
          />
          <div className="mt-12">
            <ServiceGrid services={services} />
          </div>
        </div>
      </section>

      <section className="border-t border-bone/10 bg-ink text-bone">
        <div className="container-x section-pad">
          <SectionHeader
            tone="bone"
            index="02"
            label="Process"
            title="What working with us looks like."
            copy="The same five steps apply whether it is a home rooftop or a government project."
            right={
              <Link href="/about" className="link-arrow text-bone">
                About the crew ↗
              </Link>
            }
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
          <p className="mono mt-6 text-bone/30">
            Note — scope, equipment, and after-sales terms are confirmed in writing.
          </p>
        </div>
      </section>

      <CtaBand
        title="Not sure which service fits?"
        copy="Tell us the property, the location, and what you want to power. We will tell you what a proper installation takes — and what it does not need."
        secondaryLabel="See related projects"
        secondaryHref="/projects"
      />

      <SiteFooter />
      <MobileActionBar />
    </main>
  );
}
