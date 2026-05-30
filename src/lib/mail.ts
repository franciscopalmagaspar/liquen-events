import nodemailer from "nodemailer";

/**
 * SMTP transport built from environment variables. Returns null when the
 * server hasn't been configured, so callers can degrade gracefully instead
 * of crashing (e.g. before the env vars are set on the hosting provider).
 *
 * Required env vars (set these on Vercel → Settings → Environment Variables):
 *   SMTP_HOST   e.g. smtp.gmail.com
 *   SMTP_PORT   e.g. 465 (SSL) or 587 (STARTTLS)
 *   SMTP_USER   the mailbox username / address
 *   SMTP_PASS   the mailbox password or app-password
 * Optional:
 *   MAIL_TO     where submissions land (default: liquen.alentejo@gmail.com)
 *   MAIL_FROM   the From header (default: SMTP_USER)
 */
function getTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.SMTP_PORT ?? 465);
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export const MAIL_TO = process.env.MAIL_TO ?? "liquen.alentejo@gmail.com";

interface SendArgs {
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

/**
 * Sends an email. Resolves with `{ sent: false }` (never throws) when SMTP
 * isn't configured, so a form submission still completes for the visitor.
 */
export async function sendMail({ subject, html, text, replyTo }: SendArgs): Promise<{ sent: boolean }> {
  const transport = getTransport();
  if (!transport) {
    console.warn(
      "[mail] SMTP não configurado — email NÃO enviado. Defina SMTP_HOST, SMTP_USER e SMTP_PASS nas variáveis de ambiente."
    );
    return { sent: false };
  }

  const from = process.env.MAIL_FROM ?? process.env.SMTP_USER!;
  await transport.sendMail({ from, to: MAIL_TO, subject, html, text, replyTo });
  return { sent: true };
}

/** Escapes user-provided text before embedding it in HTML email bodies. */
export function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
