import { ArrowRight, Clock } from "lucide-react";

const featuredNews = [
  {
    id: 1,
    category: "POLÍTICA",
    title: "Novas decisões políticas marcam o cenário nacional",
    description:
      "Os principais acontecimentos e decisões que estão a movimentar o panorama político do país.",
    time: "Há 2 horas",
  },
  {
    id: 2,
    category: "ECONOMIA",
    title: "Economia nacional enfrenta novos desafios",
    description:
      "Especialistas analisam as mudanças e os desafios que podem marcar os próximos meses.",
    time: "Há 3 horas",
  },
];

const news = [
  {
    id: 1,
    category: "PAÍS",
    title: "Novos projetos prometem transformar diferentes regiões",
    time: "Há 1 hora",
  },
  {
    id: 2,
    category: "MUNDO",
    title: "Líderes internacionais reúnem-se para discutir novos acordos",
    time: "Há 2 horas",
  },
  {
    id: 3,
    category: "TECNOLOGIA",
    title: "Tecnologia continua a mudar a forma como vivemos",
    time: "Há 3 horas",
  },
  {
    id: 4,
    category: "SOCIEDADE",
    title: "Novas iniciativas sociais ganham força nas comunidades",
    time: "Há 4 horas",
  },
  {
    id: 5,
    category: "ÁFRICA",
    title: "Países africanos reforçam relações económicas",
    time: "Há 5 horas",
  },
  {
    id: 6,
    category: "AMBIENTE",
    title: "Especialistas alertam para novos desafios ambientais",
    time: "Há 6 horas",
  },
];

export function NewsSection() {
  return (
    <section className="border-t border-theme bg-background">
      <div className="mx-auto max-w-[1500px] px-4 py-10 md:px-6 lg:px-8">
        {/* TÍTULO */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Últimas notícias
            </h2>

            <div className="mt-2 h-[3px] w-12 bg-[#2d7911]" />
          </div>

          <button className="group hidden items-center gap-2 text-sm font-semibold text-[#2d7911] transition hover:text-[#1f5c0c] sm:flex">
            Ver todas
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
          {/* COLUNA DAS NOTÍCIAS */}
          <div className="min-w-0">
            {/* ================= CARDS GRANDES ================= */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {featuredNews.map((item) => (
                <article
                  key={item.id}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-theme bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* ÁREA DA IMAGEM */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-300 dark:bg-zinc-800">
                    {/* Quando tiver imagem, substitua esta área pelo Image */}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-zinc-500">
                        Imagem
                      </span>
                    </div>

                    {/* Categoria */}
                    <span className="absolute left-4 top-4 bg-[#2d7911] px-3 py-1.5 text-[10px] font-bold tracking-wider text-white">
                      {item.category}
                    </span>
                  </div>

                  {/* CONTEÚDO */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold leading-tight text-primary transition-colors duration-300 group-hover:text-[#2d7911]">
                      {item.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-secondary">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs text-secondary">
                      <Clock size={13} />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* ================= NOTÍCIAS PEQUENAS ================= */}
            <div className="mt-8 grid grid-cols-1 gap-x-6 md:grid-cols-2">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="group flex cursor-pointer gap-4 border-b border-theme py-5 first:pt-0"
                >
                  {/* ÁREA DA IMAGEM */}
                  <div className="relative h-[90px] w-[130px] shrink-0 overflow-hidden rounded-md bg-gray-300 dark:bg-zinc-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[9px] font-medium uppercase text-gray-500 dark:text-zinc-500">
                        Imagem
                      </span>
                    </div>
                  </div>

                  {/* CONTEÚDO */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#2d7911]">
                        {item.category}
                      </span>

                      <h3 className="mt-1 text-sm font-bold leading-snug text-primary transition-colors duration-200 group-hover:text-[#2d7911]">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-secondary">
                      <Clock size={12} />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* ================= PUBLICIDADE INFERIOR ================= */}
            <section className="relative mt-8 flex h-[180px] items-center justify-center overflow-hidden border border-theme bg-surface-secondary">
              {/* Fundo decorativo */}
              <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:14px_14px]" />
              </div>

              <div className="relative text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                  Publicidade
                </p>

                <span className="mt-2 block text-[10px] text-secondary">
                  Espaço publicitário
                </span>
              </div>
            </section>

            {/* BOTÃO MOBILE */}
            <button className="group mt-6 flex items-center gap-2 text-sm font-semibold text-[#2d7911] sm:hidden">
              Ver todas as notícias

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* ================= SIDEBAR PUBLICIDADE ================= */}
          <aside className="relative">
            <div className="sticky top-24">
              <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden border border-theme bg-surface-secondary">
                {/* Fundo decorativo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:14px_14px]" />
                </div>

                <div className="relative text-center">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                    Publicidade
                  </p>

                  <span className="mt-2 block text-[10px] text-secondary">
                    300 × 600
                  </span>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}