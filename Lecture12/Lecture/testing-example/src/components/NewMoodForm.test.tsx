import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { MoodContext } from "../providers/MoodProvider/MoodProvider";
import NewMoodForm from "./NewMoodForm";

test("Test NewMoodForm", () => {
  // Arrange

  const addMood = vi.fn();
  render(
    <MoodContext.Provider
      value={{
        addMood,
        availableMoods: [],
        currentMood: {
          id: "1",
          name: "",
          color: "",
          theme: "light",
        },
        setCurrentMood: () => {},
      }}
    >
      <NewMoodForm />
    </MoodContext.Provider>
  );

  fireEvent.change(screen.getByLabelText("Mood Name:"), {
    target: { value: "Sad" },
  });
  fireEvent.change(screen.getByLabelText("Mood Color:"), {
    target: { value: "#0000ff" },
  });
  fireEvent.change(screen.getByLabelText("Theme:"), {
    target: { value: "dark" },
  });
  fireEvent.click(screen.getByText("Add Mood"));

  expect(addMood).toHaveBeenCalledWith({
    name: "Sad",
    color: "#0000ff",
    theme: "dark",
  });
  // Act
  // Assert
});
