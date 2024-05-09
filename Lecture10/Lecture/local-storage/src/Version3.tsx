import { useState } from "react";
import Slow from "./Slow";

function Version1() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); //być może antypatern

  //Pobranie
  //setTheme()

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div
      className={`${
        theme === "dark" ? "dark" : ""
      } bg-red-500 dark:bg-slate-700 min-h-screen`}
    >
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      <Slow />
    </div>
  );
}

export default Version1;
