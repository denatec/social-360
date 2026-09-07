import Image from "next/image";
import { ArrowRight } from "lucide-react";

const opinions = [
  {
    id: 1,
    name: "João Manuel Silva",
    image: "/images/autor1.jpg",
    opinion:
      "O futuro da sociedade começa pelas decisões que tomamos hoje.",
  },
  {
    id: 2,
    name: "Maria Fernandes",
    image: "/images/autor2.jpg",
    opinion:
      "A educação continua sendo a ferramenta mais poderosa para mudar uma nação.",
  },
  {
    id: 3,
    name: "Paulo António",
    image: "/images/autor3.jpg",
    opinion:
      "A economia precisa acompanhar as mudanças da sociedade moderna.",
  },
  {
    id: 4,
    name: "Ana Luísa Costa",
    image: "/images/autor4.jpg",
    opinion:
      "A transformação digital está a mudar a forma como vivemos.",
  },
  {
    id: 5,
    name: "Carlos Mendes",
    image: "/images/autor5.jpg",
    opinion:
      "O desenvolvimento sustentável deve ser uma prioridade nacional.",
  },
  {
    id: 6,
    name: "Sofia Martins",
    image: "/images/autor6.jpg",
    opinion:
      "A juventude representa uma das maiores forças para o futuro.",
  },
];

export function OpinionColumnists() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-12">

      {/* CABEÇALHO */}
      <div className="mb-8 flex items-center gap-4">
        <div className="h-8 w-1 bg-[#ffc517]" />

        <div>
          <h2 className="text-2xl font-bold text-primary">
            Opinião
          </h2>
        </div>

        <div className="ml-2 h-px flex-1 bg-gray-200 dark:bg-zinc-800" />
      </div>

      {/* OPINIÕES */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

        {opinions.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col items-center text-center"
          >
            {/* FOTO */}
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#ffc517] transition-transform duration-300 group-hover:scale-105">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* NOME */}
            <h3 className="mt-3 text-sm font-bold text-primary">
              {item.name}
            </h3>

            {/* LINHA DECORATIVA */}
            <div className="my-3 h-[2px] w-8 bg-[#2d7911] dark:bg-[#5dbb3a]" />

            {/* OPINIÃO */}
            <p className="line-clamp-4 text-xs leading-relaxed text-secondary"> <i>
             "{item.opinion}"
            </i>
            </p>

            {/* LINK */}
            <button className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#2d7911] transition-all hover:gap-2 dark:text-[#5dbb3a]">
              Ler mais

              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </article>
        ))}

      </div>

    </section>
  );
}