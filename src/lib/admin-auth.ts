import { createHash } from "node:crypto";
import type { NextRequest } from "next/server";

/**
 * Lightweight admin auth for the internal dashboard.
 *
 * A successful login sets an httpOnly cookie whose value is a salted hash of
 * ADMIN_PASSWORD (so the raw password is never stored in the browser). API
 * routes accept either that cookie or the legacy `x-admin-pass` header.
 */
export const ADMIN_COOKIE = "liquen_admin";
const SALT = "liquen-admin-v1";

function adminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "liquen2026";
}

export function adminToken(): string {
  return createHash("sha256").update(`${SALT}:${adminPassword()}`).digest("hex");
}

export function passwordMatches(pass: string): boolean {
  return pass === adminPassword();
}

export function tokenValid(token: string | undefined | null): boolean {
  return !!token && token === adminToken();
}

/** True when the request carries a valid admin cookie or header. */
export function isAuthed(req: NextRequest): boolean {
  if (tokenValid(req.cookies.get(ADMIN_COOKIE)?.value)) return true;
  const header = req.headers.get("x-admin-pass");
  return !!header && passwordMatches(header);
}
