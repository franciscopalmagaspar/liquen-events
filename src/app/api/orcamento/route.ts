import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { Quote } from '../../orcamento/types';

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { form, breakdown } = body;

    if (!form || !form.name || !form.email) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    const quotes = await readQuotes();
    const id = generateId();

    const quote: Quote = {
      ...form,
      id,
      submittedAt: new Date().toISOString(),
      status: 'pendente',
      priceBreakdown: breakdown,
    };

    quotes.push(quote);
    await writeQuotes(quotes);

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
