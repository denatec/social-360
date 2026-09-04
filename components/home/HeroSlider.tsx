"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    category: "CIÊNCIA",
    title: "CIÊNCIA CRIA NOVA ARMA CONTRA O VIH, MAS O PREÇO...",
    description:
      "Por: Waldano Natxari Especialista em Governança Corporativa, Saúde e Gestão Pública.",
    image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
  },
  {
    category: "POLÍTICA",
    title: "NOVAS DECISÕES POLÍTICAS MARCAM O CENÁRIO NACIONAL",
    description:
      "Os acontecimentos mais importantes da atualidade nacional.",
    image: "/imagem2.jpg",
  },
  {
    category: "ECONOMIA",
    title: "ECONOMIA ANGOLANA APRESENTA NOVOS DESAFIOS",
    description:
      "Especialistas analisam os principais desafios económicos.",
    image: "/imagem3.jpg",
  },
];

export function HeroSlider() {
  return (
    <div className="h-[500px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <article className="relative h-full overflow-hidden">
              {/* Imagem */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* Conteúdo */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-10">
                <span className="inline-block bg-green-700 px-3 py-2 text-sm font-bold text-white">
                  {slide.category}
                </span>

                <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text- md:text-5xl">
                  {slide.title}
                </h1>

                <p className="mt-4 text-base text-gray-200 md:text-lg">
                  {slide.description}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}