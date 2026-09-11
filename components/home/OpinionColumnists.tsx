import Image from "next/image";
import { ArrowRight } from "lucide-react";

const opinions = [
  {
    id: 1,
    name: "Leonor Sá Machado",
    image: "/LEONOR SÁ MACHADO.png",
    opinion:
      "O futuro da sociedade começa pelas decisões que tomamos hoje.",
  },
  {
    id: 2,
    name: "Miguel Mbuta.",
    image: "/MIGUEL MBUTA.png",
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
    <section className="border-y border-theme bg-[#f7f7f4] py-10 transition-colors duration-300 dark:bg-[#141414]">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
        
        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          {/* CABEÇALHO */}
          <div className="mb-3">
            <div className="h-px w-full bg-gray-300 dark:bg-zinc-700">
              <div className="h-[3px] w-14 bg-[#ffc517]" />
            </div>

            <h2 className="mt-4 text-sm font-bold uppercase tracking-wide text-primary">
              Opinião
            </h2>
          </div>

          {/* LISTA MOBILE */}
          <div>
            {opinions.map((item) => (
              <article
                key={item.id}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-theme
                  py-5
                  last:border-b-0
                "
              >
                {/* TEXTO */}
                <div className="min-w-0 flex-1">
                  <h3 className="line-clamp-3 text-base leading-tight text-primary">
                    <i>&quot;{item.opinion}&quot;</i>
                  </h3>

                  <p className="mt-3 text-[11px] text-secondary">
                    Opinião de {item.name}
                  </p>
                </div>

                {/* FOTO À DIREITA */}
                <div
                  className="
                    relative
                    h-16
                    w-16
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border-2
                    border-[#ffc517]
                    bg-gray-300
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <Image
                    src={item.image}
                    alt= ""
                    fill
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================= TABLET / DESKTOP ================= */}
        <div className="hidden md:block">
          {/* CABEÇALHO */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-8 w-1 bg-[#ffc517]" />

            <h2 className="text-2xl font-bold text-primary">
              Opinião
            </h2>

            <div className="ml-2 h-px flex-1 bg-gray-300 dark:bg-zinc-700" />
          </div>

          {/* GRID */}
          <div className="grid grid-cols-3 gap-8 lg:grid-cols-6">
            {opinions.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col items-center text-center"
              >
                {/* FOTO */}
                <div
                  className="
                    relative
                    h-20
                    w-20
                    overflow-hidden
                    rounded-full
                    border-2
                    border-[#ffc517]
                    bg-gray-300
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
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

                {/* LINHA */}
                <div className="my-3 h-[2px] w-8 bg-[#2d7911] dark:bg-[#5dbb3a]" />

                {/* OPINIÃO */}
                <p className="line-clamp-4 max-w-[220px] text-xs leading-relaxed text-secondary">
                  <i>&quot;{item.opinion}&quot;</i>
                </p>

                {/* LINK */}
                <button
                  className="
                    group/button
                    mt-3
                    flex
                    items-center
                    gap-1
                    text-[11px]
                    font-bold
                    text-[#2d7911]
                    transition-all
                    hover:gap-2
                    dark:text-[#5dbb3a]
                  "
                >
                  Ler mais

                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover/button:translate-x-1"
                  />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}