'use client';

import type { QuoteFormData, PackageTier } from '../types';
import type { Action } from '../OrcamentoWizard';
import { PACKAGES } from '../data';
import { calculatePrice, formatPrice } from '../pricing';

interface Props {
  form: QuoteFormData;
  dispatch: React.Dispatch<Action>;
}

export default function Step4Package({ form, dispatch }: Props) {
  const baseBreakdown = calculatePrice({ ...form, packageTier: 'essencial', addons: [] });

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PACKAGES.map((pkg) => {
          const active = form.packageTier === pkg.id;

          const pkgPrice =
            pkg.id !== 'personalizado' && baseBreakdown.total > 0
              ? Math.round(
                  (baseBreakdown.subtotal /
                    (PACKAGES.find((p) => p.id === form.packageTier)?.multiplier ?? 1)) *
                    pkg.multiplier *
                    1.23
                )
              : null;

          return (
            <button
              key={pkg.id}
              type="button"
              onClick={() => dispatch({ type: 'SET', field: 'packageTier', value: pkg.id as PackageTier })}
              className={`relative text-left p-6 border transition-all duration-250 rounded-sm ${
                active
                  ? 'border-moss bg-moss/6'
                  : pkg.highlight
                  ? 'border-moss/25 hover:border-moss/45 bg-surface-raised/40'
                  : 'border-foreground/10 hover:border-foreground/22 bg-surface-raised/40'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <span className="absolute top-4 right-4 text-[9px] tracking-[0.3em] uppercase px-2 py-0.5 border border-moss/40 text-moss/70 rounded-sm">
                  {pkg.badge}
                </span>
              )}

              {/* Header */}
              <div className="mb-5">
                <p
                  className={`font-bold text-xl mb-1 transition-colors ${
                    active ? 'text-foreground' : 'text-foreground/70'
                  }`}
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {pkg.label}
                </p>

                {pkgPrice && pkg.id !== 'personalizado' ? (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-moss font-semibold text-sm">{formatPrice(pkgPrice)}</span>
                    <span className="text-foreground/22 text-[10px]">c/IVA · estimativa</span>
                  </div>
                ) : (
                  <p className="text-foreground/25 text-[10px] tracking-wide">
                    {pkg.id === 'personalizado' ? 'Preço por seleção de extras' : `×${pkg.multiplier.toFixed(2)} do base`}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-foreground/35 text-xs leading-relaxed mb-5">{pkg.description}</p>

              {/* Included items */}
              <div className="space-y-2 mb-4">
                {pkg.included.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="text-moss/70 text-[10px] mt-px flex-shrink-0">—</span>
                    <span className="text-foreground/45 text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-foreground/8 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.25em] uppercase text-foreground/20">
                  {pkg.id !== 'personalizado' ? `Multiplicador ×${pkg.multiplier}` : 'À medida'}
                </span>
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                    active ? 'border-moss bg-moss' : 'border-foreground/22'
                  }`}
                >
                  {active && <div className="w-1.5 h-1.5 rounded-full bg-cream" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
