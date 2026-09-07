import Image from "next/image";
import { Bookmark } from "lucide-react";

const latestNews = [
  {
    category: "Mundo",
    title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO ",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
  {
    category: "Meio ambiente",
  title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO ",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
  {
    category: "Meio ambiente",
     title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO ",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
  {
    category: "Meio ambiente",
   title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO ",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
];

export function LatestNews() {
  return (
    <aside className="h-full w-full">
      <div className="flex h-full flex-col">
        
        {/* LISTA */}
        <div className="flex flex-col">
          {latestNews.map((news, index) => (
            <article
              key={index}
              className="
                group
                grid
                grid-cols-[minmax(0,1fr)_190px]
                gap-5
                border-b
                border-theme
                py-6
                first:pt-0
                last:border-b-0
              "
            >
              {/* ================= TEXTO ================= */}

              <div className="flex min-w-0 flex-col justify-between">
                <div>
                  {/* Categoria */}

                  <span className="text-sm font-medium text-primary">
                    {news.category}
                  </span>

                  {/* Título */}

                  <h3
                    className="
                      mt-1
                      line-clamp-2
                      cursor-pointer
                      text-lg
                      font-bold
                      leading-snug
                      text-primary
                      transition-colors
                      duration-300
                      group-hover:text-[#2d7911]
                      dark:group-hover:text-[#5dbb3a]
                    "
                  >
                    {news.title}
                  </h3>
                </div>

                {/* Data + Bookmark */}

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-secondary">
                    {news.date}
                  </span>

                  <Bookmark
                    size={17}
                    strokeWidth={1.5}
                    className="
                      shrink-0
                      text-primary
                      transition-colors
                      duration-300
                      group-hover:text-[#2d7911]
                    "
                  />
                </div>
              </div>

              {/* ================= IMAGEM ================= */}

              <div className="relative h-[120px] w-full overflow-hidden bg-gray-300">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}