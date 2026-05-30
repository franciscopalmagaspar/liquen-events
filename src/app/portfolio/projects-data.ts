/**
 * Portfolio projects — shared by the listing and the per-project pages
 * (/portfolio/[slug]). Slugs are part of public URLs and the sitemap.
 */

export interface Project {
  slug: string;
  category: string;
  title: string;
  desc: string;
  longDesc?: string;
  tags: string[];
  year: string;
  location: string;
  images: string[]; // [0] = capa
}

export const projects: Project[] = [
  {
    slug: "aernnova-aerospace",
    category: "Corporativo",
    title: "Aernnova Aerospace",
    desc: "Evento corporativo de alto nível com produção completa, cenografia sofisticada e coordenação impecável de toda a logística.",
    longDesc:
      "Um evento corporativo de grande escala para a Aernnova Aerospace, em Évora. Tratámos da produção completa — cenografia, audiovisual, catering e coordenação de toda a logística — para uma experiência impecável do início ao fim.",
    tags: ["Produção", "Cenografia", "Coordenação"],
    year: "2025",
    location: "Évora",
    images: ["/imagens/EW1_1392.jpg", "/imagens/EW1_1408.jpg", "/imagens/EW1_1330.jpg", "/imagens/EW1_1404.jpg"],
  },
  {
    slug: "camara-municipal-evora",
    category: "Institucional",
    title: "Câmara Municipal de Évora",
    desc: "Organização e produção de evento institucional com gestão de protocolo, decoração personalizada e coordenação completa.",
    longDesc:
      "Organização e produção de um evento institucional para a Câmara Municipal de Évora, com gestão de protocolo, decoração personalizada, audiovisual e coordenação completa de convidados.",
    tags: ["Protocolo", "Audiovisual", "Catering"],
    year: "2025",
    location: "Évora",
    images: ["/imagens/20_10_2025_0295.jpg", "/imagens/20_10_2025_0220.jpg", "/imagens/20_10_2025_0358.jpg", "/imagens/20_10_2025_0407.jpg"],
  },
  {
    slug: "daniela-e-guilherme",
    category: "Casamento",
    title: "Daniela & Guilherme",
    desc: "Casamento intimista com decoração floral elegante, coordenação completa do dia e cada memória eternizada ao pormenor.",
    longDesc:
      "Um casamento intimista no Alentejo, planeado ao pormenor — da decoração floral elegante à coordenação completa do dia. Cada momento pensado para que os noivos vivessem a celebração sem preocupações.",
    tags: ["Wedding Planning", "Decoração", "Coordenação"],
    year: "2025",
    location: "Alentejo",
    images: ["/imagens/DaniGui_Preview12.jpg", "/imagens/DaniGui_Preview20.jpg", "/imagens/DaniGui_Adois_61.jpg", "/imagens/DaniGui_JantarFesta_27.jpg"],
  },
  {
    slug: "joao-e-pedro",
    category: "Casamento",
    title: "João & Pedro",
    desc: "Celebração única com decoração personalizada, produção completa e atenção ao detalhe em cada momento do grande dia.",
    longDesc:
      "Uma celebração única em Portugal, com decoração personalizada, produção completa e captação aérea por drone. Atenção ao detalhe em cada momento do grande dia.",
    tags: ["Wedding Planning", "Produção", "Drone"],
    year: "2025",
    location: "Portugal",
    images: ["/imagens/JOAO_E_PEDRO_1Y1A3170.jpg", "/imagens/JOAO_E_PEDRO_1Y1A3204.jpg", "/imagens/JOAO_E_PEDRO_1Y1A3439.jpg", "/imagens/JOAO_E_PEDRO_DJI_20250628213855_0002_D.jpg"],
  },
  {
    slug: "matilde-e-filipe",
    category: "Casamento",
    title: "Matilde & Filipe",
    desc: "Um dia luminoso, planeado de raiz — da escolha do espaço à última vela acesa, com elegância em cada detalhe.",
    longDesc:
      "Um casamento luminoso no Alentejo, planeado de raiz — da escolha do espaço ao catering, da decoração à última vela acesa. Elegância e serenidade em cada detalhe.",
    tags: ["Wedding Planning", "Decoração", "Catering"],
    year: "2024",
    location: "Alentejo",
    images: ["/imagens/M&F0152.jpg", "/imagens/M&F0497.jpg", "/imagens/M&F0512.jpg", "/imagens/M&F0658.jpg"],
  },
  {
    slug: "natalia-e-jonathan",
    category: "Casamento",
    title: "Natália & Jonathan",
    desc: "Uma celebração internacional cheia de emoção, com logística cuidada e uma estética intemporal do início ao fim.",
    longDesc:
      "Uma celebração internacional cheia de emoção, com logística cuidada para convidados de vários países e uma estética intemporal do início ao fim.",
    tags: ["Wedding Planning", "Logística", "Decoração"],
    year: "2024",
    location: "Portugal",
    images: ["/imagens/Natalia e Jonathan-167.jpg", "/imagens/Natalia e Jonathan-23.jpg", "/imagens/Natalia e Jonathan-315.jpg", "/imagens/Natalia e Jonathan-617.jpg"],
  },
  {
    slug: "universidade-de-evora",
    category: "Corporativo",
    title: "Universidade de Évora",
    desc: "Evento académico com organização completa, decoração cuidada e coordenação de todos os detalhes logísticos.",
    longDesc:
      "Um evento académico para a Universidade de Évora, com organização completa, decoração cuidada, audiovisual e coordenação de todos os detalhes logísticos.",
    tags: ["Institucional", "Coordenação", "Audiovisual"],
    year: "2024",
    location: "Évora",
    images: ["/imagens/EW1_0362.jpg", "/imagens/EW1_0688.jpg", "/imagens/EW1_0697.jpg", "/imagens/EW1_1100.jpg"],
  },
  {
    slug: "ines-e-goncalo",
    category: "Casamento",
    title: "Inês & Gonçalo",
    desc: "Romance e sofisticação numa celebração desenhada ao detalhe, onde cada pormenor refletiu a personalidade do casal.",
    longDesc:
      "Romance e sofisticação numa celebração desenhada ao detalhe, onde cada pormenor — da decoração à coordenação — refletiu a personalidade do casal.",
    tags: ["Wedding Planning", "Decoração", "Coordenação"],
    year: "2024",
    location: "Portugal",
    images: [
      "/imagens/Inês&Gonçalo_weddingphotos_@carinho.mio-252.jpg",
      "/imagens/Inês&Gonçalo_weddingphotos_@carinho.mio-157.jpg",
      "/imagens/Inês&Gonçalo_weddingphotos_@carinho.mio-282.jpg",
      "/imagens/Inês&Gonçalo_weddingphotos_@carinho.mio-346.jpg",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
