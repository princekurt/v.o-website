"use client";
import { FormEvent, useState } from "react";
import { site } from "@/app/content";

export function QuoteForm() {
 const [state, setState] = useState<"idle"|"success"|"error">("idle");
 async function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const form = e.currentTarget; const data = Object.fromEntries(new FormData(form)); if (data.website) return; try { const response = await fetch(site.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); if (!response.ok) throw new Error(); setState("success"); form.reset(); } catch { setState("error"); } }
 const field = "w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-navy/40 focus:border-royal focus:ring-4 focus:ring-royal/10";
 return <form onSubmit={submit} className="card p-5 sm:p-7" noValidate>
  <div className="mb-5"><h3 className="display text-2xl font-bold">Request your solar quote</h3><p className="mt-1 text-sm text-navy/65">Tell us a little about your project. We’ll get back to you soon.</p></div>
  <div className="grid gap-3 sm:grid-cols-2"><label className="text-sm font-bold">Name<input required name="name" className={`${field} mt-1.5`} placeholder="Your name" /></label><label className="text-sm font-bold">Phone or email<input required name="contact" className={`${field} mt-1.5`} placeholder="How we can reach you" /></label><label className="text-sm font-bold">Interest type<select name="interest" className={`${field} mt-1.5`} defaultValue=""><option value="" disabled>Select one</option><option>Home solar</option><option>Business solar</option><option>Farm / irrigation</option><option>Solar street lights</option><option>Electrical supplies / lighting</option></select></label><label className="text-sm font-bold">Location<input name="location" className={`${field} mt-1.5`} placeholder="City or municipality" /></label></div>
  <label className="mt-3 block text-sm font-bold">Monthly electric bill <span className="font-normal text-navy/55">(optional)</span><input name="bill" className={`${field} mt-1.5`} placeholder="Optional" /></label><label className="mt-3 block text-sm font-bold">How can we help?<textarea name="message" rows={3} className={`${field} mt-1.5 resize-none`} placeholder="Tell us about your property or project" /></label>
  <label className="hidden" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
  <button className="btn btn-gold mt-5 w-full" type="submit">Send quote request <span>→</span></button>{state === "success" && <p className="mt-3 rounded-lg bg-green-50 p-3 text-center text-sm font-semibold text-green-800">Thanks — your quote request has been received.</p>} {state === "error" && <p className="mt-3 text-sm text-red-600">Something went wrong. Please call us instead.</p>}
 </form>;
}
