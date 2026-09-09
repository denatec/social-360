import Image from "next/image";
import { Clock } from "lucide-react";

const mostRead = [
  {
    id: 1,
    title: "As principais notícias internacionais desta semana",
    category: "Mundo",
    time: "Há 15 min",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Novas decisões políticas movimentam o país",
    category: "Política",
    time: "Há 38 min",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "Tecnologia continua transformando a sociedade",
    category: "Tecnologia",
    time: "Há 1 h",
    image: "/images/news3.jpg",
  },
  {
    id: 4,
    title: "Economia mundial enfrenta novos desafios",
    category: "Economia",
    time: "Há 2 h",
    image: "/images/news4.jpg",
  },
  {
    id: 5,
    title: "Desporto nacional prepara-se para novos desafios",
    category: "Desporto",
    time: "Há 3 h",
    image: "/images/news5.jpg",
  },
];

export function SidebarNews() {
  return (
    <aside className="w-full">
      {/* TÍTULO */}
      <div className="mb-6 border-l-4 border-[#2d7911] pl-3">
        <h2 className="text-xl font-bold text-primary">
          Mais lidas
        </h2>

        <div className="mt-2 h-[3px] w-8 bg-[#ffc517]" />
      </div>

      {/* LISTA */}
      <div className="grid grid-cols-1">
        {mostRead.map((news, index) => (
          <article
            key={news.id}
            className="group flex cursor-pointer gap-4 border-b border-theme py-5 first:pt-0 last:border-b-0"
          >
            {/* CONTEÚDO */}
            <div className="flex min-w-0 flex-1 flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold leading-none text-[#2d7911] dark:text-[#5dbb3a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2d7911] dark:text-[#5dbb3a]">
                    {news.category}
                  </span>
                </div>

                <h3 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-primary transition-colors duration-200 group-hover:text-[#2d7911] dark:group-hover:text-[#5dbb3a]">
                  {news.title}
                </h3>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] text-secondary">
                <Clock size={12} />
                <span>{news.time}</span>
              </div>
            </div>

            {/* IMAGEM */}
            <div className="relative h-[90px] w-[130px] shrink-0 overflow-hidden rounded-md bg-gray-300 dark:bg-zinc-800">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </article>
        ))}
      </div>

      {/* VER TODAS */}
      <button className="mt-5 text-sm font-semibold text-[#2d7911] transition hover:underline dark:text-[#5dbb3a]">
        Ver todas as notícias →
      </button>

      {/* PUBLICIDADE */}
      <section className="relative mt-8 flex h-[250px] items-center justify-center overflow-hidden border border-theme bg-surface-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:14px_14px]" />
        </div>

        <div className="relative text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            Publicidade
          </p>

          <span className="mt-2 block text-[10px] text-secondary">
            300 × 250
          </span>
        </div>
      </section>
    </aside>
  );
}