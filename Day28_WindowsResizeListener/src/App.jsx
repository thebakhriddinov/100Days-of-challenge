import { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default function WindowResizeListener() {
  const { width, height } = useWindowSize();

  const getDevice = (width) => {
    if (width < 640) return "Mobile";
    if (width < 1024) return "Tablet";
    return "Desktop";
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-lg bg-gray-100">
      <div className="text-xl mb-4">Window Resize Listener</div>
      <div className="text-2xl mb-2">
        Width: {width}px | Height: {height}px
      </div>
      <div className="text-xl">
        Device Type: <strong>{getDevice(width)}</strong>
      </div>
    </div>
  );
}
