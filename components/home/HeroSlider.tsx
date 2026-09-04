"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    category: "MUNDO",
    title: "As notícias mais importantes que estão a marcar o mundo",
    description:
      "Acompanhe os principais acontecimentos nacionais e internacionais.",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    category: "TECNOLOGIA",
    title: "A tecnologia continua a transformar a sociedade",
    description:
      "Novas tendências e inovações que estão a mudar o futuro.",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    category: "ÁFRICA",
    title: "Os acontecimentos que marcam o continente africano",
    description:
      "Informação, análise e os principais acontecimentos do continente.",
    image: "/images/news3.jpg",
  },
];

export function HeroSlider() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <article className="relative h-[500px] overflow-hidden md:h-[600px]">

              {/* Imagem */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

              {/* Conteúdo */}
              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 md:px-10">
                <div className="max-w-3xl text-white">

                  <span className="text-sm font-bold tracking-widest text-blue-400">
                    {slide.category}
                  </span>

                  <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-5 max-w-2xl text-lg text-gray-300">
                    {slide.description}
                  </p>

                  <button className="mt-6 border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black">
                    Ler notícia
                  </button>

                </div>
              </div>

            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}