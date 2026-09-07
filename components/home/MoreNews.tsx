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

  // Segunda linha
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

  // Cards sem imagem
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
    <section className="mx-auto w-full max-w-[1600px] px-6 py-12 lg:px-10">
      
      {/* ================= TÍTULO ================= */}
      <div className="mb-8 flex items-center gap-3">
        <div className="h-8 w-1 bg-[#2d7911] dark:bg-[#5dbb3a]" />

        <h2 className="text-2xl font-bold text-primary">
          Mais Notícias
        </h2>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        
        {news.map((item) => (
          <article
            key={item.id}
            className="group min-w-0 border-b border-theme pb-6"
          >
            {/* ================= IMAGEM OU CINZA ================= */}
            <div className="relative h-[190px] w-full overflow-hidden bg-gray-300 dark:bg-zinc-800">
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

            {/* ================= CATEGORIA ================= */}
            <p className="mt-3 text-sm text-secondary">
              {item.category}
            </p>

            {/* ================= TÍTULO ================= */}
            <h3
              className="
                mt-2
                cursor-pointer
                text-xl
                font-bold
                leading-snug
                text-primary
                transition-colors
                duration-300
                group-hover:text-[#2d7911]
                dark:group-hover:text-[#5dbb3a]
              "
            >
              {item.title}
            </h3>

            {/* ================= DATA + BOOKMARK ================= */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-secondary">
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
          </article>
        ))}
      </div>

      {/* ================= VER MAIS ================= */}
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

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </section>
  );
}