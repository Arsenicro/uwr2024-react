import { createContext, useReducer } from "react";
import { IBaseMood, IMood } from "../../types/Mood.types";
import { IMoodContext } from "./MoodProvider.types";
import { moodReducer } from "./MoodReducer";

export const MoodContext = createContext<IMoodContext | undefined>(undefined);

interface IProps {
  children: React.ReactNode;
}

const initialMoods: IMood[] = [
  {
    id: "1",
    name: "Happy",
    color: "yellow",
    theme: "light",
  },
  {
    id: "2",
    name: "Sad",
    color: "blue",
    theme: "dark",
  },
  {
    id: "3",
    name: "Angry",
    color: "red",
    theme: "dark",
  },
  {
    id: "4",
    name: "Excited",
    color: "green",
    theme: "light",
  },
];

function MoodProvider({ children }: IProps) {
  const [moodState, dispatch] = useReducer(moodReducer, {
    moods: initialMoods,
    currentMood: initialMoods[0].id,
  });

  const addMood = (mood: IBaseMood) => {
    dispatch({ type: "ADD_MOOD", payload: mood });
  };

  const setCurrentMood = (moodId: string) => {
    dispatch({ type: "SET_CURRENT_MOOD", payload: { moodId } });
  };

  const currentMood =
    moodState.moods.find((mood) => mood.id === moodState.currentMood) ||
    initialMoods[0];

  return (
    <MoodContext.Provider
      value={{
        availableMoods: moodState.moods,
        addMood,
        currentMood,
        setCurrentMood,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
}

export default MoodProvider;
