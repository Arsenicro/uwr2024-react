import React, { useState } from "react";
import useMood from "../providers/MoodProvider/useMood";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

const NewMoodForm = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { addMood } = useMood();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMood({ name, color, theme });
    setName("");
    setColor("#000000");
    setTheme("light");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col">
      <div className="mb-2">
        <label htmlFor="mood_name" className="mr-2">
          Mood Name:
        </label>
        <Input
          id="mood_name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-1 border"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="mood_color" className="mr-2">
          Mood Color:
        </label>
        <Input
          id="mood_color"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="p-1 border"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="mood_theme" className="mr-2">
          Theme:
        </label>
        <Select
          id="mood_theme"
          data-testid="mood_theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value as "light" | "dark")}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </Select>
      </div>
      <Button type="submit">Add Mood</Button>
    </form>
  );
};

export default NewMoodForm;
