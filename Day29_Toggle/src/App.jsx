import { useState } from "react";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white gap-6">
      <h1>
        Toggle is: {isOn ? "On ✅" : "OFF ❌"}
      </h1>

      <div
        onClick={() => setIsOn(!isOn)}
        className={`w-16 h-8 flex items-center rounded-full p-1`}
      >

      </div>
    </div>
  )
}