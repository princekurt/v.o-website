import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";

export default function NotFound() {
  return (
    <main id="top" className="relative overflow-x-clip bg-ink text-bone">
      <SiteHeader />
      <section className="container-x section-pad min-h-[70svh]">
        <p className="mono text-amber">404</p>
        <h1 className="poster mt-4 text-[clamp(3rem,9vw,7rem)] leading-[0.9]">
          That page isn&apos;t here.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-bone/55">
          The link may be old or the page may have moved. Start from the work, the services, or send
          us the project you have in mind.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn-amber">
            Back to the homepage ↗
          </Link>
          <Link href="/services" className="btn-bone">
            See the services
          </Link>
        </div>
      </section>
      <SiteFooter />
      <MobileActionBar />
    </main>
  );
}
