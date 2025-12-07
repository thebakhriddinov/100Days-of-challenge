import React, { useState } from "react";

export default function RemoveItem() {

  const [items, setItems] = useState([
    "Mustafo",
    "Mehriddin",
    "Muhammadaziz",
    "Eshmat",
  ]);


  const removeItem = (index) => {
  
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full h-screen flex flex-col items-center pt-20 gap-2 bg-[#030712]">
      <h2 className="text-[52px] text-blue-700 font-bold mb-15">Day 23 Remove Item Example</h2>


      {items.map((item, index) => (
        <div
          key={index}
          className=" flex w-[500px] justify-between items-center border-2 border-blue-900 rounded-[7px] bg-blue-900"
        >
          {/* Item nomi */}
          <span className="text-white ml-2 ">{item}</span>

          {/* Remove tugmasi */}
          <button
            onClick={() => removeItem(index)}
            className="bg-red-500 text-white border-none w-23 h-10 cursor:pointer rounded-[5px]"
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              border:"10px",
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
