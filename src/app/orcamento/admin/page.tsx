import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import type { Quote } from '../types';
import AdminClient from './AdminClient';

export const metadata: Metadata = { title: 'Admin — Orçamentos' };

async function getQuotes(adminPass: string): Promise<Quote[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/orcamento`, {
      headers: { 'x-admin-pass': adminPass },
      cache: 'no-store',
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ pass?: string }>;
}) {
  const { pass } = await searchParams;
  const adminPass = process.env.ADMIN_PASSWORD ?? 'liquen2026';

  if (!pass) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <p className="text-foreground/22 text-[10px] tracking-[0.5em] uppercase mb-6 text-center">
            Área Restrita
          </p>
          <h1
            className="text-foreground font-bold text-center mb-10"
            style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(24px, 3vw, 36px)' }}
          >
            Painel Admin
          </h1>
          <form
            action=""
            onSubmit={undefined}
            className="flex flex-col gap-6"
          >
            <AdminLoginForm />
          </form>
        </div>
      </div>
    );
  }

  if (pass !== adminPass) {
    redirect('/orcamento/admin');
  }

  const quotes = await getQuotes(pass);

  return <AdminClient initialQuotes={quotes} adminPass={pass} />;
}

function AdminLoginForm() {
  return (
    <form method="get" className="flex flex-col gap-6">
      <div>
        <label className="block text-[10px] text-foreground/28 tracking-[0.45em] uppercase mb-3">
          Palavra-passe
        </label>
        <input
          type="password"
          name="pass"
          required
          className="w-full bg-transparent border-b border-foreground/15 pb-3 text-sm text-foreground placeholder-foreground/18 focus:outline-none focus:border-moss/55 transition-colors duration-300"
          placeholder="••••••••"
          autoFocus
        />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 bg-moss text-cream text-[11px] tracking-[0.2em] uppercase rounded-sm hover:bg-moss-dark transition-colors"
      >
        Entrar →
      </button>
    </form>
  );
}
