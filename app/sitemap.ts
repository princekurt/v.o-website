import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";

// Set NEXT_PUBLIC_SITE_URL to the production domain before deploying.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://voelectrical.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...projects,
  ];
}
