import { useState } from "react";
import useExpense from "../../providers/ExpenseProvider/useExpense";

export default function AddExpenseForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  const { addExpense } = useExpense();

  return (
    <div
      className="add-expense-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (title.trim() === "" || amount <= 0) {
          setError(true);
          return;
        }
        addExpense(title, amount);
        setTitle("");
        setAmount(0);
        setError(false);
      }}
    >
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
        />
        <button type="submit">Add Expense</button>
        {error && <p className="error">Error</p>}
      </form>
    </div>
  );
}
