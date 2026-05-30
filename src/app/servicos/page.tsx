import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import CountUp from "@/components/CountUp";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { clients } from "@/data";

export const metadata: Metadata = pageMetadata({
  title: "Serviços — Casamentos e Eventos Corporativos no Alentejo",
  description:
    "Organização de casamentos, eventos corporativos, conferências, festas e eventos culturais em Évora, Alentejo, Lisboa e todo o Portugal. Soluções à medida do seu evento.",
  path: "/servicos",
  image: "/imagens/EW1_1408.jpg",
  keywords: [
    "wedding planner Alentejo",
    "organização de casamentos Évora",
    "eventos corporativos Lisboa",
    "conferências e congressos",
    "organização de festas Alentejo",
  ],
});

type StatItem =
  | { kind: "count"; to: number; suffix: string; label: string }
  | { kind: "static"; value: string; label: string };

const stats: StatItem[] = [
  { kind: "count", to: 100, suffix: "+", label: "Eventos realizados" },
  { kind: "count", to: 16, suffix: "+", label: "Clientes empresariais" },
  { kind: "count", to: 8, suffix: "+", label: "Anos de experiência" },
  { kind: "static", value: "5★", label: "Avaliação dos clientes" },
];

const navItems = [
  { label: "Empresas", id: "empresas" },
  { label: "Celebrações", id: "celebracoes" },
  { label: "Cultura", id: "cultura" },
];

const categories = [
  {
    id: "empresas",
    num: "01",
    label: "Empresas",
    subtitle: "Para empresas",
    desc: "Elevamos a imagem da sua marca através de eventos que transformam equipas e celebram conquistas.",
    cardAspect: "3/4",
    gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    panelTranslate: "72%",
    services: [
      {
        title: "Conferências & Congressos",
        slug: "eventos-corporativos",
        desc: "Organização completa de conferências empresariais, da logística ao audiovisual e gestão de convidados.",
        features: ["Audiovisual profissional", "Coffee breaks", "Gestão de inscrições", "Sala de conferências"],
        image: "/imagens/EW1_1330.jpg",
      },
      {
        title: "Teambuilding",
        slug: "eventos-corporativos",
        desc: "Actividades e experiências que unem equipas e fortalecem a cultura organizacional.",
        features: ["Actividades indoor e outdoor", "Facilitação profissional", "Catering personalizado", "Fotografia"],
        image: "/imagens/EW1_0576.jpg",
      },
      {
        title: "Lançamentos de Produto",
        slug: "eventos-corporativos",
        desc: "Eventos de impacto para apresentar novos produtos ao mercado com criatividade e precisão.",
        features: ["Conceito criativo", "Cenografia", "Media & PR", "Conteúdo digital"],
        image: "/imagens/EW1_0697.jpg",
      },
      {
        title: "Jantares de Empresa",
        slug: "eventos-corporativos",
        desc: "Desde jantares de Natal a gala awards, criamos momentos de celebração corporativa memoráveis.",
        features: ["Decoração temática", "Menu personalizado", "Entretenimento", "Coordenação total"],
        image: "/imagens/EW1_1404.jpg",
      },
    ],
  },
  {
    id: "celebracoes",
    num: "02",
    label: "Celebrações",
    subtitle: "Para particulares",
    desc: "Os momentos mais importantes da sua vida, planeados ao pormenor com cuidado e elegância.",
    cardAspect: "3/4",
    gridCols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    panelTranslate: "72%",
    services: [
      {
        title: "Casamentos",
        slug: "casamentos",
        desc: "O vosso dia mais especial, planeado ao pormenor. Da escolha do espaço ao último detalhe.",
        features: ["Wedding planning completo", "Decoração floral", "Catering premium", "Coordenação do dia"],
        image: "/imagens/DaniGui_Preview18.jpg",
      },
      {
        title: "Batizados & Comunhões",
        slug: "festas-e-aniversarios",
        desc: "Celebrações familiares íntimas e cheias de significado, organizadas com carinho.",
        features: ["Decoração personalizada", "Catering familiar", "Animação infantil", "Fotografia"],
        image: "/imagens/DaniGui_JantarFesta_11.jpg",
      },
      {
        title: "Festas de Aniversário",
        slug: "festas-e-aniversarios",
        desc: "Festas temáticas ou clássicas para todas as idades. Cada aniversário é uma história.",
        features: ["Conceito temático", "Decoração completa", "Catering & bolo", "Entretenimento"],
        image: "/imagens/DaniGui_JantarFesta_1.jpg",
      },
      {
        title: "Jantares de Gala",
        slug: "jantares-de-gala",
        desc: "Eventos sociais de prestígio com ambiente sofisticado e coordenação impecável.",
        features: ["Mesa posta premium", "Chef convidado", "Wine pairing", "Animação cultural"],
        image: "/imagens/JOAO_E_PEDRO_IMGL2180.jpg",
      },
    ],
  },
  {
    id: "cultura",
    num: "03",
    label: "Cultura",
    subtitle: "Eventos culturais",
    desc: "Experiências que transcendem o evento e ficam na memória colectiva.",
    cardAspect: "16/9",
    gridCols: "grid-cols-1 sm:grid-cols-2",
    panelTranslate: "58%",
    services: [
      {
        title: "Eventos Culturais",
        slug: "eventos-culturais",
        desc: "Experiências culturais únicas criadas com criatividade, dedicação e atenção a cada pormenor.",
        features: ["Conceito criativo", "Decoração temática", "Produção completa", "Coordenação total"],
        image: "/imagens/20_10_2025_0302.jpg",
      },
      {
        title: "Exposições & Inaugurações",
        slug: "eventos-culturais",
        desc: "Abertura de espaços e exposições com ambiente cuidado e coordenação profissional.",
        features: ["Cenografia", "Catering", "Gestão de convidados", "Fotografia"],
        image: "/imagens/20_10_2025_0044.jpg",
      },
    ],
  },
];

