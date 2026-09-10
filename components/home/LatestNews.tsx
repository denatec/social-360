"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";

const latestNews = [
  {
    id: 1,
    category: "Mundo",
    title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
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
  // =====================================================
  // NOTÍCIA PRINCIPAL
  // =====================================================

  const mainNews = latestNews[0];

  // =====================================================
  // NOTÍCIAS SECUNDÁRIAS
  // =====================================================

  const secondaryNews = latestNews.slice(1);

  /*
   * Mostramos 2 notícias ao mesmo tempo.
   *
   * Criamos clones:
   *
   * [últimas 2]
   * [todas as notícias]
   * [primeiras 2]
   *
   * Isso permite que o carrossel seja infinito.
   */

  const visibleCount = 2;

  const firstClones = secondaryNews.slice(0, visibleCount);
  const lastClones = secondaryNews.slice(-visibleCount);

  const carouselNews = [
    ...lastClones,
    ...secondaryNews,
    ...firstClones,
  ];

  /*
   * Começamos depois dos clones iniciais.
   */
  const [currentIndex, setCurrentIndex] =
    useState(visibleCount);

  /*
   * Controla se a transição está ativa.
   */
  const [isTransitioning, setIsTransitioning] =
    useState(true);

  // =====================================================
  // TAMANHO DE CADA CARD
  // =====================================================

  /*
   * Cada card ocupa metade da área.
   *
   * O gap fica separado através do cálculo.
   */

  const cardWidth = "calc(50% - 6px)";

  // =====================================================
  // PRÓXIMO
  // =====================================================

  const nextSlide = () => {
    if (!isTransitioning) return;

    setCurrentIndex((current) => current + 1);
  };

  // =====================================================
  // ANTERIOR
  // =====================================================

  const previousSlide = () => {
    if (!isTransitioning) return;

    setCurrentIndex((current) => current - 1);
  };

  // =====================================================
  // TRANSITION END
  // =====================================================

  const handleTransitionEnd = () => {
    /*
     * Chegamos aos primeiros clones.
     *
     * Exemplo:
     *
     * 1 2 3 4 5 1 2
     *           ↑
     *         clone
     *
     * Voltamos silenciosamente para o início real.
     */

    if (
      currentIndex >=
      secondaryNews.length + visibleCount
    ) {
      setIsTransitioning(false);

      setCurrentIndex(visibleCount);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }

    /*
     * Chegamos aos clones do final.
     *
     * Exemplo:
     *
     * 5 1 2 3 4 5 1 2
     * ↑
     * clone
     */

    if (currentIndex <= 0) {
      setIsTransitioning(false);

      setCurrentIndex(
        secondaryNews.length
      );

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  // =====================================================
  // AUTO PLAY
  // =====================================================

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => current + 1);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // =====================================================
  // INDICADOR ATUAL
  // =====================================================

  const realIndex =
    (currentIndex - visibleCount) %
    secondaryNews.length;

  const normalizedIndex =
    realIndex < 0
      ? realIndex + secondaryNews.length
      : realIndex;

  /*
   * Como mostramos 2 notícias por vez,
   * o indicador avança uma notícia por vez.
   */

  return (
    <aside className="mx-auto w-full max-w-[400px]">

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

        <span
          className="
            h-2
            w-2
            rounded-full
            bg-[#2d7911]
          "
        />
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

        {/* INFORMAÇÕES */}

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

            <span>
              {mainNews.time}
            </span>
          </div>
        </div>
      </article>

      {/* =====================================================
          LINHA
      ====================================================== */}

      <div className="my-5 border-t border-theme" />

      {/* =====================================================
          CARROSSEL
      ====================================================== */}

      <div className="w-full overflow-hidden">

        <div
          onTransitionEnd={handleTransitionEnd}
          className={`
            flex
            gap-3
            ${
              isTransitioning
                ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                : ""
            }
          `}
          style={{
            transform: `
              translateX(
                calc(
                  -${currentIndex} * (${cardWidth} + 12px)
                )
              )
            `,
          }}
        >

          {carouselNews.map((news, index) => (
            <article
              key={`${news.id}-${index}`}
              style={{
                minWidth: cardWidth,
                width: cardWidth,
              }}
              className="
                group
                shrink-0
                cursor-pointer
              "
            >

              {/* =================================================
                  IMAGEM
              ================================================== */}

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

              {/* =================================================
                  CATEGORIA
              ================================================== */}

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

              {/* =================================================
                  TÍTULO
              ================================================== */}

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

              {/* =================================================
                  TEMPO
              ================================================== */}

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

        </div>
      </div>

      {/* =====================================================
          CONTROLES
      ====================================================== */}

      <div className="mt-4 flex items-center justify-between">

        {/* INDICADORES */}

        <div className="flex items-center gap-1.5">

          {secondaryNews.map((news, index) => (
            <button
              key={news.id}
              type="button"
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(
                  visibleCount + index
                );
              }}
              aria-label={`Ir para notícia ${index + 1}`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-500
                ${
                  normalizedIndex === index
                    ? "w-6 bg-[#2d7911]"
                    : "w-1.5 bg-zinc-400 dark:bg-zinc-700"
                }
              `}
            />
          ))}

        </div>

        {/* SETAS */}

        <div className="flex items-center gap-2">

          {/* ANTERIOR */}

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

          {/* PRÓXIMA */}

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