import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  contact: z.string().trim().min(5).max(120),
  interest: z.string().trim().max(80).optional().default(""),
  location: z.string().trim().max(120).optional().default(""),
  bill: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
  website: z.string().max(0).optional().default(""),
  source: z.string().trim().max(500).optional().default(""),
  consent: z.literal("yes"),
});

export type Lead = z.infer<typeof leadSchema>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isEmail(value: string) {
  return emailPattern.test(value.trim());
}

export function isPhone(value: string) {
  const trimmed = value.trim();
  const digits = trimmed.replace(/\D/g, "");
  return /^[+()\d][\d\s().-]{6,19}$/.test(trimmed) && digits.length >= 7 && digits.length <= 15;
}

export function isContact(value: string) {
  return isEmail(value) || isPhone(value);
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

type RateEntry = { count: number; resetAt: number };
const hits = new Map<string, RateEntry>();

/**
 * Best-effort in-memory limiter. This is not a replacement for a shared
 * Redis/KV limiter on serverless, but it stops casual repeat submissions.
 */
export function rateLimit(key: string, limit = 5, windowMs = 60_000) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0 };
  }

  if (entry.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { ok: true, retryAfter: 0 };
}
