import { React } from "react";

export default function ChildB({ message }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow w-80">
      <h2 className="text-xl font-semibold mb-2">Child B</h2>
      <p className="text-gray-700">Child A dan kelgan xabar:  
        <span className="font-bold"> {message || "Hali xabar yo'q"} </span>
      </p>
    </div>
  );
}
