import React from "react";
import { twMerge } from "tailwind-merge";
import MoodList from "./components/MoodList";
import MoodSelector from "./components/MoodSelector";
import NewMoodForm from "./components/NewMoodForm";
import useMood from "./providers/MoodProvider/useMood";

const App: React.FC = () => {
  const { currentMood } = useMood();

  return (
    <div
      className={twMerge(
        "min-h-screen flex flex-col items-center justify-center text-black dark:text-white",
        currentMood.theme === "dark" && "dark"
      )}
      style={{ backgroundColor: currentMood.color }}
    >
      <h1 className="text-3xl font-bold mb-4">Mood Tracker</h1>
      <MoodSelector />
      <NewMoodForm />
      <MoodList />
    </div>
  );
};

export default App;
