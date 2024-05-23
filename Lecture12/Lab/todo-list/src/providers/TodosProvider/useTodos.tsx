import { useContext } from "react";
import { TodosContext } from "./TodosProvider";

function useTodos() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }

  return context;
}

export default useTodos;
