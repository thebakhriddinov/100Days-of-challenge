import { useState } from "react";
import Pagination from "./Pagination";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 10; // Example: 10 page

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl mb-4 font-bold">Pagination Example</h1>

      <p className="mb-4 text-lg">
        Current Page: <span className="font-bold">{currentPage}</span>
      </p>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
