import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const clients = [
  "Jose de Mello", "Fita Preta", "Câmara Municipal de Évora", "Portugal NUTS",
  "Aernnova Aerospace", "Mainova", "Universidade de Évora", "Convento do Espinheiro",
  "Perez Llorca", "PACT", "Casa Morgado Esporão", "Monte do Zambujal",
  "EDIA", "ESRI", "Palácio Cadaval", "Clínica Santa",
];

const services = [
  {
    title: "Eventos Corporativos",
    desc: "Conferências, teambuildings, lançamentos e jantares de empresa que fortalecem marcas e unem equipas.",
    image: "/imagens/EW1_1392.jpg",
    href: "/servicos#empresas",
  },
  {
    title: "Casamentos & Celebrações",
    desc: "O seu dia mais especial, planeado ao pormenor. Soluções personalizadas adaptadas ao seu estilo, gosto e orçamento.",
    image: "/imagens/DaniGui_Preview12.jpg",
    href: "/servicos#celebrações",
  },
  {
    title: "Eventos Culturais",
    desc: "Experiências culturais únicas e memoráveis, criadas com criatividade e dedicação.",
    image: "/imagens/20_10_2025_0295.jpg",
    href: "/servicos#cultura",
  },
  {
    title: "Eventos Privados",
    desc: "Festas, aniversários e celebrações familiares organizadas com carinho e atenção a cada detalhe.",
    image: "/imagens/DaniGui_JantarFesta_1.jpg",
    href: "/servicos#celebrações",
  },
];

const featured = [
  {
    category: "Corporativo",
    title: "Aernnova Aerospace",
    desc: "Evento corporativo de alto nível com produção completa, decoração sofisticada e coordenação impecável.",
    tags: ["Corporativo", "Évora"],
    image: "/imagens/EW1_1392.jpg",
  },
  {
    category: "Casamento",
    title: "Daniela & Guilherme",
    desc: "Casamento intimista com decoração elegante e coordenação completa do dia, eternizando cada memória.",
    tags: ["Casamento", "Portugal"],
    image: "/imagens/DaniGui_Preview12.jpg",
  },
  {
    category: "Casamento",
    title: "João & Pedro",
    desc: "Celebração única com decoração personalizada, produção completa e atenção ao detalhe em cada momento.",
    tags: ["Casamento", "Portugal"],
    image: "/imagens/JOAO_E_PEDRO_1Y1A3170.jpg",
  },
];

type Stat =
  | { kind: "count"; to: number; suffix: string; label: string }
  | { kind: "static"; value: string; label: string };

