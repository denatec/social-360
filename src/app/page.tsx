import "./globals.css";

import { ThemeProvider } from "@/../components/ThemeProvider";
import { HeroNews } from "@/../components/home/HeroNews";
import { Advertisement } from "@/../components/home/Advertisement";
import { OpinionColumnists } from "@/../components/home/OpinionColumnists";
import { FeaturedNews } from "@/../components/home/FeaturedNews";
import { NewsSection } from "@/../components/home/NewsSection";
import { NewsContent } from "@/../components/home/NewsContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <ThemeProvider>
        <Advertisement />

        <HeroNews />

        <div className="mx-auto max-w-[1800px] px-4 pt-10 sm:px-6 lg:px-8">
          <Advertisement />
        </div>

        {/* NewsGrid + Sidebar têm o mesmo container */}
        <NewsContent />

        {/* Tudo abaixo está FORA do limite do sticky */}
        <OpinionColumnists />

        <FeaturedNews />

        <NewsSection />
      </ThemeProvider>
    </main>
  );
}