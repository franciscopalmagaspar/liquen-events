import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blurFor } from "@/lib/blur";
import PageHeader from "@/components/PageHeader";
import AnimateIn from "@/components/AnimateIn";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { posts } from "./posts-data";

export const metadata: Metadata = pageMetadata({
  title: "Diário — Inspiração e Guias de Eventos",
  description:
    "Guias, inspiração e tendências sobre casamentos, eventos corporativos e celebrações no Alentejo, Évora e Portugal — pela equipa da Líquen Events.",
  path: "/diario",
  keywords: ["blog de eventos", "inspiração casamentos Alentejo", "guias de eventos"],
});

const fmtDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" });

export default function DiarioPage() {
  const [lead, ...rest] = posts;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Diário", path: "/diario" }]} />
      <PageHeader
        label="Diário"
        title="Inspiração & Guias"
        description="Ideias, tendências e bastidores sobre a criação de eventos memoráveis."
      />

      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Lead article */}
          {lead && (
            <AnimateIn>
              <Link href={`/diario/${lead.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <Image src={lead.cover} {...blurFor(lead.cover)} alt={lead.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-foreground/35 mb-5">
                    <span className="text-moss">{lead.category}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground/20" />
                    <span>{lead.readingMin} min</span>
                  </div>
                  <h2 className="text-foreground font-bold leading-tight mb-5 group-hover:text-moss transition-colors duration-300" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px, 3.4vw, 44px)" }}>
                    {lead.title}
                  </h2>
                  <p className="text-foreground/45 text-sm leading-[1.9] mb-6 max-w-lg">{lead.excerpt}</p>
                  <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-foreground/40 group-hover:text-moss transition-colors">
                    <span className="w-8 h-px bg-foreground/20 group-hover:w-12 group-hover:bg-moss transition-all duration-300" />
                    Ler artigo
                  </span>
                </div>
              </Link>
            </AnimateIn>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 border-t border-foreground/8 pt-16">
              {rest.map((p, i) => (
                <AnimateIn key={p.slug} delay={i * 70}>
                  <Link href={`/diario/${p.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-xl aspect-[3/2] mb-5">
                      <Image src={p.cover} {...blurFor(p.cover)} alt={p.title} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-foreground/35 mb-3">
                      <span className="text-moss">{p.category}</span>
                      <span className="w-1 h-1 rounded-full bg-foreground/20" />
                      <span>{p.readingMin} min</span>
                    </div>
                    <h3 className="text-foreground/85 font-bold text-lg leading-snug mb-2 group-hover:text-moss transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                      {p.title}
                    </h3>
                    <p className="text-foreground/40 text-sm leading-relaxed">{p.excerpt}</p>
                    <p className="text-foreground/25 text-[10px] mt-3">{fmtDate(p.date)}</p>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
