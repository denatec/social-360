"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const featuredNews = [
  {
    id: 1,
    category: "Próxima Série",
    title:
      "Conheça a startup que traz a sala de aula para um mundo virtual",
    partner: "Em parceria com a Azpromo",
    image: "/images/featured-1.jpg",
  },
  {
    id: 2,
    category: "Foco",
    title:
      "A COP17 na Mongólia se encerra com 1,3 bilhão de dólares em Compromisso de Investimento Verde",
    partner: "Em parceria com a UNCCD COP17",
    image: "/images/featured-2.jpg",
  },
  {
    id: 3,
    category: "Nômades Modernos",
    title:
      "Kymyz: milhares de anos de história em uma xícara de leite de égua",
    partner: "Em parceria com a MDQ",
    image: "/images/featured-3.jpg",
  },
  {
    id: 4,
    category: "Tecnologia",
    title:
      "Novas tecnologias estão a transformar a forma como vivemos e trabalhamos",
    partner: "Em parceria com a Social 360",
    image: "/images/featured-4.jpg",
  },
  {
    id: 5,
    category: "Sociedade",
    title:
      "Conheça os novos projetos que estão a mudar diferentes comunidades",
    partner: "Em parceria com a Comunidade",
    image: "/images/featured-5.jpg",
  },
  {
    id: 6,
    category: "Ambiente",
    title:
      "Sustentabilidade e inovação ganham força nos novos projetos globais",
    partner: "Em parceria com a Ambiental",
    image: "/images/featured-6.jpg",
  },
];

export function FeaturedNews() {
  return (
    <section className="relative overflow-hidden border-y border-theme bg-background py-8 sm:py-10 md:py-14">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-5 md:px-6 lg:px-8">

        {/* CABEÇALHO */}
        <div className="mb-6 flex items-end justify-between sm:mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
              Featured
            </h2>

            <div className="mt-2 h-[3px] w-10 bg-[#ffc517] sm:mt-3 sm:w-12" />
          </div>

          <span className="hidden text-sm text-secondary sm:block">
            Histórias em destaque
          </span>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* BOTÃO ANTERIOR - DESKTOP */}
          <button
            className="
              featured-prev
              absolute
              left-0
              top-[32%]
              z-30
              hidden
              h-11
              w-11
              -translate-x-1/2
              items-center
              justify-center
              rounded-full
              border
              border-theme
              bg-surface
              text-xl
              font-bold
              text-primary
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
              hover:border-[#2d7911]
              hover:bg-[#2d7911]
              hover:text-white
              lg:flex
            "
            aria-label="Anterior"
          >
            &lt;
          </button>

          {/* BOTÃO PRÓXIMO - DESKTOP */}
          <button
            className="
              featured-next
              absolute
              right-0
              top-[32%]
              z-30
              hidden
              h-11
              w-11
              translate-x-1/2
              items-center
              justify-center
              rounded-full
              border
              border-theme
              bg-surface
              text-xl
              font-bold
              text-primary
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
              hover:border-[#2d7911]
              hover:bg-[#2d7911]
              hover:text-white
              lg:flex
            "
            aria-label="Próximo"
          >
            &gt;
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".featured-prev",
              nextEl: ".featured-next",
            }}
            loop={true}
            speed={600}
            spaceBetween={12}
            slidesPerView={1.15}
            slidesPerGroup={1}
            breakpoints={{
              // MOBILE
              0: {
                slidesPerView: 1.15,
                spaceBetween: 12,
              },

              // TABLET PEQUENO
              480: {
                slidesPerView: 1.5,
                spaceBetween: 14,
              },

              // TABLET
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },

              // TABLET GRANDE
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              // DESKTOP
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              // DESKTOP GRANDE
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            className="featured-swiper !overflow-visible"
          >
            {featuredNews.map((news) => (
              <SwiperSlide
                key={news.id}
                className="h-auto"
              >
                <article
                  className="
                    group
                    flex
                    h-full
                    cursor-pointer
                    flex-col
                    overflow-hidden
                    rounded-lg
                    border
                    border-theme
                    bg-surface
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  {/* IMAGEM */}
                  <div
                    className="
                      relative
                      h-[170px]
                      w-full
                      overflow-hidden
                      bg-gray-300
                      dark:bg-zinc-800
                      sm:h-[180px]
                      md:h-auto
                      md:aspect-[16/10]
                    "
                  >
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* GRADIENTE */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* CATEGORIA */}
                    <span
                      className="
                        absolute
                        left-2.5
                        top-2.5
                        bg-[#2d7911]
                        px-2
                        py-1
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-white
                        sm:left-3
                        sm:top-3
                        sm:px-2.5
                        sm:text-[10px]
                      "
                    >
                      {news.category}
                    </span>
                  </div>

                  {/* CONTEÚDO */}
                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      p-3
                      sm:p-4
                    "
                  >
                    <h3
                      className="
                        line-clamp-3
                        text-sm
                        font-bold
                        leading-snug
                        text-primary
                        transition-colors
                        duration-300
                        group-hover:text-[#2d7911]
                        sm:text-base
                      "
                    >
                      {news.title}
                    </h3>

                    {/* LINHA */}
                    <div className="my-2.5 h-px w-full bg-theme sm:my-3" />

                    {/* PARCEIRO */}
                    <p
                      className="
                        mt-auto
                        text-[10px]
                        leading-relaxed
                        text-secondary
                        sm:text-xs
                      "
                    >
                      {news.partner}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}