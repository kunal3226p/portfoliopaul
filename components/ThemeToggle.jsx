"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400">
        <Moon className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative p-2.5 rounded-full border border-white/10 dark:border-white/10 border-slate-300 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-cyan-300 hover:scale-105 hover:border-indigo-400 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-amber-300 hover:rotate-90 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
