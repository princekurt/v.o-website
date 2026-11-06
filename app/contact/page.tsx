import { site } from "@/app/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact | Villanueva Ong Electrical Lights Trading",
  description:
    "Request a solar quote or site assessment from Villanueva Ong Electrical Lights Trading. Call, email, message us on Facebook, or send the form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <PageHero
        eyebrow="Contact"
        title="Let's power it."
        copy="Tell us what you want to power — a home, a farm pump, a commercial roof, a street, or a government project. We will tell you what a proper installation takes."
        breadcrumb="Contact"
        size="md"
        actions={
          <a href="#contact" className="btn-amber">
            Go to the form ↗
          </a>
        }
      />

      <ContactSection heading={false} />

      <SiteFooter />
      <MobileActionBar />
    </main>
  );
}
