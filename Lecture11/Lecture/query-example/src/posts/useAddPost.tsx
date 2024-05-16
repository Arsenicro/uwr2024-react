import { useMutation, useQueryClient } from "@tanstack/react-query";

async function addPost(title: string) {
  const res = await fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, author: "me" }),
  });
  return await res.json();
}

function useAddPosts() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts", "list"],
      });
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
  });
}

export default useAddPosts;
