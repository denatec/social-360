import Image from "next/image";

const latestNews = [
  {
    image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
    title:
      "Ministério dos Negócios Estrangeiros francês nega discriminação da China",
  },
  {
  image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
    title: "FBI não vai marcar presença na Festa do Avante",
  },
  {
  image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
    title: "Hungria: fim das leis de emergência pode travar multas",
  },
  {
  image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
    title: "Novas decisões internacionais marcam o dia",
  },
  {
  image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
    title: "Tecnologia continua a transformar diferentes setores",
  },
];

export function LatestNews() {
  return (
    <aside className="border border-theme bg-surface p-4 transition-colors duration-300">
      
      {/* Cabeçalho */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold text-primary">
          Últimas notícias
        </h2>

        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
      </div>

      {/* Notícias */}
      <div className="h-[420px] overflow-y-auto pr-2">
        {latestNews.map((news, index) => (
          <article
            key={index}
            className="group flex gap-3 border-t border-theme py-3 first:border-t-0 first:pt-0"
          >
            {/* Imagem */}
            <div className="relative h-[70px] w-[100px] shrink-0 overflow-hidden">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-1 flex-col justify-center">
              <h3 className="line-clamp-3 cursor-pointer text-sm font-semibold leading-snug text-primary transition hover:text-blue-600">
                {news.title}
              </h3>
            </div>
          </article>
        ))}
      </div>

      {/* Botão */}
      <button className="mt-4 text-sm font-bold text-accent transition hover:underline">
        Ver todas →
      </button>

    </aside>
  );
}