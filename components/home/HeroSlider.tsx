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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6">
      <div className="overflow-hidden rounded-xl border border-theme bg-surface shadow-sm">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <article className="grid min-h-[500px] grid-cols-1 md:min-h-[420px] md:grid-cols-2">
                
                {/* IMAGEM */}
                <div className="relative min-h-[260px] overflow-hidden md:min-h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* CONTEÚDO */}
                <div className="flex flex-col justify-center bg-surface p-6 sm:p-8 md:p-10 lg:p-14">
                  
                  {/* Categoria */}
                  <span className="w-fit bg-[#2d7911] px-3 py-1.5 text-xs font-bold tracking-wide text-white">
                    {slide.category}
                  </span>

                  {/* Título */}
                  <h1 className="mt-5 text-2xl font-bold leading-tight text-primary sm:text-3xl lg:text-4xl xl:text-5xl">
                    {slide.title}
                  </h1>

                  {/* Linha decorativa */}
                  <div className="mt-6 h-[3px] w-14 bg-[#ffc517]" />

                  {/* Descrição */}
                  <p className="mt-6 max-w-xl text-sm leading-relaxed text-secondary sm:text-base lg:text-lg">
                    {slide.description}
                  </p>

                  {/* Botão */}
                  <button className="mt-8 w-fit rounded-md bg-[#2d7911] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1f5c0c] hover:shadow-lg">
                    Ler notícia
                  </button>

                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}