import { useQuery } from "@tanstack/react-query";

export default () => {
  return useQuery({
    queryKey: ["todos", "list"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3001/todos?_expand=type");
      return response.json();
    },
  });
};
