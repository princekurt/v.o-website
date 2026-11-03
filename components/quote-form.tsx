"use client";

import { FormEvent, useState } from "react";
import { site } from "@/app/content";

export function QuoteForm() {
  const [state, setState] = useState<"idle" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (data.website) return;
    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error();
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  const field =
    "mt-2 w-full border-0 border-b border-bone/25 bg-transparent pb-3 text-base text-bone outline-none transition placeholder:text-bone/25 focus:border-amber";
  const label = "mono block text-bone/40";

  return (
    <form onSubmit={submit} noValidate className="border-t border-bone/20 pt-8">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Name</span>
          <input required name="name" className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className={label}>Phone or email</span>
          <input required name="contact" className={field} placeholder="How we reach you" />
        </label>
        <label className="block">
          <span className={label}>Project type</span>
          <select name="interest" className={`${field} appearance-none`} defaultValue="">
            <option value="" disabled className="bg-ink text-bone">
              Select one
            </option>
            {[
              "Home solar",
              "Business solar",
              "Farm / irrigation",
              "Solar street lights",
              "Electrical supplies / lighting",
              "Government or institutional",
            ].map((option) => (
              <option key={option} className="bg-ink text-bone">
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={label}>Site location</span>
          <input name="location" className={field} placeholder="City or municipality" />
        </label>
      </div>

      <label className="mt-7 block">
        <span className={label}>Monthly electric bill (optional)</span>
        <input name="bill" className={field} placeholder="Optional" />
      </label>

      <label className="mt-7 block">
        <span className={label}>What do you want to power?</span>
        <textarea name="message" rows={3} className={`${field} resize-none`} placeholder="A home, a farm pump, a commercial roof, a street…" />
      </label>

      <label className="hidden" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <button type="submit" className="btn-amber">
          Prepare my message ↗
        </button>
        <span className="mono text-bone/30">Nothing is sent automatically</span>
      </div>

      {state === "success" && (
        <p className="mono mt-6 border border-amber/40 bg-amber/10 p-3 text-amber">
          Request received — we&apos;ll get back to you shortly.
        </p>
      )}
      {state === "error" && (
        <p className="mono mt-6 border border-red-400/40 bg-red-400/10 p-3 text-red-300">
          Something went wrong. Please call {site.phoneDisplay} instead.
        </p>
      )}
    </form>
  );
}
