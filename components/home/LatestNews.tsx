import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";

const latestNews = [
  {
    image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
    title:
      "Ministério dos Negócios Estrangeiros francês nega discriminação da China",
    time: "15 min",
  },
  {
    image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
    title: "FBI não vai marcar presença na Festa do Avante",
    time: "38 min",
  },
  {
    image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
    title: "Hungria: fim das leis de emergência pode travar multas",
    time: "1 h",
  },
  {
    image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
    title: "Novas decisões internacionais marcam o dia",
    time: "2 h",
  },
  {
    image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
    title: "Tecnologia continua a transformar diferentes setores",
    time: "3 h",
  },
];

export function LatestNews() {
  return (
    <aside className="flex h-full flex-col rounded-xl border border-theme bg-surface p-5 transition-colors duration-300">
      
      {/* Cabeçalho */}
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <h2 className="text-xl font-bold text-primary">
          Últimas notícias
        </h2>

        <span className="h-2 w-2 rounded-full bg-[#2d7911] shadow-[0_0_8px_rgba(45,121,17,0.6)] dark:bg-[#5dbb3a]" />
      </div>

      {/* Notícias com scroll */}
      <div className="latest-news-scroll max-h-[390px] flex-1 overflow-y-auto pr-2">
        {latestNews.map((news, index) => (
          <article
            key={index}
            className="group flex gap-3 border-t border-theme py-3 first:border-t-0 first:pt-0"
          >
            {/* Imagem */}
            <div className="relative h-[58px] w-[82px] shrink-0 overflow-hidden rounded-md">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex min-w-0 flex-1 flex-col justify-between">
              <h3 className="line-clamp-2 cursor-pointer text-sm font-semibold leading-snug text-primary transition-colors duration-200 group-hover:text-accent">
                {news.title}
              </h3>

              <div className="mt-1 flex items-center gap-1 text-[11px] text-secondary">
                <Clock size={11} />
                <span>{news.time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Rodapé */}
      <button className="group mt-4 flex shrink-0 items-center gap-2 border-t border-theme pt-4 text-sm font-bold text-accent transition">
        Ver todas as notícias

        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </aside>
  );
}