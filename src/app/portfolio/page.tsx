import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const projects = [
  {
    category: "Corporativo",
    title: "Conferência Anual Tech Summit",
    desc: "Conferência para 800 participantes com keynotes internacionais, workshops e networking dinner.",
    tags: ["Conferência", "800 pax", "Lisboa"],
    gradient: "from-moss-dark to-moss",
  },
  {
    category: "Casamento",
    title: "Casamento na Quinta da Bacalhoa",
    desc: "Casamento de 200 convidados em ambiente de vinha, com decoração floral e jantar gourmet.",
    tags: ["Casamento", "200 pax", "Setúbal"],
    gradient: "from-moss to-moss-light",
  },
  {
    category: "Corporativo",
    title: "Teambuilding Coastal Adventure",
    desc: "Actividade de teambuilding para equipa de 120 pessoas ao longo da costa alentejana.",
    tags: ["Teambuilding", "120 pax", "Comporta"],
    gradient: "from-moss-dark/80 to-moss",
  },
  {
    category: "Gala",
    title: "Jantar de Gala Awards 2024",
    desc: "Cerimónia de entrega de prémios com gala dinner para 350 convidados no Palácio do Freixo.",
    tags: ["Gala", "350 pax", "Porto"],
    gradient: "from-[#1a1a2e] to-moss-dark",
  },
  {
    category: "Social",
    title: "Festa de 50 Anos — Quinta das Lágrimas",
    desc: "Celebração íntima e sofisticada para 80 convidados numa quinta histórica de Coimbra.",
    tags: ["Aniversário", "80 pax", "Coimbra"],
    gradient: "from-moss/60 to-moss-dark/80",
  },
  {
    category: "Corporativo",
    title: "Lançamento Produto — Grupo Impresa",
    desc: "Evento de lançamento com cenografia imersiva, live streaming e experiências interativas.",
    tags: ["Lançamento", "400 pax", "Lisboa"],
    gradient: "from-moss-dark to-[#1a1a2e]",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        label="Os nossos projetos"
        title="Portfolio"
        description="Uma seleção dos eventos que mais nos orgulham."
      />

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col gap-4">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className={`group grid grid-cols-1 lg:grid-cols-2 bg-surface-raised rounded-2xl overflow-hidden hover:bg-surface-elevated transition-colors cursor-pointer ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`h-64 lg:h-72 bg-gradient-to-br ${p.gradient}`} />
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

      <section className="py-32 bg-surface text-center border-t border-foreground/8">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-foreground text-4xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            O próximo projeto<br />
            <em className="not-italic text-moss">é o seu.</em>
          </h2>
          <p className="text-foreground/45 mb-10">
            Vamos criar juntos algo que ficará para sempre na memória.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-10 py-5 bg-moss text-cream font-semibold rounded-xl hover:bg-moss-dark transition-colors text-sm tracking-wide"
          >
            Falar Connosco →
          </Link>
        </div>
      </section>
    </>
  );
}
