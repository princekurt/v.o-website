import { imageCredits } from "@/lib/image-credits";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Image Credits | Villanueva Ong Electrical Lights Trading",
  description: "Licensed stock image credits for Villanueva Ong Electrical Lights Trading.",
};

export default function CreditsPage() {
  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <PageHero
        eyebrow="Credits"
        title="Image credits."
        copy="Project gallery photographs come from V.O's own project files. The images below are licensed stock used for service thumbnails, article covers, and the government page."
        breadcrumb="Credits"
        size="md"
      />

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {imageCredits.map((credit) => (
              <div key={credit.file} className="grid gap-2 py-5 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8">
                <div>
                  <p className="poster text-lg leading-tight">{credit.title}</p>
                  <p className="mt-1 text-sm text-ink/55">By {credit.creator}</p>
                </div>
                <div className="flex items-center gap-5 md:justify-end">
                  <a
                    href={credit.licenseUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mono text-ink/45 transition-colors hover:text-ink"
                  >
                    {credit.license}
                  </a>
                  <a
                    href={credit.source}
                    target="_blank"
                    rel="noreferrer"
                    className="mono text-amber-deep transition-colors hover:text-ink"
                  >
                    Source ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mono mt-8 max-w-2xl leading-relaxed text-ink/40">
            Each image remains the property of its creator and is used under the license listed. If you
            believe an image is credited incorrectly, contact us and we will correct or replace it.
          </p>
        </div>
      </section>

      <SiteFooter />
      <MobileActionBar />
    </main>
  );
}