const stats: Stat[] = [
  { kind: "count",  to: 16,  suffix: "+", label: "Clientes empresariais" },
  { kind: "count",  to: 100, suffix: "+", label: "Eventos realizados" },
  { kind: "static", value: "5★",          label: "Avaliação dos clientes" },
  { kind: "count",  to: 100, suffix: "%", label: "Soluções personalizadas" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-16 py-32 overflow-hidden">
        {/* Full-bleed background */}
        <Image
          src="/imagens/JOAO_E_PEDRO_DJI_20250628213855_0002_D.jpg"
          alt="Líquen Events — evento aéreo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered overlays: depth + smooth fade into page below */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-12 anim-0 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-moss rounded-full flex-shrink-0" />
            Organizamos Eventos · Eternizamos Memórias
          </p>
          <h1
            className="text-white text-[clamp(52px,9vw,128px)] font-bold leading-[0.85] tracking-tight mb-16 anim-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Eventos que<br />
            ficam na<br />
            <span className="text-moss">memória.</span>
          </h1>
          <div className="border-t border-white/10 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-end anim-2">
            <p className="text-white/55 text-base leading-relaxed max-w-sm">
              Especialistas em casamentos e eventos corporativos em todo Portugal.
              Soluções à medida, atenção ao detalhe em cada momento.
            </p>
            <div className="flex flex-wrap sm:justify-end items-center gap-4">
              <Link
                href="/orcamento"
                className="inline-flex items-center gap-2 px-6 py-3 bg-moss text-cream text-xs font-medium rounded-sm hover:bg-moss-dark hover:gap-3 transition-all duration-300 tracking-widest uppercase shadow-lg shadow-moss/20"
              >
                Pedir Orçamento →
              </Link>
              <Link
                href="/portfolio"
                className="link-line text-xs text-white/40 hover:text-white/65 transition-colors tracking-[0.2em] uppercase"
              >
                Ver portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 anim-3">
          <span className="text-white/25 text-[9px] tracking-[0.5em] uppercase">Scroll</span>
          <div className="h-12 w-px overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-white/50 to-transparent animate-scroll-line" />
          </div>
        </div>
      </section>

      {/* ── Clients marquee ── */}
      <div className="relative py-7 border-y border-foreground/8 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="text-foreground/20 text-xs font-medium tracking-[0.3em] uppercase flex-shrink-0 hover:text-foreground/50 transition-colors cursor-default"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* ── Services — 2×2 card grid ── */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <div className="flex items-center justify-between mb-16">
              <p className="text-foreground/30 text-xs tracking-[0.3em] uppercase flex items-center gap-3">
                <span className="w-6 h-px bg-moss rounded-full flex-shrink-0" />
                O que fazemos
              </p>
              <Link
                href="/servicos"
                className="group text-xs text-foreground/30 hover:text-foreground/60 transition-colors flex items-center gap-1.5"
              >
                Ver todos os serviços
                <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </Link>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 60}>
                <Link
                  href={s.href}
                  className="group relative block rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:from-black/75 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className="w-6 h-px bg-moss/70 mb-5 group-hover:w-12 transition-all duration-300" />
                    <h3
                      className="text-cream text-xl lg:text-2xl font-bold mb-2 group-hover:text-moss transition-colors duration-200"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-cream/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="text-cream/25 group-hover:text-cream/70 group-hover:translate-x-0.5 transition-all duration-300">
                      →
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured work ── */}
      <section className="py-28 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <div className="flex items-center justify-between mb-20">
              <p className="text-foreground/30 text-xs tracking-[0.3em] uppercase flex items-center gap-3">
                <span className="w-6 h-px bg-moss rounded-full flex-shrink-0" />
                Trabalho selecionado
              </p>
              <Link
                href="/portfolio"
                className="group text-xs text-foreground/30 hover:text-foreground/60 transition-colors flex items-center gap-1.5"
              >
                Ver tudo
                <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
              </Link>
            </div>
          </AnimateIn>
          <div className="flex flex-col gap-3">
            {featured.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 60}>
                <div className="group grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-2xl border border-foreground/6 hover:border-foreground/15 transition-all duration-300 cursor-pointer bg-surface-raised">
                  {/* Thumbnail with category overlay */}
                  <div
                    className="lg:col-span-2 relative overflow-hidden"
                    style={{ minHeight: "260px" }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.3em] uppercase text-cream/80 bg-black/25 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cream/10">
                      {p.category}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="lg:col-span-3 flex flex-col justify-center p-10 lg:p-14">
                    <h3
                      className="text-foreground text-2xl lg:text-4xl font-bold mb-5 group-hover:text-moss transition-colors duration-200 leading-tight"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-foreground/40 text-sm leading-relaxed mb-8">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 border border-foreground/10 rounded-full text-foreground/30 text-xs tracking-wide group-hover:border-moss/25 group-hover:text-moss/55 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-foreground/15 group-hover:text-moss/60 group-hover:translate-x-1 transition-all duration-300 text-lg flex-shrink-0 ml-4">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats — full-bleed moss break ── */}
      <section className="py-24 bg-moss-dark relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 105% 110%, rgba(74,124,89,0.4) 0%, transparent 55%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 80}>
                <div
                  className="text-cream text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.kind === "count" ? (
                    <CountUp to={s.to} suffix={s.suffix} />
                  ) : (
                    s.value
                  )}
                </div>
                <div className="w-6 h-px bg-cream/25 mb-3" />
                <div className="text-cream/50 text-xs tracking-[0.2em] uppercase">
                  {s.label}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialsCarousel />

      {/* ── CTA ── */}
      <section className="relative py-44 overflow-hidden">
        <Image
          src="/imagens/JOAO_E_PEDRO_1Y1A3170.jpg"
          alt="Líquen Events — celebração"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-transparent to-[#080808]/70" />

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <AnimateIn>
            <p className="text-white/35 text-xs tracking-[0.3em] uppercase mb-10 flex items-center gap-3">
              <span className="w-6 h-px bg-moss rounded-full flex-shrink-0" />
              <span className="text-moss">Próximo passo</span>
            </p>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h2
              className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-12 max-w-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vamos trabalhar juntos?
            </h2>
          </AnimateIn>
          <AnimateIn delay={180}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-moss text-cream font-medium rounded-sm hover:bg-moss-dark hover:gap-5 transition-all duration-300 text-sm tracking-widest uppercase shadow-lg shadow-moss/25"
              >
                Entrar em contacto →
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white/55 font-medium rounded-sm hover:border-white/40 hover:text-white/85 transition-all duration-300 text-sm tracking-widest uppercase"
              >
                Ver o nosso trabalho
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
