import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="h-[100vh]flex flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-4xl font-bold">{count}</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          +
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Restart
        </button>


        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          -
        </button>

      </div>
    </div>
  );
}
