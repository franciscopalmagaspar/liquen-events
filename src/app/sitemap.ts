import type { MetadataRoute } from "next";

const base = "https://liquenevents.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                  lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/servicos`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio`,   lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/contacto`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sobre`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/galeria`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/clientes`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
