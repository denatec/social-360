export function Footer() {
  return (
    <footer className="mt-auto border-t border-theme bg-surface transition-colors duration-300">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-black text-primary">
            SOCIAL <span className="text-accent">360</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-secondary">
            Informação, notícias e acontecimentos
            que conectam o mundo.
          </p>
        </div>

        {/* Temas */}
        <div>
          <h3 className="mb-4 font-bold text-primary">
            Temas
          </h3>

          <ul className="space-y-2 text-secondary">
            <li>África</li>
            <li>Mundo</li>
            <li>Tecnologia</li>
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h3 className="mb-4 font-bold text-primary">
            Serviços
          </h3>

          <ul className="space-y-2 text-secondary">
            <li>Newsletter</li>
            <li>Previsão do Tempo</li>
            <li>Contacto</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 font-bold text-primary">
            NEWSLETTER
          </h3>

          <p className="mb-4 text-sm text-secondary">
            As notícias mais importantes diretamente no seu email.
          </p>

          <input
            type="email"
            placeholder="Digite seu email"
            className="w-full border border-theme bg-page px-4 py-3 text-primary outline-none focus:border-blue-500"
          />

          <button className="mt-3 w-full bg-accent py-3 font-bold text-white transition hover:opacity-90">
            Subscrever
          </button>
        </div>

      </div>

      <div className="border-t border-theme py-5 text-center text-sm text-secondary">
        © 2026 SOCIAL 360. Todos os direitos reservados.
      </div>

    </footer>
  );
}