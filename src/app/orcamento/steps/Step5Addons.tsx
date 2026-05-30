'use client';

import { useState } from 'react';
import type { QuoteFormData, AddonTier, SelectedAddon } from '../types';
import type { Action } from '../OrcamentoWizard';
import { ADDON_CATALOG, ADDON_CATEGORIES } from '../data';

interface Props {
  form: QuoteFormData;
  dispatch: React.Dispatch<Action>;
}

const TIER_LABELS: Record<AddonTier, string> = {
  essencial: 'Ess.',
  completo:  'Comp.',
  premium:   'Prem.',
};

export default function Step5Addons({ form, dispatch }: Props) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = ['Todos', ...ADDON_CATEGORIES];

  const visible = ADDON_CATALOG.filter((a) => {
    if (a.eventTypes && form.eventType && !a.eventTypes.includes(form.eventType)) return false;
    if (activeCategory !== 'Todos' && a.category !== activeCategory) return false;
    return true;
  });

  const isSelected = (id: string) => form.addons.some((a) => a.id === id);

  function toggleAddon(addon: (typeof ADDON_CATALOG)[0]) {
    if (isSelected(addon.id)) {
      dispatch({ type: 'REMOVE_ADDON', id: addon.id });
    } else {
      const newAddon: SelectedAddon = {
        id: addon.id,
        name: addon.name,
        tier: 'completo',
        price: addon.tiers.completo.price,
        quantity: 1,
        pricingType: addon.pricingType,
      };
      dispatch({ type: 'ADD_ADDON', addon: newAddon });
    }
  }

  function updateTier(id: string, tier: AddonTier) {
    const catalog = ADDON_CATALOG.find((a) => a.id === id);
    if (!catalog) return;
    dispatch({ type: 'UPDATE_ADDON', id, updates: { tier, price: catalog.tiers[tier].price } });
  }

  function updateQty(id: string, qty: number) {
    dispatch({ type: 'UPDATE_ADDON', id, updates: { quantity: Math.max(1, qty) } });
  }

  const totalSelected = form.addons.length;

  // Group visible addons by category
  const grouped: Record<string, typeof ADDON_CATALOG> = {};
  for (const a of visible) {
    if (!grouped[a.category]) grouped[a.category] = [];
    grouped[a.category].push(a);
  }
  const groupKeys = activeCategory === 'Todos' ? ADDON_CATEGORIES.filter((c) => grouped[c]) : [activeCategory];

  return (
    <div>
      {/* Category filter tabs */}
      <div className="flex gap-2 flex-wrap mb-10 pb-5 border-b border-foreground/8">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 text-[10px] tracking-[0.25em] uppercase border transition-all duration-200 rounded-sm ${
              activeCategory === cat
                ? 'bg-moss border-moss text-cream'
                : 'border-foreground/12 text-foreground/32 hover:border-foreground/28 hover:text-foreground/58'
            }`}
          >
            {cat}
          </button>
        ))}
        {totalSelected > 0 && (
          <span className="ml-auto self-center text-[10px] tracking-[0.2em] uppercase text-moss">
            {totalSelected} selecionado{totalSelected !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* Grouped addon rows */}
      <div className="flex flex-col gap-8">
        {groupKeys.map((category) => (
          <div key={category}>
            {/* Category header */}
            <div className="flex items-center gap-4 mb-3">
              <span className="text-foreground/22 text-[9px] tracking-[0.5em] uppercase shrink-0">{category}</span>
              <div className="flex-1 h-px bg-foreground/8" />
            </div>

            {/* Addon rows */}
            <div className="flex flex-col">
              {grouped[category]?.map((addon) => {
                const sel = isSelected(addon.id);
                const selectedAddon = form.addons.find((a) => a.id === addon.id);
                const currentTier: AddonTier = selectedAddon?.tier ?? 'completo';
                const qty = selectedAddon?.quantity ?? 1;

                return (
                  <div
                    key={addon.id}
                    className={`group py-4 border-b border-foreground/6 transition-colors ${sel ? 'bg-moss/[0.03]' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Checkbox */}
                      <button
                        type="button"
                        onClick={() => toggleAddon(addon)}
                        className={`shrink-0 mt-0.5 w-4 h-4 border flex items-center justify-center transition-all ${
                          sel ? 'border-moss bg-moss' : 'border-foreground/22 hover:border-foreground/45'
                        }`}
                      >
                        {sel && (
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        )}
                      </button>

                      {/* Name + description */}
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium leading-snug mb-0.5 transition-colors ${
                            sel ? 'text-foreground' : 'text-foreground/55 group-hover:text-foreground/75'
                          }`}
                          style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                          {addon.name}
                        </p>
                        <p className="text-foreground/28 text-xs leading-relaxed">{addon.description}</p>
                      </div>

                      {/* Tier selector — quality level (no prices shown to client) */}
                      <div className="flex gap-1 flex-shrink-0">
                        {(['essencial', 'completo', 'premium'] as AddonTier[]).map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => {
                              if (!sel) toggleAddon(addon);
                              updateTier(addon.id, t);
                            }}
                            title={addon.tiers[t].label}
                            className={`px-2 py-1 text-[9px] tracking-[0.15em] uppercase border transition-all duration-200 rounded-sm ${
                              sel && currentTier === t
                                ? 'bg-moss border-moss text-cream'
                                : 'border-foreground/10 text-foreground/25 hover:border-foreground/30 hover:text-foreground/55'
                            }`}
                          >
                            {TIER_LABELS[t]}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity selector for per_unit */}
                    {sel && addon.pricingType === 'per_unit' && (
                      <div className="mt-3 ml-8 flex items-center gap-3">
                        <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/25">Quantidade</span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQty(addon.id, qty - 1)}
                            className="w-6 h-6 border border-foreground/15 flex items-center justify-center text-foreground/45 hover:border-foreground/35 hover:text-foreground transition-colors text-sm"
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-xs text-foreground font-medium">{qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQty(addon.id, qty + 1)}
                            className="w-6 h-6 border border-foreground/15 flex items-center justify-center text-foreground/45 hover:border-foreground/35 hover:text-foreground transition-colors text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {visible.length === 0 && (
          <p className="text-foreground/25 text-sm text-center py-12">
            Nenhum serviço disponível nesta categoria para o tipo de evento seleccionado.
          </p>
        )}
      </div>
    </div>
  );
}
