import { ArrowRight } from "lucide-react";

const mostRead = [
  {
    id: 1,
    category: "Notícias da Europa",
    title:
      "Moção de censura deverá cair, mas polémicas expõem desgaste do Governo",
    time: "15 min",
  },
  {
    id: 2,
    category: "Notícias da Europa",
    title:
      "Rússia retoma ataques após breve pausa e faz dois mortos em Kiev",
    time: "38 min",
  },
  {
    id: 3,
    category: "Notícias da Europa",
    title: "PISA: alunos portugueses apresentam retrocesso de décadas",
    time: "1 h",
  },
  {
    id: 4,
    category: "Notícias da Europa",
    title: "Economia mundial enfrenta novos desafios",
    time: "2 h",
  },
  {
    id: 5,
    category: "Notícias da Europa",
    title: "Tecnologia continua transformando a sociedade",
    time: "3 h",
  },
];

export function SidebarNews() {
  return (
    <aside className="w-full">
      {/* =====================================================
          MOBILE
      ====================================================== */}

      <div className="lg:hidden">
        {/* TÍTULO MOBILE */}
        <div className="mb-5">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-primary">
              Mais lidas
            </h2>
          </div>

          <div className="mt-2 h-[3px] w-10 bg-[#2d7911] dark:bg-[#5dbb3a]" />
        </div>

        {/* LISTA MOBILE — SEM CONTAINER */}
        <div className="border-t border-theme">
          {mostRead.map((news, index) => (
            <article
              key={news.id}
              className="group border-b border-theme py-4"
            >
              <div className="flex gap-3">
                {/* NÚMERO */}
                <span className="min-w-[28px] text-lg font-bold leading-none text-[#2d7911] dark:text-[#5dbb3a]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* CONTEÚDO */}
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2d7911] dark:text-[#5dbb3a]">
                    {news.category}
                  </span>

                  <h3 className="mt-1 text-sm font-bold leading-snug text-primary transition-colors duration-200 group-hover:text-[#2d7911] dark:group-hover:text-[#5dbb3a]">
                    {news.title}
                  </h3>

                  <span className="mt-2 block text-[10px] text-secondary">
                    {news.time}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* VER TODAS */}
        <button className="group flex items-center gap-2 py-4 text-xs font-bold text-[#2d7911] dark:text-[#5dbb3a]">
          Ver todas as notícias

          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* =====================================================
          DESKTOP
      ====================================================== */}

      <div className="hidden space-y-6 lg:block">
        {/* MAIS LIDAS */}
        <section className="overflow-hidden rounded-lg border border-theme bg-surface">
          {/* CABEÇALHO */}
          <div className="flex items-center justify-between border-b border-theme px-4 py-3">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#2d7911] dark:text-[#5dbb3a]">
                Mais lidas
              </h2>

              <div className="mt-2 h-[2px] w-8 bg-[#ffc517]" />
            </div>

            <span className="h-1.5 w-1.5 rounded-full bg-[#2d7911] dark:bg-[#5dbb3a]" />
          </div>

          {/* LISTA */}
          <div className="px-4">
            {mostRead.map((news, index) => (
              <article
                key={news.id}
                className="group flex gap-3 border-b border-theme py-3 last:border-b-0"
              >
                <span className="min-w-[28px] text-xl font-bold leading-none text-[#2d7911] dark:text-[#5dbb3a]">
                  {String(index + 1).padStart(2, "0")}
                </span>

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

          {/* RODAPÉ */}
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
      </div>
    </aside>
  );
}