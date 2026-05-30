import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import PortfolioClient from "./PortfolioClient";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio de Eventos — Casamentos e Eventos Corporativos",
  description:
    "Veja o nosso portfolio de eventos realizados em Évora, Alentejo e Portugal: casamentos, eventos corporativos e institucionais para clientes como Aernnova, Câmara de Évora e Universidade de Évora.",
  path: "/portfolio",
  image: "/imagens/EW1_1392.jpg",
  keywords: ["portfolio de eventos", "casamentos Alentejo", "eventos corporativos Évora"],
});

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Portfolio", path: "/portfolio" }]} />
      <PageHeader
        label="Os nossos projetos"
        title="Portfolio"
        description="Uma seleção dos eventos que mais nos orgulham."
      />

      <PortfolioClient />

      <section className="py-40 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <h2
              className="text-foreground text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-12 max-w-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              O próximo projeto é o seu.
            </h2>
          </AnimateIn>
          <AnimateIn delay={150}>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-moss text-cream font-medium rounded-sm hover:bg-moss-dark hover:gap-5 transition-all duration-300 text-sm tracking-widest uppercase"
            >
              Falar Connosco →
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
