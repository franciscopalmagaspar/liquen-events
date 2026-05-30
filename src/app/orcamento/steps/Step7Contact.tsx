'use client';

import type { QuoteFormData } from '../types';
import type { Action } from '../OrcamentoWizard';
import { CATEGORIES, EVENT_TYPES_BY_CATEGORY, PACKAGES } from '../data';

interface Props {
  form: QuoteFormData;
  dispatch: React.Dispatch<Action>;
}

export default function Step7Contact({ form, dispatch }: Props) {
  const inputClass =
    'w-full bg-transparent border-b border-foreground/15 pb-3 text-sm text-foreground placeholder-foreground/18 focus:outline-none focus:border-moss/55 transition-colors duration-300';
  const labelClass =
    'block text-[10px] text-foreground/28 tracking-[0.45em] uppercase mb-3';

  const cat = CATEGORIES.find((c) => c.id === form.category);
  const et =
    form.category && form.eventType
      ? EVENT_TYPES_BY_CATEGORY[form.category]?.find((e) => e.id === form.eventType)
      : null;
  const pkg = PACKAGES.find((p) => p.id === form.packageTier);

  return (
    <div>
      <h2
        className="text-foreground font-bold leading-[0.92] mb-3"
        style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(28px, 4vw, 44px)' }}
      >
        Dados de<br />contacto
      </h2>
      <p className="text-foreground/35 text-sm leading-relaxed mb-10 max-w-md">
        Quase pronto. Precisamos apenas dos seus dados para elaborar a proposta.
      </p>

      {/* Summary card */}
      <div className="rounded-sm border border-foreground/10 bg-surface-raised/60 p-5 mb-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-foreground/25 mb-4">
          Resumo do pedido
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-foreground/25 text-[10px] tracking-wide mb-1">Categoria</p>
            <p className="text-foreground/70 text-xs">{cat?.label ?? '—'}</p>
          </div>
          <div>
            <p className="text-foreground/25 text-[10px] tracking-wide mb-1">Tipo</p>
            <p className="text-foreground/70 text-xs">{et?.label ?? '—'}</p>
          </div>
          <div>
            <p className="text-foreground/25 text-[10px] tracking-wide mb-1">Pacote</p>
            <p className="text-foreground/70 text-xs">{pkg?.label ?? '—'}</p>
          </div>
          <div>
            <p className="text-foreground/25 text-[10px] tracking-wide mb-1">Convidados</p>
            <p className="text-foreground/70 text-xs">{form.guests || '—'}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-foreground/8">
          <div>
            <p className="text-foreground/25 text-[10px] tracking-wide mb-1">Data</p>
            <p className="text-foreground/70 text-xs">
              {form.date ? new Date(form.date + 'T12:00:00').toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' }) : '—'}
            </p>
          </div>
          <div>
            <p className="text-foreground/25 text-[10px] tracking-wide mb-1">Local</p>
            <p className="text-foreground/70 text-xs">{form.location || '—'}</p>
          </div>
          <div>
            <p className="text-foreground/25 text-[10px] tracking-wide mb-1">Extras</p>
            <p className="text-foreground/70 text-xs">
              {form.addons.length > 0 ? `${form.addons.length} serviço${form.addons.length !== 1 ? 's' : ''}` : 'Nenhum'}
            </p>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label className={labelClass}>Nome Completo *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => dispatch({ type: 'SET', field: 'name', value: e.target.value })}
              className={inputClass}
              placeholder="O seu nome"
            />
          </div>
          <div>
            <label className={labelClass}>E-mail *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => dispatch({ type: 'SET', field: 'email', value: e.target.value })}
              className={inputClass}
              placeholder="email@exemplo.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <label className={labelClass}>Telefone *</label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => dispatch({ type: 'SET', field: 'phone', value: e.target.value })}
              className={inputClass}
              placeholder="+351 9XX XXX XXX"
            />
          </div>
          <div>
            <label className={labelClass}>Empresa / Organização</label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => dispatch({ type: 'SET', field: 'company', value: e.target.value })}
              className={inputClass}
              placeholder="Opcional"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>NIF (para faturação)</label>
          <input
            type="text"
            value={form.nif}
            onChange={(e) => dispatch({ type: 'SET', field: 'nif', value: e.target.value })}
            className="w-full sm:w-1/2 bg-transparent border-b border-foreground/15 pb-3 text-sm text-foreground placeholder-foreground/18 focus:outline-none focus:border-moss/55 transition-colors duration-300"
            placeholder="Opcional"
          />
        </div>

        {/* Terms */}
        <div className="flex flex-col gap-4 pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <button
              type="button"
              onClick={() => dispatch({ type: 'SET', field: 'acceptTerms', value: !form.acceptTerms })}
              className={`shrink-0 w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-all mt-0.5 ${
                form.acceptTerms ? 'border-moss bg-moss text-cream' : 'border-foreground/25'
              }`}
            >
              {form.acceptTerms && <span className="text-xs font-bold">✓</span>}
            </button>
            <span className="text-foreground/45 text-xs leading-relaxed">
              Aceito os{' '}
              <a href="/contacto" className="text-moss hover:underline">
                Termos e Condições
              </a>{' '}
              e a{' '}
              <a href="/contacto" className="text-moss hover:underline">
                Política de Privacidade
              </a>{' '}
              da Líquen Events. *
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <button
              type="button"
              onClick={() => dispatch({ type: 'SET', field: 'acceptMarketing', value: !form.acceptMarketing })}
              className={`shrink-0 w-5 h-5 rounded-sm border-2 flex items-center justify-center transition-all mt-0.5 ${
                form.acceptMarketing ? 'border-moss bg-moss text-cream' : 'border-foreground/25'
              }`}
            >
              {form.acceptMarketing && <span className="text-xs font-bold">✓</span>}
            </button>
            <span className="text-foreground/35 text-xs leading-relaxed">
              Aceito receber comunicações e novidades da Líquen Events por email (opcional).
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
