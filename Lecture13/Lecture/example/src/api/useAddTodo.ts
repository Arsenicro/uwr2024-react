import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IAddTodo } from "../types/Todo.type";

export default () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: IAddTodo) => {
      const result = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return result.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos", "list"],
      });
    },
  });
};
