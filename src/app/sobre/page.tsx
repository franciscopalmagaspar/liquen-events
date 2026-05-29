import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const values = [
  {
    title: "Criatividade",
    desc: "Cada evento é único. Desenvolvemos conceitos originais que refletem a personalidade e visão de cada cliente.",
  },
  {
    title: "Excelência",
    desc: "Não nos contentamos com o suficiente. Perseguimos a perfeição em cada detalhe, por mais pequeno que seja.",
  },
  {
    title: "Compromisso",
    desc: "Tratamos cada evento como se fosse o nosso. O sucesso do cliente é o nosso sucesso.",
  },
  {
    title: "Transparência",
    desc: "Comunicação clara, orçamentos detalhados e total honestidade em cada etapa do processo.",
  },
];

const team = [
  { name: "Ana Ferreira", role: "Fundadora & Directora Criativa" },
  { name: "João Santos", role: "Gestor de Eventos Corporativos" },
  { name: "Mariana Costa", role: "Coordenadora de Eventos Sociais" },
  { name: "Pedro Alves", role: "Director de Produção" },
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        label="Quem somos"
        title="Sobre a Liquen Events"
        description="Mais de 10 anos a criar eventos extraordinários em Portugal."
      />

      {/* Story */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-3">
                A Nossa História
              </p>
              <h2
                className="text-foreground text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Nascemos da Paixão por Criar Momentos Únicos
              </h2>
              <p className="text-foreground/65 text-base leading-relaxed mb-4">
                A Liquen Events foi fundada em 2014 com uma missão simples: criar
                eventos que ficam na memória. O nome inspira-se no líquen — um
                organismo resistente, adaptável e belo, que cresce onde outros
                não conseguem.
              </p>
              <p className="text-foreground/65 text-base leading-relaxed mb-4">
                Da mesma forma, a nossa equipa prospera nos desafios. Cada evento
                diferente é uma oportunidade de crescer, aprender e superar
                expectativas.
              </p>
              <p className="text-foreground/65 text-base leading-relaxed">
                Ao longo dos anos, construímos uma reputação sólida baseada em
                resultados excepcionais e relações duradouras com os nossos
                clientes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl h-48 bg-moss/20 flex items-center justify-center text-moss text-xs tracking-widest uppercase font-medium">
                Desde 2014
              </div>
              <div className="rounded-xl h-48 bg-surface-elevated flex items-center justify-center text-foreground/40 text-xs tracking-widest uppercase font-medium">
                Lisboa
              </div>
              <div className="rounded-xl h-48 bg-surface-elevated flex items-center justify-center text-foreground/40 text-xs tracking-widest uppercase font-medium">
                Portugal
              </div>
              <div className="rounded-xl h-48 bg-moss/10 flex items-center justify-center text-moss text-xs tracking-widest uppercase font-medium">
                500+ Eventos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-raised">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-3">
              O que nos guia
            </p>
            <h2
              className="text-foreground text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Os Nossos Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="p-7 bg-surface-elevated rounded-xl">
                <div
                  className="text-moss text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="text-foreground text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-3">
              As pessoas
            </p>
            <h2
              className="text-foreground text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Nossa Equipa
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-28 h-28 rounded-full bg-moss/15 mx-auto mb-4 flex items-center justify-center text-moss text-2xl font-bold group-hover:bg-moss/25 transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-foreground font-semibold text-base mb-1">{member.name}</h3>
                <p className="text-sm text-moss">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-moss text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-cream text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-cream/70 mb-8">
            Conte-nos o seu próximo evento e nós tratamos do resto.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-moss-dark font-semibold rounded-lg hover:bg-cream/90 transition-colors text-sm tracking-wide"
          >
            Entrar em Contacto →
          </Link>
        </div>
      </section>
    </>
  );
}
