import Image from "next/image";
import Link from "next/link";
import { insights } from "@/lib/insights";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { CtaBand } from "@/components/cta-band";

export const metadata = {
  title: "Insights | Villanueva Ong Electrical Lights Trading",
  description:
    "Practical guides on solar costs, net metering, irrigation, street lighting, and choosing an installer in the Philippines.",
};

export default function InsightsPage() {
  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <PageHero
        eyebrow="Insights"
        title="Solar guides for the Philippines."
        copy="Practical notes on cost, net metering, irrigation, street lighting, and choosing an installer — written for property owners, farms, businesses, and project teams."
        breadcrumb="Insights"
        size="md"
        stats={[
          { value: "05", label: "Guides" },
          { value: "2026", label: "Updated" },
          { value: "PH", label: "Local context" },
        ]}
      />

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="01"
            label="Guides"
            title="Start with the right questions."
            copy="No jargon, no inflated numbers. These are the things we explain to clients before a site visit."
            right={<span>Cost · Guides · Agriculture · Government</span>}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group flex flex-col overflow-hidden border border-ink/15 bg-bone transition-colors hover:border-ink/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-2">
                  <Image
                    src={insight.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition: insight.imagePosition ?? "50% 50%" }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mono text-ink/45">
                    {insight.category} · {insight.date}
                  </p>
                  <h2 className="poster mt-2 text-xl leading-tight">{insight.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{insight.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-3">
                    <span className="mono text-ink/40">{insight.readTime} read</span>
                    <span className="text-lg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want the numbers for your property?"
        copy="A guide can only take you so far. Send your bill, location, and a photo of the roof or ground and we will tell you what a proper assessment covers."
        secondaryLabel="See the project archive"
        secondaryHref="/projects"
      />

      <SiteFooter />
      <MobileActionBar />
    </main>
  );
}
