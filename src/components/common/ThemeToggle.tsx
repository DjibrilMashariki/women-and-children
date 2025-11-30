"use client";

import { useTheme } from "@/lib/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
    );
  }

  return <ThemeToggleButton />;
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative group p-2.5 rounded-lg transition-all duration-300 hover:scale-110"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Background with gradient - Changes based on theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 dark:from-orange-500/20 dark:to-orange-600/20 rounded-lg group-hover:from-orange-500/20 group-hover:to-orange-600/20 dark:group-hover:from-orange-500/30 dark:group-hover:to-orange-600/30 transition-all duration-300" />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 dark:group-hover:bg-orange-400/20 rounded-lg blur-xl transition-all duration-300 scale-0 group-hover:scale-150" />

      {/* Icon Container */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Sun Icon (visible in dark mode) */}
        <Sun
          className={`absolute w-5 h-5 text-orange-500 transition-all duration-500 ${theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
            }`}
        />

        {/* Moon Icon (visible in light mode) */}
        <Moon
          className={`absolute w-5 h-5 text-neutral-700 dark:text-orange-400 transition-all duration-500 ${theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-0"
            }`}
        />
      </div>

      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
        <div className="text-xs text-neutral-600 dark:text-neutral-300 whitespace-nowrap font-normal bg-white dark:bg-neutral-800 px-3 py-1.5 rounded-md shadow-lg border border-neutral-200 dark:border-neutral-700">
          {theme === "light" ? "Dark mode" : "Light mode"}
        </div>
      </div>
    </button>
  );
}
