import useExpense from "../../providers/ExpenseProvider/useExpense";
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import ExpenseList from "../ExpenseList/ExpenseList";

export default function ExpenseTracker() {
  const { expenses } = useExpense();

  const totalAmount = expenses.reduce((value, curr) => curr.amount + value, 0);

  return (
    <div className="expense-tracker">
      <h3>Total Amount: {totalAmount}</h3>
      <AddExpenseForm />
      <ExpenseList />
    </div>
  );
}
