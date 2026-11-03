import Link from "next/link";
import { faqs, process, site } from "./content";
import { credentials, stockGroups } from "@/lib/archive";
import { getArchiveStats, getFeaturedProjects, getProjects } from "@/lib/projects";
import { SiteHeader } from "@/components/site-header";
import { SunRail } from "@/components/sun-rail";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { ServiceIndex, type ServiceItem } from "@/components/service-index";
import { DayStudy } from "@/components/day-study";
import { HorizontalArchive } from "@/components/horizontal-archive";
import { ArchiveIndex } from "@/components/archive-index";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SunMark } from "@/components/sun-mark";

export default function Home() {
  const projects = getProjects();
  const featured = getFeaturedProjects(6);
  const stats = getArchiveStats();
  const cover = (slug: string, fallback: string) => projects.find((p) => p.slug === slug)?.image ?? fallback;

  const services: ServiceItem[] = [
    {
      no: "01",
      title: "Residential",
      meta: "Rooftop · grid-tied · battery-ready",
      copy: "A rooftop array sized to the way your household actually uses power.",
      image: cover("home-solar", "/archive/commercial-rooftop-arrays/01.webp"),
    },
    {
      no: "02",
      title: "Commercial",
      meta: "Multi-building · industrial · zero-upfront on request",
      copy: "Larger arrays for businesses that want predictable energy costs.",
      image: cover("commercial-rooftop-arrays", "/archive/commercial-rooftop-arrays/01.webp"),
    },
    {
      no: "03",
      title: "Farms",
      meta: "Off-grid · hybrid · pump and motor loads",
      copy: "Power where the grid is thin — pumps, processing, lighting, and site power.",
      image: cover("ground-mounted-solar", "/archive/ground-mounted-solar/01.webp"),
    },
    {
      no: "04",
      title: "Irrigation",
      meta: "Pumps · controls · testing and commissioning",
      copy: "Water, pumped by sunlight. No fuel to haul and no diesel bill.",
      image: cover("solar-powered-irrigation", "/archive/solar-powered-irrigation/01.webp"),
    },
    {
      no: "05",
      title: "Street lighting",
      meta: "ECO V.O 300 W · poles · road studs",
      copy: "Solar street lights, poles, and road studs — supplied from our own stock.",
      image: cover("eco-vo-300w-street-lights", "/archive/eco-vo-300w-street-lights/01.webp"),
    },
    {
      no: "06",
      title: "Ground mount",
      meta: "Steel racking · array wiring · commissioning",
      copy: "When the roof is not enough, we build the array on open ground.",
      image: cover("industrial-solar-set-up", "/archive/industrial-solar-set-up/01.webp"),
    },
    {
      no: "07",
      title: "Electrical supply",
      meta: "Transformers · CCTV · FDAS · LED walls · bulk orders",
      copy: "The trading house behind the solar work — stock, delivery, and electrical works.",
      image: cover("75kva-transformer-denr-r12", "/archive/75kva-transformer-denr-r12/01.webp"),
    },
  ];

  const tickerItems = [
    "Solar installation",
    "Electrical supply",
    "Street lighting",
    "Solar irrigation",
    "Ground mount",
    "Transformers",
    "CCTV & FDAS",
    "LED walls",
    "Bulk orders",
  ];

  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />
      <SunRail />
      <Hero />

      <div className="border-y border-ink bg-amber py-3 text-ink">
        <Marquee
          items={tickerItems}
          itemClassName="poster text-xl sm:text-2xl md:text-3xl"
          separator="✳"
        />
      </div>

      {/* 01 — Manifesto */}
      <section id="manifesto" className="relative overflow-hidden bg-bone text-ink">
        <span className="pointer-events-none absolute -right-16 top-0 hidden select-none text-[34rem] leading-none text-ink/[0.04] md:block" aria-hidden="true">
          ✳
        </span>
        <div className="container-x section-pad">
          <div className="flex items-center justify-between border-b border-ink/20 pb-4">
            <p className="mono text-amber-deep">01 / Manifesto</p>
            <p className="mono text-ink/40">V.O · Philippines</p>
          </div>

          <Reveal>
            <h2 className="poster mt-12 max-w-[15ch] text-[clamp(2.6rem,7vw,7rem)]">
              We don&apos;t sell panels. We move{" "}
              <span className="editorial text-amber-deep">daylight</span> into the meter.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-ink/20 pt-8 lg:grid-cols-12">
            <p className="max-w-xl text-base leading-relaxed text-ink/60 lg:col-span-6">
              V.O is two things at once: an electrical trading house and a solar installation crew.
              Panels, inverters, poles, lights, and materials come through our own stock — and the
              people who sell them are the people who install them. No stock photography. No
              subcontracted mystery crew.
            </p>

            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 lg:col-span-5 lg:col-start-8">
              {[
                [`${stats.projects}`, "Documented projects"],
                [`${stats.photos}`, "Project photographs"],
                [stats.years, "Field years"],
                [site.followers, "Community"],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-ink/20 pt-3">
                  <dt className="poster text-3xl leading-none">{value}</dt>
                  <dd className="mono mt-2 text-ink/40">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 02 — Capabilities */}
      <section id="capabilities" className="bg-ink text-bone">
        <div className="container-x section-pad">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mono text-amber">02 / Capabilities</p>
              <h2 className="poster mt-4 max-w-[14ch] text-[clamp(2.4rem,5.5vw,5rem)]">
                Seven ways to put the sun to work.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-bone/50">
              Every capability is delivered by the same in-house crew, from survey to handover.
            </p>
          </div>

          <div className="mt-12">
            <ServiceIndex items={services} />
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="mono hidden text-bone/30 md:block">Hover to preview</p>
            <a href="#contact" className="link-arrow text-bone">
              Discuss your site ↗
            </a>
          </div>
        </div>
      </section>

      {/* 03 — One day (interactive) */}
      <DayStudy />

      {/* 04 — Selected work (horizontal) */}
      <HorizontalArchive projects={featured} totalPhotos={stats.photos} />

      {/* 05 — Process */}
      <section id="process" className="bg-ink text-bone">
        <div className="container-x section-pad grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div className="self-start lg:sticky lg:top-28">
            <p className="mono text-amber">05 / Process</p>
            <h2 className="poster mt-4 text-[clamp(2.4rem,5vw,4.6rem)]">
              From survey
              <br />
              <span className="editorial">to switch-on.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/50">
              A solar system is a construction project before it is an energy bill. Five steps in a
              fixed order — and a written scope before any work begins.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <SunMark className="h-6 w-6 text-amber" />
              <span className="mono text-bone/30">Fig. 02 — Process map</span>
            </div>
          </div>

          <div>
            {process.map((step, index) => (
              <div
                key={step.step}
                className="group grid grid-cols-[2.5rem_1fr] gap-4 border-t border-bone/20 py-7 transition-colors last:border-b md:grid-cols-[3.5rem_1fr_9rem] md:gap-6"
              >
                <span className="mono pt-1 text-amber">{step.step}</span>
                <div>
                  <h3 className="poster text-[clamp(1.5rem,2.6vw,2.4rem)] leading-none transition-transform duration-300 group-hover:translate-x-1">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-bone/50">{step.copy}</p>
                </div>
                <span className="mono hidden text-right text-bone/30 md:block">
                  {["Engagement", "Week 0", "Week 0—1", "Week 1—4", "Handover"][index]}
                </span>
              </div>
            ))}
            <p className="mono mt-6 text-bone/30">
              Note — scope, equipment, and after-sales terms are confirmed in writing.
            </p>
          </div>
        </div>
      </section>

      {/* 06 — Archive */}
      <section id="archive" className="bg-bone text-ink">
        <div className="container-x section-pad">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/20 pb-4">
            <div>
              <p className="mono text-amber-deep">06 / Archive</p>
              <h2 className="poster mt-4 text-[clamp(2.4rem,5.5vw,5rem)]">
                Seventeen <span className="editorial">projects.</span>
              </h2>
            </div>
            <Link href="/projects" className="link-arrow text-ink">
              Open the full archive ↗
            </Link>
          </div>

          <div className="mt-8">
            <ArchiveIndex projects={projects} />
          </div>

          <p className="mono mt-6 text-ink/40">
            {stats.photos} photographs · {stats.years} · photographed on site
          </p>
        </div>
      </section>

      {/* 07 — Stockroom */}
      <section id="stockroom" className="bg-amber text-ink">
        <div className="container-x section-pad">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/20 pb-4">
            <p className="mono">07 / Stockroom</p>
            <p className="mono text-ink/60">Bulk orders welcome</p>
          </div>

          <h2 className="poster mt-10 max-w-[13ch] text-[clamp(2.6rem,6.5vw,6.5rem)]">
            We keep the shelf loaded.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {stockGroups.map((group) => (
              <div key={group.title} className="border-t border-ink/25 pt-4">
                <h3 className="poster text-2xl">{group.title}</h3>
                <ul className="mt-4">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-ink/10 py-2.5 text-sm text-ink/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <a href="#contact" className="btn-ink">
              Ask for stock &amp; pricing ↗
            </a>
            <p className="mono max-w-sm text-ink/60">
              Models and stock change with supply. Ask us for current availability, capacities, and
              bulk pricing.
            </p>
          </div>
        </div>

        <div className="border-y border-ink/25 py-3">
          <Marquee
            reverse
            items={["LED lights", "Flood lights", "Wires & cables", "Breakers", "Transformers", "Generators", "CCTV", "FDAS", "Street poles", "LED walls"]}
            itemClassName="poster text-lg sm:text-xl md:text-2xl"
          />
        </div>
      </section>

      {/* 08 — The crew */}
      <section id="crew" className="bg-bone text-ink">
        <div className="container-x section-pad grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <div className="duotone-wrap relative aspect-[4/5] overflow-hidden bg-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/archive/ground-mounted-solar/02.webp"
                  alt="V.O installation crew in hard hats and hi-vis beside a ground-mounted array"
                  className="duotone h-full w-full object-cover"
                />
              </div>
              <p className="mono mt-4 text-ink/40">Fig. 03 — Ground-mounted array, 2025</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="mono text-amber-deep">08 / The crew</p>
              <h2 className="poster mt-4 text-[clamp(2.4rem,5.5vw,5rem)]">
                Quality is
                <br />
                our <span className="editorial text-amber-deep">key.</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/60">
                We work with private clients and government agencies alike: complete documents,
                PHILGEPS-ready, and a crew that shows up in proper protective gear. Every photograph on
                this site comes from our own project files.
              </p>

              <div className="mt-8 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-2">
                {credentials.map((item) => (
                  <div key={item.title} className="bg-bone p-4">
                    <p className="text-sm font-bold">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">{item.copy}</p>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-ink mt-8">
                Talk to the team ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 — Questions */}
      <section id="questions" className="bg-bone-2 text-ink">
        <div className="container-x section-pad grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="self-start lg:sticky lg:top-28">
            <p className="mono text-amber-deep">09 / Questions</p>
            <h2 className="poster mt-4 text-[clamp(2.4rem,5vw,4.4rem)]">
              Good to know
              <br />
              <span className="editorial">before you start.</span>
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/55">
              Still unsure? Call us — we answer with the same directness.
            </p>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <details key={faq.q} className="group border-t border-ink/20 last:border-b">
                <summary className="flex items-start justify-between gap-6 py-5">
                  <span className="flex gap-4">
                    <span className="mono pt-1 text-ink/30">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-base font-semibold md:text-lg">{faq.q}</span>
                  </span>
                  <span className="text-xl text-ink/40 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-6 pl-9 text-sm leading-relaxed text-ink/60">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Contact */}
      <section id="contact" className="border-t border-bone/10 bg-ink text-bone">
        <div className="container-x section-pad grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mono text-amber">10 / Start</p>
            <h2 className="poster mt-4 text-[clamp(3rem,8vw,8rem)]">
              Let&apos;s
              <br />
              power
              <br />
              <span className="editorial text-amber">it.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/50">
              Tell us what you want to power — a home, a farm pump, a commercial roof, a street. We
              will tell you what a proper installation takes.
            </p>

            <div className="mt-10">
              <a href={`tel:${site.phone}`} className="group flex items-center justify-between border-t border-bone/20 py-4">
                <span className="mono text-bone/40">Call</span>
                <span className="text-xl transition-colors group-hover:text-amber md:text-2xl">{site.phoneDisplay}</span>
              </a>
              <a href={`mailto:${site.email}`} className="group flex items-center justify-between gap-4 border-t border-bone/20 py-4">
                <span className="mono text-bone/40">Email</span>
                <span className="truncate text-base transition-colors group-hover:text-amber md:text-lg">{site.email}</span>
              </a>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="group flex items-center justify-between border-t border-bone/20 py-4">
                <span className="mono text-bone/40">Facebook</span>
                <span className="text-xl transition-colors group-hover:text-amber md:text-2xl">Message us ↗</span>
              </a>
              <div className="flex items-center justify-between border-y border-bone/20 py-4">
                <span className="mono text-bone/40">Where</span>
                <span className="text-sm text-bone/70">Luzon + Mindanao · nationwide delivery</span>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-bone/20 bg-ink/95 backdrop-blur md:hidden">
        <a href={`tel:${site.phone}`} className="mono flex items-center justify-center gap-2 py-4 text-bone">
          Call now
        </a>
        <a href={site.facebook} target="_blank" rel="noreferrer" className="mono flex items-center justify-center gap-2 bg-amber py-4 text-ink">
          Messenger
        </a>
      </div>
    </main>
  );
}
