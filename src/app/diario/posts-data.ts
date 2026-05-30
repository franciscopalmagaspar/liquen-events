/**
 * Editorial journal ("Diário") — SEO-rich articles. Each post powers
 * /diario/[slug]. Content is plain paragraphs + optional subheadings,
 * written naturally around the keywords we want to rank for.
 */

export interface PostBlock {
  type: "p" | "h2" | "quote";
  text: string;
}

export interface Post {
  slug: string;
  title: string;
  metaTitle: string;
  excerpt: string;
  category: string;
  date: string;       // ISO
  readingMin: number;
  cover: string;
  keywords: string[];
  body: PostBlock[];
}

export const posts: Post[] = [
  {
    slug: "como-escolher-espaco-casamento-alentejo",
    title: "Como escolher o espaço para o seu casamento no Alentejo",
    metaTitle: "Como escolher o espaço do casamento no Alentejo — Guia",
    excerpt:
      "Herdades, quintas e montes alentejanos: um guia prático para encontrar o espaço perfeito para o vosso casamento.",
    category: "Casamentos",
    date: "2026-04-18",
    readingMin: 5,
    cover: "/imagens/DaniGui_Preview20.jpg",
    keywords: ["casamento Alentejo", "espaços para casamento", "herdade casamento Évora", "wedding planner Alentejo"],
    body: [
      { type: "p", text: "Escolher o espaço é uma das primeiras e mais importantes decisões de qualquer casamento. No Alentejo, a oferta é tão rica — de herdades centenárias a quintas com vista sobre as vinhas — que a escolha pode parecer esmagadora. Como wedding planner em Évora, ajudamos casais a encontrar o lugar certo todas as semanas, e há perguntas que fazem toda a diferença." },
      { type: "h2", text: "1. Quantos convidados, realmente?" },
      { type: "p", text: "Antes de visitar qualquer espaço, defina um número aproximado de convidados. Um monte alentejano íntimo brilha com 60 pessoas, mas pode tornar-se apertado com 150. O espaço deve servir a festa que imagina — não o contrário." },
      { type: "h2", text: "2. Interior e exterior" },
      { type: "p", text: "No Alentejo, o tempo é quase sempre generoso, mas um plano B coberto é essencial. Procure espaços que ofereçam um interior bonito para o jantar ou para a eventualidade de chuva, sem perder a magia do ar livre." },
      { type: "quote", text: "O espaço certo não é o mais bonito da fotografia — é aquele onde os vossos convidados se sentem em casa." },
      { type: "h2", text: "3. O que está (e não está) incluído" },
      { type: "p", text: "Alguns espaços incluem catering próprio; outros são apenas o espaço. Esta distinção muda completamente o orçamento e a logística. É aqui que uma equipa de organização de eventos faz a diferença: garantimos que não há surpresas e que cada fornecedor encaixa na sua visão." },
      { type: "p", text: "Se está a planear casar no Alentejo e quer ajuda a encontrar o espaço perfeito, fale connosco — conhecemos a região e os seus melhores recantos." },
    ],
  },
  {
    slug: "checklist-evento-corporativo-sucesso",
    title: "Checklist para um evento corporativo de sucesso",
    metaTitle: "Checklist de evento corporativo — Conferências e empresas",
    excerpt:
      "Da definição de objetivos ao follow-up: os passos essenciais para um evento de empresa memorável em Évora ou Lisboa.",
    category: "Corporativo",
    date: "2026-03-30",
    readingMin: 4,
    cover: "/imagens/EW1_1330.jpg",
    keywords: ["evento corporativo Évora", "eventos corporativos Lisboa", "organização de conferências", "evento de empresa"],
    body: [
      { type: "p", text: "Um evento corporativo bem executado fortalece equipas, impressiona clientes e eleva a imagem da marca. Mas o sucesso raramente é acaso — resulta de planeamento rigoroso. Eis a checklist que usamos na organização de eventos corporativos em Évora e Lisboa." },
      { type: "h2", text: "Definir o objetivo" },
      { type: "p", text: "Antes de tudo: qual é o propósito? Lançar um produto, formar equipas, celebrar resultados? Cada objetivo molda o formato, o tom e o orçamento do evento." },
      { type: "h2", text: "Logística e audiovisual" },
      { type: "p", text: "Som, projeção, palco, sinalética e gestão de inscrições têm de funcionar sem falhas. É a parte invisível que torna tudo fluido — e a que mais beneficia de uma equipa profissional." },
      { type: "h2", text: "O follow-up" },
      { type: "p", text: "O evento não termina quando as luzes se apagam. Recolher feedback e manter o contacto com os participantes multiplica o retorno do investimento." },
      { type: "p", text: "Precisa de organizar uma conferência ou um jantar de empresa? A Líquen Events trata de tudo, da logística à coordenação no dia." },
    ],
  },
  {
    slug: "tendencias-decoracao-eventos-2026",
    title: "Tendências de decoração de eventos para 2026",
    metaTitle: "Tendências de decoração de eventos 2026 — Líquen Events",
    excerpt:
      "Tons naturais, materiais sustentáveis e iluminação cénica: o que vai marcar a decoração de casamentos e eventos este ano.",
    category: "Inspiração",
    date: "2026-02-12",
    readingMin: 3,
    cover: "/imagens/M&F0497.jpg",
    keywords: ["decoração de eventos", "tendências casamento 2026", "decoração casamento Alentejo"],
    body: [
      { type: "p", text: "Cada ano traz uma nova linguagem estética. Para 2026, a decoração de eventos afasta-se do excesso e abraça a autenticidade — algo que combina na perfeição com a alma do Alentejo." },
      { type: "h2", text: "Tons naturais e terrosos" },
      { type: "p", text: "Verdes, areias e terracota dominam as paletas, com flores de época e materiais orgânicos. Menos artifício, mais verdade." },
      { type: "h2", text: "Iluminação como cenografia" },
      { type: "p", text: "A luz deixa de ser detalhe e passa a protagonista: velas, fios suspensos e projeções suaves criam ambientes que mudam ao longo da noite." },
      { type: "h2", text: "Sustentabilidade" },
      { type: "p", text: "Reutilização, fornecedores locais e flores de época não são só tendência — são responsabilidade. Cada vez mais casais e empresas querem celebrar sem desperdício." },
      { type: "p", text: "Quer dar vida a estas ideias no seu evento? Vamos conversar." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
