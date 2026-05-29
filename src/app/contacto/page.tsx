"use client";

import PageHeader from "@/components/PageHeader";
import { useState } from "react";

export default function ContactoPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader
        label="Fale connosco"
        title="Contacto"
        description="Estamos prontos para dar vida ao seu próximo evento."
      />

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div>
              <p className="text-moss text-xs tracking-[0.25em] uppercase font-medium mb-5">
                Encontre-nos
              </p>
              <h2
                className="text-foreground text-3xl font-bold mb-12 leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Vamos falar sobre<br />o seu evento
              </h2>

              <div className="flex flex-col divide-y divide-foreground/8">
                {[
                  {
                    label: "E-mail",
                    value: "info@liquenevents.pt",
                    sub: "Respondemos em menos de 24 horas",
                  },
                  {
                    label: "Telefone",
                    value: "+351 900 000 000",
                    sub: "Seg–Sex, 9h–18h",
                  },
                  {
                    label: "Morada",
                    value: "Lisboa, Portugal",
                    sub: "Reuniões presenciais disponíveis",
                  },
                ].map((item) => (
                  <div key={item.label} className="py-6 flex gap-5">
                    <div className="w-9 h-9 rounded-lg bg-moss/12 flex-shrink-0 flex items-center justify-center text-moss text-xs font-bold mt-0.5">
                      {item.label.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs text-foreground/35 tracking-widest uppercase mb-1">
                        {item.label}
                      </div>
                      <div className="text-foreground font-medium text-sm">{item.value}</div>
                      <div className="text-xs text-foreground/35 mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-surface-elevated rounded-2xl p-10 border border-foreground/8">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-moss/20 flex items-center justify-center text-moss text-xl mb-5">
                    ✓
                  </div>
                  <h3
                    className="text-foreground text-2xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Mensagem Enviada!
                  </h3>
                  <p className="text-foreground/45 text-sm">
                    Entraremos em contacto em menos de 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-foreground/40 tracking-widest uppercase mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-surface border border-foreground/12 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/25 focus:outline-none focus:border-moss transition-colors"
                        placeholder="O seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-foreground/40 tracking-widest uppercase mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-surface border border-foreground/12 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/25 focus:outline-none focus:border-moss transition-colors"
                        placeholder="email@exemplo.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-foreground/40 tracking-widest uppercase mb-2">
                      Tipo de Evento
                    </label>
                    <select
                      required
                      className="w-full bg-surface border border-foreground/12 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-moss transition-colors"
                    >
                      <option value="">Selecione um tipo</option>
                      <option>Evento Corporativo</option>
                      <option>Casamento</option>
                      <option>Festa & Celebração</option>
                      <option>Jantar de Gala</option>
                      <option>Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-foreground/40 tracking-widest uppercase mb-2">
                      Data Prevista
                    </label>
                    <input
                      type="date"
                      className="w-full bg-surface border border-foreground/12 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-moss transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-foreground/40 tracking-widest uppercase mb-2">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-surface border border-foreground/12 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground/25 focus:outline-none focus:border-moss transition-colors resize-none"
                      placeholder="Descreva o seu evento, número de convidados e qualquer detalhe relevante..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-moss text-cream font-semibold rounded-xl hover:bg-moss-dark transition-colors text-sm tracking-wide mt-2"
                  >
                    Enviar Mensagem →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
