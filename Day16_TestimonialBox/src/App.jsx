import putin from "./assets/putin.jpg"

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[600px] rounded-xl h-100 bg-[#232738] flex flex-col justify-center items-center gap-5">
        <h1 className="text-[64px] text-white">Putin</h1>
        <img className="w-40 rounded-xl" src={putin} alt="putin" />
        <p className="text-white text-[24px]">The president of Russia</p>
      </div>
    </div>
  )
}