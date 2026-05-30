/** Small client-side id generator for checklist/payment items. */
export function randomId(): string {
  return Math.random().toString(36).slice(2, 10);
}

export const eur = (n: number) =>
  new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n || 0);

export const eur2 = (n: number) =>
  new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 }).format(n || 0);
