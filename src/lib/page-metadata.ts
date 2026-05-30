import type { Metadata } from "next";
import { SITE } from "./site";

interface PageMetaInput {
  title: string;        // used in <title> (template appends "| Líquen Events")
  description: string;
  path: string;         // e.g. "/servicos"
  ogTitle?: string;     // optional richer title for social cards
  image?: string;       // optional page-specific OG image
  keywords?: string[];
}

/** Builds consistent, SEO-complete metadata for a route. */
export function pageMetadata(input: PageMetaInput): Metadata {
  const { title, description, path, ogTitle, image, keywords } = input;
  const ogImage = image ?? SITE.ogImage;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      url: `${SITE.url}${path}`,
      title: ogTitle ?? `${title} | ${SITE.name}`,
      description,
      images: [{ url: ogImage, width: 1920, height: 1080, alt: `${title} — ${SITE.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? `${title} | ${SITE.name}`,
      description,
      images: [ogImage],
    },
  };
}
