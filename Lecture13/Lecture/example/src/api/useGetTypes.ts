import { useQuery } from "@tanstack/react-query";

export default () => {
  return useQuery({
    queryKey: ["types", "list"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3001/types`);
      return response.json();
    },
  });
};
