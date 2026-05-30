import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { Quote, QuoteStatus } from '../../../orcamento/types';

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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const quotes = await readQuotes();
  const quote = quotes.find((q) => q.id === id);
  if (!quote) {
    return NextResponse.json({ error: 'Não encontrado' }, { status: 404 });
  }
  return NextResponse.json(quote);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const pass = request.headers.get('x-admin-pass');
  const adminPass = process.env.ADMIN_PASSWORD ?? 'liquen2026';

  if (pass !== adminPass) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const quotes = await readQuotes();
  const idx = quotes.findIndex((q) => q.id === id);

  if (idx === -1) {
    return NextResponse.json({ error: 'Não encontrado' }, { status: 404 });
  }

  const allowed: (keyof Quote)[] = ['status', 'quotedPrice', 'adminNotes'];
  const updates: Partial<Quote> = {};
  for (const key of allowed) {
    if (key in body) {
      (updates as Record<string, unknown>)[key] = body[key];
    }
  }

  quotes[idx] = {
    ...quotes[idx],
    ...updates,
    lastUpdated: new Date().toISOString(),
  };

  await writeQuotes(quotes);
  return NextResponse.json(quotes[idx]);
}
