"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import {ThemeToggle} from "./ThemeToggle";

const menuItems = [
  { name: "Início", href: "/" },
  { name: "África", href: "/africa" },
  { name: "Mundo", href: "/mundo" },
  { name: "Política", href: "/politica" },
  { name: "Economia", href: "/economia" },
  { name: "Tecnologia", href: "/tecnologia" },
  { name: "Desporto", href: "/desporto" },
  { name: "Cultura", href: "/cultura" },
];

export function Header() {
  const pathname = usePathname();

  const [searchOpen, setSearchOpen] = useState(false);

  const date = new Date();

  const formattedDate = new Intl.DateTimeFormat("pt-PT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white text-black dark:border-zinc-800 dark:bg-[#111] dark:text-white">
      {/* TOPO */}
      <div>
        <div className="mx-auto flex h-11 max-w-[1600px] items-center justify-between px-4 md:px-6">
          <p className="text-xs capitalize text-gray-500 dark:text-gray-400">
            {formattedDate}
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium hover:text-blue-600"
            >
              Entrar
            </Link>

            <Link
              href="/cadastro"
              className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-black"
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </div>

      {/* LOGO */}
      <div className="flex h-28 items-center justify-center border-b border-gray-200 dark:border-zinc-800">
        <Link
          href="/"
          className="font-[family-name:var(--font-gothic)] text-5xl font-bold tracking-tight md:text-7xl"
        >
          Social 360
        </Link>
      </div>

      {/* NAVBAR */}
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:px-6">
        {/* Hamburger - apenas mobile */}
        <button
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>

        {/* Menu Desktop */}
        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-5 text-sm font-semibold transition
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-primary hover:text-blue-600"
                  }
                `}
              >
                {item.name}

                {/* Linha do item ativo */}
                {isActive && (
                  <span className="absolute bottom-1 left-0 h-[3px] w-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </nav>

      <div className="flex items-center gap-2">

          {/* BOTÃO PESQUISA */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 dark:hover:bg-zinc-800"
            aria-label="Pesquisar"
          >
            <Search size={22} />
          </button>

          {/* TROCAR TEMA */}
          <ThemeToggle />

        </div>

      </div>


      {/* ================= CAMPO DE PESQUISA ================= */}
      {searchOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-gray-200 bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-[#111]">

          <form
            className="mx-auto flex max-w-4xl items-center gap-3"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* ÍCONE */}
            <Search
              size={22}
              className="shrink-0 text-gray-500"
            />

            {/* INPUT */}
            <input
              type="text"
              autoFocus
              placeholder="Pesquisar notícias..."
              className="flex-1 bg-transparent px-3 py-3 text-lg text-black outline-none placeholder:text-gray-400 dark:text-white"
            />

            {/* FECHAR */}
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition hover:bg-gray-100 dark:hover:bg-zinc-800"
              aria-label="Fechar pesquisa"
            >
              <X size={24} />
            </button>

          </form>

        </div>
      )}


      {/* ÚLTIMA HORA */}
      <div className="flex h-12 items-center gap-5 overflow-hidden border-t border-gray-200 bg-gray-50 px-4 dark:border-zinc-800 dark:bg-zinc-900">
        <span className="shrink-0 bg-red-700 px-3 py-1.5 text-xs font-bold text-white">
          ÚLTIMA HORA
        </span>

        <div className="flex items-center gap-6 overflow-hidden whitespace-nowrap text-sm font-medium">
          <span>Notícias importantes em destaque</span>
          <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
          <span>Últimos acontecimentos nacionais e internacionais</span>
        </div>
      </div>
    </header>
  );
}
