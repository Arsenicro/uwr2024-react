import { ITodoType } from "./TodoType.type";

export interface ITodo {
  id: number;
  body: string;
  typeId: ITodoType["id"];
  type: ITodoType;
}

export type IAddTodo = Omit<ITodo, "id" | "type">;
export type IEditTodo = Omit<ITodo, "type">;
