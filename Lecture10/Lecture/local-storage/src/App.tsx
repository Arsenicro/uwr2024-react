function App() {
  const toggleTheme = () => {
    const theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const newTheme = theme === "light" ? "dark" : "light";

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`bg-slate-100 dark:bg-slate-700 min-h-screen`}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
