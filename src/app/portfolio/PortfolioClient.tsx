"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

const projects = [
  {
    category: "Corporativo",
    title: "Aernnova Aerospace",
    desc: "Evento corporativo de alto nível com produção completa, decoração sofisticada e coordenação impecável.",
    tags: ["Corporativo", "Évora"],
    image: "/imagens/EW1_1392.jpg",
  },
  {
    category: "Institucional",
    title: "Câmara Municipal de Évora",
    desc: "Organização e produção de evento institucional com coordenação completa, decoração personalizada e gestão de protocolo.",
    tags: ["Institucional", "Évora"],
    image: "/imagens/20_10_2025_0295.jpg",
  },
  {
    category: "Casamento",
    title: "Daniela & Guilherme",
    desc: "Casamento intimista com decoração elegante, coordenação completa do dia e criação de memórias inesquecíveis.",
    tags: ["Casamento", "Portugal"],
    image: "/imagens/DaniGui_Preview12.jpg",
  },
  {
    category: "Corporativo",
    title: "Universidade de Évora",
    desc: "Evento académico com organização completa, decoração cuidada e coordenação de todos os detalhes logísticos.",
    tags: ["Institucional", "Évora"],
    image: "/imagens/EW1_0362.jpg",
  },
  {
    category: "Casamento",
    title: "João & Pedro",
    desc: "Celebração única com decoração personalizada, produção completa e atenção ao detalhe em cada momento.",
    tags: ["Casamento", "Portugal"],
    image: "/imagens/JOAO_E_PEDRO_1Y1A3170.jpg",
  },
  {
    category: "Corporativo",
    title: "Jose de Mello",
    desc: "Evento corporativo com decoração e coordenação impecável, elevando a imagem da organização.",
    tags: ["Corporativo", "Portugal"],
    image: "/imagens/EW1_0688.jpg",
  },
];

const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function PortfolioClient() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.category === active);

  const countFor = (cat: string) =>
    cat === "Todos" ? projects.length : projects.filter((p) => p.category === cat).length;

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-16 z-40 bg-surface/92 backdrop-blur-md border-b border-foreground/8 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-200 rounded-sm ${
                  active === cat
                    ? "bg-moss text-cream"
                    : "border border-foreground/12 text-foreground/40 hover:text-foreground/70 hover:border-foreground/25"
                }`}
              >
                {cat}
                <span className={`text-[10px] tabular-nums ${active === cat ? "text-cream/50" : "text-foreground/20"}`}>
                  {countFor(cat)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {filtered.map((p, i) => (
            <AnimateIn key={p.title} delay={i * 60}>
              <div className="group py-20 border-t border-foreground/8" data-cursor="Ver">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-20">

                  {/* Image — dominant, 60 % width */}
                  <div
                    className="relative overflow-hidden"
                    style={{ minHeight: "420px" }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center lg:py-8">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-foreground/15 text-xs font-mono tabular-nums">
                        0{i + 1}
                      </span>
                      <span className="flex-1 h-px bg-foreground/8" />
                      <p className="text-foreground/30 text-[10px] tracking-[0.4em] uppercase">
                        {p.category}
                      </p>
                    </div>

                    <h3
                      className="text-foreground text-3xl lg:text-4xl font-bold mb-6 leading-tight group-hover:text-moss transition-colors duration-200"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {p.title}
                    </h3>

                    <p className="text-foreground/40 text-sm leading-[1.9] mb-10">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-12">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 border border-foreground/10 text-foreground/30 rounded-full tracking-wide group-hover:border-moss/25 group-hover:text-moss/55 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contacto"
                      className="text-[11px] tracking-[0.3em] uppercase text-foreground/25 hover:text-moss group-hover:text-moss transition-colors duration-300"
                    >
                      Solicitar proposta →
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
          <div className="border-t border-foreground/8" />
        </div>
      </section>
    </>
  );
}
