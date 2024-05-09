import { useCallback, useEffect, useState } from "react";
import { delay } from "./utilis";

async function getTodos(search?: string) {
  await delay(1000);
  const response = await fetch(
    `http://localhost:3001/todos?title_like=${search}`
  );
  const data = await response.json();
  return data;
}

async function checkTodo(id: string, completed: boolean) {
  const response = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
  const data = await response.json();
  return data;
}

function App() {
  const [todos, setTodos] = useState<
    { id: string; title: string; completed: boolean }[]
  >([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async function fetchData(ignore = false) {
      setLoading(true);
      const data = await getTodos(search);
      console.log(data, ignore);
      if (!ignore) {
        setTodos(data);
        setLoading(false);
      }
    },
    [search]
  );

  useEffect(() => {
    let ignore = false;

    fetchData(ignore);

    return () => {
      ignore = true;
    };
  }, [fetchData]);

  return (
    <>
      <h1 className="text-2xl font-bold">Todos</h1>
      Search:{" "}
      <input
        type="text"
        className="border bg-slate-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {loading && <li>Loading...</li>}
        {!loading &&
          todos.map((todo) => (
            <li key={todo.id} className="py-1">
              {todo.title}{" "}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                  checkTodo(todo.id, e.target.checked);
                  fetchData();
                }}
              />
            </li>
          ))}
      </ul>
      <button
        className="p-2 rounded text-white bg-blue-500 hover:bg-blue-600"
        onClick={async () => {
          const data = await getTodos();
          setTodos(data);
        }}
      >
        Button
      </button>
    </>
  );
}

export default App;
