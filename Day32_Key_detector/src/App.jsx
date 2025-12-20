import { useState, useEffect } from "react";

export default function App() {
  const [keyData, setKeyData] = useState({
    key: "",
    code: "",
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeyData({
        key: e.key === " " ? "Space" : e.key,
        code: e.keyCode,
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Key Detector</h1>

      {keyData.key ? (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center space-y-4">
          <div className="text-6xl font-extrabold text-blue-400">
            {keyData.key}
          </div>
          <div className="text-xl text-gray-300">Key Code: {keyData.code}</div>
        </div>
      ) : (
        <p className="text-gray-400 text-lg">Tugmalardan birini bosing</p>
      )}
    </div>
  );
}
