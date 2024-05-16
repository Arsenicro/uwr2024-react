import { useQuery } from "@tanstack/react-query";

async function fetchPosts(id: string) {
  const res = await fetch(`http://localhost:3001/post/${id}`);
  return await res.json();
}

function usePost(id: string) {
  return useQuery({
    queryKey: ["posts", "post", id],
    queryFn: () => fetchPosts(id),
  });
}

export default usePost;
