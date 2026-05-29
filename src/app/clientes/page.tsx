import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const testimonials = [
  {
    name: "Sofia Mendes",
    role: "CEO, TechVentures Portugal",
    text: "A Liquen Events superou todas as nossas expectativas para a nossa conferência anual. Organização impecável, atenção ao detalhe e uma equipa extraordinária.",
    event: "Tech Summit 2024",
  },
  {
    name: "Ricardo & Catarina",
    role: "Noivos",
    text: "O nosso casamento foi o dia mais perfeito da nossa vida. Cada detalhe foi tratado com tanto carinho que nem conseguíamos acreditar que era possível.",
    event: "Casamento, Setembro 2024",
  },
  {
    name: "André Costa",
    role: "Director de RH, Grupo Visabeira",
    text: "O teambuilding que organizaram para a nossa equipa foi transformador. Voltámos ao escritório com uma energia completamente diferente.",
    event: "Teambuilding 2024",
  },
  {
    name: "Margarida Santos",
    role: "Directora de Marketing, NOS",
    text: "Profissionalismo de alto nível. O lançamento do produto correu na perfeição e o feedback da imprensa foi excecional.",
    event: "Lançamento de Produto 2023",
  },
  {
    name: "Família Rodrigues",
    role: "Clientes particulares",
    text: "Organizaram o jantar de gala do 50.º aniversário do meu pai de forma absolutamente mágica. Todos os convidados ficaram deslumbrados.",
    event: "Jantar de Gala, 2023",
  },
  {
    name: "Paula Ferreira",
    role: "Presidente, Associação Empresarial do Alentejo",
    text: "A gala de entrega de prémios foi um sucesso retumbante. A produção, o serviço e a atenção ao protocolo foram exemplares.",
    event: "Gala Awards 2024",
  },
];

const clientLogos = [
  "NOS", "Grupo Visabeira", "TechVentures", "Impresa", "EDP", "Galp",
  "Banco BPI", "Sonae", "Jerónimo Martins", "TAP Air Portugal", "CTT", "Vodafone PT",
];

export default function ClientesPage() {
  return (
    <>
      <PageHeader
        label="Quem confia em nós"
        title="Os Nossos Clientes"
        description="Empresas e famílias que nos escolheram para os seus momentos mais especiais."
      />

      {/* Client logos */}
      <section className="py-24 bg-surface border-b border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-14">
            <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-5">
              Empresas parceiras
            </p>
            <h2
              className="text-foreground text-3xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Clientes Corporativos
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-foreground/8 border border-foreground/8 rounded-2xl overflow-hidden">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="h-20 bg-surface flex items-center justify-center text-foreground/30 text-xs font-semibold tracking-wider uppercase hover:bg-surface-elevated hover:text-moss transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-raised border-b border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-5">
              O que dizem
            </p>
            <h2
              className="text-foreground text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Testemunhos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-surface rounded-2xl p-8 flex flex-col gap-5 border border-foreground/8 hover:border-foreground/15 transition-colors"
              >
                <div
                  className="text-moss text-4xl leading-none font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  "
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed flex-1 -mt-2">
                  {t.text}
                </p>
                <div className="border-t border-foreground/8 pt-5">
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-foreground/40 mt-0.5">{t.role}</div>
                  <div className="text-xs text-moss mt-1.5 font-medium">{t.event}</div>
                </div>
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
            Junte-se aos nossos<br />
            <em className="not-italic text-moss">clientes.</em>
          </h2>
          <p className="text-foreground/45 mb-10">
            Faça parte da nossa lista de histórias de sucesso.
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
