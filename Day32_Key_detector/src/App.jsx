import { useState, useEffect } from "react";

export default function App() {

  const [keyData, setKeyData] = useState({
    key: "",
    code: "",
  });

  useEffecgt(() => {
    const handleKeyDown = (e) => {
      setKeyData({
        key: e.key === " " ? "Space" : e.key,
        code: e. keyCode,
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Key Detector</h1>

      {keyData.key ? (
        <div className="bg-gray-">

        </div>
      )}
    </div>
  )
}