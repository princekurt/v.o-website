"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { FormEvent, useEffect, useRef, useState } from "react";
import { site } from "@/app/content";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<"name" | "contact" | "consent" | "form", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^[+()\d][\d\s().-]{6,19}$/;

function isContact(value: string) {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");
  return (
    emailPattern.test(trimmed) ||
    (phonePattern.test(trimmed) && digits.length >= 7 && digits.length <= 15)
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mono mt-1.5 text-[11px] leading-relaxed text-red-300">
      {message}
    </p>
  );
}

export function QuoteForm() {
  const [state, setState] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [source, setSource] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"];
    const values = keys.flatMap((key) => {
      const value = params.get(key);
      return value ? [`${key}=${value}`] : [];
    });
    if (values.length) setSource(values.join("&").slice(0, 500));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    const form = event.currentTarget;
    const data: Record<string, string> = {};
    new FormData(form).forEach((value, key) => {
      data[key] = String(value);
    });

    if (data.website) return;

    const nextErrors: Errors = {};
    if (!data.name || data.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (!data.contact || !isContact(data.contact)) {
      nextErrors.contact = "Enter a valid phone number or email.";
    }
    if (data.consent !== "yes") {
      nextErrors.consent = "Please agree to the privacy policy.";
    }

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setState("idle");
      if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.contact) contactRef.current?.focus();
      else consentRef.current?.focus();
      return;
    }

    setErrors({});
    setState("sending");

    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Request failed.");
      }

      setState("success");
      form.reset();
      setSource("");
      try {
        track("quote_submit", { interest: data.interest || "Unspecified" });
      } catch {}
    } catch (error) {
      setState("error");
      setErrors({ form: error instanceof Error ? error.message : "Something went wrong." });
    }
  }

  const field =
    "mt-2 w-full border-0 border-b border-bone/25 bg-transparent pb-3 text-base text-bone outline-none transition placeholder:text-bone/25 focus:border-amber";
  const label = "mono block text-bone/40";

  return (
    <form onSubmit={submit} noValidate aria-busy={state === "sending"} className="border-t border-bone/20 pt-8">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Name</span>
          <input
            ref={nameRef}
            required
            name="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${field} ${errors.name ? "border-red-400/60" : ""}`}
            placeholder="Your name"
          />
          <FieldError id="name-error" message={errors.name} />
        </label>
        <label className="block">
          <span className={label}>Phone or email</span>
          <input
            ref={contactRef}
            required
            name="contact"
            autoComplete="email"
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={errors.contact ? "contact-error" : undefined}
            className={`${field} ${errors.contact ? "border-red-400/60" : ""}`}
            placeholder="How we reach you"
          />
          <FieldError id="contact-error" message={errors.contact} />
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
          <input
            name="location"
            autoComplete="address-level2"
            className={field}
            placeholder="City or municipality"
          />
        </label>
      </div>

      <label className="mt-7 block">
        <span className={label}>Monthly electric bill (optional)</span>
        <input name="bill" inputMode="numeric" className={field} placeholder="Optional" />
      </label>

      <label className="mt-7 block">
        <span className={label}>What do you want to power?</span>
        <textarea
          name="message"
          rows={3}
          className={`${field} resize-none`}
          placeholder="A home, a farm pump, a commercial roof, a street…"
        />
      </label>

      <label className="mt-7 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-bone/50">
        <input
          ref={consentRef}
          type="checkbox"
          name="consent"
          value="yes"
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          className="mt-1 h-4 w-4 shrink-0 accent-[#e7a53a]"
        />
        <span>
          I agree to the{" "}
          <Link href="/privacy" className="underline decoration-bone/30 underline-offset-2 hover:text-amber">
            privacy policy
          </Link>{" "}
          and to being contacted about this request.
        </span>
      </label>
      <FieldError id="consent-error" message={errors.consent} />

      <input type="hidden" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="source" value={source} readOnly />

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={state === "sending"}
          className="btn-amber disabled:cursor-wait disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Request a free assessment ↗"}
        </button>
        <span className="mono text-bone/30">No obligation · Reply within one business day</span>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {state === "success" && (
          <p role="status" className="mono mt-6 border border-amber/40 bg-amber/10 p-3 text-amber">
            Request received — we&apos;ll reply within one business day.
          </p>
        )}
        {state === "error" && (
          <p role="alert" className="mono mt-6 border border-red-400/40 bg-red-400/10 p-3 text-red-300">
            {errors.form ?? "Something went wrong."} You can also call {site.phoneDisplay}.
          </p>
        )}
      </div>
    </form>
  );
}
