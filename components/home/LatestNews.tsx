import Image from "next/image";
import { Clock } from "lucide-react";

const latestNews = [
  {
    id: 1,
    category: "Mundo",
    title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
  {
    id: 2,
    category: "Meio ambiente",
    title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
  {
    id: 3,
    category: "Meio ambiente",
    title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
  {
    id: 4,
    category: "Meio ambiente",
    title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
];

export function LatestNews() {
  return (
    <aside className="w-full">
      <div className="mb-6 border-l-4 border-[#2d7911] pl-3">
        <h2 className="text-xl font-bold text-primary">
          Últimas notícias
        </h2>
      </div>

      <div className="grid grid-cols-1">
        {latestNews.map((news) => (
          <article
            key={news.id}
            className="group flex cursor-pointer gap-4 border-b border-theme py-5 first:pt-0 last:border-b-0"
          >
            {/* CONTEÚDO */}
            <div className="flex min-w-0 flex-1 flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2d7911] dark:text-[#5dbb3a]">
                  {news.category}
                </span>

                <h3 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-primary transition-colors duration-200 group-hover:text-[#2d7911] dark:group-hover:text-[#5dbb3a]">
                  {news.title}
                </h3>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[11px] text-secondary">
                <Clock size={12} />
                <span>{news.date}</span>
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
    </aside>
  );
}