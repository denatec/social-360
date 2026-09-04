import { LatestNews } from "./LatestNews";
import Image from "next/image";

export function HeroNews() {
  return (
    <section className="border-b border-gray-300 dark:border-zinc-800">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[1fr_1.3fr_0.8fr]">
        
        {/* Texto */}
        <article>
          <span className="text-sm font-bold tracking-widest text-[#ffc517]">
            DESTAQUE
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-[#2d7911] dark: text-[#5dbb3a]">
            Notícia em destaque, tenho de escrever mais alguma coisa para ficar visualmente mais bonito
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Esta é uma descrição da notícia principal com as informações mais
            importantes. A mesma logica do tema.
          </p>

          <button className="mt-6 border px-5 py-3 font-semibold transition hover:bg-[#ffc517] hover:text-white dark:border-white dark:hover:bg-[#ffc517] dark:hover:text-white">
            Ler notícia
          </button>
        </article>

        {/* Imagem */}
        <div className="min-h-[350px] overflow-hidden">
          <Image
            src="/president-donald-trump-9bvxk3h7h5b4uax5.jpg"
            alt="Notícia em destaque"
            width={800}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Últimas notícias */}
        <LatestNews />
      </div>
    </section>
  );
}