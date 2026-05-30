import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { Quote, QuoteFormData, PriceBreakdown } from '../../orcamento/types';
import { CATEGORIES, EVENT_TYPES_BY_CATEGORY, PACKAGES } from '../../orcamento/data';
import { sendMail, esc } from '@/lib/mail';

const DATA_FILE = path.join(process.cwd(), 'data', 'quotes.json');

async function readQuotes(): Promise<Quote[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeQuotes(quotes: Quote[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(quotes, null, 2));
}

function generateId(): string {
  const now = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `LIQ-${now}-${rand}`;
}

const eur = (n: number) =>
  new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n || 0);

function buildEmail(id: string, form: QuoteFormData, breakdown?: PriceBreakdown): string {
  const cat = CATEGORIES.find((c) => c.id === form.category)?.label ?? '—';
  const et = form.category && form.eventType
    ? EVENT_TYPES_BY_CATEGORY[form.category]?.find((e) => e.id === form.eventType)?.label ?? '—'
    : '—';
  const pkg = PACKAGES.find((p) => p.id === form.packageTier)?.label ?? form.packageTier;

  const row = (label: string, value: unknown) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#777;font-size:13px;white-space:nowrap">${label}</td><td style="padding:6px 0;color:#111;font-size:13px;font-weight:600">${esc(value) || '—'}</td></tr>`;

  const addons = form.addons?.length
    ? form.addons.map((a) => `${esc(a.name)} (${esc(a.tier)})`).join(', ')
    : '—';

  const estimate = breakdown
    ? `${eur(breakdown.rangeMin)} – ${eur(breakdown.rangeMax)}${breakdown.isEstimate ? ' (estimativa)' : ''}`
    : '—';

  return `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111">
    <h2 style="font-size:18px;margin:0 0 4px">Novo pedido de orçamento</h2>
    <p style="color:#888;font-size:12px;margin:0 0 20px">Referência <strong style="color:#4a7c59">${esc(id)}</strong> · ${new Date().toLocaleString('pt-PT')}</p>
    <table style="border-collapse:collapse;width:100%">
      ${row('Nome', form.name)}
      ${row('Email', form.email)}
      ${row('Telefone', form.phone)}
      ${form.company ? row('Empresa', form.company) : ''}
      ${form.nif ? row('NIF', form.nif) : ''}
      <tr><td colspan="2" style="padding:12px 0 4px"><hr style="border:none;border-top:1px solid #eee"></td></tr>
      ${row('Categoria', cat)}
      ${row('Tipo de evento', et)}
      ${row('Data', form.date)}
      ${row('Convidados', form.guests)}
      ${row('Local', form.location || form.locationType)}
      ${row('Pacote', pkg)}
      ${row('Extras', addons)}
      ${row('Orçamento estimado', estimate)}
      ${form.notes ? row('Notas', form.notes) : ''}
    </table>
  </div>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { form, breakdown } = body;

    if (!form || !form.name || !form.email) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    const id = generateId();

    const quote: Quote = {
      ...form,
      id,
      submittedAt: new Date().toISOString(),
      status: 'pendente',
      priceBreakdown: breakdown,
    };

    // Notify the team by email (primary delivery, works on serverless).
    try {
      await sendMail({
        subject: `Orçamento ${id} — ${form.name}`,
        html: buildEmail(id, form, breakdown),
        replyTo: form.email,
      });
    } catch (mailErr) {
      console.error('[orcamento POST] email falhou', mailErr);
    }

    // Best-effort local persistence (works in dev; no-op on read-only hosts).
    try {
      const quotes = await readQuotes();
      quotes.push(quote);
      await writeQuotes(quotes);
    } catch (fsErr) {
      console.warn('[orcamento POST] persistência em ficheiro indisponível', fsErr);
    }

    return NextResponse.json({ id, status: 'ok' });
  } catch (err) {
    console.error('[orcamento POST]', err);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const pass = request.headers.get('x-admin-pass');
  const adminPass = process.env.ADMIN_PASSWORD ?? 'liquen2026';

  if (pass !== adminPass) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const quotes = await readQuotes();
  return NextResponse.json(quotes.reverse());
}
