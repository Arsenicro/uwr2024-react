import { useMutation, useQueryClient } from "@tanstack/react-query";

async function removePost(id: string) {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
}

function useRemovePost(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => removePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts", "list"],
      });
      queryClient.removeQueries({
        queryKey: ["comments", id],
      });
    },
  });
}

export default useRemovePost;
