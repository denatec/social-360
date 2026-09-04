"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        transition-all duration-300
        hover:bg-gray-100
        hover:scale-110
        dark:hover:bg-zinc-800
      "
      aria-label="Alterar tema"
    >
      {theme === "dark" ? (
        <Sun size={22} strokeWidth={2} />
      ) : (
        <Moon size={22} strokeWidth={2} />
      )}
    </button>
  );
}