"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";

const latestNews = [
  {
    id: 1,
    category: "Mundo",
    title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO",
    image: "/CAPA.png",
    time: "10 minutos de leitura",
  },
  {
    id: 2,
    category: "Meio ambiente",
    title: "AS MUDANÇAS QUE ESTÃO TRANSFORMANDO O NOSSO PLANETA",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
    time: "4 minutos de leitura",
  },
  {
    id: 3,
    category: "Política",
    title: "NOVAS DECISÕES PODEM MUDAR O CENÁRIO POLÍTICO",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
    time: "6 minutos de leitura",
  },
  {
    id: 4,
    category: "Economia",
    title: "MERCADOS REAGEM ÀS NOVAS MEDIDAS ECONÔMICAS",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
    time: "5 minutos de leitura",
  },
  {
    id: 5,
    category: "Tecnologia",
    title: "A NOVA TECNOLOGIA QUE ESTÁ MUDANDO O FUTURO",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
    time: "7 minutos de leitura",
  },
  {
    id: 6,
    category: "Cultura",
    title: "HISTÓRIAS QUE ESTÃO MARCANDO UMA NOVA GERAÇÃO",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
    time: "8 minutos de leitura",
  },
];

export function LatestNews() {
  // Notícia principal
  const mainNews = latestNews[0];

  // Notícias secundárias
  const secondaryNews = latestNews.slice(1);

  // Cada slide mostra 2 notícias
  const [slide, setSlide] = useState(0);

  const totalSlides = Math.ceil(secondaryNews.length / 2);

  // Próximo slide
  const nextSlide = () => {
    setSlide((current) => {
      if (current >= totalSlides - 1) {
        return 0;
      }

      return current + 1;
    });
  };

  // Slide anterior
  const previousSlide = () => {
    setSlide((current) => {
      if (current <= 0) {
        return totalSlides - 1;
      }

      return current - 1;
    });
  };

  return (
    <aside
      className="
        mx-auto
        w-full
        max-w-[400px]
      "
    >
      {/* =====================================================
          TÍTULO
      ====================================================== */}
      <div
        className="
          mb-5
          flex
          items-center
          gap-3
          border-l-4
          border-[#2d7911]
          pl-3
        "
      >
        <h2 className="text-xl font-bold text-primary">
          Em lançamento
        </h2>

        <span className="h-2 w-2 rounded-full bg-[#2d7911]" />
      </div>

      {/* =====================================================
          NOTÍCIA PRINCIPAL
      ====================================================== */}
      <article className="w-full">
        {/* IMAGEM CENTRALIZADA */}
        <div className="flex w-full justify-center">
          <div
            className="
              relative
              h-[340px]
              w-[245px]
              shrink-0
              overflow-hidden
              rounded-md
              bg-gray-200
              dark:bg-zinc-800
            "
          >
            <Image
              src={mainNews.image}
              alt={mainNews.title}
              fill
              priority
              sizes="245px"
              className="
                object-cover
                transition-transform
                duration-500
                hover:scale-105
              "
            />
          </div>
        </div>

        {/* =================================================
            INFORMAÇÕES DA NOTÍCIA
        ================================================== */}
        <div className="mt-4">
          {/* CATEGORIA */}
          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-widest
              text-[#2d7911]
              dark:text-[#5dbb3a]
            "
          >
            {mainNews.category}
          </span>

          {/* TÍTULO */}
          <h1
            className="
              mt-1
              text-xl
              font-bold
              leading-snug
              text-primary
              sm:text-[22px]
            "
          >
            {mainNews.title}
          </h1>

          {/* TEMPO */}
          <div
            className="
              mt-2
              flex
              items-center
              gap-1.5
              text-[10px]
              text-secondary
            "
          >
            <Clock size={11} />

            <span>{mainNews.time}</span>
          </div>
        </div>
      </article>

      {/* =====================================================
          LINHA DE SEPARAÇÃO
      ====================================================== */}
      <div className="my-5 border-t border-theme" />

      {/* =====================================================
          CARROSSEL
      ====================================================== */}
      <div className="w-full overflow-hidden">
        <div
          className="
            flex
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
          style={{
            transform: `translateX(-${slide * 100}%)`,
          }}
        >
          {/* =================================================
              SLIDES
          ================================================== */}
          {Array.from({ length: totalSlides }).map(
            (_, pageIndex) => {
              const startIndex = pageIndex * 2;

              const pageNews = secondaryNews.slice(
                startIndex,
                startIndex + 2
              );

              return (
                <div
                  key={pageIndex}
                  className="
                    grid
                    min-w-full
                    grid-cols-2
                    gap-3
                  "
                >
                  {pageNews.map((news) => (
                    <article
                      key={news.id}
                      className="
                        group
                        min-w-0
                        cursor-pointer
                      "
                    >
                      {/* IMAGEM PEQUENA */}
                      <div
                        className="
                          relative
                          h-[85px]
                          w-full
                          overflow-hidden
                          rounded-sm
                          bg-gray-200
                          dark:bg-zinc-800
                        "
                      >
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          sizes="180px"
                          className="
                            object-cover
                            transition-transform
                            duration-500
                            ease-out
                            group-hover:scale-105
                          "
                        />
                      </div>

                      {/* CATEGORIA */}
                      <span
                        className="
                          mt-1.5
                          block
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-[#2d7911]
                          dark:text-[#5dbb3a]
                        "
                      >
                        {news.category}
                      </span>

                      {/* TÍTULO */}
                      <h3
                        className="
                          mt-1
                          line-clamp-3
                          text-[11px]
                          font-bold
                          leading-snug
                          text-primary
                          transition-colors
                          duration-200
                          group-hover:text-[#2d7911]
                          dark:group-hover:text-[#5dbb3a]
                        "
                      >
                        {news.title}
                      </h3>

                      {/* TEMPO */}
                      <div
                        className="
                          mt-1.5
                          text-[8px]
                          uppercase
                          tracking-wide
                          text-secondary
                        "
                      >
                        {news.time}
                      </div>
                    </article>
                  ))}

                  {/* Mantém o espaço no último slide */}
                  {pageNews.length === 1 && <div />}
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* =====================================================
          CONTROLES
      ====================================================== */}
      <div className="mt-4 flex items-center justify-between">
        {/* INDICADORES */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map(
            (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-500
                  ${
                    slide === index
                      ? "w-6 bg-[#2d7911]"
                      : "w-1.5 bg-zinc-400 dark:bg-zinc-700"
                  }
                `}
              />
            )
          )}
        </div>

        {/* SETAS */}
        <div className="flex items-center gap-2">
          {/* ESQUERDA */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Notícias anteriores"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-theme
              bg-transparent
              text-secondary
              transition-all
              duration-300
              hover:border-[#2d7911]
              hover:bg-[#2d7911]
              hover:text-white
            "
          >
            <ChevronLeft size={15} />
          </button>

          {/* DIREITA */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Próximas notícias"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-theme
              bg-transparent
              text-secondary
              transition-all
              duration-300
              hover:border-[#2d7911]
              hover:bg-[#2d7911]
              hover:text-white
            "
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
}