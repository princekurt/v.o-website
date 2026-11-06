import { NextResponse } from "next/server";
import { site } from "@/app/content";
import { escapeHtml, isContact, isEmail, leadSchema, rateLimit } from "@/lib/leads";

export const runtime = "nodejs";

const noStore = { "Cache-Control": "no-store" };

function json(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: noStore });
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (!payload || typeof payload !== "object") {
    return json({ error: "Invalid request." }, 400);
  }

  const honeypot = (payload as Record<string, unknown>).website;
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return json({ ok: true });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return json({ error: "Please check the required fields." }, 400);
  }

  const lead = parsed.data;
  if (!isContact(lead.contact)) {
    return json({ error: "Enter a valid phone number or email." }, 400);
  }

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = (forwarded?.split(",")[0] || request.headers.get("x-real-ip") || "unknown").trim();
  const limited = rateLimit(ip);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { ...noStore, "Retry-After": String(limited.retryAfter) } },
    );
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const webhook = process.env.LEADS_WEBHOOK_URL;
  const emailConfigured = Boolean(key && from);

  if (!emailConfigured && !webhook) {
    console.error("Quote form: no email delivery or lead webhook is configured.");
    return json({ error: "Lead delivery is not configured." }, 503);
  }

  const name = escapeHtml(lead.name);
  const contact = escapeHtml(lead.contact);
  const interest = escapeHtml(lead.interest || "Not specified");
  const location = escapeHtml(lead.location || "Not specified");
  const bill = escapeHtml(lead.bill || "Not specified");
  const message = escapeHtml(lead.message || "No message");
  const source = escapeHtml(lead.source || "Direct");
  const submittedAt = new Date().toISOString();

  const rows = [
    ["Name", name],
    ["Contact", contact],
    ["Project type", interest],
    ["Site location", location],
    ["Monthly bill", bill],
    ["Message", message],
    ["Source", source],
    ["Submitted", submittedAt],
    ["Consent", "Yes"],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
      <h2 style="margin:0 0 16px">New solar request</h2>
      ${rows.map(([label, value]) => `<p style="margin:0 0 8px"><strong>${label}:</strong> ${value}</p>`).join("")}
    </div>
  `;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const subject = `New solar request — ${lead.name.replace(/[\r\n]+/g, " ")}`;

  const recipients = (process.env.LEADS_EMAIL || site.email)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  let webhookDelivered = false;
  if (webhook) {
    try {
      const hook = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...lead,
          submittedAt,
          referer: request.headers.get("referer") ?? "",
        }),
        signal: AbortSignal.timeout(8_000),
      });
      webhookDelivered = hook.ok;
      if (!hook.ok) console.error("Lead webhook returned", hook.status);
    } catch (error) {
      console.error("Lead webhook failed", error);
    }
  }

  if (!emailConfigured) {
    if (!webhookDelivered) return json({ error: "Could not deliver request." }, 502);
    return json({ ok: true });
  }

  const resendKey = key as string;
  const resendFrom = from as string;

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: resendFrom,
        to: recipients,
        reply_to: isEmail(lead.contact) ? lead.contact.trim() : undefined,
        subject,
        html,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error("Resend request failed", error);
    if (webhookDelivered) return json({ ok: true });
    return json({ error: "Could not send email." }, 502);
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("Resend returned", response.status, detail);
    if (webhookDelivered) return json({ ok: true });
    return json({ error: "Could not send email." }, 502);
  }

  if (isEmail(lead.contact)) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: resendFrom,
          to: [lead.contact.trim()],
          reply_to: site.email,
          subject: "We received your request — Villanueva Ong Electrical Lights Trading",
          html: `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
              <p>Hi ${name},</p>
              <p>Thank you for reaching out. We received your request and will reply within one business day.</p>
              <p>For anything urgent, call ${site.phoneDisplay}.</p>
              <p>— Villanueva Ong Electrical Lights Trading</p>
            </div>
          `,
          text: `Hi ${lead.name},\n\nThank you for reaching out. We received your request and will reply within one business day.\n\nFor anything urgent, call ${site.phoneDisplay}.\n\n— Villanueva Ong Electrical Lights Trading`,
        }),
        signal: AbortSignal.timeout(8_000),
      });
    } catch (error) {
      console.error("Auto-reply failed", error);
    }
  }

  return json({ ok: true });
}
