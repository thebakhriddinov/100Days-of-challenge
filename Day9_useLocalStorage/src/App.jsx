import { useState, useEffect } from "react";

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("dark") === "true";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark", "false");
    }
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-white dark:bg-black transition-colors">
      
      <h1 className="text-6xl font-bold text-black dark:text-white">
        Dark Theme Tayyor!
      </h1>

      <button
        onClick={() => setDark(!dark)}
        className="px-8 py-4 bg-gray-800 dark:bg-white text-white dark:text-black rounded text-xl font-bold"
      >
        {dark ? "☀️ Light" : "🌙 Dark"} ga o‘tish
      </button>

      <p className="text-gray-600 dark:text-gray-300">
        9-kun – bajarildi! 
      </p>
    </div>
  );
}