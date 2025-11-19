import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <header
      className={`p-5 flex justify-between items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold">Day 6 — useContext</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}


function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="p-6 text-center">
        <p className="text-lg">
          This theme toggle is powered by <b>useContext</b> 🔥
        </p>
      </main>
    </ThemeProvider>
  );
}

export default App;
