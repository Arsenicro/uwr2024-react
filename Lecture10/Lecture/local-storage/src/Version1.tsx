import { useLayoutEffect } from "react";
import Slow from "./Slow";

function Version1() {
  const toggleTheme = () => {
    const theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useLayoutEffect(() => {
    // Albo useEffect, ale wtedy jest migotanie
    // On jest dziwny, ale działa
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className={`bg-red-500 dark:bg-slate-700 min-h-screen`}>
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
