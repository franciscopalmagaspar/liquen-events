import Link from "next/link";

const pages = [
  ["Início", "/"],
  ["Sobre", "/sobre"],
  ["Serviços", "/servicos"],
  ["Portfolio", "/portfolio"],
  ["Galeria", "/galeria"],
  ["Clientes", "/clientes"],
  ["Contacto", "/contacto"],
];

export default function Footer() {
  return (
    <footer className="bg-moss-dark text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span
                className="text-moss-light font-bold text-xl tracking-widest"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                LIQUEN
              </span>
              <span
                className="text-cream text-xl tracking-widest"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                EVENTS
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream/55">
              Transformamos momentos em memórias inesquecíveis. Eventos
              corporativos e sociais com elegância e profissionalismo.
            </p>
          </div>

          <div>
            <h3 className="text-cream font-semibold mb-4 text-xs tracking-widest uppercase">
              Páginas
            </h3>
            <ul className="flex flex-col gap-2">
              {pages.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream/55 hover:text-moss-light transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-cream font-semibold mb-4 text-xs tracking-widest uppercase">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-cream/55">
              <li>info@liquenevents.pt</li>
              <li>+351 900 000 000</li>
              <li>Lisboa, Portugal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 text-center text-xs text-cream/35">
          © {new Date().getFullYear()} Liquen Events. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
