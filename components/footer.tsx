import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-theme bg-surface transition-colors duration-300">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-2
          gap-x-8
          gap-y-10
          px-6
          py-14
          text-center
          lg:grid-cols-6
          lg:text-left
        "
      >
        {/* Logo */}
        <div
          className="
            col-span-2
            flex
            w-full
            flex-col
            items-center
            lg:col-span-1
            lg:items-start
          "
        >
          <div className="relative h-16 w-40 sm:h-20 sm:w-48">
            <Image
              src="/logo.png"
              alt="Social 360"
              fill
              sizes="208px"
              className="object-contain object-center lg:object-left"
            />
          </div>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary">
            Informação, notícias e acontecimentos que conectam o mundo.
          </p>
        </div>

        {/* Institucional */}
        <div className="w-full">
          <h3 className="mb-4 font-bold text-primary">
            Institucional
          </h3>

          <ul className="space-y-2 text-sm text-secondary">
            <li>Sobre nós</li>
            <li>Propriedade</li>
            <li>Ficha técnica</li>
            <li>Endereço</li>
            <li>Telefone</li>
            <li>Email</li>
          </ul>
        </div>

       {/* Contactos */}
<div className="w-full">
  <h3 className="mb-4 font-bold text-primary">
    Contactos
  </h3>

  <ul className="space-y-3 text-sm text-secondary">
    <li className="flex items-center gap-2">
      <Phone size={16} strokeWidth={1.8} />
      <span>+244 926 812 257</span>
    </li>

    <li className="flex items-center gap-2">
      <Phone size={16} strokeWidth={1.8} />
      <span>+244 940 068 800</span>
    </li>

    <li className="flex items-center gap-2">
      <Mail size={16} strokeWidth={1.8} />
      <span>grel@revistasicial360.com</span>
    </li>
  </ul>
</div>
        {/* Outras Publicações */}
        <div className="w-full">
          <h3 className="mb-4 font-bold text-primary">
            Outras Publicações
          </h3>
        </div>

        {/* 
          REDES SOCIAIS + NEWSLETTER */}
        <div className="contents lg:col-span-2 lg:block">
          
          {/* Redes Sociais */}
          <div className="col-span-1 w-full lg:col-span-2">
            <h3 className="mb-4 font-bold text-primary">
              Nossas Redes Sociais
            </h3>

            <div className="flex justify-center gap-3 lg:justify-start">
              
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-theme
                  text-secondary
                  transition-all duration-300
                  hover:border-[#1877F2]
                  hover:bg-[#1877F2]
                  hover:text-white
                "
              >
                <FaFacebookF size={17} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-theme
                  text-secondary
                  transition-all duration-300
                  hover:border-[#E4405F]
                  hover:bg-[#E4405F]
                  hover:text-white
                "
              >
                <FaInstagram size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-theme
                  text-secondary
                  transition-all duration-300
                  hover:border-[#0A66C2]
                  hover:bg-[#0A66C2]
                  hover:text-white
                "
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div
            className="
              col-span-2
              mx-auto
              mt-0
              w-full
              max-w-md
              lg:mx-0
              lg:mt-10
              lg:max-w-none
            "
          >
            <h3 className="mb-4 font-bold text-primary">
              NEWSLETTER
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-secondary">
              As notícias mais importantes diretamente no seu email.
            </p>

            <input
              type="email"
              placeholder="Digite seu email"
              className="
                w-full
                border border-theme
                bg-page
                px-4 py-3
                text-sm
                text-primary
                outline-none
                transition-colors
                duration-300
                placeholder:text-secondary
                focus:border-blue-500
              "
            />

            <button
              type="button"
              className="
                mt-3
                w-full
                bg-accent
                py-3
                font-bold
                text-white
                transition-opacity
                duration-300
                hover:opacity-90
              "
            >
              Subscrever
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-theme py-5 text-center text-sm text-secondary">
        © 2026 SOCIAL 360. Todos os direitos reservados.
      </div>
    </footer>
  );
}