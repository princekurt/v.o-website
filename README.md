# Villanueva Ong Electrical Lights Trading

Marketing site for an electrical trading house and solar installation team in the Philippines. Built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and fill in the values.

- `NEXT_PUBLIC_SITE_URL` — the final canonical URL. If there is no paid domain, use the free Vercel production URL, e.g. `https://your-project.vercel.app`. This drives canonical tags, Open Graph URLs, `sitemap.xml`, and `robots.txt`. On Vercel, production and previews fall back to `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`, but setting this explicitly is recommended.
- `RESEND_API_KEY` and `RESEND_FROM_EMAIL` — optional Resend email delivery. The `from` address must be on a domain verified in Resend, with SPF/DKIM/DMARC configured. Without a domain, use the webhook option below instead.
- `LEADS_EMAIL` — inbox or comma-separated inboxes that receive new requests when Resend is used. Defaults to the address in `app/content.ts`.
- `LEADS_WEBHOOK_URL` — optional lead webhook. POSTs each lead as JSON to Formspree, FormSubmit, Airtable, Supabase, Zapier, or a CRM. If this is set, the form works even when Resend is not configured.
- `GOOGLE_SITE_VERIFICATION` — optional Google Search Console meta token.

## Content

- `app/content.ts` — company details, phone, email, Facebook, shared FAQs.
- `lib/services.ts` — the six service pages.
- `lib/insights.ts` — the five guides.
- `lib/archive.ts` — project metadata (client, capacity, location, case-study notes).
- `public/archive/<slug>/` — project photos. Replacing a file in a project folder is enough; the gallery reads the folder at build time.

## Images

Project gallery photos are the company's own. The home hero, service thumbnails, and article covers are licensed stock, credited in `lib/image-credits.ts` and shown at `/credits`. Keep the credits page accurate when swapping an image.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Zero-budget deployment

A custom domain is **not required**.

- **Website:** deploy to Vercel's free Hobby plan and use the free `https://your-project.vercel.app` URL. Set `NEXT_PUBLIC_SITE_URL` to that URL.
- **Lead form:** Resend requires a verified sending domain, which costs money. For a free option, create a Formspree form and set `LEADS_WEBHOOK_URL=https://formspree.io/f/your-form-id`. The API will forward each lead to Formspree even without Resend. FormSubmit and FormSubmit also work as webhooks.
- **Search:** a `.vercel.app` URL can be submitted to Google Search Console and used in a Google Business Profile. A custom domain is better for long-term trust, but it is not a launch blocker.
- **Later:** buy a domain when there is budget, add it in Vercel, and update `NEXT_PUBLIC_SITE_URL`. No code changes are needed.

Note: Vercel's Hobby plan is free and aimed at personal, non-commercial projects. If the business site must be on commercial terms, Cloudflare Pages and Netlify also have free tiers; the Next.js app can be deployed there later.

## Deployment

1. Deploy to Vercel and set the environment variables above.
2. Use the free `vercel.app` URL, or add a custom domain later.
3. Set up Resend **or** a free Formspree/FormSubmit webhook for the quote form.
4. Submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools.
5. Create/claim the Google Business Profile with the same name, address, phone, hours, and service areas.
