import nature from "./assets/nature.jpg"

export default function App() {
  return (
    <div className="h-screen ml-auto mr-auto flex items-center flex-col gap-10 pt-5 bg-[#0D1117]">
      <h2 className="text-[52px] font-bold text-[blue]">Day 22 — Image Gallery Grid</h2>
      <div className="w-[1100px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <img className="border-2 border-[blue] rounded-2xl hover:scale-120 transition-all" src={nature} alt="nature" />
        <img className="border-2 border-[blue] rounded-2xl hover:scale-120 transition-all" src={nature} alt="nature" />
        <img className="border-2 border-[blue] rounded-2xl hover:scale-120 transition-all" src={nature} alt="nature" />
        <img className="border-2 border-[blue] rounded-2xl hover:scale-120 transition-all" src={nature} alt="nature" />
        <img className="border-2 border-[blue] rounded-2xl hover:scale-120 transition-all" src={nature} alt="nature" />
        <img className="border-2 border-[blue] rounded-2xl hover:scale-120 transition-all" src={nature} alt="nature" />
      </div>

    </div>
  )
}