"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "dsl_theme_mode";

function getSystemTheme(): Theme {
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      // Remove any legacy key from prior versions that might be pinning the browser to light mode
      localStorage.removeItem("dsl-theme");

      const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
      const activeTheme =
        savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : getSystemTheme();

      setThemeState(activeTheme);

      const root = document.documentElement;
      if (activeTheme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        root.classList.remove("dark");
        root.classList.add("light");
      }

      // Dynamically react to system/OS theme changes if the user hasn't explicitly locked a preference
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        const currentSaved = localStorage.getItem(STORAGE_KEY);
        if (!currentSaved) {
          const newTheme: Theme = e.matches ? "dark" : "light";
          setThemeState(newTheme);
          if (newTheme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
          } else {
            root.classList.remove("dark");
            root.classList.add("light");
          }
        }
      };

      mediaQuery.addEventListener("change", handleSystemThemeChange);
      setMounted(true);
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    } catch (e) {
      setMounted(true);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch (e) {}

    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "light" as Theme,
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }
  return context;
}
