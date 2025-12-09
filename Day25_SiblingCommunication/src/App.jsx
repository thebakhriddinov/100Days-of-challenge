import { useState } from "react";
import Childa from "./components/Childa";
import Childb from "./components/Childb";

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030712] p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Day 25 Sibling Communication (React)</h1>

      <Childa setMessage={setMessage} />
      <Childb message={message} />
    </div>
  );
}
