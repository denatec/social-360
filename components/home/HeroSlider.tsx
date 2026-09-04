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
    <section className="mx-auto my-8 w-full max-w-7xl px-6">
      <div className="h-[350px] w-full min-w-0 max-w-full overflow-hidden sm:h-[400px] md:h-[450px] lg:h-[500px]">
        
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full w-full min-w-0 max-w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="h-full w-full overflow-hidden"
            >
              <article className="relative h-full w-full overflow-hidden">

                {/* Imagem */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Conteúdo */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 md:p-10">
                  <span className="inline-block bg-green-700 px-3 py-2 text-xs font-bold text-white sm:text-sm">
                    {slide.category}
                  </span>

                  <h1 className="mt-4 max-w-3xl text-2xl font-bold leading-tight text-[#ffc517] sm:text-3xl md:text-4xl lg:text-5xl">
                    {slide.title}
                  </h1>

                  <p className="mt-3 max-w-2xl text-sm text-gray-200 sm:text-base md:text-lg">
                    {slide.description}
                  </p>
                </div>

              </article>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}