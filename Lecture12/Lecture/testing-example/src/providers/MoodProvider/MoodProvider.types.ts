import { IBaseMood, IMood } from "../../types/Mood.types";

export interface IMoodContext {
  availableMoods: IMood[];
  addMood: (mood: IBaseMood) => void;
  currentMood: IMood;
  setCurrentMood: (moodId: IMood["id"]) => void;
}

export interface IMoodState {
  moods: IMood[];
  currentMood: IMood["id"];
}
