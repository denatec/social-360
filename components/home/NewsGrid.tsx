import { NewsCard } from "./NewsCard";

const news = [
  {
    id: 1,
    title: "Primeira notícia importante começa a marcar o dia",
    category: "Política",
    image: "/images/news1.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 2 horas",
  },
  {
    id: 2,
    title: "Segunda notícia do dia que está a ganhar destaque",
    category: "Mundo",
    image: "/images/news2.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 3 horas",
  },
  {
    id: 3,
    title: "Terceira notícia internacional que é relevante",
    category: "Internacional",
    image: "/images/news3.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 4 horas",
  },
  {
    id: 4,
    title: "Tecnologia e inovação moldam o futuro do mundo",
    category: "Tecnologia",
    image: "/images/news4.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 5 horas",
  },
  {
    id: 5,
    title: "Seleção nacional prepara-se para novos desafios",
    category: "Desporto",
    image: "/images/news5.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 6 horas",
  },
  {
    id: 6,
    title: "Economia global mostra sinais de recuperação",
    category: "Economia",
    image: "/images/news6.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 7 horas",
  },
    {
    id: 7,
    title: "Tecnologia e inovação moldam o futuro do mundo",
    category: "Tecnologia",
    image: "/images/news4.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 5 horas",
  },
  {
    id: 8,
    title: "Seleção nacional prepara-se para novos desafios",
    category: "Desporto",
    image: "/images/news5.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 6 horas",
  },
  {
    id: 9,
    title: "Economia global mostra sinais de recuperação",
    category: "Economia",
    image: "/images/news6.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 7 horas",
  },
    {
    id: 10,
    title: "Tecnologia e inovação moldam o futuro do mundo",
    category: "Tecnologia",
    image: "/images/news4.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 5 horas",
  },
  {
    id: 11,
    title: "Seleção nacional prepara-se para novos desafios",
    category: "Desporto",
    image: "/images/news5.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 6 horas",
  },
  {
    id: 12,
    title: "Economia global mostra sinais de recuperação",
    category: "Economia",
    image: "/images/news6.jpg",
    description:
      "Breve descrição da notícia para apresentar um resumo do conteúdo.",
    time: "Há 7 horas",
  },
];

export function NewsGrid() {
  return (
    <section>
      
      {/* Cabeçalho */}
      <div className="mb-5 flex items-center justify-between border-l-4 border-[#2d7911] pl-3">
        <h2 className="text-xl font-bold text-primary">
          Últimas notícias
        </h2>

        <button className="text-xs font-semibold text-[#2d7911] transition hover:underline dark:text-[#5dbb3a]">
          Ver todas →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            category={item.category}
            image={item.image}
            description={item.description}
            time={item.time}
          />
        ))}
      </div>

    </section>
  );
}