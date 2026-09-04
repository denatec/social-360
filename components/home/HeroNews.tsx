// components/home/HeroNews.tsx

import { LatestNews } from "./LatestNews";

export function HeroNews() {
  return (
    <section className="border-b border-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[1fr_1.3fr_0.8fr]">

        {/* Texto */}
        <article>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Noticia em destaque
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Esta é uma descrição da notícia principal com as
            informações mais importantes.
          </p>
        </article>

        {/* Imagem */}
        <div className="min-h-[350px] overflow-hidden">
          <img
            src="/news/public/"
            alt="Notícia principal"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Últimas notícias */}
        <LatestNews />

      </div>
    </section>
  );
}