"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/galeria", label: "Galeria" },
  { href: "/clientes", label: "Clientes" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface-raised/95 backdrop-blur-sm border-b border-foreground/8" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1">
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
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-foreground ${
                  pathname === link.href ? "text-foreground" : "text-foreground/45"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contacto"
              className="px-5 py-2 bg-moss text-cream text-sm font-medium rounded-lg hover:bg-moss-dark transition-colors tracking-wide"
            >
              Orçamento
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-200 mb-1.5 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-200 mb-1.5 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-200 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-surface-raised border-t border-foreground/8 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="px-6 pt-4 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-2.5 text-sm tracking-wide transition-colors hover:text-foreground ${
                pathname === link.href ? "text-foreground" : "text-foreground/45"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="mt-3 py-3 text-center bg-moss text-cream text-sm font-medium rounded-lg hover:bg-moss-dark transition-colors"
          >
            Orçamento
          </Link>
        </div>
      </div>
    </nav>
  );
}
