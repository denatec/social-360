"use client";

import Image from "next/image";
import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

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

export function HeroNews() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full border-b border-theme bg-background">
      <div className="w-full px-4 py-3 md:px-6 lg:px-8">

        {/* ================= HERO + ÚLTIMAS NOTÍCIAS ================= */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-6
            xl:grid-cols-[minmax(0,1fr)_450px]
          "
        >

          {/* ================= LADO ESQUERDO ================= */}
          <div className="min-w-0">

            {/* ================= SLIDER ================= */}
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

                  {/* ================= NOTÍCIA PRINCIPAL ================= */}
                  <div
                    className="
                      grid
                      w-full
                      grid-cols-1
                      gap-4
                      lg:grid-cols-[0.9fr_1.1fr]
                      lg:gap-6
                    "
                  >

                    {/* ================= TEXTO ================= */}
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

                      {/* ================= CATEGORIA ================= */}
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#c95a0a]" />

                        <span className="text-sm font-medium text-primary">
                          {slide.category}
                        </span>
                      </div>

                      {/* ================= TÍTULO ================= */}
                      <h1
                        className="
                          mt-4
                          text-2xl
                          font-bold
                          leading-[1.15]
                          tracking-tight
                          text-primary
                          sm:text-3xl
                          lg:text-3xl
                          xl:text-4xl
                        "
                      >
                        {slide.title}
                      </h1>

                      {/* ================= DESCRIÇÃO ================= */}
                      <p
                        className="
                          mt-4
                          max-w-2xl
                          text-sm
                          leading-relaxed
                          text-secondary
                          md:text-base
                        "
                      >
                        {slide.description}
                      </p>

                    </article>

                    {/* ================= IMAGEM ================= */}
                    <div
                      className="
                        relative
                        order-1
                        h-[400px]
                        w-full
                        overflow-hidden
                        sm:h-[450px]
                        lg:order-2
                        lg:h-[500px]
                      "
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        className="object-cover"
                      />
                    </div>

                  </div>

                </SwiperSlide>
              ))}
            </Swiper>

            {/* ================= NAVEGAÇÃO ================= */}
            <div
              className="
                mt-4
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

              {/* BOTÕES */}
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
                  <ChevronLeft size={20} strokeWidth={1.5} />
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
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>

              </div>
            </div>
          </div>

          {/* ================= LADO DIREITO ================= */}
          <aside className="min-w-0">
            <LatestNews />
          </aside>

        </div>
      </div>
    </section>
  );
}
