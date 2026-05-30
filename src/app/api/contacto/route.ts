import { NextRequest, NextResponse } from 'next/server';
import { sendMail, esc } from '@/lib/mail';

export async function POST(request: NextRequest) {
  try {
    const form = await request.json();

    if (!form || !form.nome || !form.email || !form.mensagem) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    const row = (label: string, value: unknown) =>
      value
        ? `<tr><td style="padding:6px 16px 6px 0;color:#777;font-size:13px;white-space:nowrap">${label}</td><td style="padding:6px 0;color:#111;font-size:13px;font-weight:600">${esc(value)}</td></tr>`
        : '';

    const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111">
      <h2 style="font-size:18px;margin:0 0 4px">Novo contacto pelo site</h2>
      <p style="color:#888;font-size:12px;margin:0 0 20px">${new Date().toLocaleString('pt-PT')}</p>
      <table style="border-collapse:collapse;width:100%">
        ${row('Nome', form.nome)}
        ${row('Email', form.email)}
        ${row('Telefone', form.telefone)}
        ${row('Tipo de evento', form.eventType)}
        ${row('Data prevista', form.data)}
        ${row('Convidados', form.convidados)}
        ${row('Orçamento', form.orcamento)}
      </table>
      <p style="margin:16px 0 6px;color:#777;font-size:13px">Mensagem</p>
      <p style="white-space:pre-wrap;color:#111;font-size:14px;line-height:1.6;margin:0">${esc(form.mensagem)}</p>
    </div>`;

    try {
      await sendMail({
        subject: `Contacto — ${form.nome}${form.eventType ? ` (${form.eventType})` : ''}`,
        html,
        replyTo: form.email,
      });
    } catch (mailErr) {
      console.error('[contacto POST] email falhou', mailErr);
    }

    return NextResponse.json({ status: 'ok' });
  } catch (err) {
    console.error('[contacto POST]', err);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
