import { site } from "@/app/content";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-bone/20 bg-ink/95 backdrop-blur md:hidden">
      <a href={`tel:${site.phone}`} className="mono flex items-center justify-center gap-2 py-4 text-bone">
        Call now
      </a>
      <a
        href={site.facebook}
        target="_blank"
        rel="noreferrer"
        className="mono flex items-center justify-center gap-2 bg-amber py-4 text-ink"
      >
        Messenger
      </a>
    </div>
  );
}
