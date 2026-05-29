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
    gradient: "from-ink/80 to-moss-dark",
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
    gradient: "from-moss-dark to-ink/70",
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

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl overflow-hidden bg-surface-elevated hover:shadow-xl hover:shadow-black/50 transition-shadow"
              >
                <div
                  className={`h-52 bg-gradient-to-br ${p.gradient} flex items-end p-5`}
                >
                  <span className="text-xs font-medium tracking-widest uppercase text-cream/70 bg-cream/10 px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3
                    className="text-foreground text-xl font-bold mb-2 group-hover:text-moss transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-moss/15 text-moss rounded-full font-medium"
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

      <section className="py-16 bg-moss text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-cream text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            O Próximo Projeto É o Seu
          </h2>
          <p className="text-cream/70 mb-8">
            Vamos criar juntos algo que ficará para sempre na memória.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-moss-dark font-semibold rounded-lg hover:bg-cream/90 transition-colors text-sm tracking-wide"
          >
            Falar Connosco →
          </Link>
        </div>
      </section>
    </>
  );
}
