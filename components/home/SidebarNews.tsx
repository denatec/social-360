const mostRead = [
  {
    id: 1,
    title: "As principais notícias internacionais desta semana",
  },
  {
    id: 2,
    title: "Novas decisões políticas movimentam o país",
  },
  {
    id: 3,
    title: "Tecnologia continua transformando a sociedade",
  },
  {
    id: 4,
    title: "Economia mundial enfrenta novos desafios",
  },
];

export function SidebarNews() {
  return (
    <aside className="space-y-10">

      {/* MAIS LIDAS */}
      <section>
        <div className="mb-5 border-b-2 border-black pb-3 dark:border-white">
          <h2 className="text-xl font-bold uppercase">
            Mais lidas
          </h2>
        </div>

        <div className="space-y-5">
          {mostRead.map((news, index) => (
            <article
              key={news.id}
              className="group flex gap-4 border-b border-gray-200 pb-5 dark:border-gray-800"
            >
              {/* Número */}
              <span className="text-3xl font-bold text-blue-600">
                0{index + 1}
              </span>

              {/* Título */}
              <h3 className="cursor-pointer font-semibold leading-snug transition group-hover:text-blue-600">
                {news.title}
              </h3>
            </article>
          ))}
        </div>
      </section>


      {/* PUBLICIDADE */}
      <section className="flex h-64 items-center justify-center bg-gray-100 text-sm text-gray-400 dark:bg-[#1a1a1a]">
        PUBLICIDADE
      </section>


      {/* EM DESTAQUE */}
      <section>
        <div className="mb-5 border-b-2 border-black pb-3 dark:border-white">
          <h2 className="text-xl font-bold uppercase">
            Em destaque
          </h2>
        </div>

        <article className="group cursor-pointer">
          <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
            <img
              src="/images/news.jpg"
              alt="Notícia em destaque"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <span className="mt-4 block text-xs font-bold uppercase text-blue-600">
            Mundo
          </span>

          <h3 className="mt-2 text-xl font-bold leading-tight group-hover:underline">
            Uma notícia importante em destaque para os leitores
          </h3>
        </article>
      </section>

    </aside>
  );
}