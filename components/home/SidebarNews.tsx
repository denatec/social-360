import Image from "next/image";
import { ArrowRight } from "lucide-react";

const mostRead = [
  {
    id: 1,
    title: "As principais notícias internacionais desta semana",
    time: "15 min",
  },
  {
    id: 2,
    title: "Novas decisões políticas movimentam o país",
    time: "38 min",
  },
  {
    id: 3,
    title: "Tecnologia continua transformando a sociedade",
    time: "1 h",
  },
  {
    id: 4,
    title: "Economia mundial enfrenta novos desafios",
    time: "2 h",
  },
  {
    id: 5,
    title: "Desporto nacional prepara-se para novos desafios",
    time: "3 h",
  },
];

export function SidebarNews() {
  return (
    <aside className="space-y-6">

      {/* MAIS LIDAS */}
      <section className="overflow-hidden rounded-lg border border-theme bg-surface">

        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b border-theme px-4 py-3">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#2d7911] dark:text-[#5dbb3a]">
              Mais lidas
            </h2>

            <div className="mt-2 h-[2px] w-8 bg-[#ffc517]" />
          </div>

          <span className="h-1.5 w-1.5 rounded-full bg-[#2d7911] dark:bg-[#5dbb3a]" />
        </div>

        {/* Lista */}
        <div className="px-4">
          {mostRead.map((news, index) => (
            <article
              key={news.id}
              className="group flex gap-3 border-b border-theme py-3 last:border-b-0"
            >
              {/* Número */}
              <span className="min-w-[28px] text-xl font-bold leading-none text-[#2d7911] dark:text-[#5dbb3a]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Conteúdo */}
              <div className="min-w-0">
                <h3 className="cursor-pointer text-[11px] font-semibold leading-snug text-primary transition-colors duration-200 group-hover:text-[#2d7911] dark:group-hover:text-[#5dbb3a]">
                  {news.title}
                </h3>

                <span className="mt-1 block text-[10px] text-secondary">
                  {news.time}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Rodapé */}
        <button className="group flex w-full items-center gap-2 border-t border-theme px-4 py-3 text-[11px] font-bold text-[#2d7911] transition hover:bg-surface-secondary dark:text-[#5dbb3a]">
          Ver todas as notícias

          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </section>

      {/* PUBLICIDADE */}
      <section className="relative flex h-[250px] items-center justify-center overflow-hidden rounded-lg border border-theme bg-surface-secondary">

        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:12px_12px]" />
        </div>

        <div className="relative text-center">
          <p className="text-[10px] font-medium uppercase tracking-widest text-secondary">
            Publicidade
          </p>

          <span className="mt-2 block text-[9px] text-secondary">
            300 × 250
          </span>
        </div>
      </section>

    </aside>
  );
}