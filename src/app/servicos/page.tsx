import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const corporate = [
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
];

const social = [
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
];

function ServiceCard({
  title,
  desc,
  features,
}: {
  title: string;
  desc: string;
  features: string[];
}) {
  return (
    <div className="bg-cream rounded-xl p-7 hover:shadow-lg transition-shadow">
      <h3
        className="text-ink text-xl font-bold mb-3"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h3>
      <p className="text-ink/60 text-sm leading-relaxed mb-5">{desc}</p>
      <ul className="flex flex-col gap-2">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-ink/70">
            <span className="w-1.5 h-1.5 rounded-full bg-moss flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        label="O que oferecemos"
        title="Os Nossos Serviços"
        description="Cobrimos todos os tipos de eventos com a mesma dedicação e profissionalismo."
      />

      {/* Corporate */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Para empresas
            </p>
            <h2
              className="text-ink text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Eventos Corporativos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporate.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Para pessoas
            </p>
            <h2
              className="text-ink text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Eventos Sociais
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {social.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-moss">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cream/65 text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Como trabalhamos
            </p>
            <h2
              className="text-cream text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              O Nosso Processo
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Briefing", desc: "Ouvimos a sua ideia, percebemos os seus objetivos e definimos o conceito." },
              { step: "02", title: "Proposta", desc: "Apresentamos uma proposta detalhada com orçamento transparente." },
              { step: "03", title: "Produção", desc: "Tratamos de tudo — fornecedores, logística, decoração e coordenação." },
              { step: "04", title: "Execução", desc: "No dia do evento, estamos presentes para garantir que tudo corre na perfeição." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div
                  className="text-cream/25 text-5xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {p.step}
                </div>
                <h3
                  className="text-cream text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {p.title}
                </h3>
                <p className="text-cream/65 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream-dark text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-ink text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Tem um Evento em Mente?
          </h2>
          <p className="text-ink/55 mb-8">
            Peça-nos um orçamento sem compromisso e vemos como podemos ajudar.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-moss text-cream font-semibold rounded-lg hover:bg-moss-dark transition-colors text-sm tracking-wide"
          >
            Pedir Orçamento →
          </Link>
        </div>
      </section>
    </>
  );
}
