import { NewsCard } from "./NewsCard";

const news = [
  { id: 1, title: "Primeira notícia importante" },
  { id: 2, title: "Segunda notícia do dia" },
  { id: 3, title: "Terceira notícia internacional" },
  { id: 4, title: "Quarta notícia em destaque" },
  { id: 5, title: "Tecnologia e inovação" },
  { id: 6, title: "Economia mundial" },
  { id: 7, title: "Política internacional" },
  { id: 8, title: "Cultura e sociedade" },
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
          />
        ))}
      </div>
    </section>
  );
}