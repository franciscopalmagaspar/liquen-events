import type { Metadata } from 'next';
import ConfirmacaoClient from './ConfirmacaoClient';

export const metadata: Metadata = { title: 'Pedido Recebido' };

export default async function ConfirmacaoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ConfirmacaoClient id={id} />;
}
