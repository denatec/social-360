import "./globals.css";

import { ThemeProvider } from "@/../components/ThemeProvider";

import { HeroSlider } from "@/../components/home/HeroSlider";
import { HeroNews } from "@/../components/home/HeroNews";
import { NewsGrid } from "@/../components/home/NewsGrid";
import { Advertisement } from "@/../components/home/Advertisement";
import { SidebarNews } from "@/../components/home/SidebarNews";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      
      <ThemeProvider>

        {/* Publicidade principal */}
        <Advertisement />

        {/* Notícia em destaque */}
        <HeroNews />

        {/* Slide */}
        <HeroSlider />

        {/* Segunda publicidade - largura total */}
        <div className="mx-auto max-w-7xl px-6 pt-10">
          <Advertisement />
        </div>

        {/* Conteúdo principal */}
        <section className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-6 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          
          {/* Notícias */}
          <div className="min-w-0">
            <NewsGrid />
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 self-start">
            <SidebarNews />
          </aside>

        </section>

      </ThemeProvider>

    </main>
  );
}