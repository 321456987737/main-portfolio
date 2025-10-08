"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, []);

  // Toggle between dark and light
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-large)] transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={20} className="transition-transform duration-300 rotate-0" />
      ) : (
        <Sun size={20} className="transition-transform duration-300 rotate-180" />
      )}
    </button>
  );
}
