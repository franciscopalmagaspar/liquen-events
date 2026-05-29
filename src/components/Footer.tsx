import Link from "next/link";

const pages = [
  ["Sobre", "/sobre"],
  ["Serviços", "/servicos"],
  ["Portfolio", "/portfolio"],
  ["Galeria", "/galeria"],
  ["Clientes", "/clientes"],
  ["Contacto", "/contacto"],
];

export default function Footer() {
  return (
    <footer className="bg-surface-raised border-t border-foreground/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span
                className="text-moss font-bold text-lg tracking-widest"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                LIQUEN
              </span>
              <span
                className="text-foreground text-lg tracking-widest"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {" "}EVENTS
              </span>
            </div>
            <p className="text-foreground/40 text-sm leading-relaxed max-w-xs">
              Desde 2014, transformamos momentos em memórias inesquecíveis. Eventos corporativos e sociais com excelência.
            </p>
          </div>

          <div>
            <p className="text-foreground/25 text-xs tracking-[0.25em] uppercase mb-5">Páginas</p>
            <ul className="flex flex-col gap-3">
              {pages.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/45 hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/8 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-foreground/25">
            © {new Date().getFullYear()} Liquen Events. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Instagram", "LinkedIn", "Facebook"].map((s) => (
              <span key={s} className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors cursor-pointer">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
