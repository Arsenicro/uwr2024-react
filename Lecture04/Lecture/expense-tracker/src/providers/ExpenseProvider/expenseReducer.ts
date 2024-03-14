import { IExpense } from "../../types/Expense.type";

type ExpenseAction =
  | {
      type: "ADD_EXPENSE";
      payload: {
        title: string;
        amount: number;
      };
    }
  | {
      type: "REMOVE_EXPENSE";
      payload: {
        id: number;
      };
    };

export const expenseReducer = (state: IExpense[], action: ExpenseAction) => {
  console.log(action);
  switch (action.type) {
    case "ADD_EXPENSE":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          amount: action.payload.amount,
        },
      ];
    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload.id);
    default:
      return state;
  }
};
