import { LatestNews } from "./LatestNews";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";

export function HeroNews() {
  return (
    <section className="border-b border-theme bg-background">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-6 px-6 py-10 lg:grid-cols-[0.9fr_1.4fr_0.8fr] lg:gap-8 xl:px-10">
        
        {/* Texto */}
        <article className="flex flex-col justify-center">
          
          {/* Categorias */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs font-bold tracking-[0.15em] text-[#ffc517]">
              ★ DESTAQUE
            </span>

            <span className="rounded-sm bg-[#2d7911]/10 px-2 py-1 text-xs font-bold tracking-wide text-[#2d7911] dark:bg-[#5dbb3a]/10 dark:text-[#5dbb3a]">
              POLÍTICA
            </span>
          </div>

          {/* Título */}
          <h1 className="mt-5 text-4xl font-bold leading-[1] tracking-tight text-[#0a1d02] dark:text-white md:text-5xl">
            Notícia em destaque, tenho de escrever mais alguma coisa para ficar visualmente mais bonito
          </h1>

          {/* Descrição */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
            Esta é uma descrição da notícia principal com as informações mais
            importantes. A mesma lógica do tema.
          </p>

          {/* Informações */}
          <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-secondary">
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>Há 2 horas</span>
            </div>

            <span className="h-1 w-1 rounded-full bg-secondary" />

            <span>
              Por <strong className="text-primary">Redação Social 360</strong>
            </span>
          </div>

          {/* Botão */}
          <button className="group mt-7 flex w-fit items-center gap-3 rounded-md bg-[#2d7911] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1f5c0c] hover:shadow-lg dark:bg-[#5dbb3a] dark:text-black dark:hover:bg-[#4ca82e]">
            Ler notícia

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </article>

        {/* Imagem */}
        <div className="group relative min-h-[380px] overflow-hidden rounded-xl bg-surface">
          <Image
            src="/president-donald-trump-9bvxk3h7h5b4uax5.jpg"
            alt="Notícia em destaque"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradiente subtil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Indicador de slide */}
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2d7911]" />
            <span className="h-2 w-2 rounded-full bg-white/80" />
            <span className="h-2 w-2 rounded-full bg-white/80" />
            <span className="h-2 w-2 rounded-full bg-white/80" />
          </div>
        </div>

        {/* Últimas notícias */}
        <LatestNews />
      </div>
    </section>
  );
}