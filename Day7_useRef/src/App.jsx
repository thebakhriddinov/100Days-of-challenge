import React, { useRef } from "react";

function App() {
  const inputRef = useRef(null); 
  const resultRef = useRef(null);

  const handleClick = () => {
    const value = inputRef.current.value; 
    resultRef.current.textContent = value;

    inputRef.current.value = ""; 
    inputRef.current.focus();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
      <h1 className="text-3xl font-bold">Day 7 — useRef</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Nimadir yozing..."
        className="border px-4 py-2 rounded-lg w-64"
      />

      <button
        onClick={handleClick}
        className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Ko‘rsat
      </button>

      <p ref={resultRef} className="text-xl font-semibold text-gray-800"></p>
    </div>
  );
}

export default App;
