import type { MetadataRoute } from "next";
import { site } from "@/app/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.legalName,
    short_name: "Villanueva Ong",
    description: site.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0A",
    theme_color: "#0B0B0A",
    icons: [{ src: "/icon.jpg", sizes: "any", type: "image/jpeg" }],
  };
}
