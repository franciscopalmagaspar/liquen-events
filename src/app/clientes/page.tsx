import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { blurFor } from "@/lib/blur";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";
import ClientLogoGrid from "@/components/ClientLogoGrid";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { clientLogos } from "@/data";

export const metadata: Metadata = pageMetadata({
  title: "Clientes — Quem Confia na Líquen Events",
  description:
    "Empresas e instituições que confiam na Líquen Events em Évora e no Alentejo: José de Mello, Aernnova, Mainova, Universidade de Évora, Câmara Municipal de Évora, Pérez-Llorca e muito mais.",
  path: "/clientes",
  keywords: ["clientes Líquen Events", "eventos corporativos Évora", "empresas de eventos Alentejo"],
});

const testimonials = [
  {
    name: "António Bettencourt",
    text: "O ambiente criado pela vossa equipa elevou a imagem do nosso evento. Ficámos impressionados com a sofisticação da decoração.",
    event: "Evento Corporativo",
  },
  {
    name: "Alexandra Teixeira",
    text: "A dedicação da equipa em criar ambientes mágicos, com decoração impecável e coordenação perfeita, permitiu-nos desfrutar do evento sem qualquer preocupação.",
    event: "Evento Social",
  },
  {
    name: "Stephanie & Mizio",
    text: "Everything was exactly how we'd envisioned and you created a beautiful space for us!",
    event: "Evento Privado",
  },
  {
    name: "Teresinha Malta",
    text: "Serviço de excelência, com muito carinho e disponibilidade por parte de toda a equipa. Superaram todas as expectativas.",
    event: "Evento Social",
  },
  {
    name: "Ana Pinho",
    text: "Excelente, recomendo sem qualquer reserva. Uma equipa de confiança do início ao fim.",
    event: "Evento Privado",
  },
];

const eyebrow = "text-foreground/25 text-[10px] tracking-[0.48em] uppercase flex items-center gap-3";
const heading = "text-foreground font-bold leading-[1.05]";

export default function ClientesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Clientes", path: "/clientes" }]} />
      <PageHeader
        label="Quem confia em nós"
        title="Os Nossos Clientes"
        description="Empresas, instituições e famílias que nos escolheram para os seus momentos mais especiais."
      />

      {/* Lead statement */}
      <section className="py-20 lg:py-28 bg-surface border-b border-foreground/8">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <p
              className="text-foreground/55 leading-[1.75]"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(21px, 2.7vw, 32px)" }}
            >
              De grandes empresas a celebrações de família, são dezenas os que confiam à Líquen Events
              os seus momentos mais importantes — e a essa confiança respondemos com{" "}
              <span className="text-moss">rigor, criatividade e dedicação</span> em cada detalhe.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-surface border-b border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/[0.06]">
            {[
              { kind: "count" as const, to: 19, suffix: "+", label: "Clientes empresariais" },
              { kind: "count" as const, to: 100, suffix: "+", label: "Eventos realizados" },
              { kind: "static" as const, value: "5★", label: "Avaliação média" },
              { kind: "static" as const, value: "24h", label: "Tempo de resposta" },
            ].map((s, i) => (
              <AnimateIn key={s.label} delay={i * 70} className="h-full">
                <div className="bg-surface flex flex-col items-center justify-center text-center py-14 px-4 gap-3 h-full">
                  <p
                    className="text-moss text-4xl lg:text-5xl font-bold leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.kind === "count" ? <CountUp to={s.to} suffix={s.suffix} /> : s.value}
                  </p>
                  <p className="text-foreground/30 text-[10px] tracking-[0.28em] uppercase">{s.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-24 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <p className={`${eyebrow} mb-6`}>
              <span className="w-5 h-px bg-moss/50 flex-shrink-0" />
              Empresas &amp; instituições
            </p>
            <h2 className={heading} style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.6vw, 46px)" }}>
              Marcas que confiam em nós
            </h2>
          </AnimateIn>
          <AnimateIn delay={120}>
            <div className="mt-14">
              <ClientLogoGrid clients={clientLogos} />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Testimonials — premium cards */}
      <section className="py-24 lg:py-28 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <p className={`${eyebrow} mb-6`}>
              <span className="w-5 h-px bg-moss/50 flex-shrink-0" />
              O que dizem de nós
            </p>
            <h2 className={heading} style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.6vw, 46px)" }}>
              Palavras de quem confiou.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mt-14">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 60} className="h-full">
                <figure className="h-full flex flex-col border border-foreground/10 rounded-2xl p-8 lg:p-10 bg-surface-raised/30 hover:border-foreground/20 transition-colors duration-500">
                  <span
                    className="text-moss/35 text-5xl leading-none mb-4 select-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <blockquote
                    className="text-foreground/65 leading-[1.7] flex-1"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(17px, 1.8vw, 21px)" }}
                  >
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-foreground/8">
                    <p className="text-foreground text-sm font-semibold">{t.name}</p>
                    <p className="text-moss/80 text-xs mt-1 tracking-[0.1em] uppercase">{t.event}</p>
                  </figcaption>
                </figure>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Photo moments */}
      <section className="py-16 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <p className={`${eyebrow} mb-10`}>
              <span className="w-5 h-px bg-moss/50 flex-shrink-0" />
              Momentos dos nossos eventos
            </p>
          </AnimateIn>
          <AnimateIn from="fade" delay={80}>
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
              {[
                { src: "/imagens/EW1_1393.jpg", label: "Corporativo", cls: "md:row-span-2" },
                { src: "/imagens/DaniGui_Preview70.jpg", label: "Casamento", cls: "" },
                { src: "/imagens/20_10_2025_0407.jpg", label: "Conferência", cls: "" },
                { src: "/imagens/JOAO_E_PEDRO_1Y1A3232.jpg", label: "Casamento", cls: "" },
                { src: "/imagens/DaniGui_Adois_57.jpg", label: "Jantar", cls: "" },
              ].map((item, i) => (
                <div key={i} className={`relative overflow-hidden rounded-lg group ${item.cls}`}>
                  <Image
                    src={item.src}
                    {...blurFor(item.src)}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  <span className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[9px] tracking-[0.4em] uppercase text-white/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <h2
              className="text-foreground text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Junte-se aos nossos clientes.
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-foreground/40 text-base leading-relaxed max-w-md mb-12">
              Conte-nos a sua ideia e mostramos-lhe como a podemos transformar num evento memorável.
            </p>
          </AnimateIn>
          <AnimateIn delay={150}>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-moss text-cream font-medium rounded-sm hover:bg-moss-dark hover:gap-5 transition-all duration-300 text-sm tracking-widest uppercase shadow-lg shadow-moss/15"
            >
              Falar Connosco →
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
