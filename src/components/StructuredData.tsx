/**
 * Organization / LocalBusiness structured data (schema.org).
 * Helps search engines and rich results understand the business —
 * a hallmark of a professionally built site.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Líquen Events",
    description:
      "Organização de eventos corporativos e sociais em Portugal. Transformamos momentos em memórias inesquecíveis.",
    url: "https://liquenevents.pt",
    email: "liquen.alentejo@gmail.com",
    telephone: "+351919259820",
    image: "https://liquenevents.pt/imagens/JOAO_E_PEDRO_DJI_20250628213855_0002_D.jpg",
    logo: "https://liquenevents.pt/logo-liquen.png",
    areaServed: "PT",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Évora",
      addressCountry: "PT",
    },
    sameAs: [
      "https://www.instagram.com/liquen.events",
      "https://www.facebook.com/liquen.events",
    ],
    slogan: "Organizamos eventos, eternizamos memórias.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
