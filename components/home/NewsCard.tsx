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
}: NewsCardProps) {
  return (
    <article
      className="
        group
        cursor-pointer

        border-b
        border-theme
        py-5

        lg:overflow-hidden
        lg:rounded-lg
        lg:border
        lg:bg-surface
        lg:py-0
        lg:transition-all
        lg:duration-300
        lg:hover:-translate-y-1
        lg:hover:shadow-xl
      "
    >
      <div
        className="
          flex
          gap-4

          lg:flex-col
          lg:gap-0
        "
      >
        {/* =========================================
            CONTEÚDO
        ========================================== */}
        <div
          className="
            order-1
            flex
            h-[90px]
            min-w-0
            flex-1
            flex-col
            justify-between

            lg:order-2
            lg:h-auto
            lg:p-4
          "
        >
          {/* CATEGORIA + TÍTULO */}
          <div>
            <span
              className="
                block
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-[#2d7911]
                dark:text-[#5dbb3a]

                lg:mb-3
                lg:w-fit
                lg:rounded-sm
                lg:bg-[#2d7911]
                lg:px-2
                lg:py-1
                lg:text-[9px]
                lg:tracking-wide
                lg:text-white
                lg:dark:bg-[#5dbb3a]
                lg:dark:text-black
              "
            >
              {category}
            </span>

            <h3
              className="
                mt-2
                line-clamp-3
                text-[15px]
                font-bold
                leading-[1.2]
                text-primary
                transition-colors
                duration-300
                group-hover:text-[#2d7911]
                dark:group-hover:text-[#5dbb3a]

                lg:mt-0
                lg:line-clamp-2
                lg:text-base
                lg:leading-snug
              "
            >
              {title}
            </h3>
          </div>

          {/* =====================================
              DESCRIÇÃO - DESKTOP
          ====================================== */}
          <p
            className="
              hidden

              lg:mt-3
              lg:line-clamp-2
              lg:block
              lg:text-xs
              lg:leading-relaxed
              lg:text-secondary
            "
          >
            {description}
          </p>

          {/* =====================================
              BOOKMARK - DESKTOP
          ====================================== */}
          <button
            aria-label="Salvar notícia"
            className="
              hidden

              lg:block
              lg:text-secondary
              lg:transition-colors
              lg:hover:text-[#2d7911]
              lg:dark:hover:text-[#5dbb3a]
            "
          >
            <Bookmark
              size={15}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                hover:scale-110
              "
            />
          </button>
        </div>

        {/* =========================================
            IMAGEM
        ========================================== */}
        <div
          className="
            relative
            order-2
            h-[90px]
            w-[130px]
            shrink-0
            overflow-hidden
            rounded-md
            bg-gray-300
            dark:bg-zinc-800

            lg:order-1
            lg:h-auto
            lg:aspect-[16/9]
            lg:w-full
            lg:rounded-none
          "
        >
          <Image
            src={image}
            alt= ""
            fill
            sizes="
              (max-width: 1023px) 130px,
              (min-width: 1024px) 33vw
            "
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      </div>
    </article>
  );
}