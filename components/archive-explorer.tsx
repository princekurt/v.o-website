"use client";

import { useMemo, useState } from "react";
import type { GalleryPhoto } from "@/lib/projects";
import { PhotoGrid } from "./photo-grid";

export function ArchiveExplorer({ photos }: { photos: GalleryPhoto[] }) {
  const categories = useMemo(() => ["All", ...new Set(photos.map((photo) => photo.category))], [photos]);
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? photos : photos.filter((photo) => photo.category === filter)),
    [filter, photos],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-y border-ink/15 py-4">
        {categories.map((category) => {
          const count = category === "All" ? photos.length : photos.filter((p) => p.category === category).length;
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`mono flex items-center gap-2 px-3 py-2 transition ${
                active ? "bg-ink text-bone" : "text-ink/50 hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {category}
              <span className={active ? "text-amber" : "text-ink/30"}>{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <PhotoGrid
          key={filter}
          photos={filtered.map((photo) => ({
            src: photo.src,
            alt: photo.alt,
            title: photo.project,
            meta: `${photo.category} · ${photo.year}`,
          }))}
        />
      </div>
    </div>
  );
}
