import { ITodoType } from "./TodoType.type";

export interface ITodo {
  id: number;
  body: string;
  typeId: ITodoType["id"];
  type: ITodoType;
}
