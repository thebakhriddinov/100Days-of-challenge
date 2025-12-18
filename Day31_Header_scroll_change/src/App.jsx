import { useState, useEffect } from "react";
import logo from "./assets/logo.jpg"


export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // boshlanishida tekshiradi

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[200vh] flex flex-col gap-50">
      <header
        className={`fixed top-0 left-0 w-full h-30 flex items-center justify-between px-6 transition-all duration-300 z-50 ${
          scrolled ? "bg-white shadow-lg" : "bg-blue-600 shadow-none"
        }`}
      >
        <img className="w-20 rounded-2xl" src={logo} alt="logo" />
        <ul className={`flex gap-5 ${
          scrolled ? "text-black" : "text-white"
        }`}
>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>

      <main className="pt-50 ml-auto mr-auto text-3xl">
        <h1 className="font-bold">Scroll and you'll see the magic</h1>  
      </main>
    </div>
  );
}
