import { describe, expect, test } from "vitest";
import { IBaseMood } from "../../types/Mood.types";
import { IMoodState } from "./MoodProvider.types";
import { MoodAction, moodReducer } from "./MoodReducer";

function add(a: number, b: number) {
  return a + b;
}

test("Add Test", () => {
  // Arrange

  const a = 1;
  const b = 2;

  // Act

  const result = add(a, b);

  // Assert

  expect(result).toBe(3);
});

describe("Mood Reducer Set Mood Action", () => {
  test("Mood Reducer sets current mood", () => {
    // Arrange
    const initialState: IMoodState = {
      moods: [
        {
          id: "1",
          name: "Happy",
          theme: "dark",
          color: "yellow",
        },
        {
          id: "2",
          name: "Sad",
          theme: "light",
          color: "blue",
        },
      ],
      currentMood: "1",
    };

    const action1: MoodAction = {
      type: "SET_CURRENT_MOOD",
      payload: {
        moodId: "2",
      },
    };

    const action2: MoodAction = {
      type: "SET_CURRENT_MOOD",
      payload: {
        moodId: "1",
      },
    };

    // Act
    const result1 = moodReducer(initialState, action1);
    const result2 = moodReducer(initialState, action2);

    // Assert
    expect(result1.currentMood).toBe("2");
    expect(result2.currentMood).toBe("1");
  });

  test("Mood Reducer does not change id when non existing one provided", () => {
    // Arrange
    const initialState: IMoodState = {
      moods: [
        {
          id: "1",
          name: "Happy",
          theme: "dark",
          color: "yellow",
        },
      ],
      currentMood: "1",
    };

    const action: MoodAction = {
      type: "SET_CURRENT_MOOD",
      payload: {
        moodId: "2",
      },
    };

    // Act
    const result = moodReducer(initialState, action);

    // Assert
    expect(result.currentMood).toBe("1");
  });
});

describe("Mood Reducer Add Mood Action", () => {
  test("Mood Reducer adds mood", () => {
    // Arrange
    const initialState: IMoodState = {
      moods: [
        {
          id: "1",
          name: "Happy",
          theme: "dark",
          color: "yellow",
        },
      ],
      currentMood: "1",
    };

    const newMood: IBaseMood = {
      name: "Sad",
      theme: "light",
      color: "blue",
    };

    const action: MoodAction = {
      type: "ADD_MOOD",
      payload: newMood,
    };

    // Act
    const result = moodReducer(initialState, action);

    // Assert
    expect(result.moods.length).toBe(2);
    /*     expect(result.moods[1].id).toBeDefined();
    expect(result.moods[1].name).toBe("Sad");
    expect(result.moods[1].theme).toBe("light");
    expect(result.moods[1].color).toBe("blue"); */
    expect(result.currentMood).toBe(result.moods[1].id);

    expect(result.moods[1]).toStrictEqual({
      id: expect.any(String),
      ...newMood,
    });
  });
});
