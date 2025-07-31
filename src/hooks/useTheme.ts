import { useState, useCallback } from "react";

export function useTheme(initial: boolean = false) {
  const [darkMode, setDarkMode] = useState(initial);
  const toggleDarkMode = useCallback(() => setDarkMode((d) => !d), []);
  return { darkMode, toggleDarkMode, setDarkMode };
}