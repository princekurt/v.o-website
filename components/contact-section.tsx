import { site } from "@/app/content";
import { QuoteForm } from "./quote-form";

export function ContactSection({ heading = true }: { heading?: boolean }) {
  return (
    <section id="contact" className="border-t border-bone/10 bg-ink text-bone">
      <div className="container-x section-pad grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          {heading ? (
            <>
              <p className="mono text-amber">Start</p>
              <h2 className="poster mt-4 text-[clamp(2.8rem,5.5vw,5.5rem)]">
                Let&apos;s power
                <br />
                <span className="editorial text-amber">it.</span>
              </h2>
            </>
          ) : (
            <>
              <p className="mono text-amber">Prefer to talk?</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/55">
                Call or message us directly — or send the form and we will follow up.
              </p>
            </>
          )}

          {heading && (
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/55">
              Tell us what you want to power — a home, a farm pump, a commercial roof, a street. We
              will tell you what a proper installation takes.
            </p>
          )}

          <div className="mt-10">
            <a
              href={`tel:${site.phone}`}
              className="group flex items-center justify-between border-t border-bone/15 py-4"
            >
              <span className="mono text-bone/40">Call</span>
              <span className="text-xl transition-colors group-hover:text-amber md:text-2xl">
                {site.phoneDisplay}
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between gap-4 border-t border-bone/15 py-4"
            >
              <span className="mono text-bone/40">Email</span>
              <span className="truncate text-base transition-colors group-hover:text-amber md:text-lg">
                {site.email}
              </span>
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-t border-bone/15 py-4"
            >
              <span className="mono text-bone/40">Facebook</span>
              <span className="text-xl transition-colors group-hover:text-amber md:text-2xl">Message us ↗</span>
            </a>
            <div className="flex items-center justify-between border-y border-bone/15 py-4">
              <span className="mono text-bone/40">Where</span>
              <span className="text-sm text-bone/65">Luzon + Mindanao · nationwide delivery</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
