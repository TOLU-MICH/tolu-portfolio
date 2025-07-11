import useTheme from "../hooks/useTheme";

const ThemeToggler = () => {
  const { handleToggleTheme: toggleTheme, isDarkMode } = useTheme();
  return (
    <div className="flex items-center my-2 space-x-2">
      <div className="flex p-1 rounded-full bg-primary-medium-light glass-card">
        {/* Light mode button */}
        <button
          onClick={() => toggleTheme("light")}
          className={`p-1.5 rounded-full ${
            !isDarkMode
              ? "bg-white text-gray-600 shadow-sm"
              : "text-gray-400 dark:text-gray-200"
          }`}
          aria-label="Light mode"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>

        {/* Dark mode button */}
        <button
          onClick={() => toggleTheme("dark")}
          className={`p-1.5 rounded-full ${
            isDarkMode ? "glass-card" : "text-gray-400 dark:text-gray-200"
          }`}
          aria-label="Dark mode"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
