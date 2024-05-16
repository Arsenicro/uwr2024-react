import { useQuery } from "@tanstack/react-query";

async function fetchPosts(searchTitle?: string, searchAuthor?: string) {
  const res = await fetch(`http://localhost:3001/posts`);
  return await res.json();
}

function usePosts(searchTitle?: string, searchAuthor?: string) {
  return useQuery({
    queryKey: ["posts", "list", { searchTitle, searchAuthor }],
    queryFn: () => fetchPosts(searchTitle, searchAuthor),
  });
}

export default usePosts;
