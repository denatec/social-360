import { LatestNews } from "./LatestNews";
import { HeroSlider } from "./HeroSlider";

export function HeroNews() {
  return (
    <section className="border-b border-gray-300 dark:border-zinc-800">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-4 py-6 lg:grid-cols-[1fr_350px] lg:px-6">

        {/* Slide principal */}
        <HeroSlider />

        {/* Últimas notícias */}
        <LatestNews />

      </div>
    </section>
  );
}