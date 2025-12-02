import { useState } from "react";

function App() {
  const [number, setNumber] = useState(null);

  const generateRandom = () => {

    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Day 18 – Random Number Generator
      </h1>

      <div className="text-5xl font-bold text-white mb-6 bg-black rounded-xl h-30 w-30 flex justify-center items-center">
        {number !== null ? number : "—"}
      </div>

      <button
        onClick={generateRandom}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Generate Number
      </button>
    </div>
  );
}

export default App;
