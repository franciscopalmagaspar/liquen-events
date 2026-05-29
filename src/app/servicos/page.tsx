import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const categories = [
  {
    label: "Para empresas",
    title: "Eventos Corporativos",
    services: [
      {
        title: "Conferências & Congressos",
        desc: "Organização completa de conferências empresariais, desde a logística ao audiovisual e gestão de convidados.",
        features: ["Sala de conferências", "Audiovisual profissional", "Coffee breaks", "Gestão de inscrições"],
      },
      {
        title: "Teambuilding",
        desc: "Actividades e experiências que unem equipas, fortalecem a cultura organizacional e criam memórias partilhadas.",
        features: ["Actividades indoor e outdoor", "Facilitação profissional", "Catering personalizado", "Fotografia"],
      },
      {
        title: "Lançamentos de Produto",
        desc: "Eventos de impacto para apresentar novos produtos ou serviços ao mercado com criatividade e precisão.",
        features: ["Conceito criativo", "Cenografia", "Media & PR", "Conteúdo digital"],
      },
      {
        title: "Jantares de Empresa",
        desc: "Desde jantares de Natal a gala awards, criamos momentos de celebração corporativa memoráveis.",
        features: ["Decoração temática", "Menu personalizado", "Entretenimento", "Coordenação total"],
      },
    ],
  },
  {
    label: "Para pessoas",
    title: "Eventos Sociais",
    services: [
      {
        title: "Casamentos",
        desc: "O vosso dia mais especial, planeado ao pormenor. Da escolha do espaço ao último detalhe da decoração.",
        features: ["Wedding planning completo", "Decoração floral", "Catering premium", "Coordenação do dia"],
      },
      {
        title: "Batizados & Comunhões",
        desc: "Celebrações familiares íntimas e cheias de significado, organizadas com carinho e atenção.",
        features: ["Decoração personalizada", "Catering familiar", "Animação infantil", "Fotografia"],
      },
      {
        title: "Festas de Aniversário",
        desc: "Festas temáticas ou clássicas para todas as idades. Cada aniversário é uma história a contar.",
        features: ["Conceito temático", "Decoração completa", "Catering & bolo", "Entretenimento"],
      },
      {
        title: "Jantares de Gala",
        desc: "Eventos sociais de prestígio com ambiente sofisticado, culinária de excelência e coordenação impecável.",
        features: ["Mesa posta premium", "Chef convidado", "Wine pairing", "Animação cultural"],
      },
    ],
  },
];

const process = [
  { step: "01", title: "Briefing", desc: "Ouvimos a sua ideia, percebemos os seus objetivos e definimos o conceito." },
  { step: "02", title: "Proposta", desc: "Apresentamos uma proposta detalhada com orçamento transparente." },
  { step: "03", title: "Produção", desc: "Tratamos de tudo — fornecedores, logística, decoração e coordenação." },
  { step: "04", title: "Execução", desc: "No dia do evento, estamos presentes para garantir que tudo corre na perfeição." },
];

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        label="O que oferecemos"
        title="Os Nossos Serviços"
        description="Cobrimos todos os tipos de eventos com a mesma dedicação e profissionalismo."
      />

      {categories.map((cat, ci) => (
        <section
          key={cat.title}
          className={`py-24 ${ci % 2 === 0 ? "bg-surface" : "bg-surface-raised"} border-b border-foreground/8`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="mb-14">
              <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-3">
                {cat.label}
              </p>
              <h2
                className="text-foreground text-3xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {cat.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/8 border border-foreground/8 rounded-2xl overflow-hidden">
              {cat.services.map((s) => (
                <div
                  key={s.title}
                  className={`p-8 ${ci % 2 === 0 ? "bg-surface" : "bg-surface-raised"} hover:bg-surface-elevated transition-colors`}
                >
                  <h3
                    className="text-foreground text-lg font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-foreground/45 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-foreground/50">
                        <span className="w-1 h-1 rounded-full bg-moss flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-24 bg-surface border-b border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-5">
              Como trabalhamos
            </p>
            <h2
              className="text-foreground text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              O Nosso Processo
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-foreground/8 border border-foreground/8 rounded-2xl overflow-hidden">
            {process.map((p) => (
              <div key={p.step} className="p-10 bg-surface">
                <div
                  className="text-foreground/12 text-5xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {p.step}
                </div>
                <h3
                  className="text-foreground text-lg font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {p.title}
                </h3>
                <p className="text-foreground/45 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-surface text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-foreground text-4xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tem um evento<br />
            <em className="not-italic text-moss">em mente?</em>
          </h2>
          <p className="text-foreground/45 mb-10">
            Peça-nos um orçamento sem compromisso e vemos como podemos ajudar.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-10 py-5 bg-moss text-cream font-semibold rounded-xl hover:bg-moss-dark transition-colors text-sm tracking-wide"
          >
            Pedir Orçamento →
          </Link>
        </div>
      </section>
    </>
  );
}
