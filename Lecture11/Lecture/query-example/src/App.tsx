import { useState } from "react";
import Input from "./components/Input";
import useAddPosts from "./posts/useAddPost";
import usePosts from "./posts/usePosts";

function App() {
  const [title, setTitle] = useState("");

  const query = usePosts();
  const mutation = useAddPosts();

  console.log(query.status);

  return (
    <div className="min-h-screen bg-slate-600 text-white">
      <div>
        {query.isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {query.data.map((post: any) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate(title);
          setTitle("");
        }}
      >
        <Input
          className="text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={query.isLoading || query.isPending || mutation.isPending}
        />
        <button className="bg-blue-500 rounded p-2">Save</button>
      </form>
    </div>
  );
}

export default App;
