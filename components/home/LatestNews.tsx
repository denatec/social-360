const latestNews = [
  {
    time: "19:09",
    title:
      "Ministério dos Negócios Estrangeiros francês nega discriminação da China",
  },
  {
    time: "19:04",
    title:
      "FBI não vai marcar presença na Festa do Avante",
  },
  {
    time: "18:56",
    title:
      "Hungria: fim das leis de emergência pode travar multas",
  },
  {
    time: "18:30",
    title:
      "Novas decisões internacionais marcam o dia",
  },
  {
    time: "18:12",
    title:
      "Tecnologia continua a transformar diferentes setores",
  },
];

export function LatestNews() {
  return (
    <aside className="border border-theme bg-surface p-5 transition-colors duration-300">
      
      {/* Cabeçalho */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-bold text-primary">
          Últimas notícias
        </h2>

        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
      </div>

      {/* Área com scroll */}
      <div className="h-[350px] overflow-y-auto">
        {latestNews.map((news, index) => (
          <article
            key={index}
            className="flex gap-4 border-t border-theme py-4 first:border-t-0"
          >
            <time className="shrink-0 text-sm text-secondary">
              {news.time}
            </time>

            <h3 className="cursor-pointer font-semibold text-primary transition hover:text-accent">
              {news.title}
            </h3>
          </article>
        ))}
      </div>

      {/* Botão fica fora do scroll */}
      <button className="mt-4 font-bold text-accent hover:underline">
        Ver todas →
      </button>

    </aside>
  );
}