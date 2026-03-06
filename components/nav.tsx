"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/80 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-6">
          {isHome ? (
            <>
              <a
                href="#projetos"
                className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
              >
                Projetos
              </a>
              <a
                href="#sobre"
                className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-sm text-[#A0A0A0] hover:text-white transition-colors hidden sm:block"
              >
                Contato
              </a>
            </>
          ) : (
            <Link
              href="/"
              className="text-sm text-[#A0A0A0] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>←</span>
              <span>Voltar</span>
            </Link>
          )}

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded-full bg-[#00C4BE]/10 text-[#00E5D0] border border-[#00C4BE]/30 hover:bg-[#00C4BE]/20 hover:border-[#00C4BE]/60 transition-all"
          >
            Falar comigo
          </a>
        </div>
      </nav>
    </header>
  );
}
