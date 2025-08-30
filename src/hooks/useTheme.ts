import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Function to get system preference
  const getSystemPreference = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  // Function to apply theme based on mode
  const applyThemeFromMode = (mode: ThemeMode) => {
    const root = document.documentElement;
    let shouldBeDark: boolean;

    if (mode === "system") {
      shouldBeDark = getSystemPreference();
    } else {
      shouldBeDark = mode === "dark";
    }

    setIsDarkMode(shouldBeDark);

    // Remove both classes first, then add the correct one
    root.classList.remove("dark", "light");
    root.classList.add(shouldBeDark ? "dark" : "light");

    // Also set a CSS custom property for additional styling needs
    root.style.setProperty("--theme-mode", shouldBeDark ? "dark" : "light");
  };

  useEffect(() => {
    // Get saved theme or default to system
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
    const initialMode = savedTheme || "system";

    setThemeMode(initialMode);
    applyThemeFromMode(initialMode);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      // Only react to system changes if we're in system mode
      if (themeMode === "system") {
        // Use state instead of localStorage
        applyThemeFromMode("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [themeMode]); // Add themeMode as dependency

  const handleToggleTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
    localStorage.setItem("theme", mode);
    applyThemeFromMode(mode);
  };

  return {
    themeMode,
    isDarkMode,
    handleToggleTheme,
  };
};

export default useTheme;
