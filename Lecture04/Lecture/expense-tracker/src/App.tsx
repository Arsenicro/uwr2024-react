import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import ExpenseProvider from "./providers/ExpenseProvider/ExpenseProvider";

function App() {
  return (
    <div className="App">
      <ExpenseProvider>
        <ExpenseTracker />
      </ExpenseProvider>
    </div>
  );
}

export default App;
