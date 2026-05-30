import type { Metadata } from 'next';
import OrcamentoWizard from './OrcamentoWizard';

export const metadata: Metadata = {
  title: 'Pedido de Orçamento',
  description:
    'Receba uma proposta personalizada para o seu evento. Configure o seu orçamento passo a passo.',
};

export default function OrcamentoPage() {
  return <OrcamentoWizard />;
}
