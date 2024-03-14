import { createContext, useReducer } from "react";
import { IExpense } from "../../types/Expense.type";
import { expenseReducer } from "./expenseReducer";

export const ExpenseContext = createContext<{
  expenses: IExpense[];
  addExpense: (title: string, amount: number) => void;
  removeExpense: (id: number) => void;
}>({
  expenses: [],
  addExpense: () => {},
  removeExpense: () => {},
});

const initialExpenses: IExpense[] = [
  { id: 1, title: "Car Insurance", amount: 294.67 },
  { id: 2, title: "Rent", amount: 1200 },
  { id: 3, title: "Groceries", amount: 150 },
];

const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {
  //const [expenses, setExpenses] = useState(initialExpenses);
  const [expenses, dispatch] = useReducer(expenseReducer, initialExpenses);

  function addExpense(title: string, amount: number) {
    dispatch({ type: "ADD_EXPENSE", payload: { title, amount } });
    /* setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        id: Math.random(),
        title,
        amount,
      },
    ]); */
  }

  function removeExpense(id: number) {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
    /* setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    ); */
  }

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
