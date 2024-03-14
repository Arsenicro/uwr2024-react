import useExpense from "../../../providers/ExpenseProvider/useExpense";
import { IExpense } from "../../../types/Expense.type";

interface IProps {
  expense: IExpense;
}

export default function ExpenseItem({ expense }: IProps) {
  const { removeExpense } = useExpense();
  return (
    <div className="expense-item">
      <p>Title: {expense.title}</p>
      <p>Amount: {expense.amount}</p>
      <button className="remove" onClick={() => removeExpense(expense.id)}>
        Delete
      </button>
    </div>
  );
}
