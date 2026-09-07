"use client";

import { LatestNews } from "./LatestNews";

import Image from "next/image";

import { Clock, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";

import "swiper/css/effect-fade";

const slides = [
  {
    category: "POLÍTICA",
    title:
      "Novas decisões políticas marcam o cenário nacional e geram debates",
    description:
      "Esta é uma descrição da notícia principal com as informações mais importantes sobre os acontecimentos recentes.",
    time: "Há 2 horas",
    author: "Redação Social 360",
    image: "/president-donald-trump-9bvxk3h7h5b4uax5.jpg",
  },
  {
    category: "ECONOMIA",
    title:
      "Economia apresenta novos desafios e especialistas analisam o futuro",
    description:
      "Os principais acontecimentos económicos continuam a gerar debates entre especialistas e autoridades.",
    time: "Há 3 horas",
    author: "João Manuel",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
  {
    category: "MUNDO",
    title:
      "Novos acontecimentos internacionais movimentam a agenda mundial",
    description:
      "Os acontecimentos mais importantes da atualidade internacional e as suas consequências.",
    time: "Há 5 horas",
    author: "Redação Internacional",
    image: "/imagem3.jpg",
  },
  {
    category: "SOCIEDADE",
    title:
      "Transformações sociais criam novos desafios para as próximas gerações",
    description:
      "Uma análise sobre as mudanças que estão a acontecer na sociedade moderna.",
    time: "Há 6 horas",
    author: "Social 360",
    image: "/imagem4.jpg",
  },
];

export function HeroNews() {
  return (
    <section className="border-b border-theme bg-background">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10 lg:py-10">

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
          className="w-full min-w-0"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 gap-6 lg:min-h-[500px] lg:grid-cols-[1fr_1.25fr] lg:gap-8">

                {/* ================= TEXTO ================= */}
                <article className="order-2 flex flex-col justify-center lg:order-1">

                  {/* Categorias */}
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs font-bold tracking-[0.15em] text-[#ffc517]">
                      ★ DESTAQUE
                    </span>

                    <span className="rounded-sm bg-[#2d7911]/10 px-2 py-1 text-xs font-bold tracking-wide text-[#2d7911] dark:bg-[#5dbb3a]/10 dark:text-[#5dbb3a]">
                      {slide.category}
                    </span>
                  </div>

                  {/* Título */}
                  <h1 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight text-[#0a1d02] dark:text-white sm:text-4xl xl:text-5xl">
                    {slide.title}
                  </h1>

                  {/* Descrição */}
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
                    {slide.description}
                  </p>

                  {/* Informações */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-secondary">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{slide.time}</span>
                    </div>

                    <span className="h-1 w-1 rounded-full bg-secondary" />

                    <span>
                      Por{" "}
                      <strong className="text-primary">
                        {slide.author}
                      </strong>
                    </span>
                  </div>

                  {/* Botão */}
                  <button className="group mt-6 flex w-fit items-center gap-3 rounded-md bg-[#2d7911] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1f5c0c] hover:shadow-lg dark:bg-[#5dbb3a] dark:text-black dark:hover:bg-[#4ca82e]">
                    Ler notícia

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </article>

                {/* ================= IMAGEM ================= */}
                <div className="group relative order-1 h-[280px] overflow-hidden rounded-xl bg-surface sm:h-[350px] lg:order-2 lg:h-auto lg:min-h-[420px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= ÚLTIMAS NOTÍCIAS ================= */}
        <aside className="min-w-0">
          <LatestNews />
        </aside>

      </div>
    </section>
  );
}