import Image from "next/image";
export function Footer() {
  return (
    <footer className="mt-auto border-t border-theme bg-surface transition-colors duration-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-8 px-6 py-14 text-center md:grid-cols-3 md:text-left lg:grid-cols-6">
       {/* Logo */}
<div className="flex w-full flex-col items-center text-center md:items-start md:text-left">

  <div className="relative h-16 w-40 sm:h-20 sm:w-48 md:h-20 md:w-52">
    <Image
      src="/logo.png"
      alt="Social 360"
      fill
      className="object-contain object-center md:object-left"
    />
  </div>

  <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary md:max-w-none">
    Informação, notícias e acontecimentos que conectam o mundo.
  </p>

</div>
        {/* Institucional */}
        <div>
          <h3 className="mb-4 font-bold text-primary">Institucional</h3>

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
        <div>
          <h3 className="mb-4 font-bold text-primary">Contactos</h3>

          <ul className="space-y-2 text-sm text-secondary"></ul>
        </div>

        {/* Secções */}
        <div>
          <h3 className="mb-4 font-bold text-primary">Secções</h3>

          <ul className="space-y-2 text-sm text-secondary"></ul>
        </div>

        {/* Outras Publicações */}
        <div>
          <h3 className="mb-4 font-bold text-primary">Outras Publicações</h3>

          <ul className="space-y-2 text-sm text-secondary"></ul>
        </div>

        {/* Parceiros */}
        <div>
          <h3 className="mb-4 font-bold text-primary">Parceiros</h3>

          <ul className="space-y-2 text-sm text-secondary"></ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-theme py-5 text-center text-sm text-secondary">
        © 2026 SOCIAL 360.
      </div>
    </footer>
  );
}
