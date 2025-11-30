import { useState } from "react";

function App() {
  const [color, setColor] = useState("#3498db");

  return (
    <div
      className="w-full h-[100vh] flex flex-col items-center justify-center transition"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">
        Day 15 - Color Picker 🎨
      </h1>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-24 h-24 p-1 rounded-lg border-4 border-white shadow-lg cursor-pointer"
      />

      <p className="mt-4 text-white text-xl font-semibold drop-shadow-md">
        Tanlangan rang: {color}
      </p>
    </div>
  );
}

export default App;
