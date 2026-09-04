import "./globals.css";
import { ThemeProvider } from "@/../components/ThemeProvider";
import { HeroNews } from "@/../components/home/HeroNews";
import { NewsGrid } from "@/../components/home/NewsGrid";
import { Advertisement } from "@/../components/home/Advertisement";
import { SidebarNews } from "@/../components/home/SidebarNews";

export default function Home() {
  return (
    <main className=" bg-white text-black dark:bg-black dark:text-white">
      <ThemeProvider>
        {/* Notícia em destaque */}
        <HeroNews />
        {/* Publicidade */}
        <Advertisement />
        {/* Conteúdo principal */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[1fr_300px]">
          <div>
            <NewsGrid />
          </div>
          <SidebarNews />
        </section>
        <Advertisement />
      </ThemeProvider>
    </main>
  );
}
