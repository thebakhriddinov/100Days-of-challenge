import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Box */}
      <div className="w-[30vw] h-[30vh] bg-linear-to-r from-blue-400 to-purple-900 flex flex-col justify-center items-center rounded-lg shadow-lg">
        <h1 className="text-6xl mb-4 text-white">{count}</h1>

        {/* Buttons */}
        <div className=" flex justify-center items-center gap-4 rounded-md">
          <button 
            onClick={() => setCount(count + 1)}
            className="w-[100px] h-[30px] bg-blue-600 text-white rounded"
          >
            + Qo'shish
          </button>

          <button 
            onClick={() => setCount(count - 1)}
            className="w-[100px] h-[30px] bg-red-600 text-white rounded"
          >
            - Ayirish
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
