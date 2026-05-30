import { promises as fs } from "fs";
import path from "path";
import type { Proposal } from "@/app/orcamento/types";
import { getSupabase } from "./supabase";

const TABLE = "proposals";
const DATA_FILE = path.join(process.cwd(), "data", "proposals.json");

async function fileRead(): Promise<Proposal[]> {
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export async function createProposal(p: Proposal): Promise<void> {
  const sb = getSupabase();
  if (sb) {
    const { error } = await sb.from(TABLE).insert({
      id: p.id,
      quote_id: p.quoteId,
      client_name: p.clientName,
      client_email: p.clientEmail,
      currency: p.currency,
      line_items: p.lineItems,
      vat_rate: p.vatRate,
      subtotal: p.subtotal,
      vat: p.vat,
      total: p.total,
      valid_until: p.validUntil || null,
      notes: p.notes || null,
      status: p.status,
      sent_at: p.sentAt || null,
    });
    if (error) throw error;
    return;
  }
  // Dev fallback
  const all = await fileRead();
  all.push(p);
  await fs.writeFile(DATA_FILE, JSON.stringify(all, null, 2));
}

export async function listProposalsForQuote(quoteId: string): Promise<Proposal[]> {
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb
      .from(TABLE)
      .select("*")
      .eq("quote_id", quoteId)
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map(rowToProposal);
  }
  const all = await fileRead();
  return all.filter((p) => p.quoteId === quoteId);
}

function rowToProposal(r: Record<string, unknown>): Proposal {
  return {
    id: String(r.id),
    quoteId: String(r.quote_id ?? ""),
    clientName: String(r.client_name ?? ""),
    clientEmail: String(r.client_email ?? ""),
    currency: String(r.currency ?? "EUR"),
    lineItems: (r.line_items as Proposal["lineItems"]) ?? [],
    vatRate: Number(r.vat_rate ?? 0.23),
    subtotal: Number(r.subtotal ?? 0),
    vat: Number(r.vat ?? 0),
    total: Number(r.total ?? 0),
    validUntil: (r.valid_until as string) ?? undefined,
    notes: (r.notes as string) ?? undefined,
    status: (r.status as Proposal["status"]) ?? "rascunho",
    createdAt: String(r.created_at ?? new Date().toISOString()),
    sentAt: (r.sent_at as string) ?? undefined,
  };
}
