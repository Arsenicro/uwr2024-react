import { nanoid } from "nanoid";
import { IBaseMood, IMood } from "../../types/Mood.types";
import { IMoodState } from "./MoodProvider.types";

export type MoodAction =
  | { type: "ADD_MOOD"; payload: IBaseMood }
  | {
      type: "SET_CURRENT_MOOD";
      payload: {
        moodId: IMood["id"];
      };
    };

export const moodReducer = (
  state: IMoodState,
  action: MoodAction
): IMoodState => {
  switch (action.type) {
    case "ADD_MOOD": {
      const id = nanoid();
      return {
        ...state,
        moods: [...state.moods, { ...action.payload, id }],
        currentMood: id,
      };
    }
    case "SET_CURRENT_MOOD":
      return {
        ...state,
        currentMood: state.moods.find(
          (mood) => mood.id === action.payload.moodId
        )
          ? action.payload.moodId
          : state.currentMood,
      };
    default:
      return state;
  }
};
