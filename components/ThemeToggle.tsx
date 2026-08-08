"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-300/20 dark:border-white/10" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, rotate: 180 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-slate-300/50 dark:border-white/20 text-slate-800 dark:text-slate-200 shadow-sm hover:shadow-md transition-shadow"
      aria-label="Toggle Theme"
    >
      {isDark ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
    </motion.button>
  );
}
