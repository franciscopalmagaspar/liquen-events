import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, ADMIN_NAME_COOKIE, adminToken, passwordMatches } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  let password = "";
  let name = "";
  try {
    const body = await request.json();
    password = String(body.password ?? "");
    name = String(body.name ?? "").trim().slice(0, 40);
  } catch {
    return NextResponse.json({ error: "Pedido inválido" }, { status: 400 });
  }

  if (!passwordMatches(password)) {
    return NextResponse.json({ error: "Palavra-passe incorreta" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  const cookieBase = {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 dias
  };
  res.cookies.set(ADMIN_COOKIE, adminToken(), { httpOnly: true, ...cookieBase });
  // Who is logged in — used to greet the partner and default task ownership.
  if (name) res.cookies.set(ADMIN_NAME_COOKIE, name, { httpOnly: false, ...cookieBase });
  return res;
}
