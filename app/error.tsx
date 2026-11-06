"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[100svh] items-center bg-ink px-6 text-bone">
      <div className="mx-auto max-w-xl">
        <p className="mono text-amber">Something broke</p>
        <h1 className="poster mt-4 text-[clamp(2.6rem,7vw,5rem)] leading-[0.92]">
          We hit an error.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-bone/55">
          The page could not load. Try again, or call 0992 659 5090 and we will take the details
          directly.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button type="button" onClick={reset} className="btn-amber">
            Try again ↗
          </button>
          <a href="/" className="btn-bone">
            Back to the homepage
          </a>
        </div>
      </div>
    </main>
  );
}
