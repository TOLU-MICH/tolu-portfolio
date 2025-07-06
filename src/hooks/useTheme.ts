import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement; // Target the <html> element
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Determine initial theme
    let initialTheme = "light";
    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (systemPrefersDark) {
      initialTheme = "dark";
    }

    setIsDarkMode(initialTheme === "dark");

    // Apply initial class to HTML element
    root.classList.add(initialTheme);
    root.classList.remove(initialTheme === "dark" ? "light" : "dark"); // Ensure only one is present
  }, []);

  const handleToggleTheme = (theme?: "light" | "dark") => {
    setIsDarkMode((prevState) => {
      const newThemeIsDark = theme ? theme === "dark" : !prevState;

      // Apply theme changes
      applyTheme(newThemeIsDark);

      return newThemeIsDark;
    });
  };

  // Helper function to apply theme changes
  const applyTheme = (isDark: boolean) => {
    const root = document.documentElement;
    const themeValue = isDark ? "dark" : "light";

    // Update CSS classes
    root.classList.toggle("dark", isDark);
    root.classList.toggle("light", !isDark);

    // Save to localStorage
    localStorage.setItem("theme", themeValue);
  };

  return {
    isDarkMode,
    handleToggleTheme,
  };
};

export default useTheme;
