import { useState, useEffect } from "react";

export default function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }

    getData()
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-2">User Data Fetch</h1>
      <p className="mb-6">Free Api</p>

      {loading ? (
        <p className="text-lg animate-pulse">Loading...</p>
      ): (
        <div className="grid gap-4 md:grid-cols-2 lg-grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 duration-200"
            >
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-300">{user.email}</p>
              <p className="text-gray-300">{user.phone}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}