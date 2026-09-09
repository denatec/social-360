import Image from "next/image";
import { Bookmark } from "lucide-react";

const news = [
  {
    id: 1,
    category: "Mundo",
    title: "Como as Mudanças Climáticas Estão Afetando os Padrões Climáticos",
    date: "22 De Julho De 2024",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    category: "Finanças",
    title: "Entendendo as Pontuações de Crédito e Como Melhorá-las",
    date: "22 De Julho De 2024",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    category: "Finanças",
    title: "Planejamento Financeiro para Proprietários de Pequenas Empresas",
    date: "22 De Julho De 2024",
    image: "/images/news3.jpg",
  },
  {
    id: 4,
    category: "Finanças",
    title: "Como Planejar uma Aposentadoria Segura",
    date: "22 De Julho De 2024",
    image: "/images/news4.jpg",
  },
  {
    id: 5,
    category: "Finanças",
    title: "Analisando as Últimas Tendências do Mercado de Ações",
    date: "22 De Julho De 2024",
    image: "/images/news5.jpg",
  },
  {
    id: 6,
    category: "Finanças",
    title: "O Impacto das Taxas de Juros na Economia",
    date: "22 De Julho De 2024",
    image: "/images/news6.jpg",
  },
  {
    id: 7,
    category: "Finanças",
    title: "Os Benefícios de Diversificar Seu Portfólio",
    date: "22 De Julho De 2024",
    image: "/images/news7.jpg",
  },
  {
    id: 8,
    category: "Tecnologia",
    title: "Avanços na Computação Quântica",
    date: "22 De Julho De 2024",
    image: "/images/news8.jpg",
  },
  {
    id: 9,
    category: "Política",
    title: "Novas decisões políticas movimentam o cenário nacional",
    date: "22 De Julho De 2024",
    image: "",
  },
  {
    id: 10,
    category: "Economia",
    title: "Especialistas analisam novos desafios económicos",
    date: "22 De Julho De 2024",
    image: "",
  },
  {
    id: 11,
    category: "Sociedade",
    title: "Novas iniciativas sociais ganham destaque nas comunidades",
    date: "22 De Julho De 2024",
    image: "",
  },
  {
    id: 12,
    category: "Tecnologia",
    title: "Inovação continua a transformar diferentes setores",
    date: "22 De Julho De 2024",
    image: "",
  },
];

export function MoreNews() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-4 py-10 sm:px-6 lg:px-10">

      {/* TÍTULO */}
      <div className="mb-7 flex items-center gap-3">
        <div className="h-8 w-1 bg-[#2d7911] dark:bg-[#5dbb3a]" />

        <h2 className="text-2xl font-bold text-primary">
          Mais Notícias
        </h2>
      </div>

      {/* ============================= */}
      {/* DESKTOP = GRID                */}
      {/* MOBILE = LISTA                */}
      {/* ============================= */}

      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">

        {news.map((item) => (
          <article
            key={item.id}
            className="
              group
              border-b
              border-theme
              py-5

              sm:border-b-0
              sm:py-0
            "
          >

            {/* ================================= */}
            {/* CARD                               */}
            {/* MOBILE: CONTEÚDO | IMAGEM         */}
            {/* DESKTOP: IMAGEM EM CIMA            */}
            {/* ================================= */}

            <div
              className="
                flex
                min-w-0
                flex-row-reverse
                items-stretch
                gap-4

                sm:block
              "
            >

              {/* ========================= */}
              {/* IMAGEM                     */}
              {/* ========================= */}

              <div
                className="
                  relative
                  h-[105px]
                  w-[125px]
                  shrink-0
                  overflow-hidden
                  bg-gray-300
                  dark:bg-zinc-800

                  sm:h-[180px]
                  sm:w-full

                  lg:h-[190px]
                "
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-300 dark:bg-zinc-800" />
                )}
              </div>

              {/* ========================= */}
              {/* CONTEÚDO                   */}
              {/* ========================= */}

              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  justify-between

                  sm:block
                "
              >

                {/* CATEGORIA */}
                <p className="text-xs text-secondary sm:mt-3 sm:text-sm">
                  {item.category}
                </p>

                {/* TÍTULO */}
                <h3
                  className="
                    mt-1
                    cursor-pointer
                    text-base
                    font-bold
                    leading-snug
                    text-primary
                    transition-colors
                    duration-300
                    group-hover:text-[#2d7911]
                    dark:group-hover:text-[#5dbb3a]

                    sm:mt-2
                    sm:text-lg

                    lg:text-xl
                  "
                >
                  {item.title}
                </h3>

                {/* DATA */}
                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <span className="text-[10px] text-secondary sm:text-sm">
                    {item.date}
                  </span>

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
            </div>
          </article>
        ))}
      </div>

      {/* ============================= */}
      {/* MOSTRAR MAIS                   */}
      {/* ============================= */}

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