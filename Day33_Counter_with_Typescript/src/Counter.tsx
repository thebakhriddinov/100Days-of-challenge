import { useState } from "react";
import plus from "./assets/plus.png";
import minus from "./assets/minus.png";
import restart from "./assets/restart.png";


export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-6 p-10">
      <h1 className="text-[120px] font-bold">{count}</h1>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="p-5 bg-black text-white rounded-full hover:bg-gray-800"
        >
          <img src={plus} alt="" />
        </button>

        <button
          onClick={() => setCount(0)}
          className="p-5 bg-black text-white rounded-full hover:bg-gray-800"
        >
          <img src={restart} alt="" />
          
        </button>


        <button
          onClick={() => setCount(count - 1)}
          className="p-5 bg-black text-white rounded-full hover:bg-gray-800"
        >
          <img src={minus} alt="" />
        </button>

      </div>
    </div>
  );
}
