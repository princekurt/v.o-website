import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { PageHero } from "@/components/page-hero";

export const metadata = pageMetadata({
  title: "Privacy Policy | Villanueva Ong Electrical Lights Trading",
  description:
    "How Villanueva Ong Electrical Lights Trading collects, uses, and protects the information you send through this website.",
  path: "/privacy",
});

const sections = [
  {
    title: "What we collect",
    body: "When you send the quote form, we collect the name, phone number or email address, project type, site location, monthly electric bill (optional), and message you provide. We also record the page that referred you and any campaign tags in the link you used, so we know which channel brought you to the site.",
  },
  {
    title: "Why we collect it",
    body: "We use this information to respond to your request, prepare a site assessment or quotation, and keep a record of the enquiry. With your consent, we may also contact you about the specific project you asked about. We do not sell your information.",
  },
  {
    title: "Consent",
    body: "We rely on your consent when you tick the agreement box and submit the form. You can withdraw consent at any time by contacting us; we will stop using your information for follow-up and delete it unless we need to keep it for an active project or a legal obligation.",
  },
  {
    title: "Who sees it",
    body: "Your enquiry is sent to our team by email through Resend, our email delivery provider. The site is hosted on Vercel. These providers process the information on our behalf. We do not share your details with other companies for their own marketing.",
  },
  {
    title: "How long we keep it",
    body: "We keep enquiry records for up to 24 months after the last contact, unless you become a client or ask us to delete them sooner. Project records may be kept longer where required for warranty, accounting, or government-project documentation.",
  },
  {
    title: "Cookies and analytics",
    body: "The site uses cookieless analytics to understand which pages are used and how the site performs. We do not use advertising cookies on this site. If we add advertising or remarketing tools later, we will update this policy and ask for consent where required.",
  },
  {
    title: "Your rights",
    body: "Under the Philippine Data Privacy Act, you can ask to access, correct, or delete the personal information we hold about you, and you can object to certain processing. Send the request to villanuevaongtrading@gmail.com and we will respond within a reasonable period.",
  },
  {
    title: "Security",
    body: "We use access controls on our email and project files and limit access to the people who need it. No method of transmission over the internet is completely secure, so please avoid sending sensitive documents through the website form.",
  },
];

export default function PrivacyPage() {
  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteHeader />

      <PageHero
        eyebrow="Privacy"
        title="Privacy policy."
        copy="What we collect when you contact us, why we collect it, and how to ask us to correct or delete it."
        breadcrumb="Privacy"
        size="md"
      />

      <section className="bg-bone text-ink">
        <div className="container-x section-pad">
          <div className="mx-auto max-w-3xl">
            <p className="mono text-ink/40">Last updated 6 November 2026</p>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              This policy covers the Villanueva Ong Electrical Lights Trading website and the
              enquiries sent through it. It is written in plain language so you can see what happens
              to your information.
            </p>

            {sections.map((section, index) => (
              <section key={section.title} className="mt-10 border-t border-ink/15 pt-6">
                <p className="mono text-ink/35">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="poster mt-2 text-2xl leading-tight">{section.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-ink/65">{section.body}</p>
              </section>
            ))}

            <section className="mt-10 border-t border-ink/15 pt-6">
              <h2 className="poster text-2xl leading-tight">Contact</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/65">
                For privacy questions or requests, email{" "}
                <a href="mailto:villanuevaongtrading@gmail.com" className="underline decoration-ink/30 underline-offset-2 hover:text-amber-deep">
                  villanuevaongtrading@gmail.com
                </a>{" "}
                or call 0992 659 5090.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileActionBar />
    </main>
  );
}
