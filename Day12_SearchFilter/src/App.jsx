import { useState } from "react";

function App() {

  const [search, setSearch] = useState("");

  const users = [
    "Ozodbek",
    "Muhammad",
    "Jasur",
    "Kamron",
    "Sardor",
    "Lola",
    "Diyora",
    "Shahnoza"
  ];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

      {/* 🔹 Sahifa title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Day 12 – Search Filter
      </h1>

      {/* 🔹 Qidiruv Input */}
      <input
        type="text"
        placeholder="Qidiruv..."
        value={search}                      
        onChange={(e) => setSearch(e.target.value)}  
        className="px-4 py-2 w-full max-w-md rounded-lg border shadow bg-white mb-5"
      />

      {/* 🔹 Filterlangan natijalar ro‘yxati */}
      <ul className="w-full max-w-md bg-white shadow rounded-lg divide-y">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <li
              key={index}
              className="px-4 py-3 hover:bg-gray-50 transition"
            >
              {user}
            </li>
          ))
        ) : (

          <li className="px-4 py-3 text-gray-500 italic">
            Hech narsa topilmadi...
          </li>
        )}
      </ul>

    </div>
  );
}

export default App;
