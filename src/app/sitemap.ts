import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "./servicos/services-data";
import { projects } from "./portfolio/projects-data";
import { posts } from "./diario/posts-data";

const base = SITE.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: base,                lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/servicos`,  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/contacto`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sobre`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/galeria`,   lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/diario`,    lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/clientes`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/servicos/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const portfolio: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const journal: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/diario/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...core, ...services, ...portfolio, ...journal];
}
