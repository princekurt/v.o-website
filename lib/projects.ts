import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { archive, type ArchiveEntry } from "./archive";

const archiveRoot = join(process.cwd(), "public", "archive");
const imagePattern = /\.(avif|gif|jpe?g|png|webp)$/i;

export type GalleryProject = ArchiveEntry & {
  image: string;
  images: string[];
  photoCount: number;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
  slug: string;
  project: string;
  category: string;
  year: number;
  index: number;
};

function readImages(slug: string): string[] {
  const dir = join(archiveRoot, slug);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((file) => imagePattern.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => `/archive/${slug}/${file}`);
}

const projectOrder = [
  "commercial-rooftop-arrays",
  "solar-powered-irrigation",
  "ground-mounted-solar",
  "eco-vo-300w-street-lights",
  "365kw-rooftop-solar-lgu",
  "gold-refinery-solar",
  "industrial-solar-set-up",
  "home-solar",
  "street-light-poles",
  "75kva-transformer-denr-r12",
  "cctv-maguindanao-police-station",
  "fdas-government-project",
  "led-wall-supply",
  "generator-sets-supply",
  "solar-road-studs",
  "ufo-solar-street-lights",
  "solar-street-lights-government",
];

const featuredOrder = [
  "commercial-rooftop-arrays",
  "solar-powered-irrigation",
  "365kw-rooftop-solar-lgu",
  "eco-vo-300w-street-lights",
  "ground-mounted-solar",
];

/** Projects from the archive manifest, with photos read from public/archive/<slug>. */
export function getProjects(): GalleryProject[] {
  return archive
    .map((entry) => {
      const images = readImages(entry.slug);
      return { ...entry, images, image: images[0] ?? "", photoCount: images.length };
    })
    .filter((project) => project.images.length > 0)
    .sort((a, b) => {
      const ai = projectOrder.indexOf(a.slug);
      const bi = projectOrder.indexOf(b.slug);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });
}

export function getFeaturedProjects(limit = 5): GalleryProject[] {
  const projects = getProjects();
  const featured = featuredOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is GalleryProject => Boolean(project));
  return [...featured, ...projects.filter((project) => !featuredOrder.includes(project.slug))].slice(0, limit);
}

export function getProject(slug: string) {
  return getProjects().find((project) => project.slug === slug);
}

/**
 * Every project photo, interleaved across projects so the gallery wall alternates
 * scenes instead of showing one project's photos in a long run.
 */
export function getAllPhotos(): GalleryPhoto[] {
  const groups = getProjects().map((project) =>
    project.images.map((src, index) => ({
      src,
      alt: `${project.title} — photo ${index + 1}`,
      slug: project.slug,
      project: project.title,
      category: project.category,
      year: project.year,
      index,
    })),
  );

  const max = Math.max(0, ...groups.map((group) => group.length));
  const photos: GalleryPhoto[] = [];
  for (let index = 0; index < max; index++) {
    for (const group of groups) {
      if (group[index]) photos.push(group[index]);
    }
  }
  return photos;
}

export function getProjectCategories(): string[] {
  return [...new Set(getProjects().map((project) => project.category))];
}

export function getArchiveStats() {
  const projects = getProjects();
  return {
    projects: projects.length,
    photos: projects.reduce((total, project) => total + project.images.length, 0),
    categories: getProjectCategories().length,
    years: `${Math.min(...projects.map((p) => p.year))}—${Math.max(...projects.map((p) => p.year))}`,
  };
}
