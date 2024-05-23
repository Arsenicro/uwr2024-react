import React, { useReducer } from "react";
import { IBaseTodoFields, ITodo } from "../../types/ITodo.type";
import { ITodoProvider } from "./TodoProvider.types";
import { todosReducer } from "./todosReducer";

export const TodosContext = React.createContext<ITodoProvider | undefined>(
  undefined
);

interface IProps {
  children: React.ReactNode;
}

function TodosProvider({ children }: IProps) {
  const [todosState, todosDispatch] = useReducer(todosReducer, []);

  const addTodo = (todo: Omit<IBaseTodoFields, "status">) => {
    todosDispatch({ type: "ADD_TODO", payload: todo });
  };

  const removeTodo = (todoId: string) => {
    todosDispatch({ type: "REMOVE_TODO", payload: todoId });
  };

  const editTodo = (
    todoId: string,
    editedTodo: {
      status: ITodo["status"];
      priority: ITodo["priority"];
    }
  ) => {
    todosDispatch({
      type: "SET_STATUS",
      payload: { id: todoId, status: editedTodo.status },
    });
    todosDispatch({
      type: "SET_PRIORITY",
      payload: { id: todoId, priority: editedTodo.priority },
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: todosState,
        addTodo,
        removeTodo,
        editTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProvider;
