import Link from "next/link";
import { site } from "@/app/content";
import { SunMark } from "./sun-mark";

export function SiteFooter() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-ink text-bone">
      <div className="container-x grid gap-10 border-t border-bone/10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <SunMark className="h-7 w-7 text-amber" />
            <span className="mono">V.O Electrical Lights Trading</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/50">
            Solar installation for homes, farms, and businesses — plus the electrical stockroom and
            lighting behind every project.
          </p>
        </div>

        <div>
          <p className="mono text-bone/30">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-bone/70">
            <Link href="/services" className="transition hover:text-amber">Services</Link>
            <Link href="/projects" className="transition hover:text-amber">Projects</Link>
            <Link href="/about" className="transition hover:text-amber">About</Link>
            <Link href="/government" className="transition hover:text-amber">Government</Link>
            <Link href="/insights" className="transition hover:text-amber">Insights</Link>
            <Link href="/faq" className="transition hover:text-amber">FAQs</Link>
            <Link href="/contact" className="transition hover:text-amber">Contact</Link>
          </div>
        </div>

        <div>
          <p className="mono text-bone/30">Talk to us</p>
          <div className="mt-4 grid gap-2 text-sm text-bone/70">
            <a href={`tel:${site.phone}`} className="transition hover:text-amber">{site.phoneDisplay}</a>
            <a href={`mailto:${site.email}`} className="transition hover:text-amber">{site.email}</a>
            <a href={site.facebook} target="_blank" rel="noreferrer" className="transition hover:text-amber">
              Facebook ↗
            </a>
            <span className="text-bone/40">Installing in Luzon and Mindanao · Delivering nationwide</span>
          </div>
        </div>
      </div>

      <div className="container-x flex flex-wrap items-center justify-between gap-3 border-t border-bone/10 py-5">
        <span className="mono text-bone/30">© {new Date().getFullYear()} {site.legalName}</span>
        <span className="mono text-bone/30">Project photography from our own files</span>
        <a href="#top" className="mono text-bone/50 transition hover:text-amber">Back to top ↑</a>
      </div>

      <div className="overflow-hidden pb-16 md:pb-0" aria-hidden="true">
        <p className="poster whitespace-nowrap text-[16.5vw] leading-[0.78] text-bone/90">V.O Electrical</p>
      </div>
    </footer>
  );
}
