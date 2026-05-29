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
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-5">
                A Nossa História
              </p>
              <h2
                className="text-foreground text-4xl font-bold mb-8 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Nascemos da Paixão por Criar Momentos Únicos
              </h2>
              <div className="flex flex-col gap-4 text-foreground/55 text-base leading-relaxed">
                <p>
                  A Liquen Events foi fundada em 2014 com uma missão simples: criar
                  eventos que ficam na memória. O nome inspira-se no líquen — um
                  organismo resistente, adaptável e belo, que cresce onde outros
                  não conseguem.
                </p>
                <p>
                  Da mesma forma, a nossa equipa prospera nos desafios. Cada evento
                  diferente é uma oportunidade de crescer, aprender e superar
                  expectativas.
                </p>
                <p>
                  Ao longo dos anos, construímos uma reputação sólida baseada em
                  resultados excepcionais e relações duradouras com os nossos
                  clientes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl h-52 bg-moss/20 flex items-center justify-center text-moss text-xs tracking-widest uppercase font-medium">
                Desde 2014
              </div>
              <div className="rounded-xl h-52 bg-surface-elevated flex items-center justify-center text-foreground/30 text-xs tracking-widest uppercase font-medium">
                Lisboa
              </div>
              <div className="rounded-xl h-52 bg-surface-elevated flex items-center justify-center text-foreground/30 text-xs tracking-widest uppercase font-medium">
                Portugal
              </div>
              <div className="rounded-xl h-52 bg-moss/10 flex items-center justify-center text-moss text-xs tracking-widest uppercase font-medium">
                500+ Eventos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-raised border-y border-foreground/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-5">
              O que nos guia
            </p>
            <h2
              className="text-foreground text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Os Nossos Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-foreground/8 border border-foreground/8 rounded-2xl overflow-hidden">
            {values.map((v, i) => (
              <div key={v.title} className="p-8 bg-surface-raised">
                <div
                  className="text-foreground/15 text-4xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="text-foreground text-lg font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-foreground/45 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-5">
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
              <div key={member.name} className="group p-8 bg-surface-raised rounded-2xl border border-foreground/8 hover:border-moss/30 transition-colors">
                <div
                  className="w-14 h-14 rounded-full bg-moss/15 mb-5 flex items-center justify-center text-moss text-xl font-bold group-hover:bg-moss/25 transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-foreground font-semibold text-base mb-1">{member.name}</h3>
                <p className="text-sm text-moss/80">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-surface text-center border-t border-foreground/8">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-foreground text-4xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vamos trabalhar<br />
            <em className="not-italic text-moss">juntos?</em>
          </h2>
          <p className="text-foreground/45 mb-10">
            Conte-nos o seu próximo evento e nós tratamos do resto.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-10 py-5 bg-moss text-cream font-semibold rounded-xl hover:bg-moss-dark transition-colors text-sm tracking-wide"
          >
            Entrar em Contacto →
          </Link>
        </div>
      </section>
    </>
  );
}
