import { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text: task, completed: false }
    ]);

    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => 
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
      )
    );
  };

    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Day 8 - To Do App
      </h1>

      <div className="flex gap-3 w-full max-w-md">
        <input 
        type="text"
        placeholder="Vazifa kiriting..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 border rounded-lg px-4 py-2"
        />

        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transtion"
        >
          Qo'shish
        </button>
      </div>

      <ul className="mt-6 w-full max-w-md space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white px-4 py-2 rounded-lg shadow"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer select-none ${
                todo.completed 
                ? "line-through text-gray-400"
                : "text-gray-800"
              }`}
            >
              {todo.text}
            </span>


            {/* Deleting button */}
            <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700 text-lg"  
            >
              X
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;