import { useQuery } from "@tanstack/react-query";
import { ITodo } from "../types/Todo.type";

export default (id: ITodo["id"]) => {
  return useQuery({
    queryKey: ["todos", "single", id],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3001/todos/${id}?_expand=type`
      );
      return response.json();
    },
  });
};
