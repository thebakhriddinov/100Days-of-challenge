import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);

  const [hover, setHover] = useState(0);

  const totalStars = 5;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Day 17 – Star Rater
      </h1>

      <div className="flex gap-3">
        {[...Array(totalStars)].map((_, index) => {
          const starNumber = index + 1;

          return (
            <span
              key={starNumber}

              onClick={() => setRating(starNumber)}

              onMouseEnter={() => setHover(starNumber)}

              onMouseLeave={() => setHover(0)}

              className="cursor-pointer text-4xl transition select-none"
            >
              {starNumber <= (hover || rating) ? "⭐" : "☆"}
            </span>
          );
        })}
      </div>

      <p className="mt-4 text-lg font-medium text-gray-700">
        Your rating: {rating || "none"}
      </p>
    </div>
  );
}

export default App;
