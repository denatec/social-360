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
    <aside className="w-full lg:mx-0 lg:max-w-[300px]">

      {/* =====================================================
          MOBILE + TABLET — EDIÇÃO IMPRESSA
          Até 1023px
      ====================================================== */}
      <section className="w-full bg-white py-6 lg:hidden">

        {/* TÍTULO */}
        <div className="flex flex-col items-center">
          <h2
            className="
              text-center
              text-[28px]
              font-extrabold
              uppercase
              leading-none
              tracking-tight
              text-[#e52b2b]
              sm:text-[30px]
            "
          >
            Edição Impressa
          </h2>

          {/* BOTÃO */}
          <button
            type="button"
            className="
              mt-3
              rounded-full
              bg-[#e52b2b]
              px-5
              py-2
              text-[16px]
              font-medium
              text-white
              shadow-sm
              transition
              hover:bg-[#c92121]
            "
          >
            Consultar Minhas Assinaturas
          </button>
        </div>

        {/* =================================================
            CAPA CENTRALIZADA
        ================================================== */}
        <article className="mt-3 flex w-full justify-center">
          <div
            className="
              relative
              h-[425px]
              w-[min(305px,85vw)]
              overflow-hidden
              bg-white
              sm:h-[500px]
              sm:w-[360px]
            "
          >
            <Image
              src={featuredNews.image}
              alt="Edição Impressa"
              fill
              priority
              sizes="
                (max-width: 639px) 85vw,
                360px
              "
              className="object-contain"
            />
          </div>
        </article>

        {/* PUBLICIDADE */}
        <div className="mt-5 text-center">
          <span className="text-sm text-gray-400">
            -Publicidade-
          </span>
        </div>
      </section>

      {/* =====================================================
          DESKTOP — EDIÇÃO IMPRESSA
          A partir de 1024px
      ====================================================== */}
      <div className="hidden lg:block">

        {/* TÍTULO DESKTOP */}
        <div className="mb-5 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-orange-500
                opacity-75
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2.5
                w-2.5
                rounded-full
                bg-orange-500
              "
            />
          </span>

          <h3
            className="
              text-xl
              font-bold
              tracking-tight
              text-primary
              lg:text-2xl
            "
          >
            Edição Impressa
          </h3>
        </div>

        {/* CAPA */}
        <article className="group cursor-pointer">

          {/* CAPA CENTRALIZADA */}
          <div
            className="
              relative
              mx-auto
              mt-3
              h-[340px]
              w-[245px]
              overflow-hidden
              rounded-md
              bg-gray-200
              dark:bg-zinc-800
            "
          >
            <Image
              src={featuredNews.image}
              alt="Edição Impressa"
              fill
              priority
              sizes="245px"
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          {/* TÍTULO DA MANCHETE */}
          <h3
            className="
              mx-auto
              mt-2
              max-w-[300px]
              text-center
              text-sm
              font-bold
              leading-snug
              text-primary
              transition-colors
              duration-200
              group-hover:text-[#2d7911]
              dark:group-hover:text-[#5dbb3a]
            "
          >
            {featuredNews.title}
          </h3>
        </article>
      </div>

      {/* =====================================================
          SEPARADOR
      ====================================================== */}
      <div className="my-6 border-t border-theme lg:mx-0" />

      {/* =====================================================
          LISTA DE NOTÍCIAS
      ====================================================== */}
      <section className="w-full">

        {/* TÍTULO DA LISTA */}
        <div className="mb-4 px-4 lg:px-0">
          <h3 className="text-lg font-bold text-primary">
            Últimas notícias
          </h3>
        </div>

        {/* LISTA */}
        <div
          className="
            w-full
            lg:h-[300px]
            lg:overflow-y-auto
            lg:pr-2
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
                lg:px-0
              "
            >
              {/* CONTEÚDO */}
              <div className="min-w-0 flex-1">

                {/* CATEGORIA */}
                <span
                  className="
                    block
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-widest
                    text-[#2d7911]
                    dark:text-[#5dbb3a]
                  "
                >
                  {news.category}
                </span>

                {/* TÍTULO */}
                <h3
                  className="
                    mt-1
                    line-clamp-3
                    text-[13px]
                    font-bold
                    leading-snug
                    text-primary
                    transition-colors
                    duration-200
                    group-hover:text-[#2d7911]
                    dark:group-hover:text-[#5dbb3a]
                  "
                >
                  {news.title}
                </h3>
              </div>

              {/* IMAGEM */}
              <div
                className="
                  relative
                  h-[78px]
                  w-[105px]
                  shrink-0
                  overflow-hidden
                  rounded-md
                  bg-gray-200
                  dark:bg-zinc-800
                "
              >
                <Image
                  src={news.image}
                  alt=""
                  fill
                  sizes="105px"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}