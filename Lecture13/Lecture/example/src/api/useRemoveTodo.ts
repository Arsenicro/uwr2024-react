import { useMutation, useQueryClient } from "@tanstack/react-query";

export default () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const result = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      });

      return result.json();
    },
    onSuccess: (_, data) => {
      queryClient.invalidateQueries({
        queryKey: ["todos", "list"],
      });
      queryClient.removeQueries({
        queryKey: ["todos", "single", data],
      });
    },
  });
};
