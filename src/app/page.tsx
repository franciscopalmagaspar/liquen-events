import Link from "next/link";

const clients = [
  "NOS", "Vodafone PT", "EDP", "Grupo Visabeira", "Impresa", "Galp",
  "TAP Air Portugal", "Sonae", "Banco BPI", "Jerónimo Martins", "CTT", "Nos Alive",
];

const services = [
  {
    title: "Eventos Corporativos",
    desc: "Conferências, teambuildings e lançamentos de produto que fortalecem marcas e unem equipas.",
  },
  {
    title: "Casamentos & Celebrações",
    desc: "O seu dia mais especial, planeado ao pormenor com elegância, emoção e atenção ao detalhe.",
  },
  {
    title: "Jantares de Gala",
    desc: "Ambientes sofisticados, produção premium e coordenação impecável para eventos de prestígio.",
  },
];

const featured = [
  {
    category: "Corporativo",
    title: "Tech Summit — Conferência Anual",
    desc: "Conferência para 800 participantes com keynotes internacionais, workshops paralelos e networking dinner no Centro de Congressos de Lisboa.",
    tags: ["800 pax", "Lisboa", "2024"],
    gradient: "from-moss-dark to-moss",
  },
  {
    category: "Casamento",
    title: "Quinta da Bacalhoa",
    desc: "Casamento de 200 convidados em ambiente de vinha. Decoração floral, jantar gourmet e coordenação total do dia.",
    tags: ["200 pax", "Setúbal", "2024"],
    gradient: "from-moss to-moss-light",
  },
  {
    category: "Gala",
    title: "Jantar de Gala Awards 2024",
    desc: "Cerimónia de entrega de prémios para 350 convidados no Palácio do Freixo. Produção cinematográfica, live music e menu de autor.",
    tags: ["350 pax", "Porto", "2024"],
    gradient: "from-[#1a1a2e] to-moss-dark",
  },
];

const stats = [
  { value: "10+", label: "Anos de experiência" },
  { value: "500+", label: "Eventos realizados" },
  { value: "200+", label: "Clientes satisfeitos" },
  { value: "50+", label: "Parceiros de excelência" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-16 bg-surface">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-foreground/35 text-xs tracking-[0.35em] uppercase mb-10">
            Organização de Eventos · Desde 2014
          </p>
          <h1
            className="text-foreground text-6xl sm:text-8xl lg:text-[110px] font-bold leading-[0.88] mb-14 tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Eventos que<br />
            <em className="not-italic text-moss">ficam</em> na<br />
            memória.
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-foreground/10 pt-8">
            <p className="text-foreground/50 text-base sm:text-lg max-w-md leading-relaxed">
              Transformamos ideias em experiências extraordinárias para empresas e celebrações que procuram excelência.
            </p>
            <Link
              href="/portfolio"
              className="text-sm text-foreground/45 hover:text-foreground transition-colors tracking-wide whitespace-nowrap"
            >
              Ver o nosso trabalho ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <div className="py-8 border-y border-foreground/8 overflow-hidden bg-surface">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="text-foreground/25 text-xs font-medium tracking-[0.25em] uppercase flex-shrink-0"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-baseline justify-between mb-16">
            <h2
              className="text-foreground text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              O que fazemos
            </h2>
            <Link
              href="/servicos"
              className="text-sm text-foreground/40 hover:text-foreground transition-colors"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/8 border border-foreground/8 rounded-2xl overflow-hidden">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="p-10 bg-surface group hover:bg-surface-raised transition-colors"
              >
                <span className="text-foreground/20 text-xs font-medium tracking-[0.2em]">
                  0{i + 1}
                </span>
                <h3
                  className="text-foreground text-xl font-bold mt-5 mb-4 group-hover:text-moss transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.title}
                </h3>
                <p className="text-foreground/45 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured portfolio */}
      <section className="py-28 bg-surface-raised">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-baseline justify-between mb-16">
            <h2
              className="text-foreground text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Trabalho selecionado
            </h2>
            <Link
              href="/portfolio"
              className="text-sm text-foreground/40 hover:text-foreground transition-colors"
            >
              Ver tudo →
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {featured.map((p) => (
              <div
                key={p.title}
                className="group grid grid-cols-1 lg:grid-cols-2 bg-surface rounded-2xl overflow-hidden hover:bg-surface-elevated transition-colors cursor-pointer"
              >
                <div
                  className={`h-64 lg:h-72 bg-gradient-to-br ${p.gradient}`}
                />
                <div className="p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-moss text-xs tracking-[0.2em] uppercase font-medium">
                      {p.category}
                    </span>
                    <h3
                      className="text-foreground text-2xl font-bold mt-3 mb-3 group-hover:text-moss transition-colors"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-foreground/50 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-foreground/6 text-foreground/45 rounded-full border border-foreground/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-surface border-y border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-foreground text-5xl sm:text-6xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.value}
                </div>
                <div className="text-foreground/35 text-sm tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-surface text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-foreground text-5xl sm:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vamos trabalhar<br />
            <em className="not-italic text-moss">juntos?</em>
          </h2>
          <p className="text-foreground/45 text-lg mb-12 leading-relaxed">
            Conte-nos o seu próximo evento. Nós tratamos de tudo.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 px-10 py-5 bg-moss text-cream font-semibold rounded-xl hover:bg-moss-dark transition-colors text-sm tracking-wide"
          >
            Entrar em contacto →
          </Link>
        </div>
      </section>
    </>
  );
}
