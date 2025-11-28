import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");

  const checkStrength = (pass) => {
    let score = 0;

    if (pass.length > 6) score++;

    if (/[A-Z]/.test(pass)) score++;

    if (/[0-9]/.test(pass)) score++;

    if (/[^A-Za-z0-9]/.test(pass)) score++;

    return score;
  };

  const strength = checkStrength(password);

  const getStrengthLabel = () => {
    switch (strength) {
      case 0:
      case 1:
        return { text: "Weak", color: "text-red-500" };
      case 2:
        return { text: "Medium", color: "text-yellow-500" };
      case 3:
      case 4:
        return { text: "Strong", color: "text-green-600" };
      default:
        return { text: "", color: "" };
    }
  };

  const label = getStrengthLabel();

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Day 13 — Password Strength Checker
      </h1>

      <input
        type="password"
        placeholder="Parol kiriting..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-3 w-full max-w-md border rounded-xl shadow bg-white"
      />

      {password && (
        <p className={`mt-3 font-semibold ${label.color}`}>
          Strength: {label.text}
        </p>
      )}

      <div className="flex gap-2 mt-4">
        <div className={`h-2 w-16 rounded ${
          strength >= 1 ? "bg-red-500" : "bg-gray-300"
        }`} />

        <div className={`h-2 w-16 rounded ${
          strength >= 2 ? "bg-yellow-500" : "bg-gray-300"
        }`} />

        <div className={`h-2 w-16 rounded ${
          strength >= 3 ? "bg-green-500" : "bg-gray-300"
        }`} />

        <div className={`h-2 w-16 rounded ${
          strength >= 4 ? "bg-green-700" : "bg-gray-300"
        }`} />
      </div>

    </div>
  );
}

export default App;
