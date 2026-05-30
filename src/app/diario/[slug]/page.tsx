import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blurFor } from "@/lib/blur";
import { BreadcrumbJsonLd, JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { SITE } from "@/lib/site";
import { posts, getPost } from "../posts-data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artigo não encontrado" };
  return pageMetadata({
    title: post.metaTitle,
    description: post.excerpt,
    path: `/diario/${post.slug}`,
    image: post.cover,
    keywords: post.keywords,
  });
}

const fmtDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" });

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Diário", path: "/diario" },
          { name: post.title, path: `/diario/${post.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: `${SITE.url}${post.cover}`,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@id": `${SITE.url}/#organization` },
          publisher: { "@id": `${SITE.url}/#organization` },
          mainEntityOfPage: `${SITE.url}/diario/${post.slug}`,
        }}
      />

      {/* Hero */}
      <article>
        <header className="relative min-h-[60vh] flex items-end overflow-hidden">
          <Image src={post.cover} {...blurFor(post.cover)} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />
          <div className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8 pb-16">
            <nav className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-cream/45 mb-6">
              <Link href="/diario" className="hover:text-cream transition-colors">Diário</Link>
              <span>/</span>
              <span className="text-cream/70">{post.category}</span>
            </nav>
            <h1 className="text-cream font-bold leading-[1.05] mb-5" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(30px, 5vw, 60px)" }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-cream/55 text-xs">
              <span>{fmtDate(post.date)}</span>
              <span className="w-1 h-1 rounded-full bg-cream/30" />
              <span>{post.readingMin} min de leitura</span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="py-16 lg:py-24 bg-surface">
          <div className="max-w-2xl mx-auto px-6 lg:px-8 flex flex-col gap-6">
            {post.body.map((b, i) => {
              if (b.type === "h2")
                return (
                  <h2 key={i} className="text-foreground/85 font-bold mt-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px, 2.4vw, 28px)" }}>
                    {b.text}
                  </h2>
                );
              if (b.type === "quote")
                return (
                  <blockquote key={i} className="border-l-2 border-moss/50 pl-6 py-1 my-2">
                    <p className="text-foreground/70 text-lg italic leading-relaxed" style={{ fontFamily: "var(--font-playfair)" }}>{b.text}</p>
                  </blockquote>
                );
              return <p key={i} className="text-foreground/55 text-[16px] leading-[1.9]">{b.text}</p>;
            })}

            <div className="mt-8 pt-8 border-t border-foreground/8">
              <Link href="/contacto" className="inline-flex items-center gap-3 px-7 py-3.5 bg-moss text-cream text-xs font-medium rounded-sm hover:bg-moss-dark hover:gap-5 transition-all duration-300 tracking-widest uppercase">
                Falar connosco →
              </Link>
            </div>
          </div>
        </div>

        {/* Other posts */}
        {others.length > 0 && (
          <section className="py-20 bg-surface border-t border-foreground/8">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
              <p className="text-foreground/25 text-[10px] tracking-[0.4em] uppercase mb-10 flex items-center gap-3">
                <span className="w-5 h-px bg-moss/50" /> Continuar a ler
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {others.map((o) => (
                  <Link key={o.slug} href={`/diario/${o.slug}`} className="group relative overflow-hidden rounded-xl aspect-[16/9]">
                    <Image src={o.cover} {...blurFor(o.cover)} alt={o.title} fill sizes="50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <p className="text-moss/70 text-[9px] tracking-[0.35em] uppercase mb-1.5">{o.category}</p>
                      <h3 className="text-cream text-lg font-bold group-hover:text-moss transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>{o.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