const differentiators = [
  {
    num: "01",
    title: "Coordenação Total",
    desc: "Do primeiro contacto ao último momento do dia. Um único ponto de contacto que trata de tudo para que não se preocupe com nada.",
  },
  {
    num: "02",
    title: "À Sua Medida",
    desc: "Não há dois eventos iguais. Cada projeto nasce de uma conversa e é construído à volta das suas expectativas, estilo e orçamento.",
  },
  {
    num: "03",
    title: "Rede de Excelência",
    desc: "Parceiros e fornecedores criteriosamente selecionados ao longo de anos. Qualidade e confiança garantidas em cada detalhe.",
  },
  {
    num: "04",
    title: "Presença Total",
    desc: "No dia do evento, estamos sempre presentes. Coordenação in-loco para garantir que cada momento corre na perfeição.",
  },
];

const process = [
  { step: "01", title: "Briefing", desc: "Ouvimos a sua ideia, percebemos os seus objetivos e definimos o conceito." },
  { step: "02", title: "Proposta", desc: "Apresentamos uma proposta detalhada com orçamento transparente e adaptado ao seu gosto." },
  { step: "03", title: "Produção", desc: "Tratamos de tudo — fornecedores, logística, decoração e coordenação." },
  { step: "04", title: "Execução", desc: "No dia do evento, estamos presentes para garantir que tudo corre na perfeição." },
];

