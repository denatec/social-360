import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-theme bg-surface transition-colors duration-300">
      {/* =====================================================
          CONTEÚDO PRINCIPAL
      ====================================================== */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-12
          px-6
          py-14
          sm:px-8
          lg:grid-cols-4
          lg:gap-10
          xl:px-0
        "
      >
        {/* ===================================================
            MARCA
        ==================================================== */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* LOGO */}
          <div className="relative h-16 w-40 sm:h-20 sm:w-48">
            <Image
              src="/logo.png"
              alt="Social 360"
              fill
              sizes="192px"
              className="object-contain object-center lg:object-left"
            />
          </div>

          {/* DESCRIÇÃO */}
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary">
            Informação de Responsabilidade Social que conectam o País e o Mundo
          </p>

          {/* EMAIL */}
          <a
            href="mailto:geral@revistasocial360.com"
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              text-sm
              text-secondary
              transition-colors
              duration-200
              hover:text-primary
              lg:justify-start
            "
          >
            <Mail
              size={16}
              strokeWidth={1.8}
            />

            <span>
              geral@revistasocial360.com
            </span>
          </a>
        </div>

        {/* ===================================================
            INSTITUCIONAL
        ==================================================== */}
        <div className="text-center lg:text-left">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
            Institucional
          </h3>

          <ul className="space-y-3 text-sm text-secondary">
            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-primary"
              >
                Sobre nós
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-primary"
              >
                Propriedade
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-primary"
              >
                Ficha técnica
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors duration-200 hover:text-primary"
              >
                Endereço
              </a>
            </li>
          </ul>
        </div>

        {/* ===================================================
            CONTACTOS
        ==================================================== */}
        <div className="text-center lg:text-left">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
            Contactos
          </h3>

          <ul className="space-y-4 text-sm text-secondary">
            {/* TELEFONE 1 */}
            <li>
              <a
                href="tel:+244926812257"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-colors
                  duration-200
                  hover:text-primary
                  lg:justify-start
                "
              >
                <Phone
                  size={16}
                  strokeWidth={1.8}
                />

                <span>
                  +244 926 812 257
                </span>
              </a>
            </li>

            {/* TELEFONE 2 */}
            <li>
              <a
                href="tel:+244940068800"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-colors
                  duration-200
                  hover:text-primary
                  lg:justify-start
                "
              >
                <Phone
                  size={16}
                  strokeWidth={1.8}
                />

                <span>
                  +244 940 068 800
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* ===================================================
            OUTRAS PUBLICAÇÕES + REDES SOCIAIS
        ==================================================== */}
        <div className="flex flex-col">
          {/* OUTRAS PUBLICAÇÕES */}
          <div className="text-center lg:text-left">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
              Outras Publicações
            </h3>

            <ul className="space-y-3 text-sm text-secondary">
              <li>
                <a
                  href="#"
                  className="
                    inline-flex
                    items-center
                    gap-1
                    transition-colors
                    duration-200
                    hover:text-primary
                  "
                >
                  Revista Social 360
                  <ArrowUpRight size={14} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    inline-flex
                    items-center
                    gap-1
                    transition-colors
                    duration-200
                    hover:text-primary
                  "
                >
                  Edição África
                  <ArrowUpRight size={14} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    inline-flex
                    items-center
                    gap-1
                    transition-colors
                    duration-200
                    hover:text-primary
                  "
                >
                  Edição Internacional
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* =================================================
              REDES SOCIAIS
          ================================================== */}
          <div className="mt-10 text-center lg:text-left">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-primary">
              Nossas Redes Sociais
            </h3>

            <div className="flex justify-center gap-3 lg:justify-start">
              {/* FACEBOOK */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-theme
                  text-secondary
                  transition-all
                  duration-300
                  hover:border-[#1877F2]
                  hover:bg-[#1877F2]
                  hover:text-white
                "
              >
                <FaFacebookF size={17} />
              </a>

              {/* INSTAGRAM */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-theme
                  text-secondary
                  transition-all
                  duration-300
                  hover:border-[#E4405F]
                  hover:bg-[#E4405F]
                  hover:text-white
                "
              >
                <FaInstagram size={18} />
              </a>

              {/* LINKEDIN */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-theme
                  text-secondary
                  transition-all
                  duration-300
                  hover:border-[#0A66C2]
                  hover:bg-[#0A66C2]
                  hover:text-white
                "
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          NEWSLETTER
          TUDO UM POR CIMA DO OUTRO
      ====================================================== */}
      <div className="border-t border-theme">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            items-center
            px-6
            py-10
            text-center
            sm:px-8
            lg:py-12
            xl:px-0
          "
        >
          {/* TÍTULO */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />

            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-primary">
              Newsletter
            </h3>
          </div>

          {/* DESCRIÇÃO */}
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-secondary">
            As notícias mais importantes diretamente no seu email.
          </p>

          {/* FORMULÁRIO */}
          <form
            className="
              mt-6
              flex
              w-full
              max-w-xl
              flex-col
              gap-3
            "
          >
            <label
              htmlFor="newsletter-email"
              className="sr-only"
            >
              Seu email
            </label>

            <input
              id="newsletter-email"
              type="email"
              placeholder="Digite seu email"
              className="
                min-h-[48px]
                w-full
                border
                border-theme
                bg-page
                px-4
                text-sm
                text-primary
                outline-none
                transition
                duration-300
                placeholder:text-secondary
                focus:border-blue-500
                focus:ring-1
                focus:ring-blue-500/30
              "
            />

            <button
              type="submit"
              className="
                min-h-[48px]
                w-full
                bg-accent
                px-8
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-white
                transition
                duration-300
                hover:opacity-90
              "
            >
              Subscrever
            </button>
          </form>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}
      <div className="border-t border-theme">
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-6
            py-5
            text-center
            text-sm
            text-secondary
            sm:px-8
            xl:px-0
          "
        >
          © 2026 SOCIAL 360. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}