import { NewsCard } from "./NewsCard";

const news = [
  {
    id: 1,
    title: "Primeira notícia importante",
    category: "Política",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Segunda notícia do dia",
    category: "Mundo",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "Terceira notícia internacional",
    category: "Internacional",
    image: "/images/news3.jpg",
  },
  {
    id: 4,
    title: "Quarta notícia em destaque",
    category: "África",
    image: "/images/news4.jpg",
  },
  {
    id: 5,
    title: "Tecnologia e inovação",
    category: "Tecnologia",
    image: "/images/news5.jpg",
  },
  {
    id: 6,
    title: "Economia mundial",
    category: "Economia",
    image: "/images/news6.jpg",
  },
  {
    id: 7,
    title: "Política internacional",
    category: "Política",
    image: "/images/news7.jpg",
  },
  {
    id: 8,
    title: "Cultura e sociedade",
    category: "Cultura",
    image: "/images/news8.jpg",
  },
];

export function NewsGrid() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Últimas notícias
        </h2>

        <button className="text-sm font-semibold text-blue-600">
          Ver todas →
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}