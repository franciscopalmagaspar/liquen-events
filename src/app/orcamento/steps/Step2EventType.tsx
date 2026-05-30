'use client';

import type { QuoteFormData } from '../types';
import type { Action } from '../OrcamentoWizard';
import { EVENT_TYPES_BY_CATEGORY } from '../data';

interface Props {
  form: QuoteFormData;
  dispatch: React.Dispatch<Action>;
}

export default function Step2EventType({ form, dispatch }: Props) {
  if (!form.category) return null;
  const types = EVENT_TYPES_BY_CATEGORY[form.category];

  return (
    <div>
      <div className="flex flex-col">
        {types.map((et, i) => {
          const active = form.eventType === et.id;
          return (
            <button
              key={et.id}
              type="button"
              onClick={() => {
                dispatch({ type: 'SET', field: 'eventType', value: et.id });
                dispatch({ type: 'SET', field: 'guests', value: et.minGuests });
                dispatch({ type: 'SET', field: 'duration', value: et.suggestedDuration });
              }}
              className={`group relative flex items-start gap-6 py-6 border-b border-foreground/8 text-left transition-all duration-200 ${
                active ? 'bg-moss/[0.04]' : 'hover:bg-foreground/[0.02]'
              }`}
            >
              {/* Moss left accent for selected */}
              {active && (
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-moss" />
              )}

              {/* Number */}
              <span className="text-foreground/18 text-[10px] font-mono mt-1.5 w-4 flex-shrink-0 tracking-wide">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Main content */}
              <div className="flex-1 min-w-0">
                <p
                  className={`font-bold text-lg leading-snug mb-1.5 transition-colors ${
                    active
                      ? 'text-foreground'
                      : 'text-foreground/60 group-hover:text-foreground/82'
                  }`}
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {et.label}
                </p>
                <p className="text-foreground/30 text-xs leading-relaxed">{et.description}</p>

                {/* Features — visible only when selected */}
                {active && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {et.features.slice(0, 4).map((f) => (
                      <span
                        key={f}
                        className="text-[9px] tracking-[0.15em] uppercase px-2 py-1 border border-foreground/10 text-foreground/32 rounded-sm"
                      >
                        {f}
                      </span>
                    ))}
                    {et.features.length > 4 && (
                      <span className="text-[9px] tracking-[0.15em] uppercase px-2 py-1 border border-foreground/8 text-foreground/20 rounded-sm">
                        +{et.features.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Meta info */}
              <div className="text-right flex-shrink-0 hidden sm:block min-w-[100px]">
                <p className="text-foreground/22 text-[10px] tracking-[0.2em] uppercase mb-1">
                  {et.minGuests}–{et.maxGuests} pax
                </p>
                <p className="text-foreground/16 text-[10px]">{et.suggestedDuration}h</p>
              </div>

              {/* Indicator */}
              <div className="flex-shrink-0 mt-1">
                {active ? (
                  <div className="w-5 h-5 bg-moss rounded-full flex items-center justify-center">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                ) : (
                  <span className="text-foreground/18 text-sm group-hover:text-foreground/42 transition-colors">
                    →
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
