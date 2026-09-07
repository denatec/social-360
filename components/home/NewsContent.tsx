"use client";

import { useEffect, useRef, useState } from "react";
import { NewsGrid } from "./NewsGrid";
import { SidebarNews } from "./SidebarNews";

export function NewsContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const newsGridRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [sidebarY, setSidebarY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        if (
          !sectionRef.current ||
          !newsGridRef.current ||
          !sidebarRef.current
        )
          return;

        const section = sectionRef.current;
        const newsGrid = newsGridRef.current;
        const sidebar = sidebarRef.current;

        const topOffset = 96;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        const newsTop =
          newsGrid.getBoundingClientRect().top + window.scrollY;

        const newsBottom =
          newsGrid.getBoundingClientRect().bottom + window.scrollY;

        const sidebarHeight = sidebar.offsetHeight;

        const scrollY = window.scrollY;

        // Quanto a sidebar deveria subir normalmente
        let translateY = scrollY + topOffset - newsTop;

        // Não deixa subir antes de chegar à seção
        translateY = Math.max(0, translateY);

        // Limite máximo: fim do NewsGrid
        const maxTranslateY =
          newsBottom - newsTop - sidebarHeight;

        // Não deixa ultrapassar o fim
        translateY = Math.min(translateY, maxTranslateY);

        setSidebarY(translateY);
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1800px] px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">

        {/* ================= NEWS GRID ================= */}
        <div ref={newsGridRef} className="min-w-0">
          <NewsGrid />
        </div>

        {/* ================= SIDEBAR DESKTOP ================= */}
        <div className="relative hidden xl:block">
          <div
            ref={sidebarRef}
            className="w-[300px] will-change-transform"
            style={{
              transform: `translateY(${sidebarY}px)`,
            }}
          >
            <SidebarNews />
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="xl:hidden">
          <SidebarNews />
        </div>

      </div>
    </section>
  );
}