import { useState, useEffect } from "react";

export default function App() {
  const [scolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window,scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll); 
  }, [])

  return (
    <div>
      <header>
        <h1>Scroll Header</h1>
      </header>
    </div>
  )
}