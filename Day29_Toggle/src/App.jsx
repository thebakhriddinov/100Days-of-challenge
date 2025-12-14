import { useState } from "react";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white gap-6">
      <p className="font-semibold text-[24px]">
        Toggle is: {isOn ? "On ✅" : "OFF ❌"}
      </p>

      <div
        onClick={() => setIsOn(!isOn)}
        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-color duration-300 ${isOn ? "bg-green-500" : "bg-gray-500"}`}
      >
        <div 
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-8" : "translate-x-0"}`}
        >
        </div>
      </div>
    </div>
  )
}