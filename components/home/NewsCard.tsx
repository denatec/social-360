interface NewsCardProps {
  title: string;
  category: string;
  image: string;
}

export function NewsCard({
  title,
  category,
  image,
}: NewsCardProps) {
  return (
    <article className="group cursor-pointer">

      <div className="aspect-[16/10] overflow-hidden bg-surface">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="pt-4">
        <span className="text-xs font-bold uppercase text-accent">
          {category}
        </span>

        <h3 className="mt-2 text-xl font-bold leading-tight text-primary transition group-hover:text-accent">
          {title}
        </h3>

        <p className="mt-2 text-sm text-secondary">
          Breve descrição da notícia para apresentar
          um resumo do conteúdo.
        </p>
      </div>

    </article>
  );
}