import React from "react";
import { IMood } from "../types/Mood.types";

interface MoodItemProps {
  mood: IMood;
}

const MoodItem: React.FC<MoodItemProps> = ({ mood }) => {
  return (
    <li
      className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center justify-between shadow-md"
      style={{ borderColor: mood.color }}
    >
      <div className="flex items-center space-x-4">
        <span
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: mood.color }}
        ></span>
        <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {mood.color}
        </div>
        <span>{mood.name}</span>
      </div>
      <span className="text-sm">{mood.theme}</span>
    </li>
  );
};

export default MoodItem;
