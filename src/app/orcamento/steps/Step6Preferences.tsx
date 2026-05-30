'use client';

import type { QuoteFormData, BudgetRange, Urgency } from '../types';
import type { Action } from '../OrcamentoWizard';
import { BUDGET_RANGES, URGENCY_OPTIONS, REFERRAL_SOURCES } from '../data';

interface Props {
  form: QuoteFormData;
  dispatch: React.Dispatch<Action>;
}

export default function Step6Preferences({ form, dispatch }: Props) {
  const inputClass =
    'w-full bg-transparent border-b border-foreground/15 pb-3 text-sm text-foreground placeholder-foreground/18 focus:outline-none focus:border-moss/55 transition-colors duration-300';
  const labelClass =
    'block text-[10px] text-foreground/28 tracking-[0.45em] uppercase mb-3';

  return (
    <div>
      <h2
        className="text-foreground font-bold leading-[0.92] mb-3"
        style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)' }}
      >
        Preferências<br />& Contexto
      </h2>
      <p className="text-foreground/35 text-sm leading-relaxed mb-10 max-w-md">
        Informações adicionais que nos ajudarão a preparar uma proposta mais precisa.
      </p>

      <div className="flex flex-col gap-10">
        {/* Budget range */}
        <div>
          <label className={labelClass}>Orçamento Disponível (estimativa)</label>
          <div className="flex flex-wrap gap-2.5">
            {BUDGET_RANGES.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() =>
                  dispatch({ type: 'SET', field: 'budgetRange', value: b.id as BudgetRange })
                }
                className={`px-4 py-2.5 rounded-sm text-xs tracking-[0.15em] uppercase border transition-all duration-200 ${
                  form.budgetRange === b.id
                    ? 'bg-moss border-moss text-cream'
                    : 'border-foreground/15 text-foreground/40 hover:border-foreground/35 hover:text-foreground/70'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* Urgency */}
        <div>
          <label className={labelClass}>Prazo de Antecedência</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {URGENCY_OPTIONS.map((u) => (
              <button
                key={u.id}
                type="button"
                onClick={() => dispatch({ type: 'SET', field: 'urgency', value: u.id as Urgency })}
                className={`text-left p-4 rounded-sm border transition-all duration-250 ${
                  form.urgency === u.id
                    ? 'border-moss bg-moss/8'
                    : 'border-foreground/10 hover:border-foreground/25 bg-surface-raised/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-medium ${
                      form.urgency === u.id ? 'text-foreground' : 'text-foreground/65'
                    }`}
                  >
                    {u.label}
                  </span>
                  {u.surcharge > 0 && (
                    <span className="text-[9px] tracking-[0.1em] px-1.5 py-0.5 rounded bg-foreground/8 text-foreground/40">
                      {u.surchargeLabel}
                    </span>
                  )}
                  {u.surcharge === 0 && (
                    <span className="text-[9px] tracking-[0.1em] text-moss/60">
                      {u.surchargeLabel}
                    </span>
                  )}
                </div>
                <p className="text-foreground/30 text-[10px] leading-relaxed">
                  {u.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className={labelClass}>Mensagem / Visão do Evento</label>
          <textarea
            rows={5}
            value={form.notes}
            onChange={(e) => dispatch({ type: 'SET', field: 'notes', value: e.target.value })}
            className="w-full bg-transparent border-b border-foreground/15 pb-3 text-sm text-foreground placeholder-foreground/18 focus:outline-none focus:border-moss/55 transition-colors duration-300 resize-none"
            placeholder="Descreva a sua visão, pedidos especiais, temas, restrições ou qualquer detalhe relevante que nos ajude a criar a proposta ideal…"
          />
        </div>

        {/* Referral source */}
        <div>
          <label className={labelClass}>Como nos conheceu?</label>
          <select
            value={form.referralSource}
            onChange={(e) => dispatch({ type: 'SET', field: 'referralSource', value: e.target.value })}
            className={inputClass + ' cursor-pointer appearance-none'}
          >
            <option value="" className="bg-surface text-foreground">
              Seleccionar…
            </option>
            {REFERRAL_SOURCES.map((s) => (
              <option key={s} value={s} className="bg-surface text-foreground">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
