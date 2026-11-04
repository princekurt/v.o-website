import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/lib/insights";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { CtaBand } from "@/components/cta-band";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return { title: "Insight not found" };
  return {
    title: `${insight.title} | Villanueva Ong Electrical Lights Trading`,
    description: insight.excerpt,
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const image = insight.image;
  const related = insights.filter((item) => item.slug !== insight.slug).slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    articleSection: insight.category,
    author: { "@type": "Organization", name: "Villanueva Ong Electrical Lights Trading" },
  };

  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <PageHero
        eyebrow={`${insight.category} — ${insight.date}`}
        title={insight.title}
        copy={insight.excerpt}
        image={image}
        imageAlt=""
        imagePosition={insight.imagePosition}
        breadcrumb="Insights"
        size="md"
        actions={
          <Link href="/contact" className="btn-amber">
            Ask about your project ↗
          </Link>
        }
      />

      <article className="bg-bone text-ink">
        <div className="container-x section-pad">
          <div className="mx-auto max-w-3xl">
            <Link href="/insights" className="mono text-ink/40 transition-colors hover:text-ink">
              ← All insights
            </Link>

            <p className="mt-8 text-lg leading-relaxed text-ink/70">{insight.intro}</p>

            {insight.sections.map((section) => (
              <section key={section.heading} className="mt-12">
                <h2 className="poster text-2xl leading-tight md:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base leading-relaxed text-ink/65">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 grid gap-2.5 border-l-2 border-amber pl-5">
                    {section.list.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-ink/65">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="mt-14 border-t border-ink/15 pt-6">
              <p className="mono text-ink/40">Published by Villanueva Ong Electrical Lights Trading</p>
              <div className="mt-4 flex flex-wrap items-center gap-5">
                <Link href="/contact" className="btn-ink">
                  Ask about your project ↗
                </Link>
                <Link href="/projects" className="link-arrow text-ink">
                  See the work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-bone-2 text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="02"
            label="More insights"
            title="Keep reading."
            copy="More guides for property owners, farms, and project teams."
            right={
              <Link href="/insights" className="link-arrow text-ink">
                All insights ↗
              </Link>
            }
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="group grid gap-5 border border-ink/15 bg-bone p-4 sm:grid-cols-[180px_1fr] sm:items-center"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-2">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="180px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.imagePosition ?? "50% 50%" }}
                  />
                </div>
                <div>
                  <p className="mono text-ink/45">
                    {item.category} · {item.readTime}
                  </p>
                  <h3 className="poster mt-2 text-xl leading-tight">{item.title}</h3>
                  <span className="mono mt-4 inline-flex items-center gap-2 text-ink/60">
                    Read guide
                    <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to talk specifics?"
        copy="Tell us the property, the location, and what you want to power. We will tell you what a proper assessment covers."
        secondaryLabel="Back to insights"
        secondaryHref="/insights"
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
