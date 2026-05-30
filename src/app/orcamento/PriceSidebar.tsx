'use client';

import { useState } from 'react';
import type { QuoteFormData, PriceBreakdown } from './types';
import { CATEGORIES, EVENT_TYPES_BY_CATEGORY, PACKAGES } from './data';
import { formatPrice } from './pricing';

interface Props {
  form: QuoteFormData;
  breakdown: PriceBreakdown;
  currentStep: number;
}

export default function PriceSidebar({ form, breakdown, currentStep }: Props) {
  const [expanded, setExpanded] = useState(false);

  const cat = CATEGORIES.find((c) => c.id === form.category);
  const et =
    form.category && form.eventType
      ? EVENT_TYPES_BY_CATEGORY[form.category]?.find((e) => e.id === form.eventType)
      : null;
  const pkg = PACKAGES.find((p) => p.id === form.packageTier);

  const hasPrice = breakdown.total > 0;

  const lineItem = (label: string, value: string | number, sub?: string) => (
    <div className="flex items-baseline justify-between gap-2 py-2 border-b border-foreground/6 last:border-0">
      <div>
        <span className="text-foreground/40 text-xs">{label}</span>
        {sub && <p className="text-foreground/22 text-[10px] mt-0.5">{sub}</p>}
      </div>
      <span className="text-foreground/60 text-xs shrink-0">{typeof value === 'number' ? formatPrice(value) : value}</span>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col h-full">
        <div className="sticky top-[116px] flex flex-col gap-0">
          {/* Header */}
          <div className="border border-foreground/10 rounded-sm bg-surface-raised/60 overflow-hidden">
            <div className="px-5 py-4 border-b border-foreground/8">
              <p className="text-[10px] tracking-[0.4em] uppercase text-foreground/28 mb-1">
                Estimativa de Orçamento
              </p>
              {hasPrice ? (
                <div>
                  <p className="text-moss font-bold" style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(20px, 2vw, 28px)' }}>
                    {breakdown.isEstimate
                      ? `${formatPrice(breakdown.rangeMin)} – ${formatPrice(breakdown.rangeMax)}`
                      : formatPrice(breakdown.total)}
                  </p>
                  <p className="text-foreground/25 text-[10px] mt-1">
                    {breakdown.isEstimate ? 'Estimativa · valores c/IVA 23%' : 'Total c/IVA 23%'}
                  </p>
                </div>
              ) : (
                <p className="text-foreground/28 text-sm italic">
                  Preencha os detalhes para ver a estimativa
                </p>
              )}
            </div>

            {/* Selection summary */}
            <div className="px-5 py-4 flex flex-col gap-0">
              {cat && lineItem('Categoria', cat.label)}
              {et && lineItem('Tipo de Evento', et.label)}
              {form.guests > 0 && lineItem('Convidados', `${form.guests} pessoas`)}
              {form.date && lineItem('Data', new Date(form.date + 'T12:00:00').toLocaleDateString('pt-PT', { day: 'numeric', month: 'short', year: 'numeric' }))}
              {pkg && lineItem('Pacote', pkg.label)}
            </div>

            {/* Price breakdown */}
            {hasPrice && currentStep >= 4 && (
              <>
                <div className="border-t border-foreground/8 px-5 py-4">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/22 mb-3">
                    Decomposição
                  </p>
                  <div>
                    {lineItem('Base do evento', breakdown.basePrice + breakdown.guestCost)}
                    {pkg && pkg.id !== 'personalizado' && pkg.multiplier !== 1 &&
                      lineItem(`Pacote ${pkg.label}`, `×${pkg.multiplier.toFixed(2)}`)}
                    {breakdown.locationSurcharge > 0 && lineItem('Deslocação', breakdown.locationSurcharge)}
                    {breakdown.weekendSurcharge > 0 && lineItem('Fim de semana', breakdown.weekendSurcharge, '+15%')}
                    {breakdown.seasonSurcharge > 0 && lineItem('Alta época', breakdown.seasonSurcharge, '+10%')}
                    {breakdown.urgencySurcharge > 0 && lineItem('Urgência', breakdown.urgencySurcharge)}
                    {breakdown.addonsCost > 0 && lineItem('Extras', breakdown.addonsCost)}
                  </div>
                  <div className="pt-3 mt-1 border-t border-foreground/10">
                    {lineItem('Subtotal s/IVA', breakdown.subtotal)}
                    {lineItem('IVA 23%', breakdown.iva)}
                  </div>
                  <div className="pt-3 mt-1 border-t border-moss/20 flex items-baseline justify-between">
                    <span className="text-foreground/60 text-xs font-medium">Total c/IVA</span>
                    <span className="text-moss font-bold text-sm">{formatPrice(breakdown.total)}</span>
                  </div>
                </div>
              </>
            )}

            {/* Addons */}
            {form.addons.length > 0 && (
              <div className="border-t border-foreground/8 px-5 py-4">
                <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/22 mb-3">
                  Serviços Adicionais ({form.addons.length})
                </p>
                <div className="flex flex-col gap-1.5">
                  {form.addons.map((addon) => (
                    <div key={addon.id} className="flex items-center justify-between gap-2">
                      <span className="text-foreground/38 text-xs truncate">{addon.name}</span>
                      <span className="text-foreground/50 text-xs shrink-0">
                        {formatPrice(addon.price * (addon.pricingType === 'per_pax' ? form.guests : addon.quantity))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footnote */}
          <div className="mt-4 px-1">
            <p className="text-foreground/18 text-[10px] leading-[1.7]">
              Estimativa indicativa. Proposta formal enviada após análise do pedido.
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile price bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/97 backdrop-blur-md border-t border-foreground/10">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="w-full px-5 py-3 flex items-center justify-between"
        >
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-foreground/28 mb-0.5">
              Estimativa
            </p>
            <p className="text-moss font-semibold text-sm">
              {hasPrice
                ? breakdown.isEstimate
                  ? `${formatPrice(breakdown.rangeMin)} – ${formatPrice(breakdown.rangeMax)}`
                  : formatPrice(breakdown.total)
                : 'A calcular…'}
            </p>
          </div>
          <span className={`text-foreground/40 text-xs transition-transform ${expanded ? 'rotate-180' : ''}`}>
            ▲
          </span>
        </button>

        {expanded && hasPrice && (
          <div className="px-5 pb-5 border-t border-foreground/8 max-h-72 overflow-y-auto">
            <div className="pt-4 flex flex-col gap-0">
              {cat && lineItem('Categoria', cat.label)}
              {et && lineItem('Tipo', et.label)}
              {form.guests > 0 && lineItem('Convidados', `${form.guests}`)}
              {pkg && lineItem('Pacote', pkg.label)}
              {breakdown.addonsCost > 0 && lineItem('Extras', breakdown.addonsCost)}
              <div className="pt-2 mt-1 border-t border-foreground/10 flex justify-between">
                <span className="text-foreground/50 text-xs">Total c/IVA</span>
                <span className="text-moss font-bold text-sm">{formatPrice(breakdown.total)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
