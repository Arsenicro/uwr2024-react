import { useContext } from "react";
import { TextContext } from "./TextProvider";

export const useTextContext = () => {
  const context = useContext(TextContext);
  if (context === null) {
    throw new Error("useTextContext must be used within a TextProvider");
  }
  return context;
};
