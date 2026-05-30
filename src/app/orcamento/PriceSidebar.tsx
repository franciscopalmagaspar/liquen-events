'use client';

import type { QuoteFormData } from './types';
import { CATEGORIES, EVENT_TYPES_BY_CATEGORY, PACKAGES } from './data';

interface Props {
  form: QuoteFormData;
  currentStep: number;
}

export default function PriceSidebar({ form, currentStep }: Props) {
  const cat = CATEGORIES.find((c) => c.id === form.category);
  const et =
    form.category && form.eventType
      ? EVENT_TYPES_BY_CATEGORY[form.category]?.find((e) => e.id === form.eventType)
      : null;
  const pkg = PACKAGES.find((p) => p.id === form.packageTier);

  const row = (label: string, value: string) => (
    <div key={label} className="flex items-start justify-between gap-3 py-2.5 border-b border-foreground/6 last:border-0">
      <span className="text-foreground/28 text-[10px] tracking-[0.3em] uppercase shrink-0">{label}</span>
      <span className="text-foreground/60 text-xs text-right">{value}</span>
    </div>
  );

  const items: [string, string][] = [];
  if (cat) items.push(['Categoria', cat.label]);
  if (et) items.push(['Tipo', et.label]);
  if (form.guests > 0) items.push(['Convidados', `${form.guests} pessoas`]);
  if (form.date) items.push(['Data', new Date(form.date + 'T12:00:00').toLocaleDateString('pt-PT', { day: 'numeric', month: 'short', year: 'numeric' })]);
  if (form.location) items.push(['Local', form.location]);
  if (pkg && currentStep >= 4) items.push(['Pacote', pkg.label]);
  if (form.addons.length > 0) items.push(['Extras', `${form.addons.length} serviço${form.addons.length !== 1 ? 's' : ''}`]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-[116px]">
          <div className="border border-foreground/10 rounded-sm bg-surface-raised/60 overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 border-b border-foreground/8">
              <p className="text-[10px] tracking-[0.4em] uppercase text-foreground/28 mb-2">
                O seu evento
              </p>
              <p className="text-foreground/50 text-xs leading-relaxed">
                {items.length === 0
                  ? 'Preencha os passos para vermos o resumo do seu pedido.'
                  : 'Resumo das selecções efectuadas.'}
              </p>
            </div>

            {/* Selections */}
            {items.length > 0 && (
              <div className="px-5 py-3">
                {items.map(([label, value]) => row(label, value))}
              </div>
            )}

            {/* Footer note */}
            <div className="px-5 py-4 border-t border-foreground/8 bg-moss/4">
              <div className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-moss/50 mt-1.5 shrink-0" />
                <p className="text-foreground/35 text-[10px] leading-[1.75]">
                  Após o envio do pedido, a nossa equipa analisa os detalhes e responde com uma proposta personalizada em menos de 24 horas úteis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile summary bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/97 backdrop-blur-md border-t border-foreground/10">
        <div className="px-5 py-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/28 mb-0.5">
              {cat ? cat.label : 'Pedido de Orçamento'}
            </p>
            <p className="text-foreground/55 text-xs">
              {et ? et.label : 'Seleccione o tipo de evento'}
            </p>
          </div>
          {form.guests > 0 && (
            <span className="text-foreground/35 text-xs">{form.guests} pessoas</span>
          )}
        </div>
      </div>
    </>
  );
}
