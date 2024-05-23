import { v4 } from "uuid";
import { IBaseTodoFields, ITodo } from "../../types/ITodo.type";

type ITodoAction =
  | {
      type: "ADD_TODO";
      payload: Omit<IBaseTodoFields, "status">;
    }
  | {
      type: "REMOVE_TODO";
      payload: ITodo["id"];
    }
  | {
      type: "SET_NAME";
      payload: {
        id: ITodo["id"];
        name: ITodo["name"];
      };
    }
  | {
      type: "SET_STATUS";
      payload: {
        id: ITodo["id"];
        status: ITodo["status"];
      };
    }
  | {
      type: "SET_PRIORITY";
      payload: {
        id: ITodo["id"];
        priority: ITodo["priority"];
      };
    }
  | {
      type: "SET_TAGS";
      payload: {
        id: ITodo["id"];
        tags: ITodo["tags"];
      };
    };

export function todosReducer(state: ITodo[], action: ITodoAction): ITodo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: v4(),
          name: action.payload.name,
          status: "to-do",
          priority: action.payload.priority,
          createdAt: new Date(),
          updatedAt: new Date(),
          tags: action.payload.tags,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "SET_NAME":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.name, updatedAt: new Date() }
          : todo
      );
    case "SET_STATUS":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status, updatedAt: new Date() }
          : todo
      );
    case "SET_PRIORITY":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              priority: action.payload.priority,
              updatedAt: new Date(),
            }
          : todo
      );
    case "SET_TAGS":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, tags: action.payload.tags, updatedAt: new Date() }
          : todo
      );
    default:
      return state;
  }
}
