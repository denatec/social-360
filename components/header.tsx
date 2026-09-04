"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const date = new Date();

  const formattedDate = new Intl.DateTimeFormat("pt-PT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white text-black dark:border-zinc-800 dark:bg-[#111] dark:text-white">
        {/* BARRA SUPERIOR */}
        <div>
          <div className="mx-auto flex h-11 max-w-[1600px] items-center justify-between px-4 md:px-6">
            <p className="text-xs capitalize text-gray-500 dark:text-gray-400">
              {formattedDate}
            </p>

            <div className="hidden items-center gap-3 sm:flex">
              <Link
                href="/login"
                className="text-sm font-medium transition hover:text-blue-600"
              >
                Entrar
              </Link>

              <Link
                href="/cadastro"
                className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black"
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
      </header>

      {/* NAVBAR FIXA */}
      <div className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-black dark:border-zinc-800 dark:bg-[#111] dark:text-white">
        <div className="relative mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:px-6">
          {/* HAMBURGUER MOBILE */}
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setSearchOpen(false);
            }}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? (
              <X size={28} strokeWidth={1.5} />
            ) : (
              <Menu size={28} strokeWidth={1.5} />
            )}
          </button>

          {/* MENU DESKTOP */}
          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-5 text-sm font-semibold transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-black hover:text-blue-600 dark:text-white"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute bottom-1 left-0 h-[3px] w-full bg-blue-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* AÇÕES */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMenuOpen(false);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 dark:hover:bg-zinc-800"
              aria-label="Pesquisar"
            >
              {searchOpen ? <X size={22} /> : <Search size={22} />}
            </button>

            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MENU MOBILE */}
      {/* MENU MOBILE */}
{menuOpen && (
  <nav className="fixed left-0 top-0 z-[70] h-full w-[80%] max-w-sm overflow-y-auto bg-white px-6 py-6 text-black shadow-2xl dark:bg-[#111] dark:text-white lg:hidden">
    
    {/* Cabeçalho */}
    <div className="mb-6 flex items-center justify-between">
      <span className="text-xl font-bold">Menu</span>

      <button
        onClick={() => setMenuOpen(false)}
        className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
        aria-label="Fechar menu"
      >
        <X size={24} />
      </button>
    </div>

    {/* Links */}
    <div className="flex flex-col">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`border-b border-gray-200 py-4 text-base font-semibold transition dark:border-zinc-800 ${
              isActive
                ? "text-blue-600"
                : "hover:text-blue-600"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>

    {/* LOGIN E CADASTRO MOBILE */}
    <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 dark:border-zinc-800">
      <Link
        href="/login"
        onClick={() => setMenuOpen(false)}
        className="w-full border border-gray-300 px-4 py-3 text-center font-semibold transition hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
      >
        Entrar
      </Link>

      <Link
        href="/cadastro"
        onClick={() => setMenuOpen(false)}
        className="w-full bg-black px-4 py-3 text-center font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black"
      >
        Criar conta
      </Link>
    </div>

  </nav>
)}

      {/* PESQUISA */}
      {searchOpen && (
        <div className="sticky top-16 z-40 border-b border-gray-200 bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-[#111]">
          <form
            className="mx-auto flex max-w-4xl items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <Search size={22} className="shrink-0 text-gray-500" />

            <input
              type="text"
              autoFocus
              placeholder="Pesquisar notícias..."
              className="flex-1 bg-transparent px-3 py-3 text-lg text-black outline-none placeholder:text-gray-400 dark:text-white"
            />

            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
              aria-label="Fechar pesquisa"
            >
              <X size={24} />
            </button>
          </form>
        </div>
      )}

      {/* ÚLTIMA HORA */}
      <div className="flex h-12 items-center justify-center gap-5 overflow-hidden border-b border-gray-200 bg-gray-50 px-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-5 whitespace-nowrap">
          <span className="shrink-0 bg-red-700 px-3 py-1.5 text-xs font-bold text-white">
            ÚLTIMA HORA
          </span>

          <span className="text-sm font-medium">
            Notícias importantes em destaque
          </span>

          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />

          <span className="text-sm font-medium">
            Últimos acontecimentos nacionais e internacionais
          </span>
        </div>
      </div>
    </>
  );
}
