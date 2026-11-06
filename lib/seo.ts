import type { Metadata } from "next";

const siteName = "Villanueva Ong Electrical Lights Trading";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

/**
 * Standard page metadata: canonical URL, Open Graph, and Twitter card.
 * `path` is a root-relative URL, e.g. "/services/residential-solar".
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/og.jpg",
  type = "website",
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "en_PH",
      type,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
