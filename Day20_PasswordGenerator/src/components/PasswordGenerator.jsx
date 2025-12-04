import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_-+=?/{}[]";

    let newPass = "";
    for (let i = 0; i < length; i++) {
      newPass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(newPass);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg border rounded-xl bg-[#0b1c4a] text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>

      {/* Password Output */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full border px-3 py-2 rounded"
        />
        <button
          onClick={copyToClipboard}
          className="ml-2 px-3 py-2 bg-blue-500 text-white rounded"
        >
          Copy
        </button>
      </div>

      {/* Length Slider */}
      <div className="mb-4">
        <label className="font-medium text-white">Length: {length}</label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Options */}
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>

        <label className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        className="w-full bg-green-500 text-white py-2 rounded font-semibold"
      >
        Generate Password
      </button>
    </div>
  );
}
