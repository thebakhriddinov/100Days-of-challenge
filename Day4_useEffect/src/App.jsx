import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered!");
  });

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] gap-5">
      <h1 className="text-center text-5xl ">Count: {count}</h1>
      <button 
      className="w-[300px] h-[40px] bg-green-400 rounded-xl hover:bg-green-500 text-[20px] text-white"
      onClick={() => setCount(count + 1)}
      >Plus
      </button>

      <button 
      className="w-[300px] h-[40px] bg-red-400 rounded-xl hover:bg-red-500 text-[20px] text-white"
      onClick={() => setCount(count - 1)}
      >Minus
      </button>

      <button 
      className="w-[300px] h-[40px] bg-gray-400 rounded-xl hover:bg-gray-500 text-[20px] text-white"
      onClick={() => setCount(count === 0)}
      >Reset
      </button>
    </div>
  );
}

export default App;
