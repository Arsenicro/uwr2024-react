import { IBaseTodoFields, ITodo } from "../../types/ITodo.type";

export interface ITodoProvider {
  todos: ITodo[];
  addTodo: (todo: Omit<IBaseTodoFields, "status">) => void;
  removeTodo: (todoId: ITodo["id"]) => void;
  editTodo: (
    todoId: ITodo["id"],
    editedTodo: {
      status: ITodo["status"];
      priority: ITodo["priority"];
    }
  ) => void;
}
