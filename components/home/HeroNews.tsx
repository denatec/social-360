"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { LatestNews } from "./LatestNews";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    category: "Política",
    title: "O Papel da Mídia na Política Moderna",
    description:
      "Um ótimo design se integra perfeitamente com a experiência do usuário, tornando a interação suave e intuitiva. Não se trata apenas de estética; trata-se de funcionalidade e usabilidade, garantir que os usuários possam alcançar seus objetivos...",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
  {
    category: "Economia",
    title: "Economia apresenta novos desafios para os próximos anos",
    description:
      "Especialistas analisam as mudanças e os desafios que podem marcar os próximos meses.",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
  {
    category: "Mundo",
    title: "Novos acontecimentos movimentam a agenda internacional",
    description:
      "Os acontecimentos mais importantes da atualidade internacional e as suas consequências.",
    date: "22 De Julho De 2024",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
];

const bottomNews = [
  {
    id: 1,
    category: "Mundo",
    title: "🔴 Live: Equilibrando Crescimento Econômico e Proteção Ambiental",
    date: "22 De Julho De 2024",
  },
  {
    id: 2,
    category: "Meio Ambiente",
    title: "O Papel das Políticas Governamentais na Proteção Ambiental",
    date: "22 De Julho De 2024",
  },
  {
    id: 3,
    category: "Meio Ambiente",
    title: "Proteção de Espécies em Perigo e Seus Habitats",
    date: "22 De Julho De 2024",
  },
  {
    id: 4,
    category: "Meio Ambiente",
    title: "Soluções Inovadoras para Reduzir o Lixo Plástico",
    date: "22 De Julho De 2024",
  },
];

export function HeroNews() {
  return (
    <section className="border-b border-theme bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-4 py-3 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_520px]">

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
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>

                  {/* ================= NOTÍCIA PRINCIPAL ================= */}
                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-[0.8fr_1.2fr] lg:gap-6">

                    {/* ================= IMAGEM ================= */}
                    <div className="relative order-1 h-[220px] overflow-hidden sm:h-[380px] lg:order-2 lg:h-auto lg:min-h-[500px]">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={index === 0}
                        className="object-cover"
                      />
                    </div>

                    {/* ================= TEXTO ================= */}
                    <article className="order-2 flex flex-col justify-start px-2 pt-2 lg:order-1 lg:min-h-[500px] lg:justify-center lg:pt-0">

                      {/* Categoria */}
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#c95a0a]" />

                        <span className="text-sm font-medium text-primary">
                          {slide.category}
                        </span>
                      </div>

                      {/* Título */}
                      <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-primary sm:text-4xl xl:text-5xl">
                        {slide.title}
                      </h1>

                      {/* Descrição */}
                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-secondary md:text-base">
                        {slide.description}
                      </p>

                      {/* Data */}
                      <div className="mt-5 flex items-center justify-between text-xs text-secondary">
                        <span>{slide.date}</span>

                        <Bookmark
                          size={16}
                          strokeWidth={1.5}
                          className="text-primary"
                        />
                      </div>
                    </article>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ================= CARDS DE BAIXO ================= */}
            <div className="mt-8 grid grid-cols-1 border-t border-theme pt-5 sm:grid-cols-2 sm:gap-5 sm:border-t-0 lg:grid-cols-4">
              {bottomNews.map((news, index) => (
                <article
                  key={news.id}
                  className={`group flex min-w-0 flex-col py-5 sm:py-0 ${
                    index !== 0
                      ? "border-t border-theme sm:border-t-0"
                      : "pt-0"
                  }`}
                >
                  {/* Título */}
                  <h3 className="line-clamp-3 cursor-pointer text-base font-bold leading-snug text-primary transition-colors duration-300 group-hover:text-[#2d7911]">
                    {news.title}
                  </h3>

                  {/* Categoria e Data */}
                  <div className="mt-3">
                    <span className="text-sm font-medium text-primary">
                      {news.category}
                    </span>

                    <span className="mx-2 text-secondary">·</span>

                    <span className="text-sm text-secondary">
                      {news.date}
                    </span>
                  </div>

                  {/* Bookmark */}
                  <div className="mt-3 flex justify-end">
                    <Bookmark
                      size={16}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                  </div>
                </article>
              ))}
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