export default function ServicosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Serviços", path: "/servicos" }]} />
      <ServiceJsonLd
        name="Organização de eventos, casamentos e eventos corporativos"
        description="Organização de casamentos, eventos corporativos, conferências e celebrações em Évora, Lisboa e todo o Portugal — da decoração à coordenação."
        path="/servicos"
      />
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-end pb-0 pt-40 bg-surface overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at -10% 80%, rgba(74,124,89,0.07) 0%, transparent 55%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-foreground/25 text-[10px] tracking-[0.48em] uppercase mb-12 anim-0 flex items-center gap-3">
                <span className="w-6 h-px bg-moss flex-shrink-0" />
                O que oferecemos
              </p>
              <h1
                className="text-foreground font-bold leading-[0.87] tracking-tight mb-14 anim-1"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(52px, 8.5vw, 116px)",
                }}
              >
                Cada evento,
                <br />
                uma história
                <br />
                <span className="text-moss">por contar.</span>
              </h1>
              <div className="border-t border-foreground/8 pt-10 anim-2">
                <p className="text-foreground/38 text-base leading-[1.8] max-w-sm mb-8">
                  Especializados em eventos privados, corporativos, culturais e casamentos
                  — soluções personalizadas adaptadas ao seu estilo, gosto e orçamento.
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 text-sm text-foreground/45 hover:text-foreground/75 transition-colors duration-300 group"
                >
                  <span className="w-8 h-px bg-foreground/20 flex-shrink-0 group-hover:w-14 transition-all duration-500" />
                  Pedir orçamento
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 anim-2">
              <div
                className="grid grid-cols-2 gap-2"
                style={{ height: "clamp(360px, 58vh, 600px)" }}
              >
                <div className="relative overflow-hidden row-span-2">
                  <Image
                    src="/imagens/DaniGui_Adois_61.jpg"
                    alt="Casamentos"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/imagens/EW1_1414.jpg"
                    alt="Eventos corporativos"
                    fill
                    priority
                    sizes="(max-width: 1024px) 50vw, 15vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/imagens/20_10_2025_0220.jpg"
                    alt="Eventos culturais"
                    fill
                    sizes="(max-width: 1024px) 50vw, 15vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-14 pt-6 border-t border-foreground/8 anim-3">
            <div className="flex items-center gap-10">
              {navItems.map((cat, i) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="text-foreground/22 text-[10px] tracking-[0.4em] uppercase hover:text-foreground/60 transition-colors duration-300"
                >
                  <span className="text-moss/40 mr-2 font-mono">0{i + 1}</span>
                  {cat.label}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex flex-col items-center gap-1.5 pb-4">
              <div className="w-px h-10 bg-foreground/10 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-full bg-moss/50 animate-scroll-line" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/[0.055]">
            {stats.map((stat, i) => (
              <AnimateIn key={i} delay={i * 90}>
                <div className="bg-surface px-8 py-14 flex flex-col items-center text-center">
                  <p
                    className="text-foreground font-bold leading-none mb-3"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(36px, 5vw, 64px)",
                    }}
                  >
                    {stat.kind === "count" ? (
                      <CountUp to={stat.to} suffix={stat.suffix} />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="text-foreground/28 text-[9px] tracking-[0.45em] uppercase">
                    {stat.label}
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Cards grid */}
            <div className={`grid gap-2 ${cat.gridCols}`}>
              {cat.services.map((s, si) => (
                <AnimateIn key={s.title} delay={si * 55}>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="group relative block overflow-hidden bg-surface-raised"
                    style={{ aspectRatio: cat.cardAspect }}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient deepens on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-all duration-500 group-hover:from-black/92 group-hover:via-black/45" />

                    {/* Content — title always visible, features reveal on hover */}
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-moss/65 text-[9px] tracking-[0.45em] font-mono uppercase mb-2">
                        {String(si + 1).padStart(2, "0")}
                      </p>
                      <h3
                        className="text-cream font-bold leading-tight"
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: "clamp(17px, 1.5vw, 22px)",
                        }}
                      >
                        {s.title}
                      </h3>
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                        <ul className="overflow-hidden flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:delay-100 pt-4">
                          {s.features.map((f) => (
                            <li key={f} className="flex items-center gap-2.5 text-xs text-cream/40">
                              <span className="w-1 h-1 rounded-full bg-moss/65 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Top-right index */}
                    <div className="absolute top-4 right-4">
                      <span className="text-cream/18 text-[9px] tracking-[0.3em] font-mono">
                        {cat.num}.{String(si + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Photo strip (edge-to-edge) ── */}
      <section className="bg-surface border-t border-foreground/8">
        <AnimateIn from="fade">
          <div
            className="grid grid-cols-3 gap-px"
            style={{ height: "clamp(180px, 28vw, 400px)" }}
          >
            {[
              { src: "/imagens/EW1_1100.jpg", label: "Eventos Corporativos" },
              { src: "/imagens/DaniGui_Preview19.jpg", label: "Casamentos" },
              { src: "/imagens/DaniGui_JantarFesta_17.jpg", label: "Celebrações" },
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden group">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-white/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </section>

      {/* ── Diferenciadores ── */}
      <section className="py-28 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <p className="text-foreground/25 text-[10px] tracking-[0.48em] uppercase mb-16 flex items-center gap-3">
              <span className="w-5 h-px bg-moss/50 flex-shrink-0" />
              Porquê a Líquen
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/[0.06]">
            {[
              { n: '01', t: 'Chave na mão', d: 'Do conceito à execução, tratamos de tudo para que só tenha de aproveitar.' },
              { n: '02', t: 'Rede de confiança', d: 'Fornecedores e parceiros selecionados ao detalhe, em todo o país.' },
              { n: '03', t: 'Equipa dedicada', d: 'Um interlocutor único e uma equipa criativa do início ao fim.' },
              { n: '04', t: 'Sem surpresas', d: 'Comunicação clara e uma proposta transparente, à sua medida.' },
            ].map((item, i) => (
              <AnimateIn key={item.n} delay={i * 70}>
                <div className="bg-surface h-full p-8 lg:p-10 group hover:bg-surface-raised transition-colors duration-300">
                  <p className="text-moss/55 text-[9px] tracking-[0.45em] font-mono uppercase mb-6">{item.n}</p>
                  <h3
                    className="text-foreground text-xl font-bold mb-3 group-hover:text-moss transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {item.t}
                  </h3>
                  <p className="text-foreground/38 text-sm leading-relaxed">{item.d}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service categories with sticky nav */}
      <div className="relative">
        <div className="sticky top-16 z-30 bg-surface/[0.96] backdrop-blur-md border-b border-foreground/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="flex items-center gap-8 h-11">
              {navItems.map((cat, i) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="text-[9px] tracking-[0.45em] uppercase text-foreground/30 hover:text-moss transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="text-moss/35 font-mono">0{i + 1}</span>
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="py-32 bg-surface border-t border-foreground/8"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
              <AnimateIn>
                <div className="relative mb-20">
                  <span
                    className="absolute -top-6 -left-2 select-none pointer-events-none font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(100px, 18vw, 220px)",
                      color: "rgba(222,218,212,0.025)",
                    }}
                    aria-hidden
                  >
                    {cat.num}
                  </span>
                  <div className="relative pt-4">
                    <p className="text-foreground/25 text-[10px] tracking-[0.48em] uppercase mb-5 flex items-center gap-3">
                      <span className="w-5 h-px bg-moss/50 flex-shrink-0" />
                      {cat.subtitle}
                    </p>
                    <h2
                      className="text-foreground font-bold leading-none mb-6"
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: "clamp(40px, 5.5vw, 76px)",
                      }}
                    >
                      {cat.label}
                    </h2>
                    <p className="text-foreground/33 text-sm leading-[1.8] max-w-md">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </AnimateIn>

              <div className={`grid gap-2 ${cat.gridCols}`}>
                {cat.services.map((s, si) => (
                  <AnimateIn key={s.title} delay={si * 55}>
                    <div
                      className="group relative overflow-hidden bg-surface-raised"
                      style={{ aspectRatio: cat.cardAspect }}
                    >
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-all duration-500 group-hover:from-black/92 group-hover:via-black/50" />

                      <div
                        className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:translate-y-0"
                        style={{ transform: `translateY(${cat.panelTranslate})` }}
                      >
                        <p className="text-moss/65 text-[9px] tracking-[0.45em] font-mono uppercase mb-2">
                          {String(si + 1).padStart(2, "0")}
                        </p>
                        <h3
                          className="text-cream font-bold leading-tight mb-4"
                          style={{
                            fontFamily: "var(--font-playfair)",
                            fontSize: "clamp(17px, 1.5vw, 22px)",
                          }}
                        >
                          {s.title}
                        </h3>
                        <p className="text-cream/42 text-xs leading-relaxed mb-4">{s.desc}</p>
                        <ul className="flex flex-col gap-2">
                          {s.features.map((f) => (
                            <li key={f} className="flex items-center gap-2.5 text-xs text-cream/32">
                              <span className="w-1 h-1 rounded-full bg-moss/65 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="text-cream/18 text-[9px] tracking-[0.3em] font-mono">
                          {cat.num}.{String(si + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Differentiators */}
      <section className="py-32 bg-surface-raised border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
              <div>
                <p className="text-foreground/25 text-[10px] tracking-[0.48em] uppercase mb-5 flex items-center gap-3">
                  <span className="w-5 h-px bg-moss/50 flex-shrink-0" />
                  Porque a Liquen
                </p>
                <h2
                  className="text-foreground font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(40px, 5.5vw, 72px)",
                  }}
                >
                  O que nos
                  <br />
                  <span className="text-moss">distingue</span>
                </h2>
              </div>
              <p className="text-foreground/33 text-sm leading-[1.8] max-w-sm">
                A nossa abordagem combina atenção ao detalhe, criatividade e uma rede
                de parceiros de excelência — para que cada evento seja único.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-foreground/[0.055]">
            {differentiators.map((d, i) => (
              <AnimateIn key={d.num} delay={i * 60}>
                <div className="bg-surface-raised p-10 lg:p-14 group hover:bg-surface-elevated transition-colors duration-300 relative overflow-hidden">
                  <span
                    aria-hidden
                    className="absolute -bottom-4 -right-2 select-none pointer-events-none font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(80px, 10vw, 140px)",
                      color: "rgba(222,218,212,0.028)",
                    }}
                  >
                    {d.num}
                  </span>
                  <div className="relative">
                    <p className="text-moss/55 text-[9px] tracking-[0.45em] font-mono uppercase mb-6">
                      {d.num}
                    </p>
                    <h3
                      className="text-foreground text-2xl font-bold mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {d.title}
                    </h3>
                    <p className="text-foreground/33 text-sm leading-[1.8] max-w-xs">{d.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="bg-surface border-t border-foreground/8">
        <AnimateIn from="fade">
          <div
            className="grid grid-cols-3 gap-px"
            style={{ height: "clamp(200px, 30vw, 440px)" }}
          >
            {[
              { src: "/imagens/EW1_1100.jpg", label: "Corporativo", anchor: "#empresas" },
              { src: "/imagens/DaniGui_Preview19.jpg", label: "Casamentos", anchor: "#celebracoes" },
              { src: "/imagens/DaniGui_JantarFesta_17.jpg", label: "Cultura", anchor: "#cultura" },
            ].map((item) => (
              <a key={item.src} href={item.anchor} className="relative overflow-hidden group block">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-5 lg:p-7">
                  <span className="text-[9px] tracking-[0.42em] uppercase text-white/55 group-hover:text-white/85 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </AnimateIn>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Clients */}
      <section className="py-24 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <p className="text-foreground/25 text-[10px] tracking-[0.48em] uppercase mb-14 flex items-center gap-3">
              <span className="w-5 h-px bg-moss/50 flex-shrink-0" />
              Alguns dos nossos clientes
            </p>
          </AnimateIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-foreground/[0.05]">
            {clients.map((name, i) => (
              <AnimateIn key={name} delay={i * 22}>
                <div className="bg-surface flex items-center justify-center px-6 py-9 hover:bg-surface-raised transition-colors duration-300">
                  <span className="text-foreground/25 text-[9px] tracking-[0.38em] uppercase text-center transition-colors leading-relaxed">
                    {name}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <AnimateIn>
            <p className="text-foreground/25 text-[10px] tracking-[0.48em] uppercase mb-20 flex items-center gap-3">
              <span className="w-5 h-px bg-moss/50 flex-shrink-0" />
              Como trabalhamos
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/[0.06]">
            {process.map((p, i) => (
              <AnimateIn key={p.step} delay={i * 70}>
                <div className="relative bg-surface p-10 lg:p-12 overflow-hidden group hover:bg-surface-raised transition-colors duration-300">
                  <span
                    className="absolute -top-3 -right-1 select-none pointer-events-none font-bold leading-none"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "clamp(80px, 10vw, 140px)",
                      color: "rgba(222,218,212,0.038)",
                    }}
                    aria-hidden
                  >
                    {p.step}
                  </span>
                  <div className="relative">
                    <p className="text-moss/55 text-[9px] tracking-[0.45em] font-mono uppercase mb-6">
                      {p.step}
                    </p>
                    <h3
                      className="text-foreground text-2xl font-bold mb-4"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-foreground/33 text-sm leading-[1.8]">{p.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO content ── */}
      <section className="py-16 md:py-28 bg-surface border-t border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-20">
            <AnimateIn>
              <h2
                className="text-foreground font-bold leading-[1.05]"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 3.8vw, 48px)" }}
              >
                Uma empresa de eventos para Évora, Lisboa e todo o Portugal
              </h2>
            </AnimateIn>
            <AnimateIn delay={120}>
              <div className="flex flex-col gap-5 text-foreground/45 text-[15px] leading-[1.85]">
                <p>
                  Seja um <strong className="text-foreground/70 font-medium">casamento</strong> íntimo
                  numa herdade do Alentejo, uma <strong className="text-foreground/70 font-medium">conferência
                  corporativa</strong> em Lisboa ou uma celebração cultural em Évora, a Líquen Events
                  trata de tudo — conceito, decoração, catering, fornecedores, logística e coordenação
                  no dia.
                </p>
                <p>
                  Trabalhamos com uma rede de fornecedores de confiança em todo o país e adaptamos
                  cada proposta ao seu estilo, à dimensão do evento e ao seu orçamento. O nosso
                  objetivo é simples: que só tenha de viver o momento, enquanto nós cuidamos de cada
                  pormenor.
                </p>
                <p>
                  Da primeira reunião à última vela acesa, somos um parceiro único e dedicado para o
                  seu evento — com a sensibilidade do Alentejo e a exigência de uma equipa profissional.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 lg:py-44 bg-surface border-t border-foreground/8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 80% at 0% 105%, rgba(74,124,89,0.11) 0%, transparent 58%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
          <AnimateIn>
            <p className="text-foreground/25 text-[10px] tracking-[0.48em] uppercase mb-10 flex items-center gap-3">
              <span className="w-5 h-px bg-moss flex-shrink-0" />
              <span className="text-moss/65">Próximo passo</span>
            </p>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h2
              className="text-foreground font-bold leading-[0.9] tracking-tight mb-6 max-w-3xl"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(48px, 7vw, 100px)",
              }}
            >
              Tem um evento
              <br />
              <span className="text-moss">em mente?</span>
            </h2>
            <p className="text-foreground/33 text-base leading-[1.8] mb-14 max-w-md">
              Fale connosco. Sem compromisso, sem custo. Ouvimos a sua ideia e
              apresentamos uma proposta à sua medida.
            </p>
          </AnimateIn>
          <AnimateIn delay={180}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-moss text-cream font-medium hover:bg-moss-dark hover:gap-5 transition-all duration-300 text-sm tracking-widest uppercase shadow-lg shadow-moss/15"
              >
                Pedir Orçamento →
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/12 text-foreground/45 font-medium hover:border-foreground/25 hover:text-foreground/75 transition-all duration-300 text-sm tracking-widest uppercase"
              >
                Ver o nosso portfolio
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}