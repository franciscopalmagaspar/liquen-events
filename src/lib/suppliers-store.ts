import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "node:crypto";
import type { Supplier } from "@/app/orcamento/types";
import { getSupabase } from "./supabase";

const TABLE = "suppliers";
const DATA_FILE = path.join(process.cwd(), "data", "suppliers.json");

async function fileRead(): Promise<Supplier[]> {
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, "utf-8"));
  } catch {
    return [];
  }
}
async function fileWrite(s: Supplier[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(s, null, 2));
}

function rowToSupplier(r: Record<string, unknown>): Supplier {
  return {
    id: String(r.id),
    name: String(r.name ?? ""),
    category: String(r.category ?? "Outro"),
    email: (r.email as string) ?? undefined,
    phone: (r.phone as string) ?? undefined,
    location: (r.location as string) ?? undefined,
    notes: (r.notes as string) ?? undefined,
    createdAt: String(r.created_at ?? new Date().toISOString()),
  };
}

export async function listSuppliers(): Promise<Supplier[]> {
  const sb = getSupabase();
  if (sb) {
    const { data, error } = await sb.from(TABLE).select("*").order("name", { ascending: true });
    if (error) throw error;
    return (data ?? []).map(rowToSupplier);
  }
  const all = await fileRead();
  return all.sort((a, b) => a.name.localeCompare(b.name));
}

export async function createSupplier(input: Omit<Supplier, "id" | "createdAt">): Promise<Supplier> {
  const supplier: Supplier = { ...input, id: randomUUID(), createdAt: new Date().toISOString() };
  const sb = getSupabase();
  if (sb) {
    const { error } = await sb.from(TABLE).insert({
      id: supplier.id,
      name: supplier.name,
      category: supplier.category,
      email: supplier.email || null,
      phone: supplier.phone || null,
      location: supplier.location || null,
      notes: supplier.notes || null,
    });
    if (error) throw error;
    return supplier;
  }
  const all = await fileRead();
  all.push(supplier);
  await fileWrite(all);
  return supplier;
}

export async function updateSupplier(id: string, updates: Partial<Supplier>): Promise<Supplier | null> {
  const sb = getSupabase();
  if (sb) {
    const patch: Record<string, unknown> = {};
    for (const k of ["name", "category", "email", "phone", "location", "notes"] as const) {
      if (k in updates) patch[k] = (updates as Record<string, unknown>)[k] || null;
    }
    const { data, error } = await sb.from(TABLE).update(patch).eq("id", id).select("*").maybeSingle();
    if (error) throw error;
    return data ? rowToSupplier(data) : null;
  }
  const all = await fileRead();
  const idx = all.findIndex((s) => s.id === id);
  if (idx === -1) return null;
  all[idx] = { ...all[idx], ...updates };
  await fileWrite(all);
  return all[idx];
}

export async function deleteSupplier(id: string): Promise<void> {
  const sb = getSupabase();
  if (sb) {
    const { error } = await sb.from(TABLE).delete().eq("id", id);
    if (error) throw error;
    return;
  }
  const all = await fileRead();
  await fileWrite(all.filter((s) => s.id !== id));
}
