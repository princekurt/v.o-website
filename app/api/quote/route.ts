import { NextResponse } from "next/server";
import { site } from "@/app/content";

export async function POST(request: Request) {
  const body = await request.json();
  if (body.website) return NextResponse.json({ ok: true });
  if (!body.name || !body.contact) return NextResponse.json({ error: "Name and contact are required." }, { status: 400 });
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !from) return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });
  const fields = ["name", "contact", "interest", "location", "bill", "message"].filter(k => body[k]).map(k => `<p><strong>${k}:</strong> ${String(body[k]).replace(/[<>]/g, "")}</p>`).join("");
  const result = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [site.email], subject: `New solar quote request from ${body.name}`, html: fields }) });
  return result.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Could not send email." }, { status: 502 });
}
