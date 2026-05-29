import PageHeader from "@/components/PageHeader";

const photos = [
  { gradient: "from-moss-dark to-moss", label: "Conferência", size: "col-span-2 row-span-2" },
  { gradient: "from-moss to-moss-light", label: "Casamento" },
  { gradient: "from-ink/60 to-moss-dark", label: "Gala" },
  { gradient: "from-moss/50 to-cream-dark", label: "Teambuilding", size: "col-span-2" },
  { gradient: "from-moss-dark/70 to-moss/80", label: "Decoração" },
  { gradient: "from-moss-light to-moss", label: "Catering" },
  { gradient: "from-ink/50 to-moss-dark/80", label: "Lançamento" },
  { gradient: "from-moss to-ink/60", label: "Jantar" },
  { gradient: "from-moss-dark to-moss-light", label: "Aniversário", size: "col-span-2" },
  { gradient: "from-moss/40 to-moss-dark/60", label: "Cocktail" },
];

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        label="Os nossos momentos"
        title="Galeria"
        description="Imagens que capturam a essência dos eventos que criámos."
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
            {photos.map((p, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${p.gradient} rounded-xl overflow-hidden relative group cursor-pointer ${p.size ?? ""}`}
              >
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium tracking-widest uppercase text-cream/90 bg-ink/30 px-3 py-1 rounded-full">
                    {p.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-ink/40 mt-10">
            Fotografias reais dos nossos eventos disponíveis em breve.
          </p>
        </div>
      </section>

      {/* Instagram teaser */}
      <section className="py-16 bg-cream-dark text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Redes sociais
          </p>
          <h2
            className="text-ink text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Siga-nos no Instagram
          </h2>
          <p className="text-ink/55 mb-6">
            Partilhamos os bastidores dos nossos eventos e inspirações diárias.
          </p>
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-moss text-cream font-medium rounded-lg text-sm tracking-wide">
            @liquenevents
          </span>
        </div>
      </section>
    </>
  );
}
