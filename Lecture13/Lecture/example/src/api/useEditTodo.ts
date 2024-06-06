import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IEditTodo } from "../types/Todo.type";

export default () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: IEditTodo) => {
      const result = await fetch(`http://localhost:3001/todos/${data.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return result.json();
    },
    onSuccess: (_, data) => {
      queryClient.invalidateQueries({
        queryKey: ["todos", "list"],
      });
      queryClient.invalidateQueries({
        queryKey: ["todos", "single", data.id],
      });
    },
  });
};
