"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { LatestNews } from "./LatestNews";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    category: "Política",
    title: "O Papel da Mídia na Política Moderna",
    description:
      "Um ótimo design se integra perfeitamente com a experiência do usuário, tornando a interação suave e intuitiva. Não se trata apenas de estética; trata-se de funcionalidade e usabilidade, garantir que os usuários possam alcançar seus objetivos...",
    image: "/colabora1.jpeg",
  },
  {
    category: "Economia",
    title: "Economia apresenta novos desafios para os próximos anos",
    description:
      "Especialistas analisam as mudanças e os desafios que podem marcar os próximos meses.",
    image: "/colabora2.jpeg",
  },
  {
    category: "Mundo",
    title: "Novos acontecimentos movimentam a agenda internacional",
    description:
      "Os acontecimentos mais importantes da atualidade internacional e as suas consequências.",
    image: "/colabora4.jpeg",
  },
];

const secondaryNews = [
  {
    title: "Equilibrando Crescimento Econômico e Proteção Ambiental",
    category: "Mundo",
    live: true,
  },
  {
    title: "O Papel das Políticas Governamentais na Proteção Ambiental",
    category: "Meio Ambiente",
    live: false,
  },
  {
    title: "Proteção de Espécies em Perigo e Seus Habitats",
    category: "Meio Ambiente",
    live: false,
  },
  {
    title: "Soluções Inovadoras para Reduzir o Lixo Plástico",
    category: "Meio Ambiente",
    live: false,
  },
];

export function HeroNews() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full border-b border-theme bg-background">
      {/* CONTAINER PRINCIPAL */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1550px]
          translate-x-[50px]
          px-4
          py-4
          sm:px-6
          lg:px-8
        "
      >
        {/* HERO + LATEST NEWS */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-6
            lg:grid-cols-[minmax(0,1fr)_400px]
          "
        >
          {/* COLUNA PRINCIPAL */}
          <div className="min-w-0">
            {/* HERO SLIDER */}
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1000}
              className="w-full"
              onSwiper={setSwiper}
              onSlideChange={(swiperInstance) => {
                setActiveIndex(swiperInstance.realIndex);
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="
                      grid
                      w-full
                      grid-cols-1
                      gap-5
                      lg:grid-cols-[0.75fr_1.25fr]
                      lg:gap-7
                    "
                  >
                    {/* TEXTO */}
                    <article
                      className="
                        order-2
                        flex
                        flex-col
                        justify-start
                        px-2
                        pt-2
                        lg:order-1
                        lg:h-[500px]
                        lg:pt-0
                      "
                    >
                      {/* CATEGORIA */}
                      <div className="flex items-center gap-2">
                        <span
                          className="
                            h-3
                            w-3
                            shrink-0
                            rounded-full
                            bg-[#c95a0a]
                          "
                        />

                        <span className="text-sm font-medium text-primary">
                          {slide.category}
                        </span>
                      </div>

                      {/* TITULO */}
                      <h1
                        className="
                          mt-5
                          text-2xl
                          font-bold
                          leading-[1.15]
                          tracking-tight
                          text-primary
                          sm:text-3xl
                          lg:text-4xl
                          xl:text-5xl
                        "
                      >
                        {slide.title}
                      </h1>

                      {/* DESCRIÇÃO */}
                      <p
                        className="
                          mt-5
                          max-w-2xl
                          text-sm
                          leading-relaxed
                          text-secondary
                          md:text-base
                          lg:text-lg
                        "
                      >
                        {slide.description}
                      </p>

                      {/* BOOKMARK */}
                      <div
                        className="
                          mt-auto
                          flex
                          justify-end
                          border-t
                          border-theme
                          pb-2
                          pt-5
                        "
                      >
                        <button
                          type="button"
                          aria-label="Guardar notícia"
                          className="
                            text-primary
                            transition-colors
                            duration-200
                            hover:text-[#c95a0a]
                          "
                        >
                          <Bookmark
                            size={18}
                            strokeWidth={1.5}
                          />
                        </button>
                      </div>
                    </article>

                    {/* IMAGEM PRINCIPAL */}
                    <div
                      className="
                        relative
                        order-1
                        h-[360px]
                        w-full
                        overflow-hidden
                        sm:h-[420px]
                        lg:order-2
                        lg:h-[500px]
                      "
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-[1.02]
                        "
                        sizes="
                          (max-width: 1000px) 100vw,
                          calc(100vw - 430px)
                        "
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* CONTROLES */}
            <div
              className="
                mt-5
                flex
                items-center
                justify-between
                border-t
                border-theme
                pt-3
              "
            >
              {/* INDICADOR */}
              <span className="text-sm text-secondary">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>

              {/* SETAS */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => swiper?.slidePrev()}
                  aria-label="Notícia anterior"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-theme
                    text-primary
                    transition
                    hover:bg-primary
                    hover:text-background
                  "
                >
                  <ChevronLeft
                    size={20}
                    strokeWidth={1.5}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => swiper?.slideNext()}
                  aria-label="Próxima notícia"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    border
                    border-theme
                    text-primary
                    transition
                    hover:bg-primary
                    hover:text-background
                  "
                >
                  <ChevronRight
                    size={20}
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            </div>

            {/* NOTÍCIAS SECUNDÁRIAS */}
            <div
              className="
                mt-8
                grid
                w-full
                grid-cols-1
                gap-6
                border-t
                border-theme
                pt-7
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {secondaryNews.map((news, index) => (
                <article
                  key={index}
                  className="
                    group
                    flex
                    min-w-0
                    flex-col
                    border-b
                    border-theme
                    pb-5
                    lg:border-b-0
                    lg:pb-2
                  "
                >
                  {/* TITULO */}
                  <h2
                    className="
                      text-base
                      font-bold
                      leading-[1.35]
                      text-primary
                      transition-colors
                      duration-200
                      group-hover:text-[#c95a0a]
                    "
                  >
                    <span className="mr-1 inline-flex align-middle">
                      <TrendingUp
                        size={15}
                        strokeWidth={2}
                      />
                    </span>

                    {news.live && (
                      <span className="mr-1 text-red-600">
                        Live:
                      </span>
                    )}

                    {news.title}
                  </h2>

                  {/* CATEGORIA */}
                  <div className="mt-3">
                    <span className="text-sm font-medium text-primary">
                      {news.category}
                    </span>
                  </div>

                  {/* BOOKMARK */}
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      aria-label={`Guardar notícia: ${news.title}`}
                      className="
                        text-primary
                        transition-colors
                        duration-200
                        hover:text-[#c95a0a]
                      "
                    >
                      <Bookmark
                        size={16}
                        strokeWidth={1.5}
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* LATEST NEWS — 400PX */}
          <aside
            className="
              min-w-0
              lg:w-[400px]
              lg:min-w-[400px]
              lg:max-w-[400px]
            "
          >
            <LatestNews />
          </aside>
        </div>
      </div>
    </section>
  );
}