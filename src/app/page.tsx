import "./globals.css";

import { ThemeProvider } from "@/../components/ThemeProvider";

import { HeroNews } from "@/../components/home/HeroNews";
import { Advertisement } from "@/../components/home/Advertisement";
import { OpinionColumnists } from "@/../components/home/OpinionColumnists";
import { FeaturedNews } from "@/../components/home/FeaturedNews";
import { NewsSection } from "@/../components/home/NewsSection";
import { NewsContent } from "@/../components/home/NewsContent";
import { MoreNews } from "@/../components/home/MoreNews";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <ThemeProvider>
        {/* ============================================
            PRIMEIRA PUBLICIDADE
        ============================================= */}
        <div className="mx-auto w-full max-w-[1550px] px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <Advertisement />
          </div>
        </div>

        {/* ============================================
            HERO
        ============================================= */}
        <HeroNews />

        {/* ============================================
            SEGUNDA PUBLICIDADE
        ============================================= */}
        <div className="mx-auto w-full max-w-[1550px] px-4 pt-10 sm:px-6 lg:px-8">
          <div className="w-full">
            <Advertisement />
          </div>
        </div>

        {/* ============================================
            CONTEÚDO
        ============================================= */}
        <NewsContent />

        {/* ============================================
            COLUNISTAS
        ============================================= */}
        <OpinionColumnists />

        {/* ============================================
            DESTAQUES
        ============================================= */}
        <FeaturedNews />

        {/* ============================================
            SEÇÃO DE NOTÍCIAS
        ============================================= */}
        <NewsSection />

        {/* ============================================
            MAIS NOTÍCIAS
        ============================================= */}
        <MoreNews />
      </ThemeProvider>
    </main>
  );
}