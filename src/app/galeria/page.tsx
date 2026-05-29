import PageHeader from "@/components/PageHeader";

const photos = [
  { gradient: "from-moss-dark to-moss", label: "Conferência", size: "col-span-2 row-span-2" },
  { gradient: "from-moss to-moss-light", label: "Casamento" },
  { gradient: "from-[#1a1a2e] to-moss-dark", label: "Gala" },
  { gradient: "from-moss/50 to-moss-dark/80", label: "Teambuilding", size: "col-span-2" },
  { gradient: "from-moss-dark/70 to-moss/80", label: "Decoração" },
  { gradient: "from-moss-light to-moss", label: "Catering" },
  { gradient: "from-[#1a1a2e]/80 to-moss-dark/80", label: "Lançamento" },
  { gradient: "from-moss to-[#1a1a2e]/60", label: "Jantar" },
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

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
            {photos.map((p, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${p.gradient} rounded-xl overflow-hidden relative group cursor-pointer ${p.size ?? ""}`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium tracking-widest uppercase text-cream/90 bg-black/40 px-3 py-1 rounded-full">
                    {p.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-foreground/30 mt-12">
            Fotografias reais dos nossos eventos disponíveis em breve.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface-raised text-center border-t border-foreground/8">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-5">
            Redes sociais
          </p>
          <h2
            className="text-foreground text-4xl font-bold mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Siga-nos no Instagram
          </h2>
          <p className="text-foreground/45 mb-8 text-sm leading-relaxed">
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
