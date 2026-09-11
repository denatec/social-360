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

        {/* PRIMEIRA PUBLICIDADE */}
        <div className="w-full h-[230px]">
          <Advertisement />
        </div>

        <HeroNews />

        {/* SEGUNDA PUBLICIDADE */}
        <div className="mx-auto w-full max-w-[1450px] px-4 pt-10 sm:px-6 lg:px-8">
          <div className="w-full h-[210px]">
            <Advertisement />
          </div>
        </div>

        <NewsContent />

        <OpinionColumnists />

        <FeaturedNews />

        <NewsSection />

        <MoreNews />

      </ThemeProvider>
    </main>
  );
}
