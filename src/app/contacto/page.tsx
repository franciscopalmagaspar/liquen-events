import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";
import FaqJsonLd from "./FaqJsonLd";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";
import { pageMetadata } from "@/lib/page-metadata";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Contacto — Peça o Seu Orçamento de Evento",
  description:
    "Contacte a Líquen Events para organizar o seu evento em Évora, Alentejo, Lisboa ou em qualquer ponto de Portugal. Respondemos em menos de 24 horas com uma proposta à medida.",
  path: "/contacto",
  keywords: ["contacto Líquen Events", "orçamento de eventos Évora", "organização de eventos Alentejo"],
});

const testimonials = [
  {
    quote: "A dedicação da equipa em criar ambientes mágicos, com decoração impecável e coordenação perfeita, permitiu-nos desfrutar do evento sem qualquer preocupação.",
    name: "Alexandra Teixeira",
    event: "Evento Social",
  },
  {
    quote: "Everything was exactly how we'd envisioned and you created a beautiful space for us!",
    name: "Stephanie & Mizio",
    event: "Evento Privado",
  },
  {
    quote: "Serviço de excelência, com muito carinho e disponibilidade por parte de toda a equipa. Superaram todas as expectativas.",
    name: "Teresinha Malta",
    event: "Evento Social",
  },
];

const steps = [
  {
    step: "01",
    title: "Recebemos o seu pedido",
    desc: "Analisamos os detalhes que partilhou e preparamos uma resposta personalizada ao seu evento.",
  },
  {
    step: "02",
    title: "Entramos em contacto",
    desc: "Em menos de 24 horas marcamos uma conversa para perceber melhor a sua visão e os seus objetivos.",
  },
  {
    step: "03",
    title: "Proposta à medida",
    desc: "Criamos uma proposta detalhada com orçamento transparente, adaptada ao seu estilo e expectativas.",
  },
  {
    step: "04",
    title: "Começamos a criar",
    desc: "Com tudo aprovado, a nossa equipa trata de cada detalhe para que o seu evento seja verdadeiramente inesquecível.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Contacto", path: "/contacto" }]} />
      <FaqJsonLd />
      <ContactForm />

      {/* ── Depoimentos ── */}
      <section className="py-24 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <p className="text-foreground/30 text-xs tracking-[0.3em] uppercase mb-16 flex items-center gap-3">
              <span className="w-6 h-px bg-moss rounded-full flex-shrink-0" />
              O que dizem os nossos clientes
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/[0.06]">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className="bg-surface p-10 lg:p-12 flex flex-col gap-6 h-full">
                  <span className="text-moss/30 text-4xl font-bold leading-none" style={{ fontFamily: "var(--font-playfair)" }}>&ldquo;</span>
                  <p className="text-foreground/55 text-sm leading-[1.9] flex-1" style={{ fontFamily: "var(--font-playfair)" }}>
                    {t.quote}
                  </p>
                  <div>
                    <p className="text-foreground text-sm font-semibold">{t.name}</p>
                    <p className="text-moss text-xs mt-1 tracking-wide">{t.event}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── O que acontece a seguir ── */}
      <section className="py-28 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <p className="text-foreground/25 text-[10px] tracking-[0.48em] uppercase mb-20 flex items-center gap-3">
              <span className="w-5 h-px bg-moss/50 flex-shrink-0" />
              O que acontece a seguir
            </p>
          </AnimateIn>
          <div>
            {steps.map((p, i) => (
              <AnimateIn key={p.step} delay={i * 70}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-20 py-10 border-t border-foreground/8">
                  <div className="lg:col-span-1 flex items-start gap-4">
                    <span className="text-foreground/15 text-xs font-mono mt-1 tabular-nums">{p.step}</span>
                    <h3
                      className="text-foreground text-lg font-bold"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p className="lg:col-span-4 text-foreground/40 text-sm leading-relaxed max-w-xl">
                    {p.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
            <div className="border-t border-foreground/8" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 items-start">
              <div className="lg:sticky" style={{ top: "6rem" }}>
                <p className="text-foreground/30 text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
                  <span className="w-6 h-px bg-moss rounded-full flex-shrink-0" />
                  Perguntas frequentes
                </p>
                <h2
                  className="text-foreground text-4xl lg:text-5xl font-bold leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Tem<br />dúvidas?
                </h2>
                <p className="text-foreground/35 text-sm leading-relaxed mt-6 max-w-xs">
                  Se não encontrar a resposta que procura, contacte-nos diretamente.
                </p>
              </div>
              <FAQ />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="py-32 bg-moss-dark relative overflow-hidden border-t border-moss/20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 80% at 105% 110%, rgba(74,124,89,0.5) 0%, transparent 55%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
          <AnimateIn>
            <p className="text-cream/30 text-[10px] tracking-[0.5em] uppercase mb-10 flex items-center gap-3">
              <span className="w-5 h-px bg-cream/30 rounded-full flex-shrink-0" />
              Resposta imediata
            </p>
            <h2
              className="text-cream font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(36px, 5vw, 72px)" }}
            >
              Prefere falar<br />agora?
            </h2>
            <p className="text-cream/45 text-base leading-relaxed max-w-md mb-12">
              Fale connosco diretamente pelo WhatsApp. Estamos disponíveis de segunda a sexta, das 9h às 18h.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/351919259820?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20organiza%C3%A7%C3%A3o%20de%20eventos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-cream text-ink font-medium rounded-sm hover:bg-cream-dark transition-all duration-300 text-[11px] tracking-[0.3em] uppercase"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Abrir WhatsApp →
              </a>
              <Link
                href="mailto:liquen.alentejo@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 border border-cream/20 text-cream/60 font-medium rounded-sm hover:border-cream/40 hover:text-cream/85 transition-all duration-300 text-[11px] tracking-[0.3em] uppercase"
              >
                Enviar e-mail
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
