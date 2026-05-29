import Link from "next/link";

const services = [
  {
    icon: "🏢",
    title: "Eventos Corporativos",
    desc: "Conferências, teambuildings, lançamentos de produto e jantares de empresa com rigor e elegância.",
  },
  {
    icon: "💍",
    title: "Casamentos",
    desc: "O dia mais especial da sua vida merece uma organização impecável, do início ao fim.",
  },
  {
    icon: "🎉",
    title: "Festas & Celebrações",
    desc: "Aniversários, batizados e festas temáticas com criatividade e atenção ao detalhe.",
  },
  {
    icon: "✨",
    title: "Jantares de Gala",
    desc: "Eventos formais com produção sofisticada, decoração premium e atendimento de excelência.",
  },
];

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "500+", label: "Eventos Realizados" },
  { value: "200+", label: "Clientes Satisfeitos" },
  { value: "50+", label: "Parceiros de Excelência" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #2d5c3e 0%, #4a7c59 55%, #1a3d28 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-cream/75 text-xs tracking-[0.35em] uppercase font-medium mb-5">
            Organização de Eventos
          </p>
          <h1
            className="text-cream text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Transformamos Momentos em{" "}
            <em className="not-italic text-cream/75">Memórias</em>
          </h1>
          <p className="text-cream/65 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Especialistas em eventos corporativos e sociais. Da concepção à
            execução, garantimos que cada detalhe é perfeito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/servicos"
              className="px-8 py-4 bg-cream text-moss-dark font-semibold rounded-lg hover:bg-cream/90 transition-colors text-sm tracking-wide"
            >
              Os Nossos Serviços
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-4 border-2 border-cream/50 text-cream font-semibold rounded-lg hover:border-cream hover:bg-cream/10 transition-colors text-sm tracking-wide"
            >
              Fale Connosco
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-moss text-4xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.value}
                </div>
                <div className="text-sm text-ink/55 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-3">
              O que fazemos
            </p>
            <h2
              className="text-ink text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Os Nossos Serviços
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-7 bg-cream-dark rounded-xl hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3
                  className="text-ink text-lg font-semibold mb-2 group-hover:text-moss transition-colors"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-ink/55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-moss text-cream font-medium rounded-lg hover:bg-moss-dark transition-colors text-sm tracking-wide"
            >
              Ver Todos os Serviços →
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 bg-moss">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-cream/65 text-xs tracking-[0.25em] uppercase font-medium mb-3">
                Sobre nós
              </p>
              <h2
                className="text-cream text-4xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Paixão pelos Detalhes, Excelência na Execução
              </h2>
              <p className="text-cream/75 text-base leading-relaxed mb-4">
                A Liquen Events nasceu da paixão por criar momentos únicos. Com
                mais de 10 anos de experiência, somos especialistas em
                transformar ideias em eventos extraordinários.
              </p>
              <p className="text-cream/75 text-base leading-relaxed mb-8">
                Desde eventos corporativos de grande escala a celebrações sociais
                íntimas, a nossa equipa garante que cada evento supera as
                expectativas.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cream text-cream font-medium rounded-lg hover:bg-cream hover:text-moss-dark transition-colors text-sm tracking-wide"
              >
                Conhecer a Nossa História →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { bg: "bg-moss-dark/60", label: "Corporate" },
                { bg: "bg-cream/15", label: "Weddings" },
                { bg: "bg-cream/10", label: "Galas" },
                { bg: "bg-moss-dark/40", label: "Social" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.bg} rounded-xl h-36 flex items-center justify-center text-cream/60 text-xs font-medium tracking-widest uppercase`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-dark text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-ink text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Pronto para Criar um Evento Inesquecível?
          </h2>
          <p className="text-ink/55 text-lg mb-8">
            Entre em contacto e vamos transformar a sua visão em realidade.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-moss text-cream font-semibold rounded-lg hover:bg-moss-dark transition-colors text-sm tracking-wide"
          >
            Solicitar Orçamento →
          </Link>
        </div>
      </section>
    </>
  );
}
