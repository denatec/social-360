import Image from "next/image";
import { Clock } from "lucide-react";

interface NewsCardProps {
  title: string;
  category: string;
  image: string;
  description?: string;
  time?: string;
}

export function NewsCard({
  title,
  category,
  image,
  description,
  time,
}: NewsCardProps) {
  return (
    <article className="group cursor-pointer border-b border-theme py-5 transition-colors duration-300">
      <div className="flex gap-4">
        {/* CONTEÚDO */}
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2d7911] dark:text-[#5dbb3a]">
              {category}
            </span>

            <h3 className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-primary transition-colors duration-200 group-hover:text-[#2d7911] dark:group-hover:text-[#5dbb3a]">
              {title}
            </h3>

            {description && (
              <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-secondary">
                {description}
              </p>
            )}
          </div>

          {time && (
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-secondary">
              <Clock size={12} />
              <span>{time}</span>
            </div>
          )}
        </div>

        {/* IMAGEM — MESMO PADRÃO DO NEWSSECTION */}
        <div className="relative h-[90px] w-[130px] shrink-0 overflow-hidden rounded-md bg-gray-300 dark:bg-zinc-800">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </article>
  );
}