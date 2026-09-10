import { NewsCard } from "./NewsCard";

const news = [
  {
    id: 1,
    title: "Primeira notícia importante começa a marcar o dia",
    category: "Política",
    image: "/images/news1.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 2,
    title: "Segunda notícia do dia que está a ganhar destaque",
    category: "Mundo",
    image: "/images/news2.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 3,
    title: "Terceira notícia internacional que é relevante",
    category: "Internacional",
    image: "/images/news3.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 4,
    title: "Tecnologia e inovação moldam o futuro do mundo",
    category: "Tecnologia",
    image: "/images/news4.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 5,
    title: "Seleção nacional prepara-se para novos desafios",
    category: "Desporto",
    image: "/images/news5.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 6,
    title: "Economia global mostra sinais de recuperação",
    category: "Economia",
    image: "/images/news6.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 7,
    title: "Tecnologia e inovação moldam o futuro do mundo",
    category: "Tecnologia",
    image: "/images/news4.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 8,
    title: "Seleção nacional prepara-se para novos desafios",
    category: "Desporto",
    image: "/images/news5.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 9,
    title: "Economia global mostra sinais de recuperação",
    category: "Economia",
    image: "/images/news6.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 10,
    title: "Tecnologia e inovação moldam o futuro do mundo",
    category: "Tecnologia",
    image: "/images/news4.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 11,
    title: "Seleção nacional prepara-se para novos desafios",
    category: "Desporto",
    image: "/images/news5.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
  {
    id: 12,
    title: "Economia global mostra sinais de recuperação",
    category: "Economia",
    image: "/images/news6.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
  },
];

export function NewsGrid() {
  return (
    <section className="min-w-0">
      {/* Cabeçalho */}
      <div className="mb-6 flex items-center justify-between border-l-4 border-[#2d7911] pl-3">
        <h1 className="text-x3 font-bold text-primary">
          Últimas notícias
        </h1>

        <button className="text-xs font-semibold text-[#2d7911] transition hover:underline dark:text-[#5dbb3a]">
          Ver todas →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            category={item.category}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}