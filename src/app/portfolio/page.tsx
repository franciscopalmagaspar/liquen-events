import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Uma seleção dos eventos que mais nos orgulham — corporativos, institucionais e sociais, realizados em Évora e em todo Portugal.",
};

export default function PortfolioPage() {
  return (
    <>
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
