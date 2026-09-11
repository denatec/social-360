"use client";

import Image from "next/image";

const featuredNews = {
  id: 1,
  category: "Mundo",
  title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO",
  image: "/CAPA.png",
};

const secondaryNews = [
  {
    id: 2,
    category: "Meio ambiente",
    title: "UM APERTO NO CORAÇÃO QUE MUDOU O DESTINO",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
  {
    id: 3,
    category: "Política",
    title: "NOVAS DECISÕES PROMETEM MUDAR O CENÁRIO NACIONAL",
    image: "/WhatsApp Image 2026-09-06 at 10.46.57.jpeg",
  },
];

export function LatestNews() {
  return (
    <aside className="w-full md:mx-0 md:max-w-[300px]">
      {/* ============================================
          TÍTULO
      ============================================= */}
      <div className="mb-5 flex items-center gap-3 px-4 md:px-0">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
        </span>

        <h3 className="text-xl font-bold tracking-tight text-primary md:text-2xl">
          Edição Impressa
        </h3>
      </div>

      {/* ============================================
          MANCHETE PRINCIPAL
      ============================================= */}

      {/* MOBILE */}
      <article className="group w-full cursor-pointer md:hidden">
        {/* BLOCO COLORIDO */}
        <div className="w-full bg-[#2d7911] px-4 py-5 dark:bg-[#1f5c0d]">
          {/* Categoria */}
          <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
            {featuredNews.category}
          </span>

          {/* Manchete */}
          <h2 className="mb-5 text-2xl font-extrabold uppercase leading-tight text-white">
            {featuredNews.title}
          </h2>

          {/* IMAGEM COMPLETA */}
          <div className="relative w-full overflow-hidden rounded-md bg-black/10">
            <Image
              src={featuredNews.image}
              alt= ""
              width={245}
              height={340}
              priority
              sizes="100vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </article>

      {/* DESKTOP */}
      <article className="group hidden cursor-pointer md:block">
        {/* CAPA ALINHADA À ESQUERDA */}
        <div className="relative mx-0 mt-3 h-[340px] w-[245px] overflow-hidden rounded-md bg-gray-200 dark:bg-zinc-800">
          <Image
            src={featuredNews.image}
            alt= ""
            fill
            priority
            sizes="245px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* TÍTULO ALINHADO À ESQUERDA */}
        <h3 className="mt-1 max-w-[300px] text-left text-sm font-bold leading-snug text-primary transition-colors duration-200 group-hover:text-[#2d7911] dark:group-hover:text-[#5dbb3a]">
          {featuredNews.title}
        </h3>
      </article>

      {/* ============================================
          SEPARADOR
      ============================================= */}
      <div className="my-6 border-t border-theme md:mx-0" />

      {/* ============================================
          LISTA DE NOTÍCIAS
      ============================================= */}
      <section className="w-full">
        {/* TÍTULO DA LISTA */}
        <div className="mb-4 px-4 md:px-0">
          <h3 className="text-lg font-bold text-primary">
            Últimas notícias
          </h3>
        </div>

        {/* LISTA */}
        <div
          className="
            w-full
            md:h-[300px]
            md:overflow-y-auto
            md:pr-2
          "
        >
          {secondaryNews.map((news) => (
            <article
              key={news.id}
              className="
                group
                flex
                min-h-[100px]
                w-full
                cursor-pointer
                items-center
                gap-3
                border-b
                border-theme
                px-4
                py-4
                first:pt-0
                md:px-0
              "
            >
              {/* CONTEÚDO */}
              <div className="min-w-0 flex-1">
                <span className="block text-[9px] font-bold uppercase tracking-widest text-[#2d7911] dark:text-[#5dbb3a]">
                  {news.category}
                </span>

                <h3 className="mt-1 line-clamp-3 text-[13px] font-bold leading-snug text-primary transition-colors duration-200 group-hover:text-[#2d7911] dark:group-hover:text-[#5dbb3a]">
                  {news.title}
                </h3>
              </div>

              {/* IMAGEM */}
              <div className="relative h-[78px] w-[105px] shrink-0 overflow-hidden rounded-md bg-gray-200 dark:bg-zinc-800">
                <Image
                  src={news.image}
                  alt= ""
                  fill
                  sizes="105px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}