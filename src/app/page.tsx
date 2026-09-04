import "./globals.css";
import { ThemeProvider } from "@/../components/ThemeProvider";
import { HeroSlider } from "@/../components/home/HeroSlider";
import { HeroNews } from "@/../components/home/HeroNews";
import { NewsGrid } from "@/../components/home/NewsGrid";
import { Advertisement } from "@/../components/home/Advertisement";
import { SidebarNews } from "@/../components/home/SidebarNews";

export default function Home() {
  return (
    <main className=" bg-white text-black dark:bg-black dark:text-white">
      {/* Manipilação e troca de temas */}
      <ThemeProvider>
        {/* Publicidade */}
        <Advertisement />
        {/*Noticia em destaque */}
        <HeroNews />
        {/*Slide da pub*/}
        <HeroSlider />
        {/* Conteúdo principal */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[1fr_300px]">
          <div>
            {/* Mais uma Pub */}
            <Advertisement />
            {/* Noticias em grelha */}
            <NewsGrid />
          </div>
          <SidebarNews />
        </section>
      </ThemeProvider>
    </main>
  );
}
