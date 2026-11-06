import Link from "next/link";
import { faqs, site } from "@/app/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQs | Villanueva Ong Electrical Lights Trading",
  description:
    "Answers about solar costs, site assessments, net metering, batteries, government projects, and coverage from Villanueva Ong Electrical Lights Trading.",
  path: "/faq",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqPage() {
  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <PageHero
        eyebrow="Questions"
        title="Good to know before you start."
        copy="Short, direct answers about costs, site assessments, net metering, batteries, government work, and coverage."
        breadcrumb="FAQs"
        size="md"
        actions={
          <>
            <Link href="/contact" className="btn-amber">
              Ask us directly ↗
            </Link>
            <Link href="/services" className="btn-bone">
              See services
            </Link>
          </>
        }
      />

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="01"
            label="FAQ"
            title="The questions we hear most."
            copy="If your question is not here, call or message us — we answer the same way."
            right={<span>Private + government</span>}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="mono text-ink/40">Talk to a person</p>
              <a href={`tel:${site.phone}`} className="poster mt-4 block text-2xl leading-tight hover:text-amber-deep">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-ink/55 hover:text-ink">
                {site.email}
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-ink/55 hover:text-ink"
              >
                Message us on Facebook ↗
              </a>
            </div>

            <div className="lg:col-span-8">
              <FaqList items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Still have a question?"
        copy="Tell us the property, the location, and what you want to power. We will answer with the specifics, not a brochure."
        secondaryLabel="See the work"
        secondaryHref="/projects"
      />

      <SiteFooter />
      <MobileActionBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
