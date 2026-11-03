import Image from "next/image";
import Link from "next/link";
import { faqs, process, site } from "./content";
import { credentials, stockGroups } from "@/lib/archive";
import { getArchiveStats, getProjects } from "@/lib/projects";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { SectionHeader } from "@/components/section-header";
import { ServiceGrid, type Service } from "@/components/service-grid";
import { ProjectGrid } from "@/components/project-grid";
import { QuoteForm } from "@/components/quote-form";

const timeline = ["Engagement", "Week 0", "Week 0—1", "Week 1—4", "Handover"];

const showcaseSlugs = [
  "luzon-solar-farm",
  "commercial-rooftop-arrays",
  "solar-powered-irrigation",
  "eco-vo-300w-street-lights",
  "365kw-rooftop-solar-lgu",
  "75kva-transformer-denr-r12",
];

export default function Home() {
  const projects = getProjects();
  const stats = getArchiveStats();
  const showcase = showcaseSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const cover = (slug: string, fallback: string) => projects.find((p) => p.slug === slug)?.image ?? fallback;

  const services: Service[] = [
    {
      no: "01",
      title: "Residential solar",
      meta: "Rooftop · grid-tied · battery-ready",
      copy: "A rooftop system sized to your household's actual load, installed without disrupting the home.",
      bullets: ["Roof and load assessment", "System design and written quote", "Installation, testing, handover"],
      image: cover("home-solar", "/archive/commercial-rooftop-arrays/01.webp"),
    },
    {
      no: "02",
      title: "Commercial & industrial",
      meta: "Multi-building · factories · offices",
      copy: "Larger arrays for businesses that want predictable energy costs across one roof or a whole site.",
      bullets: ["Multi-building arrays", "Industrial racking and wiring", "Zero-upfront options on request"],
      image: cover("commercial-rooftop-arrays", "/archive/commercial-rooftop-arrays/01.webp"),
    },
    {
      no: "03",
      title: "Farms & agriculture",
      meta: "Off-grid · hybrid · pump loads",
      copy: "Power where the grid is thin — pumps, processing, lighting, and site power built around how the farm runs.",
      bullets: ["Off-grid and hybrid systems", "Pump and motor loads", "Site-specific mounting"],
      image: cover("ground-mounted-solar", "/archive/ground-mounted-solar/01.webp"),
    },
    {
      no: "04",
      title: "Solar irrigation",
      meta: "Pumps · controls · commissioning",
      copy: "Water, pumped by sunlight. No fuel to haul and no diesel bill — installed and tested in the field.",
      bullets: ["Solar pump installation", "Controls and protection", "Testing and commissioning"],
      image: cover("solar-powered-irrigation", "/archive/solar-powered-irrigation/01.webp"),
    },
    {
      no: "05",
      title: "Street lighting",
      meta: "ECO V.O 300 W · poles · road studs",
      copy: "Solar street lights, poles, and road studs supplied from our own stock and installed on site.",
      bullets: ["ECO V.O 300 W lights", "6 m and 8 m poles", "Government project documentation"],
      image: cover("eco-vo-300w-street-lights", "/archive/eco-vo-300w-street-lights/01.webp"),
    },
    {
      no: "06",
      title: "Electrical supply & works",
      meta: "Stock · delivery · installation",
      copy: "The trading house behind the solar work — transformers, generators, CCTV, FDAS, and bulk materials.",
      bullets: ["Transformers and generators", "CCTV and fire alarm systems", "LED walls and bulk orders"],
      image: cover("75kva-transformer-denr-r12", "/archive/75kva-transformer-denr-r12/01.webp"),
    },
  ];

  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />
      <Hero />

      {/* Credential strip */}
      <section className="border-b border-ink/10 bg-bone text-ink">
        <div className="container-x grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-3 py-4 ${
                index > 0 ? "border-t border-ink/10 sm:border-l sm:border-t-0 sm:pl-5" : ""
              }`}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
              <span className="text-xs font-semibold tracking-tight">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 01 — The company */}
      <section id="company" className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="01"
            label="The company"
            title={
              <>
                We move <span className="editorial text-amber-deep">daylight</span> into the meter.
              </>
            }
            copy="V.O is two things at once: an electrical trading house and a solar installation crew. The panels, poles, lights, and materials come through our own stock."
            right={<span>Est. Philippines · 2023—2025</span>}
          />

          <div className="mt-12 grid gap-10 border-t border-ink/15 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
                We handle the survey, the design, the supply, and the installation — one team from
                first visit to switch-on. No subcontracted mystery crew, and every project photograph
                comes from our own files.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/50">
                Private homes, commercial rooftops, farms, and government projects. Complete documents
                and PHILGEPS-ready for public bidding.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 lg:col-span-5">
              {[
                [`${stats.projects}`, "Documented projects"],
                [`${stats.photos}`, "Project photographs"],
                [stats.years, "Field years"],
                [site.followers, "Community"],
              ].map(([value, label]) => (
                <div key={label} className="border-t border-ink/15 pt-3">
                  <dt className="poster text-3xl leading-none">{value}</dt>
                  <dd className="mono mt-2 text-ink/40">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 02 — Capabilities */}
      <section id="capabilities" className="border-t border-bone/10 bg-ink text-bone">
        <div className="container-x section-pad">
          <SectionHeader
            tone="bone"
            index="02"
            label="Capabilities"
            title="Six ways to put the sun to work."
            copy="Every capability is delivered by the same in-house team — from the first site survey to the final handover."
            right={<span>Supply · Delivery · Installation</span>}
          />

          <div className="mt-12">
            <ServiceGrid services={services} />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-bone/15 pt-4">
            <p className="mono text-bone/35">Also available: transformers · CCTV · FDAS · LED walls</p>
            <a href="#contact" className="link-arrow text-bone">
              Discuss your site ↗
            </a>
          </div>
        </div>
      </section>

      {/* 03 — Selected work */}
      <section id="work" className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="03"
            label="Selected work"
            title="Proof, not promises."
            copy="Led by the Luzon solar farm — then rooftops, farms, street lights, and substations. Filter the full archive by discipline on the project page."
            right={
              <Link href="/projects" className="link-arrow text-ink">
                All {stats.projects} projects ↗
              </Link>
            }
          />

          <div className="mt-12">
            <ProjectGrid projects={showcase} />
          </div>

          <div className="mt-12 flex justify-center border-t border-ink/15 pt-8">
            <Link href="/projects" className="btn-ink">
              Open the full archive ↗
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — Process */}
      <section id="process" className="border-t border-bone/10 bg-ink text-bone">
        <div className="container-x section-pad">
          <SectionHeader
            tone="bone"
            index="04"
            label="Process"
            title="From survey to switch-on."
            copy="A solar system is a construction project before it is an energy bill. Five steps in a fixed order, with a written scope before work begins."
            right={<span>Private + government</span>}
          />

          <div className="mt-12 grid gap-px border border-bone/15 bg-bone/15 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <div key={step.step} className="flex flex-col bg-ink p-6">
                <span className="mono text-amber">{step.step}</span>
                <h3 className="poster mt-4 text-xl leading-none">{step.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-bone/50">{step.copy}</p>
                <span className="mono mt-5 text-bone/25">{timeline[index]}</span>
              </div>
            ))}
          </div>

          <p className="mono mt-6 text-bone/30">
            Note — scope, equipment, and after-sales terms are confirmed in writing.
          </p>
        </div>
      </section>

      {/* 05 — Stockroom */}
      <section id="stockroom" className="bg-amber text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            tone="amber"
            index="05"
            label="Stockroom"
            title="We keep the shelf loaded."
            copy="We are an electrical trading company first. The warehouse, the stock, and the crews are the same ones behind every solar job."
            right={<span className="mono">Bulk orders welcome</span>}
          />

          <div className="mt-12 grid gap-10 md:grid-cols-3">
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

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-ink/25 pt-6">
            <p className="mono max-w-md leading-relaxed text-ink/60">
              Models and stock change with supply. Ask us for current availability, capacities, and
              bulk pricing.
            </p>
            <a href="#contact" className="btn-ink">
              Ask for stock &amp; pricing ↗
            </a>
          </div>
        </div>
      </section>

      {/* 06 — The crew */}
      <section id="crew" className="bg-bone text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="06"
            label="The crew"
            title={
              <>
                Quality is our <span className="editorial text-amber-deep">key.</span>
              </>
            }
            copy="We work with private clients and government agencies alike: complete documents, PHILGEPS-ready, and a crew that shows up in proper protective gear."
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
                V.O supplies the equipment and installs it. The people who quote your project are the
                people who turn up on site — and the photographs in our archive are the work we
                actually completed.
              </p>

              <div className="mt-8 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
                {credentials.map((item) => (
                  <div key={item.title} className="bg-bone p-5">
                    <p className="text-sm font-bold">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">{item.copy}</p>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-ink mt-8">
                Talk to the team ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — Questions */}
      <section id="questions" className="bg-bone-2 text-ink">
        <div className="container-x section-pad">
          <SectionHeader
            index="07"
            label="Questions"
            title="Good to know before you start."
            copy="Short, direct answers. For anything else, call or message us — we answer the same way."
            right={<span>Answered directly</span>}
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
              {faqs.map((faq, index) => (
                <details key={faq.q} className="group border-t border-ink/15 last:border-b">
                  <summary className="flex items-start justify-between gap-6 py-5">
                    <span className="flex gap-4">
                      <span className="mono pt-1 text-ink/30">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-base font-semibold md:text-lg">{faq.q}</span>
                    </span>
                    <span className="text-xl text-ink/40 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-5 pl-9 pr-8 text-sm leading-relaxed text-ink/60">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Contact */}
      <section id="contact" className="border-t border-bone/10 bg-ink text-bone">
        <div className="container-x section-pad grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mono text-amber">08 / Start</p>
            <h2 className="poster mt-4 text-[clamp(2.8rem,5.5vw,5.5rem)]">
              Let&apos;s power
              <br />
              <span className="editorial text-amber">it.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/55">
              Tell us what you want to power — a home, a farm pump, a commercial roof, a street. We
              will tell you what a proper installation takes.
            </p>

            <div className="mt-10">
              <a href={`tel:${site.phone}`} className="group flex items-center justify-between border-t border-bone/15 py-4">
                <span className="mono text-bone/40">Call</span>
                <span className="text-xl transition-colors group-hover:text-amber md:text-2xl">
                  {site.phoneDisplay}
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="group flex items-center justify-between gap-4 border-t border-bone/15 py-4">
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

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-bone/20 bg-ink/95 backdrop-blur md:hidden">
        <a href={`tel:${site.phone}`} className="mono flex items-center justify-center gap-2 py-4 text-bone">
          Call now
        </a>
        <a
          href={site.facebook}
          target="_blank"
          rel="noreferrer"
          className="mono flex items-center justify-center gap-2 bg-amber py-4 text-ink"
        >
          Messenger
        </a>
      </div>
    </main>
  );
}
