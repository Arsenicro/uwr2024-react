import { useContext } from "react";
import { MoodContext } from "./MoodProvider";

export default function useMood() {
  const context = useContext(MoodContext);

  if (!context) {
    throw new Error("useMood must be used within a MoodProvider");
  }

  return context;
}
