import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const projectRoot = join(process.cwd(), "public", "v.o-projects");
const imagePattern = /\.(avif|gif|jpe?g|png|webp)$/i;

export type GalleryProject = {
  slug: string;
  title: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  status: string;
};

const projectLabels: Record<string, Pick<GalleryProject, "title" | "category" | "description">> = {
  "solar-commercial": { title: "Commercial solar installation", category: "Commercial solar", description: "A commercial solar installation from the V.O project portfolio." },
  "solar-farm": { title: "Solar farm installation", category: "Farm solar", description: "A solar farm installation from the V.O project portfolio." },
  "solar-irrigation": { title: "Solar-powered irrigation", category: "Solar irrigation", description: "A solar-powered irrigation installation from the V.O project portfolio." },
};

function titleFromSlug(slug: string) {
  return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

/** Reads every project folder under public/v.o-projects. Add a folder and photos to extend the gallery. */
export function getProjects(): GalleryProject[] {
  if (!existsSync(projectRoot)) return [];
  return readdirSync(projectRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const slug = entry.name;
      const files = readdirSync(join(projectRoot, slug))
        .filter((file) => imagePattern.test(file))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      const label = projectLabels[slug] ?? { title: titleFromSlug(slug), category: "Solar project", description: "A solar installation from the V.O project portfolio." };
      const images = files.map((file) => `/v.o-projects/${slug}/${file}`);
      return { slug, ...label, image: images[0], images, status: "[Project specifications to be added]" };
    })
    .filter((project) => project.images.length > 0);
}

export function getProject(slug: string) { return getProjects().find((project) => project.slug === slug); }
