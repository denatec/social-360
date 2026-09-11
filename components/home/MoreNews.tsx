"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";

const news = [
  {
    id: 1,
    category: "Mundo",
    title: "Como as Mudanças Climáticas Estão Afetando os Padrões Climáticos",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    category: "Finanças",
    title: "Entendendo as Pontuações de Crédito e Como Melhorá-las",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    category: "Finanças",
    title: "Planejamento Financeiro para Proprietários de Pequenas Empresas",
    image: "/images/news3.jpg",
  },
  {
    id: 4,
    category: "Finanças",
    title: "Como Planejar uma Aposentadoria Segura",
    image: "/images/news4.jpg",
  },
  {
    id: 5,
    category: "Finanças",
    title: "Analisando as Últimas Tendências do Mercado de Ações",
    image: "/images/news5.jpg",
  },
  {
    id: 6,
    category: "Finanças",
    title: "O Impacto das Taxas de Juros na Economia",
    image: "/images/news6.jpg",
  },
  {
    id: 7,
    category: "Finanças",
    title: "Os Benefícios de Diversificar Seu Portfólio",
    image: "/images/news7.jpg",
  },
  {
    id: 8,
    category: "Tecnologia",
    title: "Avanços na Computação Quântica",
    image: "/images/news8.jpg",
  },
  {
    id: 9,
    category: "Política",
    title: "Novas decisões políticas movimentam o cenário nacional",
    image: "",
  },
  {
    id: 10,
    category: "Economia",
    title: "Especialistas analisam novos desafios económicos",
    image: "",
  },
  {
    id: 11,
    category: "Sociedade",
    title: "Novas iniciativas sociais ganham destaque nas comunidades",
    image: "",
  },
  {
    id: 12,
    category: "Tecnologia",
    title: "Inovação continua a transformar diferentes setores",
    image: "",
  },
];

export function MoreNews() {
  return (
    <section
      className="
        mx-auto
        w-full
        max-w-[1450px]
        px-4
        py-10
        sm:px-6
        lg:px-10
      "
    >
      {/* =========================================
          TÍTULO
      ========================================== */}
      <div className="mb-7 flex items-center gap-3">
        <div className="h-8 w-1 bg-[#2d7911] dark:bg-[#5dbb3a]" />

        <h2 className="text-2xl font-bold text-primary">
          Mais Notícias
        </h2>
      </div>

      {/* =========================================
          NOTÍCIAS
          
          MOBILE:
          conteúdo | imagem

          DESKTOP:
          imagem
          conteúdo
      ========================================== */}
      <div
        className="
          grid
          grid-cols-1
          gap-0

          sm:grid-cols-2
          sm:gap-6

          lg:grid-cols-4
          lg:gap-8
        "
      >
        {news.map((item) => (
          <article
            key={item.id}
            className="
              group
              cursor-pointer

              border-b
              border-theme
              py-5

              sm:border-b-0
              sm:py-0
            "
          >
            <div
              className="
                flex
                gap-4

                lg:flex-col
                lg:gap-0
              "
            >
              {/* =====================================
                  CONTEÚDO
              ====================================== */}
              <div
                className="
                  order-1
                  flex
                  h-[90px]
                  min-w-0
                  flex-1
                  flex-col
                  justify-between

                  lg:order-2
                  lg:h-auto
                  lg:block
                "
              >
                {/* CATEGORIA */}
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#607d8b]
                    dark:text-[#7fa0ad]

                    lg:mt-3
                    lg:text-sm
                    lg:font-normal
                    lg:tracking-normal
                  "
                >
                  {item.category}
                </p>

                {/* TÍTULO */}
                <h3
                  className="
                    mt-1
                    line-clamp-3
                    text-[15px]
                    font-bold
                    leading-[1.2]
                    text-primary
                    transition-colors
                    duration-300
                    group-hover:text-[#2d7911]
                    dark:group-hover:text-[#5dbb3a]

                    lg:mt-2
                    lg:line-clamp-3
                    lg:text-xl
                    lg:leading-snug
                  "
                >
                  {item.title}
                </h3>

                {/* DATA + BOOKMARK */}
                <div
                  className="
                    mt-2
                    flex
                    items-center
                    justify-between

                    lg:mt-4
                  "
                >
                  <Bookmark
                    size={16}
                    strokeWidth={1.5}
                    className="
                      text-primary
                      transition-colors
                      duration-300
                      group-hover:text-[#2d7911]
                      dark:group-hover:text-[#5dbb3a]
                    "
                  />
                </div>
              </div>

              {/* =====================================
                  IMAGEM
              ====================================== */}
              <div
                className="
                  relative
                  order-2
                  h-[90px]
                  w-[130px]
                  shrink-0
                  overflow-hidden
                  rounded-md
                  bg-gray-300
                  dark:bg-zinc-800

                  lg:order-1
                  lg:h-[190px]
                  lg:w-full
                  lg:rounded-none
                "
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt= ""
                    fill
                    sizes="
                      (max-width: 639px) 130px,
                      (max-width: 1023px) 45vw,
                      25vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gray-300
                      dark:bg-zinc-800
                    "
                  />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* =========================================
          MOSTRAR MAIS
      ========================================== */}
      <div className="mt-8 flex justify-center">
        <button
          className="
            group
            flex
            items-center
            gap-2
            text-sm
            font-bold
            text-[#2d7911]
            transition-colors
            hover:text-[#1f5c0c]
            dark:text-[#5dbb3a]
          "
        >
          Mostrar Mais

          <span
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>
      </div>
    </section>
  );
}