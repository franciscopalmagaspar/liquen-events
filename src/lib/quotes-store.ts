import { promises as fs } from "fs";
import path from "path";
import type { Quote } from "@/app/orcamento/types";
import { getSupabase } from "./supabase";

/**
 * Storage layer for quote requests.
 *
 * Uses Supabase when configured (permanent, works on serverless hosts);
 * otherwise falls back to a local JSON file for development. The Supabase
 * table stores the full quote in a `data` jsonb column, with `status`,
 * `name` and `email` duplicated as columns for listing/searching.
 */

const TABLE = "quotes";
const DATA_FILE = path.join(process.cwd(), "data", "quotes.json");

// ── File fallback (dev only) ──────────────────────────────────────
async function fileRead(): Promise<Quote[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function fileWrite(quotes: Quote[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(quotes, null, 2));
}

// ── Public API ────────────────────────────────────────────────────

export async function createQuote(quote: Quote): Promise<void> {
  const sb = getSupabase();
  if (sb) {
    const { error } = await sb.from(TABLE).insert({
      id: quote.id,
      status: quote.status,
      name: quote.name,
      email: quote.email,
      data: quote,
    });
    if (error) throw error;
    return;
  }
  const quotes = await fileRead();
  quotes.push(quote);
  await fileWrite(quotes);
}

export async function listQuotes(): Promise<Quote[]> {
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb
      .from(TABLE)
      .select("data")
      .order("created_at", { ascending: false });
    if (error) throw error;
    return (data ?? []).map((row) => row.data as Quote);
  }
  const quotes = await fileRead();
  return quotes.reverse();
}

export async function getQuote(id: string): Promise<Quote | null> {
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb.from(TABLE).select("data").eq("id", id).maybeSingle();
    if (error) throw error;
    return (data?.data as Quote) ?? null;
  }
  const quotes = await fileRead();
  return quotes.find((q) => q.id === id) ?? null;
}

export async function updateQuote(
  id: string,
  updates: Partial<Quote>
): Promise<Quote | null> {
  const current = await getQuote(id);
  if (!current) return null;

  const merged: Quote = { ...current, ...updates, lastUpdated: new Date().toISOString() };

  const sb = getSupabase();
  if (sb) {
    const { error } = await sb
      .from(TABLE)
      .update({
        status: merged.status,
        data: merged,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);
    if (error) throw error;
    return merged;
  }

  const quotes = await fileRead();
  const idx = quotes.findIndex((q) => q.id === id);
  if (idx === -1) return null;
  quotes[idx] = merged;
  await fileWrite(quotes);
  return merged;
}
