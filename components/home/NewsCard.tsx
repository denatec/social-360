"use client";

import Image from "next/image";
import { Clock, Bookmark } from "lucide-react";

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
  description = "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  time = "Há 2 horas",
}: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-theme bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Imagem */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col p-4">
        
        {/* Categoria */}
        <span className="mb-3 w-fit rounded-sm bg-[#2d7911] px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-white dark:bg-[#5dbb3a] dark:text-black">
          {category}
        </span>

        {/* Título */}
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-primary transition-colors duration-300 group-hover:text-[#2d7911] dark:group-hover:text-[#5dbb3a]">
          {title}
        </h3>

        {/* Descrição */}
        <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-secondary">
          {description}
        </p>

        {/* Rodapé */}
        <div className="mt-5 flex items-center justify-between border-t border-theme pt-3">
          
          <div className="flex items-center gap-1.5 text-[11px] text-secondary">
            <Clock size={13} strokeWidth={1.8} />
            <span>{time}</span>
          </div>

          <button
            aria-label="Salvar notícia"
            className="text-secondary transition-colors hover:text-[#2d7911] dark:hover:text-[#5dbb3a]"
          >
            <Bookmark
              size={15}
              strokeWidth={1.8}
              className="transition-transform duration-300 hover:scale-110"
            />
          </button>

        </div>
      </div>
    </article>
  );
}