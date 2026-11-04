import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects } from "@/lib/projects";
import { getService, servicePages } from "@/lib/services";
import { faqs, site } from "@/app/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { ProjectGrid } from "@/components/project-grid";
import { ProcessSteps } from "@/components/process-steps";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} | Villanueva Ong Electrical Lights Trading`,
    description: service.short,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const projects = getProjects();
  const image = service.image;
  const related = service.relatedProjects
    .map((projectSlug) => projects.find((project) => project.slug === projectSlug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
    .slice(0, 3);

  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <PageHero
        eyebrow={`Service ${service.no} — ${service.meta}`}
        title={service.title}
        copy={service.intro}
        image={image}
        imageAlt={service.title}
        imagePosition={service.imagePosition}
        breadcrumb="Services"
        actions={
          <>
            <Link href="/contact" className="btn-amber">
              Request a quote ↗
            </Link>
            <Link href="/projects" className="btn-bone">
              See related work
            </Link>
          </>
        }
      />

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="01"
            label="Scope"
            title="What's included."
            copy={service.scopeNote}
            right={<span>{service.meta}</span>}
          />

          <div className="mt-12 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {service.bullets.map((bullet, index) => (
              <div key={bullet.title} className="bg-bone p-6">
                <span className="mono text-amber-deep">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="poster mt-4 text-xl leading-none">{bullet.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{bullet.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="mono text-ink/40">Good fit for</p>
            </div>
            <ul className="grid gap-2 md:col-span-8 sm:grid-cols-2">
              {service.scope.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-ink/65">
                  <span className="text-amber-deep">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-bone/10 bg-ink text-bone">
        <div className="container-x section-pad">
          <SectionHeader
            tone="bone"
            index="02"
            label="Process"
            title="From survey to switch-on."
            copy="A written scope comes before any work. The schedule is confirmed after the site survey."
            right={<span>Private + government</span>}
          />
          <div className="mt-12">
            <ProcessSteps />
          </div>
          <p className="mono mt-6 text-bone/30">
            Note — scope, equipment, and after-sales terms are confirmed in writing.
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-bone text-ink">
          <div className="container-x section-pad">
            <SectionHeader
              index="03"
              label="Field records"
              title="Related work."
              copy="Real installations from the archive. Open a project to see the full photo set."
              right={
                <Link href="/projects" className="link-arrow text-ink">
                  All projects ↗
                </Link>
              }
            />
            <div className="mt-12">
              <ProjectGrid projects={related} />
            </div>
          </div>
        </section>
      )}

      <section className="bg-bone-2 text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="04"
            label="Questions"
            title="Good to know."
            copy="Short answers to the questions we hear most about this service."
            right={
              <Link href="/faq" className="link-arrow text-ink">
                All FAQs ↗
              </Link>
            }
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mono text-ink/40">Still unsure?</p>
              <a href={`tel:${site.phone}`} className="poster mt-3 block text-2xl hover:text-amber-deep">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-ink/55 hover:text-ink">
                {site.email}
              </a>
            </div>
            <div className="lg:col-span-8">
              <FaqList items={[...service.faqs, ...faqs.slice(0, 2)]} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to plan your ${service.navTitle.toLowerCase()}?`}
        copy="Send the location, the property type, and what you want to power. We will tell you what a proper site assessment covers."
        secondaryLabel="Back to all services"
        secondaryHref="/services"
      />

      <SiteFooter />
      <MobileActionBar />
    </main>
  );
}
