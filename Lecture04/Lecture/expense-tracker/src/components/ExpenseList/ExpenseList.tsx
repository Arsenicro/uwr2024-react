import useExpense from "../../providers/ExpenseProvider/useExpense";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

export default function ExpenseList() {
  const { expenses } = useExpense();
  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}
