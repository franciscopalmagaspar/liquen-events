'use client';

import { useEffect } from 'react';

export default function OrcamentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add('orcamento-mode');
    return () => document.body.classList.remove('orcamento-mode');
  }, []);

  return <>{children}</>;
}
