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
    <section className="mx-auto w-full max-w-[1500px] px-6 py-8">
      <div className="h-[250px] overflow-hidden rounded-lg sm:h-[300px] md:h-[380px]">
        
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Conteúdo */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8 md:p-10">
                  
                  <span className="inline-block bg-[#2d7911] px-3 py-1.5 text-xs font-bold text-white md:text-sm">
                    {slide.category}
                  </span>

                  <h1 className="mt-3 max-w-4xl text-2xl font-bold leading-tight text-white sm:text-3xl md:mt-5 md:text-5xl">
                    {slide.title}
                  </h1>

                  <p className="mt-3 max-w-3xl text-sm text-gray-200 md:mt-4 md:text-lg">
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